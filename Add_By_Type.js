function numberOfPizzas(orders) {
    const ORDER_TYPES = require('./orderTypes');
    let total = 0
    for(let i=0;i<orders.length;++i){
        if (orders[i].type === ORDER_TYPES.PIZZA){ //KEY: DO NOT FORGOT [i] for many orders
            total += orders[i].pizzas
        }
    }
    return total
}
