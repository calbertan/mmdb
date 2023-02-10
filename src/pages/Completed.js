import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import EntryCard from '../components/EntryCard'

const Completed = () => {
  const {completed} = useContext(GlobalContext)
  return (
    <div className='copmleted-page'>
      <div className='container'>
        <div className='header'>
          <h1 className='heading'>Completed Series</h1>
          <span className='count-pill'>{completed.length} Series Completed</span>
        </div>
        {completed.length > 0 ? (
          <div className='reading-grid'>
            <ul className="results">
              {completed.map((manga)=>(
                <EntryCard manga={manga} type={"completed"} key={manga.mal_id}/>
              ))}
            </ul>
          </div>
        ) : (
          <h2 className="no-entries">You have not completed any series</h2>
        )}
        
      </div>
    </div>
  )
}

export default Completed
