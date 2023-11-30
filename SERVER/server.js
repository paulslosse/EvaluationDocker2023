import express from 'express';
import path from 'path';
import {getArticle, getArticles} from './databaseConnect.js';
import cors from 'cors' 
const app = express();

app.use(cors());
app.options('*', cors());

const __dire = path.resolve();
const publicPath = path.join(__dire, '../clientreact/public');
app.use(express.static(publicPath));

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('Something broke!');
})  

app.get("/senddatatofront", async (req, res) => {
  const articles =  await getArticles();
  res.json(articles);
})

//app.get("/home", async (req, res) => {
//  const articles =  await getArticles();
//  res.sendFile(path.join(publicPath, '/index.html'))
//})

//TEST POUR LE GIT QUI DETECTE PAS MON REACT IDK HOW TO DO MATE

//app.get("/article:id", async (req, res) => {
//  const id = req.params.id;
//  const article = await getArticle(id);
//  res.send(article);
//})
  
app.listen(3001, () => {
  console.log('Server is running on port 3001');
})