let conName = document.querySelector ('#user_name'),
    message = document.querySelector ('#message')
    


conName.addEventListener('input', function() {
    message.value = `Hello, my name is ${conName.value} and the purpose of contacting you:`
})