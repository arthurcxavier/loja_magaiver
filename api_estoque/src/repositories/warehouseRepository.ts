import db from "../database/db";
import Inventory from "../model/inventoryModel";

class warehouseRepository {

    async getAllItems(): Promise<Inventory[]> {
        const query = `
        SELECT * FROM warehouse
        `;

        const {rows} = await db.query<Inventory>(query);
        return rows || [];
    }

    async getItemByName(name: string): Promise<any> {
        const query = `
        SELECT product_name, quantity, price, image,
        FROM warehouse
        WHERE product_name ILIKE '${name}%'`;

        const {rows} = await db.query<Inventory>(query);

        return rows || []
    }

    async postItem(item: Inventory): Promise<void> {
        const query = `
        INSERT INTO warehouse (
            product_name,
            quantity,
            type,
            price,
            image
        )
        VALUES ($1, $2, $3, $4, $5)
        `;

        const values = [item.product_name, item.quantity, item.type, item.price, item.image];

        await db.query(query, values);
    }

    async updateItem(uuid: string): Promise<void> {
        const query = `
        UPDATE warehouse
        SET
            product_name = $1,
            quantity = $2,
            type = $3,
            price = $4,
            image = $5
        WHERE uuid = $6
        `;

        const values = [uuid];

        await db.query(query, values);
    }

    async deleteItem(uuid: string): Promise<void> {
        const query = `
        DELETE FROM warehouse
        WHERE uuid = $1
        `;

        const values = [uuid];

        await db.query(query);
    }

}

export default new warehouseRepository();