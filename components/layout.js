import { motion } from "framer-motion";

const Layout = ({ children }) => {

    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: {},
    }

    return (
        <motion.div
            // initial={{ x: 300, opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            // exit={{ x: 300, opacity: 0 }}
            // transition={{
            //     type: "spring",
            //     stiffness: 260,
            //     damping: 20,
            // }}
            // initial={{ opacity: 0, x: -200, y: 0 }}
            // animate={{ opacity: 1, x: 0, y: 0 }}
            // exit={{ opacity: 0, x: 0, y: -100 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}

        // variants={variants} // Pass the variant object into Framer Motion 
        // initial="hidden" // Set the initial state to variants.hidden
        // animate="enter" // Animated state to variants.enter
        // exit="exit" // Exit state (used later) to variants.exit
        // transition={{ type: 'linear' }} // Set the transition to linear
        >
            {children}
        </motion.div>
    )
}
export default Layout;

