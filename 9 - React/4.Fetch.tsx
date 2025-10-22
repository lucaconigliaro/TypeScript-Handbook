/*
Quando fai fetch di dati da API, TypeScript ti aiuta a definire
la struttura dei dati che ti aspetti, prevenendo errori runtime.
*/

import React, { useState, useEffect } from 'react';

// FETCH SEMPLICE
interface User {
  id: number;
  name: string;
  email: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(( User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  
  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name} - {user.email}</li>
      ))}
    </ul>
  );
};

// FETCH CON ASYNC/AWAIT
interface Post {
  id: number;
  title: string;
  body: string;
}

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const  Post[] = await response.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []);
  
  if (loading) return <p>Caricamento...</p>;
  
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

// CUSTOM HOOK PER FETCH (riutilizzabile)
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(( T) => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);
  
  return { data, loading, error };
}

// Uso del custom hook
interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductList = () => {
  const { data, loading, error } = useFetch<Product[]>('/api/products');
  
  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;
  if (!data) return <p>Nessun dato</p>;
  
  return (
    <div>
      {data.map(product => (
        <div key={product.id}>
          {product.name} - €{product.price}
        </div>
      ))}
    </div>
  );
};

/*
NOTE IMPORTANTI

FETCH:
- Definisci sempre un'interfaccia per i dati che ti aspetti
- useState<Type[]>([]) per array di dati
- useState<Type | null>(null) se i dati possono essere nulli
- useState<string | null>(null) per gli errori

STATI COMUNI:
-  i dati fetchati (Type[] o Type | null)
- loading: boolean per lo stato di caricamento
- error: string | null per gestire errori

CUSTOM HOOK:
- useFetch<T> con generics per riutilizzare la logica
- Ritorna { data, loading, error }
- Puoi usarlo per qualsiasi tipo di dato

BEST PRACTICES:
- Gestisci sempre loading e error
- Usa try/catch con async/await
- Tipizza sempre la risposta del fetch
- Controlla if (!data) prima di usare i dati
*/

export { UserList, PostList, ProductList };
