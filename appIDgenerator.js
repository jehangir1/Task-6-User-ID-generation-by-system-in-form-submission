document.addEventListener('DOMContentLoaded', function () {
    // Get form elements
    const form = document.querySelector('.student-form');
    const resultDiv = document.querySelector('#resultDiv');
    const submissionDetailsDiv = document.querySelector('#submissionDetails');
    const resetButton = document.querySelector('#resetButton');

    // Handle form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Check for validation
        if (!form.checkValidity()) {
            alert("Please fill in all required fields correctly.");
            return;
        }

        // Collect form data
        const formData = new FormData(form);
        const studentData = {};
        let detailsHTML = '';

        for (const [key, value] of formData.entries()) {
            studentData[key] = value;
            detailsHTML += `<strong>${key}:</strong> ${value}<br>`;
        }

        // Generate unique Student ID
        const timestamp = Date.now();
        const randomNum = Math.floor(Math.random() * 900);
        const studentID = `S-${timestamp}-${randomNum}`;
        studentData['studentID'] = studentID;

        // Add student ID to submission details
        detailsHTML += `<strong>Student ID:</strong> ${studentID}<br>`;

        // Display submission result dynamically on the UI
        submissionDetailsDiv.innerHTML = detailsHTML;
        console.log("Submitted Details:", detailsHTML); // Debug output
        resultDiv.classList.remove('hidden'); // Make result visible
        form.classList.add('hidden');         // Hide the form
    });

    // Reset form
    resetButton.addEventListener('click', function () {
        form.reset();
        form.classList.remove('hidden'); // Show the form again
        resultDiv.classList.add('hidden'); // Hide the result section
        submissionDetailsDiv.innerHTML = ''; // Clear data
    });
});
