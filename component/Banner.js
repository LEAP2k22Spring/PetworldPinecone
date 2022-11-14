import * as React from 'react';
import styles from '../styles/Home.module.css'


export default function Banner() {

    return (
      <div className={styles.banner_wrapp}>
        <div className={styles.wrapper_2}>
          <div className={styles.image_wrapper_2}>
          <img src="https://i.pinimg.com/564x/57/f0/f3/57f0f34183465b280c5bff21fa76f2de.jpg" /></div>
          <div className={styles.header_wrapper_1}>
            <h1>Poster Art</h1>
            <h1>See Project</h1>
          </div>
        </div>
        <div class={styles.wrapper_2}>
            <div className={styles.image_wrapper_2}>
            <img className={styles.book_design_image} src="https://img.freepik.com/fotos-premium/accesorios-perros-comida-juguetes-sobre-fondo-morado-endecha-plana-vista-superior_46208-94.jpg?w=1380" /></div>
            <div className={styles.header_wrapper_2}>
              <h1>Book Design</h1>
              <h1>See Project</h1>
            </div>
        </div>
      </div>
    )
}