const axios = require("axios");

export function parsePrice(price){
    price = price.replace('$', '').replace(/\.|$/g, '');
    return parseInt(price.trim());
}

export function parseDiscount(discount){
    discount = discount.replace('$', '').replace(/\-/g, '');
    return parseFloat(discount.trim()) / 100;
}

export async function fetchHtml(url){
    const { data } = await axios.get(url);
    return data;
}
