import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import ListPage from 'pages/ListPage';
import ProductsPage from 'pages/ProductsPag';
import NotFound from 'pages/NotFound';
import LayOut from 'LayOut';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<HomePage/>}></Route>
        <Route path="list" element={<ListPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
