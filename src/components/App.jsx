import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';
import Search from 'pages/Search/Search';
import Info from 'pages/Info/Info';
import Card from './Card/Card';
import Counter from 'pages/Counter/Counter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTodos } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />}>
            <Route index path=":id" element={<Card />} />
          </Route>
          <Route path="info" element={<Info />} />
          <Route path="counter" element={<Counter />} />
        </Route>
      </Routes>
    </>
  );
};
