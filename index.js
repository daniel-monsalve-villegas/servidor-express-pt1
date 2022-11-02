const express = require('express');
const app = express();
const port = 8080;

//Show products
app.get('/api/products', (req, res) => {
	res.json({ products });
})

//Show succesful connection
app.listen(port, () => {
  console.log('conectado');
})

//Show quantity of items in products
app.get('/info', (req, res) => {
	res.send(`<p>Our store has info for ${products.length} products
	<h1>${date}<h1>`);
})

//Show about me
app.get('/about', (req, res) => {
  res.json({ about });
})

//Show especific product
app.get('/api/products/:id', (req, res) => {
  const productInfo = Object.keys(products);

  const getId = (id) => {
    let info = productInfo[id - 1];
    if(id > 0 && id <= products.length) {
      return (products[info]);
    }
    return res.status(404).send('Not Found');
  }
  res.json(getId(req.params.id));
})

//Delete item from product
app.delete('/api/products/delete/:id', (req, res) => {

})


const date = new Date();

const about = [
  {
    "name": "Daniel Monsalve",
    "age": 28,
    "email": "monsalvedanielv@gmail.com",
    "phone": 3025759270,
    "address": "Cra 97 #35d-23",
    "city": "Medellín",
    "headLine": "student",
    "links": [
      {
        "name": "LinkedIn",
        "url": "https://www.linkedin.com/in/daniel-monsalve-villegas/"
      },
      {
        "name": "Github",
        "url": "https://github.com/daniel-monsalve-villegas"
      }
    ],
    "skills": [
      {
        "name": "JavaScript",
        "level": "beginner"
      },
      {
        "name": "React",
        "level": "beginner"
      },
      {
        "name": "Node",
        "level": "beginner"
      },
      {
        "name": "HTML",
        "level": "beginner"
      }
    ]
  }
]

const products = [
  {
    "id": 1,
    "title": "new Title marcos",
    "price": 100004,
    "description": "new Description",
    "images": [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=5193",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=2221",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=2672"
    ]
  },
  {
    "id": 2,
    "title": "new try",
    "price": 29,
    "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    "images": [
      "https://api.lorem.space/image/fashion?w=640&h=480&r=4308",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=4555",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=4493"
    ]
  },
  {
    "id": 3,
    "title": "Licensed Plastic Table",
    "price": 808,
    "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    "images": [
      "https://api.lorem.space/image/fashion?w=640&h=480&r=6769",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=6810",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=2350"
    ]
  },
  {
    "id": 4,
    "title": "Refined Plastic Shirt",
    "price": 252,
    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    "images": [
      "https://api.lorem.space/image/watch?w=640&h=480&r=9592",
      "https://api.lorem.space/image/watch?w=640&h=480&r=6436",
      "https://api.lorem.space/image/watch?w=640&h=480&r=4565"
    ]
  }
]
