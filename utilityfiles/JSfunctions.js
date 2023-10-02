function freqResPlotter(argsIn){
  modeIn=argsIn["modeIn"]
  if(modeIn==0){
  transferF_V=argsIn["transferF_V"]
  plotO_V=argsIn["plotO_V"]
  R_inputV=argsIn["R_inputV"]
  R_inputLV=argsIn["R_inputLV"]
  L_inputV=argsIn["L_inputV"]
  C_inputV=argsIn["C_inputV"]
}else{
  transferF_V=parseInt(transferF.noUiSlider.get()).toString()
  plotO_V=parseInt(plotO.noUiSlider.get()).toString()
  R_inputV=parseFloat(R_input.noUiSlider.get())
  R_inputLV=parseFloat(R_inputL.noUiSlider.get())
  L_inputV=parseFloat(L_input.noUiSlider.get())
  C_inputV=parseFloat(C_input.noUiSlider.get())

}

theDivId=argsIn["theDivId"]



f0_V=math.round(10 * math.pow(L_inputV* C_inputV,-0.5)* math.pow(10,4.5)/(2 * math.PI) )/10 // in MHz   
R_inputTV=R_inputLV+R_inputV
zeta_V=(1/2)* R_inputTV* math.pow(C_inputV/L_inputV,0.5)* math.pow(10,-1.5)

   f0_VR=f0_V*math.pow(10,6)
 RoverLNorm=  (R_inputLV/( L_inputV * math.pow(10,-9)))/f0_VR
  RToverLNorm=  (R_inputTV/( L_inputV * math.pow(10,-9)))/f0_VR


console.log("freqResPlotter:  R_inputV:"+R_inputV, "; R_inputTV:"+R_inputTV, "; L_inputV:"+L_inputV,  ";C_inputV:"+C_inputV, "zeta_V:"+zeta_V+ ";f0_V:"+f0_V)     



      titleText=""
              
    symbolList=[];colorList=[];shapesL= []; annotationList=[] 
    title= {text: titleText,    font: {family: 'Arial Black',size: 16},xref: 'paper',x: 0.5,xanchor: 'center',y: 0.96,yanchor: 'bottom'}
    PlotMeta=[];PlotMeta["shapes"]=shapesL;PlotMeta["title"]=title;PlotMeta['typex']='log';//PlotMeta['typey']='log'
    
    PlotMeta["xexponentformat"]= "SI"
    PlotMeta["xticksuffix"]= "Hz"
    PlotMeta["xautorange"]=true
    //PlotMeta["xtickformat"]=   "0.f"
    
    PlotMeta["yexponentformat"]= "SI"
    PlotMeta["yticksuffix"]= ""
    PlotMeta["yautorange"]=true
    //PlotMeta["ytickformat"]=   "0.f"
    
     dataT = [];
 f0_VRlog=math.log10(f0_VR)
    fmax=math.round(math.log10(f0_V)+6)+1.1
    fmin=6.3
   var fValues0= math.range(fmin,fmax, 0.01).toArray() 
    fValues0.push(f0_VRlog)
     fValues0.sort()
   f0_index=fValues0.indexOf(f0_VRlog)

   var fValues= fValues0.map(x=>  math.pow(10,x))
  

  // 
 
   if( transferF_V==0){  ///R out
 y1values=fValues.map(f=> math.pow(10,9)* (R_inputV/L_inputV) * 2 * math.PI * f/math.pow( math.pow(math.pow(2*math.PI*f0_VR,2)-math.pow(2*math.PI*f,2),2)+4* math.pow(zeta_V,2)*math.pow(2*math.PI*f0_VR,2)*math.pow(2*math.PI*f,2),0.5  ) )  
  }
  
    if( transferF_V==1){  ///L out
y1values=fValues.map(f=> math.pow( math.pow(2*math.PI*f,4)+math.pow(2* math.PI * f * R_inputLV/( L_inputV * math.pow(10,-9)) ,2),0.5   )/math.pow( math.pow(math.pow(2*math.PI*f0_VR,2)-math.pow(2*math.PI*f,2),2)+4*math.pow(zeta_V,2)*math.pow(2*math.PI*f0_VR,2)*math.pow(2*math.PI*f,2),0.5  )) 
  }
  
    if( transferF_V==2){     //cout
      y1values=fValues.map(f=> math.pow(2*math.PI*f0_VR,2)/math.pow( math.pow(math.pow(2*math.PI*f0_VR,2)-math.pow(2*math.PI*f,2),2)+4* math.pow(zeta_V,2)*math.pow(2*math.PI*f0_VR,2)*math.pow(2*math.PI*f,2),0.5  ) )  
    }
    
   if( transferF_V==3){  ///R+L out
        y1values=fValues.map(f=> math.pow( math.pow(2*math.PI*f,4)+math.pow(2* math.PI * f * R_inputTV/( L_inputV * math.pow(10,-9)),2),0.5   )/math.pow( math.pow(math.pow(2*math.PI*f0_VR,2)-math.pow(2*math.PI*f,2),2)+4*math.pow(zeta_V,2)*math.pow(2*math.PI*f0_VR,2)*math.pow(2*math.PI*f,2),0.5  )) 

  }

  if( transferF_V==4){  ///R+C out
 y1values=fValues.map(f=> math.pow( math.pow(math.pow(10,9)* (R_inputV/L_inputV) * 2 * math.PI * f,2) +math.pow(2*math.PI*f0_VR,4) ,0.5  )  /math.pow( math.pow(math.pow(2*math.PI*f0_VR,2)-math.pow(2*math.PI*f,2),2)+4* math.pow(zeta_V,2)*math.pow(2*math.PI*f0_VR,2)*math.pow(2*math.PI*f,2),0.5  ) )  
  }
  
  
    if( transferF_V==5){  ///L+C out
y1values=fValues.map(f=> math.pow(math.pow(math.pow(2*math.PI*f,2) -math.pow(2*math.PI*f0_VR,2),2)   +math.pow(2* math.PI * f * R_inputLV/( L_inputV * math.pow(10,-9)),2),0.5   )/math.pow( math.pow(math.pow(2*math.PI*f0_VR,2)-math.pow(2*math.PI*f,2),2)+4*math.pow(zeta_V,2)*math.pow(2*math.PI*f0_VR,2)*math.pow(2*math.PI*f,2),0.5  )) 
  }
  
  if(plotO_V==0){y1valuesDB= y1values}else{
  y1valuesDB= y1values.map(xx=>  20*math.log10(xx) )
  }
      
    
    trace = { x: fValues, y: y1valuesDB, name: "H", mode: 'lines', line: { width: 2 }, marker: { size: 8  } ,showlegend:false}
    
   ;dataT.push(trace);
    shapesL=[]
          shapesL.push(  {
        type: 'line',
       // yref: 'paper',
        //xref: 'paper',
        y1: y1valuesDB[f0_index],y0: math.min([0,math.min(y1valuesDB)]),
        x0: f0_VR,x1: f0_VR,
        line:{
            color: 'gray',
            width: 2,
            dash:'dot'
        }
    })
    
              shapesL.push(  {
        type: 'line',
       // yref: 'paper',
        //xref: 'paper',
        y1: y1valuesDB[f0_index],y0:y1valuesDB[f0_index],
        x0: math.pow(10,fmin),x1: f0_VR,
        line:{
           color: 'gray',
            width: 2,
            dash:'dot'
        }
    })
    

    PlotMeta["shapes"]=shapesL
    
        annotationList.push(
          {
       // yref: 'paper',
        //xref: 'paper',
        x:f0_VRlog,
        xanchor: 'left',
        y:y1valuesDB[f0_index],
        yanchor: 'center',
        text: math.round(y1valuesDB[f0_index]*100)/100, //(math.round(theresf/100000)/10)+"MHz",
         //textangle:-90,
         showarrow: true,
                // arrowhead: 7,
                  ax: 20,                ay: 0
       
      }
    )

    PlotMeta["annotations"]=annotationList;
    PlotMeta["lorientation"]="h";  PlotMeta["legendposy"]="0.95";  PlotMeta["legendposx"]="0.35"
    PlotMeta["xName"] = "$\\Large{f\\text{(Hz)}}$"; 
    
     if(plotO_V==0){PlotMeta["yName"] = "$\\Large{|H(f)|}$"}else{PlotMeta["yName"] = "$\\Large{-20log10(|H(f)|)}\\text{(dB)}$"}
    PlotMeta["data"] = dataT; PlotMeta["divid"] = theDivId
    PlotMeta["wheight"] = 400;    //PlotMeta["y2title"] = "$\\Large{\\text{Gain}}$"




   genplotter(PlotMeta)
   
  try {
    
    document.getElementById("efo_Span").innerHTML=f0_V+","

document.getElementById("ezeta_Span").innerHTML=math.round(1000*zeta_V)/1000
    
  }catch (error) { } 




}

