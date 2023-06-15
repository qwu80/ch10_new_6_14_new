let sceneCount = 0;

let StartScroll = () => {
  let controller = new ScrollMagic.Controller();

  d3fourlevels();
  updatefourlevels(75);
  // d3bands();
  d3bands2();
  bands_function();
  d3bands_0();
  d3bands_0_5();
  d3bands();
  d3bands_2();
  d3bands_3();
  d3bands_3_1();
  

  let scene_0 = new ScrollMagic.Scene({
      triggerElement: '#scene_0'
    })
    .setClassToggle('#scene_0', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 0) {
        sceneCount = 0.5;
        
        

      } else {
        sceneCount = 0;
      }
    })
    .addTo(controller);


    let scene_0_5 = new ScrollMagic.Scene({
      triggerElement: '#scene_0_5'
    })
    .setClassToggle('#scene_0_5', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 0.5) {
        sceneCount = 0.7;
        
        
      } else {
        sceneCount = 0.5;
      }
    })
    .addTo(controller);

    let scene_1 = new ScrollMagic.Scene({
      triggerElement: '#scene_1'
    })
    .setClassToggle('#scene_1', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 0.7) {
        sceneCount = 1;
    
        document.getElementById("nuclei-freeze1").checked = false;

    
        document.getElementById("temp1").value = 270
        temp = 270
        constant_temperature=270
       
        resetGraph()
      } else {
        sceneCount = 0.7;
        // if (document.getElementById("nuclei-freeze").checked= true){
          // document.getElementById("nuclei-freeze").checked = false
          document.getElementById("volume1").value = 1
          setVolume(1)
        // }
        resetGraph()
      }
    })
    .addTo(controller);


  

  let scene_2 = new ScrollMagic.Scene({
      triggerElement: '#scene_2'
    })
    .setClassToggle('#scene_2', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 1) {
        sceneCount = 2;

        temp=270
        // constant_fermi = Math.round(1000*-0.28*0.026)/1000
        nn = 4.6*Math.pow(10,15)*Math.pow(temp,1.5)*Math.exp(-1.12/(2*0.026/300*temp)) //new wrong
    let inside = (electron_add+Math.pow((Math.pow(electron_add,2)+4*Math.pow(nn,2)),1/2))/(2*nn)
    constant_fermi_positive = (0.026/300)*temp * Math.log(inside)+(-0.28)*(0.026/300*temp)

        

        document.getElementById("nuclei-freeze2").checked = false;
        document.getElementById("temp2").value = 270
        document.getElementById("slider1").value = 130
       
        resetGraph()
        add_e("130");
        
      } else {
        sceneCount = 1;
        // if(document.getElementById("nuclei-freeze").checked = true){
          // document.getElementById("nuclei-freeze").checked = false
        // }
        document.getElementById("nuclei-freeze1").checked = false;

    
        document.getElementById("temp1").value = 270
        temp = 270
        constant_temperature=270
       
        resetGraph()

      }
    })
    .addTo(controller);

  let scene_3 = new ScrollMagic.Scene({
      triggerElement: '#scene_3'
    })
    .setClassToggle('#scene_3', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 2) {
        sceneCount = 3;
        

       

        
        temp =270
        document.getElementById("nuclei-freeze3").checked = false;
        document.getElementById("temp3").value = 270
        document.getElementById("slider2").value = 130
        document.getElementById("temp1").value = 270
        constant_temperature=270
        nn = 4.6*Math.pow(10,15)*Math.pow(temp,1.5)*Math.exp(-1.12/(2*0.026/300*temp)) //new wrong
    let inside = (hole_add+Math.pow((Math.pow(hole_add,2)+4*Math.pow(nn,2)),1/2))/(2*nn)
    constant_fermi_negative = -((0.026/300)*temp * Math.log(inside))+((-0.28)*(0.026/300*temp))

        resetGraph()
        add_h(130);
    
      } else {
        sceneCount = 2;
        constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
        document.getElementById("nuclei-freeze2").checked = false;
        document.getElementById("temp2").value = 270
        document.getElementById("slider1").value = 130
        temp = 270
       
        resetGraph()
      

       
        // setTemperature(270)

        add_e(130);
      }
    })
    .addTo(controller);



    let scene_3_end = new ScrollMagic.Scene({
      triggerElement: '#scene_3_end'
    })
    .setClassToggle('#scene_3_end', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 3) {
        sceneCount = 3.1;
        resetGraph()
        constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
        add_e(130);
        temp =20

        document.getElementById("nuclei-freeze3").checked = false;
        document.getElementById("slider3").value = 20
        // document.getElementById("add_e_text_2").value = 130
        document.getElementById("slider4").value = 130

        // setTemperature(20); 
      

        // electron_add=0
        // hole_add=0
        // appearArray_s1 = []
        // whiteArray_e=[]
        // blackArray_h=[]
      
       
       
        
      } else {
        sceneCount = 3;
        resetGraph()
        // appearArray_s1 = []
        // electron_add=0
        // hole_add=0
        // whiteArray_e=[]
        // blackArray_h=[]
        add_h(130);
        temp =270
        document.getElementById("nuclei-freeze3").checked = false;
        document.getElementById("temp3").value = 270
        document.getElementById("slider2").value = 130
        // setTemperature(270)
       
      }
    })
    .addTo(controller);

  let scene_4 = new ScrollMagic.Scene({
      triggerElement: '#scene_4'
    })
    .setClassToggle('#scene_4', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 3.1) {
       
        
        sceneCount = 4;
      } else {
        sceneCount = 3.1;
      }
    })
    .addTo(controller);

   

  
}