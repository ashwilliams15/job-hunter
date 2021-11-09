import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTechnologies } from '../store/technologies';

const LearnedTechnologies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTechnologies())
  }, [])

  const technologies = useSelector(state => state.technologies)

  const learned = technologies.filter((technology) => technology.checked === true)

  return (
    <div className="learnedTechnologies">
      <h1>Technologies I Have Learned</h1>
      {learned.map((tech) => (
        <li key={tech.id}>
          {tech.name}
        </li>
      ))}
    </div>
  )
}

export default LearnedTechnologies;
