import useFetch from '@/hooks/useFetch';
import Link from 'next/link';

export default function AddrId() {
  const { id, data } = useFetch('addr');

  const txData = (data['data'] != null) ? data['data']['tx_hashes'] : null;
  let txList = null;
  if (txData)
    txList = txData.map((tx, index) => (<li key={index}><Link href={`/tx/${tx['tx_hash']}`}>{tx['tx_hash']}</Link></li>));
  return (
    <>
      <h3>{id}</h3>
      <ul>{txList}</ul>
    </>
  );
}