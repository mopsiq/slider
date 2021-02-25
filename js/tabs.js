class Tabs {

  _headerChildrens;
  _contentChildrens;

  constructor(header, content) {
    this.header = header;
    this.content = content;
    this._activeHeader = 0;

    this.initTabs(header, content)
    this.content.addEventListener('click', e => this.renderTab(e) )
  }

  initTabs(header, content) {
    let headerChildrens = [];
    let contentChildrens = [];
    
    
    for(let i of header.children) {
      headerChildrens.push(i)
    }

    for(let i of content.children) {
      contentChildrens.push(i)
    }
    this.header.children[this._activeHeader].classList.add('active');
    this.content.children[this._activeHeader].classList.add('active')

    this.headerChildrens = headerChildrens;
    this.contentChildrens = contentChildrens;
  }

  renderTab(e) {
    this.content.children[this._activeHeader].classList.remove('active')
    this.header.children[this._activeHeader].classList.remove('active');

    this._activeHeader = this.contentChildrens.indexOf(e.target);

    this.content.children[this._activeHeader].classList.add('active')
    this.header.children[this._activeHeader].classList.add('active');
  }

}

export {Tabs as tabs}; 