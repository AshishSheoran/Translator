import React, {userState, useState } from 'react';
import './index.css';
import Field from './components/field';
import Languages from './components/languages';
import Translate from './components/translate';

function App() {
  const [language, setLanguage] = useState('ru');
  const [text, setText] = useState('');
  return (
    <div>
      <Field  label="Enter English" onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language}/>
    </div>
  );
}

export default App;
