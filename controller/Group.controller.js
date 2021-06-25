const Group = require('../models/Group.model');
const path = require('path');
const fs = require('fs');
const xlsx = require('xlsx');

exports.postGroup = async(req,res) =>{
    try {
        const gruop = req.body;
        const newGruop = await Group.create(user);
        
        if(!newUser){
            return res.status(404).json({
                success: false,
                message: 'Error al insertar al grupo'
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

exports.getGroups = async(req,res) => {
    try {
        const allGroup = await Group.find();
        if(!allGroup){
            return res.status(400).json({
                success: false,
                message: 'No se pudo traer a los grupos'})
        }
        return  res.status(200).json({
            success: true,
            count: allGroup.length,
            data: allGroup
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'No se pudo traer a los grupos'
        });
    }
}

exports.getOneGroup = async (req,res) => {
    try {
        const allGroup = await Group.find({GroupID: req.body.group});
        if(!allGroup){
            return res.status(400).json({
                success: false,
                message: 'No se pudo traer al grupos'})
        }
        return  res.status(200).json({
            success: true,
            data: allGroup
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'No se pudo traer al grupos'
        });
    }
}