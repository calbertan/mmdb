import React, {useContext}  from 'react';
import { GlobalContext } from '../context/GlobalState';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const EntryControls = ({manga, type}) => {
  const {removeFromReadlist, completedReading} = useContext(GlobalContext);
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
      </div>
    </div>
  )
}

export default EntryControls
