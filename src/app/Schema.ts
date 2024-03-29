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