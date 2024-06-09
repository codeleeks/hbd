import heart from '../assets/heart.png'

interface HomeProps {}
const Home = (props: HomeProps) => {
  return (
    <div className='heart inner'>
      <img src={heart} alt='1년 동안 희주가 행복했던 이미지!' />
    </div>
  )
}

export default Home
