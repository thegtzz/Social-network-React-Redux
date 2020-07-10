import React from "react";
import { FieldRenderProps } from "react-final-form";
import s from "./FormsControls.module.css"


type Props = FieldRenderProps<string, any>

export const Element = (Element: string | typeof React.Component | React.FC) => ({input,
                                                                                          meta,
                                                                                          ...props}: Props) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                <Element {...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}
