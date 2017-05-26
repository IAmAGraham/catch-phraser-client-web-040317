class CatchPhraseListView {

  constructor(phrases){
    this.phrases = phrases
  }

  render(){
    const lis = this.phrases.map(function(phrase){
      const catchPhrase = new CatchPhraseView(phrase)
      return catchPhrase.render()
    })
    debugger
    return `<ul>${lis}</ul>`
  }
}
