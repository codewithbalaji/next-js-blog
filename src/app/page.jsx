import Image from "next/image";
import styles from "./home.module.css";
import Buttons from "@/components/buttons/Buttons";


const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Create Debug Share.</h1>
        <p className={styles.desc}>
          Welcome to Code Blog Hub, where coding knowledge meets creativity!
          Discover tutorials, debugging tips, and programming insights crafted
          to enhance your coding journey and fuel your passion for tech.
        </p>
        <Buttons/>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
