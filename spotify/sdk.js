window.onSpotifyWebPlaybackSDKReady = () => {
        const token = 'BQDL8wyTe7Xj2WTN2F_-lXJv6fTznTsnrXnnD_OR5W0Nm8HwyGeCpYglsbJCvxPEiOiq0kqg3Kq4AaL1-MWbYAkJxQq4DPukY33SPZslSVfV6Dvt6j60Oc4smHN4b7x-E1H-35zA1_TBZaHtdjB_AzRZZL8TwZA';
        const player = new Spotify.Player({
          name: 'Web Playback SDK Quick Start Player',
          getOAuthToken: cb => { cb(token); }
        });
      
        // Error handling
        player.addListener('initialization_error', ({ message }) => { console.error(message); });
        player.addListener('authentication_error', ({ message }) => { console.error(message); });
        player.addListener('account_error', ({ message }) => { console.error(message); });
        player.addListener('playback_error', ({ message }) => { console.error(message); });
      
        // Playback status updates
        player.addListener('player_state_changed', state => { console.log(state); });
      
        // Ready
        player.addListener('ready', ({ device_id }) => {
          console.log('Ready with Device ID', device_id);
        });
      
        // Not Ready
        player.addListener('not_ready', ({ device_id }) => {
          console.log('Device ID has gone offline', device_id);
        });
      
        // Connect to the player!
        player.connect();
      }