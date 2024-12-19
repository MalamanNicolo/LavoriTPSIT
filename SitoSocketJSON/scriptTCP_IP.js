document.addEventListener('DOMContentLoaded', () => {
    const content = {
      "navbar": {
        "brand": "Socket e Reti",
        "links": [
          { "name": "Home", "href": "index.html" },
          { "name": "Socket", "href": "socket.html" },
          { "name": "Modello OSI", "href": "osi.html" },
          { "name": "Glossario", "href": "glossario.html" }
        ]
      },
      "content": {
        "heading": "TCP vs UDP",
        "intro": "Il TCP (Transmission Control Protocol) e l'UDP (User Datagram Protocol) sono i due principali protocolli del livello di trasporto.",
        "tcp": {
          "heading": "TCP",
          "description": "TCP è un protocollo orientato alla connessione che garantisce la consegna dei dati in ordine e senza errori. È utilizzato in applicazioni come il web e la posta elettronica."
        },
        "udp": {
          "heading": "UDP",
          "description": "UDP è un protocollo non orientato alla connessione che non garantisce la consegna dei dati o il loro ordine. È usato in applicazioni dove la velocità è più importante dell'affidabilità, come lo streaming video."
        },
        "links": {
          "tcp": "glossario.html#tcp",
          "udp": "glossario.html#udp"
        }
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
  
    const intro = document.querySelector('.container p:first-of-type');
    intro.textContent = content.content.intro;
  
    const tcpHeading = document.querySelector('.container h2:first-of-type');
    tcpHeading.textContent = content.content.tcp.heading;
  
    const tcpDescription = document.querySelector('.container p:nth-of-type(2)');
    tcpDescription.textContent = content.content.tcp.description;
  
    const udpHeading = document.querySelector('.container h2:last-of-type');
    udpHeading.textContent = content.content.udp.heading;
  
    const udpDescription = document.querySelector('.container p:nth-of-type(3)');
    udpDescription.textContent = content.content.udp.description;
  
    const links = document.querySelector('.container p:last-of-type');
    links.innerHTML = `<a href="${content.content.links.tcp}">Scopri di più su TCP</a> e <a href="${content.content.links.udp}">UDP</a> nel glossario.`;
  
    // Footer
    const footerText = document.querySelector('footer p');
    footerText.textContent = content.footer.text;
  });
  