import React from "react";

interface CardProps {
  size: "small" | "medium" | "large";
}

const Card = (props: CardProps) => {
  return (
    <>
      <span>Card component</span>
    </>
  );
};

Card.defaultProps = {
  size: "small"
};

export default Card;
