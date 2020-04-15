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
  margin-left: 7%;
`;
const BigStyle = styled.h1`
  float: left;
`;
const SmallStyle = styled.h4`
  overflow: hidden;
  float: right;
`;

export { StyledItem, TextStyle, HeaderStyle, BigStyle, SmallStyle };
