// [ VIII ]

let orders = [];

// додати нове замовлення в систему.
function addOrder(order) {
  orders.push(order);
  return console.log(`Заказ принят.`);
}

// розрахувати загальну суму замовлення для конкретного столу.
function getTotalAmount(tableNumber) {
  let total = 0;
  let found = orders.find((order) => order.table == tableNumber);
  found.dishes.forEach((elem) => {
    total += elem.price;
  });
  return console.log(`Сумма к оплате: ${total}`);
}

// змінити статус замовлення для конкретного столу.
function changeOrderStatus(tableNumber, status) {
  let found = orders.find((order) => order.table == tableNumber);
  found.status = status;
  return console.log(`Статус столика №${tableNumber} изменен на ${status}`);
}

// скасувати замовлення для конкретного столу (видалити його з системи)
function cancelOrder(tableNumber) {
  let del = orders.findIndex((order) => order.table == tableNumber);
  if (del !== -1) {
    orders.splice(del, 1);
  }
}

// Замовлення
let order1 = {
  table: 1,
  dishes: [
    { name: "Кава", price: 30 },
    { name: "Чізкейк", price: 50 },
  ],
  status: "в обробці",
};

let order2 = {
  table: 2,
  dishes: [
    { name: "Лате", price: 40 },
    { name: "Тірамісу", price: 60 },
  ],
  status: "готується",
};

// Запуск
addOrder(order1);
addOrder(order2);
getTotalAmount(2);
changeOrderStatus(2, "Готово");
cancelOrder(1);
