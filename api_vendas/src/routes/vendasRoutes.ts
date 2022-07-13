import { Request, Response, NextFunction, Router } from "express";
import vendasRouterController from "../controllers/vendasRouterController";

const vendasRoutes = Router();

vendasRoutes.get("/", vendasRouterController.mostrarVendas);
vendasRoutes.post("/", vendasRouterController.addVenda);
vendasRoutes.put("/", vendasRouterController.alterarVenda);
vendasRoutes.delete("/", vendasRouterController.RemoverVenda);

export default vendasRoutes;
