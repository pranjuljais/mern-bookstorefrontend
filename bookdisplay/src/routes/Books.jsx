import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Books() {
  const baseUrl = "https://mern-bookstorebackend.onrender.com/api/books";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = baseUrl;
        if (selectedCategory) {
          url += `?category=${selectedCategory}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("failed to fetch data.");
        }

        const jdata = await response.json();
        setData(jdata);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError("error fetching data try again later");
        setIsLoading(false);
      }
    };
    fetchData();
  }, [selectedCategory]);

  return (
    <div>
      <Link to="/createbook">+ Add New Book</Link>
      <h2>Fetch Example</h2>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="filters">
        <label>Categories</label>
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All</option>
          <option value="romance">Romance</option>
          <option value="science">Science</option>
          <option value="crime">Crime</option>
          <option value="food">Food</option>
          <option value="adventure">Adventure</option>
          <option value="thriller">Thriller</option>
          <option value="fiction">Fiction</option>
          <option value="other">other</option>
        </select>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul className="books">
          {data.map((item) => (
            <li key={item._id}>
              <Link to={`/books/${item.slug}`}>
                <img
                  src={`https://mern-bookstorebackend.onrender.com/uploads/${item.thumbnail}`}
                />
                <h3>{item.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Books;
