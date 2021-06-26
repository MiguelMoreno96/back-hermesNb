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
        const newGruop = await DataG.create(gruop);
        
        if(!newUser){
            return res.status(404).json({
                success: false,
                message: 'Error al insertar al grupo'
            })
        }
            return res.status(201).json({
                success: true,
                newGruop
            })
        
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
        const data_group = await DataG.find( ).sort({CheckNum:-1}).limit(1);
        //const data2 = await DataG.find({},{CheckNum:1}).sort({CheckNum: -1}).limit(1).first() 
        console.log(data_group);
        if(!data_group){
            return res.status(400).json({
                success: false,
                message: 'No se pudo traer los datos del grupo'})
        }
        return  res.status(200).json({
            success: true,
            data: data_group
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Problemas con el servidor contacte al administrador'
        });
    }
}
