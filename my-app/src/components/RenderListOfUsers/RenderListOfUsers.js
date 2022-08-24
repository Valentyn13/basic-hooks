import ShowUserInfo from "../ShowUserInfo/ShowUserInfo";

const RenderListOfUsers = ({userList}) => {
    return(
        <>
            {userList.map((userList) => (<ShowUserInfo key={userList.id} userList={userList}/>))}
        </>
)

}

export default RenderListOfUsers;
