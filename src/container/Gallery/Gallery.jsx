import React, { useState, useEffect } from "react";
import "./Gallery.scss";
import { AppWrap } from "../../wrapper";
import {client } from "../../client";

const Gallery = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const query = '*[_type == "gallery"]{_id, name, "imgUrl": imgUrl.asset->url}';

    client.fetch(query).then((data) => {
      setPosts(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }



  //   const getPosts = async () => {
  //     try {
  //       const response = await fetch("https://dummyjson.com/products");
  //       const data = await response.json();
  //       setPosts(data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       setIsLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     getPosts();
  //   }, []);


  const handleImageClick = (src) => {
    setModal(<img src={src} className="modal-img" alt="Modal Content" />);
    toggleModal();
  };

  const toggleModal = () => {
    const modal = document.getElementById("myModal");
    modal.classList.toggle("show");
  };

  const handleCloseModal = () => {
    setModal(null);
    toggleModal();
  };

  return (
        <>
          <div>
            <h2 className="head-text title-gallery">Gallery</h2>
            <div id="gallery" className="container-fluid">
              {posts.map((post, index) => (
                <img
                  src={post.imgUrl}
                  alt={post.name}
                  key={index}
                  className="img-responsive"
                  onClick={() => handleImageClick(post.imgUrl)}
                />
              ))}
            </div>
          </div>
          <div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <button className="close-btn" onClick={handleCloseModal}>
                  X
                </button>
                <div className="modal-body">{modal}</div>
              </div>
            </div>
          </div>
        </>
  );
};

export default AppWrap(Gallery, "gallery");
