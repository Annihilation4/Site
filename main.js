
let isDragging = false;
let startX, scrollLeft;

const containerb = document.querySelector('.containerb');

containerb.addEventListener('mousedown', startDrag);
containerb.addEventListener('mouseup', endDrag);
containerb.addEventListener('mousemove', drag);

function startDrag(e) {
    if (e.button !== 0) return;
    isDragging = true;
    startX = e.clientX;
    scrollLeft = containerb.scrollLeft;
    containerb.style.cursor = 'grabbing';
}

function endDrag(e) {
    isDragging = false;
    containerb.style.cursor = 'grab';
}

function drag(e) {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.clientX;
    const walk = (x - startX) * 2;
    containerb.scrollLeft = scrollLeft - walk;
}

console.log(jQuery().jquery);
// Submit subscription form using Ajax
$('#subscription_form').on('submit', function (e) {
    e.preventDefault();
    
    var emailInput = $(this).find('input[name="email"]').val();
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailPattern.test(emailInput)) {
        $('#email_error').text('Please enter a valid e-mail address.');
        return;
    } else {
        $('#email_error').text('');
    }
    
    var $form = $(this);
    
    $.ajax({
        type: 'POST',
        url: 'subscription_ajax.php',
        data: $form.serialize()
    }).done(function () {
        $form[0].reset();
        alert('Thank you for the subscription!');
    }).fail(function () {
        alert('Something went wrong');
    });
});


main();