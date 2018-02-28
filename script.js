
var lineData = [];
$(document).ready(function () {
//    load data
    var lineData = [];
    var height = sessionStorage.getItem('f13');

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var widthfrmUrl = getParameterByName("width");
var heightfrmUrl = parseInt(getParameterByName("height"));
if(heightfrmUrl){
height = heightfrmUrl- 50;
}

    var options = {
        container: "#chart",
        height: 500,
        width:500,
        // width:'250',
        gridy: false,
        // gridx:true,
        uri: "data/data.json",
        header: "LINE CHART",
        showxYaxis:true,
        axisX:true,
        axisY:true,
        ystartsFromZero:true
    }

    loadlineData(options);


});
//responsivenss
/* $(window).on("resize", function () {
 loadlineData();
 });
 */
function loadlineData(options) {
    var current_options = options;

    var lineData = [];
    d3.json('data/data.json', function (error, data) {

        console.log(data)
        lineData = data;
        current_options.data = data;

        var options = new InitializeandPlotLine(current_options);



    })
}
//--------------------------------------------------------------------------------------------------------------
