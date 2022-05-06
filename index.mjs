function price(books){
    const BASE_PRICE = 8;
    const DISCOUNTS = [0, 0, 0.05, 0.1, 0.2, 0.25];
    const DISCOUNT_PRICES = DISCOUNTS.map((v, i) => BASE_PRICE * i * v);
    const DISCOUNTS_DIFF = DISCOUNT_PRICES.slice(1).map((v, i) => v - DISCOUNT_PRICES[i]);

    const baskets = [[]];
    for(const book of books){
        let basketIndex = -1;
        let discountsDiff = -1;
        for(let i = 0; i < baskets.length; i++){
            const basket = baskets[i];
            if (!basket.includes(book) && DISCOUNTS_DIFF[basket.length] > discountsDiff){
                discountsDiff = DISCOUNTS_DIFF[basket.length];
                basketIndex = i;
            }
        }
        if (basketIndex !== -1){
            baskets[basketIndex].push(book);
        } else {
            baskets.push([book]);
        }
    }

    let totalPrice = 0;
    for(const basket of baskets){
        totalPrice += BASE_PRICE * basket.length * (1-DISCOUNTS[basket.length]);
    }

    return totalPrice;
}

export {price};