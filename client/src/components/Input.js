const Input = ({ placeholder, type, value, onChange }) => {
  return (
    <input
      className="bg-slate-100 w-full px-3 py-2 rounded-md"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
