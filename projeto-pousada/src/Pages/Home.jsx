import React from 'react'
import styles from './css/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
      <h1>POUSADA QUINTA DO YPUÃ</h1>
      <p>
        A pousada Quinta do Ypuã oferece ao seus clientes um recanto de aconchego e lazer, em ambiente  rústicoe agradável.  
        Ideal para quem gosta de fugir da rotina e procura um local de paz para descansar e curtir a natureza.
        "O Ypuã tem tudo a ver com a natureza, dá para sentir a energia do lugar. Eu me preocupo se você vai comer bem, 
        dormir bem e se vai se sentir em casa. Vou te mostrar onde encontrar os melhores frutos do mar, 
        onde curtir a melhor praia e as melhores ondas. Mas se você não quiser fazer nada eu também conheço o melhor lugar."
        HEITOR, Anfitrião da pousada
        </p>
      </div>
      
      <div className={styles.container2}>
  <div className={styles.topRow}>
    <img className={styles.img1} src="https://static.wixstatic.com/media/b87f83_7d60555efc05456aacb2215e818c8021~mv2.jpg/v1/crop/x_0,y_1513,w_3648,h_3680/fill/w_301,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1780.jpg" alt="" />
    <img className={styles.img2} src="https://static.wixstatic.com/media/b87f83_3984ca8f5d97472ebe0f78082100ec3a~mv2.jpeg/v1/fill/w_649,h_408,q_85,usm_0.66_1.00_0.01/b87f83_3984ca8f5d97472ebe0f78082100ec3a~mv2.jpeg" alt="" />
  </div>
  <div className={styles.middleRow}>
    <img src="https://static.wixstatic.com/media/b87f83_f07179544559435c967a19c767edd577~mv2.jpeg/v1/fill/w_649,h_408,q_85,usm_0.66_1.00_0.01/b87f83_f07179544559435c967a19c767edd577~mv2.jpeg" alt="" />
  </div>
</div>
    </div>
  )
}

export default Home

