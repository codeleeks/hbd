import heart from '../assets/heart.png'

interface HomeProps {}
const Home = (_: HomeProps) => {
  return (
    <div className='heart inner'>
      <ul className='canvas'>
        {[...Array(50)].map((_, i) => (
          <li key={i} className='star'></li>
        ))}
      </ul>
      <div className='heart__image'>
        <img src={heart} alt='1년 동안 희주가 행복했던 이미지!' />
      </div>
    </div>
  )
}

export default Home
