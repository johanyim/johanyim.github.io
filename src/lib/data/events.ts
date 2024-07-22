export interface Event {
    // id: number;
    title: string;
    company?: string;
    description: string;
    start_date: Date;
    end_date?: Date;
}

export const events: Event[] =
    [
        {
            title: "Junior Data Entry Operator",
            company: "Biciline",
            description: "Internship tasked in managing clients’ applications for our company’s service. Used SQL to input data efficiently and accurately into a NoSQL-based database. Collaborated effectively with team to prioritize tasks and streamline data entry processes. Developed strong communication skills for clear documentation and reporting of data entry activity logging. Refined business speaking tone to effectively and bilingually communicate with clients.",
            start_date: new Date(2016, 3),
            end_date: new Date(2016, 5),
        },
        {
            title: "Student Ambassador",
            company: "University of Bath",
            description: "Underwent student ambassador training, developing great communication skills. Tasked with speaking to future Computer Science students of the University of Bath. One month of intensive questioning, crowd management and student orientation. Gave a comprehensive overview of the University of Bath Computer Science BSc curriculum and events. Managed student orientation and their transition from secondary to higher education.",
            start_date: new Date(2019, 10),
            end_date: new Date(2019, 11),
        },
        {
            title: "Mathematics Tutor",
            company: "Action Tutoring",
            description: " Tasked in helping children from disadvantaged backgrounds with their mathematics education. Trained to deliver quality education, abiding to communication guidelines. Fully remote working. Designed a flexible learning curriculum tailored to their mathematics skill level. Pupils all scored above 80% in the following tests.",
            start_date: new Date(2021, 9),
            end_date: new Date(2022, 3),
        },
        {
            title: "Code Quality Evaluator",
            company: "DataAnnotation",
            description: "Providing human input on Large Language Models (LLMs). Tasked to utilize knowledge of Python programming to correct mistakes of AI generated code. Gained experience in using idiomatic Python coding conventions. Effective collaboration with team to prioritize and order tasks to be completed.",
            start_date: new Date(2024, 1),
        },
        {
            title: "Data Management Volunteer / Receptionist",
            company: "Bath Royal Literary & Science Institution",
            description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
            start_date: new Date(2024, 3),
            end_date: new Date(2024, 5),
        },
        {
            title: "Software Developer",
            company: "BG Automotive",
            description: "Developing backend applications in Rust for car parts aftermarket",
            start_date: new Date(2024, 5),
        }
    ]
