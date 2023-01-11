import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailPage from "../components/DetailPage";
import { useEffect } from 'react'
import { DetailOrder } from "../stores/actions/order";


export default function OrderDetail() {
    const order = useSelector((state) => state.orderReducer.order)
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(DetailOrder(id))
       
    })

    return(
        <>
       
        <DetailPage order={order}  />
        
        </>
    )
}