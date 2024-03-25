import { hotels } from "@/app/Schema";



export interface initialState  {
    hotels: hotels[],
    totalNoHotels: number
}

// export const hotelsData: hotels[] = [
//     {
//         id: 1,
//         thumbnail: "/assets/antriksh-hotel-thumbnail.png",
//         photos: ["/assets/antariksh-hotel-room-1.png", "/assets/antariksh-hotel-room-2.png", "/assets/antriksh-hotel-room-3.png", "/assets/antriksh-hotel-exterior-5.png"],
//         name: "Antariksh Hotel at Neem Ka Thana",
//         address: "near arumbakkam metro station",
//         city: 'Neem Ka Thana',
//         state: "rajasthan",
//         price: 1700,
//         originalPrice: 3000,
//         rating: 4.9,
//         slug: "antariksh-hotel",
//     },
//     {
//         id: 2,
//         thumbnail: "/assets/antriksh-hotel-thumbnail.png",
//         photos: ["/assets/antariksh-hotel-room-1.png", "/assets/antariksh-hotel-room-2.png", "/assets/antriksh-hotel-room-3.png", "/assets/antriksh-hotel-exterior-5.png"],
//         name: "Antariksh Hotel at Neem Ka Thana",
//         address: "near arumbakkam metro station",
//         city: 'Neem Ka Thana',
//         state: "rajasthan",
//         price: 1700,
//         originalPrice: 3000,
//         rating: 4.9,
//         slug: "antariksh-hotel",
//     },
//     {
//         id: 3,
//         thumbnail: "/assets/antriksh-hotel-thumbnail.png",
//         photos: ["/assets/antariksh-hotel-room-1.png", "/assets/antariksh-hotel-room-2.png", "/assets/antriksh-hotel-room-3.png", "/assets/antriksh-hotel-exterior-5.png"],
//         name: "Antariksh Hotel at Neem Ka Thana",
//         address: "near arumbakkam metro station",
//         city: 'Neem Ka Thana',
//         state: "rajasthan",
//         price: 1700,
//         originalPrice: 3000,
//         rating: 4.9,
//         slug: "antariksh-hotel",
//     },
//     {
//         id: 4,
//         thumbnail: "/assets/antriksh-hotel-thumbnail.png",
//         photos: ["/assets/antariksh-hotel-room-1.png", "/assets/antariksh-hotel-room-2.png", "/assets/antriksh-hotel-room-3.png", "/assets/antriksh-hotel-exterior-5.png"],
//         name: "Antariksh Hotel at Neem Ka Thana",
//         address: "near arumbakkam metro station",
//         city: 'Neem Ka Thana',
//         state: "rajasthan",
//         price: 1700,
//         originalPrice: 3000,
//         rating: 4.9,
//         slug: "antariksh-hotel",
//     },
//     {
//         id: 5,
//         thumbnail: "/assets/antriksh-hotel-thumbnail.png",
//         photos: ["/assets/antariksh-hotel-room-1.png", "/assets/antariksh-hotel-room-2.png", "/assets/antriksh-hotel-room-3.png", "/assets/antriksh-hotel-exterior-5.png"],
//         name: "Antariksh Hotel at Neem Ka Thana",
//         address: "near arumbakkam metro station",
//         city: 'Neem Ka Thana',
//         state: "rajasthan",
//         price: 1700,
//         originalPrice: 3000,
//         rating: 4.9,
//         slug: "antariksh-hotel",
//     },
// ]