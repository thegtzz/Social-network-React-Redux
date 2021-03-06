import React from "react";
import {Field, Form} from "react-final-form";
import {Element} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


const Input = Element('input')

const LoginForm = ({onSubmit, captchaUrl}) => {
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

const Login = (props) => {
    const onSubmit = (formData) => {
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

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {login})(Login)