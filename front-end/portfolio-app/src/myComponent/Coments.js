import React, { useEffect, useState, Fragment } from "react";
import "../css/Contact.css";
import axios from "axios";

export default function Coments() {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    setisLoading(true);
    // URL Ganti dengan alamat github atau API kamu atau URL API MU
    // Method @{get, post, put, patch, delete}
    axios
      .get("http://localhost:8081/komentar")
      .then((response) => {
        setdata(response.data);
        setisLoading(false);
      })
      .catch((err) => {
        // Jika Gagal
        setisError(true);
        setisLoading(false);
      });
  }, []);

  const hapus = (id) => {};

  return (
    <>
      <div className="component-body">
        <div className="component-details">
          <h1>
            <span className="blue-line" />
            Let's catch up...
          </h1>
          <p>I am always excited to work on some awesome projects, message me and let's discuss over coffee.</p>
          <div className="contact-form">
            <form action="http://localhost:8081/komentar" method="POST" accept-charset="UTF-8">
              <label htmlFor="Name">
                Your Name <span>*</span>
              </label>
              <div className="names">
                <input type="text" name="nama" required placeholder="Name" className="input-box" />
              </div>
              <label htmlFor="coment">
                Coment <span>*</span>
              </label>
              <textarea id="coment" type="text" name="komentar" required className="input-box short-section" />
              <input type="submit" value="Submit" className="btn btn-blue" />
            </form>
          </div>
          <div className="contact-form">
            <div>
              {data.komentar &&
                data.komentar.map((item) => (
                  <div>
                    <hr />
                    <h5>{item.nama}</h5>
                    <h6>{item.komentar}</h6>
                    <hr />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
