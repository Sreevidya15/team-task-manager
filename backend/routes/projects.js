const express = require('express');
const { body } = require('express-validator');
const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject
} = require('../controllers/projectController');

const { protect } = require('../middleware/auth');
const { authorize } = require('../middleware/roleCheck');

const router = express.Router();

// Validation rules
const projectValidation = [
  body('title')
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Title is required and must be less than 100 characters'),
  body('description')
    .trim()
    .isLength({ min: 1, max: 500 })
    .withMessage('Description is required and must be less than 500 characters'),
  body('members')
    .optional()
    .isArray()
    .withMessage('Members must be an array of user IDs')
];

// Routes
router
  .route('/')
  .get(protect, getProjects)
  .post(protect, authorize('admin'), projectValidation, createProject);

router
  .route('/:id')
  .get(protect, getProject)
  .put(protect, authorize('admin'), projectValidation, updateProject)
  .delete(protect, authorize('admin'), deleteProject);

module.exports = router;