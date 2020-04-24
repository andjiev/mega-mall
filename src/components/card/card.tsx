import React from 'react';
import { ColStyle, StyledCardBody, TitlesStyle, CategoryLinkStyle, StyledMaterialCard, StyledMaterialCardTitle, StyledMaterialCardPrice, StyledCardMedia } from 'components/card/card.styles';
import { makeStyles, Theme, createStyles, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

interface CardProps {
  size: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
  title: string;
  img: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
    }
  })
);

const Card = (props: CardProps) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {props.size == 'small' ? (
        <StyledMaterialCard>
          <StyledCardMedia className={classes.media} image={props.img} />
          <CardContent>
            <StyledMaterialCardTitle>{props.title}</StyledMaterialCardTitle>
            <StyledMaterialCardPrice>{props.children}</StyledMaterialCardPrice>
          </CardContent>
        </StyledMaterialCard>
      ) : props.size == 'medium' ? (
        <div></div>
      ) : (
        <ColStyle img={props.img}>
          <StyledCardBody>
            <StyledCardBody>
              <TitlesStyle>{props.title}</TitlesStyle>
              <CategoryLinkStyle>{props.children}</CategoryLinkStyle>
            </StyledCardBody>
          </StyledCardBody>
        </ColStyle>
      )}
    </>
  );
};

export default Card;
