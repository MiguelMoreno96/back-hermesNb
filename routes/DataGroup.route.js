const express = require('express');
const router = express.Router();
const { getAllData, getheadNUm, getcheckNum, postData, getFirstData, getLastData} = require('../controller/DataGroup.Controller')

router.route('/').get(getAllData);
router.route('/Data/:headNUm').get(getheadNUm);
router.route('/Data/:checkNum').get(getcheckNum);
router.route('/FirstData').get(getFirstData);
router.route('/LastData').get(getLastData);

router.route('/Data/createDataGroup').post(postData);

module.exports = router;