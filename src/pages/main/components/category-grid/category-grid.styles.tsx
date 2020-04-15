import CardBody from '@material-ui/core/Card';
import styled from 'styled-components';
import React from 'react';
import { CardContent, Link } from '@material-ui/core';

const StyledItem = styled.div`
  align-items: center;
  margin: 0 auto;
`;
const TextStyle = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: underline;
`;
const HeaderStyle = styled.div`
  justify-content: space-between;
  align-items: center;
  width: 76%;
`;
const BigStyle = styled.h1`
  float: left;
`;
const SmallStyle = styled.h4`
  overflow: hidden;
  float: right;
`;
const GridStyle = styled.div`
  max-width: 58%;
  margin: 0 auto;
`;

export { StyledItem, TextStyle, HeaderStyle, BigStyle, SmallStyle, GridStyle };
