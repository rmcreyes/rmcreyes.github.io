var progressbars = document.getElementsByClassName('progressbar');
var proficiencies = [80, 75, 60, 35, 50, 60, 65, 40, 40];

function fillProgressbar(progressbar, proficiency) {
    var point_to_fill = 0;
    var starting_point = 4.72;
    var canvas_width = progressbar.canvas.width;
    var canvas_height = progressbar.canvas.height;
    var center_x = canvas_width / 2;
    var center_y = canvas_height / 2;
    var prof = proficiency;

    var diff;

    function fillProgressbarHelper() {
        diff = ((point_to_fill / 100) * Math.PI * 2 * 10);

        progressbar.clearRect(0, 0, canvas_width, canvas_height);
        progressbar.lineWidth = 10;
        progressbar.fillStyle = 'rgb(52, 78, 105)';
        progressbar.strokeStyle = 'rgb(52, 78, 105)';
        progressbar.textAlign = 'center';
        progressbar.font = "15px monospace";
        progressbar.fillText(point_to_fill + '%', center_x, center_y+3);
        progressbar.beginPath();
        progressbar.arc(center_x, center_y, center_x - 20, starting_point, diff / 10 + starting_point);
        progressbar.stroke();

        if(point_to_fill >= prof) {
            clearTimeout(fill);
        }
            
        
        point_to_fill++;
    }

    var fill = setInterval(fillProgressbarHelper, 8);

}

var i;
for(i = 0; i < progressbars.length; i++) {
    fillProgressbar(progressbars[i].getContext('2d'), proficiencies[i]);
}