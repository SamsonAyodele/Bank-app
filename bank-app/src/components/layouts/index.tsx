import { lazy, Suspense, useMemo } from "react";
import Loader from "../loader/Index";

const Layout = () => {
  const isAuth = false;
  const ApplicationLayout = useMemo(() => {
    if (isAuth) {
      return lazy(() => import("./dashboard-layout"));
    } else {
      return lazy(() => import("./auth-layout"));
    }
  }, [isAuth]);
  return (
    <Suspense fallback={<Loader loading={true} />}>
      <ApplicationLayout />
    </Suspense>
  );
};

export default Layout;
