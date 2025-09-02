import React, { useState, useEffect } from 'react';

function Home() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('/api/listings')
      .then((res) => res.json())
      .then(setListings);
  }, []);

  return (
    <div>
      <h1>Find your next stay</h1>
      {/* Search/filter UI */}
      <ul>
        {listings.map((l) => (
          <li key={l._id}>
            <a href={`/listing/${l._id}`}>
              {l.title} - {l.location}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;