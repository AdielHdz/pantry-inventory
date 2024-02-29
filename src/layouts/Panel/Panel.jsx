function Panel({ arrData, titlePanel, children }) {
  return (
    <section>
      <h2 className="text-lg font-semibold border-b-2 border-gray-500 py-2 mb-5">
        {titlePanel}
      </h2>
      {children}
    </section>
  );
}

export default Panel;
