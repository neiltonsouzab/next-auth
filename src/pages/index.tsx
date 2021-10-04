import { FormEvent, useState } from 'react';

import { useAuth } from '../contexts/AuthContext';
import styles from '../styles/home.module.css';
import { withSSRGuest } from '../utils/withSSRGuest';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    await signIn(data);
  }
 
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input type="email" onChange={event => setEmail(event.target.value)} />
      <input type="password" onChange={event => setPassword(event.target.value)} />

      <button type="submit">Entrar</button>
    </form>
  )
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  }
});