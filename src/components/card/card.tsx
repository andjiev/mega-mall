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
      <CardBody variant="outlined" img={props.img}>
        <CardHeader title={props.title}>
          <Typography></Typography>
        </CardHeader>
        <CardContent>
          <Typography>{props.children}</Typography>
        </CardContent>
      </CardBody>
    </>
  );
};

export default Card;
