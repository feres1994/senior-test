const getTicket = (products) => {
    const totalPrice = products.reduce((a,b) => a + (b.quantity * b.unitPrice), 0)

    return {
        products,
        totalPrice
    }
}

//for question one we can just put products array in this file then print the resut in the console

export default getTicket