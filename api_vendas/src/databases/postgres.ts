import { Pool } from 'pg';

// configuracao da conexao do DB do elephantSQL
const USER = "wgedgsxc";
const PASSWD = "f7pqCYQTHTMP96NLzhadHJgKe0npHegH";
const LOCAL = "motty.db.elephantsql.com";
const DefDB = "wgedgsxc";


const connectionString = `postgres://${USER}:${PASSWD}@${LOCAL}/${DefDB}`;

const db = new Pool({ connectionString });

export default db;
