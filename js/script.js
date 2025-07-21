
// Создаем объект для хранения данных
var data = {};


document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию

  // Получаем значения полей формы
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let errorMessage = document.getElementById("error-message");

  // Проверка условий валидации
  if (name.trim() === '' || email.trim() === '' || phone.trim() === '') {
    errorMessage.textContent = "Please fill in all fields of the form";
    return false; // Отменяем отправку формы
  }

  // Проверка валидности email
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorMessage.textContent = "Enter a valid email-address";
    return false; // Отменяем отправку формы
  }

  let phonePattern = /^\+?3?8?(0\d{9})$/;
  if (!phonePattern.test(phone)) {
    errorMessage.textContent = "Enter a valid phone number";
    return false; // Отменяем отправку формы
  }

  // Получаем данные из формы
  let formData = new FormData(this);
  
  
  // Преобразуем данные формы в объект
  formData.forEach(function(value, key){
    data[key] = value;
  });

  processFormData(data);

  this.reset(); // Очишаємо поля форми відразу після її відправки
});


function processFormData(data) {
  console.log(data, 'ddd');  
}


function showInfo () {
  let showInfo = document.getElementById("show-info");

  for (let key in data) {
   showInfo.innerHTML += key + ': ' + data[key] + '<br>';
  }
}

function reloadPage() {
  location.reload();
}


let arr = new Array (1, 2, 3);
let arrays = ['ddd', 4, 're', {g:5}]
let arr1 = 23;
console.log(arrays);
console.log(arrays[3].g);
console.log(Array.isArray(arrays));