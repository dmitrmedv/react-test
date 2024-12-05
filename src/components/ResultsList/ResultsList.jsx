import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const ResultsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  //   useEffect(() => {
  //     console.log(searchParams.get('name'));
  //   }, [searchParams]);
  return (
    <>
      <p>{searchParams.get('name')}</p>
    </>
  );
};

export default ResultsList;
