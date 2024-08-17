import { Button, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const EmailVerified = () => {
  const {
    query: { upadateSession },
    push,
  } = useRouter();
  const [refreshed, setRefreshed] = useState(false);

  useEffect(()=>{
   if(upadateSession==='true'){
      axios
      .get('/api/refreshToken')
      .then(data=>{
         console.log('data',data)
         if(data) setRefreshed(true)
      })
   .catch(err => console.log('error', err))
   }
  },[upadateSession])

  return (
    <div>
      <Heading>Your Email is Verified</Heading>
      {refreshed && <Button>Go to home</Button>}
    </div>
  );
};

export default EmailVerified;
