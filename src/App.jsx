import { useState } from "react";
import { Quotes } from "/public/quotes.js"
import "./App.css";

export default function App() {
   const url = "https://zenquotes.io/api/random"
   const [quotes, setQuotes] = useState(Quotes);
   
   const [currentQuote, setCurrentQuote] = useState(null);


   function quoteGenerator(){
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const quot = quotes[randomIndex]
      setCurrentQuote(quot);

   }
   return (
      <>
      
         <div className="container">
            <header>Random Quote Generator</header>
            <div className="quote-box">{currentQuote && <p>{currentQuote.quote} - {currentQuote.author}</p>}</div>
            <button onClick={quoteGenerator}>Generate random Quote</button>

         </div>

      </>
   );

}
