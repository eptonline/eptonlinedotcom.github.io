// Verify devices permissions access

const devicesStatus = document.querySelector('.devices-status');

const snackbar = () => {
    setTimeout(() => {
        devicesStatus.classList.add('hide');
    }, 10000); // 10s before disappear
};
// Check access permissions
navigator.permissions.query({ name: 'microphone' }).then(function(result) {
    // console.log(result)
    if (result.state == 'granted') {
        devicesStatus.innerHTML = 'Granted';
        // Clear after 10s
        snackbar();
    } else if (result.state == 'prompt') {
        devicesStatus.innerHTML = 'Accept Access Permissions.';
        // Clear after 10s
        snackbar();
    } else if (result.state == 'denied') {
        devicesStatus.innerHTML = 'Please Enable Microphone Device.';
        // Clear after 10s
        snackbar();
    }
});

// Select buttons
const title = document.querySelector('.title');
const rec = document.querySelector('.rec');
const stop = document.querySelector('.stop');
const audioPlay = document.querySelector('.audio');
const stopwatch = document.querySelector('.stopwatch');

// Type of media to rec
let typeOfMedia = {
    audio: true
        //, video: true
};
// Create chunks audio container
let chunks = [];
// Media options
var options = {
        audioBitsPerSecond: 128000,
        videoBitsPerSecond: 2500000,
        mimeType: 'audio/webm'
    }
    // Download counter
let counter = 0;

//
// ─── REC FUNCTION ───────────────────────────────────────────────────────────────

// RecStream init
let recStream;

const recFunction = async() => {
    try {
        // Access to computer devices
        const mediaDevices = await navigator.mediaDevices.getUserMedia(typeOfMedia)
        if (mediaDevices.active === true) {
            // The MediaRecorder() constructor creates a new MediaRecorder object that will record a specified MediaStream. 
            recStream = new MediaRecorder(mediaDevices, options);


             let vidSave = document.getElementById('vid2');
            //console.log(recStream)
            recStream.ondataavailable = e => {
                    // console.log(e)
                    // Push media data inside the array
                    chunks.push(e.data);
                    // If state inactive stop recording
                    if (recStream.state == 'inactive') {
                        // console.log(chunks)
                        // Create a new Blob with the array created
                        let blob = new Blob(chunks, { type: 'audio/mp3' });
                        // Create a Playback and pass it the blob
                        let videoURL = window.URL.createObjectURL(blob);
                        vidSave.href = videoURL;
                        vidSave.download = `Interview-Audio-${Math.floor(Math.random()*quotes.length)}-${Date.now()}.mp3`;
                    }
                }
                // Start Recording in 1s
                // recStream.start(1000)
                // Start rec now
            recStream.start()
        }
    } catch (error) {
        if (error) console.log(error);
    }
}

// REC CLICK BUTTON EVENT LISTENER
rec.onclick = e => {
        // During registration disable rec button
        rec.disabled = true;
        // Change background color
        rec.hidden = true;
        // Animate rec button
        rec.classList.add('scale');
        // Enable stop button (default disabled)
        stop.disabled = false;
        stop.hidden = false;
            // Start recording
        recFunction()
            // START STOPWATCH
        clearInterval(swInterval);
        swIternal = setInterval(stopwatchFunction, 1000);
        timeReduce();
    }
    // STOP REC BUTTON EVENT LISTENER
stop.onclick = e => {
    // Enable rec button
    rec.disabled = true;
    // Restore red color on rec button
    rec.hidden = true;
document.getElementById("linkk").style.display = "block";
document.getElementById("retry").style.display = "block";
document.getElementById("quotation").style.display = "block";
document.getElementById("sama").style.display = "block";
    // Disable stop button
    stop.hidden = true;
        // STOP and Reset STOPWATCH
    clearInterval(swIternal);
    sec = 0;
    min = 0;
    // Stop Recording
    recStream.stop()
 clearInterval(timer);
 stopwatch.hidden=true;
}

