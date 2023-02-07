import axios from 'axios';

export default function TxId(props) {
  return (
    <>
      <h3>{props.id}</h3>
      {props.data['tx_index']}
    </>
  );
}

export async function getServerSideProps({ params }) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/btc/tx/${params.id}`
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