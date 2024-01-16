if (screen.width <= 699) {
    document.location = "phone.html";
}

function handleClick() {
    // Disable the radio buttons for 2 seconds
    var radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(function(radio) {
        radio.disabled = true;
    });

    // Enable the radio buttons after 2 seconds
    setTimeout(function() {
        radios.forEach(function(radio) {
            radio.disabled = false;
        });
    }, 650);
}
