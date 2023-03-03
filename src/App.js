import './App.css';
import React, { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import foodsData from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foodsData); 
  const [searchValue, setValue] = useState("");
  const [showForm, setShowForm] = useState(false);
  
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

  const handleShowForm = () => {
    setShowForm(prev => !prev)
  }

  const handleNameSort =() => {
    const sortByName = [...foods].sort((a,b) => a.name.localeCompare(b.name))
    setFoods(sortByName)
  }

  const handleCaloriesSort = () => {
    const sortByCalories = [...foods].sort((a,b) => b.calories - a.calories);
    setFoods(sortByCalories)
  }
  
  return (
    <div className="App">
    <Divider>Search</Divider>
    <Row style={{ width: '100%', justifyContent: 'center' }}>
      <Search handleSearch={handleSearch}/>
    </Row>
    <Divider>Actions</Divider>
    <Button className="btn" onClick={handleShowForm}>{showForm ? 'Hide' : 'Add Food'}</Button>
    <Button className="btn" onClick={handleNameSort}>Sort by Name</Button>
    <Button className="btn" onClick={handleCaloriesSort}>Sort by Calories</Button>
    <Row style={{ width: '100%', justifyContent: 'center' }}>
      {showForm && <AddFoodForm handleNewFood={handleNewFood}/>}
    </Row>
    <Divider>Food List</Divider>
    <Row style={{ width: '100%', justifyContent: 'center' }}>
      {foods
        .filter(food => food.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))
        .map(food => {
        return <FoodBox food={food} key={food.name} handleDelete={handleDelete} />
      })}
      {foods.length === 0 && 
        <div>
          <p>Oops, no more foods...</p>
          <img width="350px" src="https://media.npr.org/assets/img/2016/07/21/emptyplate3_sq-e28860c5cd33831be0ae73b3508394d777c1bd8a.jpg" alt="food is over"/>
        </div>}
    </Row>
    </div>
  );
}

export default App;
