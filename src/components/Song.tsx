import YouTube, { YouTubePlayer, YouTubeProps } from 'react-youtube'

interface SongProps {}

const Song = (_: SongProps) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.seekTo(8699, true)
    event.target.playVideo()
  }

  const onPlayerStateChange: YouTubeProps['onStateChange'] = (event) => {
    if(event.data === YouTube.PlayerState.PLAYING ) {
      setTimeout(() => {
        event.target.pauseVideo()
        event.target.seekTo(8699, true)
      }, 35 * 1000)
    }
  }

  const opts: YouTubeProps['opts'] = {
    width: '100%',
    height: '400px',
    playerVars: {
      start: 8699,
    },
  }

  return (
    <section className='song inner'>
      <YouTube
        videoId='9lAT1N1swVU'
        opts={opts}
        onReady={onPlayerReady}
        onStateChange={onPlayerStateChange}
        className='song__player'
      />
    </section>
  )
}

export default Song
