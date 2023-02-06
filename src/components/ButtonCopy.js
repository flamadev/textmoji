import React from 'react';

const ButtonCopy = (props) => {
    const colorCopiedClass = 'text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2';
    const colorCopyClass = "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2";
    const text = props.copied ? 'Copiado!' : 'Copiar';
    return (
        <button onClick={props.handleCopyButton} type="button" className={props.copied ? colorCopiedClass : colorCopyClass}>{text}</button>
    );
};

export default ButtonCopy;



