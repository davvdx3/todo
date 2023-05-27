import { Link } from "react-router-dom";

function Create() {
    return (
        <div className="Create">
            <Link to="form" className="Create__btn Btn Btn--big">CREATE YOUR TO DO LIST</Link>
        </div>
    );
}

export default Create;