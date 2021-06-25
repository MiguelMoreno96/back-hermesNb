const DataG = require('../models/DataGroup.model');

exports.getAllData = async (req,res) => {
    try {
        const data_group = await DataG.find();
        console.log("xx");
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
exports.postData = async (req,res) => {
    try {
        const gruop = req.body;
        console.log(gruop);
        const newGruop = await DataG.create(gruop);
        
        if(!newUser){
            return res.status(404).json({
                success: false,
                message: 'Error al insertar al grupo'
            })
        }else{
            console.log("aceptado");
            return res.status(201).json({
                success: true,
                newGruop
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Problemas con el servidor contacte al administrador '
        });
    }
}
exports.getFirstData = async (req,res) => {
    try {
        const data_group = await DataG.find();

        console.log("--xx----xxx");
        const FirstData = data_group[0]
        console.log(FirstData);
        if(!FirstData){
            return res.status(400).json({
                success: false,
                message: 'No se pudo traer los datos de los grupos'})
        }
        return  res.status(200).json({
            success: true,
            data: FirstData
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Problemas con el servidor contacte al administrador'
        });
    }
}
exports.getLastData = async (req,res) => {
    try {
        const data_group = await DataG.find();
        console.log("--xx----");
        const LastData = data_group[data_group.length-1]
        console.log(LastData);
        if(!LastData){
            return res.status(400).json({
                success: false,
                message: 'No se pudo traer los datos de los grupos'})
        }
        return  res.status(200).json({
            success: true,
            data: LastData
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Problemas con el servidor contacte al administrador'
        });
    }
}
