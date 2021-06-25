const DataG = require('../models/DataGroup.model');

exports.getAllData = async (req,res) => {
    try {
        const data_group = await DataG.find();
        if(!data_group){
            return res.status(400).json({
                success: false,
                message: 'No se pudo traer los datos de los grupos'})
        }
        return  res.status(200).json({
            success: true,
            count: data_group.length,
            data: data_group
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Problemas con el servidor contacte al administrador'
        });
    }
}

exports.getheadNUm = async (req,res) => {
    try {
        const data_group = await DataG.find(req.params.headNUm)
        if(!data_group) {
            return res.status(400).json({
                success:false,
                message: 'No se pudo traer los datos de los grupos'
            })
        }
        return res.status(200).json({
            success:true,
            data_group
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Problemas con el servidor contacte al administrador'
        });
    }
}
exports.getcheckNum = async (req,res) => {
    try {
        const data_group = await DataG.find(req.params.checkNum)
        if(!data_group) {
            return res.status(400).json({
                success:false,
                message: 'No se pudo traer los datos de los grupos'
            })
        }
        return res.status(200).json({
            success:true,
            data_group
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Problemas con el servidor contacte al administrador'
        });
    }
}
