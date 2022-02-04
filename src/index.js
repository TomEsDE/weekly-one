function doSmth() {
    // alert('Message sent')
    const name = $('#name').val();
    const mail = $('#email').val();
    const subject = $('#subject').val();
    const msg = $('#message').val();

    const alertMsg = `\nMessage successful sent to: \n\n${name} (${mail})\n\nSubject: ${subject}\n\nMessage: ${msg}`

    alert(alertMsg)
}


function subscribe(){

    alert(`\nThanks for subscribing: ${$('#newsletter').val()}!`)

}