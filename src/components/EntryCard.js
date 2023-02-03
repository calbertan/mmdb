import React, {useContext} from 'react'
import "../Styles/entrycard.scss"
import EntryControls from './EntryControls'

const EntryCard = ({manga, type}) => {
    return (
        <div className="entry-card">
            <a>
                <figure>
                    <img src={manga.images.jpg.image_url} 
                     alt="poster image"/>
                    <EntryControls type={type} manga={manga}/>
                </figure>
                <h3>{manga.title}</h3>
            </a>

        </div>
    )
}

export default EntryCard
