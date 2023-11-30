import mysql from 'mysql2';
//"hide"(not sure) the password and the user name
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'mysql',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD|| 'root',
    database: process.env.DB_DATABASE || 'dockerdb',
    port:'3306',
    connectionLimit: process.env.DB_CONNECTION_LIMIT
}).promise();

//async method get ALL articles

export async function getArticles() {
    //const [result] to get the first element of the array
    const [result] = await pool.query(`select * from article`)
    console.log(result)
    return result;

}

// async method get ONE article, ? against sql injection
export async function getArticle(id) {
    const [result] = await pool.query(`select * from article where id = ?`, [id]);//modifier la requete pour la sécuriser -> pas de select *
    //return the first element of the array as an object
    return result[0];
}
//call the function
//const articles = await getArticles();
//const article = await getArticle(1);
//console.log(article);
