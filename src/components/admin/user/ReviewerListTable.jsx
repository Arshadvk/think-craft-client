import React, { useEffect, useState } from "react";
import adminAxios from "../../../axios/adminAxios";
import Swal from "sweetalert2";

function ReviewerListTable() {
    const [userData, setUserDate] = useState([]);
    useEffect(() => {
        
        adminAxios
          .get("/all-reviewer")
          .then((response) => {
            console.log(response.data);
            setUserDate(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

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
              .patch("/block-unblock-reviewer", { id, action })
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
                  if (obj._id == id) {
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
              });
          }
        });
      };
  return (
    <div className="sm:ml-64 ">
      <section className="bg-gray-50 min-h-screen flex items-center justify-center p-4 pt-0">
        <div class="relative overflow-x-auto shadow-md rounded-lg ">
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
                <th scope="col" class="px-6 py-3">
                  Domain
                </th>

                <th scope="col" class="px-6 py-3">
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
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4">Yes</td>

                    <td class="flex items-center px-6 py-4 space-x-3">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        View
                      </a>
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
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default ReviewerListTable;
