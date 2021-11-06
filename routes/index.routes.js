const router = require('express').Router();
const argosRouter = require('./argos.routes');


router.use('/argos', argosRouter);

module.exports = router;