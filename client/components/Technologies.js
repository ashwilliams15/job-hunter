import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTechnologies, putTechnology } from '../store/technologies';

const Technologies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTechnologies())
  }, []);

  const technologies = useSelector(state => state.technologies);

  const unlearned = technologies.filter((technology) => technology.checked === false)

  //when checked, update the value in redux
  const handleCheck = (technology) => {
    dispatch(putTechnology(technology))
  }
  //@todo conditional render all checkboxes that are set to false
  return (
    <div>
      <div className="technologies">
        <h1>Technologies I Want to Learn</h1>
        <div>
          {unlearned.map((technology) => (
            <div key={technology.id}>
            <input
              type="checkbox"
              checked={false}
              onChange={() => handleCheck(technology)}
            />
            <label htmlFor={technology.id}>{technology.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Technologies;
