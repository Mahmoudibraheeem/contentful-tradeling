import React, { useState } from "react";
import "./styles.css";
import client from "./contentful-client";

function useBanners() {
  const [data, setData] = useState();

  React.useEffect(() => {
    client
      .getEntry(["7q5YLwg0C7jFBIVd5xY8CN", "1zKasSOQ6N9QKOgHg1bXgc"])
      .then((res) => {
        console.log(res);
        setData(res);
      });
    client
      .getEntries({
        content_type: "7q5YLwg0C7jFBIVd5xY8CN"
      })
      .then(function (entries) {
        // log the title for all the entries that have it
        entries.items.forEach(function (entry) {
          console.log(entry);
          if (entry.fields.productName) {
            console.log(entry.fields.productName);
          }
        });
      });
  }, []);

  return data;
}

export default function App() {
  const data = useBanners();

  return (
    <div className="App">
      {data && (
        <>
          <div>{data.fields.title}</div>
          {data.fields.Items.map((item) => (
            <div key={item.fields.id}>{item.fields.id}</div>
          ))}
        </>
      )}
    </div>
  );
}
