import './style.css'
import Question1 from './Question1'
import Question2 from './Question2'
import Question3 from './Question3'

function Skill({data, formData, setFormData}) {
    const {yesNoQstn, abilityQstn} = formData

    return (
        <div>
            <Question1 formData={formData} setFormData={setFormData} />
            {(yesNoQstn.yes === 'on') ? <Question2 data={data} formData={formData} setFormData={setFormData} /> : ''} 
            {abilityQstn && formData.yesNoQstn.yes ? <Question3 formData={formData} setFormData={setFormData} /> : ''}
        </div>
    )
}

export default Skill
