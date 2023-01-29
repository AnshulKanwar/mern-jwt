import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const AddNote = ({ handleSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <form
        className="flex flex-col gap-3 my-5"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        <Input
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit" text="Save" />
      </form>
    </div>
  );
};

export default AddNote;
