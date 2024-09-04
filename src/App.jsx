import axios from "axios";
import { useEffect, useState } from 'react';
import Pokemon from "./components/Pokemon.jsx";
import './App.css';

function App() {
  const [pokemons,setPokemons]=useState([]);
  const [search,setSearch]=useState("");
  const [filteredPokemons,setFilteredPokemons]=useState([]);
  const fetch=async()=>{
    try{
      let result=await axios.get("https://pokeapi.co/api/v2/pokemon");
      const list=result.data.results;
      setPokemons(list);
      setFilteredPokemons(list);
      console.log(result.data.results);
    }catch(err){
      console.log(err);
    }
  }
  const handlesearch = () => {
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPokemons(filtered);
  };
  
   useEffect(()=>{
      fetch();
   },[]);

   useEffect(()=>{
    handlesearch();
   },[search]);

  return (
    <>
    <h1 className="heading">Pokemons</h1>
    <div className="search">
         <input 
              type="text" 
              value={search} 
              onChange={(e)=>setSearch(e.target.value)}
          />
         <button onClick={handlesearch}>Search</button>
    </div>
    <div className="pokemon-list">
      {filteredPokemons.length>0 ? 
      (filteredPokemons.map((pokemon,index)=>{
      return <Pokemon key={index} pokemon={pokemon} />
       }))
     : (<p>no pokemon found</p>)}
    
    </div>
    </>
  )
}

export default App
