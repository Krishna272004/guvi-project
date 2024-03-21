$(document).ready(function() {
    $('#addDetails').on('click', function() {
        $('.profile-container').append(`
            <div class="profile-section">
                <label for="additionalField">Additional Field:</label>
                <input type="text" class="form-control additional-field" placeholder="Enter Additional Field">
            </div>
        `);
    });

    $('#saveProfile').on('click', function() {
        var dob = $('#dob').val();
        var contact = $('#contact').val();
        var address = $('#address').val();
        var additionalFields = $('.additional-field').map(function() {
            return $(this).val();
        }).get();

        // AJAX request
        $.ajax({
            url: './php/profile.php',
            type: 'POST',
            dataType: 'json',
            data: {
                dob: dob,
                contact: contact,
                address: address,
                bloodgroup: bloodgroup,
                interest: interest,
                cgpa:cgpa,
                additionalFields: additionalFields
            },
            success: function(response) {
                // Handle success response
                if (response.status === 'success') {
                    alert(response.message);
                } else {
                    alert('Failed to save profile.');
                }
            },
            error: function(xhr, status, error) {
                // Handle error
                console.error(xhr.responseText);
            }
        });
    });
});