var express = require('express');
var router = express.Router();

// Require skills controller module
const skillsCtrl = require('../controllers/skills');

/* All actual paths begin with /skills */

// Get /skills (index functionality)
router.get('/', skillsCtrl.index);

// Get /skills/new  (new functionality)
router.get('/new', skillsCtrl.new);

// Get /skills/:id (show functionality)
router.get('/:id', skillsCtrl.show);

// Get /todos/:id/edit (edit functionality)
router.get('/:id/edit', skillsCtrl.edit)

// Post /skills (create functionality)
router.post('/', skillsCtrl.create)

// Delete /skills/:id (delete functionality)
router.delete('/:id', skillsCtrl.delete)


module.exports = router;
