import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from React Router
import Header from './Header';
import { useAppContext } from '../utils/AppContext';
import "../assets/Bookdetails.css"

const Bookdetails = () => {
  const { id } = useParams(); // Get the book id from the URL params
  const { favourites, addToFavourites, removeFromFavourites } = useAppContext();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8081/api/v1/user/getBook/${id}`) // Fetch the specific book using the id from the URL
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const favouritesChecker = (id) => {
    const boolean = favourites.some((value) => value.id === id);
    return boolean;
  };

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header />
      <div className="body8">
      <div className="container" >
        <div className="book-details">
          <div className="book-image">
        <img src={book.image_url} alt="" />
        </div>
        <h3 className="header2">{book.title}</h3>
        <p>Author: {book.authors}</p>
        <p>Description: {book.description}</p>
        <p>Edition:{book.edition}</p>
        <p>Format:{book.format}</p>
        <p>Rating: {book.rating}</p>
        <p>Genres:{book.genres}</p>
        <p>Total Pages:{book.num_pages}</p>
        <div >
          {favouritesChecker(book.id) ? (
            <button className="button7" onClick={() => removeFromFavourites(book.id)}>
              Remove from Favourites
            </button>
          ) : (
            <button className="button7" onClick={() => addToFavourites(book)}>
              Add to Favourites
            </button>
          )}
          <button className="button7">Read Now</button>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Bookdetails;
