// обьект для 3х валют
const RU_rates = {};

// значения курсов валют
const elementRU_USD = document.querySelector('[ data-value="RU_USD"]');
const elementRU_EUR = document.querySelector('[ data-value="RU_EUR"]');
const elementRU_BYN = document.querySelector('[ data-value="RU_BYN"]');

// поле с вводом суммы
const RU_input = document.querySelector('#RU_input');

// поля в выводом
const RU_result_USD = document.querySelector('#RU_result_USD');
const RU_result_EUR = document.querySelector('#RU_result_EUR');
const RU_result_BYN = document.querySelector('#RU_result_BYN');

get_RU_Currencies();

// функция отображения курса валют
async function get_RU_Currencies() {
    const responce = await fetch('https://www.cbr-xml-daily.ru/daily_json.js'); //получаем промис
    const data = await responce.json(); //распаковываем контент, получаем промис
    const result = data; //получаем js данные

    console.log(data);

    RU_rates.USD = result.Valute.USD;
    RU_rates.EUR = result.Valute.EUR;
    RU_rates.BYN = result.Valute.BYN;

    console.log(RU_rates);
    RU_result_USD.placeholder = RU_rates.USD.Value.toFixed(2);
    RU_result_EUR.placeholder = RU_rates.EUR.Value.toFixed(2);
    RU_result_BYN.placeholder = RU_rates.BYN.Value.toFixed(2);
}

// слушаем изменения в поле ввода и выборе валюты
RU_input.oninput = RU_valueConvert;

function RU_valueConvert() {
    console.log(RU_input.value)
    RU_result_USD.value = (parseFloat(RU_input.value) / RU_rates.USD.Value).toFixed(2);
    RU_result_EUR.value = (parseFloat(RU_input.value) / RU_rates.EUR.Value).toFixed(2);
    RU_result_BYN.value = (parseFloat(RU_input.value) / RU_rates.BYN.Value).toFixed(2);
}