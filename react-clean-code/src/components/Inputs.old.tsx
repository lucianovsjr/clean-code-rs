import { ReactNode } from 'react';
/**
 * As vezes nos prendemos a somente o uso de props.
 * O component abaixo está usando props como configurações
 */

interface InputProps {
    label?: string;
    leftIcon?: ReactNode;
    icon?: ReactNode;
    errorMessage?: string;
}

export function Input({ label, icon = null, leftIcon = null, errorMessage }: InputProps) {
    return (
        <div>
            {label ? <label>{label}</label> : null}
            {leftIcon}
            <input type="text" />
            {icon}

            {errorMessage ? <p>{errorMessage}</p> : null}
        </div>
    )
}