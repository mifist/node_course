export function GenerateData(dataAmount: number) { // Data (decimal)
    const localAmount: string | number = dataAmount;
    let length = 0;    // Base string length
    const products: Array<object> = [];

    do { // Grab each nibble in reverse order because JavaScript has no unsigned left shift

        products.push({
            name: `Product Name ${length}`,
            price: `${100 + length} $`
        });
        ++length; // Increment to length of string

    } while (length <= localAmount); // For next character shift right 4 bits, or break on 0

    return products; // return (hexadecimal);
}
