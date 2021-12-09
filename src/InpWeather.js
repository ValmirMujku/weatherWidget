import React from 'react'

export default function InpWeather(props) {

//    const takeData=(e)=>{
//        e.preventDefault();
//        const Cname = e.target.elements.inpWeather.value;
//         props.setName(Cname);
//    }

const treatName = (e)=>{

    e.preventDefault();
    const placeName = e.target.elements.inpWeather.value;
    props.getName(placeName);
}

    return (
        <div>
            <form onSubmit={treatName} >
                <input type='text' placeholder='COUNTRY NAME' name='inpWeather'   className={props.class} style={{height:'40px', textAlign:'center'}}></input>
               
            </form>
        </div>
    )
}
