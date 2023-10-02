function  slicetheurl()
 {

var urlParams;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);
        //console.log(query)

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
      })();

      var  urlkeys=Object.keys(urlParams)

    return[urlkeys,urlParams]

 }

 
function buildurl(mode) {



try {var dDown=document.getElementsByClassName("select")}catch (exception_var) {  dDown=[]}

selectedtext=""
selectedVtext=""

for (it = 0; it < dDown.length; it++) {
  theid='#'+dDown[it].id
  var sels =  $(theid).val() 
  if( sels ) {
//Number(document.getElementById('CurrentNetworkSize').value)
    if(selectedtext==""){selectedtext=selectedtext+dDown[it].id+"="+sels.toString()}else{
      selectedtext=selectedtext+"&"+dDown[it].id+"="+sels.toString()}

    if( dDown[it].id=='filterOutput'){

for(ss=0;ss<sels.length;ss++){
if(selectedVtext==""){selectedVtext=document.getElementById(sels[ss]).value}else{selectedVtext=selectedVtext+","+document.getElementById(sels[ss]).value}
    
  }
    }

  }
}
 //   console.log("selectedVtext:"+selectedVtext)
  // for (it2 = 0; it2 < sels.length; it2++) { }

  //if(selectedtext!=""){selectedtext=selectedtext+"&specs="+selectedVtext}
    
//console.log(selectedtext)




  //alert(filters)
  var getUrl = window.location;
var baseUrl = getUrl .protocol  + getUrl.host  + getUrl.pathname;
hrefS=getUrl.href.split("#");
//console.log(hrefS)
//console.log("getUrl:"+getUrl)
//console.log(getUrl)
//console.log("baseUrl="+baseUrl)
 theurl= ""; // "?coin="+coinName
sliderset=""
 mySliders=document.getElementsByClassName("regular-slider")
//console.log(mySliders)
//theurl= theurl+"&slLL="+toggle_yaxisSlider.noUiSlider.get().toString()
for(si=0;si<mySliders.length;si++){
  thisslider=mySliders[si]
  incomingtext=thisslider.noUiSlider.get().toString()
  //console.log(thisslider.id)
  if(thisslider.id.includes("date")){
    incomingtextS=incomingtext.split(" ")
    incomingtext=incomingtextS[2]+"-"+(months.indexOf(incomingtextS[1])+1)+"-"+incomingtextS[0]
  }
 // console.log("thisslider.id:"+thisslider.id+"; value:"+ incomingtext)
  if(sliderLookUp[thisslider.id]['start'][0]!=incomingtext){ sliderset=sliderset+"&"+thisslider.id+"="+incomingtext}
}

sliderset=sliderset.substring(1)

if(sliderset==""){theFurl=window.location.href;}
//console.log(sliderset)
if(sliderset==""){jointfilter=selectedtext}
if(selectedtext==""){jointfilter=sliderset}
if(selectedtext!="" && sliderset!=""){jointfilter=sliderset+"&"+selectedtext}

tablink = document.getElementsByClassName("tablink");
for (i = 0; i < tablink.length; i++) {    if( tablink[i].className.includes("orange")){defaulttab=i};  }


if(jointfilter!=""){jointfilter=jointfilter+"&mode="+defaulttab}else{jointfilter="mode="+defaulttab}

if(hrefS.length>1){jointfilter =jointfilter +"#"+hrefS[1] }
theFurl=baseUrl+ "?"+jointfilter 

if(jointfilter==""){theFurl=window.location.href;}
//console.log("Full url copied:"+theFurl)





 //alert( )
 //console.log(theurl);

    // Create new element
    var el = document.createElement('textarea');
   // Set value (string to be copied)
   el.value = theFurl;
   // Set non-editable to avoid focus and move outside of view
   el.setAttribute('readonly', '');
   el.style = {position: 'absolute', left: '-9999px'};
   document.body.appendChild(el);
   // Select text inside element
   el.select();
   // Copy text to clipboard
   document.execCommand('copy');
   // Remove temporary element
   document.body.removeChild(el);

  // $("#urlcopied").css("backgroundColor", "white");

  if(mode==1){
            $("#urlcopied").css("visibility", "visible");;
    setTimeout(function(){$("#urlcopied").css("visibility", "hidden")}, 1000) //window.prompt("Copy to clipboard: Ctrl+C, Enter", theurl);
  }else{
    return theFurl
  }
}


