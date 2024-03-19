import AnimatedRoutes from './AnimatedRoutes';
import './App.css';
import Design from './components/Design';
import { BrowserRouter } from 'react-router-dom';
import { useTheme } from './Them';
import { useEffect } from 'react';
function App() {
  const { theme, toggleTheme } = useTheme();
 
  return (
    <BrowserRouter>

        <AnimatedRoutes />
      {/* <Design /> */}
    </BrowserRouter>
  );
}

export default App;
