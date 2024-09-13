document.addEventListener('DOMContentLoaded', () => {
    // Chat Functionality
    const chatForm = document.getElementById('chat-form');
    const chatBox = document.getElementById('chat-box');
    if (chatForm) {
        chatForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const message = document.getElementById('message-input').value;
            const messageElement = document.createElement('div');
            messageElement.textContent = `You: ${message}`;
            chatBox.appendChild(messageElement);
            document.getElementById('message-input').value = ''; // Clear input
        });
    }

    // Appointment Scheduling
    const appointmentForm = document.getElementById('appointment-form');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const doctor = document.getElementById('doctor').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            alert(`Appointment scheduled with ${doctor} on ${date} at ${time}`);
        });
    }

    // Medication Reminder
    const reminderForm = document.getElementById('reminder-form');
    if (reminderForm) {
        reminderForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const medication = document.getElementById('medication').value;
            const dosage = document.getElementById('dosage').value;
            const reminderTime = document.getElementById('reminder-time').value;
            alert(`Reminder set for ${medication} (${dosage})
