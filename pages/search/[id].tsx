import SearchBox from '@/components/searchBox';
import useFetch from '@/hooks/useFetch';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SearchId() {
  const router = useRouter();
  const { id } = router.query;
  const data = useFetch('type');
  

  const URL = `/${data['idType']}/${id}`
  return (
    <>
      <SearchBox />
      <h3>{id}</h3>
      {data['idType']}
      {
       data['idType'] == 'unknown' || data['idType'] == null
        ? <h2>no link</h2>
        : <Link href={URL}>상세보기</Link>
      }
    </>
  );
}