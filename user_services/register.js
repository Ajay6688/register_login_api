const bcrypt = require('bcryptjs');
const { authSchema } = require('../validators/validator');
const { conn } = require('../connections/db_connection');

async function register(req, res) {

    let id = req.body.id;
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    const authResult = authSchema.validate(req.body);

    if (authResult.error) {
        console.log(authResult.error.details[0].message);
        return res.status(400).send(authResult.error.details[0].message);
    }
    // password hashing
    async function securePassword(password) {
        const passwordHash = await bcrypt.hash(password, 10);
        console.log('the password after hashing is : ' + passwordHash);
        let vals = [
            [id, name, email, passwordHash]
        ]

        // inserting data 
        conn.query('insert into studentsBio (id,name ,email , password) values?', [vals], (err, result) => {
            if (err) throw err;
            res.status(200).send('You have registered successfully');
            console.log(result);
        });

    }
    securePassword(password);
}

module.exports = { register }