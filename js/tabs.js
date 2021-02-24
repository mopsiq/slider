class Tabs {
  headerChildrens;
  contentChildrens;

  constructor(header, content) {
    this.header = header;
    this.content = content;
    this.activeHeader = 0;

    this.initTabs(header, content)
    this.testRender();
    this.content.addEventListener('click', e => this.render(e) )
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
    this.headerChildrens = headerChildrens;
    this.contentChildrens = contentChildrens;
  }

  render(e) {
    this.activeHeader = this.contentChildrens.indexOf(e.target);
    console.log(this.activeHeader)
    this.testRender();
  }

  testRender() {
    for(let i = 0; i < this.header.childElementCount; i++) {
      if(i !== this.activeHeader) {
        this.header.children[i].classList.add('hidden');
      } else {
        this.header.children[i].classList.remove('hidden');
      }
    }
  }

}

export {Tabs as tabs}; 