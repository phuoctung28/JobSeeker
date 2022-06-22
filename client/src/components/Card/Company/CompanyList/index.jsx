import React from 'react'
import { CompanyCard } from '..'
export const CompanyList = ({companyList}) => {
  return (
    <div className='d-flex justify-content-center justify-content-evenly'>
      {/* <CompanyCard />
      <CompanyCard />
      <CompanyCard /> */}
      {companyList.map((company, index) => (
        <CompanyCard company={company} key={index} />
      ))}
    </div>
  )
}