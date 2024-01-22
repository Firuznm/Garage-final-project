import { createContext, useState } from "react";

export const UserContext=createContext();


export const UserPovider=({children})=>{
	const [user,setUser]= useState(null)

	return(
		<UserContext.Provider value={{user,setUser}}>
			{children}
		</UserContext.Provider>
	)
} 

// export default function AuthContext({children}){
// 	const [user,setUser]= useState(null)
//  return(
// 	<UserContext.Provider value={{user,setUser}}>  
// 		{children}
// 	</UserContext.Provider>
//  )
// }