class Nav extends HTMLElement {
  // The browser calls this method when the element is
  // added to the DOM.

  connectedCallback() {
    this.innerHTML = `
    
    <div class="topnav">
    <a href="index.html"
      ><img
        class="nav-logo"
        src="img/CS1-square-logo-100x100px.png"
        height="40px"
        alt=""
    /></a>
    <div class="nav-items">
      <a class="nav-item" href="index.html">Hem</a>
      <a class="nav-item" href="ledarskap.html">Ledarskap</a>
      <a class="nav-item" href="kommunikation.html">Kommunikation</a>
      <a class="nav-item" href="kreativitet.html">Kreativitet</a>
      <a class="nav-item" href="contact.html">Kontakt</a>
      <div class="ham-menu">
        <div id="navbar" class="navigation" role="navigation">
          <input id="toggle1" type="checkbox" />
          <label class="hamburger1" for="toggle1">
            <div class="top"></div>
            <div class="meat"></div>
            <div class="bottom"></div>
          </label>
          <div class="nav-menu">
            <a class="link1" href="ledarskap.html">Ledarskap</a>
            <a class="link1" href="kommunikation.html">Kommunikation</a>
            <a class="link1" href="kreativitet.html">Kreativitet</a>
            <a class="link1" href="contact.html">Kontakt</a>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
  }
}

customElements.define("nav-component", Nav);
