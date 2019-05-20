import React, { Component } from 'react';
import LineChart from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';

class Valores extends Component {
  constructor(props){
    super(props);
    this.state= {
      values: [],
    };
  }

  componentWillMount(){
    fetch('https://api.sbif.cl/api-sbifv3/recursos_api/dolar/periodo/2018/12/dias_i/04/2019/01/dias_f/05?apikey=9c84db4d447c80c74961a72245371245cb7ac15f&formato=json')
    .then(results => {
      return results.json();
    }).then(data => {
      let values = data.Dolares.map((val) => {
        return(
          <div key="{val.Dolares}">
            <p>{val.Fecha}</p>
            <p>{val.Valor}</p>


          </div>
        )
      })
      this.setState({values: values});
      console.log("state", this.state.values);
    })
    .catch(err => {
      console.log("Error");
    })
  }


render(){
  return(
    <p className="name1">
      {this.state.values}

    </p>
  )
}

}
export default Valores;
