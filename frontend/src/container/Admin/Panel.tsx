import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const UsersTable = styled.table`
	${tw`w-full table-auto border-collapse`}
	border: 1px solid #ccc;
`;

const TableHeader = styled.thead`
	${tw`bg-gray-200`}
`;

const TableRow = styled.tr`
	${tw`hover:bg-gray-100`}
`;

const TableCell = styled.td`
	${tw`border px-4 py-2`}
`;

const Button = styled.button`
	${tw`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700`}
`;

const AdminPanel: React.FC = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const [newUser, setNewUser] = useState({
		name: "",
		username: "",
		email: "",
		password: "",
		role: "user",
	});

	const fetchUsers = async () => {
		try {
			const response = await fetch("http://localhost:5000/api/auth/users", {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			});
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();
			setUsers(data.users);
		} catch (err: any) {
			setError(err.message || "Failed to fetch users");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	const handleCreateUser = async () => {
		try {
			const response = await fetch("http://localhost:5000/api/auth/users", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
				body: JSON.stringify(newUser),
			});

			if (!response.ok) {
				throw new Error("Failed to create user");
			}

			await fetchUsers();
			alert("User created successfully");
		} catch (error) {
			alert("Failed to create user");
		}
	};

	const handleDeleteUser = async (id: string) => {
		if (!window.confirm("Are you sure you want to delete this user?")) {
			return;
		}

		try {
			await fetch(`http://localhost:5000/api/auth/users/${id}`, {
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			});
			alert("User deleted successfully");
			await fetchUsers();
		} catch (error) {
			alert("Failed to delete user");
		}
	};

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	return (
		<div className="container mx-auto p-5">
			<h1>Admin Panel</h1>

			{/* Add User Form */}
			<div>
				<h2>Create New User</h2>
				<form onSubmit={(e) => { e.preventDefault(); handleCreateUser(); }} className="create-user-form" >
					<input type="text" placeholder="Name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} required />
					<input type="text" placeholder="Username" value={newUser.username} onChange={(e) => setNewUser({ ...newUser, username: e.target.value })} required />
					<input type="email" placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} required />
					<input type="password" placeholder="Password" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} required />
					<select value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })} >
						<option value="user">User</option>
						<option value="admin">Admin</option>
					</select>
					<button className="submit-btn bg-slate-500 p-2 rounded-xl" type="submit">Create User</button>
				</form>
			</div>

			{/* Users Table */}
			<UsersTable>
				<TableHeader>
					<tr>
						<th>Name</th>
						<th>Username</th>
						<th>Email</th>
						<th>Role</th>
						<th>Actions</th>
					</tr>
				</TableHeader>
				<tbody>
					{users.map((user: any) => (
						<TableRow key={user._id}>
							<TableCell>{user.name}</TableCell>
							<TableCell>{user.username}</TableCell>
							<TableCell>{user.email}</TableCell>
							<TableCell>{user.role}</TableCell>
							<TableCell>
								<Button onClick={() => handleDeleteUser(user._id)}>Delete</Button>
							</TableCell>
						</TableRow>
					))}
				</tbody>
			</UsersTable>
		</div>
	);
};

export default AdminPanel;
