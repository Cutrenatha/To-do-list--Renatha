function addTask() {
    let input = document.getElementById("taskInput");
    let dateTimeInput = document.getElementById("taskDateTime");
    
    let taskText = input.value.trim();
    let taskDateTime = dateTimeInput.value;
    
    if (taskText === "" || taskDateTime === "") return;
    
    let li = document.createElement("li");
    li.className = "task-item flex justify-between items-center p-3 rounded-lg border border-pink-500 shadow-lg";

    let span = document.createElement("span");
    span.innerHTML = `<strong>${taskText}</strong> - ${taskDateTime.replace("T", " ")}`;

    // Wrapper tombol biar lebih rapi
    let buttonContainer = document.createElement("div");
    buttonContainer.className = "flex space-x-4";

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Selesai";
    completeBtn.className = "bg-blue-300 text-black px-2 py-1 rounded-lg hover:bg-gray-400";
    completeBtn.onclick = function() {
        // Tambahkan garis coret pada teks tugas
        span.classList.add("line-through", "text-gray-500");
        // Ubah tombol selesai jadi abu-abu dan nonaktifkan
        completeBtn.disabled = true;
        completeBtn.className = "bg-gray-500 text-gray-300 px-2 py-1 rounded-lg";
        // Ubah tombol edit jadi abu-abu dan nonaktifkan
        editBtn.disabled = true;
        editBtn.className = "bg-gray-500 text-gray-300 px-2 py-1 rounded-lg";
    };

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "bg-yellow-300 text-pink-900 px-2 py-1 rounded-lg hover:bg-yellow-400";
    editBtn.onclick = function() {
        let newText = prompt("Edit tugas:", taskText);
        if (newText) {
            taskText = newText;
            span.innerHTML = `<strong>${taskText}</strong> - ${taskDateTime.replace("T", " ")}`;
        }
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.className = "bg-red-300 text-pink-900 px-2 py-1 rounded-lg hover:bg-red-400";
    deleteBtn.onclick = function() {
        li.remove();
    };

    // Masukkan tombol-tombol ke dalam container
    buttonContainer.appendChild(completeBtn);
    buttonContainer.appendChild(editBtn);
    buttonContainer.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttonContainer);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
    dateTimeInput.value = "";
}
