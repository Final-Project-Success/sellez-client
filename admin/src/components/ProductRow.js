import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCanArrowUp } from '@fortawesome/free-solid-svg-icons'


export default function ProductRow({product, i}) {
    return(
        <>
          <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                      {product.name}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {product.price}
                     
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                     <img src={product.imgUrl} style={{width: 150}} alt={product.name} />
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      20
                    </td>
                       <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                     {product.color}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    
                    onClick={(e) => {
                      console.log('nyoba delete');
                    }}
                    >
                    <FontAwesomeIcon icon={faTrashCanArrowUp} style={{marginLeft: 5}} className='cursor-pointer' size="lg" color='blue' 
                    
                    />
                    </td>
                  </tr>
        </>
    )
}