import { useEffect, useState } from "react";
import React from "react";

export default function FilterDropdown(props) {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    let regionArray = props.allMunros.map((item) => {
      return item.region;
    });
    regionArray.unshift("All Regions");
    setRegions([...new Set(regionArray)]);
  }, [props.allMunros]);

  const setFilterRegion = (event) => {
    props.setSelectedRegion(event.target.value);
  };
  const clearSelectedRegion = () => {
    props.setSelectedRegion(null);
  };

  return (
    <>
      <select id="filterdropdown" onChange={setFilterRegion}>
        {regions.map((regionOption) => (
          <option key={regionOption}>{regionOption}</option>
        ))}
      </select>
      <button onClick={clearSelectedRegion}>Clear</button>
    </>
  );
}
