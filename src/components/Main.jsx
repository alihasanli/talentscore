import './style.css'
import Form from './Form' 
import Logo from '../img/logo.png'
import Illustration from '../img/illustration.png'

function Main() {
    return (
        <div className='container'>
            <div className="container-left">
                <svg className='background-svg' xmlns="http://www.w3.org/2000/svg" width="741" height="603" viewBox="0 0 791 653" fill="none">
                    <path d="M113.5 -334L485.238 -154.269L790.5 -69L509.5 82.5L444.144 117.737C302.949 193.862 184.655 306.327 101.5 443.5V443.5L37.9999 548.25L-25.5003 653L-269.213 448.5L-301.074 495.813L-81.9998 170.5L113.5 -334Z" fill="url(#paint0_linear_137_216)"/>
                    <defs>
                        <linearGradient id="paint0_linear_137_216" x1="337.775" y1="-332.635" x2="-448.536" y2="317.447" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00404C"/>
                            <stop offset="1" stopColor="#08D0B0"/>
                        </linearGradient>
                    </defs>
                </svg>
                <svg className='line-1' xmlns="http://www.w3.org/2000/svg" width="4" height="314" viewBox="0 0 4 314" fill="none">
                    <path d="M3.5 6.55673e-08C3.5 -0.828427 2.82843 -1.5 2 -1.5C1.17157 -1.5 0.5 -0.828427 0.5 -6.55673e-08L3.5 6.55673e-08ZM0.5 -6.55673e-08L0.499986 314L3.49999 314L3.5 6.55673e-08L0.5 -6.55673e-08Z" fill="white"/>
                </svg>
                <svg className='line-2' xmlns="http://www.w3.org/2000/svg" width="3" height="407" viewBox="0 0 3 407" fill="none">
                    <path d="M2.5 4.37115e-08C2.5 -0.552285 2.05228 -1 1.5 -1C0.947715 -1 0.5 -0.552285 0.5 -4.37115e-08L2.5 4.37115e-08ZM0.5 -4.37115e-08L0.499982 407L2.49998 407L2.5 4.37115e-08L0.5 -4.37115e-08Z" fill="white"/>
                </svg>
                <div className="content">
                    <img src={Logo} alt="Talent Score Logo" className='content-logo' />
                    <h3 className='content-header'>Suni intelekt sistemi</h3>
                    <p className='content-text'>Bu formu doldurduqdan sonra öz yaşıdlarınız arasında ən yaxşı hansı faizlikdə olduğunuzu müəyyən edə biləcəksiniz.</p>
                </div>
                <div className='illustration-div'>
                    <img className='illustration' src={Illustration} alt='Illustration' />
                </div>
            </div>
            <Form />  
        </div>
    )
}

export default Main
