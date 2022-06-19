import * as React from 'react'

// components
import { RN } from './src/components'

// root navigation
import RootNavigationStack from './src/root-navigation/root-navigation'

const App = () => {

  return (
    <>
      <RN.StatusBar hidden />
      <RootNavigationStack />
    </>
  )
}

export default App