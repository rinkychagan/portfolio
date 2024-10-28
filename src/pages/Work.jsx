import React from "react";
import Stairs from "../components/Stairs/stairs";

import { motion } from "framer-motion";
import Card from "../components/Projects/Projects";
import { data } from "../components/Projects/data";

export default function Work() {
  return (
    <div>
      <Stairs>
        <motion.div className="bg-[#5C8357] relative">
          <div className="">
            {data.map((project, i) => {
              return <Card key={`p_${i}`} {...project} i={i} />;
            })}
          </div>
        </motion.div>
      </Stairs>
    </div>
  );
}
