import styled from 'styled-components';
import {MovieState} from '../movieState';
import {useEffect, useState} from 'react';

function MovieDetail() {
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  const awards = movies.awards;

  const url = window.location.pathname;

  useEffect(() => {
    const curMovie = movies.filter((stateMovie) => {
      return stateMovie.url === url;
    });
    setMovie(curMovie[0]);
  }, [movies, url]);
  return (
    <>
      {movie && (
        <Details>
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="mainImage" />
          </HeadLine>
          <Awards>
            {awards?.map((award) => {
              return (
                <Award
                  title={award.title}
                  description={award.description}
                  key={award.title}
                />
              );
            })}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="secondaryImg" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
}

const Award = ({title, description}) => {
  return (
    <AwardStyle style={{height: '100%'}}>
      <h3>{title}hello</h3>
      <div className="line"></div>
      <p>{description}Description</p>
    </AwardStyle>
  );
};

const Details = styled.div`
  color: #fff;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 90%;
    display: block;
    margin: 2rem auto;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const AwardStyle = styled.div`
  background: red;
  border: 1px solid red;
  padding: 5rem;
  color: #fff;

  h3 {
    font-size: 3rem;
    border: 1px solid red;
  }
  .line {
    width: 50%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }
  p {
    border: 1px solid red;
    padding: 2rem 0;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 90%;
    display: block;
    margin: 2rem auto;
    height: 70vh;
    object-fit: cover;
  }
`;

export default MovieDetail;
