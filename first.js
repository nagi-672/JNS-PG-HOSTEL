<script>
    function loadContent(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                document.getElementById('about-section').innerHTML = data;
            })
            .catch(error => console.error('Error loading content:', error));
    }
</script>