import React from 'react';
import { useState } from 'react';
import Alert from './Alert';
import './Home.css'

const Home = (props) => {

    const [text, setText] = useState("")
    const [alert, setAlert] = useState(null)
    const showAlert = (message, type) => {
        setAlert({
          message: message,
          type: type
        })
      }

    const handleUp = () => {
        let newText = text.toUpperCase()
        setText(newText)
        showAlert('Success :', 'Converted to UpperCase')
        setTimeout(() => {
            setAlert(null);
        }, 3000)
    }

    const handleLo = () => {
        let newText = text.toLocaleLowerCase()
        setText(newText)
        showAlert('Success :', 'Converted to LowerCase')
        setTimeout(() => {
            setAlert(null);
        }, 1500)
    }

    const handleClear = () => {
        setText(' ')
        showAlert('Success :', 'Text has been Cleared')
        setTimeout(() => {
            setAlert(null);
        }, 1000)
    }

    const changeHandlder = (e) => {
        console.log(e.target.value)
        setText(e.target.value)
    }

    return (
        <>
            <Alert alert={alert} />
            <div className='home-bar'>
                <label htmlFor="username">Write Here</label><br></br>
                <textarea style={{ color: props.mode.color, backgroundColor: props.mode.backgroundColor }} onChange={changeHandlder} value={text} type="text" pattern="[a-z]*" id="username" className="username" />
            </div>
            <input className='upper' type='button' onClick={handleUp} value="Convert to UpperCase" />
            <input className='lower' type='button' onClick={handleLo} value="Convert to LowerCase" />
            <input className='clear' type='button' onClick={handleClear} value="Cleared Text" />
        </>
    )
}

export default Home;
