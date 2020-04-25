import React from 'react';
import { connect } from 'react-redux';

import { AppDispatch } from '../../../..';
import ApplicationState from '../../../../store/application-store';
import * as SharedStore from '../../../../store/shared-store';

import { StyledTextField } from './search-bar.styles';
import { Grid } from '@material-ui/core';
import { StyledButton } from './search-bar.styles';
import SearchIcon from '@material-ui/icons/Search';

interface IProps {
  searchText: string;

  onSearchTextChange: (text: string) => void;
}

const SearchBar = (props: IProps) => {
  return (
    <>
      <Grid container>
        <Grid item sm>
          {/* TODO: Center text in textField */}
          <StyledTextField
            fullWidth
            variant="filled"
            type="text"
            placeholder="Пребарај"
            value={props.searchText}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              props.onSearchTextChange(event.target.value);
            }}
            InputProps={{
              disableUnderline: true
            }}
          />
        </Grid>
        <Grid item>
          <StyledButton variant="contained" color="secondary">
            {/* TODO: Add search icon */}
            <SearchIcon />
          </StyledButton>
        </Grid>
      </Grid>
    </>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onSearchTextChange: (text: string) => {
    dispatch(SharedStore.setSearchText(text));
  }
});

const mapStateToProps = (state: ApplicationState) => {
  return {
    searchText: state.sharedStore.searchText
  };
};

const SearchBarContainer = connect(() => mapStateToProps, mapDispatchToProps)(SearchBar);

export default SearchBarContainer;
