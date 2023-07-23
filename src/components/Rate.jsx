import '../assets/styles/Rate.scss';

function Rate(props) {
    const {rate, price, speed, color, isSelected} = props;
    let classSelceted = isSelected ? 'selected': '';
    return (
        <div className={`rate-container ${classSelceted}`}>
            <div className={`background ${color}`}><h3>Безлимитный {rate}</h3>
            <p><span>{price}</span> руб/мес</p></div>
            <p>до {speed} Мбит/сек</p>
            <p className='text'>Объем включенного трафика не ограничен</p>
        </div>
    );
}

export default Rate;