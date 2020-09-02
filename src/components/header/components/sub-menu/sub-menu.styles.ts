import styled from 'styled-components';

import { ListItemText, Box, Tab } from '@material-ui/core';

const StyledSubMenu = styled(Box)`
  background-color: #f0f5ff;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const StyledListItemText = styled(ListItemText)`
  color: black;
  font-size: 14px;
  border-bottom: 2px solid #101a50;
  padding-bottom: 3%;

  font-weight: 700;

  span {
    font-family: 'OswaldBold', sans-serif;
  }
`;
interface ISubmenuImage {
  url?: string;
}
const SubmenuImage = styled(Box)`
  background-image: url(${(props: ISubmenuImage) => props.url});
  background-size: contain;
  height: 260px;
  width: 100%;
  background-repeat: no-repeat;
  margin-top: 5%;
`;
const StyledBox = styled(Box)`
  background-color: #f0f5ff;
`;

const StyledTab = styled(Tab)`
  width: 500px;
  span {
    align-items: baseline;
  }
`;

const StyledIcons = styled.img`
  width: 25px;
  opacity: 0.7;
`;

export { StyledSubMenu, StyledListItemText, SubmenuImage, StyledTab, StyledIcons, StyledBox };
