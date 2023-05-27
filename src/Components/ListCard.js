import { useData } from "../hooks";
import { useNavigate } from "react-router-dom";

function ListCard() {
    const { listContainer } = useData();
    let navigate = useNavigate();

    return (
        <div className="ListCard">
            {listContainer.map((list) => (
                <form key={list.id} className="Form ListCard__form">
                    <div className="Template__form-date Form__date">{list.date}</div>
                    <ul className="Template__form-list Form__list">
                        {list.item.map((item, index) => (
                            <li key={index} className="Form__item">{item}</li>
                        ))}
                    </ul>
                </form>
            ))}
            <div onClick={() => { navigate('/form') }} className="Create__btn Btn Btn--big Btn__special ListCard__special">create list</div>
        </div>
    );
}

export default ListCard;