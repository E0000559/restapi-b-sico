const {response} = require('express');

const usuariosGet = (req, res = response) => {
    const {name, age} = req.query
    
    res.json({
        msg: 'get API - usuariosGet',
        name,
        age
    });
}

const usuariosPost = (req, res = response) => {
    const body = req.body;
    res.json({
        msg: 'post API - usuariosPost',
        body
    })
}

const usuariosPut = (req, res = response) => {
    const id = req.params.id
    res.json({
        msg: 'put API - usuariosPut',
        id
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut
}