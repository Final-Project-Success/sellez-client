import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCanArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useDispatch} from 'react-redux'
import { deleteProduct } from "../stores/actions/product";
import Swal from 'sweetalert2'

export default function ProductRow({product, i}) {
  const dispatch = useDispatch()

  const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

  const onDelete = (id) => {
    console.log('masuk ondelete');
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(id));
        Swal.fire("Deleted!", "Product has been deleted.", "success");
      }
    });
  };
    return(
        <>
          <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                      {product.name}
                    </th>
                    <td className="border-t-0 px-6 align-middle font-bold border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {rupiah(product.price)}
                     
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                     <img src={product.imgUrl} style={{width: 200}} alt={product.name} />
                    </td>
                    <td className="border-t-0  px-6 font-bold align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {product.stock}
                    </td>
                       
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    
                    onClick={() => {
                      onDelete(product.id)
                    }}
                    >
                    <FontAwesomeIcon icon={faTrashCanArrowUp} style={{marginLeft: 5}} className='cursor-pointer' size="2xl" color='blue' 
                    
                    />
                    </td>
                  </tr>
        </>
    )
}