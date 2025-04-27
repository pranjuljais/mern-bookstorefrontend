import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function Singlebook() {
  const [data, setData] = useState([]);
  const urlSlug = useParams();
  const baseUrl = `https://mern-bookstorebackend.onrender.com/api/books/${urlSlug.slug}`;
  console.log(urlSlug.slug);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
          throw new Error("failed to fetch data.");
        }

        const jdata = await response.json();
        setData(jdata);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `https://mern-bookstorebackend.onrender.com/api/download/${data.slug}`;
    link.download = data.title; // Optional: you can change downloaded filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  function StarRating({ numberOfStars }) {
    const stars = [];

    for (let i = 0; i < numberOfStars; i++) {
      stars.push(<span key={i}>⭐</span>);
    }

    return <div>Rating: {stars}</div>;
  }

  return (
    <div>
      <Link to={"/books"}>🔙Books</Link>

      <div className="bookdetails">
        <div className="col-1">
          <img
            src={`https://mern-bookstorebackend.onrender.com/uploads/${data?.thumbnail}`}
            alt={data?.title}
          />
          <Link to={`/editbook/${data.slug}`}>Edit</Link>
        </div>

        <div className="col-2">
          <h1>{data?.title}</h1>
          <p>{data?.description}</p>
          <StarRating numberOfStars={data?.stars} />

          <p>Category</p>
          <ul>
            {data?.category?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <button
        onClick={handleDownload}
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        Download PDF
      </button>
    </div>
  );
}

export default Singlebook;
