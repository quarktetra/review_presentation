// script to create plot/tables/sliders

function createSliders() {
  console.log("createSliders Started")

    returnlist=  slicetheurl() //urlkeys,urlParams  url like ?time_day=xa&date=ya 
console.log(returnlist)  
 

if(0){
mySliders=document.getElementsByClassName("regular-slider")
console.log(mySliders)
//theurl= theurl+"&slLL="+toggle_yaxisSlider.noUiSlider.get().toString()
for(si=0;si<mySliders.length;si++){
//console.log(returnlist[1]["sl"+si] )
sliderid=mySliders[si].id
if(sliderid.includes("date"))
{
  document.getElementById(sliderid).noUiSlider.set(24*60*60*1000+timestamp(returnlist[1]["sl"+si] ))
}else{
  document.getElementById(sliderid).noUiSlider.set(returnlist[1]["sl"+si] )};
}
}

//s_swapF={'0':'No Replacement', '1':'Replacement'};sliderLookUp["s_swap"]={"start":0.00,"min":[0, 1], "max":1,"mapFormats" :s_swapF,"colname":""  }
//s_yaSF={'0':'Lin', '1':'Log'} ;sliderLookUp["s_yaS"]={"start":1.00,"min":[0, 1], "max":1,"mapFormats" :s_yaSF ,"colname":"" }
//s_inc_excF={'0':'Excluded', '1':'Included'};sliderLookUp["s_inc_exc"]={"start":0.00,"min":[0, 1], "max":1,"mapFormats" : s_inc_excF ,"colname":"" }
//s_xaF={'0':'time', '1':'headCDF', '2':'Write WL', '3':'Temperature'};  sliderLookUp["s_xa"]={"start":0.00,"min":[0, 1,2,3], "max":3,"mapFormats" :s_xaF ,"colname":"" }
//s_yaF={ '0':'CDF(%)', '1':'CAP(%)', '2':'ReMan Rates(%)'} ;  sliderLookUp["s_ya"]={"start":0.00,"min":[0, 1], "max":1,"mapFormats" :s_yaF ,"colname":"" }

var sliderLookUpKeys=Object.keys(sliderLookUp)
//console.log("sliderLookUpKeys")
//console.log(sliderLookUpKeys)
sliderLookUpKeys.forEach(function(sliderLookUpKey) {
  
try {
  thisS=document.getElementById(sliderLookUpKey)
  //console.log(thisS)
  if(sliderLookUp[sliderLookUpKey]["mapFormats"]=== undefined){
    noUiSlider.create( thisS, {
      start: [sliderLookUp[sliderLookUpKey]["start"]  ], margin: 0,tooltips:sliderLookUp[sliderLookUpKey]["tooltips"], step:sliderLookUp[sliderLookUpKey]["step"],range: {min: sliderLookUp[sliderLookUpKey]["min"] , max: sliderLookUp[sliderLookUpKey]["max"] }
    })
  }else{
    mapFormats =sliderLookUp[sliderLookUpKey]["mapFormats"] 
    noUiSlider.create( thisS, {
      start: [sliderLookUp[sliderLookUpKey]["start"]  ], tooltips: {  to:function(a){  return sliderLookUp[sliderLookUpKey]["mapFormats"] [a];      }},range: {min: sliderLookUp[sliderLookUpKey]["min"] , max:    sliderLookUp[sliderLookUpKey]["max"] }
    })
  }
}catch(err) {}
  
})

console.log(sliderLookUpKeys)
sliderLookUpKeys.forEach(function(sliderLookUpKey) {
  
  console.log(sliderLookUpKey+":"+sliderLookUp[sliderLookUpKey]['function'])
  document.getElementById(sliderLookUpKey).noUiSlider.on('update', function( values, handle ) { 
    try { eval(sliderLookUp[sliderLookUpKey]['function'])  }catch(err) {}
    
  });
 })
     

   // console.log("createSliders ended")
}


