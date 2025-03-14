import React from 'react';
import styles from './Css/Quartos.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const accommodations = [
  {
    id: 1,
    name: "Suíte Luxo com Varanda",
    description: "Um espaço amplo com cama king-size, varanda privativa e vista para o mar.",
    image: "https://static.wixstatic.com/media/b87f83_fd189730414e46d39003c5767b995e9b~mv2.jpg/v1/fill/w_649,h_408,q_85,usm_0.66_1.00_0.01/b87f83_fd189730414e46d39003c5767b995e9b~mv2.jpg",
    features: ["Cama king-size", "Banheira de hidromassagem", "Vista para o mar"],
    icons: ["🛏️", "🛁", "🌊"]
  },
  {
    id: 2,
    name: "Quarto Familiar",
    description: "Ideal para famílias, com duas camas de casal, TV de tela plana e ar-condicionado.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/a2/24/de/photo0jpg.jpg?w=1100&h=1100&s=1",
    features: ["2 Camas de casal", "TV de tela plana", "Ar-condicionado"],
    icons: ["🛏️", "📺", "❄️"]
  },
  {
    id: 3,
    name: "Chalé Romântico",
    description: "Perfeito para casais, com cama de dossel, banheira de hidromassagem e vista para o jardim.",
    image: "https://static.wixstatic.com/media/b87f83_3984ca8f5d97472ebe0f78082100ec3a~mv2.jpeg/v1/fill/w_649,h_408,q_85,usm_0.66_1.00_0.01/b87f83_3984ca8f5d97472ebe0f78082100ec3a~mv2.jpeg",
    features: ["Cama de dossel", "Banheira de hidromassagem", "Vista para o jardim"],
    icons: ["🛏️", "🛁", "🌿"]
  },
  {
    id: 4,
    name: "Chalé Romântico",
    description: "Perfeito para casais, com cama de dossel, banheira de hidromassagem e vista para o jardim.",
    image: "https://static.wixstatic.com/media/b87f83_f07179544559435c967a19c767edd577~mv2.jpeg/v1/fill/w_649,h_408,q_85,usm_0.66_1.00_0.01/b87f83_f07179544559435c967a19c767edd577~mv2.jpeg",
    features: ["Cama de dossel", "Banheira de hidromassagem", "Vista para o jardim"],
    icons: ["🛏️", "🛁", "🌿"]
  },
  {
    id: 5,
    name: "Chalé Romântico",
    description: "Perfeito para casais, com cama de dossel, banheira de hidromassagem e vista para o jardim.",
    image: "https://static.wixstatic.com/media/b87f83_372231fb9efe40798c040f28d773e461~mv2.jpg/v1/fill/w_649,h_408,q_85,usm_0.66_1.00_0.01/b87f83_372231fb9efe40798c040f28d773e461~mv2.jpg",
    features: ["Cama de dossel", "Banheira de hidromassagem", "Vista para o jardim"],
    icons: ["🛏️", "🛁", "🌿"]
  },
  {
    id: 6,
    name: "Chalé Romântico",
    description: "Perfeito para casais, com cama de dossel, banheira de hidromassagem e vista para o jardim.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/a2/24/e0/photo2jpg.jpg?w=1100&h=1100&s=1",
    features: ["Cama de dossel", "Banheira de hidromassagem", "Vista para o jardim"],
    icons: ["🛏️", "🛁", "🌿"]
  },
];

const Quartos = () => {
  return (
    <div>
            <div className={styles.Title}>
                <h1>NOSSAS ACOMODAÇÕES</h1>
            </div>
    <div className={styles.accommodationGrid}>
      {accommodations.map((accommodation) => (
        <div
          key={accommodation.id}
          className={styles.accommodationCard}
        >
          <div className={styles.cardImageContainer}>
            <img
              src={accommodation.image}
              alt={accommodation.name}
              className={styles.cardImage}
            />
          </div>
          
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>
              {accommodation.name}
            </h3>
            <p className={styles.cardDescription}>
              {accommodation.description}
            </p>
            
            <div className={styles.featuresList}>
              {accommodation.features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <span className={styles.featureIcon}>{accommodation.icons[index]}</span>
                  <span className={styles.featureText}>{feature}</span>
                </div>
              ))}
            </div>
            
            <button className={styles.bookButton}>
              Reservar Agora
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Quartos;