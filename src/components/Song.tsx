import YouTube, { YouTubeEvent, YouTubeProps } from 'react-youtube'

const playVideo = (event: YouTubeEvent<number>) => {
  event.target.seekTo(8699)
  event.target.playVideo()
}

interface SongProps {}

let replayTimer: NodeJS.Timeout | null = null

const Song = (_: SongProps) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.seekTo(8699)
  }
  const onPlayerStateChange: YouTubeProps['onStateChange'] = (event) => {
    console.log('changed! - ', event.data, event.target.getCurrentTime())
    if (event.data === YouTube.PlayerState.PLAYING) {
      console.log(replayTimer)
      if (replayTimer) {
        clearTimeout(replayTimer)
        replayTimer = null
      }
      replayTimer = setTimeout(() => {
        console.log('timeout')
        playVideo(event)
      }, 35 * 1000)
    } else {
      event.target.seekTo(8699)
    }
  }

  const opts: YouTubeProps['opts'] = {
    width: '100%',
    height: '400px',
  }

  return (
    <section className='song inner'>
      <h2>유병재도 희주 생일 축하해줌~</h2>
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
