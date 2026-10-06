import React, { useEffect, useState } from 'react'
import { View, Button, Text } from 'react-native'

const HooksDemo = () => {

    const [count, setCount] = useState(0);
    const [data, setData] = useState(100);
    const [show, setShow] = useState(true);


    //empty vaye mount ma matra call
    //Empty array vaye all ma call
    //count vaye count change ma call
    useEffect(()=>{
        console.warn("Do some animation")
    },[count])


    useEffect(()=>{
        console.warn("Call APIs")
    },[data])

    return (
        <View>
            <Text style={{ backgroundColor: 'red', fontSize: 30 }}>Hooks Demo</Text>
            <Text style={{ backgroundColor: 'green', fontSize: 30 }}>Count: {count} Data: {data}</Text>
            <Button
                title="Update count"
                onPress={()=>setCount(count+1)}
            />
            <Button
                title="Update Data"
                onPress={()=>setData(data+1)}
            />
            <Button
                title="Toggle child component"
                onPress={()=>setShow(!show)}
            />

            <User info={{data, count}} />
            {
                show ? <Child/>  : null
            }
            
        </View>
    )
}




const User = (props) => {

    useEffect(()=>{
        console.warn("Data Props of user updated");
    }, [props.info.data])
    useEffect(()=>{
        console.warn("Count Props of user updated");
    }, [props.info.count])




    return (
        <View>
            <Text style={{fontSize:30, color:"orange"}}> User component</Text>
            <Text style={{fontSize:20, color:"blue"}}>Data: {props.info.data}</Text>
            <Text style={{fontSize:20, color:"blue"}}>Count: {props.info.count}</Text>
        </View>
    );
}

const Child = () => {

    //Timer use gare background ma chalirakhcha even if component is unmounted

    //So, this is suitable for Timers clear
   useEffect(()=>{
    return ()=> {console.warn("UseEffect called on unmount")}
   })

    return (
        <View>
            <Text style={{fontSize:30, color:"orange"}}> Child component</Text>
        </View>
    );
}



export default HooksDemo