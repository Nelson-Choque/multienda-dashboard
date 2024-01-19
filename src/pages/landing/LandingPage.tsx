import { useRef } from "react";
import LandingPageView from "./LandingPageView";

export const LandingPage = () => {
  const planesRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <LandingPageView planesRef={planesRef} />
    </>
  );
};
