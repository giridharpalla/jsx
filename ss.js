// Change the text of the message when the button is clicked
document.getElementById('changeTextButton').addEventListener('click', function() {
    let messageElement = document.getElementById('message');
    messageElement.innerText = 'The text has been changed using DOM manipulation!';
});

// Add a new element to the page when the button is clicked
document.getElementById('addElementButton').addEventListener('click', function() {
    let newElementContainer = document.getElementById('newElementContainer');
    
    // Create a new paragraph element
    let newParagraph = document.createElement('p');
    newParagraph.innerText = 'This is a new paragraph added to the DOM!';
    
    // Add the new paragraph to the container
    newElementContainer.appendChild(newParagraph);
});
