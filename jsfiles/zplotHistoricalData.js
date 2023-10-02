
function getAxis(historicalData,thisPlotMeta){ //

  columnKey=thisPlotMeta["columnKey"];columnKeyRemove=thisPlotMeta["columnKeyRemove"];columnValue=thisPlotMeta["columnValue"];
  columnValueRemove=thisPlotMeta["columnValueRemove"];filterByColumn=thisPlotMeta["filterByColumn"];
  filterbyValueList=thisPlotMeta["filterbyValueList"];excludeThis=thisPlotMeta["excludeThis"];

  var returnlist=[]; returnlistx=[];returnlisty=[]
  for (j = 0; j < historicalData.length; j++) { 
     var skipthis=0; if(historicalData[j][columnKey]== undefined){skipthis=1}; //console.log("j:"+j+", "+historicalData[j][columnKey]+", skip="+skipthis)
     if(skipthis==0){if(historicalData[j][columnKey].substring(0,1)=="*" |historicalData[j][columnKey]==""){skipthis=1}}
     
     if(skipthis==0){if(filterByColumn!=""){  if( (!filterbyValueList.includes(historicalData[j][filterByColumn]))^excludeThis ){skipthis=1}   }  } // applt the filter, if any
     if(skipthis==0){
        xval=historicalData[j][columnKey].replace(columnKeyRemove,"")
        if(columnKey=="logDate"){
         xval=xval.split(" ")[0] ; 
          if(xval.includes("-")){
            xvals=xval.split("-")
            xval=xvals[2]+"-"+xvals[0]+"-"+xvals[1]
          }
          //xval=xval.replace("/","-") ;
          console.log(xval)
         }
        returnlistx.push(xval)
        returnlisty.push(historicalData[j][columnValue].replace(columnValueRemove,""))

          }
  }
  returnlist.push(returnlistx);returnlist.push(returnlisty)
  return returnlist
  }

