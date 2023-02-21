import space from '../../data/space.json'

export default function InfoBox({ title }) {
var value = space.filter(obj => obj.Name === {title});
console.log(value)
  return (
    <fieldset className = "crt info-box">
      <legend className  = 'title'>
       {title}
      </legend>
       
      <div className="bounding">
       
       <div className = "left"> </div>
       <div className = "right"> </div>
      </div>
    </fieldset>
  );
}