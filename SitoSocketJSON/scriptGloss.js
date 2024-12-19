document.addEventListener('DOMContentLoaded', () => {
    const content = {
      "navbar": {
        "brand": "Socket e Reti",
        "links": [
          { "name": "Home", "href": "index.html" },
          { "name": "Socket", "href": "socket.html" },
          { "name": "Modello OSI", "href": "osi.html" },
          { "name": "TCP vs UDP", "href": "tcp_udp.html" }
        ]
      },
      "content": {
        "heading": "Glossario dei Termini",
        "intro": "Qui troverai i principali termini tecnici utilizzati nel sito. Clicca sui termini per maggiori dettagli.",
        "terms": [
          {
            "name": "Socket",
            "href": "socket.html#cosesocket",
            "description": "Endpoint per la comunicazione tra due dispositivi in una rete.",
            "more": "https://www.google.com/search?q=Socket+Endpoint+per+la+comunicazione+tra+due+dispositivi"
          },
          {
            "name": "TCP",
            "href": "osi.html#tcp",
            "description": "Transmission Control Protocol, un protocollo orientato alla connessione.",
            "more": "https://www.google.com/search?q=TCP+Transmission+Control+Protocol"
          },
          {
            "name": "UDP",
            "href": "osi.html#udp",
            "description": "User Datagram Protocol, un protocollo non orientato alla connessione.",
            "more": "https://www.google.com/search?q=UDP+User+Datagram+Protocol"
          },
          {
            "name": "Modello OSI",
            "href": "osi.html",
            "description": "Modello a 7 livelli per descrivere la comunicazione nelle reti.",
            "more": "https://www.google.com/search?q=Modello+OSI+7+livelli"
          }
        ]
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
  
    const intro = document.querySelector('.container p');
    intro.textContent = content.content.intro;
  
    const termsList = document.querySelector('.container ul');
    termsList.innerHTML = ''; // Pulisce la lista esistente
    content.content.terms.forEach(term => {
      const li = document.createElement('li');
      const aTerm = document.createElement('a');
      aTerm.classList.add('glossary-term');
      aTerm.href = term.href;
      aTerm.textContent = term.name;
      li.appendChild(aTerm);
      li.append(`: ${term.description} `);
  
      const aMore = document.createElement('a');
      aMore.classList.add('glossary-term');
      aMore.href = term.more;
      aMore.target = "_blank";
      aMore.textContent = "More";
      li.appendChild(aMore);
  
      termsList.appendChild(li);
    });
  
    // Footer
    const footerText = document.querySelector('footer p');
    footerText.textContent = content.footer.text;
  });
  