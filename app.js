const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true }));

app.get('/', (req, res) => res.send('Hello World'));

app.get('/users', (req, res) => {
  const users = [
    {
      id: 1,
      name: 'yo1',
      email: 'yo@yo',
    },
    {
      id: 2,
      name: 'yo2',
      email: 'yo2@yo',
    },
  ];

  const json = {
    response: 'ok',
    data: users,
    total: 2,
  };

  res.send(json);
});

app.get('/users/:userID', (req, res) => {
  console.log(req.params);
  const user = {
    id: 2,
    name: 'yopi',
    email: 'juanito',
  };

  res.send(user);
});

app.listen(3000, () => console.log('Escuchando por el puerto 3000!'));
