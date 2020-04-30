import React from "react";
import { motion } from "framer-motion";
import { LoremIpsum } from "react-lorem-ipsum";
import { Link } from "react-router-dom";
import { items } from "./data";

export function Item({ id }) {
  const { category, title } = items.find((item) => item.id === id);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link to="/" />
      </motion.div>
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img
              className="card-image"
              src={`https://source.unsplash.com/1600x900/?nature,water`}
              alt=""
            />
            {/* <div className="card-image bk" /> */}
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
            <Link to="/">Close</Link>
          </motion.div>
          <motion.div className="content-container" animate>
            <p className="split">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Suspendisse
              potenti efficitur litora amet. Hendrerit curae in natoque pulvinar
              mattis? At nibh diam urna ante. Mollis sed eros euismod. Pulvinar
              lorem velit faucibus ultricies purus nisl vivamus. Diam habitant
              netus erat quis habitasse.
            </p>
            <img className="img-content" src={`ciga.png`} alt="" />
            <LoremIpsum
              p={3}
              avgWordsPerSentence={6}
              avgSentencesPerParagraph={4}
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
