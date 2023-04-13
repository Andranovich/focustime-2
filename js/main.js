import Controls from "./controls.js"
import Timer from "./timer.js"
import { elements } from "./elements.js"


const {
    buttonPlay,
    buttonPlayActive,
    buttonStop,
    buttonStopActive,
    buttonPlus,
    buttonPlusActive,
    buttonLess,
    buttonLessActive,
    buttonTree,
    buttonTreeActive,
    buttonCloud,
    buttonCloudActive,
    buttonHouse,
    buttonHouseActive,
    buttonFire,
    buttonFireActive,
    minutesDisplay,
    secondsDisplay,
    sliderTree,
    sliderTreeActive,
    sliderCloud,
    sliderCloudActive,
    sliderHouse,
    sliderHouseActive,
    sliderFire,
    sliderFireActive,
    imgButtonTree,
    imgButtonCloud,
    imgButtonHouse,
    imgButtonFire,
    buttonTreeDark,
    buttonCloudDark,
    buttonHouseDark,
    buttonFireDark,    
} = elements

const controls = Controls({
    buttonPlay,
    buttonPlayActive,
    buttonStop,
    buttonStopActive,
    buttonPlus,
    buttonPlusActive,
    buttonLess,
    buttonLessActive,
    buttonTree,
    buttonTreeActive,
    buttonCloud,
    buttonCloudActive,
    buttonHouse,
    buttonHouseActive,
    buttonFire,
    buttonFireActive,
    sliderTree,
    sliderTreeActive,
    sliderCloud,
    sliderCloudActive,
    sliderHouse,
    sliderHouseActive,
    sliderFire,
    sliderFireActive,
    imgButtonTree,
    imgButtonCloud, 
    imgButtonHouse,
    imgButtonFire,
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetAllControls: controls.reset,
})


buttonPlay.addEventListener('click', function() {
  
    controls.play()
    timer.countdown()

})

buttonStop.addEventListener('mousedown', function() {
    controls.stop()
})

buttonStopActive.addEventListener('mouseup', function() {
    controls.stopActive()
    controls.reset()
    timer.reset()
})

buttonPlus.addEventListener('mousedown', function() {
    controls.plus()  
})

buttonPlusActive.addEventListener('mouseup', function() {
    controls.plusActive()
    timer.addFiveMinutes()
})

buttonLess.addEventListener('mousedown', function() {
    controls.less()    
})

buttonLessActive.addEventListener('mouseup', function() {
    controls.lessActive()
    timer.subFiveMinutes()
})

// MUSICS

buttonTree.addEventListener('click', function() {    
    controls.tree() 
})

buttonCloud.addEventListener('click', function() {
    controls.cloud()    
})


buttonHouse.addEventListener('click', function() {
    controls.house()
})


buttonFire.addEventListener('click', function() {
    controls.fire()
})


// DARK











