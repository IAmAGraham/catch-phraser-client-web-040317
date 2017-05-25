class CatchPhraseView {

  constructor(phrase){
    this.phrase = phrase
  }

  render(){
    return `<li>${this.phrase.content}</li>`
  }
}
