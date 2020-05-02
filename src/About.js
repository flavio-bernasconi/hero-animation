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
              <motion.h3 variants={item} className="split">
                I am from a small village near Como. After graduating in
                graphics and design, I undertook a one year course in
                multichannel communication in Varese. Afterwards, I followed a
                six months intensive online course through Boolean Careers. The
                latter has allowed me to gain a position as junior frontend
                developer at Accurat in Milan, which introduced me to data
                visualization with React and D3 js.
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
