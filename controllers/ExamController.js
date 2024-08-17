const Exam = require('../models/ExamSchema');

exports.createExam = async (req, res) => {
    try {
        const exam = new Exam(req.body);
        await exam.save();
        res.status(201).json(exam);
    } catch (error) {
        res.status(400).json(error);
    }
};

exports.getExams = async (req, res) => {
    try {
        const exams = await Exam.find();
        res.status(200).json(exams);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getExam = async (req, res) => {
    try {
        const exam = await Exam.findById(req.params.id);
        if (!exam) {
            return res.status(404).json();
        }
        res.status(200).json(exam);
    } catch (error) {
        res
            .status(500).json(error);
    }
};

exports.updateExam = async (req, res) => {
    try {
        const exam = await Exam.findByIdAndUpdate(req.params.id, req.body);
        if (!exam) {
            return res.status(404).json();
        }
        res.status(200).json(exam);
    } catch (error) {
        res.status(400).json(error);
    }
};

exports.deleteExam = async (req, res) => {
    try {
        const exam = await Exam.findByIdAndDelete(req.params.id);
        if (!exam) {
            return res.status(404).json();
        }
        res.status(200).json(exam);
    } catch (error) {
        res.status(500).json(error);
    }
};