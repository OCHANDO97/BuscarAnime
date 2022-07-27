import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import css from "../styles/home.module.css";
import "../app.module.css";
import searchIng from "../assets/search.png";
import {  NavLink } from "react-router-dom";
import {useLocalStorage} from "../components/useLocalStorage";

function Home() {
  
  const [searchInput, setSearchInput] = useState({
    search:""
  });
  const [dataPopular, setDataPopular] = useState([])
  const [dataAnime, setDataAnime] = useLocalStorage('anime',"")

  setTimeout(() => {
    window.localStorage.removeItem("anime")
  }, 100000);
  
  const handleChangeSearch = (e) => {
      setSearchInput({search: e.target.value});
  }

  const handleSubmitSearch =  (e) => {
    e.preventDefault(); 
    if (searchInput.search === "") {
    } else {
     
      fetch(`https://api.jikan.moe/v4/anime?q=${searchInput.search}`)
      .then(responde => responde.json())
      .then(responde => setDataAnime(responde.data))
      .catch(err => console.error(err));

      e.target.reset()
    }
    
  } 


  useEffect(() => {
    fetch('https://api.jikan.moe/v4/watch/promos/popular')
        .then(responde => responde.json())
        .then(responde => setDataPopular(responde.data))
        .catch(err => console.error(err));

  }, [])

  
  
  
  return (
    <>
      <Navbar />
      <div className={css.gridContainer}>
       
        <div className={css.cardSearch}>
            <form className={css.cardSearch_form} onSubmit={handleSubmitSearch} >
          <input
            type="text"
            className={css.cardSearch_input}
            placeholder="buscar"
            
            onChange={handleChangeSearch}
          />
          <button type="submit" className={css.cardSearch_btn} >
            <img src={searchIng} alt="" width="30px" height="30px" />
          </button>
          </form>
        </div>
        <section className={css.sectionPopular}>
                <h1 className={css.sectionPopular_title}>Animes populares</h1>
                <main className={css.sectionPopular_main}>
            {
                dataPopular.map((el)  => (   
                  <a key={el.entry.title.toString()} className={css.sectionPopular_main_enlaces} href={el.trailer.url} target="_blank" rel="noreferrer" >
                 
                     <article  className={css}>
                         <img  src={el.entry.images.jpg.large_image_url} alt="" width="180px" height="180px" />
                         <p  className={css.sectionPopular_main_txt}>{el.entry.title}</p>
                    </article>  
                </a> 

                ))
            }
            </main>
        </section>
        

        <div className={css.animesSearch}>
              <section >
                  <main className={css.animesSearch_main}>
                    {
                      dataAnime !== "" ? 
                      
                      dataAnime.map((el)  => (    
                        <NavLink className={css.sectionPopular_main_enlaces} key={el.mal_id} to={`/anime/${el.mal_id}`}   > 
                          <article  className={css}>
                            <img  src={el.images.jpg.large_image_url} alt="" width="300px" height="250px" />
                             <p  className={css.animesSearch_main_txt}>{el.title}</p>

                          </article>   
                       </NavLink>
                   ))
                      
                      : null
                    }
                  </main>
              </section>
        </div>

      </div>
    </>
  );
}

export default Home;
