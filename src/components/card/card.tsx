import React from 'react';
import { StyledTitles, StyledCategoryLink, StyledCol } from 'components/card/card.styles';

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
        <StyledCol img={props.img}>
          <StyledTitles>{props.title}</StyledTitles>
          <StyledCategoryLink>{props.children}</StyledCategoryLink>
        </StyledCol>
      )}
    </>
  );
};

export default Card;
