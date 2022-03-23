const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');
router.use(require('../apiRoutes/zookeeperRoutes'));

router.use(animalRoutes);

module.exports = router;