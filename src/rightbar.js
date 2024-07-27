import React from "react";

const RightBar=()=>{
    return <div className="right-bar">
        <h4>Birthdays</h4>
        <div className="right-flex">
        <i class="bi bi-gift-fill"></i>
        <h5>Akhil's </h5> <span><p>birthday today</p></span>
        </div>
        <div className="contacts">
            <h4>Contacts</h4>
            <div className="c-flex"><i class="bi bi-person-circle"></i><h5>Ganesh P</h5></div>
            <div className="c-flex"><i class="bi bi-person-circle"></i><h5>Uday Kumar</h5></div>
            <div className="c-flex"><i class="bi bi-person-circle"></i><h5>Bala Kishna</h5></div>
            <div className="c-flex"><i class="bi bi-person-circle"></i><h5>Sidharth</h5></div>
            <div className="c-flex"><i class="bi bi-person-circle"></i><h5>Chandu Raju</h5></div>
            <div className="c-flex"><i class="bi bi-person-circle"></i><h5>Jeevan Reddy</h5></div>
            <div className="c-flex"><i class="bi bi-person-circle"></i><h5>Chandra Shekhar</h5></div>

        </div>
    </div>
}
export default RightBar;