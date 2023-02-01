import React from 'react'

const ResultCard = ({manga}) => {
  return (
    <div className="result-card">
        <a href="">
            <figure>
                {/* console.log({manga.images.jpg}) */}
                <img src={manga.images.jpg.image_url} alt="poster image"/>
            </figure>
            <h3>{manga.title}</h3>
        </a>
    </div>
  )
}

export default ResultCard
