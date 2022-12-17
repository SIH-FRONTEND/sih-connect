import proile from "../../assets/profile.png";
import proile1 from "../../assets/profile1.png";
import proile2 from "../../assets/profile2.png";
import proile3 from "../../assets/profile3.png";
import proile4 from "../../assets/profile4.png";

export default [
  {
    id: 1,
    img: proile,
    name: "Samuel James",
    stack: "Mobile Developer",
    experience: "6 years experience",
  },

  {
    id: 2,
    img: proile1,
    name: "Janet Phil",
    stack: "UI/UX Designer",
    experience: "4 years experience",
  },
  {
    id: 3,
    img: proile2,
    name: "Albert Ben",
    stack: "Frontend Dev",
    experience: "3 years experience",
  },
  {
    id: 4,
    img: proile3,
    name: "Amaka Hills",
    stack: "Mobile Developer",
    experience: "5 years experience",
  },
  {
    id: 5,
    img: proile4,
    name: "James James",
    stack: "Frontend Dev",
    experience: "6 years experience",
  },
  {
    id: 6,
    img: proile2,
    name: "Albert Ben",
    stack: "Frontend Dev",
    experience: "3 years experience",
  },
  {
    id: 7,
    img: proile,
    name: "Samuel James",
    stack: "Mobile Developer",
    experience: "6 years experience",
  },

  {
    id: 8,
    img: proile1,
    name: "Janet Phil",
    stack: "UI/UX Designer",
    experience: "4 years experience",
  },
  {
    id: 9,
    img: proile2,
    name: "Albert Ben",
    stack: "Frontend Dev",
    experience: "3 years experience",
  },
  {
    id: 10,
    img: proile3,
    name: "Amaka Hills",
    stack: "Mobile Developer",
    experience: "5 years experience",
  },
  {
    id: 11,
    img: proile4,
    name: "James James",
    stack: "Frontend Dev",
    experience: "6 years experience",
  },
  {
    id: 12,
    img: proile2,
    name: "Albert Ben",
    stack: "Frontend Dev",
    experience: "3 years experience",
  },
];

// import React from 'react'

// function PropReceiver() {
//   const [users, setUsers] = useState([]);
//   // console.log(users);

//   useEffect(() => {
//     async function getUsers() {
//       const response = await fetch(
//         "https://starthubconnect.adaptable.app/user/latest-members",
//         {
//           method: "GET",
//           headers: {
//             accept: "application/json",
//           },
//         }
//       );

//       const data = await response.json();
//       console.log(data.items);

//       // const dataItems = items.items[0].firstname;
//       // console.log(dataItems);
//       setUsers(data.items);
//     }

//     getUsers();
//   }, []);

//   // console.log(users);

//   return (
//     <div>
//       {/* ✅ check if array before calling `map()` */}
//       {
//        users.map((items) => (
//             <div key={items.id}>
//               <h2>
//                 Name: {items.firstname} {items.lastname}
//               </h2>
//             </div>
//           ))
//         }
//     </div>
//   );
// }

// export default PropReceiver;
