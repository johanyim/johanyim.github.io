use std::process::Command;

fn main() {
    println!("cargo:rerun-if-changed=../frontend"); // Watch for changes

    // Run `npm run build` in the frontend directory
    let status = Command::new("npm")
        .args(&["run", "build"])
        .current_dir("../frontend")
        .status()
        .expect("Failed to run npm build");

    if !status.success() {
        panic!("npm run build failed");
    }
}
