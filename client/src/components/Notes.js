import axios from "../axios";
import { useEffect, useState } from "react";
import Error from "./Error";
import Note from "./Note";
import AddNote from "./AddNote";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNotes = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("/notes");
      console.log(data);
      setNotes(data);
    } catch (error) {
      const errorText = error.response.data.message;
      setError(errorText);
    }
    setIsLoading(false);
  };

  const addNewNote = async (title, description) => {
    if (!title) {
      setError("Title is required");
      return;
    }

    const newNote = {
      title,
      description,
      dateCreated: new Date(),
    };

    try {
      await axios.post("/notes", {
        title,
        description,
      });

      setNotes((notes) => [newNote, ...notes]);
    } catch (error) {
      const errorText = error.response.data.message;
      setError(errorText);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="w-[25rem] md:w-[40rem]">
      {error && <Error text={error} />}
      {isLoading ? (
        <div className="text-xl text-center">Loading...</div>
      ) : (
        <div>
          <div className="mb-10">
            <AddNote handleSubmit={addNewNote} />
          </div>
          <div className="flex flex-col gap-10">
            {notes.map(({ title, description, dateCreated }) => (
              <Note
                key={title}
                title={title}
                description={description}
                dateCreated={dateCreated}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes;
