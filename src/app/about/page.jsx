import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>About Us</h2>
          <h1 className={styles.title}>
            Share coding insights, tutorials, debugging tips, and tech trends.
          </h1>
          <p className={styles.desc}>
            Welcome to Code Blog Hub, your go-to space for everything coding! At
            Code Blog Hub, we aim to simplify the world of programming by
            sharing valuable insights, practical tutorials, and real-world
            examples that cater to developers of all skill levels. Whether 
            {" you're"} a beginner looking to get started or an experienced coder
            seeking fresh ideas, we have something for you.
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 K +</h1>
              <p>Developers</p>
            </div>
            <div className={styles.box}>
              <h1>100 K +</h1>
              <p>Blogs published</p>
            </div>
            <div className={styles.box}>
              <h1>1M +</h1>
              <p>Daily views</p>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/about.png" alt="About image" fill />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
