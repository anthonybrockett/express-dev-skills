var express = require('express');
var router = express.Router();

// Require skills controller module
const skillsCtrl = require('../controllers/skills');

/* All actual paths begin with /skills */

// Get /skills index functionality
router.get('/', skillsCtrl.index);

// Get /skills/:id show functionality
router.get('/:id', skillsCtrl.show);

module.exports = router;
