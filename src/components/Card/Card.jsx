import React from 'react';
import { useParams } from 'react-router-dom';

const Card = () => {
  const { id } = useParams();
  console.log(id);
  return <h2>Card {id}</h2>;
};

export default Card;
