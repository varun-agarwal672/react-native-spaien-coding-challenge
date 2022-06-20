import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import DashedLine from "react-native-dashed-line";

export const trainingPackages = [
  {
    name: "Holistic Journey Program",
    content: "Lorem ipsum Simple \n dummy content",
    category: "Zumba",
    image_url:
      "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    level: "Beginner",
    creator: "Arjun Nair",
    creator_image: 'https://i.pinimg.com/736x/51/99/23/519923747c857f69f987fce88b76b4d1.jpg',
    price: "₹10000",
  },
  {
    name: "Custom Program",
    content: "Lorem ipsum Simple \n dummy content",
    category: "Zumba",
    image_url:
      "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    level: "Intermediate",
    creator: "Username",
    creator_image: 'https://i.pinimg.com/736x/51/99/23/519923747c857f69f987fce88b76b4d1.jpg',
    price: "₹1000",
  },
  {
    name: "Custom Program",
    content: "Lorem ipsum Simple \n dummy content",
    category: "Zumba",
    image_url:
      "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    level: "Advanced",
    creator: "Username",
    creator_image: 'https://i.pinimg.com/736x/51/99/23/519923747c857f69f987fce88b76b4d1.jpg',
    price: "₹1000",
  },
];

export default function Packages({navigation,...props}) {
  return (
    <ScrollView>
      {trainingPackages.map((data, index) => (
        <TouchableOpacity key={index} activeOpacity={1} onPress={() => navigation.navigate("PackageDetails", {
            name: data.name,
            content: data.content,
            category: data.category,
            image_url: data.image_url,
            level: data.level,
            creator: data.creator,
            creator_image: data.creator_image,
            price: data.price,
            colorScheme: props.colorScheme
        })}>
          <View style={{margin: 15,borderRadius: 20,borderWidth:2, backgroundColor:'white',borderColor:'rgba(128,128,128,0.01)'}}>
            <View style={{flexDirection: "row" }}>
              <Image
                source={{
                  uri: data.image_url,
                }}
                style={{ borderRadius: 10,width: 128, height: 150, margin: 12 }}
              />
              <View style={{marginTop: 12}}>
                <Text style={{ fontSize: 20, fontWeight: "bold",marginBottom: 10 }}>
                  {data.name}
                </Text>
                <Text style={{ fontSize: 15,marginBottom: 25 }}>
                  {data.content}
                </Text>
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: "row",
                    justifyContent: 'space-between',
                  }}
                >
                  <Text
                    style={{
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingTop: 5,
                      paddingBottom: 5,
                      borderRadius: 50,
                      backgroundColor: "yellow",
                    }}
                  >
                    {data.category}
                  </Text>
                  <View style={{flexDirection:'row'}}>
                        <View>
                            <Text>Created By</Text>
                            <Text>{data.creator}</Text>
                        </View>
                        <Image source={{uri: data.creator_image}}
                                style={{width:'20%',height:'100%',borderWidth:20,borderRadius:20}}
                        />
                    </View>
                </View>
              </View>
            </View>
            <DashedLine style={{width:'100%'}} dashLength={5} dashColor='#D3D3D3' dashGap={5} />
            <View style={{marginTop: 5, alignSelf: "flex-end" }}>
              <Text style={{fontSize:20, textAlign: "right", color: "green" }}>
                {data.price}
              </Text>
              <Text style={{ textAlign: "right" }}> per month</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
