import React, { useEffect, useState } from "react";
import adminAxios from "../../../axios/adminAxios";
import Swal from "sweetalert2";
import { useErrorHandler } from "../../../hooks/ErrorHandler";

function UserListTable({type}) {
  console.log(localStorage.getItem("persist:Admin"));
  const {adminAutheticationHandler } = useErrorHandler()
  const user = type
  console.log(user+1);
  const [userData, setUserDate] = useState([]);
  console.log(userData);
  useEffect(() => {
    adminAxios
      .get(`/all-${user}`)
      .then((response) => {
        console.log(response.data);
        setUserDate(response.data);
      })
      .catch((error) => {
        adminAutheticationHandler(error)
        console.log(error);
      });
  }, [user]);

  const blockUser = (id, action) => {
    Swal.fire({
      icon: "question",
      title: "Are you sure?",
      text: `Do you want to ${action} this user?`,
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, proceed!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        adminAxios
          .patch(`/block-unblock-${user}`, { id, action })
          .then((response) => {
            const actionText = action === "unblock" ? "unblocked" : "blocked";
            Swal.fire({
              icon: "success",
              title: "Success",
              text: `User ${actionText} successfully.`,
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,
            });
            const userDataa = userData.map((obj) => {
              if (obj._id === id) {
                obj.isBlocked = obj.isBlocked === true ? false : true;
              }
              return obj;
            });
            setUserDate(userDataa);
          })
          .catch((error) => {
            console.error("Error blocking/unblocking user:", error);
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Failed to block/unblock user.",
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,
            });
            adminAutheticationHandler(error)
          });
      }
    });
  };

  return (
  <>
      <div class="relative overflow-x-auto shadow-md rounded-lg pt-2">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
                no
              </th>
              <th scope="col" class="px-6 py-3">
                name
              </th>
              <th scope="col" class="px-6 py-3">
                email
              </th>
              <th>
               verifyied
              </th>
              <th scope="col" class={user!== 'advisor' ?  "px-6 py-3 " : "hidden"}>
                Domain
              </th>

              <th scope="col" class={user=== 'student'?  "px-6 py-3 " : "hidden"}>
                Week
              </th>
              
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((obj, index) => {
              return (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">{index + 1}</td>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {obj.name}
                  </th>
                  <td class="px-6 py-4">{obj.email}</td>
                  <td class={obj?.isProfileVerified === true ? "px-6 py-4 text-green-600 font-semibold" : "px-6 py-4 font-semibold text-red-600" }>{obj?.isProfileVerified === true ? "verified" : "not verified"}</td>
                  <td class={user === 'student' ? "px-6 py-4" : 'hidden'}>{obj?.domain?.name}</td>
                  <td class={user=== 'reviewer'? "px-6 py-4" : "hidden"}> 
                  {user=== 'reviewer' && obj?.domain?.map((domain)=>{
                    return(
                      domain?.name +" "
                    )
                  }) }
                      </td>
                  <td class={user=== 'student'?  "px-6 py-4" : 'hidden'}>{obj?.week}</td>

                  <td class={obj?.isProfileVerified === true ? "flex items-center px-6 py-4 space-x-3" : "hidden"}>
                   
                    <a
                      href="#"
                      class="font-medium text-red-600 dark:text-red-500 hover:underline"
                      onClick={() =>
                        blockUser(
                          obj._id,
                          obj.isBlocked === true ? "unblock" : "block"
                        )
                      }
                    >
                      {obj.isBlocked === true ? "unblock" : "block"}
                    </a>
                  </td>
                  <td class={obj?.isProfileVerified !== true ? "flex items-center px-6 py-4 space-x-3" : "hidden"}>
                    <a
                      href="#"
                      class="font-medium text-orange-300 dark:text-orange-400 hover:underline"
                      onClick={() =>
                        blockUser(
                          obj._id,
                          obj.isBlocked === true ? "unblock" : "block"
                        )
                      }
                    >Send Mail
                      
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
  </> 
  );
}

export default UserListTable;
