import React, { useState } from 'react';
import { connect } from 'react-redux';

import { AppDispatch } from 'index';
import ApplicationState from 'store/application-store';
import * as HeaderStore from 'store/header-store';

import { Box, List, ListItem } from '@material-ui/core';
import { formatCulture, formatLanguage } from './language-picker.utils';
import { StyledPicker, StyledImage, StyledDisplay, StyledBox } from './language-picker.styles';

interface ILanguagePickerProps {
  language: string;

  onLanguageChange: (lang: string) => void;
}

export const LanguagePicker = (props: ILanguagePickerProps) => {
  const languages = ['MK', 'EN'];
  const [showPicker, setShowPicker] = useState(false);
  const [pickerActive, setPickerActive] = useState(false);

  return (
    <>
      <Box>
        <Box pt={1} pb={1} onMouseEnter={() => setShowPicker(true)} onMouseLeave={() => setShowPicker(false)}>
          <StyledDisplay pb={1} component="span" color="white" isActive={showPicker || pickerActive}>
            {props.language}
          </StyledDisplay>
        </Box>
        {(showPicker || pickerActive) && (
          <Box onMouseEnter={() => setPickerActive(true)} onMouseLeave={() => setPickerActive(false)}>
            <StyledPicker>
              <List disablePadding>
                {languages.map((lang, index) => (
                  <StyledBox key={index} onClick={() => props.onLanguageChange(lang)}>
                    <ListItem>
                      <StyledImage src={`assets/images/flags/${lang}.jpg`} />
                      <Box pl={2} component="span">
                        {lang}
                      </Box>
                    </ListItem>
                  </StyledBox>
                ))}
              </List>
            </StyledPicker>
          </Box>
        )}
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
