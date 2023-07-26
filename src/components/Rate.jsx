import { useState } from 'react';
import '../assets/styles/Rate.scss';

function Rate(props) {
    const {rate, price, speed, color} = props;
    const [pressed, setPressed] = useState(false);
    const handleChange = () => {
        setPressed(!pressed);
    }    
    let classSelected = pressed ? 'selected': '';
return (
        <div className={`rate-container ${classSelected}`} onClick={handleChange}>
            <div className={`background ${color}`}><h3>Безлимитный {rate}</h3>
            <p><span>{price}</span> руб/мес</p></div>
            <p>до {speed} Мбит/сек</p>
            <p className='text'>Объем включенного трафика не ограничен</p>
        </div>
    );
}

export default Rate;