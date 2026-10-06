import React, { useState } from 'react'
import { ActivityIndicator, View, Button } from 'react-native'

const Loader = () => {

    const [show, setShow] = useState(true);

    const displayLoader = () => {
        setShow(true);

        setTimeout(()=>{
            setShow(false);
        }, 3000)
    }

  return (
    <View>
        {
            show ?
            <ActivityIndicator 
            size={200}
            color="gold"
            animating={show}
        />
         : null


        }

        <Button
            title='Show loader'
            onPress={displayLoader}
        />
    </View>
  )
}

export default Loader