import React from 'react';
import { Card, Col, Button } from 'antd';

export default function FoodBox({food, handleDelete}) {
  const {name, calories, image, servings} = food;
  const totalCalories = calories * servings;
  
  const handleFoodDelete = () => {
    handleDelete(name)
  }

  return (
    <Col>
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt={name} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {totalCalories} </b> kcal
        </p>
        <Button type="primary" onClick={handleFoodDelete} > Delete </Button>
      </Card>
    </Col>
  )
}