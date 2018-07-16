const express = require('express');
const router = express.Router();

var student = require('./student');
var fee = require('./fee');
var cmaster = require('./cmaster');

/* Student Registration & Enrollment */
router.get('/student', student.list);

router.get('/student/summary', student.summary);

router.get('/student/:id', student.find);

router.post('/student', student.create);

router.put('/student/:id', student.update);

router.delete('/student/:id', student.delete);

router.post('/student/dropout', student.dropout);

router.post('/student/enroll', student.enroll);

router.put('/student/enroll/:id', student.enrollupdate);

router.get('/student/session/:id', student.sessionwisestudent);

router.get('/student/class/:id', student.classwisestudent);


/* Common Master API */

router.get('/session', cmaster.sessionlist);

router.get('/class', cmaster.classlist);

router.get('/feehead', cmaster.feeheadlist);

router.get('/transportfee', cmaster.distancetype);

router.get('/class/feehead/:id', cmaster.classwisefeehead);

/* Fee Management */

router.post('/fee/collection', fee.collection);

router.post('/fee/adjustment', fee.adjustment);

router.get('/fee/dues/:ssid', fee.dues);

router.get('/fee/payment/:id', fee.payment);

router.get('/fee/summary/class', fee.feesummary);

router.get('/fee/summary/month', fee.monthlyfeesummary);

router.post('/fee/paymentposting', fee.paymentposting);

module.exports = router;
