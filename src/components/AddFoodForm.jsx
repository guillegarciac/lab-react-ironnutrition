import React, { useState } from 'react'
import { Input, Button } from 'antd';

export default function AddFoodForm({handleNewFood}) {
  const initialState = {
    name: "",
    image: "",
    calories: 0,
    servings: 1,
  }
  
  const [newFood, setNewFood] = useState(initialState);

  const handleChange = (e) => {
    setNewFood (prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewFood(newFood);
    setNewFood(initialState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <Input name="name" value={newFood.name} type="text" onChange={handleChange} />
      <label>Image</label>
      <Input name="image" value={newFood.image} type="text" onChange={handleChange} />
      <label>Calories</label>
      <Input name="calories" value={newFood.calories} type="number" onChange={handleChange} />
      <label>Servings</label>
      <Input name="servings" value={newFood.servings} type="number" onChange={handleChange} />
      {/* for some reason Button from antd inisde the form doesn't submit */}
      <Button className="btn" type="submit">Add to List</Button>
      <button type="submit">Add to List</button>
    </form>
  );
}