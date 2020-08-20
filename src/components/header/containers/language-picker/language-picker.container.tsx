import React, { useState } from 'react';
import { connect } from 'react-redux';

import { AppDispatch } from 'index';
import ApplicationState from 'store/application-store';
import * as HeaderStore from 'store/header-store';

import { Box, Typography } from '@material-ui/core';
import { formatCulture, formatLanguage } from './language-picker.utils';
import { StyledBox } from './language-picker.styles';
import { languages } from './language-picker.data';

interface ILanguagePickerProps {
  language: string;

  onLanguageChange: (lang: string) => void;
}

export const LanguagePicker = (props: ILanguagePickerProps) => {
  return (
    <>
      <Box>
        {languages.map((lang, index) => (
          <>
            <StyledBox key={index} onClick={() => props.onLanguageChange(lang.name)}>
              <Typography variant="subtitle2">{lang.name}</Typography>
            </StyledBox>
            {languages.length - 1 !== index && ' | '}
          </>
        ))}
      </Box>
    </>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onLanguageChange: (lang: string) => {
    dispatch(HeaderStore.changeCulture(formatLanguage(lang)));
  }
});

const mapStateToProps = (state: ApplicationState) => {
  return {
    language: formatCulture(state.header.culture)
  };
};

const LanguagePickerContainer = connect(mapStateToProps, mapDispatchToProps)(LanguagePicker);

export default LanguagePickerContainer;
