import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import './global.css';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-2xl font-bold text-text-primary">
        RDO Manager
      </Text>
      <Text className="text-sm text-text-secondary mt-2">
        Gestão Inteligente de Obras
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
