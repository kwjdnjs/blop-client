import useFetch from "@/hooks/fetch";
import Link from "next/link";

export default function TxListItem ({ addr, txHash }) {
    const data = useFetch('tx', txHash, true);
    let vinValue = 0;
    let voutValue = 0;

    if (data) {
        const vin = data['data']['vin'];
        for (const i in vin)
            if (addr == vin[i]['addresses']) vinValue = vin[i]['value'];

        const vout = data['data']['vout'];
        for (const i in vout)
            if (addr == vout[i]['addresses']) voutValue = vout[i]['value'];
    }

    return (
        <li>
            <Link href={`/tx/${txHash}`}>{txHash}</Link>
            <div>vin: {vinValue}</div>
            <div>vout: {voutValue}</div>
        </li>
    )
}