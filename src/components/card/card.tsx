import React from 'react';
import { ColStyle, StyledCardBody, TitlesStyle, CategoryLinkStyle } from 'components/card/card.styles';

interface CardProps {
  size: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
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
            <StyledCardBody>
              <TitlesStyle>{props.title}</TitlesStyle>
              <CategoryLinkStyle>{props.children}</CategoryLinkStyle>
            </StyledCardBody>
          </StyledCardBody>
        </ColStyle>
      )}
    </>
  );
};

export default Card;
