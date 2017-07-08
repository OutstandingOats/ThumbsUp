import React from 'react';
import axios from 'axios';

class LectureStarter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  onLectureStart() {
    axios({
      method: 'post',
      url: '/lecture',
      params: {
        name: this.state.name
      }
    }).then((response) => {
      this.props.startLecture(response.data.lectureId);
    }).catch((error) => {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="text-center">
        START AN EXISTING LECTURE
        {this.props.lectures !== null && this.props.lectures.length !== 0
          ? <div className="col-xs-12 text-center top-space">
              {this.props.lectures.map((lecture, i) => {
                return (
                  <div
                    className="btn btn-sm btn-normal text-center"
                    onClick={this.onLectureStart.bind(this)}
                    key={i}>
                    {lecture.name}
                  </div>
                );
              })}
            </div>
          : <h2 className="text-center"> There are no lectures... add one!</h2>
        }
      </div>
    );
  }
}

export default LectureStarter;
