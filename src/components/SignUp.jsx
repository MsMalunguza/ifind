import React,{useState} from 'react';
const SignUp = () => {
    const [formData, setFormaData] = useState ({
        FirstName: '',
        LastName: '',
        Email: '',
        PassWord: '',
        confirmPassword: '',
        isAgent: false
    });
    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormaData({
            ...formData,
            [name]: type === 'checkbox'? checked : value
        });
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Form submitted:',formData);
    };
    

        

        
    
};
export default SignUp;