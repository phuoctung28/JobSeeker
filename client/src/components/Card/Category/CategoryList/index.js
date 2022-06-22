import React, { useEffect, useState } from 'react'
import { CategoryCard } from '..'
import { loadAllCategory } from '../../../../context/ActionCreator';

export const CategoryList = () => {
  const [categoryInfo, setCategory] = useState([]);
  useEffect(() => {
    loadAllCategory().then((result) => {
      setCategory(result.data)
      console.log(result.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  return (
    <div className='d-flex justify-content-center justify-content-evenly'>
    {categoryInfo.map((category, index) => (
      <CategoryCard category={category} key={index}/>
    ))}
    </div>
  )
}
