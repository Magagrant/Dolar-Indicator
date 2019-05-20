import React, {
  Component
} from 'react';

class Date extends Component {
  constructor() {
    super();
    this.state = {};
    this.processInput = this.processInput.bind(this);
}

processInput(event) {
  this.props.onChange(event.target.value);
}

render() {
  return (
    <div className = "dateContainer_input" >
      <label> {this.props.label} < /label><br/ >
      <input type = "date" onChange = {this.processInput}  />
    </div>
  )
}
}

export default Date;