function filterMyData(DataIn, filterMeta) { //

    columnKey = filterMeta["columnKey"];  columnValue = filterMeta["columnValue"];


    var returnlistdata = [];
    for (j = 0; j < DataIn.length; j++) {
        var skipthis = 0; if (DataIn[j][columnKey] == undefined) { skipthis = 1 }; //console.log("j:"+j+", "+DataIn[j][columnKey]+", skip="+skipthis)
        if (skipthis == 0) {
       if(columnValue.includes(DataIn[j][columnKey])){
        //console.log(DataIn[j][columnKey])
         
         returnlistdata.push(DataIn[j])
         
       }
        }
        
    }
    return returnlistdata;
}

function genplotter(PlotMeta){ 
  PlotMeta_keys=Object.keys(PlotMeta)
  if(PlotMeta_keys.includes("legend")){legendon=PlotMeta["legend"]}else{legendon=true}

 y2info={

       title: '',
   // titlefont: {color: 'rgb(148, 103, 189)'},
    //tickfont: {color: 'rgb(148, 103, 189)'},
    overlaying: 'y',
    side: 'right'
  }
  if(PlotMeta["y2title"]!=NaN){
    y2info['title']= PlotMeta["y2title"]
  }

    layout = {
      paper_bgcolor: 'rgba(0,0,0,0)',
  plot_bgcolor: 'rgba(0,0,0,0)',
        hovermode : 'x',
     yaxis2: y2info,
      
      
     margin: {  l: 80, r: 150,      b: 50,      t: 10,      pad: 5 },
       height: PlotMeta["wheight"],
       showlegend: legendon,
       legend: {
         itemsizing:'constant',
         "orientation": "v",
         x: 0.85,
         xanchor: 'center',
         y: 0.95
       },
  
         title: {
           font: {
             family: 'Arial Black',
             size: 14
           },
           xref: 'paper',
           x:0.5, 
           xanchor:'center', 
           y:1.08,
           yanchor:'top'
         },
         xaxis: {
           //range: [-1.1, 3],
        
             //showline: true,
           title: {
             text:  PlotMeta["xName"],
             font: {
               family: 'Arial Black',
               size: 14
             //  color: '#7f7f7f'
             }
           },
         },
         yaxis: {
      
                    // rangemode: 'tozero',
             //showline: true,
           title: {
             text: PlotMeta["yName"],
             font: {
               family: 'Arial Black',
               size: 14
               //color: '#7f7f7f'
             }
           }
         }
     };
   
      
     if(PlotMeta_keys.includes("annotations")){layout["annotations"]=PlotMeta["annotations"]}
    
     if(PlotMeta_keys.includes("typey")){layout["yaxis"]['type']=PlotMeta["typey"] } 
     if(PlotMeta_keys.includes("typex")){layout["xaxis"]['type']=PlotMeta["typex"]} 
     if(PlotMeta_keys.includes("lorientation")){layout["legend"]['orientation']=PlotMeta["lorientation"]} 
     if(PlotMeta_keys.includes("legendposx")){layout["legend"]['x']=PlotMeta["legendposx"]} 
      if(PlotMeta_keys.includes("legendposy")){layout["legend"]['y']=PlotMeta["legendposy"]} 
      
      if(PlotMeta_keys.includes("xticksuffix")){layout["xaxis"]['ticksuffix']=PlotMeta["xticksuffix"]} 
      if(PlotMeta_keys.includes("xexponentformat")){layout["xaxis"]['exponentformat']=PlotMeta["xexponentformat"]} 
       if(PlotMeta_keys.includes("xautorange")){layout["xaxis"]["autorange"]= PlotMeta["xautorange"]}  
       if(PlotMeta_keys.includes("xtickformat")){layout["xaxis"]["tickformat"]= PlotMeta["xtickformat"]}  

      if(PlotMeta_keys.includes("yticksuffix")){layout["yaxis"]['ticksuffix']=PlotMeta["yticksuffix"]} 
      if(PlotMeta_keys.includes("yexponentformat")){layout["yaxis"]['exponentformat']=PlotMeta["yexponentformat"]} 
      if(PlotMeta_keys.includes("yautorange")){layout["yaxis"]["autorange"]= PlotMeta["yautorange"]}  
      
      if(PlotMeta_keys.includes("ytickformat")){layout["yaxis"]["tickformat"]= PlotMeta["ytickformat"]}  

      if(PlotMeta_keys.includes("yhoverformat")){layout["yaxis"]["hoverformat"]= PlotMeta["yhoverformat"]}  
      if(PlotMeta_keys.includes("xhoverformat")){layout["xaxis"]["hoverformat"]= PlotMeta["xhoverformat"]}  


 
     
     if(PlotMeta_keys.includes("shapes")){layout["shapes"]=PlotMeta["shapes"]}
     if(PlotMeta_keys.includes("annotations")){layout["annotations"]=PlotMeta["annotations"]}
      if(PlotMeta_keys.includes("title")){layout["title"]=PlotMeta["title"]}

     if(PlotMeta_keys.includes("rangemode")){layout["yaxis"]["rangemode"]= PlotMeta["rangemode"]}  
     
     var config = { modeBarButtonsToAdd: [ 'v1hovermode']};

  layout['modebar']= {
                    orientation: 'h',
                    bgcolor: 'rgba(0,0,0,0)',
                    color:  'black',
       logoColor: 'rgba(0, 31, 95, 0.3)'
                }
   
  // console.log(layout)
     Plotly.newPlot(PlotMeta["divid"], PlotMeta["data"],layout, config);
   
}
////////////////////////////////////////////////////////////////////// 
 
