import './style.css'

function ProgressBar({totalPage, page}) { 
    const progress = (page / totalPage) * 100
    
    return (
        <div className='progress-bar-div'>
            <h1 className='form-title'>Xüsusi bacarıqlar</h1> 
            <div className='progress-bar'>
                <div
                    className='progress-bar-fill' 
                    style={{
                        width: `${progress}%`, 
                    }}>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar
