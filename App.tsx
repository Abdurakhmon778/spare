import React from "react"
import { RN } from "./src/components"

import { GetStarted, Login, Signup } from "./src/screens/public"



const App = () => {

  return (
    <>
      <RN.StatusBar hidden />
      <Signup />
    </>
  )
}



export default App