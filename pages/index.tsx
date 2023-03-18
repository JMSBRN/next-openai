import React, { useCallback, useState } from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Index.module.css';

const Index: NextPage = () => {
  const [value, setValue] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('');
  const [completion, setCompletion] = useState<string>('');

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    }, []);

  const handleKeyDown = useCallback(
    async (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        setPrompt(value);
        setCompletion('Loading...');
        const response = await fetch('/api/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: value }),
        });
        const data = await response.json();
        setValue('');
        setCompletion(data.result.choices[0].text);
      }
    }, [value]);

  return (
    <div className={styles.main}>
      <div>Please type your prompt and hit enter</div>
      <input value={value} onChange={handleInput} onKeyDown={handleKeyDown} />
      <div>Prompt: {prompt}</div>
      <div>Completion: {completion.split('\n').map((item, idx )=> <span key={idx}>{item}<br/></span>)}</div>
    </div>
  );
};

export default Index;