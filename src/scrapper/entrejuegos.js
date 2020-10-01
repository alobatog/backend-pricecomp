import {fetchHtml} from './helpers';

const URL = 'https://entrejuegos.cl';

function getPageInfo(data, games){
    data.forEach(game => {
        var discount = game.discount_amount;
        var name = game.name;
        games[name] = {
            name,
            link: game.url,
            price: game.price_amount,
            imgLink: game.cover.large.url,
            discount: discount ? discount : 0,
            available: true
        }
    });
    return games;
}

async function entrejuegosScrapper(){
    console.log("ENTREJUEGOS")
    var games = {};
    try{
        var data = await fetchHtml(`${URL}/253-juego-de-mesa`);
        const numOfPages = data.pagination.pages_count;
        console.log("aqui")
        for (var i = 1; i < numOfPages + 1; i++){
            console.log("page: ", i)
            data = await fetchHtml(`${URL}/253-juego-de-mesa?page=${i}`);
            games = getPageInfo(data.products, games);
        }
    } catch(error){
        console.log(error);
    }
    return games;
}

export default entrejuegosScrapper;