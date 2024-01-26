import React from 'react';
import styles from '../styles/PD.module.css'; 

const PokemonDetails = ({ name, image, type, height, weight, abilities, stats }) => {
  return (
    <div className={styles.container}>
      <h1>My Pokemon</h1>
      <h1 className={styles.nombree}>{name}</h1>
      <img className={styles.image} src={image} alt={`Imagen de ${image}`} />
      <div className={styles.details}>
        <h2>About</h2>
        <p>-------</p>
        <div className={styles.detailes}>
          <p className={styles.uwu}>Type:</p>
          <p>{type}</p>
        </div>
        <div className={styles.detailes}>
          <p className={styles.uwu}>Height:</p>
          <p>{height}</p>
        </div>
        <div className={styles.detailes}>
          <p className={styles.uwu}>Weight:</p>
          <p>{weight}</p>
        </div>
        <div>
          <p className={styles.uwu}>Abilities:</p>
          <p>{weight}</p>
          <h2>Stats</h2>
          {Array.isArray(abilities) &&
            abilities.map((ability, index) => (
              <div key={index} className={styles.ability}>
                <p>{ability.name}</p>
                <p>{ability.is_hidden ? 'Hidden' : 'Not Hidden'}</p>
                <p>Slot: {ability.slot}</p>
              </div>
            ))}
        </div>
        
        {stats.map((stat, index) => (
          <div key={index} className={styles.stat}>
            <p>{stat.name}</p>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonDetails;
