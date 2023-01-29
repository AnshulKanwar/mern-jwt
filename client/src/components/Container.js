const Container = ({ title, children }) => {
  return (
    <div className="grid place-items-center mt-20">
      <div className="bg-white p-10 rounded-lg">
        <h1 className="text-2xl font-semibold text-center mb-10">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default Container;
