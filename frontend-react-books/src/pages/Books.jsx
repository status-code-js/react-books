import React, {useState, useEffect} from 'react';
import axios from "axios";

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await axios.get('http://localhost:8800/books')
                setBooks(res.data)
                console.log(res)
            } catch (err) {
                console.log(err)
            }
        }
        fetchBooks()
    },[])


    return (
        <div>
            <h1>Books</h1>
        </div>
    );
};

export default Books;