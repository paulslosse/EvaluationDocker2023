# EvaluationDocker2023

## How to run the project

Step 1: Clone the project from github

Step 2: Run the following command in the terminal

```bash 

docker-compose up -d

```
Step 3: Open the browser and go to http://localhost:3000/

## How it is built

This project is built using React, Node.js and MYSQL. It has for purpose to display articles from a database in the browser as a shop. Each article has its own page with his image and description.

The React for the frontend, fetches the data from the http://localhost:3001/senddatatofront and displays it in the browser.
The Node.js for the backend fetches the data from the MYSQL database and sends it to http://localhost:3001/senddatatofront 
Mysql is used to store the articles, their description and the price (the price is not used yet and the pictures are not implemented yet either).