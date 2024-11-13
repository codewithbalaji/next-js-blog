import React from 'react'
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        codewithbalaji
      </div>
      <div className={styles.text}>
        codewithbalaji © All rights reserved.
      </div>
    </div>
  )
}

export default Footer