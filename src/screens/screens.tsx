import React from "react"

// public screens
import { GetStarted, Login, Signup, Verify } from './public'

// types
import { List } from '../types'

// public screens or auth screens
export function publicStackList(RootStack: any) {
	return (
		<>
			<RootStack.Screen name={List.getStarted} component={GetStarted} />
			<RootStack.Screen name={List.login} component={Login} />
			<RootStack.Screen name={List.signup} component={Signup} />
			<RootStack.Screen name={List.verify} component={Verify} />
		</>
	)
}


// private screens or main screens
export function privateStackList(RootStack: any) {
	return (
		<>

		</>
	)
}