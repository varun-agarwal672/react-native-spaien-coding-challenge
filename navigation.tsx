import {View,Text} from "react-native"
const types = [
    {
        text:"Tracker"
    },
    {
        text:"Workouts"
    },
    {
        text:"Programs"
    },
    {
        text:"Teachers"
    },
    {
        text:"Brands"
    }
]
export default function Navigation({...props}){
    return (
        <View style={{backgroundColor: props.colorScheme}}>
            <View style={{paddingTop:20,marginBottom:80}}>
                <Header/>
            </View>
            <View style={{paddingBottom:50}}>
                <Categories/>
            </View>
        </View>
    )
}

const Header = () => (
    <Text style={{fontWeight:"bold",flexDirection:'row', alignSelf:'center',color:"white",fontSize:20}}>Movement</Text>
)
const Categories = () => (
    <View style={{flexDirection:"row"}}>
        {types.map((type,index) => (
            <View key={index} style={{alignItems:"center",marginRight:20}}>
                <Text style={{color:"white",fontSize:17,fontWeight:"bold"}}>{type.text}</Text>
            </View>
        ))}
    </View>
)