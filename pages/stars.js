import Head from 'next/head'
import space from '../data/space.json'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { LottieLoad } from '@/components/LottieLoad';

export default function Stars(){
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
       return(
              <>
              <Head>
                     <title>Stars</title>
                     <meta name = "author" content = "MDIA 2109" />
                     <meta property = "title" content = "Assignment #2 - Star Page" />
                     <meta property="description" content="Displays table of star data in a spaceship window" />
                     <link rel="icon" href="/pngs/Earth.png" />
              </Head>
              <main className='main'>
                     <div className ='crt stars'>
                            <table>
                                   <thead>
                                          <tr>
                                                 <th id = 'testHere'>Name</th>
                                                 <th>Distance (km)</th>
                                                 <th>Diameter (km)</th>
                                                 <th>Density (kg/m^3)</th>
                                          </tr>

                                   </thead>
                                   <tbody>
                                          {space.slice(8,261).map((star) => {
                                                 return(
                                                        <tr key = {star.Name}>
                                                               <td>{star.Name}</td>
                                                               <td>{star.Distance}</td>
                                                               <td>{star.Diameter}</td>
                                                               <td>{star.Density}</td>
                                                        </tr>
                                                 )
                                                 
                                          })}
                                   </tbody>
                            </table>
                     </div>
              
              </main>
              </>
       )
}