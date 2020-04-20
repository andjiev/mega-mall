import CardBody from '@material-ui/core/Card';
import styled from 'styled-components';
import React from 'react';
import { CardContent, Link } from '@material-ui/core';

const StyledLink = styled(Link)`
  font-weight: bold;
  color: white;
  text-decoration: underline;
`;

const StyledHeading = styled.h4`
  float: left;
`;
const StyledParagraph = styled.p`
  float: right;
`;

export { StyledLink, StyledHeading, StyledParagraph };
