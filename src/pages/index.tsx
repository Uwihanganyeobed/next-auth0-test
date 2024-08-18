

// import { useUser } from "@auth0/nextjs-auth0/client";
// import { Button, Heading } from "@chakra-ui/react";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import { useToast } from "@chakra-ui/react";

// const Home = () => {
//   const { push } = useRouter();
//   const { isLoading, user, error } = useUser();
//   const toast = useToast();

//   useEffect(() => {
//     if (user) {
//       toast({
//         title: `Welcome ${user.name}`,
//         description: "Successfully logged in",
//         status: "success",
//         duration: 5000,
//         position: "top-right",
//         isClosable: true,
//       });
//     }
//   }, [user, toast]);

//   if (isLoading) return <Heading>Loading....</Heading>;

//   const handleLogin = () => {
//     push("/api/auth/login");
//   };

//   const handleLogout = () => {
//     toast({
//       title: "Logging Out",
//       description: "Successfully logged out",
//       status: "success",
//       duration: 5000,
//       position: "top-right",
//       isClosable: true,
//     });
//     push("/api/auth/logout");
//   };

//   return (
//     <>
//       {user ? (
//         <>
//           <Heading>Hello {user.name}</Heading>
//           <Button onClick={handleLogout}>Logout</Button>

//         </>
//       ) : (
//         <div>
//           <Button onClick={handleLogin}>Login</Button>
//         </div>
//       )}
//     </>
//   );
// };

// export default Home;



import React from 'react'
import Propz from '../components/PropzTest'

const Home = () => {
  return (
    <div>
      <Propz />
    </div>
  )
}

export default Home