import { useState } from "react";

const Form = () => {
  const [color, setColor] = useState("");

  return (
    <section className="container">
      <h4>Color Palette Generator</h4>
      <form className="color-form">
        <input
          type="text"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
          placeholder="#af2d26"
        />
        <button className="btn" type="submit" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
