import express from "express";
import vendasRoutes from "./routes/vendasRoutes";

const PORT = 8081;

const server = express();

/* configuracoes da aplicacao */
server.use(express.json()); // permitir que leia json

/* configuracao de rotas */
server.use(vendasRoutes);

server.listen(`${PORT}`, () => {
    console.log(`Server Rodando na porta: ${PORT}`);
});
