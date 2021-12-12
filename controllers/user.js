const { response, request } = require('express');


const usuariosGet = (req = request, res = response) =>  {

    const {q, nombre='no name', apikey} = req.query;
    
    res.json({
        msg: 'get',
        q,
        nombre,
        apikey
    });
}


const usuariosPut = (req, res = response) =>  {

    const {id} = req.params.id;

    res.json({
        msg: 'put',
        id
    });
}


const usuariosPost = (req, res) =>  {

    const {nombre, edad} = req.body; 

    res.json({
        msg: 'post',
        nombre,
        edad
    });
}


const usuariosDelete = (req, res) =>  {
    res.json({
        msg: 'delete'
    });
}

const usuariosPath = (req, res) =>  {
    res.json({
        msg: 'delete'
    });
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPath
}