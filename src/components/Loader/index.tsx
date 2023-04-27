import { motion } from "framer-motion";
import c from "./styles.module.scss";

type Props = {};

const Loader = (props: Props) => {
  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className={c.loader}
    >
      {/* <div className={c.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> */}
    </motion.div>
  );
};

export default Loader;
