import axios from 'axios';

export default function AddrId(props) {
  return (
    <>
      <h3>{props.id}</h3>
      {props.data['hash160']}
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