function price(books){
    const BASE_PRICE = 8;
    const DISCOUNTS = [0, 0, 0.05, 0.1, 0.2, 0.25].map(x => 1-x);

    const diffBooksLength = new Set(books).size;

    return books.length * BASE_PRICE * DISCOUNTS[diffBooksLength];
}

export {price};