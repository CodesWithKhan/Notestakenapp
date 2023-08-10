const addButton = document.getElementById("button");
const inputField = document.getElementById("input");
const notesList = document.getElementById("notesList");

addButton.addEventListener("click", addNote);

function addNote() {
    const noteText = inputField.value.trim();

    if (noteText !== "") {
        const noteItem = document.createElement("li");
        noteItem.className = "note-item";

        // Step 1: Create a delete button element
        const deleteButton = document.createElement("span");
        deleteButton.className = "delete-btn";

        // Step 2: Create an image element for the delete button icon
        const deleteIcon = document.createElement("img");
        deleteIcon.classList="svg"
        deleteIcon.src = "del.png"; // Update the path to your icon image
        deleteIcon.alt = "Delete";

        // Step 3: Append the icon image to the delete button
        deleteButton.appendChild(deleteIcon);

        const noteContent = document.createElement("span");
        noteContent.textContent = noteText;

        noteItem.appendChild(deleteButton);
        noteItem.appendChild(noteContent);
        notesList.appendChild(noteItem);

        deleteButton.addEventListener("click", function () {
            notesList.removeChild(noteItem);
        });

        inputField.value = "";
    }
}

