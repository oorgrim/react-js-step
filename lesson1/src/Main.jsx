import styles from './Main.module.css';

function Main() { // базовый компонент (если гаписано export, то брать в фигурные скобочки)
  return (
    <>
        <div>
            <section className={styles.cont}>
                <center><h1>ITSTEP</h1>
                <img 
                src="https://gorodvitebsk.by/images_data/test/e162f50cc800d4a7fa2eae95acfc8928.jpg"
                alt="info"
                className={styles.imgmaincontent}

                />
                <div className="welcome">
                <h1>Welcome to Itstep!</h1>
                <h3>we are the best programming school in the world</h3>
                </div>
                </center>
            </section>
        </div>
    </>
  );
}

export default Main; // обновляет всю страницу
