const express = require('express');
const { body } = require('express-validator');
const {
  getTasks,
  getTasksByProject,
  getTask,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

const { protect } = require('../middleware/auth');
const { authorize } = require('../middleware/roleCheck');

const router = express.Router();

// Validation rules
const taskValidation = [
  body('title')
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Title is required and must be less than 100 characters'),
  body('description')
    .trim()
    .isLength({ min: 1, max: 500 })
    .withMessage('Description is required and must be less than 500 characters'),
  body('status')
    .optional()
    .isIn(['pending', 'in-progress', 'completed'])
    .withMessage('Status must be pending, in-progress, or completed'),
  body('priority')
    .optional()
    .isIn(['low', 'medium', 'high'])
    .withMessage('Priority must be low, medium, or high'),
  body('assignedTo')
    .isMongoId()
    .withMessage('AssignedTo must be a valid user ID'),
  body('project')
    .isMongoId()
    .withMessage('Project must be a valid project ID'),
  body('deadline')
    .isISO8601()
    .withMessage('Deadline must be a valid date')
];

// Routes
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Tasks route working 🚀' });
});

router
  .route('/')
  .get(protect, getTasks)
  .post(protect, authorize('admin'), taskValidation, createTask);

router
  .route('/:id')
  .get(protect, getTask)
  .put(protect, taskValidation, updateTask)
  .delete(protect, authorize('admin'), deleteTask);

// Get tasks by project
router.get('/project/:projectId', protect, getTasksByProject);

module.exports = router;