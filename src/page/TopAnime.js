import React, {useState, useEffect}  from 'react'
import Navbar from '../components/Navbar'
import "../app.module.css";
import css from '../styles/topAnime.module.css';

function TopAnime() {

    const [datosTop, setDatosTop] = useState([]);

    useEffect(() => {
       

        fetch('https://api.jikan.moe/v4/top/anime')
        .then((response) => response.json())
        .then((response) => setDatosTop(response.data) )
        .catch((error) => console.error(error))
    },[])

  
    
  return (
    <>
    <Navbar />
    <h1 className={css.title}>Top Anime</h1>
      <section className={css.sectionFlex}> 
        {datosTop.map((el) => (
            <article key={el.title.toString()} className={css.sectionFlex_article}>
              <aside className={css.sectionFlex_article_aside}> <h1 > {el.title}</h1></aside> 
                <img src={el.images.jpg.image_url} alt="" width="300px" height="200px" />   
                <p>{el.year}</p>
                <main className={css.sectionFlex_article_main}>
                { el.genres.map((el) => (
                  <p className={css.sectionFlex_article_main_genero} key={el.name.toString()}>{el.name}</p>
              ))}
              </main>
                <p >score: <span className={css.sectionFlex_article_score} >{el.score}</span> </p>

            </article>
        ) )}
      </section>
    </>
  )
}

export default TopAnime