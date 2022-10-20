const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 1,
    },
  },
};

const titleAni = {
  hidden: {y: 200},
  show: {y: 0, transition: {duration: 0.7, ease: 'easeOut'}},
};

export {pageAnimation, titleAni};
