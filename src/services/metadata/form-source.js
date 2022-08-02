export const userInputs = [
  {
    id: 1,
    label: "Nombre",
    name: "name",
    type: "text",
    placeholder: "ej: Franklin",
    validators:["required"],
    errorMessages:["El nombre es requerido" ]
  },
  {
    id: 2,
    label: "Apellido",
    type: "text",
    name: "lastName",
    placeholder: "ej: Frias",
    validators:["required"],
    errorMessages:["El apellido es requerido" ]
  },
  {
    id: 3,
    label: "Email",
    type: "mail",
    name: "email",
    placeholder: "john_doe@gmail.com",
    validators:["required", "isEmail"],
    errorMessages:[
      "El email es requerido",
      "Email invalido"
    ]
  },
  {
    id: 4,
    label: "Telefono",
    type: "text",
    name: "phoneNumber",
    placeholder: "809-000-0000",
    validators:["required"],
    errorMessages:["El telefono es requerido" ]
  },
  {
    id: 5,
    label: "Contraseña",
    type: "password",
    name: "password",
    validators:["required"],
    errorMessages:["La contraseña es requerida" ]
  },
  {
    id: 5,
    label: "Repetir Contraseña",
    type: "password",
    name: "confirmPassword",
    validators:["required"],
    errorMessages:["Debes repetir la contraseña" ]
  },
  // {
  //   id: 5,
  //   label: "Foto",
  //   type: "file",
  //   name: "profilePhonto"
  // }
];

export const productInputs = [
  {
    id: 1,
    label: "Title",
    type: "text",
    placeholder: "Apple Macbook Pro",
  },
  {
    id: 2,
    label: "Description",
    type: "text",
    placeholder: "Description",
  },
  {
    id: 3,
    label: "Category",
    type: "text",
    placeholder: "Computers",
  },
  {
    id: 4,
    label: "Price",
    type: "text",
    placeholder: "100",
  },
  {
    id: 5,
    label: "Stock",
    type: "text",
    placeholder: "in stock",
  },
];