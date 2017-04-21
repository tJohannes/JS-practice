var today = new Date();
var hourNow = today.getHours();
var greetings;

if (hourNow > 18) {
    greetings = 'Good Evening!';
} else if (hourNow > 0) {
    greetings = 'Good Afternoon!';
} else {
    greetings = 'Welcome!'
}
document.write('<h3>' + greetings + '</h3>');
