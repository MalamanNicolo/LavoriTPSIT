const content = {
    "navbar": {
      "brand": "Socket e Reti",
      "links": [
        { "name": "Socket", "href": "socket.html" },
        { "name": "Modello OSI", "href": "osi.html" },
        { "name": "TCP vs UDP", "href": "tcp_udp.html" },
        { "name": "Glossario", "href": "glossario.html" }
      ]
    },
    "hero": {
      "heading": "Benvenuto su Socket e Reti",
      "lead": "Un'introduzione al funzionamento delle socket e ai concetti correlati nelle reti informatiche.",
      "ctaText": "Scopri di più sulle Socket",
      "ctaHref": "socket.html"
    },
    "footer": {
      "text": "Nicolo Malaman, Classe 5F"
    }
  };
  
  // Funzione per caricare i dati dalla variabile content e inserirli nella pagina
  document.addEventListener('DOMContentLoaded', () => {
    // Inserire il contenuto della navbar
    const navbarBrand = document.querySelector('.navbar-brand');
    navbarBrand.textContent = content.navbar.brand;
  
    const navbarLinks = document.querySelector('.navbar-nav');
    navbarLinks.innerHTML = ''; // Pulisce la lista dei link esistente
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
  
    // Inserire il contenuto della sezione Hero
    const heroHeading = document.querySelector('header h1');
    heroHeading.textContent = content.hero.heading;
  
    const heroLead = document.querySelector('header p');
    heroLead.textContent = content.hero.lead;
  
    const heroCTA = document.querySelector('header a');
    heroCTA.textContent = content.hero.ctaText;
    heroCTA.href = content.hero.ctaHref;
  
    // Inserire il contenuto del footer
    const footer = document.querySelector('footer p');
    footer.textContent = content.footer.text;
  });