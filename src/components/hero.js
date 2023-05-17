import logo from './images/hero.jpg'

export default function Hero(){
    return(
    <hero className = 'hero'>
        <img src={logo} alt="" />
        <h2>Online Experiences</h2>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
    </hero>
    )
}