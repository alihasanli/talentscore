import './style.css'

function Achievement({formData, setFormData}) {
    const {achievementQstn, abilityQstn} = formData

    const handleInputChange = (event) => {
        const {value, name} = event.target

        setFormData(prevState => ({
            ...prevState,
            achievementQstn: {
                ...prevState.achievementQstn,
                [name]: value
            }
        }))
    }

    return (
        <div className="achievement">
            {abilityQstn.map((elem, i) => (
                <div className='achievement-collection' key={i}>
                    <h3>{elem} bacarığınıza görə əldə etdiyiniz nailiyyəti qeyd edin.*</h3>
                    <div className='achievement-question'>
                        <input 
                            type="text" 
                            className='achievement-input'
                            name={elem} 
                            onChange={handleInputChange} 
                            value={achievementQstn[elem] !== 'no' ? achievementQstn[elem] : ''}  
                        />
                        <label htmlFor={elem} className='answer third-label'>Yoxdur
                            <input 
                                type="radio" 
                                className='answer-radio' 
                                value='no'
                                name={elem} 
                                onChange={handleInputChange} 
                                checked={achievementQstn[elem] === 'no'} 
                                id={elem} 
                            />
                        </label> 
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Achievement