import React from 'react';
import { connect } from 'react-redux';

import { AppDispatch } from '../../../..';
import ApplicationState from '../../../../store/application-store';
import * as SharedStore from '../../../../store/shared-store';

import { StyledInput } from './search-bar.styles';

interface IProps {
  searchText: string;

  onSearchTextChange: (text: string) => void;
}

const SearchBar = (props: IProps) => {
  return (
    <>
      <StyledInput aria-label="search-bar" value={props.searchText} onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onSearchTextChange(event.target.value)} />
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
