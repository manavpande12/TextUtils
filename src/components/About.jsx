import React from 'react';

export default function About() {
    return (
        <div className='bg-white dark:bg-[#070709] flex flex-col p-10 '>
            <div className=" max-w-3xl mx-auto p-6 rounded-md text-black dark:text-white bg-gray-100 dark:bg-[#0f0f11] ">
                <h1 className="text-3xl font-bold mb-4 text-center">✨ About Text Utils</h1>
                <p className="text-lg mb-3">
                    <strong>Text Utils</strong> is a fast, responsive web app designed to transform your text with ease.
                    From changing letter cases to cleaning up formatting, it's your quick solution for everyday text editing.
                </p>
                <p className="text-lg mb-4">
                    Ideal for students, developers, writers, or anyone who works with text regularly.
                </p>

                <h2 className="text-2xl font-semibold mb-2">⚙️ Key Features</h2>
                <ul className="list-disc pl-6 space-y-1 text-lg mb-4">
                    <li>Case converters, alternate & sentence casing</li>
                    <li>Remove extra spaces, reverse text</li>
                    <li>Word & character count, read time</li>
                    <li>Dark mode for comfortable viewing</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-2">🛠️ Tech Stack</h2>
                <ul className="list-disc pl-6 space-y-1 text-lg mb-4">
                    <li><strong>React</strong> + <strong>Vite</strong> for blazing-fast UI</li>
                    <li><strong>Tailwind CSS</strong> for sleek, utility-first design</li>
                    <li>Fully client-side — fast & private</li>
                </ul>

                <p className="text-lg">
                    Built for simplicity and speed — thank you for using <strong>Text Utils</strong>!
                </p>
            </div>
        </div>
    );
}
