class Volume{
    constructor(){
        this.Audio_file = document.getElementById('audio_file')
        this.Audio_file.volume = 50/100
    
        this.volume_range = document.getElementById('volume-range')
        this.volume_range.addEventListener('change',()=>{
            this.Audio_file.volume = this.volume_range.value/100
        
        });
        this.volume_speed = document.getElementById('volume-speed')
        this.volume_speed.playbackRate = 1
        this.volume_speed.addEventListener('change',()=>{
            this.Audio_file.volume = this.volume_speed.value/100
        });
    }

}
onload = new Volume();