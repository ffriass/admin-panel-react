import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import PayPalIcon from "../../components/icons/PayPal";

export const dateFormat = {hour:"2-digit", minute: "2-digit", hour12: false };
export const dateOnlyFormat = { hour12: false };
export const moneyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
export const statusClassMapping = (status) => {
  switch (status) {
    case "Approved":
    case "Paid":
    case "Completed":
    case "Active":
      return "active";
    case "Authorized":
    case "Acepted":
    case "InProcess":
      return "proccess";
    case "Registered":
    case "Unknown":
      return "pending";
    case "Canceled":
    case "AutoCancelled":
    case "AutoCanceled":
    case "Inactive":
      return "passive";
    case "Refunded":
    case "Inhabilitado":
    case "NotFound":
    case "Draft":
      return "neutral";

    default:
      return "";
  }
};

const iconMapping = (value) => {
  switch (value) {
    case "CreditCard":
      return <CreditCardIcon />;
    case "Cash":
      return <LocalAtmIcon style={{ color: "green" }} />;
    case "PayPal":
      return <PayPalIcon />;

    default:
      return <h6>{value}</h6>;
  }
};
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Nombre",
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
    headerName: "Telefono",
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
    headerName: "Nombre",
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
    headerName: "Descripcion",
    width: 230,
    flex: 1
  },
  {
    field: "durationInMinutes",
    headerName: "Duracion",
    width: 100,
    flex: 1
  },
  {
    field: "details",
    headerName: "Status",
    width: 160, flex: 1,
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
    headerName: "Precio",
    width: 150,
    ype: "money",
    flex: 1,
    renderCell: (param) => moneyFormatter.format(param.row.price)
  },
  {
    field: "initialTime",
    headerName: "Inicio",
    width: 230,
    flex: 1
  },
  {
    field: "finalTime",
    headerName: "Fin",
    width: 100,
    flex: 1
  }
];

export const transactionsColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    hide: false
  },
  {
    field: "topService",
    headerName: "Servicio",
    width: 150,
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
    field: "date",
    headerName: "Fecha",
    width: 230,
    flex: 1,
    renderCell: (param) => new Date(param.row.date).toLocaleDateString("en-US", dateFormat)
  },
  {
    field: "customer",
    headerName: "Cliente",
    width: 100,
    flex: 1
  },
  {
    field: "agent",
    headerName: "Agente",
    width: 100,
    flex: 1
  },
  {
    field: "amount",
    headerName: "Monto",
    width: 100,
    flex: 1,
    renderCell: (param) => moneyFormatter.format(param.row.amount)
  },
  {
    field: "paymentMethod",
    headerName: "Metodo",
    width: 100,
    flex: 1,
    renderCell: (param) => iconMapping(param.row.paymentMethod)
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    flex: 1,
    renderCell: (params) => {
      return (
        <div
          className={`cellWithStatus ${statusClassMapping(params.row.status)}`}
        >
          {params.row.status}
        </div>
      );
    }
  },
  {
    field: "invoice",
    headerName: "Recibo",
    width: 100,
    flex: 1,
    renderCell: (params) => {
      return (
        <div
          className={`cellWithStatus ${statusClassMapping(
            params.row.invoice ?? "NotFound"
          )}`}
        >
          {params.row.invoice ?? "NotFound"}
        </div>
      );
    }
  }
];

export const balanceColumns = [
  {
    field: "paymentType",
    headerName: "ID",
    width: 70,
    hide: true
  },
  {
    field: "paymentMethod",
    headerName: "Metodo",
    width: 70,
    flex: 0.6,
    renderCell: (param) => iconMapping(param.row.paymentMethod)
  },
  {
    field: "totalRevenue",
    headerName: "Ingreso",
    width: 230,
    flex: 1,
    renderCell: (param) => moneyFormatter.format(param.row.totalRevenue)
    
  },
  {
    field: "benefit",
    headerName: "Ganancia",
    width: 230,
    flex: 1,
    renderCell: (param) => moneyFormatter.format(param.row.benefit)
  },
  {
    field: "collect",
    headerName: "Cobrar",
    width: 100,
    flex: 1,
    renderCell: (param) => moneyFormatter.format(param.row.collect)
  },
  {
    field: "pay",
    headerName: "Pagar",
    width: 100,
    flex: 1,
    renderCell: (param) => moneyFormatter.format(param.row.pay)
  },
  {
    field: "balance",
    headerName: "Balance",
    width: 100,
    flex: 1,
    renderCell: (params) => {
      return (
        <div
          className={`cellWithStatus ${statusClassMapping(
            params.row.balance > 0 ? "Active" : "Inactive"
          )}`}
        >
          {moneyFormatter.format(params.row.balance)}
        </div>
      );
    }
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
