const express = require('express');
const router = express.Router();
const { 
    getMemberData, 
    getAbsenceTypes, 
    getAbsencebyType
} = require('../dao/data');

router.get('/', getMemberData);
router.get('/absence-types', getAbsenceTypes);
router.get('/absence-type/:type', getAbsencebyType);

module.exports = router;