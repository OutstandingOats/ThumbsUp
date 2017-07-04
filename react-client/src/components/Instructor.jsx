import React from 'react';
import LectureStarter from './LectureStarter.jsx';
import LectureButtons from './LectureButtons.jsx';
import ThumbsChecker from './ThumbsChecker.jsx';

const io = require('socket.io-client');
const socket = io();

class Instructor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('props', props);
    socket.on('averageThumbValue', (data) => {
      if (props.view === 'instructor') {
        console.log('data', data);
        props.changeThumbValue(data.averageThumbValue);
      }
    });
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
              endLecture={this.props.endLecture}
            />
          : <ThumbsChecker
            startLecture={this.props.startLecture}
            lectureId={this.props.lectureId}
            countdown={this.props.countdown}
            thumbValue={this.props.thumbValue}
            clearThumbsCheck={this.props.clearThumbsCheck}
          />}
      </div>
    )
  }
}

export default Instructor;
