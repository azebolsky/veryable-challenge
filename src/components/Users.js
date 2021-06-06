import React from "react";
import User from "./User";

const userList = [
  {
    id: 0,
    firstName: "Alexander",
    lastName: "the Great",
    role: "Administrator",
    iconColor: "#2081C3",
    email: "alexander@conqueror.com",
    street: "1234 Not a Fake Street",
    city: "Dallas",
    state: "TX",
    zip: "75201",
    phone: "5558675309",
    createdAt: "1970-01-01T06:01:00.000Z",
    lastLoggedIn: "1970-01-01T06:02:00.000Z",
  },
  {
    id: 1,
    firstName: "Madame Marie",
    lastName: "Curie",
    role: "Administrator",
    iconColor: "#2081C3",
    email: "mcurie@science.com",
    street: "21 Jump Street",
    city: "Fort Worth",
    state: "TX",
    zip: "76111",
    phone: "5558258888",
    createdAt: "1971-01-01T06:01:00.000Z",
    lastLoggedIn: "1971-01-01T06:02:00.000Z",
  },
  {
    id: 2,
    firstName: "Aristotle",
    lastName: "",
    role: "User",
    iconColor: "#68AAAB",
    email: "aristotlethinks@greece.com",
    street: "14 Agora Way",
    city: "Athens",
    state: "TX",
    zip: "72222",
    phone: "5553141517",
    createdAt: "1971-01-02T06:01:00.000Z",
    lastLoggedIn: "1971-01-03T06:02:00.000Z",
  },
  {
    id: 3,
    firstName: "R. K.",
    lastName: "Narayan",
    role: "Viewer",
    iconColor: "#7E7E7E",
    email: "rkwrites@books.com",
    street: "24 Rama Way",
    city: "Ayodhya",
    state: "TX",
    zip: "74444",
    phone: "5554444444",
    createdAt: "1971-01-03T06:01:00.000Z",
    lastLoggedIn: "1971-01-04T06:02:00.000Z",
  },
  {
    id: 4,
    firstName: "Duke of",
    lastName: "Zhou",
    role: "Viewer",
    iconColor: "#7E7E7E",
    email: "duke@tangempire.com",
    street: "124 Palace Road",
    city: "Chiangan",
    state: "TX",
    zip: "73333",
    phone: "5551234567",
    createdAt: "1971-01-04T06:01:00.000Z",
    lastLoggedIn: "1971-01-05T06:02:00.000Z",
  },
];

const Users = () => {
  // const [isSelected, setIsSelected] = useState();

  const setUsers = userList.map((user) => {
    return (
      <>
        <User user={user} />
      </>
    );
  });

  return <>{setUsers}</>;
};

export default Users;
