import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTechnologies } from '../store/technologies';

const Technologies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTechnologies())
  }, []);

  const technologies = useSelector(state => state.technologies);

  return (
    <div className="technologies">
      <h1>Technologies I Want to Learn</h1>
      <div>
        {technologies.map((technology) => (
          <li key={technology.id}>
            {technology.name}
          </li>
        ))}
      </div>
    </div>
  )
}

export default Technologies;
