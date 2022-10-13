import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './book.css'
import { Button } from '@mui/material';
import axios from 'axios';

const Book = (props) => {
  const history = useNavigate();
    const {_id, name, author,description, price, image} =props.book;
    const deleteHandler  = async  () => {
      await axios.delete(`http://localhost:5000/books/${_id}`)
      .then((res) =>res.data)
      .then(() => history("/"))
      .then(()=>history("/books"));
    }
  return (
    <div className='card'>
        <img src={image} alt={name}/>
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h4>${price}</h4>
        <div className="btn">
            <Button LinkComponent={Link} to={`/books/${_id}`}>Update</ Button>
            <Button onClick={deleteHandler}>Delete</Button>
        </div>
    </div>
  );
}

export default Book