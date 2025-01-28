import styles from './App.module.css';
import Header from './Header'
import Footer from './Footer'
import Main from './Main';
import CourseInfo from './CourseInfo'

function App() { // базовый компонент
  return (
    <>
      <Header/>
      <Main/>
      <CourseInfo />
      <Footer/>
    </>
  );
}

export default App; // обновляет всю страницу
