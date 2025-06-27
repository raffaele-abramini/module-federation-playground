import { createRoot } from "react-dom/client";

const Host = () => {
  return <div>hey</div>
}

const c = document.querySelector("#root");
createRoot(c).render(<Host />);