import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTechnologies, destroyTechnology } from "../store/technologies";

const LearnedTechnologies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTechnologies());
  }, []);

  const technologies = useSelector((state) => state.technologies);

  const learned = technologies.filter(
    (technology) => technology.checked === true
  );

  const handleDelete = (tech) => {
    dispatch(destroyTechnology(tech));
  };

  return (
    <div className="learnedTechnologies">
      <h1>Technologies I Have Learned</h1>
      {learned.map((tech) => (
        <div key={tech.id}>
          <li>{tech.name}</li>
          <button onClick={() => handleDelete(tech)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default LearnedTechnologies;
