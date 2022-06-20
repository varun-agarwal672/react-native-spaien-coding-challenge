import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import DashedLine from "react-native-dashed-line";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PackageDetails({route}){
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{height:200,backgroundColor: route.params.colorScheme,paddingTop:20,marginBottom:147}}>
                    <Text style={{color:'white',fontSize:20,alignSelf:'center',marginBottom:30}}>Holistic Journey Program</Text>
                    <Image source={{
                        uri: route.params.image_url}} 
                        style={{alignSelf:'center',
                        width:"90%",
                        height: "150%"}}/>
                </View>
                <View style={{paddingRight:20,paddingLeft:20, flexDirection:'row'}}>
                        <View style={{backgroundColor:'#e6ffe6',alignItems: 'center',padding:7}}>
                            <Text>TYPE</Text>
                            <Text>BODY WEIGHT</Text>
                        </View>
                        <View style={{backgroundColor:'#e4fbff',alignItems: 'center',padding:7}}>
                            <Text>LEVEL</Text>
                            <Text>INTERMEDIATE</Text>
                        </View>
                        <View style={{backgroundColor:'pink',alignItems: 'center',padding:7}}>
                            <Text>INTENSITY</Text>
                            <Text>DIFFICUT</Text>
                        </View>
                        <View style={{backgroundColor:'#daa520',alignItems: 'center',padding:7}}>
                            <Text>KCAL/DAY</Text>
                            <Text>1500</Text>
                        </View>
                    </View>
                    <View style={{alignItems:'flex-end',paddingRight:10,paddingTop:20}}>
                        <Text>Created By</Text>
                        <Text>Arjun Nair</Text>
                    </View>
                    <View style={{paddingLeft:20,flexDirection:'row'}}>
                        <MaterialCommunityIcons name='map-marker' size={33} color= "black" />
                        <Text style={{paddingRight:8}}>1st Floor,Madangopal Street,Abhiramapuram,Chennai-600018</Text>
                    </View>
                    <View style={{borderBottomWidth:2,justifyContent:'space-between',padding:15,paddingTop:20,flexDirection:'row'}}>
                            <Text style={{fontWeight:'bold'}}>Monthly</Text>
                            <Text style={{fontWeight:'bold'}}>Quarterly</Text>
                            <Text style={{fontWeight:'bold'}}>Half Yearly</Text>
                            <Text style={{fontWeight:'bold'}}>Yearly</Text>
                    </View>
                    <View style={{margin: 15,borderRadius: 10,borderWidth:2, backgroundColor:'white',borderColor:'rgba(128,128,128,0.01)'}}>
                <View
                style={{flexDirection: "row",marginBottom: 5 }}
                >
                <Image
                    source={{
                    uri: route.params.image_url,
                    }}
                    style={{ borderRadius: 10,width: 128, height: 150, margin: 12 }}
                />
                <View style={{marginTop: 30}}>
                    <Text style={{ fontSize: 20, fontWeight: "bold",marginBottom: 10 }}>
                    {route.params.name}
                    </Text>
                    <Text style={{ fontSize: 15,marginBottom: 25 }}>
                    {route.params.content}
                    </Text>
                    <View
                    style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: "row",
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
                        {route.params.category}
                    </Text>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <Text>Created By</Text>
                            <Text>{route.params.creator}</Text>
                        </View>
                        <Image source={{uri: route.params.creator_image}}
                                style={{width:'20%',height:'100%',borderWidth:20,borderRadius:20}}
                        />
                    </View>
                    </View>
                </View>
                </View>
                <DashedLine style={{width:'100%'}} dashLength={5} dashColor='#D3D3D3' dashGap={5} />
                <View style={{marginTop: 5, alignSelf: "flex-end" }}>
                <Text style={{fontSize:20, textAlign: "right", color: "green" }}>
                    {route.params.price}
                </Text>
                <Text style={{ textAlign: "right" }}> per month</Text>
                </View>
                    </View>
                    <View style={{padding:15}}>
                        <View style={{alignItems:'center',flexDirection:'row',marginBottom:10}}>
                            <Text style={{borderWidth:2,color:'#4DEEEA',borderColor:'#4DEEEA',borderRadius:20,paddingLeft:20,paddingRight:18,paddingTop:10,paddingBottom:10}}>ABOUT</Text>
                            <DashedLine style={{width:'75%'}} dashLength={5} dashColor='#D3D3D3' dashGap={5} />
                        </View>
                        <Text style={{padding:10,fontSize:17}}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus vitae dolore repellat quae? Dicta ab, commodi veniam ut eligendi voluptatibus. Eum sunt, maxime libero culpa voluptatibus tenetur quis 
                        </Text>
                    </View>
                    <View style={{padding:15}}>
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                            <Text style={{borderWidth:2,color:'#4DEEEA',borderColor:'#4DEEEA',borderRadius:20,paddingLeft:20,paddingRight:18,paddingTop:10,paddingBottom:10}}>EQUIPMENTS</Text>
                            <DashedLine style={{width:'75%'}} dashLength={5} dashColor='#D3D3D3' dashGap={5} />
                            
                        </View>
                    </View>
                    <View style={{padding:15}}>
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                            <Text style={{borderWidth:2,color:'#4DEEEA',borderColor:'#4DEEEA',borderRadius:20,paddingLeft:20,paddingRight:18,paddingTop:10,paddingBottom:10}}>BENEFITS</Text>
                            <DashedLine style={{width:'75%'}} dashLength={5} dashColor='#D3D3D3' dashGap={5} />
                        </View>
                        <Text style={{padding:15,fontSize:17}}>
                            Lorem ipsum dolor sit amet consectetur 
                        </Text>
                        <Text style={{padding:15,fontSize:17}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, numquam.
                        </Text>
                        <Text style={{padding:15,fontSize:17}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veniam ipsam cum! Omnis nesciunt neque officia nulla 
                        </Text>
                    </View>
                    <View style={{padding:15}}>
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                            <Text style={{borderWidth:2,color:'#4DEEEA',borderColor:'#4DEEEA',borderRadius:20,paddingLeft:20,paddingRight:18,paddingTop:10,paddingBottom:10}}>HOW DOES IT WORK?</Text>
                            <DashedLine style={{width:'75%'}} dashLength={5} dashColor='#D3D3D3' dashGap={5} />
                        </View>
                        <View style={{padding:15,flexDirection:'row'}}>
                            <Text style={{marginRight:10,color:'#A020F0',fontSize:20}}>{'\u2022'}</Text>
                            <Text style={{fontSize:17}}>
                                Lorem ipsum dolor sit amet consectetur 
                            </Text>
                        </View>
                        <View style={{padding:15,flexDirection:'row'}}>
                            <Text style={{marginRight:10,color:'#A020F0',fontSize:20}}>{'\u2022'}</Text>
                            <Text style={{fontSize:17}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, numquam.
                            </Text>
                        </View>
                        <View style={{padding:15,flexDirection:'row'}}>
                            <Text style={{marginRight:10,color:'#A020F0',fontSize:20}}>{'\u2022'}</Text>
                            <Text style={{fontSize:17}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veniam ipsam cum! Omnis nesciunt neque officia nulla 
                            </Text>
                        </View>
                    </View>
                    <View>
                        <View style={{alignItems:'center',flexDirection:'row',padding:15}}>
                            <Text style={{borderWidth:2,color:'#4DEEEA',borderColor:'#4DEEEA',borderRadius:20,paddingLeft:20,paddingRight:18,paddingTop:10,paddingBottom:10}}>MUSCLE GROUPS</Text>
                            <DashedLine style={{width:'75%'}} dashLength={5} dashColor='#D3D3D3' dashGap={5} />
                        </View>
                        <Image source={{uri:'https://st4.depositphotos.com/2741165/25210/v/1600/depositphotos_252101778-stock-illustration-human-body-anatomy-male-man.jpg'}}
                                style={{width:'100%',height:500}}
                        />
                    </View>
                    <TouchableOpacity style={{backgroundColor:"#491e3c",padding:15,alignItems:'center',margin:10,borderRadius:10}}>
                        <Text style={{color:'white',fontSize:20}}>Subscribe</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
    )
}