export interface Review {
    listing: string;
    location?: string;
    date: Date;
    rating: number;
    thumbnail?: string;
    href?: string;
}


export const reviews: Review[] = [
    {
        listing: "Rosarios",
        location: "Bath",
        date: new Date("2023-05-16"),
        rating: 5,
        thumbnail: "https://footprints-tours.com/wp-content/uploads/2018/12/Rosarios-Bath.jpg",
        href: "https://maps.app.goo.gl/66u9gCTgK6yYeDJH7"
    },

    {
        listing: "Pieminister",
        location: "Bath",
        date: new Date("2023-11-23"),
        rating: 5,
        thumbnail: "https://pieminister.co.uk/wp-content/uploads/2023/02/Bath-pics-74-scaled-e1675960663307.jpg",
        href: "https://maps.app.goo.gl/3XTy56p1WTxSDD2A6"
    },

    {
        listing: "The BOSS Barbers",
        location: "Bath",
        date: new Date("2024-05-21"),
        rating: 5,
        thumbnail: "https://static.wixstatic.com/media/ae8da0_afe98ad62343467487fc15afd3754a5a~mv2.jpg/v1/fill/w_652,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ae8da0_afe98ad62343467487fc15afd3754a5a~mv2.jpg",
        href: "https://maps.app.goo.gl/PircnHzB7jEkUXbc6"
    },

    {
        listing: "Roasties",
        location: "Cardiff",
        date: new Date("2024-11-13"),
        rating: 5,
        thumbnail: "https://lh3.googleusercontent.com/p/AF1QipNssY_MlQMUEX3zjZBEs_zCecZK4TbCwtjqj6kR=s1360-w1360-h1020",
        href: "https://maps.app.goo.gl/J4ocAiEwqrPsNqo8A"
    },


]



