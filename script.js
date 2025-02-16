// Получаем элементы для первого модального окна
var modal1 = document.getElementById("modal1");
var btn1 = document.getElementById("openModalBtn1");
var span1 = document.getElementsByClassName("close")[0];

// Получаем элементы для второго модального окна
var modal2 = document.getElementById("modal2");
var btn2 = document.getElementById("openModalBtn2");
var span2 = document.getElementsByClassName("close")[1];

// Открытие первого модального окна
btn1.onclick = function() {
    modal1.style.display = "block";
}

// Закрытие первого модального окна
span1.onclick = function() {
    modal1.style.display = "none";
}

// Открытие второго модального окна
btn2.onclick = function() {
    modal2.style.display = "block";
}

// Закрытие второго модального окна
span2.onclick = function() {
    modal2.style.display = "none";
}

// Закрытие модальных окон при клике вне их области
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}




var form = document.getElementById("callDoctorFormContent");

// Открытие формыs
btn.onclick = function() {
    modal.style.display = "block";
}

// Закрытие формы
span.onclick = function() {
    modal.style.display = "none";
}

// Закрытие формы при клике вне ее области
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Обработка отправки формы
form.onsubmit = function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Получаем данные из формы
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var symptoms = document.getElementById("symptoms").value;
    var notes = document.getElementById("notes").value;

    // Валидация данных (пример)
    if (!name || !phone || !address || !date || !time || !symptoms) {
        alert("Пожалуйста, заполните все обязательные поля.");
        return;
    }

    // Вывод данных в консоль (вместо отправки на сервер)
    console.log("Имя:", name);
    console.log("Телефон:", phone);
    console.log("Адрес:", address);
    console.log("Дата:", date);
    console.log("Время:", time);
    console.log("Симптомы:", symptoms);
    console.log("Примечания:", notes);

    // Очистка формы
    form.reset();

    // Закрытие модального окна
    modal.style.display = "none";

    // Уведомление пользователю
    alert("Ваша заявка на вызов врача успешно отправлена!");
}
