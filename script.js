const days=[' thứ 2 ',' thứ 3 ',' thứ 4 ', ' thứ 5 ',' thứ 6 ',' thứ 7 ',' chủ nhật ']
document.addEventListener('DOMContentLoaded', (event) => {
    var dayindex = 0
    document.getElementById('day').innerText ="Tối"+ days[dayindex];
    document.getElementById('day').style.paddingLeft = '5px';  
    document.getElementById('day').style.paddingRight = '5px';  

    const openbtn = document.getElementById('openbtn')
    const opened_letter = document.getElementById('opened_letter')

    openbtn.addEventListener('click', (event)=>{
        opened_letter.style.display=  'flex'
        document.getElementById('letter').style.display='none'
        document.querySelector('.btn_container').style.display = 'flex'
    })
    const disagreebtn = document.getElementById('disagreebtn')

    document.getElementById('yesbtn').addEventListener('click', (event)=>{
        opened_letter.style.display=  'none'
        document.getElementById('sothat').style.display='flex'
        setTimeout(()=>{
        document.getElementById('sothat').style.display='none'
        document.getElementById('invitationtxt').style.display='flex'
        document.getElementsByClassName('btn_container')[1].style.display= 'flex'
        document.getElementById('agreebtn').style.display='flex'
        disagreebtn.style.display='flex'

        },1000)

    })
    document.getElementById('nobtn').addEventListener('click', (event)=>{
        document.getElementById('so').style.display='flex'
        ++dayindex
        if(dayindex>6) dayindex=0
    document.getElementById('day').innerText ="Tối"+ days[dayindex];

    })
    disagreebtn.addEventListener('click', (event)=>{
        disagreebtn.style.position = 'fixed'
        var top = (Math.random()*0.6+0.2)*100
        var left = (Math.random()*0.6+0.2)*100
        disagreebtn.style.top=`${top}%`
        disagreebtn.style.left=`${left}%`

    })
    document.getElementById('agreebtn').addEventListener('click', (event)=>{
       setTimeout(()=>{
document.getElementById('ending').style.display='flex'
       },800)
        
    document.getElementById('day1').innerText = days[dayindex];
    document.getElementById('day1').style.paddingLeft = '0.5rem';  
    document.getElementById('day1').style.paddingRight = '0.5rem';  
    document.getElementById('invitationtxt').style.display='none'
    document.getElementById('agreebtn').style.display='none'
    document.getElementById('disagreebtn').style.display='none'
       document.body.style.backgroundImage = 'url("./images/bobabg.jpg")'
      const images =  document.querySelectorAll('img')
      images.forEach(img=>{
        img.style.display = 'none'
      })
    })
});