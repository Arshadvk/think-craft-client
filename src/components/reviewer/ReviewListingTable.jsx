import React from 'react'
import emptty from '../../assets/image/emptyyy.gif'
import { useNavigate } from 'react-router-dom';

function ReviewListingTable({reviews , user }) {
  const navigate = useNavigate()
  const handleClick = (id) =>{
    navigate(`/${user}/review-details/${id}`)
  }
    console.log(reviews);
  return (
    <>{ reviews.length !== 0 ? 
        <div className="relative overflow-x-auto shadow-md rounded-2xl">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
                no
              </th>
              <th scope="col" class="px-6 py-3">
                 student name
              </th>
              <th scope="col" class="px-6 py-3">
                {user === 'reviewer' ? 'advisor name' : 'reviewer name'}
              </th>
              <th scope="col" >
                Domain
              </th>

              <th scope="col" >
                Week
              </th>
              
              <th scope="col" class="px-6 py-3">
                status
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((obj, index) => {
              return (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">{index + 1}</td>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {obj?.student?.name}
                  </th>
                  <td >{user === 'reviewer' ?  obj?.advisor?.name : obj?.reviewer?.name  }</td>
                  <td >{obj?.student?.domain?.name}</td>
                  <td >{obj?.student?.week}</td>

                  <td>

                  </td>
                  <td>
                    <a
                      href="#"
                      class="font-medium text-orange-300 dark:text-orange-400 hover:underline"
                      onClick={()=>handleClick(obj?.student?._id)}
                      >review details
                      
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
        : <div className='w-full justify-center items-center'>
        <h1 className='text-center'>no reviews found</h1>
        <img src={emptty} alt="Animated GIF"  className='justify-center ml-20 w-8/12'/>
      </div>
       }
  </> 
  )
}

export default ReviewListingTable
