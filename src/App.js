import { Outlet, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import './App.css';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<LoginPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path=":movieId" element={<DetailPage />} />
        <Route path="search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;