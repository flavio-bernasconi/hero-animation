import React from "react";
import { motion } from "framer-motion";
import { container, item } from "./const";

export function Intro(props) {
  return (
    <>
      <div className="intro">
        <motion.div
          className="intro-container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div transition={{ duration: 1.3, delay: 0.1 }}>
            {/* <motion.p variants={item}>Hi there</motion.p> */}
            <motion.h1 className="big-title" variants={item}>
              Flavio Bernasconi
            </motion.h1>
            <motion.h3 variants={item} className="subtitle">
              junior frontend developer.
            </motion.h3>
            <motion.p variants={item} className="split">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Suspendisse
              potenti efficitur litora amet. Hendrerit curae in natoque pulvinar
              mattis? At nibh diam urna ante. Mollis sed eros euismod. Pulvinar
              lorem velit faucibus ultricies purus nisl vivamus. Diam habitant
              netus erat quis habitasse.
            </motion.p>
          </motion.div>
        </motion.div>
        <div className="blob" />
      </div>
    </>
  );
}
