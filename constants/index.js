export const Links = [
  {
    id: 1,
    title: "Dashboard",
    route: '/dashboard',
    imageurl: '../images/home.svg'
  },
  {
    id: 2,
    title: "Users",
    route: '/dashboard/users',
    imageurl: '../images/user.svg'
  },
  {
    id: 3,
    title: "Blogs",
    route: '/dashboard/events',
    imageurl: '../images/deposit.svg'
  },
  {
    id: 4,
    title: "Parent",
    route: '/dashboard/parent',
    imageurl: '../images/deposit.svg'
  }
  
]

export const users = [
  {
    id: 1,
    email: "mallicktasbiha@gmail.com",
    name: "Tasbiha Mallick",
    imageurl: "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yZmVLUjJyN1YyanN5VXBtS1ptRFk4c2U3aXEiLCJyaWQiOiJ1c2VyXzJqSndaU1Z3UWIwYlp4b1lOMnlHMmZxS1pXVCIsImluaXRpYWxzIjoiVE0ifQ",
    role: 'Admin'
  },
  {
    id: 2,
    email: "mushiashraf38@gmail.com",
    name: "Muhammad Musharaf",
    imageurl: "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yaks0am00aFNUczM2RWJHN1lNc2o4ZG9TS0MifQ",
    role: "user"
  },
  {
    id: 3,
    email: "laiba.ali.655@gmail.com",
    name: "Laiba Ali",
    imageurl: "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yaktIQTMwWTF2dks0azlVNkdaalREZzRKRHEifQ",
    role: 'user'
  },
  {
    id: 4,
    email: "mallickshuja2910@gmail.com",
    name: "Mohammad Shujaat",
    imageurl: "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yazhzdTROWmhvQTRFY0lDVzlQbU04MnRlWUkifQ",
    role: 'Admin'
  },
  {
    id: 5,
    email: "salman.sami.jj@gmail.com",
    name: "M.salman Ahmed",
    imageurl: "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ya05OdDcxWWFXMkt6Q1FEc0RBVmVWZTNubFcifQ",
    role: 'Moderator'
  },
  { id: 6, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 7, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 8, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  { id: 9, name: 'Alice Brown', email: 'alice@example.com', role: 'Moderator' },
  { id: 10, name: 'Charlie Davis', email: 'charlie@example.com', role: 'User' },

]

import axios from 'axios';


export async function getPosts() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data)
    return response.data; // Limit to 6 posts for this example
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getOnePost(id) {
  if (!id) {
    throw new Error('ID is required to fetch a post');
  }

  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching post:', error.message || error);
    return null; // Return null instead of an array, as we're fetching a single post
  }
}



export const weatherData = {
  current: {
    temperature: 72,
    condition: 'sunny',
    humidity: 60,
    windSpeed: 5,
  },
  forecast: [
    { day: 'Mon', temperature: 75, condition: 'sunny' },
    { day: 'Tue', temperature: 70, condition: 'cloudy' },
    { day: 'Wed', temperature: 68, condition: 'cloudy' },
    { day: 'Thu', temperature: 72, condition: 'sunny' },
    { day: 'Fri', temperature: 66, condition: 'cloudy' },
  ],
};

export const data = [
  { name: "Jan", sales: 4000, revenue: 2400 },
  { name: "Feb", sales: 3000, revenue: 1398 },
  { name: "Mar", sales: 2000, revenue: 9800 },
  { name: "Apr", sales: 2780, revenue: 3908 },
  { name: "May", sales: 1890, revenue: 4800 },
  { name: "Jun", sales: 2390, revenue: 3800 },
  { name: "Jul", sales: 3490, revenue: 4300 },
];