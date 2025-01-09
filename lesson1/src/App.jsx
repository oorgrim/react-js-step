import styles from './App.module.css'
import Header from './Header'
import Footer from './Footer'
import Main from './Main';

function App() { // базовый компонент
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App; // обновляет всю страницу
