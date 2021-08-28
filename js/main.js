$(document).ready(function () {
  var currentFloor = 2; //Объявляем переменные, текущее значение этажа//
  var counterUp = $(".counter-up"); //Объявление кнопки увеличения этажа//
  var counterDown = $(".counter-down"); //Объявление кнопки уменьшения этажа//
  var floorPath = $(".home-image path"); //номер этажа в SVG//
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");
  var currentFlats = 1;
  var flatsPath = $(".flats path");
  var flatsPathItem = $(".flat-item a");

  // Объявление функции, которая выделяет этаж при наведении мышью на него//
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); //Удаляем активный класс у этажей, чтобы выделение не оставалось//
    currentFloor = $(this).attr("data-floor"); //Получаеем значение текущего этажа//
    $(".counter").text(currentFloor);  //Записываем значение этажа в счетчик справа//

  });

  flatsPath.on("mouseover", function () {
    currentFlats = $(this).attr("data-flats");
    flatsPath.removeClass("current-flats");
    flatsPathItem.removeClass("current-flats-item");
    $(`[data-flats=${currentFlats}]`).toggleClass("current-flats");
    $(`[data-item=${currentFlats}]`).toggleClass("current-flats-item");

  })

  flatsPathItem.on("mouseover", function () {
    currentFlats = $(this).attr("data-item");
    flatsPath.removeClass("current-flats");
    flatsPathItem.removeClass("current-flats-item");
    $(`[data-flats=${currentFlats}]`).toggleClass("current-flats");
    $(`[data-item=${currentFlats}]`).toggleClass("current-flats-item");

  })

  
  floorPath.on('click', toggleModal);
  
  modalCloseButton.on('click', toggleModal);
  
  viewFlatsButton.on('click', toggleModal);

  // Отслеживаем клик по кнопке вверх//
  counterUp.on("click", function () {
    if (currentFloor < 18) {
      //Проверяем значение этажа, оно не должно быть больше 18//
      currentFloor++; //Увеличиваем значение этажа до тех пор пока значение не станет 18//
      usCurrentFloor = currentFloor.toLocaleString("en-Us", {
        minimumIntegerDigits: 2, useGrouping: false
      }); // Производим форматирование переменной, чтобы вместо значения 1,2 выдавало значение 01,02//
      $(".counter").text(usCurrentFloor); //Записываем значение этажа в счетчик справа//
      floorPath.removeClass("current-floor"); //Удаляем активный класс у этажей, чтобы не было подсветки без наведения//
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //Подсвечиваем текущий этаж//
    }
    
  });
  //Отслеживание клика кнопки вниз//
  counterDown.on("click", function () {
    if (currentFloor > 2) {
      //Проверка текущего значения этажа, значение не может быть меньше 2//
      currentFloor--; // Уменьшение этажа до того,пока значние не станет 2//
      usCurrentFloor = currentFloor.toLocaleString("en-Us", {
        minimumIntegerDigits: 2, useGrouping: false
      }); //Форматирование значения из 1,2 в 01,02//
      $(".counter").text(usCurrentFloor); //Запись этажа в счетчик справа//
      floorPath.removeClass("current-floor"); //Удаление активного класса во избежание подсветски без наведения//
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //Подсветка текущего этажа//
    }
  });
  function toggleModal() {
    modal.toggleClass('is-open');
  }
});