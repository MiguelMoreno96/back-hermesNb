const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { getAllData, getheadNUm, getcheckNum} = require('../controller/DataGroup.Controller')

router.route('/').post(getAllData);

router.route('/Data/:headNUm').get(getheadNUm);
router.route('/Data/:checkNum').get(getcheckNum);