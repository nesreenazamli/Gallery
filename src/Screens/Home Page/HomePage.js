import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import CustomPagination from "../../Components/Pagination/Pagination";

export default function HomePage() {
  const [pictures, setPictures] = useState([]);
  const [value, setValue] = useState("");
  const [content, setContent] = useState("technology");
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(10);

  useEffect(() => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9863c22ffd75ae62ae3d53a8447046d7&tags=${content}&tag_mode=any&page=${page}&format=json&nojsoncallback=1`
      )
      .then((resp) => {
        setPictures(resp.data.photos.photo.splice(0, items));
      });
  }, [value, page, items, content]);

  return (
    <div className="d-flex ">
      <div className="header">
        <input
          type="text"
          value={value}
          className="input"
          name="value"
          placeholder="search..."
          onChange={(e) => {
            setValue(e.target.value);
            setContent(value);
          }}
        />

        <select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={items}
          label="Age"
          className="select-items"
          onChange={(e) => setItems(e.target.value)}
        >
          <option selected value={10}>
            10 per page
          </option>
          <option value={20}>20 per page</option>
          <option value={50}>50 per page</option>
        </select>
      </div>

      <div className="d-flex">
        {pictures.length > 0
          ? pictures
              // eslint-disable-next-line
              .filter((item) => {
                if (item.title.includes(value)) {
                  return item;
                } else if (item.title === "") {
                  return pictures;
                }
              })
              .map((pic, key) => {
                let srcpath =
                  "https://farm" +
                  pic.farm +
                  ".staticflickr.com/" +
                  pic.server +
                  "/" +
                  pic.id +
                  "_" +
                  pic.secret +
                  ".jpg";

                return (
        
                    <img
                    key={pic.id}
                      alt="technology"
                      src={srcpath}
                      className="w-33"

                    />
       
                      
                   
 
                );
              })
          : null}
      </div>
      <CustomPagination page={page} setPage={setPage} />
    </div>
  );
}
