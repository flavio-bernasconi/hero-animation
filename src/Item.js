import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { items } from "./data";
import { container } from "./const";
import { DemoSection } from "./DemoSection";

export function Item({ id }) {
  console.log(items.find((item) => item.id === id));

  const {
    category,
    title,
    img,
    tech,
    demo,
    code,
    subtitle,
    description,
  } = items.find((item) => item.id === id);

  document.body.style.overflow = "hidden";

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="overlay"
      >
        <Link to="/" />
      </motion.div>
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <Link className="btn-close" to="/">
            X
          </Link>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={img} alt="" />
            {/* <div className="card-image bk" /> */}
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
          <motion.div className="content-container" variants={container}>
            <DemoSection code={code} demo={demo} />
            <div style={{ marginTop: "30px" }}>
              <p className="subtitle">{subtitle}</p>
              <div className="techs">
                {tech.map((e, i) => (
                  <p key={i}>{e}</p>
                ))}
              </div>
              <p className="split">{description}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
