function getData(){
 const jsonData = fetch('data.json')
  .then(response => response.json())
  .then(data => {
    var d = data;
    Object.keys(d).forEach(function(group){
      sortGroup(d[group]);
    })
  });
}

function sortGroup(group){
  const ignore = group.ignoreCountryPosition;
  //console.log(group.countries);
  //console.log('.......');
  let printArray = Object.entries(group.countries);
  console.log(printArray);
}

getData();