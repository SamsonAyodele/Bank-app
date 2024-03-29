import { Suspense } from "react";
import Loader from "../components/loader/Index";
import AllRoutes from "../components/routes/AllRoutes";

const View = () => {
  return (
    <Suspense fallback={<Loader loading={true} />}>
      <AllRoutes />
    </Suspense>
  );
};

export default View;
