const bcrypt = require('bcryptjs');
const { conn } = require('../connections/db_connection');
async function login(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    conn.query('SELECT * FROM studentsBio WHERE email = ?', [email], async function(error, results) {
        if (error) {
            res.send(error);
            console.log(error);
        }
        if (results.length > 0) {
            const comparision = await bcrypt.compare(password, results[0].password)
                // console.log(comparision);
            if (comparision) {
                res.send("welcome you have logged in succesfully");
            } else {
                res.send("Email and password does not match")
            }
        } else {
            res.send("Email does not exits");
        }
    });
}

module.exports = { login };