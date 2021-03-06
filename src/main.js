
import "regenerator-runtime/runtime.js";

//создаю обьект для 10ти валют
const rates = {};

// нахожу на странице значения курсов валют,  обьявляю их
const elementUSD = document.querySelector('[ data-value="USD"]');
const elementEUR = document.querySelector('[ data-value="EUR"]');
const elementRUB = document.querySelector('[ data-value="100 RUB"]');
const elementKZT = document.querySelector('[ data-value="KZT"]');
const elementUAH = document.querySelector('[ data-value="UAH"]');
const elementPLN = document.querySelector('[ data-value="PLN"]');
const elementCNY = document.querySelector('[ data-value="CNY"]');
const elementJPY = document.querySelector('[ data-value="JPY"]');
const elementTRY = document.querySelector('[ data-value="TRY"]');
const elementDKK = document.querySelector('[ data-value="DKK"]');

// обьявляю ввод суммы, поля с результатами
const input = document.querySelector('#input');

const result_USD = document.querySelector('#result_USD');
const result_EUR = document.querySelector('#result_EUR');
const result_RUB = document.querySelector('#result_RUB');
const result_KZT = document.querySelector('#result_KZT');
const result_UAH = document.querySelector('#result_UAH');
const result_PLN = document.querySelector('#result_PLN');
const result_CNY = document.querySelector('#result_CNY');
const result_JPY = document.querySelector('#result_JPY');
const result_TRY = document.querySelector('#result_TRY');
const result_DKK = document.querySelector('#result_DKK');

getCurrencies();

// функция отображения курса валют
async function getCurrencies() {
    const responce = await fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0') ; //получаем промис
    const data = await responce.json(); //распаковываем контент, получаем промис
    const result = data; //получаем js данные

    console.log(data);

    rates.USD = result[5]; // USD
    rates.EUR = result[6]; // EUR
    rates.RUB = result[17]; // RUB
    rates.KZT = result[21]; // KZT
    rates.UAH = result[3]; // UAH
    rates.PLN = result[7]; // PLN
    rates.CNY = result[12]; // CNY
    rates.JPY = result[8]; // JPY
    rates.TRY = result[22]; // TRY
    rates.DKK = result[4]; // DKK

    console.log(rates);

    // подставляем значения курсов в поля верстки
    elementUSD.textContent = rates.USD.Cur_OfficialRate.toFixed(2);
    elementEUR.textContent = rates.EUR.Cur_OfficialRate.toFixed(2);
    elementRUB.textContent = rates.RUB.Cur_OfficialRate.toFixed(2);
    elementKZT.textContent = rates.KZT.Cur_OfficialRate.toFixed(2);
    elementUAH.textContent = rates.UAH.Cur_OfficialRate.toFixed(2);
    elementPLN.textContent = rates.PLN.Cur_OfficialRate.toFixed(2);
    elementCNY.textContent = rates.CNY.Cur_OfficialRate.toFixed(2);
    elementJPY.textContent = rates.JPY.Cur_OfficialRate.toFixed(2);
    elementTRY.textContent = rates.TRY.Cur_OfficialRate.toFixed(2);
    elementDKK.textContent = rates.DKK.Cur_OfficialRate.toFixed(2);

    rates.RUB.Cur_OfficialRate = rates.RUB.Cur_OfficialRate / 100;
}

// слушаем изменения в поле ввода и выборе валюты
input.oninput = valueConvert;

// функция конвертации
function valueConvert() {
    result_USD.value = (parseFloat(input.value) / rates.USD.Cur_OfficialRate).toFixed(2);
    result_EUR.value = (parseFloat(input.value) / rates.EUR.Cur_OfficialRate).toFixed(2);
    result_RUB.value = (parseFloat(input.value) / rates.RUB.Cur_OfficialRate).toFixed(2);
    result_KZT.value = (parseFloat(input.value) / rates.KZT.Cur_OfficialRate).toFixed(2);
    result_UAH.value = (parseFloat(input.value) / rates.UAH.Cur_OfficialRate).toFixed(2);
    result_PLN.value = (parseFloat(input.value) / rates.PLN.Cur_OfficialRate).toFixed(2);
    result_CNY.value = (parseFloat(input.value) / rates.CNY.Cur_OfficialRate).toFixed(2);
    result_JPY.value = (parseFloat(input.value) / rates.JPY.Cur_OfficialRate).toFixed(2);
    result_TRY.value = (parseFloat(input.value) / rates.TRY.Cur_OfficialRate).toFixed(2);
    result_DKK.value = (parseFloat(input.value) / rates.DKK.Cur_OfficialRate).toFixed(2);
}


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

import './styles/converter.css'
import './styles/media.css'


    




