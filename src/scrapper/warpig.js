import {parseDiscount, parsePrice, fetchHtml} from './helpers';

const $ = require("cheerio");

var URL = 'https://www.warpig.cl';

const gameName = (html) => $('a', html).attr('title');

const gameLink = (html) => `${URL}${$('a', html).attr('href')}`;

const gamePrice = (html) => parsePrice($('div.bs-product-final-price', html).text());

const gameImgLink= (html) => $('picture img', html).first().data('src');

const gameDiscount = (html) => {
    if ($('div.bs-discount.tag', html).length){
        return parseDiscount($('div.bs-discount.tag span', html).text())
    }
    return 0;
}

const gameAvailable = (html) => {
    if ($('div.bs-stock', html).length) return false;
    return true;
}

function getPageInfo(pageHtml, games){
    // Se itera por cada producto en la página
    $('div.bs-product', pageHtml).each(function() {
        var name = gameName(this);
        if (!(name in games)) {
            games[name] = {
                name,
                link: gameLink(this),
                price: gamePrice(this),
                imgLink: gameImgLink(this),
                discount: gameDiscount(this),
                available: gameAvailable(this)
            }
        }
    });
    return games
}

async function warpigScrapper(){
    var html = await fetchHtml(`${URL}/collection/juegos-de-mesa`);
    const numOfPages = $('div.bs-pagination ul li', html).length - 1;
    var games = {};
    for (var i = 1; i < numOfPages + 1; i++){
        html = await fetchHtml(`${URL}/collection/juegos-de-mesa?page=${i}`);
        games = getPageInfo(html, games);
    }
    return games;
}


export default warpigScrapper;
