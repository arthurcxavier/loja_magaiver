import db from "../databases/postgres";
import Venda from "../models/vendaModel";

class vendaController {

    async findAllVendas(): Promise<Venda[]> {
        const query =`
            SELECT * FROM vendas
        `;

        const result = await db.query(query);

        return result.rows || [];
    }
    async addVenda(venda: Venda): Promise<number> {
        const query = `
            INSERT INTO vendas(product_name, price, quantity, token) VALUES ($1, $2, $3, $4)
        `;
        const values = [venda.product_name, venda.price, venda.quantity, venda.token];
        
        const result = await db.query<{token: number}>(query, values);

        return result.rows[0].token;
    }
}

export default new vendaController();