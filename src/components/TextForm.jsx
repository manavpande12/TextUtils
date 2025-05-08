import React, { useState } from 'react';
import CustomBtn from './CustomBtn';
import { useAlert } from '../context/AlertContext';

export default function TextForm() {
    const [text, setText] = useState("");
    const { showAlert } = useAlert();

    const onChange = (event) => {
        setText(event.target.value);
    }

    const uppercase = () => {
        setText(text.toUpperCase());
        showAlert("Converted to Uppercase.");
    }

    const lowercase = () => {
        setText(text.toLowerCase());
        showAlert("Converted to Lowercase.");
    }

    const capitalize = () => {
        const capitalized = text
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
        setText(capitalized);
        showAlert("Converted to Capitalized.");
    };

    const reverse = () => {
        setText(text.split('').reverse().join(''));
        showAlert("Converted to Reverse.");
    };

    const alternateCase = () => {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            result += i % 2 === 0 ? text[i].toLowerCase() : text[i].toUpperCase();
        }
        setText(result);
        showAlert("Converted to AlternateCase.");
    };

    const sentenceCase = () => {
        const newText = text
            .toLowerCase()
            .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
        setText(newText);
        showAlert("Converted to SentenceCase.");
    };

    const removeExtraSpace = () => {
        const newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        showAlert("Extra Space is removed.");
    }

    const clear = () => {
        setText('');
        showAlert("Text Box is cleared.");
    }

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            showAlert('Text is copied to clipboard!');
        } catch (err) {
            alert('Failed to copy text');
        }
    };

    return (
        <div className='p-10 bg-white dark:bg-[#070709]'>
            <h2 className='text-4xl font-bold mb-2 text-center text-black dark:text-white'>✨ Enter The Text Below To Analyze</h2>
            <textarea
                value={text}
                onChange={onChange}
                rows='12'
                placeholder='Type Something...'
                className=' rounded-2xl w-full p-3 my-2 text-black dark:text-white border border-gray-950 dark:border-gray-800 bg-white dark:bg-[#0f0f11] focus:outline-none focus:ring-3 focus:ring-blue-400 dark:focus:ring-blue-900  ' />
            <div className='w-full flex gap-1.5 flex-row flex-wrap'>
                <CustomBtn btnText='UPPERCASE' btnColor='bg-red-500 dark:bg-red-800' onClick={uppercase} />
                <CustomBtn btnText='LOWERCASE' btnColor='bg-blue-500 dark:bg-blue-800' onClick={lowercase} />
                <CustomBtn btnText='CAPITALIZE' btnColor='bg-yellow-500 dark:bg-yellow-800' onClick={capitalize} />
                <CustomBtn btnText='REVERSE' btnColor='bg-violet-500 dark:bg-violet-800' onClick={reverse} />
                <CustomBtn btnText='ALTERNATE CASE' btnColor='bg-cyan-500 dark:bg-cyan-800' onClick={alternateCase} />
                <CustomBtn btnText='SENTENCE CASE' btnColor='bg-orange-500 dark:bg-orange-800' onClick={sentenceCase} />
                <CustomBtn btnText='REMOVE EXTRA SPACE' btnColor='bg-red-500 dark:bg-red-800' onClick={removeExtraSpace} />
                <CustomBtn btnText='CLEAR' btnColor='bg-gray-500 dark:bg-gray-800' onClick={clear} />
                <CustomBtn btnText='COPY' btnColor='bg-green-500 dark:bg-green-800' onClick={copy} />
            </div>
            <div className='rounded-[0.5rem] w-full p-3 bg-gray-100  mt-3 dark:bg-[#0f0f11] text-black dark:text-white'>
                <h3 className='font-bold text-lg'>Your Text Summary</h3>
                <div className='border border-gray-400'></div>
                <p className=' text-xs font-semibold'>
                    Words = {text == '' ? 0 : text.split(" ").length} & Character = {text.length} & Minute Read = {0.008 * text.split(" ").length}
                </p>
            </div>


        </div>
    );
}

