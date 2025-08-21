import useFetch from "@/hooks/fetch";
import Link from "next/link";

export default function TxListItem ({ addr, txHash }) {
    const data = useFetch('tx', txHash, true);
    let vinValue = 0;
    let vinAddrList: string[] = [];
    let voutValue = 0;
    let voutAddrList: string[] = [];
    let isWithdrawal = false;
    let inOutValue = 0;

    function getValue(addr, vinOut): any[] {
        let value = 0;
        let addrList: string[] = [];

        for (const i in vinOut) {
            if(addr == vinOut[i]['addresses']) value = vinOut[i]['value'];
            else addrList.push(vinOut[i]['addresses']);
        }

        return [value, addrList];
    };

    if (data) {
        const vin = data['data']['vin'];
        [vinValue, vinAddrList] = getValue(addr, vin);

        const vout = data['data']['vout'];
        [voutValue, voutAddrList] = getValue(addr, vout);

        inOutValue = vinValue - voutValue
        if (inOutValue > 0) isWithdrawal = true;
        else inOutValue = -inOutValue;
    }

    return (
        <li>
            <Link href={`/tx/${txHash}`}>{txHash}</Link>
            {
                isWithdrawal
                ? <div>출금: {inOutValue}<ul>{voutAddrList.map((addr, index) => (<li key={index}>{addr}</li>))}</ul></div>
                : <div>입금: {inOutValue}<ul>{vinAddrList.map((addr, index) => (<li key={index}>{addr}</li>))}</ul></div>
            }
        </li>
    )
}