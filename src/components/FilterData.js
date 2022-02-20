import React, { useState } from "react";
import "./filterData.css";
import { fakeData } from "../mockData";

const FilterData = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <input
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="cardsData">
        {fakeData
          ?.filter((data) => {
            if (search == "") {
              return data;
            } else if (
              data.first_name.toLowerCase().includes(search.toLowerCase())
            ) {
              return data;
            }
          })
          ?.map((val, i) => (
            <div key={i} className="card">
              <h2>{val.id}</h2>
              <div>
                <h1>
                  {val.first_name} {val.last_name}
                </h1>
              </div>

              <h4>{val.email}</h4>
              <h4>{val.gender}</h4>
              <h4>{val.ip_address}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FilterData;
