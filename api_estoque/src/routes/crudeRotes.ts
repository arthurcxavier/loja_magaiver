import { Request, Response, Router } from 'express';
import warehouseRepository from '../repositories/warehouseRepository';

const routes = Router();

routes.get('./itens', async (req: Request, res: Response) => {
    try {
        const itens = await warehouseRepository.getAllItens();
        res.status(200).json(itens);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

routes.get('./itens/:name', async (req: Request, res: Response) => {
    try {
        const name = req.params.name;
        const itens = await warehouseRepository.getItemByName(name);
    
        res.status(200).json(itens);
    } catch (error) {
        res.status(500).json({ erro: 'Nome inválido' });
    }
});

routes.post('./itens', async (req: Request, res: Response) => {
    try {
        const newItem =  req.body;
        const uuid = await warehouseRepository.postItem(newItem);
    
        return res.status(201).json({ message: `O item ${uuid} foi adicionado com sucesso!` });
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

routes.put('./itens/:uuid', async (req: Request, res: Response) => {
    try {
        const uuid = req.params.uuid;
        const editItem = req.body;
    
        editItem.uuid = uuid;
    
        await warehouseRepository.updateItem(editItem);
    
        res.status(200).json({ message: 'Item atualizado com sucesso!' })
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

routes.delete('./itens/:uuid', async (req: Request, res: Response) => {
    try {
        const uuid = req.params.uuid;

        await warehouseRepository.deleteItem(uuid);
    
        res.status(200).json({ message: 'Item deletado com sucesso!' });
    
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

export default routes;