import { IconNames } from "./custom-template/Amenities";

export interface city{
    id: number,
    thumbnail?: string,
    name: string,
    totalNoHotels: number,
    avgPrice: number,
    slug:string,
    hotels?: hotels[],
    updatedAt:string,
    createdAt:string,
    publishedAt:string,
}

export interface hotels{
    id: number,
    thumbnail: string,
    photos: string[],
    name: string,
    address: string,
    city: string,
    state: city,
    price: number | string,
    payableAmount: number | string,
    taxAndFee: number | string,
    rating: number | string,
    amenities?: amenities[],
    description: string,
    reviews?: string[],
    originalPrice: number | string,
    slug: string,
    updatedAt:string,
    createdAt:string,
    publishedAt:string,
}

export interface room{
    id: number,
    room_number: number,
    room_type: string,
    capacity: number,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    price: number,
    originalPrice: number | null
}

export interface amenities{
    id: number,
    icon: IconNames,
    text: string,
    updatedAt:string,
    createdAt:string,
    publishedAt:string,
}

export interface pagination {
    page: number,
    pageSize:  number,
    pageCount: number,
    total: number
}

export interface booking {
    id: number,
    razorpay_order_id: string,
    razorpay_payment_id: string,
    razorpay_signature: string,
    givenRooms: [],
    amount: number,
    checkin: string,
    checkout: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: null,
    Status: string,
    hotel: hotels
}