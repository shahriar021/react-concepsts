import React, { useState, useEffect } from "react";

const loadingMsg = <h1>loading all data</h1>;
export default function DataFetch() {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        if (!res.ok) {
          throw Error("solve the error ......");
        }
        return res.json();
      })
      .then((data) => {
        setPhotos(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const photoElement =
    photos &&
    photos.map((photo) => {
      return (
        <div key={photo.id}>
          <p>{photo.title}</p>
        </div>
      );
    });

  return (
    <div className="App">
      fetching data
      {error && <p>{error}</p>}
      {isLoading && loadingMsg}
      {photoElement}
    </div>
  );
}
