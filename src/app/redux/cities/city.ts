import { hotels } from "../hotelLists/hotels";

export interface city{
    id: number,
    thumbnail?: string,
    name: string,
    totalNoHotels: number,
    avgPrice: string,
    hotels?: hotels[]
}