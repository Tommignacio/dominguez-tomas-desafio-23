let ws = null

$(function () {
  // Only connect when username is available
  if (window.username) {
    startChat()
  }
})

function startChat () {
  ws = adonis.Ws().connect()

  ws.on('open', () => {
    $('.connection-status').addClass('connected')
    subscribeToChannel()
  })

  ws.on('error', () => {
    $('.connection-status').removeClass('connected')
  })
}