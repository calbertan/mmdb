import React from 'react'

const EntryControls = ({manga, type}) => {
  return (
    <div>
      <div className='inner-card-controls'>
        {type == 'readinglist' && (
            <>
                <button className="ctrl-btn">
                    <i className='fa-fw far fa-eye'></i>
                </button>
                <button className="ctrl-btn">
                    <i className='fa-fw far fa-times'></i>
                </button>
            </>
        )}
      </div>
    </div>
  )
}

export default EntryControls
