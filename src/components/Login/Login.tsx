import React from "react";
import {Field, Form} from "react-final-form";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {requiredField} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {Element} from "../common/FormsControls/FormsControls";


const Input = Element('input')

type LoginFormOwnProps = {
    onSubmit: (formData: LoginFormValuesType) => void
    captchaUrl: string | null
}

const LoginForm: React.FC<LoginFormOwnProps> = ({onSubmit, captchaUrl}) => {
    return (
        <Form onSubmit={onSubmit}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field placeholder={"Email"} name={"email"} component={Input} validate={requiredField}/>
                    </div>
                    <div>
                        <Field placeholder={"Password"} name={"password"} type={"password"} component={Input} validate={requiredField}/>
                    </div>
                    <div>
                        <Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me
                    </div>

                    {captchaUrl && <img src={captchaUrl} alt=""/>}
                    {captchaUrl && <Field placeholder={"Symbols from image"}
                                          name={"captcha"}
                                          validate={requiredField}
                                          component={Input}/>}

                    <div>
                        <button>Login</button>
                    </div>
                </form>
            )}
        </Form>
    )
}


type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: string | null
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {login})(Login)