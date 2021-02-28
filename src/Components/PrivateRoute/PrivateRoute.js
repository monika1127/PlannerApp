import React from 'react';
import { Redirect, Route } from 'react-router';

import { useAuthUser } from '../../Auth/auth';

export default function PrivateRoute({ component: RouteComponent, ...rest }) {
  const { currentUser } = useAuthUser();

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? <RouteComponent {...routeProps} /> : <Redirect to="/" />
      }
    />
  );
}
