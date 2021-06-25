const Group = require('../models/checkNum.model');;

exports.postCheck = async(req,res) =>{
    try {
        const gruop = req.body;
        const newGruop = await Group.create(gruop);
        
        if(!newUser){
            return res.status(404).json({
                success: false,
                message: 'Error al insertar al check'
            })
        }else{
            
            return res.status(201).json({
                success: true,
                newGruop
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Problemas con el servidor contacte al administrador'
        });
    }
}

exports.getlastCheck = async (req,res) => {
    try {
        const newGruop = await Group.find().sort({checkNum:-1}).limit(1)
    console.log(newGruop)
    if(!newUser){
        return res.status(404).json({
            success: false,
            message: 'Error al insertar al check'
        })
    }
        
        return res.status(201).json({
            success: true,
            newGruop
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Problemas con el servidor contacte al administrador'
        });
    }
}