import styled from 'styled-components';
import HeroImage from '../../../../assets/images/Hero-image-.jpg';

const StyleBanner = styled.div`
  max-width: 1366px;
  width: 100%;
  max-height: 600px;
  height: 100%;
  margin: 0 auto;
  display: block;
`;
const ButtonStyle = styled.button`
  max-width: 133px;
  width: 100%;
  height: 54px;
  background: #bf1736;
  variant: contained;
`;
const CaptionStyle = styled.div`
  text-align: initial;
  font-family: Oswald Bold;
  font-weight: bold;
  padding-bottom: 178px;
`;
const HeadingStyle = styled.h1`
  text-align: initial;
  font-family: 'OswaldBold', sans-serif;
  font-weight: bold;
  font-size: 50px;
`;

const StyleImage = styled.img`
  background-image: url(${HeroImage});
  max-width: 1366px;
  width: 100%;
  height: 600px;
`;

export { StyleBanner, StyleImage, ButtonStyle, CaptionStyle, HeadingStyle };
