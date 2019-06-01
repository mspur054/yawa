import React from 'react';


const DewPointWarning = ({dewPoint, ...other}) => {
    function calcDewPointEffect(dewPoint){
        if (18 <= dewPoint < 21){
            return 'Easy running is difficult, workouts racing will be very difficult'
        }else if (21 <= dewPoint < 23){
            return 'Easy running is difficult, workouts and racing will be very difficult'
        }else if (23 <= dewPoint < 25){
            return 'Running will be very difficult'
        }else if (dewPoint >= 25){
            'Running is not recommended'
        }
    }
    return(
        <div>Dew point is High, </div>
    )

}

export default DewPointWarning