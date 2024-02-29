import { useEffect, useState } from "react";

function TransitionSection({ children, transitionTime, transitionStep }) {
  const [translate, setTranslate] = useState("scale(95%)");
  const [opacity, setOpacity] = useState(0);
  const [transition, setTransition] = useState(
    `
    all 
    ease-in-out
    ${transitionTime ? transitionTime : ".2s"}
    `
  );

  useEffect(() => {
    setTranslate("scale(100%)");
    setOpacity(1);

    return () => setTranslate("scale(80%)");
  }, []);
  return (
    <section
      style={{
        transition: transition,
        opacity: opacity,
        transform: translate,
      }}
    >
      {children}
    </section>
  );
}

export default TransitionSection;
