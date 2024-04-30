import React, { useState } from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteBody({ notesAll, notesArchive, setNotes }) {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="note-app__body">
      <NoteInput setNotes={setNotes} />
      <div className="tab-container">
        <button
          className={activeTab === "all" ? "active" : ""}
          onClick={() => handleTabChange("all")}
        >
          Notes
        </button>
        <button
          className={activeTab === "archive" ? "active" : ""}
          onClick={() => handleTabChange("archive")}
        >
          Archive Notes
        </button>
      </div>
      {activeTab === "all" && (
        <NoteList
          label="All Notes"
          setNotes={setNotes}
          notes={notesAll}
        />
      )}
      {activeTab === "archive" && (
        <NoteList
          label="Archive Notes"
          setNotes={setNotes}
          notes={notesArchive}
        />
      )}
    </div>
  );
}

export default NoteBody;
