import React from 'react';
import CardBody from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { ColStyle, StyledCardBody, StyledCardContent } from 'components/card/card.styles';

interface CardProps {
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  title: string;
  img: string;
}

const Card = (props: CardProps) => {
  return (
    <>
      {props.size == 'small' ? (
        <div></div>
      ) : props.size == 'medium' ? (
        <div></div>
      ) : (
        <ColStyle img={props.img}>
          <StyledCardBody>
            <StyledCardContent>
              <h3>{props.title}</h3>
              <p>{props.children}</p>
            </StyledCardContent>
          </StyledCardBody>
        </ColStyle>
      )}
    </>
  );
};

export default Card;
