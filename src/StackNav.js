import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "./Home";
import Login from "./Login";

const screens = {
    "No active card": {
        screen: Login
    },
    "Add Card": {
        screen: Home
    }
}
const PaymentStack = createStackNavigator(screens);

export default createAppContainer(PaymentStack);