function  plotTheCoils()
 {
   console.log("plotTheCoils")
   
   document.getElementById("plotsCont").innerHTML = ""
   var values = $('#example-limit').val();
    if (values === null){values=[]}
    filterMeta["columnValue"]=values            
    returnl=filterMyData(spice1008cs,filterMeta)   

 for (thePindex = 0; thePindex < returnl.length; thePindex++) {     
   
     R2value=returnl[thePindex]["R2(ohms)"]  
     R1value=returnl[thePindex]["R1(ohms)"]  
     Lvalue=returnl[thePindex]["L (nH)"]  
     Cvalue=returnl[thePindex]["C (pF)"]  
     kvalue=returnl[thePindex]["k"]  
     pnum=returnl[thePindex]["Part number"]
     console.log("plotting: "+pnum)
     titleText="$\\text{CoilID:"+pnum+"; "+"L=}"+ Lvalue+"\\text{ nH; C=}"+Cvalue+"\\text{ pF; } R_1="+R1value+"\\Omega; R_2="+R2value+"\\Omega;\\text{ k=}"+kvalue+"$"
              
    symbolList=[];colorList=[];shapesL= []; annotationList=[] 
    title= {text: titleText, 	font: {family: 'Arial Black',size: 16},xref: 'paper',x: 0.5,xanchor: 'center',y: 0.96,yanchor: 'bottom'}
    PlotMeta=[];PlotMeta["shapes"]=shapesL;PlotMeta["title"]=title;PlotMeta['typex']='log';PlotMeta['typey']='log'
    
    PlotMeta["xexponentformat"]= "SI"
    PlotMeta["xticksuffix"]= "Hz"
    PlotMeta["xautorange"]=true
    //PlotMeta["xtickformat"]=   "0.f"
    
    PlotMeta["yexponentformat"]= "SI"
    PlotMeta["yticksuffix"]= ""
    PlotMeta["yautorange"]=true
    //PlotMeta["ytickformat"]=   "0.f"
    
     dataT = [];

   var fValues0= math.range(5,8.1, 0.1).toArray() 
   var fValues= fValues0.map(x=>  math.pow(10,x))
   for (i = 1; i < 11; i++) {  
      theresf=9.1*i*math.pow(10,6)
      fValues.push(theresf);
      thecolor='rgb(255, 0, 0)'
      if([1,5].includes(i)){ thecolor='rgb(0, 255, 0)'}
       if([1,2,4,5,6,10].includes(i)){
        shapesL.push(  {
        type: 'line',
        yref: 'paper',
        y1: 0.8,y0: 0,
        x0: theresf,x1: theresf,
        line:{
            color: thecolor,
            width: 2,
            dash:'dot'
        }
    })
    
    annotationList.push(
          {
        yref: 'paper',
        x:math.log10(theresf),
        xanchor: 'center',
        y: 0.8,
        yanchor: 'bottom',
        text: (math.round(theresf/100000)/10)+"MHz",
         textangle:-90,
         showarrow: false,
                // arrowhead: 7,
                  ax: 0,                ay: -20
       
      }
    )
   }
   
      
  }
    y1values=fValues.map(x=>   R1value)
    y2values=fValues.map(x=>   R2value)
    Lyvalues=fValues.map(x=>   2*math.PI* Lvalue*x*math.pow(10,-9))
    Cyvalues=fValues.map(x=>   1/(2*math.PI* Cvalue*x*math.pow(10,-12))  )
     
     
     kyvalues=fValues.map(x=>    kvalue*math.pow(x,0.5))
      
    trace = { x: fValues, y:y1values, name: "R1", mode: 'lines', line: { width: 2 }, marker: { size: 8	}}
    trace2 = { x: fValues, y:y2values, name: "R2", mode: 'lines', line: { width: 2 }, marker: { size: 8	}}
    traceL = { x: fValues, y:Lyvalues, name: "L", mode: 'lines', line: { width: 2 }, marker: { size: 8	}}
    traceC = { x: fValues, y:Cyvalues, name: "C", mode: 'lines', line: { width: 2 }, marker: { size: 8	}}
    tracek = { x: fValues, y:kyvalues, name: "Rvar", mode: 'lines', line: { width: 2 }, marker: { size: 8	}}
    
   ;dataT.push(trace);dataT.push(trace2);dataT.push(traceL);dataT.push(traceC);dataT.push(tracek)//,yaxis: 'y2'

    PlotMeta["annotations"]=annotationList;
    PlotMeta["lorientation"]="h";  PlotMeta["legendposy"]="0.95";  PlotMeta["legendposx"]="0.35"
    PlotMeta["xName"] = "$\\Large{f\\text{(Hz)}}$"; PlotMeta["yName"] = "$\\Large{|Z|}\\Large{(\\Omega)}$"
    PlotMeta["data"] = dataT; PlotMeta["divid"] = "autoCoilPlot"+thePindex
    PlotMeta["wheight"] = 400;    //PlotMeta["y2title"] = "$\\Large{\\text{Gain}}$"


 const newDiv = document.createElement("div");
 newDiv.setAttribute('id',"autoCoilPlot"+thePindex);
newDiv.setAttribute('class',"plotitem");

 


  // add the newly created element and its content into the DOM
  document.getElementById("plotsCont").appendChild( newDiv);

   genplotter(PlotMeta)
/////////////////////////////////////////////////////////////////
  }  
        
        
        
 }
 
