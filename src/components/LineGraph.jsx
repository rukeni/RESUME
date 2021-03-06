import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine, Line,
} from 'recharts';
import Dot from './Dot';

const LineGraph = ({ data }) => (
  <ResponsiveContainer
    width="99%"
    aspect={3}
    minWidth="500"
    minHeight="500"
  >
    <LineChart
      data={data}
      margin={{
        top: 20, right: 10, left: 10, bottom: 20,
      }}
    >
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <ReferenceLine y={5} stroke="red" strokeDasharray="3 3" />
      <Line type="monotone" dataKey="코딩시간" stroke="#8884d8" dot={Dot} />
    </LineChart>
  </ResponsiveContainer>
);

LineGraph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default LineGraph;
