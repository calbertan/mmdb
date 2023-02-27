import React, {useContext} from 'react'
import "../Styles/entrycard.scss"
import EntryControls from './EntryControls'

const EntryCard = ({manga, type}) => {
    return (
        <div className="entry-card">
            <div className="container">
                <div className="poster">
                    <img src={manga.images.jpg.image_url}/>
                    <EntryControls type={type} manga={manga} key={manga.mal_id}/>
                </div>
                <div className='title' onClick={()=>window.open(manga.url)}>{manga.title}</div>
            </div>
        </div>
    )
}

export default EntryCard
