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
              I'm a junior frontend developer.
            </motion.h3>
            <motion.p variants={item} className="split">
              It's been almost a year since a started to code. This are some
              projects I used to train and improve my code. You can check all my
              code on my github page.
            </motion.p>
          </motion.div>
        </motion.div>
        <div className="blob" />
      </div>
    </>
  );
}
