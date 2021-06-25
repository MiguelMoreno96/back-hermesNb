const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { postGroup , getGroups , getOneGroup} = require('../controllers/StockPrice.controller')

router.route('/').post(postGroup);

router.route('/Group/').get(getGroups);
router.route('/Group/:group').get(getOneGroup);