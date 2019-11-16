class ShoppingCart {
    constructor (){
        this.items = []
        }
        
    getItems(){ 
        return this.items["test"]
        
    }
    
    addItem(name, quantity, price){ 
        this.items.push({
            name: name,
            quantity: quantity,
            pricePerUnit: price
        })
    }

    // clear()
    // {
    //     this.items = []
    // }

    // total()
    
    }
    
const cart = new ShoppingCart ()

module.exports = ShoppingCart

