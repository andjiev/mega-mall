import React from 'react';
import { CardContent, Typography, Box } from '@material-ui/core';
import { cardData } from './subcategory-card.data';
import { StyledCardMedia, StyledMaterialCard } from './subcategory-card.styles';

interface SubcategoryCardProps {
  url: string;
  title: string;
  link?: string;
}
const SubcategoryCard = (props: SubcategoryCardProps) => {
  return (
    <>
      <StyledMaterialCard raised={true} onClick={() => (window.location.href = props.link!)}>
        <StyledCardMedia image={props.url} />
        <CardContent>
          <Box pt={3} pb={3} fontWeight="fontWeightBold" fontFamily="RobotoRegular" fontSize="16px" textAlign="center">
            <Typography variant="h5">{props.title}</Typography>
          </Box>
        </CardContent>
      </StyledMaterialCard>
    </>
  );
};

export default SubcategoryCard;
