import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';
function ContactUs() {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      ContactUs
    </motion.div>
  );
}

export default ContactUs;
