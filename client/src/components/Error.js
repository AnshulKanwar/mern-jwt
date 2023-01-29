const Error = ({ text }) => {
  return (
    <div className="px-3 py-2 bg-red-400 border-2 rounded-md border-red-600 text-white">
      {text}
    </div>
  );
};

export default Error;
