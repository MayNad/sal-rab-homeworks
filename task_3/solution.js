function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины


    let itemCountText = " ";
    itemCountText = itemCountText + product.count;
    itemCountText = itemCountText +  "×" ;
    itemCountText = itemCountText + product.Price;
    itemCountText = itemCountText + "₽ =";
    let sum = product.count * product.Price;
    itemCountText = itemCountText + sum;
    itemCountText = itemCountText + " ₽";

    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
