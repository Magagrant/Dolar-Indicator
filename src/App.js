import React, { Component } from 'react';
import * as moment from 'moment';
import Date from './components/Date';
import Graph2 from './components/Graph2';

import './App.scss';

class App extends Component {
  constructor(){
    super();
    this.state= {
      startDate: null,
      endDate: null,
      values: [],
    };

    this.dataRetrievalTimeout = null;

    this.onStartDateChange = this.onStartDateChange.bind(this);
    this.onEndDateChange = this.onEndDateChange.bind(this);

  }

  onStartDateChange(date){
    if (this.validateDate(date, this.state.endDate)){
      this.retrieveDolarValue({ startDate: moment(date), endDate: this.state.endDate });
    }
    this.setState({ startDate: moment(date) });
  }

  onEndDateChange(date){
    if (this.validateDate(this.state.startDate, date)) {
      this.retrieveDolarValue({ startDate: this.state.startDate, endDate: moment(date) });
    }
    this.setState({endDate: moment(date)});
  }

  retrieveDolarValue(range){
    if (this.dataRetrievalTimeout) {
      clearTimeout(this.dataRetrievalTimeout);
    }
    this.dataRetrievalTimeout = setTimeout(async () => {
      try {
        const data = await fetch(`https://api.sbif.cl/api-sbifv3/recursos_api/dolar/periodo/${range.startDate.year()}/${range.startDate.format('MM')}/dias_i/${range.startDate.format('DD')}/${range.endDate.year()}/${range.endDate.format('MM')}/dias_f/${range.endDate.format('DD')}?apikey=9c84db4d447c80c74961a72245371245cb7ac15f&formato=json`).then(resp => resp.json())

        let values = data.Dolares.map((val) => {
          return {
              date: moment(val.Fecha),
              value: parseFloat( (val.Valor).replace(',', '.'))
          };
        })
        this.setState({ values: values });
      } catch (error) {
        console.error(error);

      } finally {
        this.dataRetrievalTimeout = null;
      }
    }, 1000);
  }

  validateDate(initialDate, finalDate) {
    if (!initialDate || !finalDate) {
      return;
    }

    const startDate = moment(initialDate);
    const endDate = moment(finalDate);

    return startDate.isBefore(endDate);
  }

  render() {
    return (
      <div className="App">
        <h1>Dolar Indicator</h1>
        <div className="dateContainer">
          <Date label="Initial Date" onChange={this.onStartDateChange} /><br/>
          <Date label="Final Date" onChange={this.onEndDateChange} />
        </div>

        <Graph2  values= {this.state.values}/>
      </div>
    );
  }
}

export default App