// script to create plot/tables/sliders

function createSliders() {
   // console.log("createSliders Started now")

   // console.log("createSliders Started")

    returnlist=  slicetheurl() //urlkeys,urlParams  url like ?time_day=xa&date=ya 
 
 
    keysinurl=returnlist[0]
    pairsinurl=returnlist[1]
//console.log(returnlist) 
//console.log(keysinurl) 

  filterList=[]
   for (let step = 0; step < keysinurl.length; step++) {
     if(keysinurl[step].slice(0,'filterInput'.length )=='filterInput'){
        filterList.push(keysinurl[step])
     }
   }
  // console.log(filterList)
  
 for (let stept = 0; stept < filterList.length; stept++) {
      
    theFV=pairsinurl[filterList[stept]]
    theFVs=theFV.split(",")
   //console.log(theFVs)
   
   // $("#filterInput").empty() //empty select

  vallist=[]
    
    
            for (let step = 0; step < theFVs.length; step++) {
                vallist.push(theFVs[step]) 
            }
            
            $("#"+filterList[stept]).val(vallist).trigger('change');


  }
  
  
  
 
  try {
 
     tabs=document.getElementById('my-bar').getElementsByTagName('button')



   
    if(keysinurl.includes("mode")){
      defaulttab=pairsinurl["mode"]
    }

    //var thismode = 1;//getQueryString('mode');
    if(defaulttab!==null){ if(parseInt(defaulttab)<3){defaulttab= parseInt(defaulttab)}}
    
    if(tabalreadyset==0){
     try {tabs[defaulttab].click()}catch(err) {tabs[2].click()}
     
    }

}catch(err) {}

var sliderLookUpKeys=Object.keys(sliderLookUp)

sliderLookUpKeys.forEach(function(sliderLookUpKey) {
 // console.log("211 sliderLookUpKey:"+sliderLookUpKey)
try {
  thisS=document.getElementById(sliderLookUpKey)
  theStart=sliderLookUp[sliderLookUpKey]["start"]
  if(keysinurl.includes(sliderLookUpKey)){
    theStart=pairsinurl[sliderLookUpKey]
  }
  //console.log(thisS)
  if(sliderLookUp[sliderLookUpKey]["mapFormats"]=== undefined){
    noUiSlider.create( thisS, {
      start: theStart  , margin: 0,tooltips:sliderLookUp[sliderLookUpKey]["tooltips"], step:sliderLookUp[sliderLookUpKey]["step"],range: {min: sliderLookUp[sliderLookUpKey]["min"] , max: sliderLookUp[sliderLookUpKey]["max"] }
    })
  }else{
    mapFormats =sliderLookUp[sliderLookUpKey]["mapFormats"] 
    noUiSlider.create( thisS, {
      start: theStart  , tooltips: {  to:function(a){  return sliderLookUp[sliderLookUpKey]["mapFormats"] [a];      }},range: {min: sliderLookUp[sliderLookUpKey]["min"] , max: sliderLookUp[sliderLookUpKey]["max"] }
    })
  }
}catch(err) {}
  
})

//console.log("sliderLookUpKeys")
//console.log(sliderLookUpKeys)


sliderLookUpKeys.forEach(function(sliderLookUpKey) {
 // console.log("update sliderLookUpKey:"+sliderLookUpKey+"; "+sliderLookUp[sliderLookUpKey]['function'])
element=document.getElementById(sliderLookUpKey) 
    if (typeof(element) != 'undefined' && element != null){
  element.noUiSlider.on('update', function( values, handle ) { 
 try{eval(sliderLookUp[sliderLookUpKey]['function'])  }catch(err) {}
 
    
  });
}
 })
     

   // console.log("createSliders ended")
}



