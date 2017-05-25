// when the document is ready

// 1. Representing data from the API - Model
// 2. Our Views - what the user sees - View
// 3. Passing back and forth  - Controller


$(function(){
  // fire an AJAX request to our API
  // we need a form that takes in a student name and some content
  CatchPhrase.all(function(data){
    const lis = data.map(function(phrase){
      const catchPhrase = new CatchPhraseView(phrase)
      return catchPhrase.render()
    })
    $('ul#phrases').html( lis.join(''))
  })
  // when the form is submitted
  $('#new-phrase').on('submit', function(event){
    event.preventDefault()
    // take what's in the input values
    const content = $('input[name=content]').val()
    const studentName = $('input[name=student_name]').val()
    if (content.length && studentName.length ) {
      // send it to the API to save it in the database
      $.ajax({
        url: 'http://localhost:3000/api/v1/catch_phrases',
        method: 'POST',
        data: {
          catch_phrase: {
            content: content
          },
          student: {
            name: studentName
          }
        },
        success: function(phrase){
            // render out a new phrase into the dom
          const catchPhrase = new CatchPhrase(phrase)
          $('#phrases').append( catchPhrase.render() )
          $('input[name=content]').val('')
          $('input[name=student_name]').val('')
        }
      })
      $('#error').html('')
    } else {
      $('#error').html('You must fill out both fields')
    }
  })

})
