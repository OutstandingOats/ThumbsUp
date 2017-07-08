

            

import React from 'react'
import MCQVizualization from './MCQVizualization.jsx';
import Countdown from './Countdown.jsx';

class MCQChecker extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      numResponses: props.submitCount
    }
    console.log(this.state.numResponses)
  }

	render () {
		return (
			
			<div> Submitted Answers: 
			{this.state.numResponses === 0 && <h3>{this.props.MCQAnswer}</h3>} <br/>

			

			</div>
			
				
	  )
   }
}

export default MCQChecker;
