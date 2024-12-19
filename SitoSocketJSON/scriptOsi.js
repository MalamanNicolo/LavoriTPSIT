document.addEventListener('DOMContentLoaded', () => {
    const content = {
      "navbar": {
        "brand": "Socket e Reti",
        "links": [
          { "name": "Home", "href": "index.html" },
          { "name": "Socket", "href": "socket.html" },
          { "name": "TCP vs UDP", "href": "tcp_udp.html" },
          { "name": "Glossario", "href": "glossario.html" }
        ]
      },
      "content": {
        "heading": "Modello OSI e Livello di Trasporto",
        "description": "Il modello OSI (Open Systems Interconnection) è un modello di riferimento che descrive come i dati viaggiano da un dispositivo all'altro in una rete. Il modello è suddiviso in 7 livelli. Qui ci concentreremo sul livello di trasporto.",
        "subheading": "Livello di Trasporto",
        "details": "Il livello di trasporto è responsabile della consegna dei dati tra i dispositivi. I principali protocolli in questo livello sono il TCP (Transmission Control Protocol) e l'UDP (User Datagram Protocol). <a href=\"glossario.html#tcp\">Scopri di più su TCP</a> e <a href=\"glossario.html#udp\">UDP</a>."
      },
      "footer": {
        "text": "Nicolo Malaman, Classe 5F"
      }
    };
  
    // Navbar
    const navbarBrand = document.querySelector('.navbar-brand');
    navbarBrand.textContent = content.navbar.brand;
  
    const navbarLinks = document.querySelector('.navbar-nav');
    navbarLinks.innerHTML = ''; // Pulisce i link esistenti
    content.navbar.links.forEach(link => {
      const li = document.createElement('li');
      li.classList.add('nav-item');
      const a = document.createElement('a');
      a.classList.add('nav-link');
      a.href = link.href;
      a.textContent = link.name;
      li.appendChild(a);
      navbarLinks.appendChild(li);
    });
  
    // Contenuto principale
    const mainHeading = document.querySelector('.container h1');
    mainHeading.textContent = content.content.heading;
  
    const description = document.querySelector('.container p:first-of-type');
    description.textContent = content.content.description;
  
    const subheading = document.querySelector('.container h2');
    subheading.textContent = content.content.subheading;
  
    const details = document.querySelector('.container p:last-of-type');
    details.innerHTML = content.content.details;
  
    // Footer
    const footerText = document.querySelector('footer p');
    footerText.textContent = content.footer.text;
  });
  