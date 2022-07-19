import cors from "cors";
import express from "express";
import vendasRoutes from "./routes/vendasRoutes";

/* auxiliar do servidor */
const PORT = 8081;

/* inicializacao do express */
const server = express();

/* configuracoes da aplicacao */
server.use(express.json()); // permitir que leia json
server.use(cors());

/* configuracao de rotas */
server.use(vendasRoutes);

/* inicializacao do servidor */
server.listen(`${PORT}`, () => {
    console.log(`Server Rodando na porta: ${PORT}`);
});
