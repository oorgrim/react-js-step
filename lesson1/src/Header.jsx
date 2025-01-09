import Footer from './App.module.css'


function Header() { // базовый компонент
  return (
    <>
      <header className={styles.header}>
        <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AStep_Academy_logo.jpg&psig=AOvVaw2snBwZzliMLMIeU2aLJZ3P&ust=1736523920768000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOC-2Kf96IoDFQAAAAAdAAAAABAS" 
        alt="ITStep" 
        className='{styles.imglogo}'
        />
        <nav className='{styles.navbar}'>
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </nav>
        <button className='{styles.btnsignup}'>
          Sign Up
        </button>
      </header>
    </>
  );
}

export default Header; // обновляет всю страницу
