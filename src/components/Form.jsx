import './style.css'
import {useState} from 'react'
import Skill from './Skill'
import Sport from './Sport'
import Achievement from './Achievement'
import ProgressBar from './ProgressBar'

const data = ['Rəsm', 'Musiqi', 'Rəqs', 'Yazıçılıq']

function Form() {
    const [formData, setFormData] = useState({
        page: 1,
        yesNoQstn: {
            yes: '',
            no: '',
        },
        abilityQstn: [],
        degreeQstn: {},
        achievementQstn: {},
    })

    const {page, abilityQstn, achievementQstn, degreeQstn, yesNoQstn} = formData

    const formTitles = ["Skill", 'Achievement']
    const totalPage = formTitles.length

    const nextPage = () => {
        // setPage((currentPage) => currentPage + 1)

        if (page === 1 && abilityQstn.length && abilityQstn.length === Object.keys(degreeQstn).length) {
            setFormData(prevState => ({
                ...prevState,
                page: page + 1
            }))
        } else if (page === 2 && Object.keys(achievementQstn).length === abilityQstn.length ) {
            setFormData(prevState => ({
                ...prevState,
                page: page + 1
            }))
        } else if (yesNoQstn.no === 'on') {
            setFormData(prevState => ({
                ...prevState,
                page: 3
            }))
        }
    }

    const previousPage = () => {
        setFormData(prevState => ({
            ...prevState,
            page: page - 1
        }))

        if (yesNoQstn.no === 'on' && page === 3) {
            setFormData({
                page: 1,
                yesNoQstn: {
                    yes: '',
                    no: 'on',
                },
                abilityQstn: [],
                degreeQstn: {},
                achievementQstn: {},
            })
        }
    }
    
    const pageDisplay = () => {
        if (page === 1) {
            return <Skill data={data} formData={formData} setFormData={setFormData} />
        } else if (page === 2) {
            return <Achievement data={data} formData={formData} setFormData={setFormData} />
        } else if (page === 3) {
            return <Sport />
        } 
    } 

    return (
        <div className='container-right'>
            <div className='container-right-content'>
                <div className='menu-div'>
                    <ul className='menu'>
                        <li>Təhsil</li>
                        <li>Dil Bilikləri</li>
                        <li id='selected-li'><span>3.</span>Bacarıqlar</li>
                        <li>İdman</li>
                        <li>İş təcrübəsi</li>
                        <li>Program</li>
                    </ul>
                </div>
                <div className='form-div'>
                    <div className='form'>
                        <div className='form-upper'>
                            {page <= 2 ? <ProgressBar page={page} totalPage={totalPage} /> : ''}
                            <div className='form-body'>
                                {pageDisplay()}
                            </div>
                        </div>
                        <div className='form-lower'>
                            <button className='previous-btn' onClick={previousPage} disabled={page === 1}>
                                <i className="fa-solid fa-arrow-left"></i> Geri
                            </button>
                            <button onClick={() => {nextPage(); console.log(formData)}} className='next-btn'> Növbəti 
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Form