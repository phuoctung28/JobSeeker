import React from 'react'
import { CategoryCard } from '..'

export const CategoryList = () => {
  return (
    <div className='d-flex justify-content-center justify-content-evenly'>
      <CategoryCard category="Marketing"/>
      <CategoryCard category="Design"/>
      <CategoryCard category="Business"/>
      <CategoryCard category="IT"/>
      <CategoryCard category="Education"/>
      <CategoryCard category="Media"/>
    </div>
  )
}
