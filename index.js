const express = require('express');
const app = express();

// Имитация базы данных: массив продуктов
const products = [
  { id: 1, name: 'Product 1', brand: 'Brand A' },
  { id: 2, name: 'Product 2', brand: 'Brand B' },
  { id: 3, name: 'Product 3', brand: 'Brand A' }
];

// Обработчик для главной страницы (GET /)
app.get('/', (request, response) => {
  response.send('response for GET request');
});

// Маршрут с параметром для фильтрации продуктов по бренду (GET /products/:brand)
app.get('/products/:brand', (req, res) => {
  const { brand } = req.params; // Получаем бренд из строки адреса

  // Фильтрация массива (только продукты с нужным брендом)
  const filteredProducts = products.filter(product => product.brand === brand);

  // Отправка результата обратно клиенту в формате JSON
  res.json(filteredProducts);
});

// Запуск сервера на порту 3000
app.listen(3000, () => {
  console.log('server start at http://localhost:3000/');
});
