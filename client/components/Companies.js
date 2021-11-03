import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanies } from '../store/companies';

const Companies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanies())
  }, [])

  const companies = useSelector(state => state.companies);

  return (
    <div className='companies'>
      <h1>Companies I'm Interested In</h1>
      <div className='companyList'>
        {companies.map((company) => (
          <li key={company.id}>
            {company.name}
          </li>
        ))}
      </div>
    </div>
  )
}

export default Companies;
