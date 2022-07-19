const express = require('express');

const { sequelize, User} = require('./models');  

const app = express();

app.post('/users', async(req, res) => {
    const {name, email, rile} = req.body

    try{
        const user = await User.create({ name, email, role})

        return res.json(user)
    } catch (err){
        console.log(err)
        return res.status(500).json(err)
    }


})

app.listen({ port: 5000 }, async () => {
    console.log('Server up on http://localhost:5000')
    await sequelize.sync({ force: true})
    console.log('Database synced!')
});

