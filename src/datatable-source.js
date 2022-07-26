export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
    flex: 1,
    renderCell: (params) => {
      return (
        // <div className="cellWithImg">
        // <img className="cellImg" src={params.row.img} alt="avatar" />
        `${params.row.name} ${params.row.lastName}`
        // </div>
      );
    }
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
    flex: 1
  },

  {
    field: "phoneNumber",
    headerName: "Phone",
    width: 230
  }
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   }
  // }
];

export const productColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    width: 150
    // renderCell: (params) => {
    //   return (
    //     <div className="cellWithImg">
    //       <img className="cellImg" src={params.row.img} alt="avatar" />
    //       {params.row.username}
    //     </div>
    //   );
    // }
  },
  {
    field: "description",
    headerName: "Description",
    width: 230,
    flex: 2
  },
  {
    field: "durationInMinutes",
    headerName: "Duration",
    width: 100
  },
  {
    field: "details",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div
          className={`cellWithStatus ${
            params.row.details.length > 0 ? "active" : "passive"
          }`}
        >
          {params.row.details.length > 0 ? "Available" : "Unavailable"}
        </div>
      );
    }
  }
];
export const productDetailColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    hide: true
  },
  {
    field: "price",
    headerName: "Price",
    width: 150,
    ype: 'money',
    flex: 1
    // renderCell: (params) => {
    //   return (
    //     <div className="cellWithImg">
    //       <img className="cellImg" src={params.row.img} alt="avatar" />
    //       {params.row.username}
    //     </div>
    //   );
    // }
  },
  {
    field: "initialTime",
    headerName: "Start",
    width: 230,
    flex: 1
  },
  {
    field: "finalTime",
    headerName: "End",
    width: 100,
    flex: 1
  }
];

//temporary data
export const productRows = [
  {
    id: 1,
    name: "CLASICO",
    description:
      "nnkjbwkjbkjwbjkbkwjbckjbwjkwbcjkwkjccjkwckjwcjkwjkcwjckjwbkcjwbbwjbcjkwbkwbkw",
    details: [
      {
        id: 1,
        serviceId: 1,
        price: 400,
        initialTime: 759,
        finalTime: 900
      },
      {
        id: 1,
        serviceId: 1,
        price: 400,
        initialTime: 759,
        finalTime: 900
      },
      {
        id: 3,
        serviceId: 1,
        price: 400,
        initialTime: 759,
        finalTime: 900
      },
      {
        id: 4,
        serviceId: 1,
        price: 400,
        initialTime: 759,
        finalTime: 900
      }
    ]
  }
];
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65
  }
];
