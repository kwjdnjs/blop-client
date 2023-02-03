import SearchBox from '@/components/searchBox';
import { useRouter } from 'next/router';

export default function searchId() {
  const router = useRouter();

  async function getIdType() {
    const res = await fetch(`http://localhost:5000/btc/type${router.query.id}`);
    const data = await res.json();
  }

  return (
    <>
      <SearchBox />
      <h1>{router.query.id}</h1>
    </>
  );
}
