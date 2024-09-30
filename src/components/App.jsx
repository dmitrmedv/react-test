import { useEffect, useState } from 'react';
import { List } from './List/List';
import axios from 'axios';

export const App = () => {
  const [list, setList] = useState(null);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/letters');
        setList(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchList();
  }, []);

  return <>{<List list={list}></List>}</>;
};
