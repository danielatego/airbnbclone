import './style.css'
import katie from "./components/images/katie.jpg";
import bike from "./components/images/mountain-bike 1.jpg";
import wedo from "./components/images/wedding-photography 1.jpg";
import Nav from './components/nav'
import Hero from './components/hero'
import Card from './components/card'
export default function App(){
    
    return(
    <>
        
        {/* <Nav/>
        <Hero/>*/}
        <Card
        img ={katie} 
        desc='Life lessons with Katie Zaferes'
        price='From $136'
        rating='5.0'
        /> 
        <Card
        img ={bike} 
        desc='Group Mountain Biking'
        price='From $50'
        rating='4.8'
        />
        <Card
        img ={wedo} 
        desc='Learn wedding photography'
        price='From $125'
        rating='5.0'
        />
        
        

    </>)
}