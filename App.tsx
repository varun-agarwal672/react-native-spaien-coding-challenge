import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Categories from './categories';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import Packages from './packages';
import { ScrollView, View } from 'react-native';
import PackageDetails from './packageDetails';
import Home from './Home';
import RootNavigation from './screenNavigate';


export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <ApplicationProvider {...eva} theme={eva.light}>
          <RootNavigation />
        </ApplicationProvider>
      </>
    );
  }
}
