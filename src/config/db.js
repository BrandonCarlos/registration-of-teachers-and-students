const { Pool } = require('pg')

// Vamos EXPORTAR uma nova instância de "Pool"
module.exports = new Pool({
  user: "postgres",
  password: 123456,
  host: "localhost",
  port: 5432,
  database: "my_teacher"
})