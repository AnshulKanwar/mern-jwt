const Button = ({ text, type, handleClick }) => {

  const styles = "p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 hover:cursor-pointer"

  return (
    <>
      {type === "submit" ? (
        <input className={styles} type="submit" value={text} />
      ) : (
        <button className={styles} onClick={handleClick}>{type}</button>
      )}
    </>
  );
};

export default Button;
