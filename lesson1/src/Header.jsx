import styles from './Header.module.css';


function Header() { // базовый компонент
  return (
    <>
      <header className={styles.header}>
      <img
        src="https://cdn1.flamp.ru/95098ff9cfa8433d48c8ca742becaab8_600_600.jpeg" 
        alt="ITStep" 
        className={styles.imglogo}
      />
        <nav className={styles.navbar}>
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </nav>
        <button className={styles.btnsignup}>
          Sign Up
        </button>
      </header>
    </>
  );
}

export default Header; // обновляет всю страницу
