import React, { useState } from 'react';
import { connect } from 'react-redux';

import { AppDispatch } from 'index';
import ApplicationState from 'store/application-store';
import * as HeaderStore from 'store/header-store';

import { Box, List, ListItem, Typography } from '@material-ui/core';
import { formatCulture, formatLanguage } from './language-picker.utils';
import { StyledPicker, StyledImage, StyledDisplay, StyledBox } from './language-picker.styles';
import { languages } from './language-picker.data';

interface ILanguagePickerProps {
  language: string;

  onLanguageChange: (lang: string) => void;
}

export const LanguagePicker = (props: ILanguagePickerProps) => {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerActive, setPickerActive] = useState(false);

  return (
    <>
      <Box>
        {languages.map((lang, index) => (
          <StyledBox key={index} onClick={() => props.onLanguageChange(lang.name)}>
            <Typography variant="subtitle2">{index === 0 ? `${lang.name + ' | '}` : lang.name}</Typography>
          </StyledBox>
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
    language: formatCulture(state.headerStore.culture)
  };
};

const LanguagePickerContainer = connect(mapStateToProps, mapDispatchToProps)(LanguagePicker);

export default LanguagePickerContainer;
