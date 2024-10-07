import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const AppRouter = () => {
  return (
    
    <Routes>

        {/* Login and Sign up */}
        {/* Any route that bring to auth = /auth/* will enter to AuthRooutes component */}
        <Route path="/auth/*" element={ <AuthRoutes /> }/> 

        {/* JouranlApp */}
        {/* Any other route that bring not with auth will enter to JournalRoutes component*/}
        <Route path="/*" element={ <JournalRoutes /> }/> 
    </Routes>
  )
}

