fetch("http://localhost:3000/events")
.then(response => response.json())
.then(events => {
    events.forEach(event => {
        // Run this code for each event in events
        // create a <span> and append it to the <div id="event-item">
        // Use document.createElement to create a <span>
        const span =document.createElement ("span"); 
        // Set the <span>'s textContent to the event's name
        span.textContent = event.name;
        // When the user clicks on the <span>, populate that item's information in <section id="event">
        span.addEventListener("click", () => { displayDetails(event); });      
        // Append the <span> to  <div id="event-item">
        document.querySelector('#event-items').append(span);
    });
        displayDetails(events[0]);
    });
    // We're writing the code here because here inside this .then is where we have access to events[0]
function displayDetails(event){
   document.querySelector ("#event-image").src = event.image;
   document.querySelector ("#event-name").textContent = event.name;
   document.querySelector ("#event-location").textContent = event.location;
   document.querySelector ("#event-time").textContent = event.time;
   document.querySelector ("#event-services").textContent = event.services;
   // When the user submits <form id="donation">, update the number in <span id="number">.
   document.querySelector("#donation").addEventListener("submit", event => {
    // Prevent defaut form submission behavior
    event.preventDefault();
    // Get the number the user wants to add to cart.
    document.querySelector("#number").textContent = "Thank you for your Donation!"    
    event.target.reset()

});
}