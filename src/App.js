
import './index.css';
import './App.css';
import EmojiGenerator from './components/EmojiGenerator';


function App() {

  return (
    <div className=" App bg-slate-400 min-h-screen">
      <h1 className='text-5xl font-extrabold dark:text-white text-center pt-4 pb-10'>Textmoji</h1>
      <EmojiGenerator />
    </div>
  );
}

export default App;
