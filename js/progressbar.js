        var counter = document.getElementById('counter').getContext('2d');
        var no = 0; // Starting Point
        var pointToFill = 4.72;  //Point from where you want to fill the circle
        var cw = counter.canvas.width;  //Return canvas width
        var ch = counter.canvas.height; //Return canvas height
        var centre_x = cw / 2;
        var centre_y = ch / 2;
        var diff;   // find the different between current value (no) and trageted value (100)

        function fillCounter() {
            diff = ((no / 100) * Math.PI * 2 * 10);

            counter.clearRect(0, 0, cw, ch);   // Clear canvas every time when function is call

            counter.lineWidth = 10;     // size of stroke

            counter.fillStyle = 'rgb(52, 78, 105)';     // color that you want to fill in counter/circle

            counter.strokeStyle = 'rgb(52, 78, 105)';    // Stroke Color

            counter.textAlign = 'center';

            counter.font = "15px monospace";    //set font size and face

            counter.fillText(no + '%', centre_x, centre_y);       //fillText(text,x,y);

            counter.beginPath();
            counter.arc(centre_x, centre_y, centre_x - 20, pointToFill, diff / 10 + pointToFill);    //arc(x,y,radius,start,stop)

            counter.stroke();   // to fill stroke

            // now add condition

            if (no >= 80) {
                clearTimeout(fill);     //fill is a variable that call the function fillcounter()
            }
            no++;
        }

        //now call the function

        var fill = setInterval(fillCounter, 8);     //call the fillCounter function after every 50MS