const Note = ({ title, description, dateCreated }) => {
  const date = new Date(dateCreated);

  return (
    <div className="border-1 rounded-md p-10 bg-[#f0f1f4]">
      <span className="flex flex-col gap-2">
        <h1 className="text-lg font-bold">{title}</h1>
        <span className="text-slate-500 text-sm">{date.toDateString()}</span>
      </span>
      {description && <p className="mt-8">{description}</p>}
    </div>
  );
};

export default Note;
