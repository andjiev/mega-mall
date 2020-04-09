import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CategoryStyle, HeadingStyle, ParagraphStyle, ColStyle, LinkStyle, UbavinaStyle } from '../../pages/main/components/category-grid/category-grid.style';

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
