function price(books){
    const BASE_PRICE = 8;

    return books.length * BASE_PRICE;
}

export {price};