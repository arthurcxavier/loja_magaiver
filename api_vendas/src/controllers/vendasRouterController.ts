import { Request, Response, NextFunction } from "express";
import db from "../databases/postgres";
import DatabaseController from "./DatabaseController"

class vendasController {
    async mostrarVendas(request: Request, response: Response, next: NextFunction) {
        try{
            const rowList = await DatabaseController.findAllVendas();
            response.status(200).json(rowList);
        }catch(error){
            response.status(500).send(`Internal Server Error, o servidor encontrou uma condição inesperada e que o impediu de atender à solicitação.`)
            console.log(error);
        };
    };
    async addVenda(request: Request, response: Response, next: NextFunction) {
        try{
            const req = request.body;
            const number = await DatabaseController.addVenda(req);
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
    async RemoverVenda(request: Request<{id: string}>, response: Response, next: NextFunction){
        try{
            const id = request.params.id;
            await DatabaseController.deleteVenda(id);
            response.status(200).send('Venda deletada com sucesso!')
            ;
        }catch(error){
            console.log(error);
        };
    }
}

export default new vendasController();
