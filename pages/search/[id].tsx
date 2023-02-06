import SearchBox from '@/components/searchBox';
import axios from 'axios';

export default function SearchId(props) {
  return (
    <>
      <SearchBox />
      <h3>{props.id}</h3>
      {props.data['type']}
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