import { handleProfile, HandleProfile, Session, withApiAuthRequired } from "@auth0/nextjs-auth0"

export const handler = async(req, res)=> {
   try {
      await handleProfile(req, res,{

         refetch: true,
         afterRefetch: async(_,__,session)=>session,
      })
   } catch (error) {
      console.log(error)
      return res.status(error?.response?.status || 500).json({
         message: error.message
      })
      
   }
}