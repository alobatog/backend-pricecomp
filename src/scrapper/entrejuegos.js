import {fetchHtml} from './helpers';
const axios = require("axios");

const $ = require("cheerio");

const URL = 'https://entrejuegos.cl';

function getPageInfo(data, games){
    data.forEach(game => {
        var name = game.name;
        if (!(name in games)) {
            var discount = game.discount_amount;
            games[name] = {
                name,
                link: game.url,
                price: game.price_amount,
                imgLink: game.cover.medium.url,
                discount: discount ? discount : 0,
                available: true
            }
        }
    });
    return games;
}

async function entrejuegosScrapper(){
    var data = await fetchHtml(`${URL}/253-juego-de-mesa`);
    const numOfPages = data.pagination.pages_count;
    var games = {};
    for (var i = 1; i < numOfPages + 1; i++){
        data = await fetchHtml(`${URL}/253-juego-de-mesa?page=${i}`);
        games = getPageInfo(data.products, games);
    }
}

export default entrejuegosScrapper;