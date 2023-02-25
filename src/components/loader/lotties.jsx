import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

const lottiesLoading = () => {
  return (
    <main className='lottie'><Player
    autoplay
    loop
    speed={1}
    src="https://lottie.host/4d7dccc8-0298-4b04-b2c2-bf89209137e2/ClNh8wNMSJ.json"
    style={{ height: '350px', width: '350px' }}
  >
  </Player></main>
  )
}

export default lottiesLoading