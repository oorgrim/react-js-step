import styles from './Main.module.css';

function Main() { // базовый компонент (если гаписано export, то брать в фигурные скобочки)
  return (
    <>
        <div>
            <section className={styles.cont}>
                <h1>ITSTEP</h1>
                <img 
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fantalya.itstep.org%2F&psig=AOvVaw1bl2J-7QbPpe1l2GJbheT_&ust=1736524814069000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOir89OA6YoDFQAAAAAdAAAAABAT"
                alt="info"
                className={styles.imgmaincontent}

                />
                <h1>Welcome to Itstep</h1>
                <p>we are the best programming school in the world</p>
            </section>
        </div>
    </>
  );
}

export default Main; // обновляет всю страницу
