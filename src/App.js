import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Dashboard from "./pages/Dashboard";
import Blank from './pages/Blank';

//--- Import Styles Files
import "./assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import './sass/app.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="orders" element={<Blank/>}/>
          <Route path="stats" element={<Blank/>}/>
          <Route path="customers" element={<Blank/>}/>
          <Route path="products" element={<Blank/>}/>
          <Route path="settings" element={<Blank/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
