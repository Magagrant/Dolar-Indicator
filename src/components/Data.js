import React, { Component } from 'react';
import Graph from './Graph';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            year1: '',
            year2: ''
        }
        this.commonChange = this.commonChange.bind(this);
        this.showValue = this.showValue.bind(this);
    }

    commonChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    showValue(){
        event.preventDefault();
        alert('name '+ this.state.year1 + ' age: ' + this.state.year2)
    }

    render() {
        return (
            <form>
                <label>Name:
                    <input type="text" name="year1" onChange={this.commonChange}/>
                </label>
                <label>Age:
                    <input type="text" name="year2" onChange={this.commonChange}/>
                </label>
                <input type="submit" value="Submit" onClick={this.showValue}/>
            </form>

        );
    }
}























// import React, { Component } from 'react';
//
// class Form extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             year1: '',
//             year2: ''
//         }
//         this.commonChange = this.commonChange.bind(this);
//         this.showValue = this.showValue.bind(this);
//     }
//
//     commonChange(event) {
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     }
//
//     showValue(){
//         event.preventDefault();
//         alert('name '+ this.state.year1 + ' age: ' + this.state.year2)
//     }
//
//     render() {
//         return (
//             <form>
//                 <label>Name:
//                     <input type="text" name="year1" onChange={this.commonChange}/>
//                 </label>
//                 <label>Age:
//                     <input type="text" name="year2" onChange={this.commonChange}/>
//                 </label>
//                 <input type="submit" value="Submit" onClick={this.showValue}/>
//             </form>
//
//         );
//     }
// }
//
// ReactDOM.render(<Form/>, document.getElementById('app'))
