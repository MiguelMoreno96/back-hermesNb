const express = require('express');
const router = express.Router();
const { postCheck, getlastCheck} = require('../controller/checkNum.controller')

router.route('/check/create').post(postCheck);
router.route('/check/last').get(getlastCheck);

module.exports = router;