import './App.css';
import React, { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import foodsData from "./foods.json";
import FoodBox from './components/FoodBox';

function App() {
  const [foods, setFoods] = useState(foodsData);

  return (
    <div className="App">
    <Divider>Food List</Divider>
    <Row style={{ width: '100%', justifyContent: 'center' }}>
      {foods.map(food => {
        return <FoodBox food={food} key={food._id} />
      })}
    </Row>
    </div>
  );
}

export default App;
