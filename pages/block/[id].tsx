import useFetch from '@/hooks/useFetch';

export default function BlockId() {
  const { id, data } = useFetch('block');

  return (
    <>
      <h3>{id}</h3>
      {data['height']}
    </>
  );
}