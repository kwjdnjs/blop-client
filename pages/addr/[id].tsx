import TxList from '@/components/addr/txList';
import { useRouterFetch } from '@/hooks/fetch';

export default function AddrId() {
  const { id, data } = useRouterFetch('addr');

  const txData = data != null ? data['data']['tx_hashes'] : null;

  return (
    <>
      <h3>{id}</h3>
      {txData != null ? <TxList addr={id} txData={txData}/> : null}
      
    </>
  );
}