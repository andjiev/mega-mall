import styled from 'styled-components';

import { ListItemText, Box } from '@material-ui/core';

const StyledSubMenu = styled(Box)`
  // background-color: ${props => props.theme.palette.primary.dark};
  // background-color: #fef3f4;
  padding: 0;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const StyledListItemText = styled(ListItemText)`
  color: black;
  font-size: 16px;
  border-bottom: 2px solid #101a50;
  padding-bottom: 3%;
`;
interface ISubmenuImage {
  url?: string;
}
const SubmenuImage = styled(Box)`
  background-image: url(${(props: ISubmenuImage) => props.url});
  background-size: auto;
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  margin-top: 5%;
`;

export { StyledSubMenu, StyledListItemText, SubmenuImage };
