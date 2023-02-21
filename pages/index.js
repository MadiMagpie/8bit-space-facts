import Head from 'next/head'
import Image from 'next/image'
import space from '../data/space.json'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import NavBar from '@/components/NavBar'
import InfoBox from '@/components/InfoBox'
import { LottieLoad } from '@/components/LottieLoad'

export default function Home() {
  const [isSelected, setSelected] = useState(false);
  const [planet, setPlanet] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
         setTimeout(() => {
                setLoading(false);
         }, 1000);
  }, []);

  if(loading){
         return(
                <>
                <main className='main'>
                       <LottieLoad/>
                </main>
                </>
         )
  }
  const r = useRouter();

  function handlePlanetChoice(planet){
    setSelected(true);
    setPlanet(planet);
  }

  return (
    <>
      <Head>
        <title>Planets</title>
        <meta name = "author" content = "MDIA 2109" />
        <meta property = "title" content = "Assignment #2 - Planet Page" />
        <meta property="description" content="Displays planet images and facts in a spaceship window" />
        <link rel="icon" href="/pngs/Earth.png" />
      </Head>
      <main className='main'>
        <div className = 'planets'>
          <Image className = 'sun' id = 'sun' src = {'/svgs/Sun.svg'} width={200} height={200} alt='Sun'/>
          {space.slice(0,8).map((planet) => {
            return(
              <>
                <div   
                className='planet'   
                key={planet.Name}
                onClick = {() => handlePlanetChoice(planet.Name)} >
                  <Image className = 'image' src = {planet.path} width={planet.dimension} height={planet.dimension} alt={planet.Name}/>
                </div>                
              </>
            )
          })}
        </div>
        {isSelected && <InfoBox id = 'info-box' title = {planet}/>}
      </main>
    </>
  )
}
