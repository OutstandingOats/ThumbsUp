import React from 'react';
import LectureStarter from './LectureStarter.jsx';
import LectureButtons from './LectureButtons.jsx';
import ThumbsChecker from './ThumbsChecker.jsx';
import MCQChecker from './MCQChecker.jsx';

const io = require('socket.io-client');
const socket = io();

class Instructor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('props', props);
    socket.on('averageThumbValue', (data) => {
      if (props.view === 'instructor') {
        //console.log('data', data);
        props.changeThumbValue(data.averageThumbValue);
      }
    });
    //console.log('this is the q type', this.props.questionType)
  }

  render () {
    return (
      <div>
        {this.props.lectureStatus === 'lectureNotStarted'
          ? <LectureStarter
              startLecture={this.props.startLecture}
            />
          : this.props.lectureStatus === 'lectureStarted'
          ? <LectureButtons
              lectureId={this.props.lectureId}
              startThumbsCheck={this.props.startThumbsCheck}
              startMCQ={this.props.startMCQ}
              endLecture={this.props.endLecture}
            />
          : this.props.questionType === 'thumbs'
          ? <ThumbsChecker
            startLecture={this.props.startLecture}
            lectureId={this.props.lectureId}
            countdown={this.props.countdown}
            thumbValue={this.props.thumbValue}
            clearThumbsCheck={this.props.clearThumbsCheck}
          />
          : <MCQChecker
            startLecture={this.props.startLecture}
            lectureId={this.props.lectureId}
            countdown={this.props.countdown}
            thumbValue={this.props.thumbValue}
            clearThumbsCheck={this.props.clearThumbsCheck}
            submitCount={this.props.submitCount}
          />
        }
      </div>
    )
  }
}

export default Instructor;
