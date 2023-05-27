

function Template() {
    return (
        <section className="Template">
            <div className="Template__box">
                <h3 className="Template__header header">TEMPLATE</h3>
                <form className="Template__form Form">
                    <div className="Template__form-date Form__date">Monday, september 19</div>
                    <ul className="Template__form-list Form__list">
                        <li className="Form__item">code</li>
                        <li className="Form__item">sleep</li>
                        <li className="Form__item">cook something</li>
                        <div className="Form__item Form__item--btn btn-small">add item</div>
                    </ul>
                </form>
            </div>
        </section>
    );
}

export default Template;