const Pool = require("pg").Pool;

const pool = new Pool({
    user: "equally-db-user",
    password: "",
    host: "localhost",
    port: 5432,
    database: "equally-dev"
});

module.exports = pool;