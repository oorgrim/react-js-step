import styles from './CourseInfo.module.css';

function CourseInfo() {
  return (
    <div>
      <section className={styles.cont}>
        <center><h1>Our Courses:</h1>
        <p>we have a wide range of courses:</p></center>
        <div className={styles.courses}>
          <div className={`${styles.courseItem}`}>
            <div className={`${styles.face}`}>cybersecurity</div>
            <div className={`${styles.back}`}>The study of the multilevel OSI model, encapsulation, principles of interaction and network devices: switches, routers and firewalls.</div>
          </div>
          <div className={`${styles.courseItem}`}>
            <div className={`${styles.face}`}>design</div>
            <div className={`${styles.back}`}>Create collages, retouch photos, restore old photos, and more.</div>
          </div>
          <div className={`${styles.courseItem}`}>
            <div className={`${styles.face}`}>software engineering</div>
            <div className={`${styles.back}`}>You will study HTML, CSS, JavaScript, React, learn how to use them to create websites and web applications, and learn their capabilities.</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CourseInfo;
