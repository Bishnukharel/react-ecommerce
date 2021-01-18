import React from 'react'
import './menu-item.styles.scss'

function MenuItem({title,imageUrl,size}) {
    return (
        
        // react gives html markup elements another property called styles, which takes an object that has props value
        // equal to the css value you want to apply to this element.remember:its backtick !!javascript template string
        <div
        className={`${size} menu-item ` }>

        <div className='background-image' 
        style={{
            backgroundImage:`url(${imageUrl})`
        }}/>
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">Shop now</span>
        </div>
      </div>
    )
}

export default MenuItem;
