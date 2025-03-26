import React, { useState } from 'react';

const UserTable = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Charlie', age: 22 }
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    const sortUsersByName = () => {
        const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
        setUsers(sortedUsers);
    };

    const sortUsersByAge = () => {
        const sortedUsers = [...users].sort((a, b) => a.age - b.age);
        setUsers(sortedUsers);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleSearch}
            />
            <button onClick={sortUsersByName}>Sort by Name</button>
            <button onClick={sortUsersByAge}>Sort by Age</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;