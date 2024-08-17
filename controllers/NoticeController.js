const Notice = require('../models/NoticeSchema');

exports.createNotice = async (req, res) => {
  try {
    const notice = new Notice(req.body);
    await notice.save();
    res.status(201).json(notice);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getNotices = async (req, res) => {
  try {
    const notices = await Notice.find();
    res.status(200).json(notices);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getNotice = async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);
    if (!notice) {
      return res.status(404).json();
    }
    res.status(200).json(notice);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateNotice = async (req, res) => {
  try {
    const notice = await Notice.findByIdAndUpdate(req.params.id, req.body);
    if (!notice) {
      return res.status(404).json();
    }
    res.status(200).json(notice);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteNotice = async (req, res) => {
  try {
    const notice = await Notice.findByIdAndDelete(req.params.id);
    if (!notice) {
      return res.status(404).json();
    }
    res.status(200).json(notice);
  } catch (error) {
    res.status(500).json(error);
  }
};