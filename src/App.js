import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Weather from './pages/Weather';
import ExpenceTracker from './pages/ExpenceTracker';
import TodoList from './pages/TodoList';

function App() {
  const menuItems = [
    {
      id: 1,
      title: "Ana Sayfa",
      link: "/"
    },
    {
      id: 2,
      title: "Hava Durumu",
      link: "/weather"
    },
    {
      id: 3,
      title: "Ödeme Hesaplama",
      link: "/expence-tracker"
    },
    {
      id: 4,
      title: "Yapılacaklar Listesi",
      link: "/todo-list"
    }
  ]

  return (
    <>
      <Header menuItems={menuItems} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home menuItems={menuItems} />} />
          <Route path='/weather' element={<Weather />} />
          <Route path='/expence-tracker' element={<ExpenceTracker />} />
          <Route path='/todo-list' element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
