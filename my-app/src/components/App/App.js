import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { useState } from "react";
import UserInfoForm from "../userInfoForm/UserInfoForm";
import RenderListOfUsers from "../RenderListOfUsers/RenderListOfUsers";

const App = () => {
const [userList, setUserList] = useState([]);

const onChange = ({firstName, lastName, age}) => {
const user = {
    firstName,
    lastName,
    age,
    id: Date.now().toString()

}

    setUserList([
            user,
        ...userList
    ])

}
    return(
        <>
            <GlobalStyles/>
            <UserInfoForm onChange={onChange}/>
            <RenderListOfUsers  userList={userList}/>


        </>
    )
}

export default App;