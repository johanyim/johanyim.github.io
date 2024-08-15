export interface Review {
    location: string;
    date: Date;
    rating: number;
    href?: string;
}


// TODO: add more reviews and urls
export const reviews: Review[] = [
    {
        location: "The BOSS Barbers",
        date: new Date("2023-01-01"),
        rating: 1,

    }
]



