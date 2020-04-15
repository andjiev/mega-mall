import React from 'react';
import { ColStyle, StyledCardBody, StyledCardContent } from 'components/card/card.styles';

interface CardProps {
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  title: string;
  img: string;
}

const Card = (props: CardProps) => {
  return (
    <>
      {props.size == 'small' ? (
        <div></div>
      ) : props.size == 'medium' ? (
        <div></div>
      ) : (
        <ColStyle img={props.img}>
          <StyledCardBody>
            <StyledCardContent>
              <h3>{props.title}</h3>
              <p>{props.children}</p>
            </StyledCardContent>
          </StyledCardBody>
        </ColStyle>
      )}
    </>
  );
};

export default Card;
