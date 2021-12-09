import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanies, destroyCompany } from "../store/companies";

const Companies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);

  const companies = useSelector((state) => state.companies);

  const handleDelete = (company) => {
    dispatch(destroyCompany(company));
  };

  return (
    <div className="companies">
      <h1>Companies I'm Interested In</h1>
      <div className="companyList">
        {companies.map((company) => (
          <div key={company.id}>
            <li style={{ display: "inline" }}>
              {company.name} | Notes: {company.notes}
            </li>
            <button onClick={() => handleDelete(company)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
