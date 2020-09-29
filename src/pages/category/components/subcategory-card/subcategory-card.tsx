import React from 'react';
import { CardContent, Typography, Box } from '@material-ui/core';
import { StyledCardMedia, StyledMaterialCard } from './subcategory-card.styles';

interface SubcategoryCardProps {
  title: string;
  path: string;
}

const SubcategoryCard = (props: SubcategoryCardProps) => {
  return (
    <>
      <StyledMaterialCard raised onClick={() => (window.location.href = props.path)}>
        <Box p={1}>
          <StyledCardMedia image={`/assets/images${props.path}.png`} />
          <CardContent>
            <Box pt={3} pb={3} fontWeight="fontWeightBold" fontFamily="RobotoRegular" fontSize="16px" textAlign="center">
              <Typography variant="h6">{props.title}</Typography>
            </Box>
          </CardContent>
        </Box>
      </StyledMaterialCard>
    </>
  );
};

export default SubcategoryCard;
