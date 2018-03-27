var playlist = {
  johnnyAndSanto: 'sleepwalk',
  manuelGarcia: 'tuVentana',
  sharonVanEtten: 'oneDay'
}

function updatePlaylist(playlist, artist, song) {
 playlist[artist] = 'song'; 
 return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist;
}