import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/resultcard.scss"

const ResultCard = ({manga}) => {
    const{ addToReadlist, readlist, completed }= useContext(GlobalContext);
    let storedManga = readlist.find(o => o.mal_id === manga.mal_id) 
    || completed.find(o => o.mal_id === manga.mal_id);
    const readlistDisabled = storedManga ? true : false;

    return (
        <div className="result-card">
            <div className="container">
                <div className="poster">
                    <img src={manga.images.jpg.image_url}/>
                </div>
                <div className='info'>
                    <div className='title'>{manga.title}</div>
                    <div className="overflow-auto">{manga.synopsis}</div>
                    <Button 
                    className='btn'
                    disabled={readlistDisabled}
                    onClick={()=>addToReadlist(manga)}>
                        Add to List
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ResultCard
