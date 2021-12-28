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
    <div>
      <img className="animate-pulse mr-auto ml-auto mt-10 mb-10 w-72" src="./emc.svg" alt="Uma fórmula criado por Einstein" />
      
      <div class="w-full flex justify-end mb-10">
        {
          !show &&
            <button 
              onClick={() => setShow(true)}
              className="text-lg font-medium p-2 rounded-md bg-yellow-color"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </button>
        }
      </div>

      <div className="flex flex-col max-w-md items-center space-y-8">    
        { show ?
        
          links.map((item, idx) =>
            <button 
              key={idx}
              className={`w-full text-lg font-medium p-2 rounded-md ${ (idx + 1) % 2 === 0 ? 'bg-green-color' : 'bg-yellow-color' }`}
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
              className={` text-center w-full text-lg font-medium p-2 rounded-md ${ (idx + 1) % 2 === 0 ? 'bg-green-color' : 'bg-yellow-color' }`}
            >
              {item.name}
            </a>
          )
        }
      </div>

      <p className="text-white text-xl uppercase font-extralight text-center max-w-sm m-10">"A criatividade é a inteligência se divertindo"</p>

      <Footer />
    </div>
  )
}
