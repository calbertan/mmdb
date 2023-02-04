import React, {useContext}  from 'react';
import { GlobalContext } from '../context/GlobalState';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const EntryControls = ({manga, type}) => {
  const {removeFromReadlist, completedReading, moveToReadlist, removeFromCompleted} = useContext(GlobalContext);
  return (
    <div>
      <div className='inner-card-controls'>
        {type == 'readinglist' && (
            <>
              <Button variant="outline-success" 
              onClick={()=>completedReading(manga)}>Done</Button>{' '}
              <Button variant="outline-danger"
              onClick={()=>removeFromReadlist(manga.mal_id)}>Drop</Button>{' '}
            </>
        )}
 
        {type == 'completed' && (
            <>
              <Button variant="outline-secondary"
              onClick={()=>moveToReadlist(manga)}>Move</Button>{' '}
              <Button variant="outline-danger"
              onClick={()=>removeFromCompleted(manga.mal_id)}>Remove</Button>{' '}
            </>
        )}
      </div>
    </div>
  )
}

export default EntryControls
