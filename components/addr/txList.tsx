import TxListItem from "./txListItem";

export default function TxList({ addr, txData }) {
    return (
        <ul>
            {txData.map((tx, index) => (
                <TxListItem key={index} addr={addr} txHash={tx['tx_hash']}/>
            ))}
        </ul>
    )
}