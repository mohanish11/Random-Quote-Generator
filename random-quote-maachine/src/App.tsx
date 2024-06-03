import { useState } from 'react'
import './App.css'
import {FaTwitter,FaQuoteLeft,FaQuoteRight} from "react-icons/fa";
import quotes from './assets/quotes.json'
interface Quote{
  quote: string;
  author: string;
}
const getRandomQuote=():Quote=>{
  return quotes[Math.floor(Math.random() * quotes.length)];
};
const getRandomColor=():string=>{
  const red=Math.floor(Math.random()*128);
  const green=Math.floor(Math.random()*128);
  const blue=Math.floor(Math.random()*128);
  return `rgb(${red},${green},${blue})`;
}
const transition="all 1s"
function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor,setRandomColor]=useState<string>(getRandomColor());
  const changequote=()=>{
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  }
  return  (<div className="background" style={{backgroundColor: randomColor,transition}}>
    <div id="quote-box">
      <div className="quote-content" style={{color:randomColor,transition}}>
        <h2 id="text"><div  style={{marginRight :"10px"}}><FaQuoteLeft/></div>{quote.quote}<div style={{marginLeft :"10px"}}><FaQuoteRight/></div></h2>
        <h4 id='author'>- {quote.author}</h4>
        
      </div>
      <div className="buttons">
        <a href={`https://twitter.com/intent/tweet?text=${quote.quote}`}
         id='tweet-quote'
         style={
          {
            backgroundColor: randomColor,transition,
            marginRight:"10px",
          }
         }
         >
        <FaTwitter color="white" />
        </a>
        <button id="new-quote" onClick={changequote} style={{backgroundColor:randomColor,transition}}>GET NEW QUOTE</button>
      </div> 
    </div>
  </div>

  
  );
}

export default App
