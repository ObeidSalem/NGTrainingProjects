const Pool = require('pg').Pool

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: '02589',
    databases: 'postgres',
})

module.exports = pool;

// pool.connect()

// pool.query(`SELECT * FROM tasks`, (err, result) => {
    
//     if (!err) {
//         console.log(result.rows)

//     } else {
//         console.log(err.message)

//     }
//     pool.end;
// })