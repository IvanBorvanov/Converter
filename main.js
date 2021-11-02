//создаю обьект для трех валют
const rates = {};

// нахожу на странице значения курсов валют,  обьявляю их
const elementUSD = document.querySelector('[ data-value="USD"]');
const elementEUR = document.querySelector('[ data-value="EUR"]');
const elementRUB = document.querySelector('[ data-value="100 RUB"]');

// обьявляю ввод суммы, поле с результатом, выбор валюты
const input = document.querySelector('#input');
const result = document.querySelector('#result');
const select = document.querySelector('#select');

getCurrencies();

// функция отображения курса валют
async function getCurrencies() {
    const responce = await fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0') ; //получаем промис
    const data = await responce.json(); //распаковываем контент, получаем промис
    const result = data; //получаем js данные

    rates.USD = result[5];
    rates.EUR = result[6];
    rates.RUB = result[17];

    console.log(rates);

    // подставляем значения курсов в поля верстки
    elementUSD.textContent = rates.USD.Cur_OfficialRate.toFixed(2);
    elementEUR.textContent = rates.EUR.Cur_OfficialRate.toFixed(2);
    elementRUB.textContent = rates.RUB.Cur_OfficialRate.toFixed(2);

    rates.RUB.Cur_OfficialRate = rates.RUB.Cur_OfficialRate / 100;
}

// слушаем изменения в поле ввода и выборе валюты
input.oninput = valueConvert;
select.oninput = valueConvert;

// функция конвертации
function valueConvert() {
    result.value = (parseFloat(input.value) / rates[select.value].Cur_OfficialRate).toFixed(2);
}


    




