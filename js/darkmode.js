import { elements } from "./elements.js"
import Controls from "./controls.js"
import Timer from "./timer.js"

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
    buttonSun,
    buttonMoon,
    backGround,
    buttonPlayDark,
    buttonStopDark,
    buttonPlusDark,
    buttonLessDark,
    buttonPlayDarkActive,
    buttonStopDarkActive,
    buttonPlusDarkActive,
    buttonLessDarkActive,
    lightMode,
    darkMode,
    buttonTreeDark,
    buttonCloudDark,
    buttonHouseDark,
    buttonFireDark,
    imgButtonTreeDark,
    imgButtonCloudDark,
    imgButtonHouseDark
    
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
    buttonPlayDark,
    buttonStopDark,
    buttonPlusDark,
    buttonLessDark,
    buttonPlayDarkActive,
    buttonStopDarkActive,
    buttonPlusDarkActive,
    buttonLessDarkActive,
    sliderTree,
    sliderCloud,
    sliderHouse,
    sliderFire,    
    buttonTreeDark,
    buttonCloudDark,
    buttonHouseDark,
    buttonFireDark,
    imgButtonTreeDark,
    imgButtonCloudDark,
    imgButtonHouseDark
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetAllControls: controls.reset,
})

buttonSun.addEventListener('click', function() {
    darkMode.classList.remove('hide')
    lightMode.classList.add('hide')
})
    
buttonMoon.addEventListener('click', function()  {
    darkMode.classList.add('hide')
    lightMode.classList.remove('hide')
})


// BUTTONS

buttonPlayDark.addEventListener('click', function() {
    controls.playDark()
    timer.countdown()
})

buttonStopDark.addEventListener('mousedown', function() {
    controls.stopDark()
})

buttonStopDarkActive.addEventListener('mouseup', function() {
    controls.stopDarkActive()
    controls.resetDark()
    timer.reset()
})

buttonPlusDark.addEventListener('mousedown', function() {
    controls.plusDark() 
})

buttonPlusDarkActive.addEventListener('mouseup', function() {
    controls.plusDarkActive()
    timer.addFiveMinutes()
})

buttonLessDark.addEventListener('mousedown', function() {
    controls.lessDark()    
})

buttonLessDarkActive.addEventListener('mouseup', function() {
    controls.lessDarkActive()
    timer.subFiveMinutes()
})

//MUSICS

buttonTreeDark.addEventListener('click', function() {
    controls.treeDark()
})

buttonCloudDark.addEventListener('click', function() {
    controls.cloudDark()
})

buttonHouseDark.addEventListener('click', function() {
    controls.houseDark()
})

buttonFireDark.addEventListener('click', function() {
    controls.fireDark()
})