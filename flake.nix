{
  description = "Flake containing VuePress infrastructure";

  # Inputs
  inputs = {
    # Use the NixOS 24.05 branch
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05";

    # flake-utils for cross-platform support
    flake-utils.url = "github:numtide/flake-utils";
  };

  # Outputs
  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; }; # Import nixpkgs for the current system
      in
      {
        # Define the development shell
        devShells = {
          default = pkgs.mkShell {
            # Install Node.js (default version from nixpkgs 24.05)
            buildInputs = [
              pkgs.nodejs # Default Node.js package (from NixOS 24.05)
            ];

            # Automatically run npm install when entering the shell
            shellHook = ''
              if [ ! -d "node_modules" ]; then
                echo "Installing npm dependencies..."
                npm install
              fi
              echo "SvelteKit development environment is ready"
              echo -e "\e[1;32mTo start the dev server, run: npm run docs:dev\e[0m"
            '';
          };
        };

        # # Define a package for building the VuePress site
        # packages = {
        #   default = pkgs.stdenv.mkDerivation {
        #     pname = "mydocs";
        #     version = "0.0.1";
        #
        #     # src = ./.;
        #
        #     # Build VuePress using npm
        #     buildPhase = ''
        #       npm install
        #       npm run build
        #     '';
        #
        #     installPhase = ''
        #       mkdir -p $out
        #       cp -r .vuepress/dist/* $out/
        #     '';
        #
        #     meta = with pkgs.lib; {
        #       description = "VuePress documentation static site";
        #       license = licenses.mit;
        #       platforms = platforms.all;
        #     };
        #   };
        # };
      }
    );
}
