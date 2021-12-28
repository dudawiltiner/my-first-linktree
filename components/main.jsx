import React, { useState } from 'react'
import links from '../data/links'

export default function Main() {
  const [show, setShow] = useState(true);
  const [content, setContent] = useState([]);

  function handleClick(contentLink){
    setContent(contentLink);
    setShow(false);
  }

  return (
    <div>
      {
        !show &&
          <button 
            onClick={() => setShow(true)}
            className="m-10"
          >
            Voltar
          </button>
      }
      { show ?

        links.map((item, idx) =>
          <button 
            key={idx}
            className="m-10"
            onClick={() => handleClick(item.content)}
          >
            {item.name}
          </button>
        )
        
        :

        content.map((item, idx) => 
          <a 
            key={idx}
            target="_blank"
            href={item.endereco}
            className="m-10"
          >
            {item.name}
          </a>
        )
      
      }
    </div>
  )
}
