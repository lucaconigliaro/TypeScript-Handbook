/*
Gli hooks principali (useRef, useEffect, useMemo, useCallback)
con TypeScript richiedono tipizzazione specifica solo per useRef.
*/

import React, { useRef, useEffect, useMemo, useCallback, useState } from 'react';

// USEREF PER ELEMENTI DOM
const RefExample = () => {
  // Specifica il tipo di elemento HTML
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  
  const focusInput = () => {
    // Usa ?. perché può essere null
    inputRef.current?.focus();
  };
  
  return (
    <div ref={divRef}>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
};

// USEEFFECT
// Non richiede tipizzazione speciale
const EffectExample = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log("Component montato");
    
    // Cleanup function
    return () => {
      console.log("Component smontato");
    };
  }, []);
  
  useEffect(() => {
    console.log("Count cambiato:", count);
  }, [count]);
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};

// USEMEMO
const MemoExample = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const [filter, setFilter] = useState(0);
  
  // Calcolo pesante memoizzato
  const filteredItems = useMemo(() => {
    console.log("Filtrando...");
    return items.filter(item => item > filter);
  }, [items, filter]);
  
  return (
    <div>
      <input 
        type="number" 
        value={filter} 
        onChange={(e) => setFilter(Number(e.target.value))}
      />
      <ul>
        {filteredItems.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
};

// USECALLBACK
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const MemoButton = React.memo<ButtonProps>(({ onClick, children }) => {
  console.log("Button renderizzato");
  return <button onClick={onClick}>{children}</button>;
});

const CallbackExample = () => {
  const [count, setCount] = useState(0);
  
  // Funzione memoizzata
  const handleClick = useCallback(() => {
    console.log("Click!");
  }, []);
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <MemoButton onClick={handleClick}>Memoizzato</MemoButton>
    </div>
  );
};

/*
NOTE IMPORTANTI

USEREF:
- useRef<HTMLInputElement>(null) per input
- useRef<HTMLDivElement>(null) per div
- Usa ?. (optional chaining) per accedere a .current
- null perché il ref è vuoto all'inizio

USEEFFECT:
- Non richiede tipizzazione speciale
- [] = esegui solo al mount
- [deps] = esegui quando deps cambiano
- return function = cleanup

USEMEMO:
- Memoizza calcoli pesanti
- Si ricalcola solo se dependencies cambiano
- Migliora performance

USECALLBACK:
- Memoizza funzioni
- Utile con React.memo per evitare re-render
- Dependencies come useEffect
*/

export { RefExample, EffectExample, MemoExample, CallbackExample };
