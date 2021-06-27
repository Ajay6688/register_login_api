const joi = require('@hapi/joi');

const authSchema = joi.object({
    id: joi.number().integer().max(8).required(),
    name: joi.string().min(2).max(40).required(),
    email: joi.string().email().lowercase().required(),
    password: joi.string().min(6).required()
})

module.exports = {
    authSchema
}