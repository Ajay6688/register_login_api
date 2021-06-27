const express = require('express');
const app = express();
const reg = require('./user_services/register');
const log = require('./user_services/login')

app.use(express.json());



app.get('/', function(req, res) {
    res.send('hello sir');
});

app.post('/register', reg.register);


app.post('/login', log.login);

// app.post('/login', (req , res)=>{
//     const roll_no = 
// })

// conn.query('select * from studentsBio', (err, result) => {
//     if (err) throw err;
//     console.log(result);
// }););
app.listen(2000, () => console.log("Server is listening at port 2000"));