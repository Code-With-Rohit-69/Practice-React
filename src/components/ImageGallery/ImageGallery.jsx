import React, { useState } from "react";
import "./styles.css";
// Image Gallery Component
const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [url, setUrl] = useState("");
  const [preview, setPreview] = useState("");

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleAddImage = (e) => {
    setImages((prev) => [...prev, url]);
    setUrl("");
  };

  const handleDelete = (index) => {
    const filterImage = images.filter((image, idx) => index !== idx);
    setImages(filterImage);
  };

  const handlePreviewImage = (index) => {
    const previewImage = images.find((image, idx) => idx === index);
    setPreview(previewImage);
  };

  return (
    <div>
      <h1>Image Gallery Application</h1>
      <div className="input">
        <input
          type="text"
          placeholder="Enter image URL"
          value={url}
          onChange={handleChange}
        />
        <button onClick={handleAddImage}>Add Image</button>
      </div>
      <div className="image-container">
        {images.map((image, index) => (
          <div
            className="images-div"
            key={index}
            onClick={() => handlePreviewImage(index)}
          >
            <img src={image} alt="" />
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(index);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {preview && (
        <div className="preview" onClick={() => setPreview("")}>
          <img src={preview} alt="" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
