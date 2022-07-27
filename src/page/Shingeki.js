import React,{ useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import css from '../styles/shingeki.module.css';

const Shingeki = () => {
  const [personajes, setPersonajes] = useState([])
  const [titan, setTitan] = useState([])

  useEffect(() => {

    fetch('https://attackontitanapi.herokuapp.com/api/characters')
      .then((response) => response.json())
      .then((response) => setPersonajes(response))
      .catch((error) =>   console.log(error));

  },[])

  useEffect(() => {

    fetch('https://attackontitanapi.herokuapp.com/api/titans')
      .then((response) => response.json())
      .then((response) => setTitan(response))
      .catch((error) =>   console.log(error));

  },[])
  
  
  return (
    <>
    <Navbar />
      <div className={css.gridContainer}>
          <h1 className={css.gridContainer_tiPersonajes}>characters</h1>
          <section className={css.gridContainer_sectionPersonajes}>
          {personajes.map((el)=> (
             <article key={el.name.toString()} className={css.gridContainer_sectionPersonajes_article}>
              <main className={css.gridContainer_sectionPersonajes_main}> <h1 >{el.name}</h1></main>   
               <img src={el.picture_url} alt="" width="250px" height="200px" /> 
               <p>Gender:   {el.gender}</p>
             </article>
          )
          )}
          </section>
          <h1 className={css.gridContainer_tiTitan}>Titans</h1>
          <section className={css.gridContainer_sectionTitan}> 
          {titan.map((el)=> (
             <article key={el.name.toString()} className={css.gridContainer_sectionTitan_article} >
             <main className={css.gridContainer_sectionPersonajes_main}> <h1>{el.name}</h1></main>
             <img src={el.picture_url} alt="" width="250px" height="200px" /> 
             <p >Height:  {el.height_m}  mts</p>
             <p >Description: <br></br>{el.description}</p>

             </article>
          )
          )}
          </section>
          
      </div>
    </>
  )
}

export default Shingeki