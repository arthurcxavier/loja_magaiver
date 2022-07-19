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

    async addVenda(venda: Venda): Promise<Number> {
        const query = `
            INSERT INTO vendas(product_name, price, quantity, token) VALUES ($1, $2, $3, $4)
            RETURNING token
        `;
        const values = [venda.product_name, venda.price, venda.quantity, venda.token];
        
        const result = await db.query<{token: Number}>(query, values);

        return result.rows[0].token;
    }

    async deleteVenda(id: string): Promise<void> {
        const query = `
        DELETE FROM vendas
        WHERE id = $1
        `;

        const values = [id];
        await db.query(query, values)
    }
}

export default new vendaController();