import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const items = [
    {
        text: "Yoga",
    },
    {
        text: "Zumba",
    },
    {
        text: "Martial Arts",
    },
    {
        text: "Running",
    },
    {
        text: "Cycling",
    },
    {
        text: "Treking"
    }
];

export default function Categories() {
    return (
        <View>
            <ScrollView style={{marginTop:20,margin:10}} horizontal showsHorizontalScrollIndicator={false}>
            {items.map((item, index) => (
                    <View key={index} style={{alignItems: "center", marginRight: 20}}>
                        <TouchableOpacity style={{borderWidth:30,borderRadius:30,height:30,width:30,borderColor:'grey'}} onPress={changeColor}>
                        
                        </TouchableOpacity>
                        <Text style={{fontSize: 15, fontWeight: "bold"}}>{item.text}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const changeColor = () => ( 
    <View style={{width:10,height:10,backgroundColor:'blue'}}>
    </View>
)