import './style.css'

function Question3({formData, setFormData}) {
    const {degreeQstn, abilityQstn, achievementQstn} = formData

    const handleAbilityChange = (event) => {
        const {name} = event.target
        const extraid = event.target.getAttribute('extraid')

        setFormData(prevState => ({
            ...prevState,
            degreeQstn: {
                ...prevState.degreeQstn,
                [name]: extraid
            }
        }))
    };

    const handleAbilityDelete = (i, element) => {
        abilityQstn.splice(i, 1)
        delete degreeQstn[element]
        delete achievementQstn[element]

        setFormData(prevState => ({
            ...prevState,
            abilityQstn: abilityQstn,
            degreeQstn: degreeQstn,
        }))
    }

    return (        
        <div className='third-question'>
            {abilityQstn.length ? <h3>Qeyd etdiyiniz fəaliyyətlə hansı səviyyədə məşğulsunuz?</h3> : ''}
            <div className='third-answer'>
                {abilityQstn.map((elem, i) => (
                    <div className='third-answer-collection' key={i}>
                        <button
                            className='answer x-button'
                            onClick={() => handleAbilityDelete(i, elem)}
                        >
                            {elem}
                            <i className='fa-regular fa-circle-xmark xmark'></i>
                        </button>
                        <label htmlFor={elem + '1'} className='answer third-label'> Həvəskar
                            <input 
                                className='answer-radio' 
                                type='radio'
                                extraid='amateur'
                                name={elem} 
                                id={elem + '1'}
                                onChange={handleAbilityChange}
                                checked={degreeQstn[elem] === 'amateur'}
                            />
                        </label>
                        <label htmlFor={elem + '2'} className='answer third-label'> Peşəkar
                            <input 
                                className='answer-radio'
                                type='radio'
                                extraid='prof'
                                name={elem} 
                                id={elem + '2'}
                                onChange={handleAbilityChange}
                                checked={degreeQstn[elem] === 'prof'}
                            />
                        </label>
                    </div>
                ))}
            </div> 
        </div>
    )
}

export default Question3
