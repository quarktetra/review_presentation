function runGenPlots(){

//////////////////////////////////////////GENPLOTTER items //"R1(ohms)","R2(ohms)","C (pF)","L (nH)","k"
symbolList=[];colorList=[];shapesL= []; annotationList=[] 
title= {text: '',  //"$\\text{Magnet Pos vs Time} (C="+capV+"\\mu F; V="+voltV+"V, CrossTime:"+(math.round(10*crossP)/10) +"ms )$",
				font: {family: 'Arial Black',size: 16},xref: 'paper',x: 0.5,xanchor: 'center',y: 1.01,yanchor: 'top'
			}
PlotMeta=[];PlotMeta["shapes"]=shapesL;PlotMeta["title"]=title;//PlotMeta['typex']='log';PlotMeta['typey']='log'
 dataT = [];

thisPlotMeta = {
columnKey: "L (nH)", columnKeyRemove:"", columnValue:"k", columnValueRemove:"",filterByColumn:"", filterbyValueList:[],excludeThis: 0, yName: "R2",xName:"L (nH)" }
genPair = getAxis(spice1008cs, thisPlotMeta); 
    
thisPlotMeta = { columnKey: "L (nH)", columnKeyRemove: "", columnValue: "Part number", columnValueRemove: "", filterByColumn: "",    filterbyValueList: [], excludeThis: 0, yName: "R2", xName: "L (nH)" }
badPartNums=[]    
partnum = getAxis(spice1008cs, thisPlotMeta); 
for (j = 0; j <  genPair[0].length; j++) {
    if(genPair[0][j]>5000){  
      symbolList.push("star");colorList.push('#d62728') 
      badPartNums.push(partnum[1][j])
      annotationList.push(
                          {
            x: genPair[0][j],
            xanchor: 'center',
            y:parseFloat(genPair[1][j])+0.0001,
            yanchor: 'bottom',
            text: partnum[1][j],
            showarrow: true,
            // arrowhead: 7,
              ax: 0,
              ay: -20
          }
        
      )}else{ 
      symbolList.push("circle");colorList.push('#1f77b4') 
      
    }
        }
   
    trace = { x: genPair[0], y: genPair[1], name: "k", mode: 'markers', line: { width: 2 }, marker: { size: 8,symbol:symbolList,color:colorList	},
      showlegend:false
    }
   ;dataT.push(trace)//,yaxis: 'y2'
//console.log(badPartNums)

    PlotMeta["annotations"]=annotationList;
    PlotMeta["lorientation"]="h";  PlotMeta["legendposy"]="1.1";  PlotMeta["legendposx"]="0.35"
    PlotMeta["xName"] = "$\\Large{L\\text{(nH)}}$"; PlotMeta["yName"] = "$\\Large{k}$"
    PlotMeta["data"] = dataT; PlotMeta["divid"] = "ccCoilsP1"
    PlotMeta["wheight"] = 435;    //PlotMeta["y2title"] = "$\\Large{\\text{Gain}}$"
    PlotMeta["yhoverformat"]=".2r";PlotMeta["xhoverformat"]=".0f"
try {genplotter(PlotMeta)} catch (error) {console.error(error)} 
   
//////////////////////////////////////////////////////////////////
symbolList=[];colorList=[];shapesL= []; annotationList=[]
    	title= {text: '',  //"$\\text{Magnet Pos vs Time} (C="+capV+"\\mu F; V="+voltV+"V, CrossTime:"+(math.round(10*crossP)/10) +"ms )$",
				font: {family: 'Arial Black',size: 16},xref: 'paper',x: 0.5,xanchor: 'center',y: 1.01,yanchor: 'top'
			}
PlotMeta=[];PlotMeta["shapes"]=shapesL;PlotMeta["title"]=title;//PlotMeta['typex']='log';PlotMeta['typey']='log'
   dataT = [];

//"R1(ohms)","R2(ohms)","C (pF)","L (nH)","k"


    thisPlotMeta = {
        columnKey: "L (nH)", columnKeyRemove: "", columnValue: "C (pF)", columnValueRemove: "", filterByColumn: "",
        filterbyValueList: [], excludeThis: 0, yName: "C (pF)", xName: "L (nH)"
    }
    genPair = getAxis(spice1008cs, thisPlotMeta); 
    
        for (j = 0; j <  genPair[0].length; j++) {
          
    if(genPair[0][j]>5000){  symbolList.push("star");colorList.push('#d62728') 
      
                    annotationList.push(
                  {
                  
                      x: genPair[0][j],
                      xanchor: 'center',
                      y:parseFloat(genPair[1][j])+0.05,
                      yanchor: 'bottom',
                      text: partnum[1][j],
                      showarrow: true,
                      // arrowhead: 7,
                        ax: 0,
                        ay: -20
                    }
                  
                )
      
      
    }else{ symbolList.push("circle");colorList.push('#1f77b4') }
        }
   

   
    trace = { x: genPair[0], y: genPair[1], name: "k", mode: 'markers', line: { width: 2 }, marker: { size: 8,symbol:symbolList,color:colorList	},
      showlegend:false
    }
   ;dataT.push(trace)//,yaxis: 'y2'
    PlotMeta["annotations"]=annotationList;
    PlotMeta["lorientation"]="h";  PlotMeta["legendposy"]="1.1";  PlotMeta["legendposx"]="0.35"
    PlotMeta["xName"] = "$\\Large{L\\text{(nH)}}$"; PlotMeta["yName"] = "$\\Large{C (pF)}$"
    PlotMeta["data"] = dataT; PlotMeta["divid"] = "ccCoilsP2"
    PlotMeta["wheight"] = 435;  
    //PlotMeta["y2title"] = "$\\Large{\\text{Gain}}$"
     PlotMeta["yhoverformat"]=".2r";PlotMeta["xhoverformat"]=".0f"
  try {genplotter(PlotMeta)} catch (error) {console.error(error)}
   

/////////////////////////"R1(ohms)","R2(ohms)","C (pF)","L (nH)","k"
symbolList=[];colorList=[];shapesL= [];  annotationList= [{
    xref: 'paper',
    yref: 'paper',
    x: 0.7,
    xanchor: 'right',
    y: 0.5,
    yanchor: 'bottom',
    text: '$\\Large{k=1.05\\times10^{-6} L}$',
    showarrow: false,
    textangle:-45
  }]
    	title= {text: '',  //"$\\text{Magnet Pos vs Time} (C="+capV+"\\mu F; V="+voltV+"V, CrossTime:"+(math.round(10*crossP)/10) +"ms )$",
				font: {family: 'Arial Black',size: 16},xref: 'paper',x: 0.5,xanchor: 'center',y: 1.01,yanchor: 'top'
			}
PlotMeta=[];PlotMeta["shapes"]=shapesL;PlotMeta["title"]=title;//PlotMeta['typex']='log';PlotMeta['typey']='log'
   dataT = [];

    thisPlotMeta = {
        columnKey: "L (nH)", columnKeyRemove: "", columnValue: "k", columnValueRemove: "", filterByColumn: "Part number",
        filterbyValueList: badPartNums, excludeThis: 1, yName: "k", xName: "L (nH)"
    }
    genPair = getAxis(spice1008cs, thisPlotMeta); 
    
    trace = { x: genPair[0], y: genPair[1], name: "k", mode: 'markers', line: { width: 2 }, marker: { size: 8},showlegend:false}
    
     thefit = genPair[0].map(x => 1.05*math.pow(10,-6)*x);
    tracef = { x: genPair[0], y:  thefit, name: "k-linear fit", mode: 'lines', line: { width: 2 }, marker: { size: 8},showlegend:false}

    
    
   ;dataT.push(trace);dataT.push(tracef)//,yaxis: 'y2'
    PlotMeta["annotations"]=annotationList;
    PlotMeta["lorientation"]="h";  PlotMeta["legendposy"]="1.1";  PlotMeta["legendposx"]="0.35"
    PlotMeta["xName"] = "$\\Large{L\\text{(nH)}}$"; PlotMeta["yName"] = "$\\Large{k}$"
    PlotMeta["data"] = dataT; PlotMeta["divid"] = "ccCoilsPCorr1"
    PlotMeta["wheight"] = 435;  
    //PlotMeta["y2title"] = "$\\Large{\\text{Gain}}$"
     PlotMeta["yhoverformat"]=".2r";PlotMeta["xhoverformat"]=".0f"
     
    try {genplotter(PlotMeta)} catch (error) {console.error(error)}
     
  
//////////////////////////////


/////////////////////////"R1(ohms)","R2(ohms)","C (pF)","L (nH)","k"
symbolList=[];colorList=[];shapesL= [];  annotationList= [{
    xref: 'paper',
    yref: 'paper',
    x: 0.65,
    xanchor: 'right',
    y: 0.5,
    yanchor: 'bottom',
    text: '$\\Large{R_2=0.058\\sqrt{ L}}$',
    showarrow: false,
    textangle:-45
  },
          {
                  
                      x: 10,
                      xanchor: 'center',
                      y:0.058*10+0.05,
                      yanchor: 'bottom',
                      text: "L=100nH",
                      showarrow: true,
                      // arrowhead: 7,
                        ax: 0,
                        ay: -40
                    }
  ]
    	title= {text: '',  //"$\\text{Magnet Pos vs Time} (C="+capV+"\\mu F; V="+voltV+"V, CrossTime:"+(math.round(10*crossP)/10) +"ms )$",
				font: {family: 'Arial Black',size: 16},xref: 'paper',x: 0.5,xanchor: 'center',y: 1.01,yanchor: 'top'
			}
PlotMeta=[];PlotMeta["shapes"]=shapesL;PlotMeta["title"]=title;//PlotMeta['typex']='log';PlotMeta['typey']='log'
   dataT = [];

    thisPlotMeta = {
        columnKey: "L (nH)", columnKeyRemove: "", columnValue: "R2(ohms)", columnValueRemove: "", filterByColumn: "Part number",
        filterbyValueList: badPartNums, excludeThis: 1, yName: "R2(ohms)", xName: "L (nH)"
    }
    genPair = getAxis(spice1008cs, thisPlotMeta); 
         
    Lsqrt = genPair[0].map(x => math.pow(x,0.5));

    
    trace = { x: Lsqrt, y: genPair[1], name: "R2(ohms)", mode: 'markers', line: { width: 2 }, marker: { size: 8},showlegend:false}
    
     thefit = Lsqrt.map(x => 0.058*x);
    tracef = { x:  Lsqrt, y:  thefit, name: "R2(ohms) fit", mode: 'lines', line: { width: 2 }, marker: { size: 8},showlegend:false}

    
    
   ;dataT.push(trace);dataT.push(tracef)//,yaxis: 'y2'
    PlotMeta["annotations"]=annotationList;
    PlotMeta["lorientation"]="h";  PlotMeta["legendposy"]="1.1";  PlotMeta["legendposx"]="0.35"
    PlotMeta["xName"] = "$\\Large{\\sqrt{L\\text{(nH)}}}$"; PlotMeta["yName"] = "$\\Large{R_2(\\Omega)}$"
    PlotMeta["data"] = dataT; PlotMeta["divid"] = "ccCoilsPCorr2"
    PlotMeta["wheight"] = 435;  
    //PlotMeta["y2title"] = "$\\Large{\\text{Gain}}$"
     PlotMeta["yhoverformat"]=".2r";PlotMeta["xhoverformat"]=".0f"
 try {genplotter(PlotMeta)} catch (error) {console.error(error)}

/////////////////////////"R1(ohms)","R2(ohms)","C (pF)","L (nH)","k"
symbolList=[];colorList=[];shapesL= [];  
  annotationList=[]
    	title= {text: '',  //"$\\text{Magnet Pos vs Time} (C="+capV+"\\mu F; V="+voltV+"V, CrossTime:"+(math.round(10*crossP)/10) +"ms )$",
				font: {family: 'Arial Black',size: 16},xref: 'paper',x: 0.5,xanchor: 'center',y: 1.01,yanchor: 'top'
			}
PlotMeta=[];PlotMeta["shapes"]=shapesL;PlotMeta["title"]=title;//PlotMeta['typex']='log';PlotMeta['typey']='log'
   dataT = [];

    thisPlotMeta = {
        columnKey: "L (nH)", columnKeyRemove: "", columnValue: "C (pF)", columnValueRemove: "", filterByColumn: "Part number",
        filterbyValueList: badPartNums, excludeThis: 1, yName: "R2(ohms)", xName: "L (nH)"
    }
    genPair = getAxis(spice1008cs, thisPlotMeta); 
         
    Lsqrt = genPair[0].map(x => math.pow(x,0.5));

    
    trace = { x: genPair[0], y: genPair[1], name: "C (pf)", mode: 'markers', line: { width: 2 }, marker: { size: 8},showlegend:false}
    
   // If( :"L (nH)"n < 1000,	0.15,0.15 + (0.25 * (:"L (nH)"n - 1000)) / 3000)
   
   thefit=[]
     for (j = 0; j <  genPair[0].length; j++) {
       if(genPair[0][j]<800){thefit.push(0.15)}else{thefit.push(0.15+0.25*(genPair[0][j]-800)/3200)}
     }
    
    
     //thefit = Lsqrt.map(x => 0.058*x);
    tracef = { x: genPair[0], y:  thefit, name: "C fit", mode: 'lines', line: { width: 2 }, marker: { size: 8},showlegend:false}

    
    
   ;dataT.push(trace);dataT.push(tracef)//,yaxis: 'y2'
    PlotMeta["annotations"]=annotationList;
    PlotMeta["lorientation"]="h";  PlotMeta["legendposy"]="1.1";  PlotMeta["legendposx"]="0.35"
    PlotMeta["xName"] = "$\\Large{L\\text{(nH)}}$"; PlotMeta["yName"] = "$\\Large{C (pF)}$"
    PlotMeta["data"] = dataT; PlotMeta["divid"] = "ccCoilsPCCorr2"
    PlotMeta["wheight"] = 435;  
    //PlotMeta["y2title"] = "$\\Large{\\text{Gain}}$"
     PlotMeta["yhoverformat"]=".2r";PlotMeta["xhoverformat"]=".0f"
try {genplotter(PlotMeta)} catch (error) {console.error(error)}

////////
/////////////////////////"R1(ohms)","R2(ohms)","C (pF)","L (nH)","k"
symbolList=[];colorList=[];shapesL= [];  annotationList= [{
    xref: 'paper',
    yref: 'paper',
    x: 0.65,
    xanchor: 'right',
    y: 0.5,
    yanchor: 'bottom',
    text: '$\\Large{R_1=1.275\\sqrt{ L}+0.0156 L}$',
    showarrow: false,
    textangle:-45
  }
  ]
 
    	title= {text: '',  //"$\\text{Magnet Pos vs Time} (C="+capV+"\\mu F; V="+voltV+"V, CrossTime:"+(math.round(10*crossP)/10) +"ms )$",
				font: {family: 'Arial Black',size: 16},xref: 'paper',x: 0.5,xanchor: 'center',y: 1.01,yanchor: 'top'
			}
PlotMeta=[];PlotMeta["shapes"]=shapesL;PlotMeta["title"]=title;//PlotMeta['typex']='log';PlotMeta['typey']='log'
   dataT = [];

    thisPlotMeta = {
        columnKey: "L (nH)", columnKeyRemove: "", columnValue: "R1(ohms)", columnValueRemove: "", filterByColumn: "Part number",
        filterbyValueList: badPartNums, excludeThis: 1, yName: "R1(ohms)", xName: "L (nH)"
    }
    genPair = getAxis(spice1008cs, thisPlotMeta); 
         
    Lsqrt = genPair[0].map(x => math.pow(x,0.5));

    
    trace = { x:  Lsqrt, y: genPair[1], name: "C (pf)", mode: 'markers', line: { width: 2 }, marker: { size: 8},showlegend:false}
    
   // If( :"L (nH)"n < 1000,	0.15,0.15 + (0.25 * (:"L (nH)"n - 1000)) / 3000)
   
 thefit =  Lsqrt.map(x => 1.275*x+0.0156*x*x);
    
     //thefit = Lsqrt.map(x => 0.058*x);
    tracef = { x:  Lsqrt, y:  thefit, name: "C fit", mode: 'lines', line: { width: 2 }, marker: { size: 8},showlegend:false}

    
    
   ;dataT.push(trace);dataT.push(tracef)//,yaxis: 'y2'
    PlotMeta["annotations"]=annotationList;
    PlotMeta["lorientation"]="h";  PlotMeta["legendposy"]="1.1";  PlotMeta["legendposx"]="0.35"
    PlotMeta["xName"] = "$\\Large{\\sqrt{L\\text{(nH)}}}$"; PlotMeta["yName"] = "$\\Large{R_1}$"
    PlotMeta["data"] = dataT; PlotMeta["divid"] = "ccCoilsPCCorr1"
    PlotMeta["wheight"] = 435;  
    //PlotMeta["y2title"] = "$\\Large{\\text{Gain}}$"
     PlotMeta["yhoverformat"]=".2r";PlotMeta["xhoverformat"]=".0f"
 try {genplotter(PlotMeta)} catch (error) {console.error(error)}

/////////////////////////////

 //  $("#filterInput").select2({maximumSelectionLength: 2});
//   fselect=document.getElementById('filterInput');fselect.setAttribute( "onchange", "capacity_plotter('filter_change')");


/////////////////////////////

return partnum[1]
}