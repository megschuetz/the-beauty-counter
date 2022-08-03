import React from 'react'
import "./Dropdown.css"

function Dropdown() {

  const [type, setType] = useState('')
  const [tag, setTag] = useState('')

  return (
    <div>
       <select name='type'>
        <option value='blush'>Blush</option>
        <option value='bronzer'>Bronzer</option>
        <option value='eyebrow'>Eyebrow</option>
        <option value='eyeliner'>Eyeliner</option>
        <option value='eyeshadow'>Eyeshadow</option>
        <option value='foundation'>Foundation</option>
        <option value='lip_liner'>Lip liner</option>
        <option value='lipstick'>Lipstick</option>
        <option value='mascara'>Mascara</option>
      </select>
      <button onClick={}>Filter</button>
    </div>
    
  )
}

export default Dropdown;