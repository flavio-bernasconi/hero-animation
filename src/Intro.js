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
              Junior frontend developer.
            </motion.h3>
            <motion.p variants={item} className="split">
              Check out the lastest projects I developed. You can find all my
              codes on my
              <a
                href={"https://github.com/flavio-bernasconi"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <b> GitHub page</b>
              </a>
              . I am currently seeking a challenging job to improve my coding
              skills and use my knowledge in a creative way.
            </motion.p>
          </motion.div>
        </motion.div>
        <div className="blob" />
      </div>
    </>
  );
}
