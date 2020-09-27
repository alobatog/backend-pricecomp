import './warpig';
import './entrejuegos';
import entrejuegosScrapper from './entrejuegos';
import warpigScrapper from './warpig';

export default async function addProducts(){
    var entrejuegosGames = await entrejuegosScrapper();
    //var warpigGames = await warpigScrapper();
}