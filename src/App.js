import './App.css';
import React, { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import foodsData from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsData); 
  
  const handleNewFood = (food) => {
    const newFood = {...food, _id: foods.length + 1}
    setFoods([...foods, newFood])
  }
  
  return (
    <div className="App">
    <Divider>Add Food Entry</Divider>
    <Row style={{ width: '100%', justifyContent: 'center' }}>
      <AddFoodForm handleNewFood={handleNewFood}/>
    </Row>
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
