class ShoppingCart {
    constructor (name, quantity, price){
        this.items = []
        this.name = name
        this.quantity = quantity
        this.price = price
        }
    
    addItem(name, quantity, price){ 
        this.items.push({
            name: name,
            quantity: quantity,
            price: price
        })
    }
    
    // getItem(){
    //     return this.items = []
    // }

    // total(totalPrice){
    //     const totalPrice = 0.00
    //     this.items.map(items =>{
    //         totalPrice += items.quantity.price
    //     })
    //     return totalPrice
    // }

    }
    
const cart = new ShoppingCart ("Heineken", "1", 5,99)

cart.addItem();


module.exports = ShoppingCart

