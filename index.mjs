function price(books){
    const BASE_PRICE = 8;
    const DISCOUNTS = [0, 0, 0.05, 0.1, 0.2, 0.25].map(x => 1-x);

    const baskets = [];
    for(const book of books){
        let isBookAdded = false;
        for(const basket of baskets){
            if (!basket.includes(book)){
                basket.push(book);
                isBookAdded = true;
                break;
            }
        }
        if (!isBookAdded){
            baskets.push([book]);
        }
    }

    let totalPrice = 0;
    for(const basket of baskets){
        totalPrice += BASE_PRICE * basket.length * DISCOUNTS[basket.length];
    }

    return totalPrice;
}

export {price};