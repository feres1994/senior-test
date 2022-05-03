const getTicket = (products) => {
    const totalPrice = products.reduce((a,b) => a + (b.quantity * b.unitPrice), 0)

    return {
        products,
        totalPrice
    }
}

//for question one we can just put products array in this file then print the resut in the console
console.log(getTicket([{product: 'water', type: 'drinks', quantity: 10, unitPrice: 1},
{product: 'chicken wings', type: 'food', quantity: 3, unitPrice: 5},
{product: 'steak', type: 'food', quantity: 2, unitPrice: 9},
{product: 'coffee', type: 'drinks', quantity: 4, unitPrice: 2},
{product: 'wine bottle', type: 'drinks', quantity: 1, unitPrice: 7}]))


export default getTicket
