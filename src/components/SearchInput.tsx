import React, { useState } from 'react';
import { Select, Input } from 'antd';

import { Spinner } from "./Spinner";
import { stat } from 'fs';


const { Option } = Select;
const { Search } = Input;



export const SearchInput: React.FC = () => {
    // const [value, valueSearch] = useState('');

const [state, setState ]= useState({
    city: "",
    range: 2
})

    // const [city, setCity] = useState("");
    const [showSpinner, setSpinner] = useState(false);
// handle range



    // handle input
    const handleChange = (e: any) => {
    // get input value
        const { name, value } = e.target;
// set city to input value
   setState({...state, [name]: value});

   console.log("value ", state.city)
    }
    

    // handle submit
    const handleSubmit = (e: any) => {
    e.preventDefault();
e.stopPropagation();

setSpinner(true);
console.log("submitting form");


    }
    

    return (
        <>
        <div className="select">
            <p className="geo-text">Geolocation radius</p>
            {/* <Select defaultValue="lucy" style={{ width: 120 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select> */}
            <p> 1 - {state.range}km </p> 
            <input type="range" min="1" max="20" onChange={handleChange} value={state.range} name="range" />
        </div>
        <form className="search-select" onSubmit={handleSubmit} > 

            <Search style={{ width: 400 }} placeholder="input search text" name="city" onChange={handleChange} value={state.city} enterButton />
        </form>

        {
            showSpinner && <Spinner />
        }

        </>
    )
}
