
    function getUrlParameter(name) {
        name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
        var results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    
    // Check for success or error message in the URL and display it
    document.addEventListener("DOMContentLoaded", function () {
        var successMessage = getUrlParameter("success");
        var errorMessage = getUrlParameter("error");
    
        if (successMessage) {
            alert("Message sent successfully!");
        } else if (errorMessage) {
            alert("Message sending failed. Please try again.");
        }
    });