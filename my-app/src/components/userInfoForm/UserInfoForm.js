import { useState } from "react";

const UserInfoForm = (props) => {

    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        age: '', 
    });

    const onChange = (e) => {
        const {name, value} = e.target
        setUserInfo({
            ...userInfo,
            [name] : name === 'age' ? +value :value,
        })
    
    }

    const submitUserForm = (e) => {
        e.preventDefault()
        props.onChange(userInfo);
        setUserInfo({
            firstName: '',
            lastName: '',
            age: '', 
        })

    

    }
    return (
        <div>
            <form onSubmit={submitUserForm}>
                <input name="firstName" placeholder="Enter first name" onChange={onChange} value={userInfo.firstName}/>
                <input name="lastName" placeholder="Enter last name" onChange={onChange} value={userInfo.lastName} />
                <input name="age" placeholder="Enter your age" onChange={onChange} value={userInfo.age}  />
                <button>Send</button>
            </form>
        </div>
    )
}
export default UserInfoForm;