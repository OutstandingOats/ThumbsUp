import React from 'react';
import axios from 'axios'

class MCQForm extends React.Component {
  constructor(props) {
    console.log('this is the props ', props)
    super(props);
    this.state = {
    };
  }


  render () {
    return (
      <div>
        <input
            type="text"
            value={this.state.questionName}
            placeholder="Enter Question Name"
            onChange={this.props.handleChange.bind(this, 'questionName')}
        />
        <input
            type="text"
            value={this.props.questions[1]}
            placeholder="Question 1"
            onChange={this.props.handleChange.bind(this, '1')}
        />
        <input
            type="text"
            value={this.props.questions[2]}
            placeholder="Question 2"
            onChange={this.props.handleChange.bind(this, '2')}
        />
        <input
            type="text"
            value={this.props.questions[3]}
            placeholder="Question 3"
            onChange={this.props.handleChange.bind(this, '3')}
        />
        <input
            type="text"
            value={this.props.questions[4]}
            placeholder="Question 4"
            onChange={this.props.handleChange.bind(this, '4')}
        />
        <div
          className="smlbtn btn-sm btn-normal"
          onClick={this.props.onQuestionSave.bind(this)}>
          Save Question
        </div>
      </div>
    )
  }
}

export default MCQForm
