import { useState } from "react";
import { PlusCircleFill } from "react-bootstrap-icons";

import "./App.css";
import FilterDropdown from "./components/FilterDropdown";
import HeightCheckbox from "./components/HeightCheckbox";
import useFetchMunros from "./hooks/useFetchMunros";

import Modal from "./components/Modal";
import useModal from "./hooks/useModal";

export default function App() {
  const { munros, loading, error } = useFetchMunros();
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [heightSelected, setHeightSelected] = useState(false);
  // const [selectedMunro, setSelectedMunro] = useState(null);

  const { isShowing, toggle } = useModal();

  let filteredMunros = [];

  if (loading) return <p>loading</p>;

  if (error || !munros) {
    console.log(error);
    return <p>error</p>;
  }

  if (!selectedRegion || selectedRegion === "All Regions") {
    filteredMunros = munros;
  } else {
    filteredMunros = munros.filter((munro) => {
      return munro.region === selectedRegion;
    });
  }
  if (heightSelected) {
    filteredMunros = filteredMunros.filter((munro) => {
      return munro.height > 1000;
    });
    console.log("called", filteredMunros);
  }

  // const handleClick = (munro) => {
  //   toggle();
  //   console.log(munro);
  // };

  return (
    <>
      <div className="App">
        <FilterDropdown
          allMunros={munros}
          setSelectedRegion={setSelectedRegion}
        />
        <HeightCheckbox setHeight={setHeightSelected} height={heightSelected} />

        <h2>Munro Challenge</h2>
        {filteredMunros.map((munro) => (
          <>
            <p key={munro.smcid}>
              {munro.name}, {munro.height}m
              <PlusCircleFill onClick={toggle} />
            </p>
          </>
        ))}
      </div>
      <Modal isShowing={isShowing} hide={toggle} />
    </>
  );
}
