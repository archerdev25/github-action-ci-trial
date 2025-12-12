import axios from 'axios';

export async function getUser(id: number) {
    const res = await axios.get(`/api/users/${id}`);
    return res.data;
}