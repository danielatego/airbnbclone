import main from './images/katie.jpg'
import icon from './images/Star.svg'
import dot from "./images/dot.svg";

export default function Card(){
    return(
        <>
        <div className='card'>
            <div className='card_image'>
                <img src={main} alt=""/>
            </div>
            <div className='card_banner'>
                <span>SOLD OUT</span> 
            </div>
            <div className='card_footer'>
                <div className='card_footer_1'>
                    <img className = "card_footer_img_1"src={icon} alt="" />
                    <span className = "card_footer_span_1">5.0</span>
                    <span className ='card_footer_span_2'>(6)</span>
                    <img className = "card_footer_img_2" src={dot} alt="" />
                    <span className ='card_footer_span_2'>U.S.A</span>
                </div>
                <div>
                    <span className='card_footer_desc'>Life lessons with Katie Zaferes</span>
                </div>
                <div>
                    <span className='light'><span className='bold'>From $136</span> / person</span>
                </div>
            </div>
        </div>
        <div className='card'>
            <div className='card_image'>
                <img src={main} alt=""/>
            </div>
            <div className='card_banner'>
                <span>SOLD OUT</span> 
            </div>
            <div className='card_footer'>
                <div className='card_footer_1'>
                    <img className = "card_footer_img_1"src={icon} alt="" />
                    <span className = "card_footer_span_1">5.0</span>
                    <span className ='card_footer_span_2'>(6)</span>
                    <img className = "card_footer_img_2" src={dot} alt="" />
                    <span className ='card_footer_span_2'>U.S.A</span>
                </div>
                <div>
                    <span className='card_footer_desc'>Life lessons with Katie Zaferes</span>
                </div>
                <div>
                    <span className='light'><span className='bold'>From $136</span> / person</span>
                </div>
            </div>
        </div>
        </>
    )
}