import { SafeAreaView } from "react-native-safe-area-context";
import ButtomTabNav from "./navigation/ButtomTabNav";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppNav from "./navigation/AppNav";
import { useState } from "react";
import UserContext from "./context/UserContext";
import { StatusBar } from "react-native";

export default function App() {
  const [user, setUser] = useState(true);

  const checkToken = async () => {
    const token = await getToken();
    if (token) {
      setUser(true);
    }
  };

  return (
    <QueryClientProvider client={new QueryClient()}>
      <UserContext.Provider value={{ user, setUser }}>
        {/* <StatusBar /> */}
        <NavigationContainer>
          {!user ? <AppNav /> : <ButtomTabNav />}
        </NavigationContainer>
      </UserContext.Provider>
    </QueryClientProvider>
  );
}
