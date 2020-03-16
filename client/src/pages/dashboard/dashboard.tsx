import React, { useState } from "react";
import { connect } from "react-redux";

import { AppDispatch } from "../..";
import * as DashboardStore from "../../store/dashboard-store";
import ApplicationState from "../../store/aplication-store";
import { StyleButton } from "./dashboard.styles";

interface DashboardProps {
  name: string;

  onNameChange: (name: string) => void;
}

const Dashboard = (props: DashboardProps) => {
  // const [flag, setFlag] = React.useState(false);

  return (
    <>
      {props.name}

      <StyleButton
        onClick={() => {
          props.onNameChange("name changed");
        }}
      >
        Click me
      </StyleButton>
    </>
  );
};

const mapDisptachToProps = (disptach: AppDispatch) => ({
  onNameChange: (name: string) => {
    disptach(DashboardStore.setName(name));
  }
});

const mapStateToProps = (state: ApplicationState) => {
  return {
    name: state.dashboardStore.name
  };
};

const DashboardPage = connect(
  () => mapStateToProps,
  mapDisptachToProps
)(Dashboard);
export default DashboardPage;
