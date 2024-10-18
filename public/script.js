document.addEventListener("DOMContentLoaded", function() {
    fetch('/env')
        .then(response => response.json())
        .then(data => {
            document.getElementsByTagName("title")[0].textContent = data.siteTitle;
            document.getElementsByTagName("iframe")[0].src = data.siteUrl;
        })
        .catch(error => console.error('Error fetching environment variables:', error));
});

function exploit() {
    fetch('/run-script')
        .then(response => response.text())
        .then(output => {
            console.log('Script Output:', output);  
        })
        .catch(error => console.error('Error fetching script output:', error));
}

