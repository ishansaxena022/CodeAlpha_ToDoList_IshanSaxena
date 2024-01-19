function addTask() {
    const taskInput = $('#taskInput');
    const taskList = $('#taskList');

    if (taskInput.val().trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const newTask = $('<li class="list-group-item">')
        .html(`
            <span>${taskInput.val()}</span>
            <button class="btn btn-danger btn-sm" onclick="removeTask(this)">Remove</button>
            <button class="btn btn-info btn-sm ml-2" onclick="openReminderModal(this)">Set Reminder</button>
        `);

    taskList.append(newTask);
    taskInput.val('');
}

function removeTask(button) {
    $(button).parent().remove();
}

function openReminderModal(button) {
    const reminderModal = $('#reminderModal');
    reminderModal.modal('show');
    reminderModal.data('taskElement', $(button).parent());
}

function setReminder() {
    const reminderModal = $('#reminderModal');
    const taskElement = reminderModal.data('taskElement');
    const reminderDateTime = $('#reminderDateTime').val();

    if (reminderDateTime.trim() === '') {
        alert('Please select a reminder date and time.');
        return;
    }

    reminderModal.modal('hide');
    taskElement.append(`<span class="badge badge-warning ml-2">${formatReminderDate(reminderDateTime)}</span>`);
}

function formatReminderDate(dateTime) {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(dateTime).toLocaleDateString('en-US', options);
}
