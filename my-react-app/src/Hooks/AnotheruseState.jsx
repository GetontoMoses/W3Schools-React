import { useState } from "react";

export default function Car() {
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: "",
    color: "",
  });
  const handleChange = (e) => {
    setCar((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `The car you entered was: ${car.brand} ${car.model} ${car.year} ${car.color}`
    );
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          {"Brand: "}
          <input
            type="text"
            name="brand"
            onChange={handleChange}
            placeholder="Brand"
          />
        </div>
        <div>
          {"Model "}
          <input
            type="text"
            name="model"
            onChange={handleChange}
            placeholder="Model"
          />
        </div>
        <div>
          {"Year "}
          <input
            type="text"
            name="year"
            onChange={handleChange}
            placeholder="Year"
          />
        </div>
        <div>
          {"color "}
          <input
            type="text"
            name="color"
            onChange={handleChange}
            placeholder="Color"
          />
        </div>
        <input type="submit" style={{ background: "yellow" }} />
      </form>
    </>
  );
}
