function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины

    product = {id: id, title: title, count: count, price: price};
    let id;
    let title;
    let price;
    let count;
   
    let itemCountText = " ";
    itemCountText = itemCountText + Count;
    itemCountText = itemCountText + "×";
    itemCountText = itemCountText + Price;
    itemCountText = itemCountText + "₽ =";
    let sum = count * price;
    itemCountText = itemCountText = sum;
    itemCountText = itemCountText + " ₽";

    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
