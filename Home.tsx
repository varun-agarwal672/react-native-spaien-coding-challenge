import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "./categories";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import Packages from "./packages";

export default function Home({navigation}){
    const colorScheme = useColorScheme();
    return (
        <>
            <SafeAreaView>
                <Navigation colorScheme={colorScheme} />
                <Categories />
            </SafeAreaView>
            <Packages colorScheme={colorScheme} navigation={navigation}/>
        </>
    )
}