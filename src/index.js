import app from './app';
import addProducts from './scrapper/index';

const cron = require("node-cron");
const PORT = 5000;

// // Scrapper se corre dos veces al día
// cron.schedule("* * */2 * *", () => {
//     addProducts();
// });
addProducts();

app.listen(PORT, () => {
    console.log(`Funcionando en port ${PORT}`);
})