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
                Born in 1996, living in a small village near Como. In may 2019,
                I've stated the <b>Boolean Careers</b> course, an intensive
                programming course last six months and from then I started to
                code almost <b> every day</b>. <br /> <br />
                After the course I worked 4 months at
                <b> Accurat</b> in Milan, an honor to me. Where they introduced
                me to <b> React</b> js and also <b>data visualization</b> with
                <b> D3</b>. Never heard of it but it's cool I liked it. <br />
                <br />
                I've also learnt what it really means writing good code, how it
                looks and how you think to get there and so now, I'm trying to
                improve the
                <b> quality and readability of my code</b>.
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
