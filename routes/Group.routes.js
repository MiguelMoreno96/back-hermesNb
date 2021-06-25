const express = require('express');
const router = express.Router();
const multer = require('multer');
const { postGroup , getGroups , getOneGroup} = require('../controller/Group.controller')

router.route('/').post(postGroup);

router.route('/Group/').get(getGroups);
router.route('/Group/:group').get(getOneGroup);

module.exports = router;