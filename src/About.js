import React from "react";
import { motion } from "framer-motion";
import { container, item } from "./const";

function About(props) {
  return (
    <div>
      <>
        <div className="intro">
          <motion.div
            className="intro-container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div transition={{ duration: 1.3, delay: 0.1 }}>
              <motion.h1 className="big-title" variants={item}>
                About me
              </motion.h1>
              <motion.h3 variants={item} className="subtitle">
                bla bla bla.
              </motion.h3>
            </motion.div>
          </motion.div>
          <div className="blob" />
        </div>
      </>
    </div>
  );
}

export default About;
