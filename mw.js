document.getElementById("open-modal-btn").addEventListener("click", function() {
    document.getElementById('my-modal').classList.add('open')
})

document.getElementById("close-my-mw").addEventListener("click", function() {
    document.getElementById('my-modal').classList.remove('open')
})