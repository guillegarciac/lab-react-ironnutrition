import React from 'react'
import { Input } from 'antd';

export default function Search({handleSearch}) {
  const handleChange = (e) => {
    handleSearch(e.target.value)
  }

  return (
    <div>
      <Input value={undefined} type="text" placeholder="search..." onChange={handleChange} />
    </div>
  )
}