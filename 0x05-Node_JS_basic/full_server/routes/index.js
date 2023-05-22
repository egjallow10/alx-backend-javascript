import AppController from '../controllers/AppControllers';
import StudentsController from '../controllers/StudentsController';

// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  AppController.getHomePage(req, res);
});

router.get('/students', (req, res) => {
  StudentsController.getAllStudents(req, res);
});

router.get('/students/:major', (req, res) => {
  StudentsController.getAllStudentsByMajor(req, res);
});

export default router;
