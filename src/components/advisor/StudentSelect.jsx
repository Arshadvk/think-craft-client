import React, { useEffect, useState } from 'react';
import { reviewslist } from '../../services/advisor/reviews';
import advisorAxios from '../../axios/advisorAxios';

function StudentSelect() {
    const [userData, setUserData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const reviewList = async () => {
            try {
                const res = await reviewslist();
                console.log(res);
                setUserData(res.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        reviewList();
    }, []);
    const handleSlotBooking = () =>{
        advisorAxios.post('/slot-book',{user: selectedUser?.student?._id})
    }
console.log(userData);
    const handleUserSelect = (event) => {
        console.log('hello' , event.target.value);
        const selectedUserId = event.target.value;

        const selectedUser = userData.find(user => user?.student?._id === selectedUserId);
        setSelectedUser(selectedUser);
    };
    console.log(selectedUser);

    return (
        <div>
            <h1>Select Student : </h1>
            <select className='w-full p-2 mt-3 rounded-xl border ' onChange={handleUserSelect}>
                <option value="">Select a user</option>
                {userData.map(user => (
                    <option key={user?.student?.id} value={user?.student?._id}>
                        {user?.student?.name}
                    </option>
                ))}
            </select>
            {selectedUser && (
                <div>
                    <button className='border border-gray-500 p-2 rounded-md text-white bg-blue-950 mt-2' onClick={()=> handleSlotBooking(selectedUser)}> Book Slot </button>
                </div>
            )}
        </div>
    );
}

export default StudentSelect;
