import React, { useState } from 'react'

const initialState = {
    name: "",
    city: ""
}
const UseState2 = () => {
    const [formData, setFormData] = useState(initialState)

    function handleNameChange(e) {
        setFormData({
            ...formData,
            name: e.target.value
        })

    }

    function handleCityChange(e) {
        setFormData({
            ...formData,
            city: e.target.value
        })

    }

    console.log(formData)


    return (
        <div>
            <h1>UseState UseHooks</h1>
            <div>
                <input onChange={handleNameChange} type="text" name='name' placeholder="Enter Name" />
                <select onChange={handleCityChange} name="city" id="">
                    <option value={""}>Select City</option>
                    <option value={"bengaluru"}>bengaluru</option>
                    <option value={"Delhi"}>Delhi</option>
                </select>
                <div>
                    <p> Name is {formData.name}</p>

                    <p> Ciy is {formData.city}</p>
                </div>
            </div>
        </div>
    )
}

export default UseState2