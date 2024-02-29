import { useEffect, useState } from "react";

function Modal({ children, transitionTime, isOpenModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [translate, setTranslate] = useState("scale(95%)");
  const [opacity, setOpacity] = useState(0);
  const [transition, setTransition] = useState("");

  console.log(transition);
  useEffect(() => {
    if (isOpenModal) {
      setTransition(transitionTime ? transitionTime : ".2s");
      setIsOpen(true);
      setTimeout(() => {
        setTranslate("scale(100%)");
        setOpacity(1);
      }, 1);
    }

    if (!isOpenModal) {
      setTransition(".1s");
      setTranslate("scale(105%)");
      setTimeout(() => {
        setTranslate("scale(95%)");
        setOpacity(0);
      }, 100);
      setTimeout(() => {
        setIsOpen(false);
      }, 200);
    }
  }, [isOpenModal]);

  return (
    <>
      {isOpen ? (
        <section className=" z-50 bg-black bg-opacity-20 top-0 left-0 fixed w-full h-[100dvh] px-5 md:px-0 flex items-center justify-center">
          <section
            style={{
              transition: `all ${transition} ease-in-out`,
              opacity: opacity,
              transform: translate,
            }}
          >
            {children}
          </section>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

export default Modal;
