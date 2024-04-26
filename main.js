function revealMessage() {
    const confessionLink = document.getElementById('confession-link');
    const confessionMessage = document.getElementById('confession-message');

    // Hide the link and display the confession message
    confessionLink.style.display = 'none';
    confessionMessage.style.display = 'block';

    // Insert your confession message here
    confessionMessage.innerText = "I really like you! 🥰";
}