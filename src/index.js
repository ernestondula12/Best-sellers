//Vamos importar o react
import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css'

const books = [
    {
        img: './images/Livro9.jpg',
        title: 'The Let Them Theory: A Life-Changing Tool',
        author: 'Mel Robbins',
        id: 1,
    },
    {
        img: './images/Livro10.jpg',
        title: 'Elon Musk',
        author: 'Walter Isaacson',
        id: 2,
    },
    {
        img: './images/Livro4.jpg',
        title: 'Melania',
        author: 'Melania Thrump',
        id: 3,
    },
    {
        img: './images/Livro6.jpg',
        title: 'Atomic Habits: An Easy & Proven Way to Build',
        author:'Jame Clear',
        id: 4,
    },
    {
        img: './images/Livro7.jpg',
        title: 'The Parable of the Sower (Parable, 1)',
        author: 'Octavia E. Butler',
        id: 5
    },
    {
        img: './images/Livro8.jpg',
        title: 'Worthy: How to Believe You Are Enough and',
        author: 'Jamie Kern Lima',
        id: 6
    }

]

function BookList(){



    return (
        <>
            <h1>Amazon best sellers</h1>
            <section className="booklist">
                {books.map((book, index) => {
                    return  <Book {...book} key={book.id} number={index}/>
                })}
            </section>
        </>
    )
}

const Book = (props) => {

    const { img, title, author, number} = props;

    return( 
        <article className="book">
           <img src={img} alt={title} />
           <h2>{title}</h2>
           <h4>{author}</h4>

           <span className='number'>{`# ${number + 1}`}</span>
        </article>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />)