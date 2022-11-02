export default function HeightCheckbox({ setHeight, height }) {
  return (
    <>
      <label>Munros higher than 1000m</label>
      <input
        name="height"
        type="checkbox"
        value={height}
        onChange={() => {
          setHeight(!height);
        }}
      />
    </>
  );
}
