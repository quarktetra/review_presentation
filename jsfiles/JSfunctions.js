lineStyles=["solid", "dot", "dash", "longdash", "dashdot", "longdashdot"]
defcolors=[

'#1f77b4',  // muted blue
'#ff7f0e',  // safety orange
'#2ca02c',  // cooked asparagus green
'#d62728',  // brick red
'#9467bd',  // muted purple
'#8c564b',  // chestnut brown
'#e377c2',  // raspberry yogurt pink
'#7f7f7f',  // middle gray
'#bcbd22',  // curry yellow-green
'#17becf',   // blue-teal
'#1f77b4',  // muted blue
'#ff7f0e',  // safety orange
'#2ca02c',  // cooked asparagus green
'#d62728',  // brick red
'#9467bd',  // muted purple
'#8c564b',  // chestnut brown
'#e377c2',  // raspberry yogurt pink
'#7f7f7f',  // middle gray
'#bcbd22',  // curry yellow-green
'#17becf',   // blue-teal
]

function genplotter(PlotMeta){ 
  PlotMeta_keys=Object.keys(PlotMeta)
  if(PlotMeta_keys.includes("legend")){legendon=PlotMeta["legend"]}else{legendon=true}

 y2info={

       title: '',
   // titlefont: {color: '#ff7f0e'},
    //tickfont: {color: 'rgb(148, 103, 189)'},
    overlaying: 'y',
    side: 'right',
        font: {
               family: 'Arial Black',
               size: 14,
               weight: "bold"
               //color: '#7f7f7f'
             }
  }

  
    if(PlotMeta["y2Name"]!=NaN){
    y2info['title']= PlotMeta["y2Name"]
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
    
         if(PlotMeta_keys.includes("xaxis_dtick")){layout["xaxis"]['dtick']=PlotMeta["xaxis_dtick"]}

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
      if(PlotMeta_keys.includes("y2hoverformat")){layout["yaxis2"]["hoverformat"]= PlotMeta["y2hoverformat"]}  

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
   
   console.log(layout)
     Plotly.newPlot(PlotMeta["divid"], PlotMeta["data"],layout, config);
   
}
////////////////////////////////////////////////////////////////////// 
function CalcNines(slength,parity){
  nines=NaN
  if(parity>-1){
MTTDL= math.pow(RepRate/FailureRate,parity)*math.factorial(slength-parity-1)/(FailureRate*math.factorial(slength))
nines=math.log10(MTTDL)
}
return nines;
}

////////////////////////////////////////////////////////
function unitStep(x){
  retV=NaN;
  if(x>0){retV=1}
  return retV;
}
function modulatedPlotter(){ 
  
  //console.log( )
  



symbolList=[];colorList=[];shapesL= [];  annotationList= []
pr=Number(document.getElementById('w_ndrive').value/100)

repRate=parseFloat(rep_parameter.noUiSlider.get())//MB/s
cap=parseFloat(cap_parameter.noUiSlider.get()) //TB
AFR=parseFloat(afr_parameter.noUiSlider.get()) //%

n_parameterV=parseFloat(n_parameter.noUiSlider.get()[2])
k_parameterV=n_parameterV-parseFloat(n_parameter.noUiSlider.get()[1])
c_parameterV=parseFloat(n_parameter.noUiSlider.get()[0])

d_parameterV=n_parameterV-c_parameterV // number of data shards




RepTime=cap/repRate*math.pow(10,6)/(60*60*24*365) // in years
RepRate=1/RepTime
FailureRate=-math.log(1-AFR/100) //1/years
drMTTF=1/FailureRate
//console.log("n_parameterV:"+n_parameterV+"; k_parameterV:"+k_parameterV+"; pr:"+pr+"; c_parameterV:"+c_parameterV+"; RepTime:"+RepTime+" years"+"; drMTTF:"+drMTTF,";nines:"+CalcNines(n_parameterV,c_parameterV))


 // console.log(binomialCoefficient(n_parameterV, k_parameterV))

    	title= {text: "",  font: {family: 'Arial Black',size: 16},xref: 'paper',x: 0.5,xanchor: 'center',y: 1,yanchor: 'top'}
PlotMeta=[];PlotMeta["shapes"]=shapesL;PlotMeta["title"]=title;//PlotMeta['typex']='log';PlotMeta['typey']='log'

k=1;
//console.log("k="+k+"; calling params length:",d_parameterV+c_parameterV-k, "; parity:", c_parameterV-k, "; nines:",   CalcNines(d_parameterV+c_parameterV-k,c_parameterV-k))
   dataT = [];

   var kValues= math.range(0,n_parameterV, 1).toArray() 
   

 yValues=kValues.map(k=> 100*binomialCoefficient(n_parameterV, k)*math.pow(pr,k)*math.pow(1-pr,n_parameterV-k)*unitStep( k_parameterV-k+1)  )

      trace = { x:  kValues, y: yValues, name: "Probability", mode: 'markers', line: { width: 2 }, marker: { size: 8},showlegend:true}

        dataT.push(trace);
 
   var kValues2= math.range(0,k_parameterV+1, 1).toArray() 

   y2Values=kValues2.map(k=> CalcNines(d_parameterV+c_parameterV-k,c_parameterV-k) )
 
 shapeList=[]
 avgRate=0
 for (k = 0; k < k_parameterV+1; k++) {  
   
   if(!isNaN(yValues[k])){
     thisrate=yValues[k]*math.pow(10,-CalcNines(d_parameterV+c_parameterV-k,c_parameterV-k) )/100
     console.log("k:"+k+ "; yValues[k]:"+yValues[k] +"nines:"+CalcNines(d_parameterV+c_parameterV-k,c_parameterV-k) + "; log10 of w thisrate:"+(-math.log10(thisrate)))
     avgRate=avgRate+thisrate
   shapeList.push({
    type: 'line',
    x0: k,
    y0: 0,
    x1: k,
    y1: yValues[k],
    line: {
      color: '#1f77b4',
      width: 4,
      //dash: 'dot'
    }
  })
   }
   
 }
 
 
   //y2Values=kValues.map(k=> c_parameterV-k )
   


       trace2 = { x:  kValues, y: y2Values, yaxis:'y2', name: "Durability", mode: 'markers', line: { width: 2 }, marker: { size: 8},showlegend:true}

        dataT.push(trace2);
        
           y3Values=kValues.map(k=> -math.log10(avgRate) )

               trace3 = { x:  kValues, y: y3Values, yaxis:'y2', name: "AVG Durability", mode: 'lines', line: { width: 1,color:"orange" }, marker: { size: 8},showlegend:true}

        dataT.push(trace3);
        
                  y4Values=kValues.map(k=> CalcNines(16,4) )

               trace4 = { x:  kValues, y: y4Values, yaxis:'y2', name: "12+4 Durability", mode: 'lines', line: { width: 1,color:"black",dash:"dot" }, marker: { size: 8},showlegend:true}

        dataT.push(trace4);
        
                          y5Values=kValues.map(k=> CalcNines(11,3) )

               trace4 = { x:  kValues, y: y5Values, yaxis:'y2', name: "11+3 Durability", mode: 'lines', line: { width: 1,color:"pink",dash:"dot" }, marker: { size: 8},showlegend:true}

        dataT.push(trace4);

    PlotMeta["shapes"] =shapeList 
//console.log("avg nines:"+math.log10(avgRate))

    PlotMeta["annotations"]=annotationList;
    PlotMeta["lorientation"]="h";  PlotMeta["legendposy"]="0.92";  PlotMeta["legendposx"]="0.5"
    PlotMeta["xName"] = "$\\Large{l \\text{(number of failed writes)}}$"; PlotMeta["yName"] = "$\\Large{\\color{blue}{P_l(\\%)}}$"
    PlotMeta["y2Name"]="$\\Large{\\color{orange}{\\text{Durability(nines)}}}$"
    PlotMeta["data"] = dataT; PlotMeta["divid"] = "modulatedDiv"
    PlotMeta["wheight"] = 435;  
    //PlotMeta["y2title"] = "$\\Large{\\text{Gain}}$"
     PlotMeta["yhoverformat"]=".2r";PlotMeta["y2hoverformat"]=".3r";PlotMeta["xhoverformat"]=".1r"
    try {genplotter(PlotMeta)} catch (error) {console.error(error)}
    }
///////////////////////////////////////////////////////////
function binomialCoefficient (n, k){
      
      // Checking if n and k are integer
      if(Number.isNaN(n) || Number.isNaN(k)){
        return NaN;
      }
      
      if(k < 0 || k > n){
        return 0
      }
      
      if(k === 0 || k === n){
        return 1
      }
      
      if(k === 1 || k === n - 1){
        return n
      }
      
      let res = n;
      for(let i = 2; i <= k; i++){
        res *= (n - i + 1) / i;
      }
      
      return Math.round(res);
    }


function getAxis2(DataIn, thisPlotMeta) { //
 thisPlotMeta_keys=Object.keys(thisPlotMeta)

    columnKey = thisPlotMeta["columnKey"]; columnKeyRemove = thisPlotMeta["columnKeyRemove"]; columnValue = thisPlotMeta["columnValue"];
    columnValueRemove = thisPlotMeta["columnValueRemove"];
    filterByColumn = thisPlotMeta["filterByColumn"]; filterbyValueList = thisPlotMeta["filterbyValueList"]; 
     if(thisPlotMeta_keys.includes("filterByColumn2")){
    filterByColumn2 = thisPlotMeta["filterByColumn2"]; filterbyValueList2 = thisPlotMeta["filterbyValueList2"];}else{
      filterByColumn2=""
    }
    excludeThis = thisPlotMeta["excludeThis"];

    var returnlist = []; returnlistx = []; returnlisty = []
    for (j = 0; j < DataIn.length; j++) {
        var skipthis = 0; if (DataIn[j][columnKey] == undefined) { skipthis = 1 }; //console.log("j:"+j+", "+DataIn[j][columnKey]+", skip="+skipthis)
        if (skipthis == 0) {
            DataIn[j][columnKey] = DataIn[j][columnKey].toString()

            if (DataIn[j][columnKey].substring(0, 1) == "*" | DataIn[j][columnKey] == "") { skipthis = 1 }
        }

        if (skipthis == 0) { if (filterByColumn != "") { if ((!filterbyValueList.includes(DataIn[j][filterByColumn])) ^ excludeThis) { skipthis = 1 } } } // applt the filter, if any
        if (skipthis == 0) { if (filterByColumn2 != "") { if ((!filterbyValueList2.includes(DataIn[j][filterByColumn2])) ^ excludeThis) { skipthis = 1 } } } // applt the filter, if any

        if (skipthis == 0) {
            xval = DataIn[j][columnKey].replace(columnKeyRemove, "")
            if (columnKey == "logDate") {
                xval = xval.replace("\"", ""); xval = xval.replace("\"", "")
                xval = xval.split(" ")[0];
                if (xval.includes("-")) {
                    //  console.log(xval)
                    xvals = xval.split("-")
                    xval = xvals[1] + "-" + xvals[2] + "-" + xvals[0]
                    //console.log(xval)
                }
                //xval=xval.replace("/","-") ;
                // console.log(xval)
            }
            returnlistx.push(xval)

            yval = DataIn[j][columnValue]
            if (columnValueRemove != "") { yval = yval.replace(columnValueRemove, "") }

            returnlisty.push(yval)



        }
    }
    returnlist.push(returnlistx); returnlist.push(returnlisty)
    return returnlist
}


function getAxis(DataIn,thisPlotMeta){ //
    
    columnKey=thisPlotMeta["columnKey"];columnKeyRemove=thisPlotMeta["columnKeyRemove"];columnValue=thisPlotMeta["columnValue"];
    columnValueRemove=thisPlotMeta["columnValueRemove"];filterByColumn=thisPlotMeta["filterByColumn"];
    filterbyValueList=thisPlotMeta["filterbyValueList"];excludeThis=thisPlotMeta["excludeThis"];
    
    var returnlist=[]; returnlistx=[];returnlisty=[]
    for (j = 0; j < DataIn.length; j++) { 
      var skipthis=0; if(DataIn[j][columnKey]== undefined){skipthis=1}; //console.log("j:"+j+", "+DataIn[j][columnKey]+", skip="+skipthis)
      if(skipthis==0){
                DataIn[j][columnKey]=DataIn[j][columnKey].toString()

        if(DataIn[j][columnKey].substring(0,1)=="*" |DataIn[j][columnKey]==""){skipthis=1}}
      
      if(skipthis==0){if(filterByColumn!=""){  if( (!filterbyValueList.includes(DataIn[j][filterByColumn]))^excludeThis ){skipthis=1}   }  } // applt the filter, if any
      if(skipthis==0){
        xval=DataIn[j][columnKey].replace(columnKeyRemove,"")
        if(columnKey=="logDate"){
          xval=xval.replace("\"","");          xval=xval.replace("\"","")
          xval=xval.split(" ")[0] ; 
          if(xval.includes("-")){
            //  console.log(xval)
            xvals=xval.split("-")
            xval=xvals[1]+"-"+xvals[2]+"-"+xvals[0]
            //console.log(xval)
          }
          //xval=xval.replace("/","-") ;
          // console.log(xval)
        }
        returnlistx.push(xval)
        
        yval=DataIn[j][columnValue]
        if(columnValueRemove!=""){yval=yval.replace(columnValueRemove,"")}
        
        returnlisty.push(yval)
        
        
        
      }
    }
    returnlist.push(returnlistx);returnlist.push(returnlisty)
    return returnlist
}


function root_plotter(){ 
console.log("root_plotter started")
transferF_V=parseInt(transferF.noUiSlider.get()).toString()
plotO_V=parseInt(plotO.noUiSlider.get()).toString()


for (let step = 0; step < s_transferFKeys.length; step++) {
try { 
      if(s_transferFKeys[step]==transferF_V){

      //console.log("show "+transferF_V)

      $( "#rlcf"+transferF_V+"_svg" ).fadeIn(2000);
       $( "#rlcf"+transferF_V+"_h" ).fadeIn(2000);


       

      

      

  }else{ //console.log("hide "+transferF_V)

     $( "#rlcf"+step+"_svg" ).hide();;
     $( "#rlcf"+step+"_h" ).hide();;

     } 

  }catch(err) {}

}   

//console.log("here 1")

R_inputV=parseFloat(R_input.noUiSlider.get())
R_inputLV=parseFloat(R_inputL.noUiSlider.get())
L_inputV=parseFloat(L_input.noUiSlider.get())
C_inputV=parseFloat(C_input.noUiSlider.get())
f0_V=math.round(10 * math.pow(L_inputV* C_inputV,-0.5)* math.pow(10,4.5)/(2 * math.PI) )/10 // in MHz   
R_inputTV=R_inputLV+R_inputV
zeta_V=(1/2)* R_inputTV* math.pow(C_inputV/L_inputV,0.5)* math.pow(10,-1.5)

   f0_VR=f0_V*math.pow(10,6)
 RoverLNorm=  (R_inputLV/( L_inputV * math.pow(10,-9)))/f0_VR
  RToverLNorm=  (R_inputTV/( L_inputV * math.pow(10,-9)))/f0_VR
 //console.log("RoverLNorm:"+RoverLNorm)
if(zeta_V<1){
  s1x=-zeta_V;s1y=math.pow(1-math.pow(zeta_V,2),0.5)
  s2x=-zeta_V;s2y=-math.pow(1-math.pow(zeta_V,2),0.5)
}

if(zeta_V>1){
  s2x=-zeta_V+math.pow(math.pow(zeta_V,2)-1,0.5);s1y=0
  s1x=-zeta_V-math.pow(math.pow(zeta_V,2)-1,0.5);s2y=0
}

if(zeta_V==1){
  s1x=0;s1y=1
  s2x=0;s2y=-1
}
//console.log("here 2")

    
document.getElementById("fo_Span").innerHTML=f0_V
document.getElementById("zeta_SpanInter").innerHTML=math.round(1000*zeta_V)/1000


console.log("R_inputV:"+R_inputV, "; R_inputTV:"+R_inputTV, "; L_inputV:"+L_inputV,  ";C_inputV:"+C_inputV, "zeta_V:"+zeta_V+ ";f0_V:"+f0_V)     

//console.log("here 3")

  var annotlist=[]

myfont={
        //family: 'Courier New, monospace',
        size: 16,
        color: 'red'
      }
   // console.log(" bindex for "+ "-1 ="+ bindex)

 shapesList=[]
 myrad=0.1
 shapesList.push({type: 'circle',xref: 'x',yref: 'y', x0: -1,y0: -1, x1: 1, y1: 1,line: { color: 'rgba(50, 171, 96, 0.45)', dash: 'dot', width: 1}})



      roottext="$\\large{p_+}$"  //"$e^{\\frac{"+numer+"\\pi i}{"+nvalue+" }}$"
      annotlisttemp= {x:s1x, y: s1y+0.1, xref: 'x', yref: 'y', text: roottext, fillcolor:'red',showarrow: false,ax:0,ay: 0 }
      annotlist.push(annotlisttemp)

      roottext="$\\large{p_-}$"  //"$e^{\\frac{"+numer+"\\pi i}{"+nvalue+" }}$"
    
      annotlisttemp= {x:s2x, y: s2y-0.1, xref: 'x', yref: 'y', text: roottext, fillcolor:'red',showarrow: false,ax:0,ay: 0 }
      annotlist.push(annotlisttemp)

  xval=[s1x,s2x,s1x,s2x]
  yval=[s1y,s2y,s1y,s2y]
  textL=["pole","pole","pole","pole","zero","zero","zero"]

markerCircleSize=12  
myPoleZeroMarkers={symbol:[100,100,4,4],
        size:[markerCircleSize,markerCircleSize,10,10],
        color:['red','red','red','red']
      }
 
      
  if( transferF_V==0){ //r out
     xval.push(0);yval.push(0);
     myPoleZeroMarkers.symbol.push(300);myPoleZeroMarkers.size.push(markerCircleSize);myPoleZeroMarkers.color.push('orange')
     
      roottext="$z$"  //"$e^{\\frac{"+numer+"\\pi i}{"+nvalue+" }}$"
      annotlisttemp= {x:0, y: 0.1, xref: 'x', yref: 'y', text: roottext,showarrow: false,ax:0,ay: 0 }
      annotlist.push(annotlisttemp)
  }

  if( transferF_V==1){ //l out
     if(RoverLNorm!=0){
            xval.push(0);yval.push(0);
     myPoleZeroMarkers.symbol.push(300);
     myPoleZeroMarkers.size.push(markerCircleSize);
     myPoleZeroMarkers.color.push('orange')
      roottext="$\\Large{z_1}$"  //"$e^{\\frac{"+numer+"\\pi i}{"+nvalue+" }}$"
      annotlisttemp= {x:0, y: 0.1, xref: 'x', yref: 'y', text: roottext,showarrow: false,ax:0,ay: 0 }
      annotlist.push(annotlisttemp)
     
    xval.push(- RoverLNorm);yval.push(0);
     myPoleZeroMarkers.symbol.push(300);myPoleZeroMarkers.size.push(markerCircleSize);myPoleZeroMarkers.color.push('blue')
      
      roottext="$\\large{z_2}$"  //"$e^{\\frac{"+numer+"\\pi i}{"+nvalue+" }}$"
      annotlisttemp= {x:- RoverLNorm, y: -0.1, xref: 'x', yref: 'y', text: roottext,showarrow: false,ax:0,ay: 0 }
      annotlist.push(annotlisttemp)
     }else{
     textL=["pole","pole","pole","pole","Double Zero","Double Zero","zero","zero"]

      roottext="$z_{1,2}$"  
      annotlisttemp= {x:0, y: 0.1, xref: 'x', yref: 'y', text: roottext,showarrow: false,ax:0,ay: 0 }
      annotlist.push(annotlisttemp)
      
          
            xval.push(0);yval.push(0);
     myPoleZeroMarkers.symbol.push(300);myPoleZeroMarkers.size.push(markerCircleSize);myPoleZeroMarkers.color.push('orange')
     
                xval.push(0);yval.push(0);
     myPoleZeroMarkers.symbol.push(100);myPoleZeroMarkers.size.push(markerCircleSize);myPoleZeroMarkers.color.push('orange')
       
     }
  }
//console.log("root_plotter vv3")

  if( transferF_V==3){ //R+l out
     if(RToverLNorm!=0){
            xval.push(0);yval.push(0);
     myPoleZeroMarkers.symbol.push(300);myPoleZeroMarkers.size.push(markerCircleSize);myPoleZeroMarkers.color.push('orange')
      roottext="$\\Large{z_1}$"  //"$e^{\\frac{"+numer+"\\pi i}{"+nvalue+" }}$"
      annotlisttemp= {x:0, y: 0.1, xref: 'x', yref: 'y', text: roottext,showarrow: false,ax:0,ay: 0 }
      annotlist.push(annotlisttemp)
     
    xval.push(- RToverLNorm);yval.push(0);
     myPoleZeroMarkers.symbol.push(300);myPoleZeroMarkers.size.push(markerCircleSize);myPoleZeroMarkers.color.push('blue')
      
      roottext="$\\large{z_2}$"  //"$e^{\\frac{"+numer+"\\pi i}{"+nvalue+" }}$"
      annotlisttemp= {x:- RToverLNorm, y: -0.1, xref: 'x', yref: 'y', text: roottext,showarrow: false,ax:0,ay: 0 }
      annotlist.push(annotlisttemp)
     }else{

      roottext="$z_{1,2}$"  
      annotlisttemp= {x:0, y: 0.1, xref: 'x', yref: 'y', text: roottext,showarrow: false,ax:0,ay: 0 }
      annotlist.push(annotlisttemp)
      
          
            xval.push(0);yval.push(0);
     myPoleZeroMarkers.symbol.push(300);myPoleZeroMarkers.size.push(markerCircleSize);myPoleZeroMarkers.color.push('orange')
     
                xval.push(0);yval.push(0);
     myPoleZeroMarkers.symbol.push(100);myPoleZeroMarkers.size.push(markerCircleSize);myPoleZeroMarkers.color.push('orange')
       
     }
  }
//console.log("root_plotter v4")  
    if( transferF_V==4){ //r+c out
    poleat= 1/(R_inputV*C_inputV*math.pow(10,-12))/f0_VR
   console.log("poleat:"+poleat)
     xval.push(poleat);yval.push(0);
     myPoleZeroMarkers.symbol.push(300);myPoleZeroMarkers.size.push(markerCircleSize);myPoleZeroMarkers.color.push('orange')
     
      roottext="$z$"  //"$e^{\\frac{"+numer+"\\pi i}{"+nvalue+" }}$"
      annotlisttemp= {x:poleat, y: 0.1, xref: 'x', yref: 'y', text: roottext,showarrow: false,ax:0,ay: 0 }
      annotlist.push(annotlisttemp)
  }

console.log("root_plotter vv5")
    if( transferF_V==5){ //r+L out

    xval.push(-RoverLNorm/2);yval.push(math.pow(1-math.pow(RoverLNorm/2,2),0.5));
    myPoleZeroMarkers.symbol.push(300);myPoleZeroMarkers.size.push(markerCircleSize);myPoleZeroMarkers.color.push('orange')
    roottext="$\\Large{z_1}$"  //"$e^{\\frac{"+numer+"\\pi i}{"+nvalue+" }}$"
     annotlisttemp= {x:-RoverLNorm/2, y: math.pow(1-math.pow(RoverLNorm/2,2),0.5)-0.1, xref: 'x', yref: 'y', text: roottext,showarrow: false,ax:0,ay: 0 }
     annotlist.push(annotlisttemp)
     
    xval.push(-RoverLNorm/2);yval.push(-math.pow(1-math.pow(RoverLNorm/2,2),0.5));
    myPoleZeroMarkers.symbol.push(300);myPoleZeroMarkers.size.push(markerCircleSize);myPoleZeroMarkers.color.push('orange')
    roottext="$\\large{z_1}$"  //"$e^{\\frac{"+numer+"\\pi i}{"+nvalue+" }}$"
     annotlisttemp= {x:-RoverLNorm/2, y: -math.pow(1-math.pow(RoverLNorm/2,2),0.5)+0.1, xref: 'x', yref: 'y', text: roottext,showarrow: false,ax:0,ay: 0 }
     annotlist.push(annotlisttemp)
  }

    playout = {
 shapes: shapesList,

      paper_bgcolor: 'rgba(0,0,0,0)',plot_bgcolor: 'rgba(0,0,0,0)',

       // hovermode : 'x',
      annotations:     annotlist,
      legend: {y: 1.0,x:0.55, font: {size: 16}},

 

      margin: {l: 0,r: 0,b: 60,t: 10,pad: 1},
       height: 500,

       xaxis: {range:[-1.2,1.2],zeroline: false, constrain: 'domain',
        title: {

          text: '$\\Large{\\Re\\left(\\frac{s}{\\omega_0} \\right)}$'

          //font: { family: 'Courier New, monospace', size: 25,color: '#7f7f7f'}

        },

      },

      yaxis: {
        //side: 'right',
        range:[-1.2,1.2],zeroline: false,scaleanchor: 'x', scaleratio: 1,

        title: {
text:'$\\Large{\\Im\\left(\\frac{s}{\\omega_0} \\right)}$'

        }

    }

    };

console.log("root_plotter trace")

    trace = {

     // line: {shape: 'hv'}, 

      mode: 'markers', 
      marker:myPoleZeroMarkers,

      name: "$\\large{z_2}$" , 

      type: 'scatter', 

      x: xval , 

      y: yval,

      text:  textL,

      hovertemplate: '%{text}' +' at: <br> <b>Im</b>: %{y:.2f}' +

                          '<br><b>Re</b>: %{x:.2f}' 

                          // '<b>β:</b>%{text:.2f}',

    };

    datap = [ trace]

    

playout['modebar']= {

                  orientation: 'h',

                  bgcolor: 'rgba(0,0,0,0)',

                  color:  'black',

     logoColor: 'rgba(0, 31, 95, 0.3)'

              }

   var config = { modeBarButtonsToAdd: [ 'v1hovermode']};             

    Plotly.newPlot('roots', datap,playout,config); 

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
    PlotMeta["data"] = dataT; PlotMeta["divid"] = 'transferFunc'
    PlotMeta["wheight"] = 400;    //PlotMeta["y2title"] = "$\\Large{\\text{Gain}}$"


//console.log(dataT)

   genplotter(PlotMeta)

      

}      