function Modal({ children, isOpenModal }) {
  return (
    <>
      {isOpenModal ? (
        <section className=" z-50 bg-black bg-opacity-20 top-0 left-0 fixed w-full h-[100dvh] px-5 md:px-0 flex items-center justify-center">
          {children}
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

export default Modal;
