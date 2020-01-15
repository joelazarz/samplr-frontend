import React from 'react'

const Guide = () => {
    return (
        <div className="landing-guide">
        Welcome to Sampler(), a social and interactive digital audio workstation. Sampler() allows you to upload audio files, save regions and notes within the audio’s waveform, trigger region playback in real-time and adjust playback speed/pitch while you play.
        <br/>
        <br/>
        Please sign-up or login(if you’ve already signed up). You will automatically be redirected to the discovery page, where you’ll be able to browse all “kits” uploaded by our users. Your password will NEVER be accessible to the developers or other users. Auto-login is made possible by saving an encrypted token in the local storage of your browser. If you have any questions or concerns, please email josephlazarz@gmail.com. 
        <br/>
        <br/>
        Once you load up an individual kit, you’ll be able to load in regions, drag them around the waveform, adjust their length and begin triggering them with keyboard commands, which can be found in the Guide (lower right-hand side on each kit). 
        <br/>
        <br/>
        Not only can you improvise with your own custom regions, you’ll be able to save regions, making them accessible to other users. These will appear on the right hand side of your screen. Loading saved regions into the waveform is easy, just cue them with the + button, then, underneath the region space you want to use, press “load”.
        <br/>
        <br/>
        Using the memory region in the toolbar below the waveform, you can save sections of the waveform for future use while also making it available to other users. 
        <br/>
        <br/>
        Sampler() is currently in its earliest beta version, please explore the possibilities and if you come across a problem, or have any suggestions, please email josephlazarz@gmail.com. Thank you so much for being a part of this, your participation helps to grow this platform into resource with hopes to lower barriers of entry into DJing, music production and the art of sampling. 

        </div>
    )
}

export default Guide
