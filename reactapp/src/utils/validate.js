// import {useState} from "react"


// const Validate=(values)=>{
//     let errors={};
//     const [submit,isSubmit]=useState();
//     if(!values.username.trim()){
//         errors.username="Username required";
//         isSubmit(false);
//     }
//     if(!values.email.trim()){
//         errors.email="Email required";
//     }
//     else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)){
//         errors.email="Email address is invalid";
//     }
//     if(!values.password.trim()){
//         errors.password="Password is required";
//     }
//     else if(!values.password.length>=8){
//         errors.password="Password should be atleast 8 characters";
//     }
//     else if(!/^([a-zA-Z0-9@*#]{8,15})$/.test(values.password)){
//         errors.password="Password must contain atleast one uppercase letter and alphanumeric values";
//     }
//     if(!values.password1.trim()){
//         errors.password1="Password is required";
//     }
//     else if(values.password1!==values.password){
//         errors.password1="Password is not matched";
//     }
//     return errors;
// }
// export default Validate;