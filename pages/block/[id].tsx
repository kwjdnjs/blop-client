import { useRouterFetch } from '@/hooks/fetch';

export default function BlockId() {
  const { id, data } = useRouterFetch('block');

  return (
    <>
      <h3>{id}</h3>
      {data['height']}
    </>
  );
}