import './App.css';
import React, { useState } from 'react';
import { Row, Divider } from 'antd';
import foodsData from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foodsData); 
  const [searchValue, setValue] = useState("");
  
  const handleNewFood = (food) => {
    const newFood = {...food, _id: foods.length + 1}
    setFoods([...foods, newFood])
  }

  const handleSearch = (str) => {
    setValue(str)
  }

  const handleDelete = (foodName) => {
    const foodToDelete = [...foods].filter(food => food.name !== foodName)
    setFoods(foodToDelete)
  }
  
  return (
    <div className="App">
    <Divider>Search</Divider>
    <Row style={{ width: '100%', justifyContent: 'center' }}>
      <Search handleSearch={handleSearch}/>
    </Row>
    <Divider>Add Food Entry</Divider>
    <Row style={{ width: '100%', justifyContent: 'center' }}>
      <AddFoodForm handleNewFood={handleNewFood}/>
    </Row>
    <Divider>Food List</Divider>
    <Row style={{ width: '100%', justifyContent: 'center' }}>
      {foods
        .filter(food => food.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))
        .map(food => {
        return <FoodBox food={food} key={food.name} handleDelete={handleDelete} />
      })}
    </Row>
    </div>
  );
}

export default App;
