import React, { useState, useEffect } from 'react';
import RecipeCard from './components/RecipeCard';
import RecipeEntry from "./components/RecipeEntry";
import './App.scss';
import firebase from "./utils/firebase";

import socketIOClient from "socket.io-client";

const ENDPOINT = "https://still-hamlet-76887.herokuapp.com/?EIO=3&transport=polling";
// const ENDPOINT = "http://localhost:4001/"

function App() {

  const [allRecipes, setAllRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [tagsList, setTagsList] = useState([])
  const [sortBy, setSortBy] = useState("TIME_DESC");
  const [query, setQuery] = useState("");
  const [loadClient, setLoadClient] = useState(true);
  const [url, setUrl] = useState("");
  const [isOverlay, setIsOverlay] = useState(false);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {

    const recipesRef = firebase
      .firestore()
      .collection("recipes")

    let unsubscribe;

    unsubscribe = recipesRef
      .orderBy(sortOptions[sortBy].column, sortOptions[sortBy].direction)
      .onSnapshot((snapshot) => {
        const newRecipes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setAllRecipes(newRecipes)
        setFilteredRecipes(newRecipes)
        setQuery("")
      })

    return () => unsubscribe()
  }, [sortBy])

  useEffect(() => {
    let arr = []
    allRecipes.forEach(recipe => {
      let tags = recipe.tags
      tags.forEach(tag => {
        let cleanedTag = tag.toLowerCase().trim()
        if (!arr.includes(cleanedTag)) {
          arr.push(cleanedTag)
        }
      })
    })
    setTagsList(arr.sort())
  }, [allRecipes])

  useEffect(() => {
    const searchAllRegex = query && new RegExp(`${query}`, "gi");
    const result = allRecipes.filter(
      recipe =>
        (!searchAllRegex || searchAllRegex.test(recipe.title) + searchAllRegex.test(recipe.author) + searchAllRegex.test(recipe.tags))
    );
    setFilteredRecipes(result);
  }, [query])

  const scrapeData = () => {
    setIsOverlay(true);
    const socket = socketIOClient(ENDPOINT);
    socket.on("connect", function () {
      socket.emit("from_client", url);
    });

    socket.on("from_server", data => {
      console.log('Connection to server established.', data);
      if (data === null) {
        setRecipe({
          title: "",
          imgSrc: "",
          author: "",
          description: "",
          tags: [],
          notes: []
        })
      } else {
        setRecipe(data);
      }
    });

    // CLEAN UP THE EFFECT
    return () => socket.disconnect();
  }

  const sortOptions = {
    "TIME_ASC": { column: "timestamp", direction: "asc" },
    "TIME_DESC": { column: "timestamp", direction: "desc" },
    "TITLE_ASC": { column: "title", direction: "asc" },
    "TITLE_DESC": { column: "title", direction: "desc" },
    "COOKED": { column: "hasMade", direction: "desc" },
    "NOT_COOKED": { column: "hasMade", direction: "asc" }
  }

  const disconnect = () => {
    setIsOverlay(false);
    setRecipe({});
    setUrl("");
  }

  const connect = (e) => {
    e.preventDefault();
    scrapeData();
  }

  return (
    <div id="client_page">
      <div className="overlay"
        style={isOverlay && url.length ? { display: "block" } : { display: "none" }}
      >
        {loadClient && url && isOverlay ?
          (<div className="entry_popup">
            {Object.keys(recipe).length ?
              <>
                <header className="popup-header">
                  <div className="back">
                    <button onClick={() => disconnect()}></button>
                  </div>
                  <h3><em>Example Recipe Entry:</em></h3>
                </header>
                <RecipeEntry
                  recipe={recipe}
                  key={recipe.id}
                  url={url}
                  setRecipe={setRecipe}
                  setIsOverlay={setIsOverlay}
                  setUrl={setUrl}
                />
              </>
              :
              <>
                <div className="dog-loader">
                  <div className="dog-head">
                    <img src="http://www.clker.com/cliparts/j/3/Z/Y/D/5/dog-head-md.png" />
                  </div>
                  <div className="dog-body">
                  </div>
                </div>
                <p className="dog-loader-p"><em>Scraping data...</em></p>
              </>
            }
          </div>)
          :
          <></>
        }
      </div>
      <header className="page-header">
        <div className="titles">
          <h1>Dog-Ear</h1>
          <h2>Recipe Repository</h2>
        </div>
        <div className="dog-image">
          <img src="./graphics/dog.png" alt="Woof woof" />
        </div>
      </header>
      <div className="interaction-wrapper">
        <div className="search-sort">
          <div className="dropdown">
            <select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
              <option value="TIME_DESC">Newest</option>
              <option value="TIME_ASC">Oldest</option>
              <option value="TITLE_ASC">Title A-Z</option>
              <option value="TITLE_DESC">Title Z-A</option>
              <option value="COOKED">Has Been Cooked</option>
              <option value="NOT_COOKED">Has NOT Been Cooked</option>
            </select>
          </div>
          <div className="search-wrapper">
            <div className="search">
              <input type="search" placeholder="Search" value={query} onChange={e => setQuery(e.target.value)} />
              <span
                className="cancel"
                onClick={() => setQuery("")}>x</span>
            </div>
          </div>
        </div>
        <div className="scrape-wrapper">
          <div className="scrape">
            <form onSubmit={e => connect(e)}>
              <label htmlFor="#scrape-input">Create New Recipe Entry:</label>
              <input type="text"
                className="scrape-text"
                id="scrape-input"
                placeholder="Paste URL Here"
                value={url} onChange={e => setUrl(e.target.value)}
              />
              <input className="scrape-submit"
                type="submit"
                value="Submit"
                disabled={url.length ? false : true} />
            </form>
          </div>
        </div>
      </div>
      <div className="card-container">
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            docID={recipe.id}
            title={recipe.title}
            imgSrc={recipe.imgSrc}
            author={recipe.author}
            rating={recipe.rating}
            description={recipe.description}
            timestamp={recipe.timestamp}
            hasMade={recipe.hasMade}
            tags={recipe.tags}
            notes={recipe.notes}
            url={recipe.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
