document.addEventListener('DOMContentLoaded', () => {
    const content = {
      "navbar": {
        "brand": "Socket e Reti",
        "links": [
          { "name": "Home", "href": "index.html" },
          { "name": "Modello OSI", "href": "osi.html" },
          { "name": "TCP vs UDP", "href": "tcp_udp.html" },
          { "name": "Glossario", "href": "glossario.html" }
        ]
      },
      "content": {
        "heading": "Le Socket",
        "accordion": [
          {
            "title": "Cos'è una socket?",
            "body": "Una socket è un endpoint per la comunicazione tra due macchine in una rete. <a href=\"glossario.html#socket\">Approfondisci nel glossario</a>."
          },
          {
            "title": "Tipologie di socket",
            "body": "Le socket possono essere di due tipi principali: <strong>Stream</strong> (es. TCP) e <strong>Datagram</strong> (es. UDP)."
          },
          {
            "title": "Processo di comunicazione",
            "body": "Il processo di comunicazione con le socket prevede un client che invia richieste a un server e il server che risponde tramite una connessione stabilita."
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
  
    const accordion = document.querySelector('#socketAccordion');
    accordion.innerHTML = ''; // Pulisce i contenuti dell'accordion
    content.content.accordion.forEach((item, index) => {
      const accordionItem = document.createElement('div');
      accordionItem.classList.add('accordion-item');
  
      const headerId = `heading${index + 1}`;
      const collapseId = `collapse${index + 1}`;
  
      accordionItem.innerHTML = `
        <h2 class="accordion-header" id="${headerId}">
          <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${index === 0}" aria-controls="${collapseId}">
            ${item.title}
          </button>
        </h2>
        <div id="${collapseId}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="${headerId}" data-bs-parent="#socketAccordion">
          <div class="accordion-body">${item.body}</div>
        </div>
      `;
  
      accordion.appendChild(accordionItem);
    });
  
    // Footer
    const footerText = document.querySelector('footer p');
    footerText.textContent = content.footer.text;
  });
  