import './LoginLogout.scss';


function LoginLogout (props)
{
    return (<>
        <h2 className='form__heading'>Sign In / Sign Up</h2>
        <i className="icon-cross" onClick={props.closeModal}></i>
    </>);
}

export default LoginLogout;