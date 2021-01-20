"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    $.get('/fortune', (response) => {
        $('#fortune-text').html(response);
      });
    // TODO: get the fortune and show it in the #fortune-text div
}

$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, (res) => {
        $('#weather-info').html(res.forecast);
    });
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    const formData = {
        'melon-type': $('#melon-type-field').val(),
        'quantity': $('#qty-field').val()
    };

    $.post('/order-melons.json', formData,  => {
        console.log(formData);
    });
        
    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
    //{'code': result_code, 'msg': result_text}
    // $('#weather-info').html(res.forecast);
}


$("#order-form").on('submit', orderMelons);


