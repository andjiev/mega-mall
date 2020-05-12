import React from 'react';
import { Card, CardMedia, CardContent, Typography, makeStyles, Box, createStyles, Theme } from '@material-ui/core';
import { cardData } from './subcategoryCard.data';
import { StyledCardMedia, StyledMaterialCard } from './subcategoryCard.styles';

interface SubcategoryCardProps {
  url: string;
  title: string;
}
const SubcategoryCard = (props: SubcategoryCardProps) => {
  return (
    <>
      <StyledMaterialCard>
        <StyledCardMedia image={props.url} />
        <CardContent>
          <Box pt={3} pb={3} fontWeight="fontWeightBold" fontFamily="RobotoRegular" fontSize="16px" textAlign="center">
            <Typography>{props.title}</Typography>
          </Box>
        </CardContent>
      </StyledMaterialCard>
    </>
  );
};

export default SubcategoryCard;
