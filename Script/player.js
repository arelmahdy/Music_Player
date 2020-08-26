class Player{
    constructor(){
    var heightmain =document.getElementById('player')
    heightmain.style.height = screen.height + 'px'
    if(screen.width<620){
        heightmain.style.width = screen.width + 'px'
    }
    var heighdiv = document.getElementById('content')
    heighdiv.style.height = screen.height -300 + 'px'
    }
}

onload = new Player()

class Audio_player{
    constructor(){
        this.Audio_file = document.getElementById('audio_file')
        this.title_radio = document.getElementById('title_radio')
        this.play_pause_button = document.getElementById('play_pause')
        this.isPlayed;
        this.play_pause_button.addEventListener("click",()=>{
            this.play_pause()
        });
           
            this.name_radio = [];
            this.name_radio [0] = 'اذاعة القران الكريم'
            this.name_radio [1] = 'اذاعة البى بى سى'
            this.name_radio [2] = 'اذاعة الرياض'

            this.source_audio = []
            this.source_audio [0] = 'http://ample-02.radiojar.com/8s5u5tpdtwzuv?rj-ttl=5&rj-tok=AAABcnaeurQAfoMMQdD6ppt4wQ'
            this.source_audio [1] = 'http://bbcwssc.ic.llnwd.net/stream/bbcwssc_mp1_ws-araba'
            this.source_audio [2] = 'http://87.98.130.255:8234/stream'
            this.server = 0

            this.setresource()

            document.getElementById('next').addEventListener('click',()=>{
                if(this.server<this.source_audio.length-1){
                    ++this.server
                    this.isPlayed = false;
                }else{
                    this.server = 0
                }
                localStorage.setItem('Save-Position',this.server)
                this.setresource()
                

            })
            document.getElementById('back').addEventListener('click',()=>{
                if(this.server>0){
                    --this.server
                    this.isPlayed = false;
                }else{
                    this.server = this.source_audio.length-1
                }
                localStorage.setItem('Save-Position',this.server)
                this.setresource()  
                
            })
        
        }
        setresource(){
            if(localStorage.getItem('Save-Position')!=null){
                this.server = localStorage.getItem('Save-Position')
            }
            this.Audio_file.src = this.source_audio[this.server]
            this.title_radio.innerHTML = this.name_radio[this.server]
            this.play_pause()
        }

        play_pause(){
            if(this.isPlayed==false){
                this.play_pause_button.src = './img/pause.png'
                this.Audio_file.play();
                this.isPlayed = true;
            }else{
                this.play_pause_button.src = './img/play.png'
                this.Audio_file.pause();
                this.isPlayed = false;
            }
        }
    }
    onload = new Audio_player()





    
