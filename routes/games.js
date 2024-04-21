const { sendAllGames, deleteGame ,addGameController} = require("../controllers/games");
const { getAllGames } = require("../middlewares/games");

// routes/games.js
const gamesRouter = require("express").Router(); // Создали роутер




gamesRouter.post("/games",getAllGames, addGameController)
gamesRouter.get("/games", getAllGames,sendAllGames)
gamesRouter.delete("/games/:id",getAllGames, deleteGame);

module.exports = gamesRouter;