function coilRelated(){
  spice1008cs=spice1008cs['data']
myarray=[]
for (i = 0; i < spice1008cs.length; i++) {  thisline=spice1008cs[i];if(Object.keys(thisline).length>5){myarray.push(thisline)}}


spice1008cskeys=Object.keys(spice1008cs[0])
keysToBeRemoved=["Page","Table"]
spice1008cskeys = spice1008cskeys.filter(item => keysToBeRemoved.indexOf(item) === -1);

 columnA=[]
 for (i = 0; i < spice1008cskeys.length; i++) {  
   columnA.push({ "data" : spice1008cskeys[i], title: spice1008cskeys[i] })
   }//spice1008cs.length

$.fn.dataTable.ext.errMode = 'none'  
var oTable = $('#jjt').dataTable({
    "data": myarray, "columns" : columnA,

                "fixedHeader": true,
               // "colReorder": true,
                "responsive": true,
                "sPaginationType": "full_numbers",
                "bLengthChange": true,
                "aLengthMenu": [[5, 10, 15, 20, -1], [5, 10, 15, 20, , "All"]],
                "iDisplayLength": 15,
                //"aaSorting": [1, 'asc'],
                "dom": 'Blfrtip',
                "bProcessing": false,
                buttons: [
                    'copy', 'excel',  'print', 'csv',
                    {
                        text: 'JSON',
                        action: function (e, dt, button, config) {
                            var data = dt.buttons.exportData();

                            $.fn.dataTable.fileSave(
                                new Blob([JSON.stringify(data)]),
                                'Export.json'
                            );
                        }
                    }
                ],
                //{ dom: 'Bfrtip', buttons: ['colvis', 'excel', 'print'] }
                //  "bJQueryUI": true
                // "sDom": 'l<"H"Rf>t<"F"ip>'
            });
  
partnumL=runGenPlots()  

partnumL=partnumL.sort()

//console.log(partnumL)
currentCList=["1008CS-101","1008CS-391","1008CS-181","1008CS-471","1008CS-182"]

  var select = document.getElementById("example-limit");
for(var i =  partnumL.length-1;i>-1; i--) {
 // console.log(i+";"+partnumL[i]);
    var option = document.createElement('option');
    option.text =  partnumL[i];
    option.id="h"+i
    option.value=partnumL[i]
    //if(currentCList.includes(partnumL[i])){option.selected=true}
  if(i==1){option.selected=true}
    select.add(option, 0);
}




//$("select").bsMultiSelect(); 


$('#example-limit').multiselect({
      onChange: function(option, checked) {
          // Get selected options.
          var selectedOptions = $('#example-limit option:selected');

          if (selectedOptions.length >= 6) {
              // Disable all other checkboxes.
              var nonSelectedOptions = $('#example-limit option').filter(function() {
                  return !$(this).is(':selected');
              });

              nonSelectedOptions.each(function() {
                  var input = $('input[value="' + $(this).val() + '"]');
                  input.prop('disabled', true);
                  input.closest('.multiselect-option').addClass('disabled');
              });
          }
          else {
                          
                        plotTheCoils()
              // Enable all checkboxes.
              $('#example-limit option').each(function() {
                  var input = $('input[value="' + $(this).val() + '"]');
                  input.prop('disabled', false);
                  input.closest('.multiselect-option').removeClass('disabled');
              });
          }
          
          
      }
  });



for (var i = 0; i < currentCList.length; i++) { 
  theIndex=partnumL.indexOf(currentCList[i])//;console.log("theIndex of "+partnumL+" ="+theIndex)
  document.getElementById("example-limitDiv").getElementsByClassName("dropdown-menu")[0].getElementsByTagName('button')[theIndex].style.backgroundColor = "orange"
}


  
}

