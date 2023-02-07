import SearchBox from '@/components/searchBox';
import axios from 'axios';
import Link from 'next/link';

export default function SearchId(props) {
  const URL = `/${props.data['type']}/${props.id}`
  return (
    <>
      <SearchBox />
      <h3>{props.id}</h3>
      {props.data['type']}
      {
       props.data['type'] == 'unknown'
        ? <h2>no link</h2>
        : <Link href={URL}>상세보기</Link>
      }
    </>
  );
}

export async function getServerSideProps({ params }) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/btc/type/${params.id}`
  const res = await axios.get(url).catch((error)=>{
    console.log(error);
  });

  let data = null;

  if(!res) data = 'server error'
  else data = res.data;

  return {
    props: {
      id: params.id,
      data
    }
  };
}