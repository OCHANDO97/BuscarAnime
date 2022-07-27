import React, {useState, useEffect} from 'react'
import {useParams,NavLink } from 'react-router-dom';
import estrellaEscore from '../assets/estrellaEscore.png';
import "../app.module.css";
import css from '../styles/pageAnime.module.css';
import Navbar from "../components/Navbar";

const PageAnime = () => {
    let {id, } = useParams()
    const [animeID, setAaimeID] = useState([])
    const [animeImagen, setAnimeImagen] = useState("");

   

    useEffect(() => {  
      if (animeID.images === undefined) {  
    } else {
      setAnimeImagen(animeID.images.jpg.image_url);
    }
        fetch(`https://api.jikan.moe/v4/anime/${id}` )
          .then( (response) => response.json())
          .then((responde) => setAaimeID(responde.data))
          .catch(err => console.error(err));
          },[animeID.images,id])

  return (
    <>
    <Navbar />
    <section className={css.container_section}>
        
        <h1 className={css.container_section_title}>{animeID.title}</h1>
        <aside className={css.container_section_aside}>
          {animeID.year ? <p> {animeID.year} , </p> : null } 
          <p>  {animeID.status}</p>
         {animeID.episodes ? <p>, {animeID.episodes} episodios</p>: null }
        </aside>
        <aside className={css.container_section_genero}>
          {
            animeID.genres === undefined ? <h1>no hay</h1> : 

            animeID.genres.map((el) => (
              <p key={el.name.toString()}>{el.name}</p>
              ))
                    
          }
        </aside>
        <img className={css.container_section_img} src={animeImagen} alt="" width="450px" height="450px" />
        <p className={css.container_sectio_resumen}> {animeID.synopsis}</p>
          {animeID.score ? <p className={css.container_sectio_score}> <img className={css.container_sectio_score_img} src={estrellaEscore} alt="" width="15px" height="15px" /> <strong className={css.figcaption}>score</strong>{animeID.score}</p> : <p></p> }
          
          {
          animeID.title === undefined ? <p></p> :
          animeID.title.includes('Shingeki')  ? <NavLink className={css.container_personajesAPI} to="/shingeki"> <p >Descripcion de personajes</p></NavLink> : <p></p>
          } 
          
    </section>
     
      </>
  )
}

export default PageAnime