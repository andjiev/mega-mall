import styled from 'styled-components';
import React from 'react';

const CategoryStyle = styled.div`
  width: 300px;
  height: 460px;
  margin: 20px;
`;

const HeadingStyle = styled.h1`
  color: white;
  font-weight: bold;
  padding-top: 20px;
`;
const ParagraphStyle = styled.p`
  color: white;
  font-weight: bold;
  padding-top: 200px;
`;
const LinkStyle = styled.p`
  color: white;
  padding-top: 30px;
`;
const UbavinaStyle = styled.p`
  color: white;
  font-weight: bold;
  padding-top: 152px;
`;

interface IStyledColProps {
  img: string;
}
const ColStyle = styled.div`
  background-image: url(${(props: IStyledColProps) => props.img});
  width: 300px;
  height: 460px;
`;

export { CategoryStyle, HeadingStyle, ParagraphStyle, LinkStyle, UbavinaStyle, ColStyle };