//////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
function besselplotter(){ 
symbolList=[];colorList=[];shapesL= [];  annotationList= []
 
    	title= {text: "Bessel Functions",  font: {family: 'Arial Black',size: 16},xref: 'paper',x: 0.5,xanchor: 'center',y: 0.95,yanchor: 'top'}
PlotMeta=[];PlotMeta["shapes"]=shapesL;PlotMeta["title"]=title;//PlotMeta['typex']='log';PlotMeta['typey']='log'
   dataT = [];

   var xValues= math.range(0,10, 0.01).toArray() 
   
   
   for (var i = 0; i < 5; i++) { 
       yValues=xValues.map(x=>BESSEL.besselj(x, i) )
      trace = { x:  xValues, y: yValues, name: "J"+i, mode: 'lines', line: { width: 2 }, marker: { size: 8}}

        dataT.push(trace);
     
   }
     
     

    PlotMeta["annotations"]=annotationList;
    PlotMeta["lorientation"]="h";  PlotMeta["legendposy"]="0.92";  PlotMeta["legendposx"]="0.5"
    PlotMeta["xName"] = "$m$"; PlotMeta["yName"] = "$\\Large{\J_k}$"
    PlotMeta["data"] = dataT; PlotMeta["divid"] = "besselDiv"
    PlotMeta["wheight"] = 435;  
    //PlotMeta["y2title"] = "$\\Large{\\text{Gain}}$"
     PlotMeta["yhoverformat"]=".2r";PlotMeta["xhoverformat"]=".0f"
    try {genplotter(PlotMeta)} catch (error) {console.error(error)}
    }
