import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './global.css';
import { StockContextProvider } from './contexts/StockContext';

export function App() {
  return (
    <StockContextProvider>
      <RouterProvider router={router} />
    </StockContextProvider>
  )
}
