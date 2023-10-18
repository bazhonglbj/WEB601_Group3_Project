$(document).ready(function() {
    $('.check-empty').on('focusout', function() {
        if($(this).val() === '') {
            $(this).addClass('is-invalid');
            
        } else {
            $(this).removeClass('is-invalid');
        }
    });

    $('.check-selection').on('focusout', function() {
        if ($(this).val() === '') {
            $(this).addClass('is-invalid');  
        } else {
            $(this).removeClass('is-invalid');  
        }
    });

    $('#course').change(function() {
        $('#amount').val("$" + $(this).val());
    });

    $('#registrationForm').on('submit', function(e) {
        e.preventDefault();
        
        if (this.checkValidity() === false) {
            e.stopPropagation();
            $(this).addClass('was-validated');
            return;
        }

        alert("Payment Successfully!");
        this.reset();
        $(this).removeClass('was-validated');
    });
  });