import bcrypt from "bcryptjs";

const users = [
  {
    name: "Moyise",
    email: "moyisemr@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
    image: "/images/Profile.png",
  },
  {
    name: "Ghost",
    email: "ghost@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
    image: "/images/Profile.png",
  },
];

export default users;
