import SearchBox from '@/components/searchBox';
import { useRouterFetch } from '@/hooks/fetch';
import Link from 'next/link';

export default function SearchId() {
  const { id, data } = useRouterFetch('type');

  if (!data) return <p>Loading...</p>;

  const URL = `/${data.idType}/${id}`;

  return (
    <>
      <SearchBox />
      <h3>{id}</h3>
      {data.idType}
      {data.idType === 'unknown' || data.idType == null ? (
        <h2>no link</h2>
      ) : (
        <Link href={URL}>상세보기</Link>
      )}
    </>
  );
}
