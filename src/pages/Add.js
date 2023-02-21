import React, {useEffect, useState} from 'react'
import ResultCard from '../components/ResultCard'
import Button from 'react-bootstrap/Button';
import "../Styles/add.scss"

const Add = () => {
  const [results, setResults] = useState([])
  const [query, setQuery] = useState("")
  const [search, setSearch] = useState("")
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/manga?q=${search}&order_by=members&sort=desc&limit=10`)
      .then((res) => res.json())
      .then((info) => {
        setLimit(10)
        console.log(info.data)
        setResults(info.data)
      })
  }, [search]);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/manga?q=${search}&order_by=members&sort=desc&limit=`+limit)
      .then((res) => res.json())
      .then((info) => {
        if(limit > 10){
          setResults(info.data)
        }
      })
  }, [limit]);



  useEffect(() => {
    const timeOutId = setTimeout(() => setSearch(query), 1500); //sets *search to *query after a certain delay
    return () => clearTimeout(timeOutId);
  }, [query])

  const loadMore = () => {
    setLimit(limit + 5)
    setSearch(query)
  }
  
  return (
    <div className='add-page'>
      <div className='page-container'>
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
          {(results.length % 5 === 0 & results.length !== 0|| results.length === 25) && (
            <Button 
            className='btn-more'
            onClick={loadMore}>
               Load More
           </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Add
