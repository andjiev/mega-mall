import styled from 'styled-components';
import React from 'react';
import { Link } from '@material-ui/core';

const StyledLink = styled(Link)`
  font-weight: bold;
  color: white;
  text-decoration: underline;
  font-family: 'RobotoMedium', sans-serif;
`;
const StyledLink2 = styled(Link)`
  color: white;
  font-family: 'RobotoRegular', sans-serif;
`;

const StyledHeading = styled.h4`
  float: left;
  font-family: 'OswaldRegular', sans-serif;
`;
const StyledParagraph = styled.p`
  float: right;
  font-family: 'RobotoRegular', sans-serif;
`;

export { StyledLink, StyledHeading, StyledParagraph, StyledLink2 };
