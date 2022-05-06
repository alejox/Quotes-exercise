import { useState } from 'react';
import quotes from '../quotes.json'
import React from 'react';

const colors = ["lightseagreen", "lightblue", "lightslategrey", "lightgreen", "lightcoral"]

const QuoteBox = () => {

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const [ index, setIndex ] = useState(randomIndex);

    const changeQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setIndex(randomIndex);
    }
    
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[randomColor]}`;

    console.log(quotes);

    return (
        <div className='container' style={{color: colors[randomColor]}}>
            <p>{quotes[index].quote}</p>
            <p className='author'>{quotes[index].author}</p>
        <div className='button' >
            <button onClick={changeQuote} style={{color: colors[randomColor]}}><i className="fa-solid fa-shuffle"></i></button>
        </div>

        </div>
    );
};

export default QuoteBox;