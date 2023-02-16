import axios from 'axios';
import Link from 'next/link';

export default function AddrId(props) {
  const txData = props.data['data']['tx_hashes'];
  const txList = txData.map((tx, index) => (<li key={index}><Link href={`/tx/${tx['tx_hash']}`}>{tx['tx_hash']}</Link></li>))
  return (
    <>
      <h3>{props.id}</h3>
      <ul>{txList}</ul>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/btc/addr/${params.id}`
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