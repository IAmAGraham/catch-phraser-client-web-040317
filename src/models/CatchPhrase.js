class CatchPhrase {
  static all(callbackFn) {
    $.ajax({
      url: 'http://localhost:3000/api/v1/catch_phrases',
      success: callbackFn
    })
  }
}

// CatchPhrase.all()
