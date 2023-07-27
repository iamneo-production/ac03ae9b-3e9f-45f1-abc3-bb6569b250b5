import React, {useState} from 'react'
import validate from"../utils/validate";
import {useNavigate} from 'react-router-dom'
const Useform = (validate) => {
  const[values,setValues]=useState({
    username:"",
    email:"",
    password:"",
    password1:"",
  });

  const[errors,setErrors]=useState({});

  const handleChange=(e)=>{
    const {name,value}=e.target;

    setValues((prevValues)=>{
        return{
            ...prevValues,
            [name]:value,
        };
    });
};

const handleSubmit=(event)=>{
    event.preventDefault();
    setErrors(validate(values));
}
const navigate = useNavigate();

  const navigateToHeader = () => {
    navigate('/Home');
  };
return {handleChange,values, handleSubmit, errors,navigateToHeader};
};

export default Useform;