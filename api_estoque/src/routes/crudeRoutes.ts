import { Request, Response, Router } from 'express';
import warehouseRepository from '../repositories/warehouseRepository';

const routes = Router();

routes.get('/items', async (req: Request, res: Response) => {
    try {
        const items = await warehouseRepository.getAllItems();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

routes.get('/items/:name', async (req: Request, res: Response) => {
    try {
        const name = req.params.name;
        const items = await warehouseRepository.getItemByName(name);
    
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ erro: 'Nome inválido' });
    }
});

routes.post('/items', async (req: Request, res: Response) => {
    try {
        const newItem =  req.body;
        const uuid = await warehouseRepository.postItem(newItem);
    
        return res.status(201).json({ message: 'O item foi adicionado com sucesso!' });
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

routes.put('/items/:uuid', async (req: Request, res: Response) => {
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

routes.delete('/items/:uuid', async (req: Request, res: Response) => {
    try {
        const uuid = req.params.uuid;

        await warehouseRepository.deleteItem(uuid);
    
        res.status(200).json({ message: 'Item deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

export default routes;