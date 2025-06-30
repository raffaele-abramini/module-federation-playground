import { lazy } from "react";

const Remote = lazy(() => import( 'remote/Remote'))

export const Host = () => {
  return <div style={{ background: "wheat", padding: "2em" }}>HOST app
    <hr/>
    <Remote/>
  </div>
}