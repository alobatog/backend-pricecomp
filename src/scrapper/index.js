import entrejuegosScrapper from './entrejuegos';
import warpigScrapper from './warpig';

const models = require('../db/models');

const addStoreInfo = async (games, store) => {
    for (var key in games){
        const name = games[key].name.trim();
        const { id } = await models.Game.findOne({ where: {lowerName: name.toLowerCase()} });
        try{
            await models.StoreInfo.create({ ...games[key], gameId:id, store});
        } catch(error){
            console.log(error);
        }
    }
}

const addGames = async (games) => {
    for (var key in games){
        const name = games[key].name.trim();
        const game = await models.Game.findOne({ where: {lowerName: name.toLowerCase()} });
        if (!(game)) {
            try{
                await models.Game.create({name, lowerName: name.toLowerCase()});
            } catch(error){
                console.log(error);
            }
        };
    }
}

const addEntreJuegosGames = async () => {
    var entrejuegosGames = await entrejuegosScrapper();
    await addGames(entrejuegosGames);
    await addStoreInfo(entrejuegosGames, 'ENTREJUEGOS');
}

const addWarpigGames = async () => {
    var warpigGames = await warpigScrapper();
    await addGames(warpigGames);
    await addStoreInfo(warpigGames, 'WARPIG');
}

export default async function addData(){
   await addEntreJuegosGames();
   await addWarpigGames();
}