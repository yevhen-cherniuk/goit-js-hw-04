// Необходимо написать логику обработки заказа пиццы.
// Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName,
// метод order должен возвращать результат вызова колбэка onError,
// передавая ему аргументом строку 'В ассортименте нет пиццы с названием <имя пиццы>.'

// Если в свойстве pizzas есть пицца с названием из параметра pizzaName,
// метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.

const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  order(pizzaName,onSuccess,onError) {
  if (this.pizzas.includes(pizzaName)){
  return onSuccess(pizzaName);
  }
    return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
  },
};
  
// Пиши код выше этой строки

// Колбэк для onSuccess
function makePizza(pizzaName) {
  return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}

// Колбэк для onError
function onOrderError(error) {
  return `Ошибка! ${error}`;
}

// Вызовы метода с колбэками

console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));
console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
console.log(pizzaPalace.order('Венская', makePizza, onOrderError));
