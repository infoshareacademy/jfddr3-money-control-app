import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function PieChartExpenses({ entries }) {
  function groupCategAndSumAmounts(data, categories, reducer) {
    function getUniqueIndexHash(row, categories) {
      return categories.reduce((acc, curr) => acc + row[curr], '');
    }

    let groupedObj = data.reduce((acc, curr) => {
      let currIndex = getUniqueIndexHash(curr, categories);

      if (!Object.keys(acc).includes(currIndex)) {
        acc = { ...acc, [currIndex]: [curr] };
      } else {
        acc = { ...acc, [currIndex]: acc[currIndex].concat(curr) };
      }
      return acc;
    }, {});

    let reduced = Object.values(groupedObj).map(arr => {
      let reduceValues = arr.reduce(reducer, {});
      let indexObj = categories.reduce((acc, curr) => {
        acc = { ...acc, [curr]: arr[0][curr] };
        return acc;
      }, {});

      reduceValues = { ...indexObj, ...reduceValues };

      return reduceValues;
    });

    return reduced;
  }
  let reducer = (acc, curr) => {
    acc.count = 1 + (acc.count || 0);
    acc.amount = +curr.amount + (acc.amount || 0);
    return acc;
  };

  const categoryUserData = groupCategAndSumAmounts(
    entries,
    ['category'],
    reducer
  ).map(entry => ({
    name: entry.category,
    value: parseInt(entry.amount)
  }));

  return (
    <PieChart width={400} height={220}>
      <Pie
        data={categoryUserData}
        cx={200}
        cy={100}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
      >
        {categoryUserData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
