import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function useFetch(fetchType: string){
const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData () {
      if (!router.isReady) return;
      const url = `${process.env.NEXT_PUBLIC_API_URL}/btc/${fetchType}/${id}`
      const res = await axios.get(url).catch((error)=>{
        console.log(error);
      });

      if(!res) setData({error: 'server error'});
      else setData(res.data);
    }
    
    fetchData();
  }, [id, router.isReady]);

  return data;
}

export default useFetch