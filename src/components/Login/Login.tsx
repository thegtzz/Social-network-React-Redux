import React from "react";
import {Field, Form} from "react-final-form";
import {AppStateType} from "../../redux/redux-store";
import {useDispatch, useSelector} from "react-redux";
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

type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

export const Login: React.FC = (props) => {
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)

    const dispatch = useDispatch()

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if(isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}
