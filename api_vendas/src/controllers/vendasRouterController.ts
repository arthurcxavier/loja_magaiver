import { Request, Response, NextFunction } from "express";

class vendasController {
    mostrarVendas(request: Request, response: Response, next: NextFunction) {
        try{
            response.status(200).json({"mensagem": "tudo ok"});
        }catch(error){
            console.log(error);
        };
    };
    addVenda(request: Request, response: Response, next: NextFunction) {
        try{
            ;
        }catch(error){
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
