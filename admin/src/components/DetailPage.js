import { DetailCard } from "./DetailCard";

export default function DetailPage({order}) {
    return(
        <>
        {order.OrderProducts?.map((Op)=> {
        return <DetailCard Op={Op}/>
        })}
     

        </>
    )
}