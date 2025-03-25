let tg = window.Telegram.WebApp;
tg.expand(); // Развернуть WebApp на весь экран

document.getElementById("orderBtn").addEventListener("click", function() {
    tg.sendData("Заказ оформлен!"); // Отправка данных в бот
});