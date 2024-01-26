import { useRouter } from 'next/router';
import PokemonDetails from '../components/PokemonDetails';
 
const PokemonPage = ({ pokemon }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Cargando...</p>;
  }

  const { name, image, type, height, weight, abilities, stats } = pokemon;

  return (
    <div>
      <PokemonDetails
      
        name={name}
        image={image}
        type={type}
        height={height}
        weight={weight}
        abilities={abilities}
        stats={stats}
        
      />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  try {
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    const pokemon = await response.json();
    return { props: { pokemon } };
  } catch (error) {
    console.error('Error:', error);
    return { props: {} };
  }
}

export default PokemonPage;
