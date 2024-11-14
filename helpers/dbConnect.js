const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

console.log(process.env.DB_PASSWORD)
const connect = async(consulta,arrayVariables=[])=>{
    if (!consulta) {
        console.log("Consulta no definida")
    }
    let client,result;
    try{
        client=await pool.connect();
        const resp=await client.query(consulta,arrayVariables);
        console.log("conectando a la base de datos")
        result= resp.rows;
    }catch(error){
        console.log(error)
        throw error
    }finally{
        client.release()
    }
    return result
}

module.exports = { connect }