import React from 'react';
import { ColStyle, StyledCardBody, TitlesStyle, CategoryLinkStyle, StyledMaterialCard, StyledMaterialCardTitle, StyledMaterialCardPrice } from 'components/card/card.styles';
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
    root: {
      maxWidth: 345
    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    avatar: {
      backgroundColor: red[500]
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
        <StyledMaterialCard className={classes.root}>
          <CardMedia className={classes.media} image={props.img} />
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
