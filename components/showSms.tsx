import { FlatList, StyleSheet, Text, View } from "react-native";

const  ShowSms = ({messages,value})=>{


    const allmessage = (value)=>{
        if (value ==="tümü") {
          return messages
        }
        else{
          return messages.filter(m =>m.address ===value);
        }
      }
    const renderItem = ({ item }: { item: any }) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
          <Text style={{ fontWeight: 'bold' }}>{item.address}</Text>
          <Text>{item.body}</Text>
          <Text style={{ color: 'gray', fontSize: 12 }}>{item.timestamp}</Text>
        </View>
      );
    return(
        <View>
            <FlatList
            data={allmessage(value)}
            keyExtractor={item => item._id}
            renderItem={renderItem}
      />
        </View>
    );

}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
});

export default ShowSms