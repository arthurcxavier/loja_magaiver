import { Request, Response, NextFunction } from "express";
import vendaController from "./DatabaseController"

class vendasController {
    async mostrarVendas(request: Request, response: Response, next: NextFunction) {
        try{
            const rowList = await vendaController.findAllVendas();
            response.status(200).json(rowList);
        }catch(error){
            response.status(500).send(`Internal Server Error, o servidor encontrou uma condição inesperada e que o impediu de atender à solicitação.`)
            console.log(error);
        };
    };
    async addVenda(request: Request, response: Response, next: NextFunction) {
        try{
            const req = request.body;
            const number = await vendaController.addVenda(req);
            response.status(201).json({ "mensagem": `foi add venda com token: ${number}` });
        }catch(error){
            response.status(400).send("Bad Request, o servidor não entendeu a requisição pois está com uma sintaxe inválida.");
            console.log(error);
        };
    }
    alterarVenda(request: Request, response: Response, next: NextFunction){
        try{
            ;
        }catch(error){
            console.log(error);
        };
    }
    RemoverVenda(request: Request, response: Response, next: NextFunction){
        try{
            ;
        }catch(error){
            console.log(error);
        };
    }
}

export default new vendasController();
