const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://yossifdiaa4:Facebook4@cluster0.a0w3q.mongodb.net/school?retryWrites=true&w=majority&appName=Cluster0', {
});

const userRoutes = require('./routes/UserRoutes');
const classRoutes = require('./routes/ClassRoutes');
const subjectRoutes = require('./routes/SubjectRoutes');
const attendanceRoutes = require('./routes/AttendanceRoutes');
const gradeRoutes = require('./routes/GradeRoutes');
const timetableRoutes = require('./routes/TimetableRoutes');
const assignmentRoutes = require('./routes/AssignmentRoutes');
const examRoutes = require('./routes/ExamRoutes');
const noticeRoutes = require('./routes/NoticeRoutes');

app.use('/api/users', userRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/subjects', subjectRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/grades', gradeRoutes);
app.use('/api/timetables', timetableRoutes);
app.use('/api/assignments', assignmentRoutes);
app.use('/api/exams', examRoutes);
app.use('/api/notices', noticeRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
