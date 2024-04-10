// const fs = require('node:fs');

// const data = fs.readFileSync('./myreadme.txt');
// console.log(data);
// console.log(data.toString());


// const fs = require('node:fs');
// const data = fs.readFileSync('./myreadne.txt',{encoding:'utf-8'});

// console.log(data.toString());

// const fs = require('fs');
// fs.writeFileSync('./logs.txt',"10 April 2024:DAY 7");


// const fs = require('fs');
// console.log("start");
// const data = fs.readFileSync('./myreadme.txt',{encoding:'utf-8'});
// console.log(data);
// console.log("end"); 
// console.log(data.toString());


// const fsPromises = require('fs/promises');
// const pr = fsPromises.readFile('./myreadme.txt',{encoding:'utf-8'});
// pr.then ((res)=>{
//     console.log(res);
// })



//callback in file system
// const fs = require('fs');      
// fs.readFile('./myreadme.txt',{encoding:"utf8"},(err,data) => {
//     console.log(data);
// });

//********************************************************************************************************************************************* */
//********************************************************************************************************************************************* */

//http start


// https://www.amazon.in/product/electronics/pricelt=20000
// -----   ------------ -------  -----------
// protocol , origin,   route,   


// const http = require('http');
// const app = http.createServer((req,res)=>{
//     console.log('Request Received');
//     console.log(req.url);
// });
// app.listen(1404);






//mini project

// const http = require('http');

// const htmlTemplate = '<!doctype html><head><title>Document</title></head><body>_PRODUCTS_CART</body></html>'

// // const page = '<h1Welcome</h1>';
// const cardTemplate = '<div class="product-carts"><h4>__Title__</h4><p>__info__</p></div>'
// const page = htmlTemplate.replaced('_Product_Carts_',cardTemplate);
// const Server = http.createServer((req,res)=>{
//     //  console.log('Request Received');
//      console.log(req.url);
//     //  res.end('hello');
//     res.writeHead(200,{'content-type':'text/html',
//     })
//     // res.end('<h2>Hello!</h2><h3>hi!!</h3>');
// });\
// app.listen(1500, ()=>{
//     console.log('*****Server Started*****')

// });



const htmlTemplate = `
<!DOCTYPE html>
<html>
<head>
  <title>Node.js</title>
  <style>
    .card {
      width: 200px;
      height: 200px;
      background-color: lightblue;
      margin: 10px;
      padding: 10px;
      float: left;
    }
  </style>
</head>
<body><h1>Hello World from template variable</h1><h2>Node.js from template variable</h2></body>
</html>
`;

const cardTemplate = `
<div class="card">
  <h1>Card Title</h1>
  <p>Card Description</p>
</div>`


const card1 = cardTemplate.replace('Card Title', 'Card 1').replace('Card Description', 'Card 1 Description');
const card12 = cardTemplate.replace('Card Title', 'Card 2').replace('Card Description', 'Card 2 Description');
const allcard = card1 + card12;
const page = htmlTemplate.replace('<h1>Hello World from template variable</h1><h2>Node.js from template variable</h2>', allcard)
const http = require('http');

// createServer in node
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(page);
  console.log(req.url);
  // console.log(Object.keys(req));
});
server.listen(3000, () => {
 console.log('Server is running...');
    }
);
