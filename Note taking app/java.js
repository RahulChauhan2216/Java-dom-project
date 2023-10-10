let btn = document.querySelector("#addBtn");
let main = document.querySelector("#main");

let saveNotes = () => {
  let notes = document.querySelectorAll(".note textarea");
  //   console.log(notes);
  let data = [];
  notes.forEach((note) => {
    data.push(note.value);
  });

  if (data.length == 0) {
    localStorage.removeItem("notes");
  } else {
    localStorage.setItem("notes", JSON.stringify(data));
  }
};

addBtn.addEventListener("click", function () {
  addNote();
});

let addNote = (text = "") => {
  let note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `<div class="tool">
    <i class="fa-solid fa-plus"></i>
    <i class="fa-solid fa-trash" onclick="remove()"></i>
    </div>
    <textarea>${text}</textarea>`;

  note.querySelector(".fa-trash").addEventListener("click", function () {
    note.remove();
    saveNotes();
  });

  note.querySelector(".fa-plus").addEventListener("click", function () {
    saveNotes();
  });

  note.querySelector("textarea").addEventListener("focusout", () => {
    saveNotes();
  });

  main.appendChild(note);
  saveNotes();
};

(function () {
  let lsNotes = JSON.parse(localStorage.getItem("notes"));
  if (lsNotes == null) {
    addNote();
  } else {
    lsNotes.forEach((lsNote) => {
      addNote(lsNote);
    });
  }
})();
