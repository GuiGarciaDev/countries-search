import { motion } from "framer-motion";

function BorderCoutriesAnimation({ children, delay }: any) {
  return (
    <motion.div
      className="container"
      initial={{ scale: 1, translateY: 25, opacity: 0 }}
      animate={{ scale: 1, translateY: 0, opacity: 100 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.45,
      }}
    >
      <>{children}</>
    </motion.div>
  );
}

export default BorderCoutriesAnimation;