import React from 'react';
import Col from 'react-bootstrap/Col';
import { CategoryStyle, HeadingStyle, ParagraphStyle, ColStyle } from '../../pages/main/components/category-grid/category-grid.style';

interface CardProps {
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  title: string;
  img: string;
}

const Card = (props: CardProps) => {
  return (
    <>
      <CategoryStyle>
        <ColStyle img={props.img}>
          <Col>
            <HeadingStyle>
              <h1>{props.title}</h1>
            </HeadingStyle>
            <ParagraphStyle>{props.children}</ParagraphStyle>
          </Col>
        </ColStyle>
      </CategoryStyle>
    </>
  );
};

export default Card;
