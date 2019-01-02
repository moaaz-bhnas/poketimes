import React from 'react';
import Rainbow from '../hoc/Rainbow';

const Home = (props) => {
  return (
    <h2>{props.heading}</h2>
  );
}

export default Rainbow(Home);