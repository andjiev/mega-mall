import React from "react";
import { Route } from "react-router";

import { ROUTES } from "./consts";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

import MainPage from "./pages/main/main";

const App = () => {
  return (
    <>
      <Header />
      <Route path={ROUTES.MAIN} component={MainPage} />
      <Footer />
    </>
  );
};

export default App;
