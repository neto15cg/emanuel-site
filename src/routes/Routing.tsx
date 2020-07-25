import React, { useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Layout from '@components/layout/Layout';
import Dashboard from '@pages/Dashboard/Dashboard';

export const history = createBrowserHistory();

const Routing = () => {
  return (
    <Layout>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/xibiu" exact component={() => <div>Xibiu</div>} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </Layout>
  );
};

export default Routing;
