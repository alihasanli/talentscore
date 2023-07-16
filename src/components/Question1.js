import './style.css'

function Question1({formData, setFormData}) {
    const {yesNoQstn} = formData
    
    const handleRadioChange = (event) => {
        const {value, id} = event.target

        setFormData(prevState => ({
            ...prevState,
            yesNoQstn: {
                [id]: value
            }
        }))

        if (id === 'no') {
            setFormData({
                page: 3,
                yesNoQstn: {
                    [id]: value
                },
            })
        }
    };

    return (        
        <div className='first-question'>
            <h3>Xüsusi bacarığınız var?*</h3>
            <div className='first-answer'>
                <label htmlFor='yes' className='answer'>Bəli
                    <input
                        id='yes'   
                        name='first'
                        type='radio'               
                        className='answer-radio'
                        onChange={handleRadioChange}
                        checked={yesNoQstn.yes === 'on'}
                    />
                </label> 
                <label htmlFor="no" className='answer'>Xeyr
                    <input  
                        id='no' 
                        name='first' 
                        type='radio' 
                        className='answer-radio'
                        onChange={handleRadioChange} 
                        checked={yesNoQstn.no === 'on'}
                    />
                </label>
            </div>
        </div> 
    )
}

export default Question1