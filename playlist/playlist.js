/**
 * @typedef {Object} Song
 * @property {string} title - The title of the song.
 * @property {string} artist - The artist of the song.
 * @property {string} genre - The genre of the song.
 * @property {number} duration - The duration of the song in seconds.
 * @property {boolean} favorite - Whether the song is marked as a favorite.
 */
// Example: { title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }


/**
 * @typedef {Object} Playlist
 * @property {string} name - The name of the playlist.
 * @property {Song[]} songs - The list of songs in the playlist.
 */
// Example: { name: 'Playlist Name', songs: [{ title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }] }

const musicCatalog = () => {
  /**
   * Array of playlists in the catalog.
   * @type {Playlist[]}
   */
  let playlists = [];

  /**
   * Adds a new playlist to the catalog.
   * @param {string} playlistName - The name of the new playlist.
   */
  const createPlaylist = (playlistName) => {
      // Verifica si ya existe una lista de reproducción con el mismo nombre
      if (playlists.some(playlist => playlist.name === playlistName)) {
          throw new Error('Playlist already exists');
      }
      // Si no existe, crea una nueva lista de reproducción y la agrega al catálogo
      playlists.push({ name: playlistName, songs: [] });
  };

  /**
   * Gets all playlists in the catalog.
   * @returns {Playlist[]} The list of all playlists.
   */
  const getAllPlaylists = () => {
      // Devuelve una copia profunda del array para evitar mutaciones externas
      return JSON.parse(JSON.stringify(playlists));
  };

  /**
   * Removes a playlist from the catalog.
   * @param {string} playlistName - The name of the playlist to remove.
   */
  const removePlaylist = (playlistName) => {
      const index = playlists.findIndex(playlist => playlist.name === playlistName);
      if (index !== -1) {
          playlists.splice(index, 1);
      } else {
          throw new Error('Playlist not found');
      }
  };

  /**
   * Adds a song to a specific playlist.
   * @param {string} playlistName - The name of the playlist to add the song to.
   * @param {{ title: string, artist: string, genre: string, duration: number }} song - The song to add to the playlist.
   * @throws {Error} If the playlist is not found.
   */
  const addSongToPlaylist = (playlistName, song) => {
      const playlist = playlists.find(playlist => playlist.name === playlistName);
      if (!playlist) {
          throw new Error('Playlist not found');
      }

      // Crear una nueva canción con el campo favorite establecido en false
      const newSong = {
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          duration: song.duration,
          favorite: false
      };

      // Añadir la canción a la lista de reproducción
      playlist.songs.push(newSong);
  };

  /**
   * Removes a song from a specific playlist.
   * @param {string} playlistName - The name of the playlist to remove the song from.
   * @param {string} title - The title of the song to remove.
   * @throws {Error} If the playlist or song is not found.
   */
  const removeSongFromPlaylist = (playlistName, title) => {
      const playlist = playlists.find(playlist => playlist.name === playlistName);
      if (!playlist) {
          throw new Error('Playlist not found');
      }

      const songIndex = playlist.songs.findIndex(song => song.title === title);
      if (songIndex === -1) {
          throw new Error('Song not found');
      }

      // Eliminar la canción
      playlist.songs.splice(songIndex, 1);
  };

  /**
   * Marks a song as a favorite or removes the favorite status.
   * @param {string} playlistName - The name of the playlist containing the song.
   * @param {string} title - The title of the song to mark as a favorite.
   */
  const favoriteSong = (playlistName, title) => {
      const playlist = playlists.find(playlist => playlist.name === playlistName);
      if (!playlist) {
          throw new Error('Playlist not found');
      }

      const song = playlist.songs.find(song => song.title === title);
      if (!song) {
          throw new Error('Song not found');
      }

      // Marcar o desmarcar como favorito
      song.favorite = !song.favorite;
  };

  /**
   * Sorts songs in a specific playlist by a given criterion (title, artist, or duration).
   * @param {string} playlistName - The name of the playlist to sort songs in.
   * @param {'title' | 'artist' | 'duration'} criterion - The criterion to sort by.
   * @returns {Song[]} The list of sorted songs.
   * @throws {Error} If the playlist is not found or the criterion is invalid.
   */
  const sortSongs = (playlistName, criterion) => {
      const playlist = playlists.find(playlist => playlist.name === playlistName);
      if (!playlist) {
          throw new Error('Playlist not found');
      }

      if (!['title', 'artist', 'duration'].includes(criterion)) {
          throw new Error('Invalid sorting criterion');
      }

      // Crear una copia del array antes de ordenar para evitar mutaciones
      return [...playlist.songs].sort((a, b) => {
          if (criterion === 'duration') {
              return a[criterion] - b[criterion];
          }
          return a[criterion].localeCompare(b[criterion]);
      });
  };

  return { createPlaylist, addSongToPlaylist, removeSongFromPlaylist, sortSongs, getAllPlaylists, removePlaylist, favoriteSong };
};

// Exporta la función musicCatalog como un módulo por defecto
export default musicCatalog;
