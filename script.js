let tg = window.Telegram.WebApp;
tg.expand(); // Развернуть WebApp на весь экран

document.getElementById("orderBtn").addEventListener("click", function() {
    tg.sendData("Заказ оформлен!"); // Отправка данных в бот
});
// Инициализация пустой корзины
let cart = [];
let totalPrice = 0;

// Функция для добавления товаров в корзину
function addToCart(itemName, price) {
    // Добавляем товар в корзину
    cart.push({ name: itemName, price: price });
    
    // Обновляем общий баланс
    totalPrice += price;
    
    // Обновляем отображение корзины
    updateCart();
}

// Функция для обновления отображения корзины
function updateCart() {
    // Получаем элемент корзины
    const cartItemsElement = document.getElementById("cart-items");
    const balanceElement = document.getElementById("balance");
    
    // Очищаем старые товары в корзине
    cartItemsElement.innerHTML = '';
    
    // Добавляем новые товары в корзину
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price}₽`;
        cartItemsElement.appendChild(li);
    });
    
    // Обновляем отображение баланса
    balanceElement.textContent = `${totalPrice}₽`;
}

// Функция для оформления заказа
function checkout() {
    if (cart.length === 0) {
        alert("Ваша корзина пуста! Добавьте товары в корзину.");
    } else {
        alert(`Ваш заказ на сумму ${totalPrice}₽ успешно оформлен!`);
        // Здесь можно добавить логику для отправки заказа на сервер или в Telegram-бот
        cart = [];
        totalPrice = 0;
        updateCart();  // Обновляем корзину после оформления
    }
}

// Функция для отображения выбранной категории
function showCategory(category) {
    // Скрываем все категории
    const categories = document.querySelectorAll('.category-content');
    categories.forEach(cat => cat.style.display = 'none');
    
    // Показываем выбранную категорию
    const selectedCategory = document.getElementById(category);
    if (selectedCategory) {
        selectedCategory.style.display = 'block';
    }
}
