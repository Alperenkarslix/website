// Chart.js
import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Dashboard from './Dashboard';
import API from '../api/api';
import '../style/Chart.css';



const Chart = () => {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState({ value: 'Drift Velocity', label: 'Drift Velocity' });
  const [Yname, setYname] = useState({ value: '', label: '' });
  const [checked, setChecked] = useState(false);
  const [logarithmic, setLogarithmic] = useState(false);
  const [Xname, setXname] = useState({ value: '', label: '' });
  const [firstGas, setFirstGas] = useState('Ar');
  const [dataX , setDataX] = useState([]);
  const [secondGas, setSecondGas] = useState('C4H10');
  const [valueFirstGas, setValueFirstGas] = useState('80.0');
  const [changingValueFirstGas, setChangingValueFirstGas] = useState('80.0');
  const [changingValueSecondGas, setChangingValueSecondGas] = useState('20.0');
  const [valueSecondGas, setValueSecondGas] = useState('20.0');

  const handleYnameChange = (value) => {
    setYname(value);
  };

  const handleXnameChange = (value) => {
    setXname(value);
  };
  return (
    <div>
      <Dashboard
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        checked={checked}
        setChecked={setChecked}
        logarithmic={logarithmic}
        setLogarithmic={setLogarithmic}
        firstGas={firstGas}
        setFirstGas={setFirstGas}
        secondGas={secondGas}
        setSecondGas={setSecondGas}
        valueFirstGas={valueFirstGas}
        setChangingValueFirstGas={setChangingValueFirstGas}
        changingValueFirstGas={changingValueFirstGas}
        valueSecondGas={valueSecondGas}
        setChangingValueSecondGas={setChangingValueSecondGas}
        changingValueSecondGas={changingValueSecondGas}
        handleYnameChange={handleYnameChange}
        handleXnameChange={handleXnameChange}
        setValueFirstGas={setValueFirstGas}
        setValueSecondGas={setValueSecondGas}
        setXname={setXname}
        setDataX={setDataX}

      />
      <API
        firstGas={firstGas}
        secondGas={secondGas}
        valueFirstGas={valueFirstGas}
        valueSecondGas={valueSecondGas}
        setData={setData}
      />
      <div className="chart">
      <div className="chart-title">
        <h2 className="title">Gas: {firstGas} {valueFirstGas} - {secondGas} {valueSecondGas}</h2>
        <h2 className="title2">X and Y Axis: {selectedOption?.value} and {Xname?.value}</h2>
      </div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart margin={{ top: 0, right: 50, left: 50, bottom: 50 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey= {dataX} type="number" tickCount={6} domain={[0,1000]} allowDataOverflow={true} label={{ value: Xname?.value, position: 'insideBottom', offset: -15 }} />
            <YAxis label={{ value: Yname?.value, angle: -90, position: 'insideLeft', offset: 8, dy: 100 }} />
            <Line data={data} dot={false} activeDot={{ stroke: 'blue', strokeWidth: 2, r: 5 }} type="monotone" dataKey={selectedOption?.value} stroke="#8884d8" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
