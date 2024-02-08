const { Aspirantes } = require('../database/models');
const path = require('path');

const controller = {
    list: async (req, res) => {
        let aspirantes = await Aspirantes.findAll();
        let resultado = {
            meta: {
                status: 200,
                total: aspirantes.length,
                url: '/api/aspirantes',
            },
            data: aspirantes,
        }

        res.json(resultado)
    },
    images: async (req, res) => {
        const imagenReq = req.params.id;
        const imagenRes = await Aspirantes.findByPk(imagenReq)
        if (imagenRes ) {
           
            const imagenName = imagenRes.imagen
            const pathImage = path.resolve(__dirname, '../uploads/' + imagenName)

            res.sendFile(pathImage);
        } else {
            res.send('No existe esta imagen en la base de datos')
        };

    }
}

module.exports = controller;