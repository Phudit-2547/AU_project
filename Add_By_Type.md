## Your Goal: Add Up Only Pizza Orders
Modify the `numberOfPizzas` function to only count `pizzas` when the `order.type` is equal to `ORDER_TYPES.PIZZA.`

The orders will have a `type` keyword:
```Js
const orders = [
    { pizzas: 3, type: ORDER_TYPES.PIZZA },
    { wings: 12, type: ORDER_TYPES.WINGS },
];
```
:point_up: In this example we would only sum up pizzas from the first order!
```js
const totalPizzas = numberOfPizzas(orders);
console.log( totalPizzas ); // 3
```
