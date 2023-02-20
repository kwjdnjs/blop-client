import { useRouterFetch } from '@/hooks/fetch';

export default function TxId() {
  const { id, data } = useRouterFetch('tx');
  const value = (data != null) ? data['data']['vin'][0]['value'] : null;

  return (
    <>
      <h3>{id}</h3>
      {value}
    </>
  );
}