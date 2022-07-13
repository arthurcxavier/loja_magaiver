import {Pool} from "pg";

const connectionString = `postgres://wgedgsxc:f7pqCYQTHTMP96NLzhadHJgKe0npHegH@motty.db.elephantsql.com/wgedgsxc`;

const db = new Pool({connectionString});

export default db;