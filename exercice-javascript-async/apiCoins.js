const fetchCoins = async () => {
    const url = 'https://api.coincap.io/v2/assets';
    const requisicao = await fetch(url);
    const json = await requisicao.json();
    return json.data;
};

const listas = document.querySelector('#coins-list');
const listas2 = document.querySelector('#coins-list-2');

const createList = (text) => { 
    const list = document.createElement('li');
    list.innerText = text;
    return list;
};

const adicionaElemento = async () => {
    const array = await fetchCoins();
    array.forEach((element, i) => {
        if (i < 10) {
        const { name, symbol, priceUsd } = element;
        const fixo2 = parseFloat(priceUsd).toFixed(2);
        const texto = `${name} (${symbol}): ${fixo2}`;
        return listas.appendChild(createList(texto));
        }
    });
};

const conversor = async () => {
    const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest';  
    const endpoint = '/currencies/usd.min.json';
    const requisicao = await fetch(baseUrl + endpoint);
    const json = await requisicao.json();
    const bonoro = await json.usd.brl;
    return bonoro;
};

const convertidos = async () => {
    const array = await fetchCoins();
    const mult = await conversor();
    array.forEach((element, i) => {
        if (i < 10) {
        const { name, symbol, priceUsd } = element;
        const fixo2 = parseFloat(priceUsd * mult).toFixed(2);
        const texto = `${name} (${symbol}): ${fixo2}`;
        return listas2.appendChild(createList(texto));
        }
});
};

window.onload = async () => {
    await adicionaElemento();
    await convertidos();
    };
