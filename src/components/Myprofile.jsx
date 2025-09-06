import React from "react";

function Myprofile({ data }) {
    return (
        <div>
            <p>I'm from my profile component</p>
            <p>My name is {data.firstName} {data.lastName}</p>
            <img src={data.imgPic} alt={data.firstName}  width="150" height="150"/>
        </div>
    )
}

export default Myprofile