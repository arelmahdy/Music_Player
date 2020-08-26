class Color{
    constructor(){
        this.Color1 = document.getElementById('color1')
        this.Color1.addEventListener('click',()=>{
            this.select_color('color1')
        });
        this.Color2 = document.getElementById('color2')
        this.Color2.addEventListener('click',()=>{
            this.select_color('color2')
        });
        this.Color3 = document.getElementById('color3')
        this.Color3.addEventListener('click',()=>{
            this.select_color('color3')
        });
        this.Color4 = document.getElementById('color4')
        this.Color4.addEventListener('click',()=>{
            this.select_color('color4')
        });

        if(localStorage.getItem('color')==null){
            document.body.style.background = "linear-gradient(to left,rgba(238, 32, 32, 0.911),rgba(230, 190, 105, 0.61))"
        }
        this.select_color(localStorage.getItem('color'));
    }


    select_color(color){
        if(color=='color1'){
            document.body.style.background = 'linear-gradient(to left,rgba(238, 32, 32, 0.911),rgba(230, 190, 105, 0.61))'   
        }
        else if(color=='color2'){
            document.body.style.background = 'linear-gradient(to left,rgba(37, 151, 218, 0.966),rgb(3, 59, 133))'    
        }  
        else if(color=='color3'){
            document.body.style.background = 'linear-gradient(to left,rgba(70, 28, 224, 0.103),rgb(236, 60, 221))'    
        }
        else if(color=='color4'){
            document.body.style.background = 'linear-gradient(to left,rgba(28, 224, 77, 0.103),rgb(142, 163, 21))'    
        } 
        localStorage.setItem('color',color)
    }
}
onload = new Color();
