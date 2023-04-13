
import Controls from "./controls.js"
import { elements } from "./elements.js";

export default function Timer({
    minutesDisplay,
    secondsDisplay,
    resetAllControls,
}) {
    
    let seconds = "00"
    let minutes = "25"
    let timerTimeOut

    function updateTimerDisplay(minutes, seconds) {
        minutesDisplay.forEach(element => {
            element.textContent =  String(minutes).padStart(2, '0') 
        });
        secondsDisplay.forEach(element => {
            element.textContent = String(seconds).padStart(2, '0') 
        });
        
    }
    
    function countdown() {
        if(minutes === 0) {
            return
        }
        timerTimeOut = setTimeout(function() {
            secondsDisplay.forEach(element => {
                seconds =  Number(element.textContent) 
            });
            minutesDisplay.forEach(element => {
                minutes =  Number(element.textContent) 
            });

            if(minutes <= 0) {
                resetAllControls()
                
                return
            }
            
            if(seconds <= 0) {
                seconds = 60
                
                
                minutesDisplay.forEach(element => {
                    element.textContent = String(minutes - 1).padStart(2, '0')  
                });
                minutes = minutes - 1
            }      
            
            console.log(secondsDisplay)
            secondsDisplay.forEach(element => {
                element.textContent = String(seconds - 1).padStart(2, '0')  
            });   
            countdown()
        }, 1000)
    }
    
    function reset() {   

       if(timerTimeOut) {
        let newMinutes = seconds > 0 ? Number(minutes) + 1 : Number(minutes)
        minutes = newMinutes
        seconds = 0
        updateTimerDisplay(newMinutes, seconds)
       }

        clearTimeout(timerTimeOut)
        timerTimeOut = undefined
    }

    function addFiveMinutes() {
        minutes = (Number(minutes) + 5)

        if(!timerTimeOut) {            
            updateTimerDisplay(minutes, seconds)
            return
        }

        let newSeconds = seconds === 0 ? 0 : seconds - 1
        updateTimerDisplay(minutes, newSeconds)
    }

    function subFiveMinutes() {
        if(minutes < 5) {
            minutes = 0
            seconds = 0
            updateTimerDisplay(0, 0)
            return
        } 

        minutes = (Number(minutes) - 5)
        
        if(!timerTimeOut) {            
            updateTimerDisplay(minutes, seconds)
            return
        }
        let newSeconds = seconds === 0 ? 0 : seconds - 1
        updateTimerDisplay(minutes, newSeconds)
    }
    

    return {
        countdown,
        reset,
        updateTimerDisplay,
        addFiveMinutes,
        subFiveMinutes
    }
}



