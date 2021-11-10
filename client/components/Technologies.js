import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTechnologies, putTechnology } from "../store/technologies";

const Technologies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTechnologies());
  }, []);

  const technologies = useSelector((state) => state.technologies);

  const unlearned = technologies.filter(
    (technology) => technology.checked === false
  );

  //when checked, update the value in redux/backend
  const handleCheck = (technology) => {
    dispatch(putTechnology(technology));
    window.alert("Don't forget to add to your resume!");
  };
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
  );
};

export default Technologies;
