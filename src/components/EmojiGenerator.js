import { React, useState } from 'react';
import iaService from '../service/ia';
import ButtonGenerate from './ButtonGenerate';
import Loader from './Loader';
import ButtonCopy from './ButtonCopy';


const EmojiGenerator = () => {
    const [text, setText] = useState('');
    const [emojiText, setEmojiText] = useState('');
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleButtonText = () => {

        const trimedText = text.trim();
        if (trimedText) {
            setLoading(true);
            iaService.addEmojis(text)
                .then(data => {
                    const { text } = data.generations[0];
                    const textEmoji = text.split('--')[0];
                    setEmojiText(textEmoji);
                    setLoading(false);
                }).catch(error => {
                    console.log(error);
                    setEmojiText('Ha ocurrido un error');
                });
        }

    };

    const handleCopyButton = () => {
        navigator.clipboard.writeText(emojiText);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);

    };
    return (
        <div className='flex justify-center gap-4'>
            <div className='flex flex-col gap-2 items-center'>
                <h2 className='text-4xl font-bold '>Ingrese su texto</h2>
                <textarea rows="2" cols="50" className='mt-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={(e) => setText(e.target.value)} value={text} placeholder='El día está soleado!' />
                {loading ? <Loader /> : <ButtonGenerate handleButtonText={handleButtonText} />}

            </div>
            <div className='flex flex-col gap-2 items-center'>
                <h2 className='text-4xl font-bold'>Texto con emojis</h2>
                <textarea readOnly rows="2" cols="50" className='mt-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={(e) => setEmojiText(e.target.value)} value={emojiText} placeholder="El día 🌞 está soleado!"
                />
                <ButtonCopy handleCopyButton={handleCopyButton} copied={copied} />

            </div>

        </div >
    );
};

export default EmojiGenerator;