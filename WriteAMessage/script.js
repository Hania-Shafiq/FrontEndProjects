function showMessageContent(message) {
    const messageContent = document.querySelector(".message-content");
    messageContent.textContent = `${message} - Your Message is Delivered`;
}

function showInvalidMessage() {
    const invalidMessage = document.querySelector(".invalid-message");
    invalidMessage.style.display = "block";
    setTimeout(() => {
        invalidMessage.style.display = "none";
    }, 3000);
}

function onSubmitForm(e) {
    e.preventDefault(); // Prevents form submission to URL
    const messageInput = document.querySelector(".message");
    const message = messageInput.value.trim(); // Fixed incorrect reference

    if (message === "") {
        showInvalidMessage();
    } else {
        showMessageContent(message);
        messageInput.value = ""; 
    }
}

(function () {
    const form = document.querySelector("#form");
    form.addEventListener("submit", onSubmitForm);
})();
