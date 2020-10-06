import { Router } from 'express';

const models = require('../db/models');
const router = Router();
const STORES = ['ENTREJUEGOS', 'WARPIG'];

const lowerPrice = (storesInfo) => {
    var lowest = { price: Number.POSITIVE_INFINITY, index: -1};
    for (var i = 0; i < storesInfo.length; i++){
        var  { price } = storesInfo[i].todayInfo;
        if (price < lowest.price){
            lowest.price = price;
            lowest.index = i
        }
    }
    return lowest.index;
}

const gameAvailable = (storesInfo) => {
    for (var i = 0; i < storesInfo.length; i++){
        var  { available } = storesInfo[i].todayInfo;
        if (available) return true;
    }
    return false;
}

const getStoresInfo = async (gameId, stores) => {
    var storesInfo = [];
    for(var i = 0; i < stores.length; i++){
        const info = await models.StoreInfo.findAll({ where: {gameId: gameId, store: stores[i]},
                                                      order: [['createdAt', 'DESC']] });
        var todayInfo = info[0];
        var historyPrices = info.map(x => ({ price: x.price, date: x.createdAt}));
        if (todayInfo) storesInfo.push({store: stores[i], todayInfo, historyPrices});
    }
    return storesInfo;
}

router.get('/', async (req, res) => {
    var response = [];
    const games = await models.Game.findAll({order: [['lowerName', 'ASC']]});
    for(var i = 0; i < games.length; i++){ 
        var storesInfo = await getStoresInfo(games[i].id, STORES);
        var lowestIndex = lowerPrice(storesInfo);
        var available = gameAvailable(storesInfo);
        var gameInfo = storesInfo[lowestIndex].todayInfo;
        response.push({id: games[i].id,
                       name: games[i].name,
                       price: gameInfo.price,
                       discount: gameInfo.discount,
                       imgLink: gameInfo.imgLink,
                       available});
    }
    res.json({games: response});
});


// ver si arreglar el json que retorn
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const game = await models.Game.findOne({ where: {id} });
    var storesInfo = await getStoresInfo(id, STORES);
    var lowestIndex = lowerPrice(storesInfo);
    var available = gameAvailable(storesInfo)
    res.json({
        id,
        name: game.name,
        available,
        lowestIndex,
        storesInfo});
});

export default router;