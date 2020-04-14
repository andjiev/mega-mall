import React from 'react';
import CardBody from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { ColStyle } from 'pages/main/components/category-grid/category-grid.styles';

interface CardProps {
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  title: string;
  img: string;
}

const Card = (props: CardProps) => {
  return (
    <>
      <ColStyle img={props.img}>
        <CardBody variant="outlined">
          <CardContent>
            <Typography>{props.title}</Typography>
            <Typography>{props.children}</Typography>
          </CardContent>
        </CardBody>
      </ColStyle>
    </>
  );
};

export default Card;
