import warpigScrapper from './warpig';

export default async function addProducts(){
    var warpigGames = await warpigScrapper();
}