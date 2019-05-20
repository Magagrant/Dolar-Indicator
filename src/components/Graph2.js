
import React, { Component } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import * as moment from 'moment';

export default class Graph2 extends Component {
    render() {
        const data = this.props.values.map((val) => {
                return {
                    date: moment(val.date).format('YYYY-MM-DD'),
                    value: val.value

                };
            })



const average = this.props.values.reduce((acc, val) => acc + val.value,0) / this.props.values.length;
const av = String(average) ;

const max = Math.max.apply(Math,this.props.values.map(function(o){return o.value;}))
const min = Math.min.apply(Math,this.props.values.map(function(o){return o.value;}))

      return (

        <div style={{ width: '100%', height: 400 }}>
        <div className="IndicatorContainer">
          <p><span className="indicatorContainer-number">{min}</span><br/>Minimum value</p>
          <p><span className="indicatorContainer-number">{av}</span><br/>Average</p>
          <p><span className="indicatorContainer-number">{max}</span><br/>Maximum value</p>
        </div>
        <ResponsiveContainer>
            <AreaChart
              data={data}
              margin={{
                top: 10, right: 30, left: 0, bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" angle={-45} tick={{fontSize: 14}} height={120} textAnchor="end"/>
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      );
    }
}
