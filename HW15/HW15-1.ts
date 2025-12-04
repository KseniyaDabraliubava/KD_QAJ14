// Модифицировать функцию подсчета стоимости товаров из прошлого задания. Теперь для расчета стоимости,
// товары должны соответствовать хотя бы одному из условий:
// товар в наличии / стоимость товаров одного вида выше 500

type Purchases = {
    name: string;
    price: number;
    quantity: number;
    inStock: boolean;
}[];

const items: Purchases = [
    { name: 'lipstick', price: 150, quantity: 3, inStock: true },
    { name: 'mascara', price: 25, quantity: 1, inStock: false },
    { name: 'blush', price: 200, quantity: 7, inStock: true },
    { name: 'highlighter', price: 100, quantity: 2, inStock: false }
];

function calcTotalItemsSum(purchases: Purchases) {
    return purchases.reduce((total, item) => {
        let totalPrice = item.price * item.quantity;
        if (item.inStock || totalPrice > 500) {
            return total + totalPrice;
        }
        return total;
    }, 0);
}

console.log(calcTotalItemsSum(items));
