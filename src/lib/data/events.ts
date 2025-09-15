export interface Event {
    // id: number;
    title: string;
    location?: string;
    description: string;
    start_date: Date;
    end_date?: Date;
    outcomes: string[];
    tools?: string[];
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
            description: "Working as a software engineer for the automotive industry, using Rust as my primary language of choice",
            outcomes: [
                "Designed and implemented a modern Warranty system, managing 5,000+ claims and over £1,500,000 worth of items",
                "Containerized application for consistent deployment on cloud services",
                "Developed various full-stack desktop applications targetting Windows, MacOS, and Linux to enhance the workflow of workers in the company",
                "Introduced IT solutions to a wide variety of business challenges, including: Spreadsheet manipulation, Text rendering for generated images, Video manipulation, Key logging, Financial analysis and projection, Cryptography-based authentication, and more",
            ],
            tools: ["SQL", "Rust", "Tauri", "Svelte", "Bash"],
            start_date: new Date(2024, 4),
        }
    ]
