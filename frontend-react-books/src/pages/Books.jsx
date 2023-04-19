import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await axios.get('http://localhost:8800/books')
                setBooks(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchBooks()
    },[])

    return (
        <div>
            <h1>Books</h1>
            <div>
                {books.map((book) => (
                    <div key={book.id}>
                       <img src={book.cover} alt="" />
                        <h2>{book.title}</h2>
                        <p>{book.desc}</p>
                        <span>{book.price}</span>
                    </div>
                ))}
            </div>
            <button><Link to="/add">Add new book</Link></button>
        </div>
    );
};

export default Books;