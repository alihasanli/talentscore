import { useState } from 'react'
import './style.css'

function Question2({data, formData, setFormData}) { 
    const [isOpen, setIsOpen] = useState(false)
    const {abilityQstn} = formData

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option) => {
        if (!abilityQstn.includes(option)) {
            setFormData(prevState => ({
                ...prevState,
                abilityQstn: [...prevState.abilityQstn, option]
            }))
        }
        
        setIsOpen(false)
    }

    return (      
        <div className='second-question'>
            <h3>Hansı xüsusi bacarığınız var?</h3>
            <div className='dropdown'>
                <button className="dropdown-toggle ability-select" onClick={toggleMenu}>
                    {abilityQstn.length ? abilityQstn.join(', ') : data[0]}<i className='fa-solid fa-caret-down select-arrow'></i>
                </button>
                <div className='ability-option'>
                    {isOpen && (
                        <ul className='dropdown-menu'>
                            {data.map(
                                (option, i) =>  <li 
                                                    key={i}
                                                    className='ability-value'
                                                    onClick={() => handleOptionClick(option)}
                                                >
                                                    {option}
                                               </li>
                            )}
                        </ul>
                    )}
                </div>
            </div>   
        </div>  
    )
}

export default Question2
