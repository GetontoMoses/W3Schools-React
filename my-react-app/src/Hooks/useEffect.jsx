import { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState(0);

  useEffect(() => {
    setProduct(count * 2);
  }, [count]);

  

  function handleClick() {
    setCount(count + 1);
  };
  return (
    <>
      count : {count}
      <button onClick={handleClick}>* </button> 2<p>Calculation: {product}</p>
    </>
  );
}
