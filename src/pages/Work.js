import styled from 'styled-components';
import {Link} from 'react-router-dom';
import athlete from '../imgs/athlete-small.png';
import theracer from '../imgs/theracer-small.png';
import goodtimes from '../imgs/goodtimes-small.png';

import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

function Work() {
  return (
    <OurWork
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link>
          <img src={athlete} alt="athlete" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link>
          <img src={theracer} alt="theracer" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Good Times</h2>
        <div className="line"></div>
        <Link>
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
    </OurWork>
  );
}

export default Work;

const OurWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0;
    color: #fff;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
