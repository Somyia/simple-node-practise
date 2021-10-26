const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello from node. first time')
})

const users = [
    { id: 0, name: 'Sabana', email: 'sabana@gmail.com' },
    { id: 1, name: 'Srabonti', email: 'srabonti@gmail.com' },
    { id: 2, name: 'Suchorita', email: 'suchorita@gmail.com' },
    { id: 3, name: 'Suhana', email: 'suhana@gmail.com' },
    { id: 4, name: 'Soniya', email: 'suniya@gmail.com' },
    { id: 5, name: 'Sila', email: 'sila@gmail.com' },
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
})


app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    res.json(newUser)
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/users/:id', (req, res) => {
    const index = req.params.id;
    const user = users[index];
    res.send(user)
})



app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy yummy tok marka fazli');
})

app.listen(port, () => {
    console.log('listen from port: ', port)
})