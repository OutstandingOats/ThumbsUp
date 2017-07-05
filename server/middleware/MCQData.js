class MCQData {
  constructor(lectureId, questionId, instructor) {
    this.lectureId = lectureId;
    this.questionId = questionId;
    this.students = {};
    this.instructor = instructor;
  }

  //adds a student to the data structure
  addStudent(student) {
    this.students[student.gmail] = student;
  }

  //sets the thumb value for the student
  setThumbValueForStudent(gmail, thumbValue) {
    this.students[gmail].thumbValue = thumbValue;
  }

  //returns the average thumb value
  getMCQAnswer() {

    // CBL to adjust for MCQ answer incoming
    return 'ab'
  }

  //check if a student is connected
  hasStudent(gmail) {
    return this.students.hasOwnProperty(gmail);
  }
}

class Student {
  constructor(gmail, socketId) {
    this.gmail = gmail;
    this.socketId = socketId;
    this.thumbValue = null;
  }
}


module.exports.MCQData = MCQData;
module.exports.Student = Student;