
export function getRatingStatus(rating: string | number): string {
    if(typeof rating === 'string'){
        rating = Number(rating)
    }

    if(rating > 4.5){
        return "Fabulous"
    }else if(rating <= 4.5 && rating > 3.5){
        return "Very Good"
    }else if(rating <= 3.5 && rating > 3.0){
        return "Good"
    }else{
        return "Fair"
    }
}

export function getOffPercent(original: number | string, price: number | string) : number{
    if(typeof original === 'string'){
        original = Number(original)
    }
    if(typeof price === 'string'){
        price = Number(price)
    }

    let discount = ((price / original)*100);
    return (100 - Math.round(discount))
}

export function getSavingAmount(original: number | string, price: number | string) : number{
    if(typeof original === 'string'){
        original = Number(original)
    }
    if(typeof price === 'string'){
        price = Number(price)
    }

    let saving = (original-price);
    return Math.round(saving)
}
