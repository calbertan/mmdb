import React, {useContext} from 'react'
import EntryCard from '../components/EntryCard';
import { GlobalContext } from '../context/GlobalState'
import "../Styles/reading.scss"

const Readlist = () => {
  const {readlist} = useContext(GlobalContext);
  return (
    <div className='read-page'>
      <div className='container'>
        <div className='header'>
          <h1 className='heading'>My Reading List</h1>
        </div>
        {readlist.length > 0 ? (
          <div className='reading-grid'>
            <ul className="results">
              {readlist.map((manga)=>(
                <EntryCard manga={manga} type={"readinglist"} key={manga.mal_id}/>
              ))}
            </ul>
          </div>
        ) : (
          <h2 className="no-entries">Your reading list is empty</h2>
        )}
        
      </div>
    </div>
  )
}

export default Readlist
