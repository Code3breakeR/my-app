import React, { useState } from 'react';
import './UserConfiguration.css'


const UserConfiguration = (props) => {

  const [userConfig, setUserConfig] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    thigh_length: "",
    shank_length: " "
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserConfig({
      ...userConfig,
      [name]: value,
    });
  }

  const clickHandler = (event) => {
    event.preventDefault();
    console.log(userConfig.name)
    setUserConfig({
      name: "",
      age: "",
      height: "",
      weight: "",
      thigh_length: "",
      shank_length: " "
    })
  }


  return (
    <div className='configure_container' style={{ color: props.mode.color }}>
      <h1>User Detail</h1>
      <div className="field_container">
        <text >Name: </text>
        <input
          type="text"
          maxLength={24}
          required={true}
          name="name"
          value={userConfig.name}
          onChange={changeHandler}
          style={{ color: props.mode.color, backgroundColor: props.mode.backgroundColor }}
        />
      </div><br></br>

      <div className="field_container">
        <text >Age: </text>
        <input
          type="number"
          maxLength={24}
          required={true}
          name="age"
          value={userConfig.age}
          onChange={changeHandler}
          style={{ color: props.mode.color, backgroundColor: props.mode.backgroundColor }}
        />
      </div><br></br>

      <div className="field_container">
        <text >Height: </text>
        <input
          type="number"
          maxLength={24}
          required={true}
          name="height"
          value={userConfig.height}
          onChange={changeHandler}
          style={{ color: props.mode.color, backgroundColor: props.mode.backgroundColor }}
        />
      </div><br></br>

      <div className="field_container">
        <text >Weight: </text>
        <input
          type="number"
          maxLength={24}
          required={true}
          name="weight"
          value={userConfig.weight}
          onChange={changeHandler}
          style={{ color: props.mode.color, backgroundColor: props.mode.backgroundColor }}
        />
      </div><br></br>

      <div className="field_container">
        <text >Thigh Length: </text>
        <input
          type="number"
          maxLength={24}
          required={true}
          name="thigh_length"
          value={userConfig.thigh_length}
          onChange={changeHandler}
          style={{ color: props.mode.color, backgroundColor: props.mode.backgroundColor }}
        />
      </div><br></br>

      <div className="field_container">
        <text >Shank Length:</text>
        <input
          type="number"
          maxLength={24}
          required={true}
          name="shank_length"
          value={userConfig.shank_length}
          onChange={changeHandler}
          style={{ color: props.mode.color, backgroundColor: props.mode.backgroundColor }}
        />
      </div><br></br>

      <button className="submit_btn" onClick={clickHandler}>Submit</button>
    </div>
  )
}

export default UserConfiguration;