// Budget API

const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

const budget = {
    myBudget: [
        {
            title: 'Eat out',
            budget: 33
        },
        {
            title: 'Rent',
            budget: 50
        },
        {
            title: 'Grocery',
            budget: 90
        },
    ]
};




app.get("/budget", (req,res) => {
    res.json(budget);
})

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});