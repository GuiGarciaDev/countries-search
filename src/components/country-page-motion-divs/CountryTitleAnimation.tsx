import { motion } from "framer-motion";

function CountryTitleAnimation({ children, delay = 0 }: any) {
  return (
    <motion.div
      className="container"
      initial={{ scale: 1, translateY: -35, opacity: 0 }}
      animate={{ scale: 1, translateY: 0, opacity: 100 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: delay,
      }}
    >
      <>{children}</>
    </motion.div>
  );
}

export default CountryTitleAnimation;
