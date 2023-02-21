import { useEffect, useState } from 'react';
import space from '../../data/space.json'
import { CloseButton } from '../Buttons/CloseButton';

// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), 'data/space.json');
//   const jsonData = await fsPromises.readFile(filePath);
//   const planetData = JSON.parse(jsonData);
//   const filteredData = planetData.filter((planet) => planet.Name == {title});
//   return{
//     props: filteredData
//   }
// }

export default function InfoBox({ title, fact, onClick }) {
const [planet, setPlanet] = useState([]);
return (
    <fieldset className = "crt info-box">
      <legend className  = 'title'>
       {title}
      </legend>
       
      <div className="bounding">
        <div className = 'fact'>
          {fact}
        </div>
        <div className='otherFacts'>
          <div className = "left"> 
          </div>
          <div className = "right"> </div>
        </div>
      </div>
      <CloseButton  onClick = {onClick}/>
    </fieldset>
  );
}