// STOPWATCH
let swInterval;
let displayStopwatch;
let sec = 0;
let min = 0;
let stopwatchFunction = () => {
    sec++
    if (sec <= 9) {
        sec = '0' + sec;
    }
    if (sec === 60) {
        sec = 0;
        min++
        if (min <= 9) {
            min = '0' + min;
        }
    }
    if (min === 60) {
        min = 0;
    }
    displayStopwatch = ' Min: ' + min + ' : ' + 'Sec: ' + sec;
    // Write output to the screen
    stopwatch.innerHTML ='<text style="color: orange;font-style: bold;" >Recodring...</text>'+ displayStopwatch;
};







//My Scripts
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const quotes = [
    { 
        "quote" : "This is a photo of six or seven firefighters getting out of a red helicopter. If I had to guess, I’d say that they’re probably getting ready to do practice drills.", 
        "source" : "https://zenon70.github.io/repository/detimages/firefighters.jpg" 
    },
    {
        "quote" : "This picture shows two young women holding hands in a green field. The women on the rights is taking photo with her camera and laughing loudly. They must be best friends.", 
        "source" : "https://zenon70.github.io/repository/detimages/two-young-women.jpg"
    },
    {
        "quote" : "This is a photo of a woman with her dog sitting near a lake. They are sitting on the grass right next to each other and facing the lake. It looks like the sun is just about to set.", 
        "source" : "https://zenon70.github.io/repository/detimages/woman-with-dog.jpg"
    },
    {
        "quote" : "In this photo, a cute brown dog is resting his head on someone’s laptop. The dog is probably bored and waiting for his owner to finish working so that they can play.", 
        "source" : "https://zenon70.github.io/repository/detimages/brown-dog.jpg"
    },
    {
        "quote" : "In this image shows someone pressing dough on a brown wooden table. The person is using both hands to mix dough and is probably going to use it to make a pizza.", 
        "source" : "https://zenon70.github.io/repository/detimages/pressing-dough.jpg"
    },
    {
        "quote" : "This picture of two elderly women who are probably good friends . One lady standing up with her hands on the other’s shoulders. The lady who is sitting down is looking at the camera.", 
        "source" : "https://zenon70.github.io/repository/detimages/two-elderly-women.jpg"
    },
    {
        "quote" : "This is a picture of a completely empty subway car. It looks like a modern subway with two rows of clean blue seats on each side of the car with advertisements above them.", 
        "source" : "https://zenon70.github.io/repository/detimages/subway-car.jpg"
    },
    {
        "quote" : "This is a great photo of an amusement park at night time. The two rides in this image are lit up with orange lights and are spinning quickly.", 
        "source" : "https://zenon70.github.io/repository/detimages/amusement-park.jpg"
    },
    {
        "quote" : "This is a picture of a woman throwing colorful powder and smiling. There is a group of women around her doing the same thing and laughing. This photo was probably taken at a festival.", 
        "source" : "https://zenon70.github.io/repository/detimages/woman-throwing-color.jpg"
    },
    {
        "quote" : "This picture is of a traffic jam in a large city. The cars are parked parallel to each other, and there are tall office buildings on either side of them. They must be stuck in heavy traffic.", 
        "source" : "https://zenon70.github.io/repository/detimages/parked-parallel.jpg"
    },
    {
        "quote" : "This picture shows a young woman reading a book on a beautiful summer’s day. She is sitting on a grey rock in a stunning garden.", 
        "source" : "https://zenon70.github.io/repository/detimages/woman-reading.jpg"
    },
    {
        "quote" : "In this photograph, a brown cow lying down in an open field . He is wearing a bell collar around his neck and tag on his ear.", 
        "source" : "https://zenon70.github.io/repository/detimages/brown-cow.jpg"
    },
    {
        "quote" : "In this photo, there is a person sitting directly under a tree near the ocean. There are a few small islands in distance.", 
        "source" : "https://zenon70.github.io/repository/detimages/person-ocean.jpg"
    },
    {
        "quote" : "In this picture, a cat is staring intensely at a chessboard. The cat’s eyes are extremely focused on the chess pieces, and I thing he is about to knock them off the board.", 
        "source" : "https://zenon70.github.io/repository/detimages/cat-staring.jpg"
    },
    {
        "quote" : "This is a night time photo of a beach in a metropolitan city. There are a lot of people on the beach and even though it is night time, some of them are in the sea.", 
        "source" : "https://zenon70.github.io/repository/detimages/metropolitan.jpg"
    },
    {
        "quote" : "This is a photo of a man playing cards on the street. He is sitting down with no shoes on. I am sure he is playing with someone of his friends, but we can’t see them.", 
        "source" : "https://zenon70.github.io/repository/detimages/man-cards.jpg"
    },
    {
        "quote" : "This picture shows a saxophone player playing music with a group of other musicians. All the musicians are lined up in a straight line and playing together.", 
        "source" : "https://zenon70.github.io/repository/detimages/saxophone.jpg"
    },
    {
        "quote" : "This image shows a chef smelling a green vegetable. The chef is wearing his white chef uniform and also a red scarf. He looks like a professional chef at a restaurant.", 
        "source" : "https://zenon70.github.io/repository/detimages/chef.jpg"
    },
    {
        "quote" : "This is an image of a beautiful beach. There are two beach chairs that are underneath a large beach umbrella. The calm, blue ocean is in the background of the photo.", 
        "source" : "https://zenon70.github.io/repository/detimages/beach-chairs.jpg"
    },
    {
        "quote" : "This is an image of a young man surfing a wave. He is wearing a green wetsuit that has orange stripes on the right leg. He seems to be a great surfer.", 
        "source" : "https://zenon70.github.io/repository/detimages/man-surfing.jpg"
    },
    {
        "quote" : "This photo shows a man hitchhiking in a forest. He is standing next to a bending road and holding his left hand out to grab driver’s attention. The road seems very quiet.", 
        "source" : "https://zenon70.github.io/repository/detimages/man-hitchhiking.jpg"
    },
    {
        "quote" : "This photo of a man fishing in the sea. He is holding the fishing rod in the right hand, and is wearing a blue cap and a grey backpack.", 
        "source" : "https://zenon70.github.io/repository/detimages/man-fishing.jpg"
    },
    {
        "quote" : "In this image, I can see a ski resort and huge mountains covered in snow behind the buildings. The hotels are all made of wood and are at the bottom of mountains.", 
        "source" : "https://zenon70.github.io/repository/detimages/resort-mountains.jpg"
    },
    {
        "quote" : "In this photograph, a cat is cleaning himself with his tongue. He’s licking one of his white paws with his pink tongue while his eyes are shut closed.", 
        "source" : "https://zenon70.github.io/repository/detimages/cat-cleaning.jpg"
    },
    {
        "quote" : "This photo shows two men about to begin an arm-wrestling match. There is quite a lot of money on the table, so I guess they’re gambling.", 
        "source" : "https://zenon70.github.io/repository/detimages/arm-wrestling.jpg"
    },
    {
        "quote" : "This image shows a breakfast buffet set out for guests at a hotel. There are different kinds of cereal, fruit, and pastries ready for the guest to eat when they arrive.", 
        "source" : "https://zenon70.github.io/repository/detimages/buffet.jpg"
    },
    {
        "quote" : "This image shows a large crowd of people at a small venue watching a musical act. It looks like there is a singer or rapper on stage and everyone is having a good time.", 
        "source" : "https://zenon70.github.io/repository/detimages/stage.jpg"
    },
    {
        "quote" : "This photo shows three girls on a running track at sunset. The two girls in front are running next to each other while the other girl is a few steps behind them.", 
        "source" : "https://zenon70.github.io/repository/detimages/running-track.jpg"
    },
    {
        "quote" : "In this image, we see a barber cutting another man’s hair. The barber is very stylish, and he is concentrating as he cuts his customer’s hair.", 
        "source" : "https://zenon70.github.io/repository/detimages/barber.jpg"
    },
    {
        "quote" : "In this photo, I can see three women dressed in traditional clothing. They are standing next to each other and old wooden building is behind them. I guess they are attending a cultural festival.", 
        "source" : "https://zenon70.github.io/repository/detimages/traditional-clothing.jpg"
    },
    {
        "quote" : "This is a photo of building, possibly a parking lot, covered with green plants from the ground to the top floor. This seems to be an old parking lot that has recently been renovated.", 
        "source" : "https://zenon70.github.io/repository/detimages/parking-lot.jpg"
    },
    {
        "quote" : "In this picture, a woman is painting a traditional fountain in a park. The fountain has stone sculptures of three people who are playing in the water. The painting looks exactly like the actual fountain.", 
        "source" : "https://zenon70.github.io/repository/detimages/painting.jpg"
    },
    {
        "quote" : "This is a photo of huge firework display at night time. There are at least seven fireworks of all different colors exploding at the exact same time directly over the tall buildings that are in the background of the photo.", 
        "source" : "https://zenon70.github.io/repository/detimages/firework.jpg"
    },
    {
        "quote" : "This is a picture of a kangaroo standing in a field surrounding by long green grass. It is looking forward with its eyes wide open.", 
        "source" : "https://zenon70.github.io/repository/detimages/kangaroo.jpg"
    },
    {
        "quote" : "In this photo a woman is lying down in front of a fireplace. She is holding a cup of coffee in her hands and looking directly at the fire. There is some more firewood to her right.", 
        "source" : "https://zenon70.github.io/repository/detimages/fireplace..jpg"
    },
    {
        "quote" : "In this is a photo of an airplane flying above two modern skyscrapers. The two skyscrapers are on the left and right side of the image and airplane is flying in between them.", 
        "source" : "https://zenon70.github.io/repository/detimages/airplane-flying.jpg"
    },
    {
        "quote" : "This picture depicts a group of teenagers including two boys and two girls. Additionally, they are busy in making some notes as they are holding pen in their hands and paper on the table. In the background, it can be seen that it is a day time.", 
        "source" : "https://zenon70.github.io/repository/detimages/teenagers.jpg"
    },
    {
        "quote" : "A clean and spacious living room can be seen in the image. Moreover, two single sofas and a round chair is also kept there. Blue stairs and room on the upper level can be seen in the background.", 
        "source" : "https://zenon70.github.io/repository/detimages/living-room.jpg"
    },
    {
        "quote" : "This picture depicts a scene of vegetable market. In the foreground, a vegetable seller can be seen sitting in front of the various vegetables. In the background, some people and two-wheeler can be seen.", 
        "source" : "https://zenon70.github.io/repository/detimages/vegetable.jpg"
    },
    {
        "quote" : "The given image shows a scene of an airport and a girl sitting on the ground can be seen. She is wearing black sunglass and black trousers. In the background, an airplane can be seen.", 
        "source" : "https://zenon70.github.io/repository/detimages/airport-girl.jpg"
    },
    {
        "quote" : "The given image shows an old-age man playing football with a boy. Moreover, they both are wearing blue shirt and playing in the park. In the background, many trees can be seen.", 
        "source" : "https://zenon70.github.io/repository/detimages/age-football.jpg"
    },
    {
        "quote" : "The given image shows a scene of a doctor’s clinic and a patient can also be seen. Moreover, doctor and patient are talking to each other. In the background, a clear sky can be seen from the window and few instruments are also visible.", 
        "source" : "https://zenon70.github.io/repository/detimages/doctor-patient.jpg"
    },
    {
        "quote" : "This image shows a man and a woman sitting next to each other on a bench in a park and they upset about something.", 
        "source" : "https://zenon70.github.io/repository/detimages/man-woman.jpg"
    },
    {
        "quote" : "This is a photograph of a brown dog standing next to a large lake on a beautiful evening. The dog is roughly in the middle of the photo and looks to be staring intently at something in front of him.", 
        "source" : "https://zenon70.github.io/repository/detimages/dog-standing.jpg"
    },
    {
        "quote" : "This image shows a man working casually on his laptop. He is sitting comfortably on a grey sofa and typing with his right hand. He looks like an entrepreneur.", 
        "source" : "https://zenon70.github.io/repository/detimages/entrepreneur.jpg"
    },
    {
        "quote" : "In this photo you can see a football fan in a large stadium. He is holding the Brazilian national flag over his head and cheering his team. This photo was probably taken during World Cup match.", 
        "source" : "https://zenon70.github.io/repository/detimages/football-fan.jpg"
    },
     { 
        "quote" : "This picture shows a group of female students attending a test. Except for the student at the far right, everyone seems to have their full attention on the question paper.", 
        "source" : "https://zenon70.github.io/repository/detimages/studexam.png" 
},
 { 
        "quote" : "This picture shows a girl dressed in white pullovers and blue jeans reading books in a library. The girl seems to be quite enjoying what she is reading.", 
        "source" : "https://zenon70.github.io/repository/detimages/libgirl.png" 
},
 { 
        "quote" : "The picture is showing a lonely girl dressed in all black sitting on a bench of a park situated beside a lake. The girl is expecting someone to join her, as she is sitting at the far left of the bench, leaving more than half of the bench vacant as if she was determined to be alone, she would have sat at the middle of the bench.", 
        "source" : "https://zenon70.github.io/repository/detimages/unicampgirl.png" 
},
 { 
        "quote" : "The picture given is depicting a group of women attending a yoga session in the park with comfortable yoga clothes on. The group is seen doing differentiated yoga practice, as some are seen raising a foot while two of them have both their feet on the ground.", 
        "source" : "https://zenon70.github.io/repository/detimages/yogaprac.png" 
},
 { 
        "quote" : "The photo appears to be of a water ride from an amusement park in which a large number of people are enjoying themselves with water rides. The movement and safety of the individuals is observed by the authoritative guards at the center of the water ride.", 
        "source" : "https://zenon70.github.io/repository/detimages/watergarden.png" 
},
 { 
        "quote" : "The picture shows a busy street of a foreign country in which a number of taxis are seen on the road. There is also quite a large number of private cars parked on the side of the road.", 
        "source" : "https://zenon70.github.io/repository/detimages/kolkatataxi.png" 
},
 { 
        "quote" : "The photo shows two elderly people walking with their pet dog. The photo seems to have been taken after the coronavirus pandemic, as there isn’t any notable pollution around, however, both of the people are seen here with masks on.", 
        "source" : "https://zenon70.github.io/repository/detimages/liesuretime.png" 
},
 { 
        "quote" : "The picture depicts a group of construction workers working on the road. The workers seem to be on a break, as a road roller is attached to the road.", 
        "source" : "https://zenon70.github.io/repository/detimages/roadworkers.png" 
},
 { 
        "quote" : "This picture is about a group of people attending an office meeting over a table. A certain individual is giving a speech while the others are listening to what he has to say.", 
        "source" : "https://zenon70.github.io/repository/detimages/scrummeeting.png" 
}
];


function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `“${random.quote}.”`;

var image = document.createElement("img");
image.onload = function(){
    document.getElementById("image").appendChild(image);
}

  image.src =random.source;
}


//Update Timer on screen
function updateTimer() {
  if (time == 0) {
    //End test if timer reaches 0
      recStream.stop();
    clearInterval(swInterval);
  } else {
    document.getElementById("timer").innerText = --time + "s";
  }
}

//Sets timer
const timeReduce = () => {
  time = 180;
  timer = setInterval(updateTimer, 1000);
};

let time = 180;
let timer = "";


window.onload = () => {
timer = "";
document.getElementById("linkk").style.display = "none";
randomQuote();
document.getElementById("quotation").style.display = "none";
document.getElementById("sama").style.display = "none";
stop.disabled = true;
stop.hidden = true;
document.getElementById("retry").style.display = "none";
};






 function reload() {
       location.reload();
 }

