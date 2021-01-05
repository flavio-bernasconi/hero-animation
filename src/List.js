import React from "react";
import { items } from "./data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Card({ project }) {
  const { id, data } = project;
  console.log(data.id);
  document.body.style.overflow = "auto";

  return (
    <li className={`card`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={data.image.url} alt="" />
            {/* <div className="card-image bk" /> */}
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            {/* <span className="category">{category}</span> */}
            <h2>{data.name[0].text}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link to={"/" + id} className={`card-open-link`} />
    </li>
  );
}

export function List({ selectedId, listProjects }) {
  return (
    <ul className="card-list">
      {listProjects.map((project) => {
        console.log(project);
        return <Card key={project.uid} project={project} />;
      })}
    </ul>
  );
}