function plotHistoricalData(historicalData,coinName,wheight){
  
//console.log("historicalData");console.log(historicalData)
PlotMetas=[]
if(coinName=="XCH"){

  thisPlotMeta={columnKey: "logDate",columnKeyRemove:"",columnValue:"XCH Price",columnValueRemove:"$",filterByColumn:"XCH Price",
  filterbyValueList:["$0"],excludeThis:1,yName:"XCH Price($)",xName:"Date"}
  PlotMetas.push(thisPlotMeta)  

thisPlotMeta={columnKey: "logDate",columnKeyRemove:"",columnValue:"Netspace",columnValueRemove:" EiB",filterByColumn:"Netspace",
filterbyValueList:["0.00 EiB"],excludeThis:1,yName:"Netspace(EiB)",xName:"Date"}
PlotMetas.push(thisPlotMeta)


thisPlotMeta={columnKey: "logDate",columnKeyRemove:"",columnValue:"Total XCH",columnValueRemove:"",filterByColumn:"",
filterbyValueList:[""],excludeThis:1,yName:"Total XCH",xName:"Date"}
PlotMetas.push(thisPlotMeta)

thisPlotMeta={columnKey: "logDate",columnKeyRemove:"",columnValue:"Total XCH($)",columnValueRemove:"b",filterByColumn:"",
filterbyValueList:[""],excludeThis:1,yName:"Total XCH(B $)",xName:"Date"}
PlotMetas.push(thisPlotMeta)


thisPlotMeta={columnKey: "logDate",columnKeyRemove:"",columnValue:"Unique address count",columnValueRemove:"",filterByColumn:"",
filterbyValueList:[""],excludeThis:1,yName:"UniqueAddresses",xName:"Date"}
PlotMetas.push(thisPlotMeta)

thisPlotMeta={columnKey: "logDate",columnKeyRemove:"",columnValue:"Fees / Coins",columnValueRemove:"",filterByColumn:"XCH Price",
filterbyValueList:["0"],excludeThis:1,yName:"Fees/Coins",xName:"Date"}
PlotMetas.push(thisPlotMeta) 

thisPlotMeta={columnKey: "logDate",columnKeyRemove:"",columnValue:"XCH/TiB Day",columnValueRemove:"XCH",filterByColumn:"XCH Price",
filterbyValueList:["0"],excludeThis:1,yName:"XCH/TiB Day",xName:"Date"}
PlotMetas.push(thisPlotMeta)  

thisPlotMeta={columnKey: "logDate",columnKeyRemove:"",columnValue:"Farmed XCH",columnValueRemove:"",filterByColumn:"",
filterbyValueList:[""],excludeThis:1,yName:"Farmed XCH",xName:"Date"}
PlotMetas.push(thisPlotMeta)

}
if(coinName=="FIL"){

thisPlotMeta={columnKey: "logDate",columnKeyRemove:"",columnValue:"Current Price",columnValueRemove:"$",filterByColumn:"Current Price",
filterbyValueList:["$0"],excludeThis:1,yName:"FIL Price($)",xName:"Date"}
PlotMetas.push(thisPlotMeta)

  thisPlotMeta={columnKey: "logDate",columnKeyRemove:"",columnValue:"Network Storage Power",columnValueRemove:" EiB",filterByColumn:"",
  filterbyValueList:[],excludeThis:1,yName:"Network Storage Pow(EiB)",xName:"Date"}
  PlotMetas.push(thisPlotMeta)
  
  thisPlotMeta={columnKey: "logDate",columnKeyRemove:"",columnValue:"Active Miners",columnValueRemove:"",filterByColumn:"",
  filterbyValueList:[],excludeThis:1,yName:"Active Miners",xName:"Date"}
  PlotMetas.push(thisPlotMeta)

  thisPlotMeta={columnKey: "logDate",columnKeyRemove:"",columnValue:"24h FIL Production",columnValueRemove:" FIL",filterByColumn:"",
  filterbyValueList:[],excludeThis:1,yName:"24h FIL Production",xName:"Date"}
  PlotMetas.push(thisPlotMeta)

  thisPlotMeta={columnKey: "logDate",columnKeyRemove:"",columnValue:"Circulating Supply",columnValueRemove:" FIL",filterByColumn:"",
  filterbyValueList:[],excludeThis:1,yName:"Circulating Supply",xName:"Date"}
  PlotMetas.push(thisPlotMeta)

  thisPlotMeta={columnKey: "logDate",columnKeyRemove:"",columnValue:"Cost of Sealing Sectors",columnValueRemove:" FIL/TiB",filterByColumn:"",
  filterbyValueList:[],excludeThis:1,yName:"Sealing Cost(FIL/TiB)",xName:"Date"}
  PlotMetas.push(thisPlotMeta)

  thisPlotMeta={columnKey: "logDate",columnKeyRemove:"",columnValue:"24h Average Mining Reward",columnValueRemove:" FIL/TiB",filterByColumn:"",
  filterbyValueList:[],excludeThis:1,yName:"24h Avg Mining Rewards(FIL/TiB)",xName:"Date"}
  PlotMetas.push(thisPlotMeta)

  thisPlotMeta={columnKey: "logDate",columnKeyRemove:"",columnValue:"Burnt FIL",columnValueRemove:" FIL",filterByColumn:"",
  filterbyValueList:[],excludeThis:1,yName:"Burnt FIL",xName:"Date"}
  PlotMetas.push(thisPlotMeta)

  thisPlotMeta={columnKey: "logDate",columnKeyRemove:"",columnValue:"Block Reward",columnValueRemove:" FIL",filterByColumn:"",
  filterbyValueList:[],excludeThis:1,yName:"Block Reward",xName:"Date"}
  PlotMetas.push(thisPlotMeta)

  thisPlotMeta={columnKey: "logDate",columnKeyRemove:"",columnValue:"Block Height",columnValueRemove:"",filterByColumn:"",
  filterbyValueList:[],excludeThis:1,yName:"Block Reward",xName:"Date"}
  PlotMetas.push(thisPlotMeta)

  thisPlotMeta={columnKey: "logDate",columnKeyRemove:"",columnValue:"StorageReward",columnValueRemove:"",filterByColumn:"",
  filterbyValueList:[],excludeThis:1,yName:"Storage Cost($)",xName:"Date"}
  PlotMetas.push(thisPlotMeta)

  
  thisPlotMeta={columnKey: "logDate",columnKeyRemove:"",columnValue:"Current Sector Initial Pledge",columnValueRemove:" FIL/32GiB",filterByColumn:"",
  filterbyValueList:[],excludeThis:1,yName:"Current Sect. Init. Pledge(FIL/32GiB)",xName:"Date"}
  PlotMetas.push(thisPlotMeta)
  
  
  
  }

//console.log(PlotMetas)
for (k = 0; k < PlotMetas.length; k++) { 

thisPlotMeta=PlotMetas[k]
var graphid="hgraph"+k
//console.log("k:"+k+", graphid="+graphid +",  thisPlotMeta");console.log(thisPlotMeta)
 thedata=getAxis(historicalData,thisPlotMeta);//console.log("formulas");console.log(formulas) 
 //console.log("thedata");console.log(thedata)

 var trace = { x: thedata[0], y:thedata[1], mode: 'lines+markers', type: 'scatter' };
  
xname=thisPlotMeta["xName"];yName=thisPlotMeta["yName"]
 var data = [trace];
 layout = { hovermode: 'closest', margin: {  l: 80, r: 5,      b: 100,      t: 10,      pad: 5 },
    height: wheight*0.4,
    showlegend: false,
    legend: {
      itemsizing:'constant',
      "orientation": "h",
      x: 0.5,
      xanchor: 'center',
      y: 1.06
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
          showline: true,
        title: {
          text:  xname,
          font: {
            family: 'Arial Black',
            size: 14,
            color: '#7f7f7f'
          }
        },
      },
      yaxis: {
          showline: true,
        title: {
          text: yName,
          font: {
            family: 'Arial Black',
            size: 14,
            color: '#7f7f7f'
          }
        }
      }
  };


  const newDiv = document.createElement("div");

  newDiv.id=graphid
  newDiv.className="hplotlyitems"

  // add the newly created element and its content into the DOM
  document.getElementById("historicalplots").appendChild(newDiv)


  Plotly.newPlot(graphid, data,layout);

}


  
}