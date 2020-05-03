import React from 'react';
import { StyledImage } from 'components/gift-card/gift-card.styles';
import { Grid } from '@material-ui/core';
import Card from './../../components/card/card';
import { giftcards } from './gift-card.data';

const GiftCard = () => {
  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
        {giftcards.map(value => (
          <Grid item key={value.id} xs={12} md={6} lg={6}>
            <Card size="medium" url={value.url}></Card>
            {/* *NOTE* Kartickata namerno e napravena vaka vo card shared komponentata so fiksiran height bidejki
            taa treba dinamicki da se vnesuva kako baner na primer preku dashboardot i od tamu da se kontrolira dali kje se 
            display i dali kje se menuva slikata na samata karticka  */}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GiftCard;
