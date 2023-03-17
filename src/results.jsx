import calculateResults from "./utils";

const Results = ({
  power,
  speed,
  diameter_driven,
  diameter_driver,
  center_distance,
  application_category,
  belt_drive,
}) => {
  const [
    design_power,
    belt_type,
    V,
    np,
    brs,
    beltRating,
    beltWidth,
    beltLength,
    requiredLengthOfBelt,
    pulleyWidth,
  ] = calculateResults(
    power,
    speed,
    diameter_driven,
    diameter_driver,
    center_distance,
    application_category,
    belt_drive
  );

  return (
    <div>
      <p>Design Power: {design_power} KW</p>
      <p>Belt Type: {belt_type}</p>
      <p>Velocity of Belt Drive: {V} m/s</p>
      <p>Number of Plies: {np}</p>
      <p>Br(s): {brs} KW per mm per ply</p>
      <p>Belt Rating: {beltRating} KW</p>
      <p>Required Belt Width: {beltWidth} mm</p>
      <p>Length of the Belt: {beltLength} m</p>
      <p>Required length of the belt: {requiredLengthOfBelt} mm</p>
      <p>Required pulley width: {pulleyWidth}</p>
    </div>
  );
};

export default Results;
