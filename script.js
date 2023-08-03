// https://console.cloud.google.com/apis/api/youtube.googleapis.com
const APIkey = 'AIzaSyBMH3Qszwmxjdha65PZTZhr7L2Oa0d937c'

let input = document.getElementById('link')
input.focus()

function search() {
  
  if (input.value.includes('watch?v=')) {
    searchByVideo()
  } else if (input.value == '') {
    document.getElementById('videoInfos').style.display = 'none'
  } else {
    searchByChannel()
  }

  input.value = ''
  input.focus()

}

function searchByVideo() {

  // get the ID from video url
  videoLink = (input.value.slice(input.value.indexOf('watch?v=') + 'watch?v='.length))

  // endpoint to search by video link
  videoEndpoint = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoLink}&key=${APIkey}`

  // handle return from API
  fetch(videoEndpoint).then(function(response) {
    return response.json()
  }).then(function(data) {
    videoInfos = data.items[0]
    
    channelId = videoInfos.snippet.channelId
    channelTitle = videoInfos.snippet.channelTitle
    channelThumbnail = videoInfos.snippet.thumbnails.default.url

    document.getElementById('videoInfos').style.display = 'block'
    document.getElementById('channelTitle').innerHTML = channelTitle
    document.getElementById('channelId').innerHTML = channelId

  })

}

function searchByChannel() {
    // get the channel name from url
    cId = (input.value.slice(input.value.indexOf('.com/') + '.com/'.length))

    // API to search by username:
    // https://github.com/Benjamin-Loison/YouTube-operational-API

    // endpoint to search by video link
    channelEndpoint = `https://yt.lemnoslife.com/channels?cId=${cId}`

    // handle return from API
    fetch(channelEndpoint).then(function(response) {
      return response.json()
    }).then(function(data) {
      channelId = data.items[0].id

      channelId = videoInfos.snippet.channelId
      channelTitle = videoInfos.snippet.channelTitle
      channelThumbnail = videoInfos.snippet.thumbnails.default.url
  
      document.getElementById('videoInfos').style.display = 'block'
      document.getElementById('channelTitle').innerHTML = channelTitle
      document.getElementById('channelId').innerHTML = channelId
    })

}