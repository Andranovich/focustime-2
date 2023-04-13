import Sound from "./sounds.js"

const sound = Sound()

export default function Controls({
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
    imgButtonTree,
    imgButtonCloud,
    imgButtonHouse,
    imgButtonFire,
    imgButtonTreeDark,
    imgButtonCloudDark,
    imgButtonHouseDark,
    imgButtonFireDark,
    buttonTreeDark,
    buttonCloudDark,
    buttonHouseDark,
    buttonFireDark,
}) {

    function play(){
        buttonPlay.classList.add('hide')
        buttonPlayActive.classList.remove('hide')
        buttonStop.classList.remove('hide')
        buttonStopActive.classList.add('hide')
        
    }

    function playDark() {
        buttonPlayDark.classList.add('hide')
        buttonPlayDarkActive.classList.remove('hide')
        buttonStopDark.classList.remove('hide')
        buttonStopDarkActive.classList.add('hide')
    }

    function stop() {
        buttonStop.classList.add('hide')
        buttonStopActive.classList.remove('hide')     
    }

    function stopDark() {
        buttonStopDark.classList.add('hide')
        buttonStopDarkActive.classList.remove('hide')
    }

    function stopActive() {
            buttonStop.classList.remove('hide')
            buttonStopActive.classList.add('hide')
    }

    function stopDarkActive() {
        buttonStopDark.classList.remove('hide')
        buttonStopDarkActive.classList.add('hide')
    }

    function plus() {
        buttonPlus.classList.add('hide')
        buttonPlusActive.classList.remove('hide')  
    }

    function plusDark() {
        buttonPlusDark.classList.add('hide')
        buttonPlusDarkActive.classList.remove('hide') 
    }

    function plusActive() {
        buttonPlus.classList.remove('hide')
        buttonPlusActive.classList.add('hide')
    }

    function plusDarkActive() {
        buttonPlusDark.classList.remove('hide')
        buttonPlusDarkActive.classList.add('hide')
    }
    
    function less() {
        buttonLess.classList.add('hide')
        buttonLessActive.classList.remove('hide')
    }

    function lessDark() {
        buttonLessDark.classList.add('hide')
        buttonLessDarkActive.classList.remove('hide')
    }

    function lessActive() {
        buttonLess.classList.remove('hide')
        buttonLessActive.classList.add('hide')
    }

    function lessDarkActive() {
        buttonLessDark.classList.remove('hide')
        buttonLessDarkActive.classList.add('hide')
    }

    function tree() {

        if(!buttonTree.classList.contains('active')) {            
            buttonTree.classList.add('active')
            console.log('sadasd')           
            sliderTree.classList.add('active')
            imgButtonTree.setAttribute('src', './assets/light buttons/tree active.svg')    
            disableButtons('tree')
            sound.pressToStop()
            sound.changeAudio("audioTree") 
         } else {
            buttonTree.classList.remove('active')
            sliderTree.classList.remove('active')
            imgButtonTree.setAttribute('src', './assets/light buttons/tree.svg')

            sound.removeAudio()
            resetSound()
        }    
    }

    function treeDark() {
        if(!buttonTreeDark.classList.contains('active')) {            
            buttonTreeDark.classList.add('active')
            imgButtonTreeDark.setAttribute('src', './assets/dark buttons/darkTreeActive.svg') 
            disableButtons('tree-dark')
            sound.pressToStop()
            sound.changeAudio("audioTree")            
         } else {
            buttonTreeDark.classList.remove('active')
            imgButtonTreeDark.setAttribute('src', './assets/dark buttons/darkTree.svg')

            sound.removeAudio()
            resetSound()
        }
    }

    function cloud() {
        if(!buttonCloud.classList.contains('active')) {            
            buttonCloud.classList.add('active')
            sliderCloud.classList.add('active')
            imgButtonCloud.setAttribute('src', './assets/light buttons/cloud active.svg')    
            disableButtons('cloud')
            sound.pressToStop()
            sound.changeAudio("audioCloud")            
         } else {
            buttonCloud.classList.remove('active')
            sliderCloud.classList.remove('active')
            imgButtonCloud.setAttribute('src', './assets/light buttons/cloud.svg')

            sound.removeAudio()
            resetSound()
        }

        
    }

    function cloudDark() {
        if(!buttonCloudDark.classList.contains('active')) {            
            buttonCloudDark.classList.add('active')
            imgButtonCloudDark.setAttribute('src', './assets/dark buttons/darkCloudActive.svg') 
            disableButtons('cloud-dark')
            sound.pressToStop()
            sound.changeAudio("audioCloud")            
         } else {
            buttonCloudDark.classList.remove('active')
            imgButtonCloudDark.setAttribute('src', './assets/dark buttons/darkCloud.svg')

            sound.removeAudio()
            resetSound()
        }
    }

    function house() {
        if(!buttonHouse.classList.contains('active')) {            
            buttonHouse.classList.add('active')
            sliderHouse.classList.add('active')
            imgButtonHouse.setAttribute('src', './assets/light buttons/house active.svg')    
            disableButtons('house')
            sound.pressToStop()
            sound.changeAudio("audioHouse")            
         } else {
            buttonHouse.classList.remove('active')
            sliderHouse.classList.remove('active')
            imgButtonHouse.setAttribute('src', './assets/light buttons/house.svg')

            sound.removeAudio()
            resetSound()
        } 
    }

    function houseDark() {
        if(!buttonHouseDark.classList.contains('active')) {            
            buttonHouseDark.classList.add('active')
            imgButtonHouseDark.setAttribute('src', './assets/dark buttons/darkHouseActive.svg') 
            disableButtons('house-dark')
            sound.pressToStop()
            sound.changeAudio("audioHouse")            
         } else {
            buttonHouseDark.classList.remove('active')
            imgButtonHouseDark.setAttribute('src', './assets/dark buttons/darkHouse.svg')

            sound.removeAudio()
            resetSound()
        }
    }

    function fire() {
        if(!buttonFire.classList.contains('active')) {            
            buttonFire.classList.add('active')
            sliderFire.classList.add('active')
            imgButtonFire.setAttribute('src', './assets/light buttons/fire active.svg')    
            disableButtons('fire')
            sound.pressToStop()
            sound.changeAudio("audioFire")            
         } else {
            buttonFire.classList.remove('active')
            sliderFire.classList.remove('active')
            imgButtonFire.setAttribute('src', './assets/light buttons/fire.svg')

            sound.removeAudio()
            resetSound()
        } 
    }

    function fireDark() {
        if(!buttonFireDark.classList.contains('active')) {            
            buttonFireDark.classList.add('active')
            imgButtonFireDark.setAttribute('src', './assets/dark buttons/darkFireActive.svg')
            disableButtons('fire-dark')
            sound.pressToStop()
            sound.changeAudio("audioFire")            
         } else {
            buttonFireDark.classList.remove('active')
            imgButtonFireDark.setAttribute('src', './assets/dark buttons/darkFire.svg')

            sound.removeAudio()
            resetSound()
        }
    }

    function reset() {
        buttonPlay.classList.remove('hide')
        buttonPlayActive.classList.add('hide')    
    }

    function resetDark() {
        buttonPlayDark.classList.remove('hide')
        buttonPlayDarkActive.classList.add('hide') 
    }

    function resetSound() {
        buttonTree.classList.remove('hide')
        buttonCloud.classList.remove('hide')
        buttonHouse.classList.remove('hide')
        buttonFire.classList.remove('hide')   

    }

    function disableButtons(type) {
        if(type === 'tree') {
            buttonCloud.classList.remove('active')
            sliderCloud.classList.remove('active')
            buttonHouse.classList.remove('active')
            sliderHouse.classList.remove('active')
            buttonFire.classList.remove('active')
            sliderFire.classList.remove('active')
            imgButtonCloud.setAttribute('src', './assets/light buttons/cloud.svg')
            imgButtonHouse.setAttribute('src', './assets/light buttons/house.svg')
            imgButtonFire.setAttribute('src', './assets/light buttons/fire.svg')     
        }

        if(type === 'tree-dark') {
            buttonCloudDark.classList.remove('active')
            buttonHouseDark.classList.remove('active')
            buttonFireDark.classList.remove('active')
            imgButtonCloudDark.setAttribute('src', './assets/dark buttons/darkCloud.svg')
            imgButtonHouseDark.setAttribute('src', './assets/dark buttons/darkHouse.svg') 
            imgButtonFireDark.setAttribute('src', './assets/dark buttons/darkFire.svg')     
        }

        if(type === 'cloud') {
            buttonTree.classList.remove('active')
            sliderTree.classList.remove('active')
            buttonHouse.classList.remove('active')
            sliderHouse.classList.remove('active')
            buttonFire.classList.remove('active')
            sliderFire.classList.remove('active')
            imgButtonTree.setAttribute('src', './assets/light buttons/tree.svg')
            imgButtonHouse.setAttribute('src', './assets/light buttons/house.svg')
            imgButtonFire.setAttribute('src', './assets/light buttons/fire.svg')
        }

        if(type === 'cloud-dark') {
            buttonTreeDark.classList.remove('active')
            buttonHouseDark.classList.remove('active')
            buttonFireDark.classList.remove('active')
            imgButtonTreeDark.setAttribute('src', './assets/dark buttons/darkTree.svg')
            imgButtonHouseDark.setAttribute('src', './assets/dark buttons/darkHouse.svg') 
            imgButtonFireDark.setAttribute('src', './assets/dark buttons/darkFire.svg')        
        }

        if(type === 'house') {
            buttonTree.classList.remove('active')
            sliderTree.classList.remove('active')
            buttonCloud.classList.remove('active')
            sliderCloud.classList.remove('active')
            buttonFire.classList.remove('active')
            sliderFire.classList.remove('active')
            imgButtonTree.setAttribute('src', './assets/light buttons/tree.svg')
            imgButtonCloud.setAttribute('src', './assets/light buttons/cloud.svg')
            imgButtonFire.setAttribute('src', './assets/light buttons/fire.svg')
        }

        if(type === 'house-dark') {
            buttonTreeDark.classList.remove('active')
            buttonCloudDark.classList.remove('active')
            buttonFireDark.classList.remove('active')
            imgButtonTreeDark.setAttribute('src', './assets/dark buttons/darkTree.svg')
            imgButtonCloudDark.setAttribute('src', './assets/dark buttons/darkCloud.svg')
            imgButtonFireDark.setAttribute('src', './assets/dark buttons/darkFire.svg')
        }
        
        if(type === 'fire') {
            buttonTree.classList.remove('active')
            sliderTree.classList.remove('active')
            buttonCloud.classList.remove('active')
            sliderCloud.classList.remove('active')
            buttonHouse.classList.remove('active')
            sliderHouse.classList.remove('active')
            imgButtonTree.setAttribute('src', './assets/light buttons/tree.svg')
            imgButtonCloud.setAttribute('src', './assets/light buttons/cloud.svg')
            imgButtonHouse.setAttribute('src', './assets/light buttons/house.svg')
        }

        if(type === 'fire-dark') {
            buttonTreeDark.classList.remove('active')
            buttonCloudDark.classList.remove('active')
            buttonHouseDark.classList.remove('active')
            imgButtonTreeDark.setAttribute('src', './assets/dark buttons/darkTree.svg')
            imgButtonCloudDark.setAttribute('src', './assets/dark buttons/darkCloud.svg')
            imgButtonHouseDark.setAttribute('src', './assets/dark buttons/darkHouse.svg')
        }

    }

    

    return {
        play,
        playDark,
        stop,
        stopDark,
        stopActive,
        stopDarkActive,
        plus,
        plusDark,
        plusActive,
        plusDarkActive,
        less,
        lessDark,
        lessActive,
        lessDarkActive,
        tree,
        cloud,
        house,
        fire,
        reset,
        resetDark,
        resetSound,
        disableButtons,
        treeDark,
        cloudDark,
        houseDark,
        fireDark,

    }

}





