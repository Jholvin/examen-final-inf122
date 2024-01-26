import { useRouter } from 'next/navigation';
import axios from 'axios';
import PokemonDetails from '../components/PokemonDetails';

const PokemonPage = ({ pokemon }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>Pagina de pokemones</h1>
      {pokemon ? <PokemonDetails pokemon={pokemon} /> : <p>No hay informacion sobre ese pokemon</p>}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    const pokemon = response.data;
    return { props: { pokemon } };
  } catch (error) {
    console.error('No se reconoce ese pokemon:', error);
    return { props: {} };
  }
}

export default PokemonPage;
