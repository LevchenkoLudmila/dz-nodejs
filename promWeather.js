const weaser = weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {
    if(err) console.log(err);
    const weather = (JSON.stringify(result, null, 2));
    const temperature = (JSON.parse(weather));
    
    console.log(temperature[0].current.temperature);
    return temperature;
  });
module.exports = {
    weaser
}
