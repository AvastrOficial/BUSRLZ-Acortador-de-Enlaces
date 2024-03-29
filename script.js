  function acortarURL() {
            var originalUrl = document.getElementById('originalUrl').value;
            var personalization = document.getElementById('personalization').value;
            var apiUrl = 'https://is.gd/create.php?format=json&url=' + encodeURIComponent(originalUrl);

            if (personalization.trim() !== '') {
                apiUrl += '&shorturl=' + encodeURIComponent(personalization);
            }

            fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                var resultDiv = document.getElementById('shortenedUrl');
                if (data.shorturl) {
                    resultDiv.innerHTML = 'URL acortada: <a href="' + data.shorturl + '" target="_blank">' + data.shorturl + '</a>';
                } else {
                    resultDiv.innerHTML = 'Error al acortar la URL. Por favor, verifica la URL e intenta nuevamente.';
                }
                resultDiv.classList.add('show');
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('shortenedUrl').innerHTML = 'Error al acortar la URL. Por favor, intenta nuevamente Las URL cortas personalizadas solo pueden contener caracteres alfanuméricos y guiones bajos.';
            });
        }
      
              function openPopup() {
            var overlay = document.getElementById('overlay');
            overlay.style.visibility = 'visible';
            overlay.style.opacity = '1';
        }

        function closePopup() {
            var overlay = document.getElementById('overlay');
            overlay.style.visibility = 'hidden';
            overlay.style.opacity = '0';
        }

      function redirectToApi() {
            window.location.href = 'https://is.gd/software.php';
        }
      
              function redirectToDocumentacion() {
            window.location.href = "https://github.com/AvastrOficial/BUSRLZ-Acortador-de-Enlaces";
        }

       document.getElementById("menuButton").addEventListener("click", function() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});
