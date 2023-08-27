import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return <div>Ada error, gaes!!!</div>;
}

export default ErrorPage;
