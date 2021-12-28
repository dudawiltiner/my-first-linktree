import React, { useState } from 'react'
import links from '../data/links'
import Footer from './footer';

export default function Main() {
  const [show, setShow] = useState(true);
  const [content, setContent] = useState([]);

  function handleClick(contentLink){
    setContent(contentLink);
    setShow(false);
  }

  return (
    <div className="bg-black h-screen flex flex-col">
      <img className="m-6" src="./emc.svg" alt="Uma fórmula criado por Einstein" />
      
      {
        !show &&
          <button 
            onClick={() => setShow(true)}
            className="text-lg font-medium p-2 rounded-md bg-yellow-color"
          >
            Voltar
          </button>
      }

      <div className="flex flex-col space-y-8">    
        { show ?
        
          links.map((item, idx) =>
            <button 
              key={idx}
              className={`text-lg font-medium p-2 rounded-md ${ (idx + 1) % 2 === 0 ? 'bg-green-color' : 'bg-yellow-color' }`}
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
              className={`text-lg font-medium p-2 rounded-md ${ (idx + 1) % 2 === 0 ? 'bg-green-color' : 'bg-yellow-color' }`}
            >
              {item.name}
            </a>
          )
        }
      </div>

      <p className="text-white m-10">"A criatividade é a inteligência se divertindo"</p>

      <Footer />
    </div>
  )
}
