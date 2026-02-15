"use client"
import React from 'react'
import { twMerge } from 'tailwind-merge'

type InputPros = {
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: string
    parentClassName?: string
    childClassName?: string

}

const Input = ({ placeholder, onChange, value, type, parentClassName, childClassName }: InputPros) => {
    return (
        <div className={twMerge("w-full flex justify-center items-center border border-gray-300 rounded-xl p-2", parentClassName)}>
            <input type={type} className={twMerge("w-full h-[38px] focus-visible:outline-none", childClassName)} placeholder={placeholder} onChange={onChange} value={value} />
        </div>
    )
}

export default Input