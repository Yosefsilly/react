import react from "react";
import reactDom from "react-dom";

import './index.css';
import photo from './hii.png'

const Cars = () => {
  return (
      <section className="carList">
    <Car></Car>
    <Car></Car>
    <Car></Car>
    <Car></Car>
    <Car></Car>
    <Car></Car>
      </section>
    );
};

const Car = () => {
  return (
  <article className="car">
    <Image></Image>
    <Name></Name>
    <Speed></Speed>
</article>
)
}

const Image = () => {
  return <img src={photo} width="400">
  </img>
}

const Name = () => <h1>Race cars are amazing </h1>
const Speed = () => <h4>speed 2,000 mph</h4>

reactDom.render(<Cars />, document.getElementById('root'));