import useFetch from '@/hooks/useFetch';

export default function TxId() {
  const { id, data } = useFetch('tx');
  const value = (data['data'] != null) ? data['data']['vin'][0]['value'] : null;

  return (
    <>
      <h3>{id}</h3>
      {value}
    </>
  );
}