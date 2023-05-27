import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../hooks";



function CreateForm() {
    const [value, setValue] = useState('');
    const [listEvents, setListEvents] = useState([]);
    const { addToData } = useData();
    let navigate = useNavigate();

    const [listDate, setlistDate] = useState(new Date(2000 / 11 / 11));

    //ADD ITEMS TO THE LIST IN CREATE FORM COMPONENT
    const addToListEvent = (event) => { setListEvents([...listEvents, event]) }
    const handleAddToList = (e) => {
        e.preventDefault();
        addToListEvent(value)
        setValue('');
    }


    //THIS HANDLE ADDING ITEM TO THE LISTCARD
    const handleSaveList = (e) => {
        e.preventDefault();
        addToData(listDate, listEvents);

        navigate('/list')
    }

    return (
        <section className="CreateForm">
            <div className='CreateForm__box'>
                <h3 className="CreateForm__header header">LIST</h3>
                <form className="CreateForm__form Form">
                    <div className="CreateForm__date Form__date unit">
                        <input
                            type="date"
                            value={listDate}
                            onChange={(e) => { setlistDate(e.target.value) }}
                        />
                    </div>

                    <ul className="CreateForm__list Form__list ">
                        {listEvents.map((listEvent, index) => (
                            <li key={index}>{listEvent}</li>
                        ))}
                        <input
                            value={value}
                            onChange={(e) => { setValue(e.target.value) }}
                            type="text"
                            placeholder='enter event'
                            className='CreateForm__input Form__item'
                        />
                        <div onClick={handleAddToList} className="Form__item Form__item--btn">add item</div>
                    </ul>
                </form>
                <Link onClick={handleSaveList} className="Btn--save save-list">save</Link >
            </div>
        </section>
    );
}
export default CreateForm;