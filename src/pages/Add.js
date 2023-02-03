import React, {useEffect, useState} from 'react'
import ResultCard from '../components/ResultCard'
import "../Styles/add.scss"
import "../Styles/entrycard.scss"

const Add = () => {
  const [query, setQuery] = useState("")
  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/manga?q=${search}&order_by=members&sort=desc&limit=20`)
      .then((res) => res.json())
      .then((info) => {
        if(search !== "")
          console.log(info.data)
          setResults(info.data)
      })
  }, [search]);

  useEffect(() => {
    const timeOutId = setTimeout(() => setSearch(query), 1500); //sets *search to *query after a certain delay
    return () => clearTimeout(timeOutId);
  }, [query])
  
  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <div className='input-wrapper'>
            <input 
            type="text" 
            placeholder='Search for a title'
            value={query}
            onChange={event => setQuery(event.target.value)}/>
          </div>
        </div>
        <div className='add-grid'>
          {results.length > 0 && (
              <ul className="results">
                {results.map((manga)=>(
                  <ResultCard manga={manga} key={manga.mal_id}/>
                ))}
              </ul>
            )}
        </div>
      </div>
    </div>
  )
}

export default Add
