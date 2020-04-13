import React from 'react';
import CardBody from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

interface CardProps {
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  title: string;
  img: string;
}

const Card = (props: CardProps) => {
  return (
    <>
      <CardBody variant="outlined">
        <CardHeader title="Технологија">
          <Typography>{props.title}</Typography>
        </CardHeader>

        <CardContent>
          <Typography>
            <div>
              <Link>КОМПЈУТЕРИ</Link>
            </div>
            <div>
              <Link>КОМПЈУТЕРСКА ОПРЕМА</Link>
            </div>
            <div>
              <Link>МОБИЛНИ ТЕЛЕФОНИ</Link>
            </div>
          </Typography>
          <Typography>
            <div>
              <Link>Прикажи ги сите</Link>
            </div>
          </Typography>
        </CardContent>
      </CardBody>
    </>
  );
};

export default Card;
