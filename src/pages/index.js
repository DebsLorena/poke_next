import Card from '../components/Card'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useState } from 'react'

export async function getStaticProps() {

  const maxPokemons = 100
  const api = "https://pokeapi.co/api/v2/pokemon/"
  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results
    }
  }
}



export default function Home({ pokemons }) {

  const [numCards, setNumCards] = useState(8);

  const handleShowMore = () => {
    setNumCards(numCards + 8);
  }

  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke <span>Next</span></h1>
          <Image src="/images/pokeball.png" width="50" height="50" alt="PokeNext" />
      </div>
      <div className={styles.pokemon_container}>
      {pokemons.slice(0, numCards).map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
        </div>
        <div className={styles.title_container}>
        {numCards < pokemons.length && (
          <button className={styles.btn} onClick={handleShowMore}>Ver Mais</button>
        )}
        </div>
    </>
  )
}
