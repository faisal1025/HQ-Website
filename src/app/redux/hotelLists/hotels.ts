export interface hotels{
    id: number,
    thumbnail: string,
    photos: string[],
    name: string,
    price: number | string,
    rating: number | string,
    reviews?: string[]
}