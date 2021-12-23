let xrp = new WebSocket('wss://stream.binance.com:9443/ws/xrpusdt@trade');
let stockPriceElement = document.getElementById('stock-price1');
let lastPrice = null;

xrp.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    stockPriceElement.innerText = `XRP: ${price}`;
    stockPriceElement.style.color = !lastPrice || lastPrice === price ? '#fff' : price > lastPrice ? 'green' : 'red';
    lastPrice = price;
}

let shib = new WebSocket('wss://stream.binance.com:9443/ws/shibusdt@trade');
let stockPriceElement2 = document.getElementById('stock-price2');
let lastPrice2 = null;

shib.onmessage = (event) => {
    let stockObject2 = JSON.parse(event.data);
    let price2 = parseFloat(stockObject2.p).toFixed(6);
    stockPriceElement2.innerText = "SHIB: " + price2;
    stockPriceElement2.style.color = !lastPrice2 || lastPrice2 === price2 ? '#fff' : price2 > lastPrice2 ? 'green' : 'red';
    lastPrice2 = price2;
}

let quant = new WebSocket('wss://stream.binance.com:9443/ws/qntusdt@trade');
let stockPriceElement3 = document.getElementById('stock-price3');
let lastPrice3 = null;

quant.onmessage = (event) => {
    let stockObject3 = JSON.parse(event.data);
    let price3 = parseFloat(stockObject3.p).toFixed(1);
    stockPriceElement3.innerText = "QUANT: " + price3;
    stockPriceElement3.style.color = !lastPrice3 || lastPrice3 === price3 ? '#fff' : price3 > lastPrice3 ? 'green' : 'red';
    lastPrice3 = price3;
}

let xlm = new WebSocket('wss://stream.binance.com:9443/ws/xlmusdt@trade');
let stockPriceElement4 = document.getElementById('stock-price4');
let lastPrice4 = null;

xlm.onmessage = (event) => {
    let stockObject4 = JSON.parse(event.data);
    let price4 = parseFloat(stockObject4.p).toFixed(2);
    stockPriceElement4.innerText = "XLM: " + price4;
    stockPriceElement4.style.color = !lastPrice4 || lastPrice4 === price4 ? '#fff' : price4 > lastPrice4 ? 'green' : 'red';
    lastPrice4 = price4;
}

let xrp2 = new WebSocket('wss://stream.binance.com:9443/ws/xrpusdt@trade');
let stockPriceElement5 = document.getElementById('stock-price5');
let lastPrice5 = null;

xrp2.onmessage = (event) => {
    let stockObject5 = JSON.parse(event.data);
    let price5 = parseFloat(stockObject5.p).toFixed(2);
    stockPriceElement5.innerText = `XRP: ${price5}`;
    stockPriceElement5.style.color = !lastPrice5 || lastPrice5 === price5 ? '#fff' : price5 > lastPrice5 ? 'green' : 'red';
    lastPrice5 = price5;
}

let shib1 = new WebSocket('wss://stream.binance.com:9443/ws/shibusdt@trade');
let stockPriceElement6 = document.getElementById('stock-price6');
let lastPrice6 = null;

shib1.onmessage = (event) => {
    let stockObject6 = JSON.parse(event.data);
    let price6 = parseFloat(stockObject6.p).toFixed(6);
    stockPriceElement6.innerText = "SHIB: " + price6;
    stockPriceElement6.style.color = !lastPrice6 || lastPrice6 === price6 ? '#fff' : price6 > lastPrice6 ? 'green' : 'red';
    lastPrice6 = price6;
}

let quant1 = new WebSocket('wss://stream.binance.com:9443/ws/qntusdt@trade');
let stockPriceElement7 = document.getElementById('stock-price7');
let lastPrice7 = null;

quant1.onmessage = (event) => {
    let stockObject7 = JSON.parse(event.data);
    let price7 = parseFloat(stockObject7.p).toFixed(1);
    stockPriceElement7.innerText = "QUANT: " + price7;
    stockPriceElement7.style.color = !lastPrice7 || lastPrice7 === price7 ? '#fff' : price7 > lastPrice7 ? 'green' : 'red';
    lastPrice7 = price7;
}

let xlm1 = new WebSocket('wss://stream.binance.com:9443/ws/xlmusdt@trade');
let stockPriceElement8 = document.getElementById('stock-price8');
let lastPrice8 = null;

xlm1.onmessage = (event) => {
    let stockObject8 = JSON.parse(event.data);
    let price8 = parseFloat(stockObject8.p).toFixed(2);
    stockPriceElement8.innerText = "XLM: " + price8;
    stockPriceElement8.style.color = !lastPrice8 || lastPrice8 === price8 ? '#fff' : price8 > lastPrice8? 'green' : 'red';
    lastPrice8 = price8;
}