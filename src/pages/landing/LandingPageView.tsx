import { RefObject } from "react";
import { Navbar } from "../../layout/Navbar";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

const LandingPageView = ({
  planesRef,
}: {
  planesRef: RefObject<HTMLDivElement>;
}) => (
  <>
    <div className="animation-body">
      <Navbar planesRef={planesRef} />

      <Header planesRef={planesRef} />

      <Main planesRef={planesRef} />
    </div>
  </>
);

export default LandingPageView;
