import * as React from "react";

const RemoteComponent = React.lazy(() => import('remote/Remote'));

export const Host = () => {
  return <div style={{background: "wheat", padding: "2em"}}>HOST app
    <RemoteComponent />
  </div>
}