import React from 'react';

const userList = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'student' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'advisor' },
  { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', role: 'reviewer' },
];

function UserListTable() {
  return (
          <section className='bg-gray-50  flex items-center justify-center'>
        
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">#</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id} className="odd:bg-gray-100">
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.role}</td>
              <td className="border p-2">{user.role}</td>
              <td className="border p-2">{user.role}</td>
              <td className="border p-2">{user.role}</td>
              <td className="border p-2">{user.role}</td>
              <td className="border p-2">{user.role}</td>
              <td className="border p-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </section>
  );
}

export default UserListTable;
