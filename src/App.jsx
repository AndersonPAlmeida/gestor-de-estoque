import { Home } from './pages/Home';
import './global.css';
import { ItemInStock } from './pages/ItemInStock';
import { ItemIndividual } from './pages/ItemIndividual';

export function App() {
  return (
    <>
      <Home/>
      <ItemInStock />
      <ItemIndividual />
    </>
  )
}
