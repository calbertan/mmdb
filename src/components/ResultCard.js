import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const ResultCard = ({manga}) => {
    const{ addToReadlist, readlist }= useContext(GlobalContext);
    let storedManga = readlist.find(o => o.mal_id === manga.mal_id);
    const readlistDisabled = storedManga ? true : false;

    return (
        <div className="result-card">
            <a>
                <figure>
                    <img src={manga.images.jpg.image_url} 
                     alt="poster image"
                     onClick={(e)=>{this.handleRefresh(e)}}/>
                </figure>
                <h3>{manga.title}</h3>
                <button 
                 className='btn'
                 disabled={readlistDisabled}
                 onClick={()=>addToReadlist(manga)}>
                    Add to List
                </button>
            </a>
        </div>
    )
}

export default ResultCard
