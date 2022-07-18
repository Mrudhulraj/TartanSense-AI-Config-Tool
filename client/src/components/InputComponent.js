import { useState } from "react"

const InputComponent = ({display, inputValue}) => {

    const [value, setValue] = useState(inputValue)

    return (
        <div>
            <div className="actuation">
                  <label>{display}</label>
                  <input type="float" className="input" name='bb left' value = {value} onChange = {(e) => setValue(e.target.value)} />
                </div>
                <br />
        </div>
    )
}

export default InputComponent