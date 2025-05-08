import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { useAlert } from '../context/AlertContext';

export default function Alert() {
    const { msg } = useAlert();
    return (
        msg && <div className='w-full bg-green-100 dark:bg-green-500 dark:text-white py-2 px-5 flex flex-row gap-3.5 items-center transition-all duration-300 absolute'>
            <FontAwesomeIcon icon={faCircleCheck} className='text-green-500 dark:text-green-50  text-2xl ' />
            <strong>{msg}</strong>
        </div>
    )
}
