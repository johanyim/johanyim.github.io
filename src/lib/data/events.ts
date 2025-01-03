export interface Event {
    // id: number;
    title: string;
    location?: string;
    description: string;
    outcomes: string[];
    tools?: string[];
    start_date: Date;
    end_date?: Date;
}

export const events: Event[] =
    [
        {
            title: "Computer Science (MComp) Hons",
            location: "University of Bath",
            description: "My Master's degree at the University of Bath",
            start_date: new Date(2019, 9),
            end_date: new Date(2023, 5),
            outcomes: [
            ],
            tools: ["Functional Programming", "Machine Learning", "Data Science", "Computer Vision"],
        },

        {
            title: "Data Analyst / Receptionist",
            location: "Bath Royal Literary & Science Institution",
            description: "Applying programming and statistical knowledge to assist a charity as a volunteer data analyst and receptionist",
            start_date: new Date(2024, 1),
            end_date: new Date(2024, 4),
            outcomes: [
                "Actively investigated existing methods of data collection to identify potential inconsistencies",
                "Collaborated with team to implement corrective measures, ensuring data integrity and reliability",
                "Scanned, cleaned and processed 600+ lines of data using Linux core utilities",
                "Proposed a new schema for sales data collection, preparing for future analysis of customer data",
            ],
            tools: ["Linux", "awk", "sed", "Python", "Statistics"],
        },
        {
            title: "Software Developer",
            location: "BG Automotive",
            description: "Working as a backend engineer with Rust as the primary language for development",
            outcomes: [
                "Designed and implemented a bepoke warranty system, with emphasis on high performance",
                "Used database connection pooling and shared state semaphors to manage asynchronous access",
                "Applied knowledge of Rust's memory layout of types and ownership rules for highly performant execution speed",
                "Utilized knowledge of Rust's extensive type system and design patterns for type-safety and extensibility",
                "Containerized application for deployment on cloud services",
            ],
            tools: ["SQL", "Rust", "Tauri", "Svelte", "Azure"],
            start_date: new Date(2024, 4),
        }
    ]
