import React from 'react';

import { Box, Grid, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails } from '@material-ui/core';
import { StyledTypography } from 'pages/main/components/main-slider/main-slider.style';

const MobileFilter = () => {
  return (
    <>
      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid item>
          <ExpansionPanel>
            <ExpansionPanelSummary aria-controls="panel1a-content" id="panel1a-header">
              <Typography>Филтри</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      </Grid>
    </>
  );
};

export default MobileFilter;
