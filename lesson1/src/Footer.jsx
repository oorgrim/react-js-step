import styles from './App.module.css'
import Header from './Header'
import Footer from '.Footer'

function App() { // базовый компонент
  return (
    <>
    <div className="{styles.container}">
      <nav className='navbar'>
       <span>home</span>
       <span>about</span>
       <span>contact</span></nav>
    </div>
    <div className="{styles.maincontent}">
      <main>
        <section>
          <h1>react is the best</h1>
        </section>
      </main>
    </div>
      {/* <h1>{qwerty}</h1> */}
    </>
  );
}

export default App; // обновляет всю страницу