///////////////////////////////////////////////////////////


////////////////////////////////////////////////////////
function modulatedPlotter(){ 
symbolList=[];colorList=[];shapesL= [];  annotationList= []
 
 omegar_valueV=parseFloat(omegar_value.noUiSlider.get())
m_valueV=parseFloat(m_value.noUiSlider.get())


    	title= {text: "",  font: {family: 'Arial Black',size: 16},xref: 'paper',x: 0.5,xanchor: 'center',y: 1,yanchor: 'top'}
PlotMeta=[];PlotMeta["shapes"]=shapesL;PlotMeta["title"]=title;//PlotMeta['typex']='log';PlotMeta['typey']='log'
   dataT = [];

   var tValues= math.range(0,4/math.PI, 0.01).toArray() 
   

   yValues=tValues.map(x=>math.cos(2*math.PI*x+m_valueV*math.cos(2*omegar_valueV*math.PI*x)) )
   
   
      trace = { x:  tValues, y: yValues, name: "carrier", mode: 'lines', line: { width: 2 }, marker: { size: 8},showlegend:false}

        dataT.push(trace);
     

     

    PlotMeta["annotations"]=annotationList;
    PlotMeta["lorientation"]="h";  PlotMeta["legendposy"]="0.92";  PlotMeta["legendposx"]="0.5"
    PlotMeta["xName"] = "$\\large{t(1/\\omega_o)}$"; PlotMeta["yName"] = "$\\Large{\\Re\\left(E/E_0\\right)}$"
    PlotMeta["data"] = dataT; PlotMeta["divid"] = "modulatedDiv"
    PlotMeta["wheight"] = 435;  
    //PlotMeta["y2title"] = "$\\Large{\\text{Gain}}$"
     PlotMeta["yhoverformat"]=".2r";PlotMeta["xhoverformat"]=".2r"
    try {genplotter(PlotMeta)} catch (error) {console.error(error)}
    }
///////////////////////////////////////////////////////////
