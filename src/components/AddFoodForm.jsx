import React, { useState } from 'react'
import { Divider, Input } from 'antd';

// Iteration 4
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
      <Divider>Add Food Entry</Divider>
      <label>Name</label>
      <Input name="name" value={newFood.name} type="text" onChange={handleChange} />
      <label>Image</label>
      <Input name="image" value={newFood.image} type="text" onChange={handleChange} />
      <label>Calories</label>
      <Input name="calories" value={newFood.calories} type="number" onChange={handleChange} />
      <label>Servings</label>
      <Input name="servings" value={newFood.servings} type="number" onChange={handleChange} />
      <button type="submit">Create</button>
    </form>
  );
}