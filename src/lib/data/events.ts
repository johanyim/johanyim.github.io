export interface Event {
    // id: number;
    title: string;
    company?: string;
    description: string;
    outcomes: string[];
    tools?: string[];
    start_date: Date;
    end_date?: Date;
}

export const events: Event[] =
    [
        // {
        //     title: "Junior Data Entry Operator",
        //     company: "Biciline",
        //     description: "Internship tasked in managing clients’ applications for our company’s service. Used SQL to input data efficiently and accurately into a NoSQL-based database. Collaborated effectively with team to prioritize tasks and streamline data entry processes. Developed strong communication skills for clear documentation and reporting of data entry activity logging. Refined business speaking tone to effectively and bilingually communicate with clients.",
        //     start_date: new Date(2016, 3),
        //     end_date: new Date(2016, 5),
        // },
        // {
        //     title: "Student Ambassador",
        //     company: "University of Bath",
        //     description: "Underwent student ambassador training, developing great communication skills. Tasked with speaking to future Computer Science students of the University of Bath. One month of intensive questioning, crowd management and student orientation. Gave a comprehensive overview of the University of Bath Computer Science BSc curriculum and events. Managed student orientation and their transition from secondary to higher education.",
        //     start_date: new Date(2019, 10),
        //     end_date: new Date(2019, 11),
        // },
        // {
        //     title: "Mathematics Tutor",
        //     company: "Action Tutoring",
        //     description: " Tasked in helping children from disadvantaged backgrounds with their mathematics education. Trained to deliver quality education, abiding to communication guidelines. Fully remote working. Designed a flexible learning curriculum tailored to their mathematics skill level. Pupils all scored above 80% in the following tests.",
        //     start_date: new Date(2021, 9),
        //     end_date: new Date(2022, 3),
        // },
        // {
        //     title: "Code Quality Evaluator",
        //     company: "DataAnnotation",
        //     description: "Providing human input on Large Language Models (LLMs). Tasked to utilize knowledge of Python programming to correct mistakes of AI generated code. Gained experience in using idiomatic Python coding conventions. Effective collaboration with team to prioritize and order tasks to be completed.",
        //     start_date: new Date(2024, 1),
        // },
        {
            title: "Data Analyst / Receptionist",
            company: "Bath Royal Literary & Science Institution",
            description: "Applying programming and statistical knowledge to assist a charity as a volunteer data analyst and receptionist",
            start_date: new Date(2024, 3),
            end_date: new Date(2024, 5),
            outcomes: [
                "Actively investigated existing methods of data collection to identify potential inconsistencies",
                "Collaborated with team to implement corrective measures, ensuring data integrity and reliability",
                "Simplified data collection scheme using forms",
                "Scanned, cleaned and processed 600+ lines of data using Linux core utilities",
                "Proposed a new schema for sales data collection, preparing for future analysis of customer data",
            ],
            tools: ["Linux", "awk", "sed"],
        },
        {
            title: "Software Developer",
            company: "BG Automotive",
            description: "Working as a backend engineer with Rust as the primary language for development",
            outcomes: [
                "Designed and implemented a bepoke warranty system, complete with user authentication and data encryption at high efficiency",
                "Learned to operate with SQL, and relevant SQL drivers",
                "Used database connection pooling and shared state semaphors to manage asynchronous access",
                "Applied knowledge of Rust's memory layout of types and ownership rules for highly performant execution speed",
                "Utilized knowledge of Rust's extensive type system and design patterns for type-safety and extensibility",
                "Containerized application for deployment on cloud services",
            ],
            tools: ["SQL", "Rust", "JavaScript", "React", "Docker", "Azure",],
            start_date: new Date(2024, 5),
        }
    ]
