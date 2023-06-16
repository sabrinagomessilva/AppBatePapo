import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListItem from './src/components/ChatListitem';

const chat = {
  id: "1",
  user: {
    Image:
      "https://media.istockphoto.com/id/1462309214/pt/vetorial/vector-cartoon-cute-kawaii-kid-face-isolated.jpg?s=612x612&w=0&k=20&c=7EWfqBnJ5h0k156qsQ30tun3U7KuOA1JDS1WsnuD_z8=",
    name: "Sah Silva",
  },
  lastMessage: {
    text: "Oke",
    createdAt: "07:30",
  },
};

export default function App() {
  return (
    <View style={styles.container}>

      <ChatListItem chat={chat}/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
