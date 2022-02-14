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
                        vidSave.download = `eptOnline-Interview-Audio-${Math.floor(Math.random()*quotes.length)}-${Date.now()}.mp3`;
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
},
{ 
        "quote" : "A group of people is waving their hands, and it looks like they are enjoying an outdoor music concert.", 
        "source" : "https://zenon70.github.io/repository/detimages/groupp.JPG" 
},
{ 
        "quote" : "Two people are riding bikes together and it seems that they are riding at the same speed.", 
        "source" : "https://zenon70.github.io/repository/detimages/twocyride.JPG" 
},
{ 
        "quote" : "Two bears are fighting, and they both look very fierce.", 
        "source" : "https://zenon70.github.io/repository/detimages/twobears.JPG" 
},
{ 
        "quote" : "What we can see from the picture is that two people are standing in the middle, and they are carrying a stack of cartons in their hands. Both of them wear blue uniforms and are smiling, which indicates that they are enjoying the work.", 
        "source" : "https://zenon70.github.io/repository/detimages/twopeop.JPG" 
},
{ 
        "quote" : "We can see from the picture is that there are a team of girls performing on the stage under the shade. Apart from that, there is also a group of audience in the foreground.", 
        "source" : "https://zenon70.github.io/repository/detimages/grpstage.JPG" 
},
{ 
        "quote" : "What we can see is that there is a man in blue standing in front of the gate and making a phone call. He looks frustrated.", 
        "source" : "https://zenon70.github.io/repository/detimages/manphone.JPG" 
},
{ 
        "quote" : "We can see from the picture that there is a leg being placed on a red cushion on the table. A bandage is wrapped around the knee with a patch. Probably an ice pack, which indicates that the knee is injured.", 
        "source" : "https://zenon70.github.io/repository/detimages/icepackonleg.JPG" 
},
{ 
        "quote" : "What we can see from the picture is that an adult man is standing in the middle of a land of forest. The man wears a cap, a white shirt and a pair of khaki pants.", 
        "source" : "https://zenon70.github.io/repository/detimages/adultmanontree.JPG" 
},
{ 
        "quote" : "We can see from the picture that four people are sitting on the chairs and talking to each other. Apparently, they are discussing some issues.", 
        "source" : "https://zenon70.github.io/repository/detimages/familytime.JPG" 
},
{ 
        "quote" : "A little boy is standing on the street by himself. Who looks like yelling at someone.", 
        "source" : "https://zenon70.github.io/repository/detimages/angryboy.JPG" 
},
{ 
        "quote" : "A woman is standing in front of some trees and flowers, with a dinosaur toy in her hand.", 
        "source" : "https://zenon70.github.io/repository/detimages/puppettoygirl.JPG" 
},
{ 
        "quote" : "A man is waiting beside the signal light and is ready to cross the road.", 
        "source" : "https://zenon70.github.io/repository/detimages/waitingmanonroad.JPG" 
},
{ 
        "quote" : "A girl is standing next to a brick wall. She is wearing a white T-shirt with the word RADIO on it. She seems incredibly surprised about something in front of her.", 
        "source" : "https://zenon70.github.io/repository/detimages/standinggirlonwall.JPG" 
},
{ 
        "quote" : "These two young ladies are shopping in a store. They are standing in front of a fridge and comparing two different kinds of drinks. The blond one is holding a bottle of milk while the other one who is wearing glasses chose a bottle of juice.", 
        "source" : "https://zenon70.github.io/repository/detimages/twogirlonshopping.JPG" 
},
{ 
        "quote" : "This image is taken in a living room. The woman is holding a baby in her arms. A little girl is smiling at them. They seem to have a good time staying together.", 
        "source" : "https://zenon70.github.io/repository/detimages/homemomwithtwo.JPG" 
},
{ 
        "quote" : "This image is about the scenery of a remote place. We can see a middle-aged man wearing a blue jacket walking on a country road. There is bare mountain behind him. The man is standing in front of a clothing shop.", 
        "source" : "https://zenon70.github.io/repository/detimages/manremotetravel.JPG" 
},
{ 
        "quote" : "A young mother is taking her son to protest. There are thousands of angry people behind them. The young mom looks very serious with a bottle of water hold tightly in her right hand. The little boy is wearing glasses and looking around.", 
        "source" : "https://zenon70.github.io/repository/detimages/momtakingherson.JPG" 
},
{ 
        "quote" : "The lady is eating a hamburger. She is sitting in front of a store. She is wearing a black dress and black boots. She has blond hair and seems really hungry.", 
        "source" : "https://zenon70.github.io/repository/detimages/girleatingburger.JPG" 
},
{ 
        "quote" : "This picture is taken in a conference room, and there are four people in total. Three of them are discussing something and staring at the screen of the computer. They both look very serious.", 
        "source" : "https://zenon70.github.io/repository/detimages/conferenceroommet.JPG" 
},
{ 
        "quote" : "This image could be taken in zoo. The lady is trying to play with dolphin. They both look happy.", 
        "source" : "https://zenon70.github.io/repository/detimages/ladywithdolphin.JPG" 
},
{ 
        "quote" : "It is a lovely day, and people are enjoying their time on the beach. In the middle of the picture, there are two girls. One of the girls is reading a book while the other is looking at her.", 
        "source" : "https://zenon70.github.io/repository/detimages/gfbfatbeach.JPG" 
},
{ 
        "quote" : "We can see a family from this picture. The parents are holding a baby girl. They are trying to teach her to dance. The girl is wearing a dress and looks happy.", 
        "source" : "https://zenon70.github.io/repository/detimages/threefamilymemberatremote.JPG" 
},
{ 
        "quote" : "What we can see from the picture is that a person is standing by wall. The wall is made of concrete, and it is grey. The person is holding a huge ice block, making it stand on the scale on the table, and there is a laptop beside it to perform the calculation.", 
        "source" : "https://zenon70.github.io/repository/detimages/girlinaiceblockwithitems.JPG" 
},
{ 
        "quote" : "What we can see is that two woman are walking in the street. One of them is pushing a pram, and the other one has a water bottle in one her hands. There are many other pedestrians in the street as well. They are all heading towards the same direction. There is probably some sort of public assembly they are going to attend.", 
        "source" : "https://zenon70.github.io/repository/detimages/twowalkinggirlwithbaby.JPG" 
},
{ 
        "quote" : "What we can see from the picture is that there is a bulldozer in front of the house. This kind of machine is primarily used on construction sites, and it is painted in red to make it more noticeable, and it has massive tires.", 
        "source" : "https://zenon70.github.io/repository/detimages/farmartractor.JPG" 
},
{ 
        "quote" : "This image is taken on a street. A man is driving a white car. A cute cat is standing next to his car. They are trying to communicate with each other.", 
        "source" : "https://zenon70.github.io/repository/detimages/streetcatlookcarman.JPG" 
},
{ 
        "quote" : "We can see an old lady sitting with a young girl in the picture. The old lady is reading an electronic book to her granddaughter. They are having a great time. The girl is very interested in the book.", 
        "source" : "https://zenon70.github.io/repository/detimages/grandmomwithyounggirl.JPG" 
},
{ 
        "quote" : "What we can see from the picture is that a little boy is staring at us. Apparently, he is very angry. He is showing his teeth to us, and knitting his brows as if he has been plagued a great pain.", 
        "source" : "https://zenon70.github.io/repository/detimages/staringangryboy.JPG" 
},
{ 
        "quote" : "What we can see from the picture is that there is an old-fashioned train running on the rail. There is white smoke coming out from the locomotive, which indicates burning coals to generate power to drive its heavy carriage forward.", 
        "source" : "https://zenon70.github.io/repository/detimages/lokomotivetrainpik.JPG" 
},
{ 
        "quote" : "What we can from the picture is that there are three people in the room. The man and one of the women are working on a piece of cloth. That woman is using the matching to sew the cloth, and the man is telling her how to alter that piece of cloth by pointing on it with one of his fingers.", 
        "source" : "https://zenon70.github.io/repository/detimages/tailortraningwiththreepeople.JPG" 
},
{ 
        "quote" : "There are a lot of trees planted on the ground, and the trees are shriveled.", 
        "source" : "https://zenon70.github.io/repository/detimages/forestdesart.JPG" 
},
{ 
        "quote" : "A sculpture is lying on the table, and people are looking at it as they walk.", 
        "source" : "https://zenon70.github.io/repository/detimages/momeatmeuseum.JPG" 
},
{ 
        "quote" : "A little boy with short blond hair is sitting inside a box, and he looks cheerful.", 
        "source" : "https://zenon70.github.io/repository/detimages/boyplayingwithcrafbord.JPG" 
},
{ 
        "quote" : "A man is standing in front of a wall, and it seems that he painting it.", 
        "source" : "https://zenon70.github.io/repository/detimages/newhomepaintingboy.JPG" 
},
{ 
        "quote" : "A little boy is holding a bottle, and it looks like he is having fun with his mother.", 
        "source" : "https://zenon70.github.io/repository/detimages/holdingbottleaboywithmom.JPG" 
},
{ 
        "quote" : "There are a lot of bees resting on their beehive.", 
        "source" : "https://zenon70.github.io/repository/detimages/beeschaks.JPG" 
},
{ 
        "quote" : "What we can see from the picture is that there is a large tank proceeding on the road. There is black and white smoke coming out from the background.", 
        "source" : "https://zenon70.github.io/repository/detimages/tankforwarss.JPG" 
},
{ 
        "quote" : "What we can see from the picture is that there is a snowman lying on the ground. It made of purely white snow, and is melting at the moment. There is beneath the snowman, indicating that the snowman is melting probably because of the heat.", 
        "source" : "https://zenon70.github.io/repository/detimages/icepuppetatground.JPG" 
},
{ 
        "quote" : "This picture is taken in the desert. Three people are climbing. They are all carrying black backpacks and wearing sneakers.", 
        "source" : "https://zenon70.github.io/repository/detimages/threefriendsatdesart.JPG" 
},
{ 
        "quote" : "What I can see from the picture is that an adult woman is cooking in the kitchen. She is using a pan to cook on the electrical cooktop. She is smiling, which indicates that she enjoys cooking.", 
        "source" : "https://zenon70.github.io/repository/detimages/beautifulgirlcooking.JPG" 
},
{ 
        "quote" : "Some workers are wearing helmets, and they are standing beside a truck.", 
        "source" : "https://zenon70.github.io/repository/detimages/buldozerworkersatroad.JPG" 
},
{ 
        "quote" : "A dog is sitting in a trolley that is full of groceries.", 
        "source" : "https://zenon70.github.io/repository/detimages/dogattrolley.JPG" 
},
{ 
        "quote" : "A man is walking in supermarket, which is full of different kinds of goods.", 
        "source" : "https://zenon70.github.io/repository/detimages/supershopagirl.JPG" 
},
{ 
        "quote" : "We can see from the picture that there is a group of people marching on the street. They wear strange costumes that look like astronauts. There are also a large number of audiences sitting on the street side, watching the show.", 
        "source" : "https://zenon70.github.io/repository/detimages/annualfestivalpromts.JPG" 
},
{ 
        "quote" : "The picture shows a little boy catching a fish in the sea. They boy wears a black swimming suit.", 
        "source" : "https://zenon70.github.io/repository/detimages/littleboycatchingfish.JPG" 
},
{ 
        "quote" : "The picture shows a woman in black with a baby in her arms. The mother is smiling at the baby, and the baby is crying.", 
        "source" : "https://zenon70.github.io/repository/detimages/newboarnbabywithmom.JPG" 
},
{ 
        "quote" : "There are three people in the picture. Two of them are looking at the camera while the other is in the background, probably passing by. The younger boy wears an academic gown and has a scroll in his hand, which indicates that he is graduating.", 
        "source" : "https://zenon70.github.io/repository/detimages/gradutedsonwithdad.JPG" 
},
{ 
        "quote" : "There is a lake in the foreground and a number of tress and a mountain in the background. All of them are green. Together they form the beautiful scenery.", 
        "source" : "https://zenon70.github.io/repository/detimages/beautifulscenaryoftress.JPG" 
},
{ 
        "quote" : "Two people are standing in front of brick building. The man is hugging the woman with one of his arms, and they look quite happy. The picture is black and white.", 
        "source" : "https://zenon70.github.io/repository/detimages/twolovelypeoplebw.JPG" 
},
{ 
        "quote" : "There are a number of soldiers standing in the street. They are highly disciplined and well-trained. There are also several different flags behind them.", 
        "source" : "https://zenon70.github.io/repository/detimages/armyassemblyatroad.JPG" 
},
{ 
        "quote" : "There are two houses with red walls and black roofs in the foreground, and in the background, there are also a number of other houses on the hill.", 
        "source" : "https://zenon70.github.io/repository/detimages/forestshomelandwithhome.JPG" 
},
{ 
        "quote" : "This picture shows a table with various dishes placed on it. They look delicious, and there is a name card in front of each them. A group of people is gathering together to have a party.", 
        "source" : "https://zenon70.github.io/repository/detimages/buffetsetswithpeoples.JPG" 
},
{ 
        "quote" : "This picture shows the scenery of a beach. It is white and seawater is clean, and there are many people on the beach. There are some buildings in the background.", 
        "source" : "https://zenon70.github.io/repository/detimages/holidaybeachtimewithpeoples.JPG" 
},
{ 
        "quote" : "The picture shows an adult woman and a little girl riding the merry-go-round in the fairground. They are both smiling happily, which indicates that they are enjoying the ride. The woman is in red while the girl is in pink. They are probably family.", 
        "source" : "https://zenon70.github.io/repository/detimages/momandbabygirlfuninparkride.JPG" 
},
{ 
        "quote" : "There is a bird eating nuts in the picture. The bird has grey and black feather, and is standing on a piece of wood.", 
        "source" : "https://zenon70.github.io/repository/detimages/birdseatingnuts.JPG" 
},
{ 
        "quote" : "A man is hugging the trunk of an elephant. He looks happy, probably because he loves the elephant.", 
        "source" : "https://zenon70.github.io/repository/detimages/amanwithhispetelephant.JPG" 
},
{ 
        "quote" : "There are two dogs in the picture. One of them is mostly white, and it has small bone in front of it. The other one is black and white, and it has a huge bone in front of it.", 
        "source" : "https://zenon70.github.io/repository/detimages/twodogseatingbones.JPG" 
},
{ 
        "quote" : "There are four people in the picture. One of them is sitting in the chair, looking down. The other three are sitting on the floor, doing some kind of experiments.", 
        "source" : "https://zenon70.github.io/repository/detimages/unistudentssettingfloorforexperiment.JPG" 
},
{ 
        "quote" : "There is a woman in the picture. She is making a phone call with her cell phone. She wears a pair of sunglasses and a black jacket. She has blonde hair.", 
        "source" : "https://zenon70.github.io/repository/detimages/girltalkingwithhermobile.JPG" 
},
{ 
        "quote" : "What can be seen from the picture is a girl eating sushi with chopsticks. She is practicing how to use chopsticks in a restaurant.", 
        "source" : "https://zenon70.github.io/repository/detimages/littlegirltryingtolearnsticks.JPG" 
},
{ 
        "quote" : "This picture was taken in a football field. Millions of people are watching an exciting football match.", 
        "source" : "https://zenon70.github.io/repository/detimages/footballworldcupfield.JPG" 
},
{ 
        "quote" : "This little girl is enjoying her time in the natural environment. She is wearing a pink dress and running on the grass happily.", 
        "source" : "https://zenon70.github.io/repository/detimages/littlegirlenjoyinghertimeinfiled.JPG" 
},
{ 
        "quote" : "What can been seen from this picture is that a rocket is carrying the spaceship into the space. We can see the rocket is soaring into the sky, leaving a mushroom cloud behind.", 
        "source" : "https://zenon70.github.io/repository/detimages/rocketaborttimes.JPG" 
},
{ 
        "quote" : "We can see there are two older people playing musical instruments outdoors. A little girl was listening to their playing attentively.", 
        "source" : "https://zenon70.github.io/repository/detimages/oldguysplayingguiter.JPG" 
},
{ 
        "quote" : "The boy in colorful T-shirt is wearing a pair of sunglasses. He is looking at the camera and smiling. A man wearing a singlet is driving a toy car in front of him.", 
        "source" : "https://zenon70.github.io/repository/detimages/boywearsunglassbesidedad.JPG" 
},
{ 
        "quote" : "The picture shows a little boy smiling. He has black hair and really cute.", 
        "source" : "https://zenon70.github.io/repository/detimages/cutelittleboysmile.JPG" 
},
{ 
        "quote" : "The picture shows the scene of a car accident. The silver car in the foreground is smashed, while there are two other cars in the background driving in the opposite direction.", 
        "source" : "https://zenon70.github.io/repository/detimages/faultcarforrepairing.JPG" 
},
{ 
        "quote" : "This picture shows the view of western country. There are two boats on the river, going in the opposite directions, transporting two groups of passengers. In the background, there are a couple of ancient buildings. The one in the middle is white and grey.", 
        "source" : "https://zenon70.github.io/repository/detimages/itallywatervanice.JPG" 
},
{ 
        "quote" : "There is an adult man standing behind the window of a room. By the look of it, I suppose the place is probably the back kitchen of a restaurant. The man has dark skin.", 
        "source" : "https://zenon70.github.io/repository/detimages/retaurantcookingroom.JPG" 
},
{ 
        "quote" : "There is medium-sized boat sailing in the middle of the sea. Besides the boat, there is nothing else nearby. The white boat seems alone and helpless.", 
        "source" : "https://zenon70.github.io/repository/detimages/littleboatatgroundocean.JPG" 
},
{ 
        "quote" : "There are two adult women in the picture. One of them is holding a cup of drink for the other one to drink from a straw.", 
        "source" : "https://zenon70.github.io/repository/detimages/twogirlsdrinkingcoffeeswag.JPG" 
},
{ 
        "quote" : "There are two adults in the picture. One of them is woman, and the other is a man. They are shaking hands, and the woman is going to award the man a trophy.", 
        "source" : "https://zenon70.github.io/repository/detimages/athleticsgirltakinghonorfromcoach.JPG" 
},
{ 
        "quote" : "There is an old man in the picture. He is looking at a stand full of photos, or probably postcards. The picture is black and white.", 
        "source" : "https://zenon70.github.io/repository/detimages/oldguylookinggiftsforlove.JPG" 
},
{ 
        "quote" : "There are a number of people sitting in the room. One of them is giving a speech while others are listening.", 
        "source" : "https://zenon70.github.io/repository/detimages/britishasseblyperlamentmet.JPG" 
},
{ 
        "quote" : "There is some food in the white plate. It seems like chicken, rice, and broccoli.", 
        "source" : "https://zenon70.github.io/repository/detimages/simplesetupmenuforlitefood.JPG" 
},
{ 
        "quote" : "There is a group of students sitting in the classroom. Apparently, they are listening to some lectures or attending tutorials. They are enjoying the class.", 
        "source" : "https://zenon70.github.io/repository/detimages/universityclassroomfocushijabone.JPG" 
},
{ 
        "quote" : "Two surgeons are having an operation on the operating table. They look very dedicated to the operation.", 
        "source" : "https://zenon70.github.io/repository/detimages/otroomwithdoctorsthree.JPG" 
},
{ 
        "quote" : "There are a lot of people in his room, and they are listening carefully to the man who is talking about something. It seems that either they are having a class or meeting.", 
        "source" : "https://zenon70.github.io/repository/detimages/volunteerscrummeeting.JPG" 
},
{ 
        "quote" : "Three policemen are standing on the street, wearing roller skates, which is rare to see. One of the policemen is talking with another man who is wearing glasses.", 
        "source" : "https://zenon70.github.io/repository/detimages/policeinvestingnewthings.JPG" 
},
{ 
        "quote" : "A little girl wearing a green dress and colorful pants is running in a grass field. She looks thrilled as we can see from her smiling face.", 
        "source" : "https://zenon70.github.io/repository/detimages/littlecutegirlwalkingfirsttime.JPG" 
},
{ 
        "quote" : "There are two men standing on a grass field, one of them is playing golf, while the other is watching. This golf course has beautiful scenery as it nears the sea.", 
        "source" : "https://zenon70.github.io/repository/detimages/twooldmangolfpractices.JPG" 
},
{ 
        "quote" : "It is a field of wheat that grows very well, as we can see from its green color and height. At the background of the picture, there is a beautiful blue sky and some trees.", 
        "source" : "https://zenon70.github.io/repository/detimages/newborndandyfileds.JPG" 
},
{ 
        "quote" : "As we can see from the picture, army workers are busy doing their work in a factory. They are wearing white cloths, white trousers, and white hats, so we can assume that this may be a food factory that has a high requirement for hygiene.", 
        "source" : "https://zenon70.github.io/repository/detimages/ecommerceshugesupplychain.JPG" 
},
{ 
        "quote" : "From this picture, we can see that a cat is sitting in front of the door. It looks very lonely, and it seems that it is waiting for its owner.", 
        "source" : "https://zenon70.github.io/repository/detimages/catstraingatwindows.JPG" 
},
{ 
        "quote" : "This picture shows an adult man standing in between the two huge shelves. He wears a white shirt and a pair of black pants. The place where he is standing looks like a warehouse.", 
        "source" : "https://zenon70.github.io/repository/detimages/manpikatsupplychainwarhouse.JPG" 
},
{ 
        "quote" : "This picture shows a parade. There are large numbers of audience in the foreground. It seems like they are celebrating a festival.", 
        "source" : "https://zenon70.github.io/repository/detimages/girlcomedyatcristmassevents.JPG" 
},
{ 
        "quote" : "Several bicycles are parking on a lawn. They are in a variety of colors. There is a bottle of water standing in the basket of one the bikes.", 
        "source" : "https://zenon70.github.io/repository/detimages/bycyclesparkinglots.JPG" 
},
{ 
        "quote" : "A blue mobile toilet fell on the street. Not far away, there is also a white van and trailer.", 
        "source" : "https://zenon70.github.io/repository/detimages/mobiltoiletvanonstreet.JPG" 
},
{ 
        "quote" : "We can see a middle-aged man standing in a remote place and holding a black plastic bag. There are several other plastic bags beside him.", 
        "source" : "https://zenon70.github.io/repository/detimages/dustbinblackbagsforwastages.JPG" 
},
{ 
        "quote" : "What can be seen from this picture is a lovely boy. He has short hair and white skin. He looks delighted and cheerful while playing on the playground.", 
        "source" : "https://zenon70.github.io/repository/detimages/anoldwomanwithalovelyboyatpark.JPG" 
},
{ 
        "quote" : "This picture may be taken from the countryside. We can see a baby sheep standing on the grass. This view is pleasant and beautiful.", 
        "source" : "https://zenon70.github.io/repository/detimages/countrysidefiledinsheepgreen.JPG" 
},
{ 
        "quote" : "We can see that there are a lot of people near a swimming pool with their dogs. An adult woman is smiling at her baby who is playing a ball, and a dog is staring at it.", 
        "source" : "https://zenon70.github.io/repository/detimages/manandwomanwiththeirnewbornbabyatpool.JPG" 
},
{ 
        "quote" : "What can be seen from this picture is a lady who wears a colorful dress is painting flowers. She has gray hair and black skin.", 
        "source" : "https://zenon70.github.io/repository/detimages/ladypaintingdressinwhite.JPG" 
},
{ 
        "quote" : "This image depicts a middle-aged woman who is wearing a gray coat and a pair of black shoes. She is holding a broom and cleaning the floor.", 
        "source" : "https://zenon70.github.io/repository/detimages/middleagedmancleaner.JPG" 
},
{ 
        "quote" : "What can be seen from the picture are fabulous fireworks coming out from an octopus-shaped building. Based on the given information, we can assume that this picture was taken in large amusement park.", 
        "source" : "https://zenon70.github.io/repository/detimages/octopusstatueatparkwithpeoples.JPG" 
},
{ 
        "quote" : "This picture depicts a pleasant view of calf running on the grass. Behind the calf, there is a tranquil lake, which indicating the place is delightful.", 
        "source" : "https://zenon70.github.io/repository/detimages/acowrunningatgreenland.JPG" 
},
{ 
        "quote" : "What can be seen from this picture are two adults behaving strangely on the street while four other people are watching them. One of them is a blond lady who wears a pink dress and a beret hat.", 
        "source" : "https://zenon70.github.io/repository/detimages/alotsofpeopletakingpikinancident.JPG" 
},
{ 
        "quote" : "This picture depicts a handyman who is trying to re-construct a brick wall. He is wearing a singlet and a white helmet. We can tell from his muscle that he is very strong.", 
        "source" : "https://zenon70.github.io/repository/detimages/handymanconstructbrickswall.JPG" 
},
{ 
        "quote" : "An old lady who wears a black T-shirt and blue skirt is holding a rope in her hands. There are two white cloths hanging on the rope, which may be just washed by the lady and she is trying to dry them under the sun.", 
        "source" : "https://zenon70.github.io/repository/detimages/oldwomanwetclothsatrope.JPG" 
},
{ 
        "quote" : "A little girl who wears a blue-black stripe T-shirt and green pants is riding on a horseback and she is talking to a man who dresses like a cowboy. From this picture, we can assume that the man is a trainer and the little girls is learning how to ride a horse.", 
        "source" : "https://zenon70.github.io/repository/detimages/littlegirlridehorsewithcoach.JPG" 
},
{ 
        "quote" : "A girl who wears a white T-shirt is blowing a big bubble, and she seems very skilled at it, as the size of the bubble is quite big. At the background, there are some other children having their breaks in the classroom.", 
        "source" : "https://zenon70.github.io/repository/detimages/agirlwithballonbubbletry.JPG" 
},
{ 
        "quote" : "There are a group of people in the picture. One of them is an adult woman who looks like a teacher, and the others are young children.", 
        "source" : "https://zenon70.github.io/repository/detimages/teacherexperimentforlittlegirls.JPG" 
},
{ 
        "quote" : "Apparently, the picture shows an aisle in between two bookshelves, and there are large variety of books on the shelves.", 
        "source" : "https://zenon70.github.io/repository/detimages/cleanlibrarypik.JPG" 
},
{ 
        "quote" : "The picture shows a beautiful view of a lake in which there is a person paddling a kayak. At the background, there is a land of forest.", 
        "source" : "https://zenon70.github.io/repository/detimages/amusementparpaddlingkayak.JPG" 
},
{ 
        "quote" : "There are a number of cars parking along the side of the road. They are all covered by a thick layer of snow, which indicates that it is in winter.", 
        "source" : "https://zenon70.github.io/repository/detimages/icedbackgroundwithcar.JPG" 
},
{ 
        "quote" : "A woman is listening to music via a headphone. Some of her hair is dyed purple, while the rest is black. And she wears a pair of brown sunglasses. These imply that she has a unique taste of fashion. Besides, she carries a big black backpack.", 
        "source" : "https://zenon70.github.io/repository/detimages/womanwithherheadphones.JPG" 
},
{ 
        "quote" : "There are several empty glass bottles, cups and a deck of cards on the wooden table. It seems that several people had played cards here in the room.", 
        "source" : "https://zenon70.github.io/repository/detimages/homediningtableforplays.JPG" 
},
{ 
        "quote" : "An adult in red is standing behind a camera which is mounted onto the top a tripod. The man is wearing a white hat and pair of glasses, and he is doing a thumb up gesture. Beside him, there is an adult woman in black.", 
        "source" : "https://zenon70.github.io/repository/detimages/photographerwithherassist.JPG" 
},
{ 
        "quote" : "An adult wearing a black coat with a fluffy hood is standing outdoors. Behind her, there are a number of streetlights, trees which have no leaves and massive building. It is in winter as we can see everything is covered by snow.", 
        "source" : "https://zenon70.github.io/repository/detimages/aguyinicedplaces.JPG" 
},
{ 
        "quote" : "This picture is a picture showing a wall on which there are nine celestial bodies, including the sun and eight planets. Apparently, they are the major components in the solar system, and each of them has a label to its side giving introductory information to viewers.", 
        "source" : "https://zenon70.github.io/repository/detimages/classroominteractivewallsdesign.JPG" 
},
{ 
        "quote" : "There is a long wooden jetty, and a row of white fence is mounted to its left side. An adult woman is squatting on the jetty, facing a dog that is coming to her. She is smiling happily. Down the end of jetty, there is another person.", 
        "source" : "https://zenon70.github.io/repository/detimages/womanandgirltimeatocean.JPG" 
},
{ 
        "quote" : "There are group of people sitting in chairs in the room, facing the screen. And a man is standing in front of them, giving a presentation.", 
        "source" : "https://zenon70.github.io/repository/detimages/companyscrumsmet.JPG" 
},
{ 
        "quote" : "In the foreground, there are two big tress with scares leaves, which indicates it is probably in late autumn or winter. A number of tree trunks are piled together near one of the trees. In the background, there is a white house.", 
        "source" : "https://zenon70.github.io/repository/detimages/forestwithbrokenbricks.JPG" 
},
{ 
        "quote" : "In the music class, a boy wearing an orange T-shirt is playing the tuba with his round face. A girl in white is playing horn behind the boy and another child is playing the violin.", 
        "source" : "https://zenon70.github.io/repository/detimages/littleboyplayingsexophoneatfest.JPG" 
},
{ 
        "quote" : "In this black-and-white photo, a boy and a girl are quarreling in the alley and both of them are making fists and looking angry. That boy is also riding a toy motor bicycle.", 
        "source" : "https://zenon70.github.io/repository/detimages/twolittleboyandgirlsangry.JPG" 
},
{ 
        "quote" : "An adult man on the stage is interacting with a woman down below. He is probably a singer because there is a drummer behind him.", 
        "source" : "https://zenon70.github.io/repository/detimages/boystageperformatgf.JPG" 
},
{ 
        "quote" : "A teenage girl wearing dress is riding a small bike. Beside her, there is a line of white fence. The sky is quite blue.", 
        "source" : "https://zenon70.github.io/repository/detimages/littlegirlpracticebycycle.JPG" 
},
{ 
        "quote" : "Tree children are standing on the stage, waiting to be awarded. There are a number of adults surrounding the children.", 
        "source" : "https://zenon70.github.io/repository/detimages/pikfromwinningmomemtgirls.JPG" 
},
{ 
        "quote" : "A group of little kids wearing coats of different colors are running in the street. There is a red brick house in front of them.", 
        "source" : "https://zenon70.github.io/repository/detimages/littlekidsplayingathomesides.JPG" 
},
{ 
        "quote" : "There are five green apples on the table. Also, a sliced apple is placed in the plate, and a knife is next to the plate.", 
        "source" : "https://zenon70.github.io/repository/detimages/pikofpicesofkul.JPG" 
},
{ 
        "quote" : "A girl wearing pink hoodie and waistband is running in an inflatable bouncer. It seems that she is passing a mobile phone to the person in front of her.", 
        "source" : "https://zenon70.github.io/repository/detimages/younggirlridingmometatballonride.JPG" 
},
{ 
        "quote" : "There is a herd of dear grazing on the plain. While the grass turns to yellow, the forest behind them is still lush.", 
        "source" : "https://zenon70.github.io/repository/detimages/treezirafatnationalparks.JPG" 
},
{ 
        "quote" : "Two men in cycling wears and helmets are standing in front of a mountain holding their bicycles. There are piles of snow on the ground and mountain.", 
        "source" : "https://zenon70.github.io/repository/detimages/twoforestcyclerarsatfount.JPG" 
},
{ 
        "quote" : "It is a rececourse surrounded by lush trees and white fences. A brown horse is standing on a slope and waiting to walk into white trunk.", 
        "source" : "https://zenon70.github.io/repository/detimages/horseatfoodstall.JPG" 
},
{ 
        "quote" : "There are five photos displayed on the desk. A smiling lady wearing light yellow is talking to a man sitting on the sofa.", 
        "source" : "https://zenon70.github.io/repository/detimages/oldguyatcouncilorplace.JPG" 
},
{ 
        "quote" : "A man who wears a hat and woman who wears a red T-shirt are researching on how to use the telescope in front of them. Behind them, there are several groups of people standing or sitting on the camping chairs.", 
        "source" : "https://zenon70.github.io/repository/detimages/planetsexibitionswithpeoples.JPG" 
},
{ 
        "quote" : "A female reporter is holding a microphone and reporting while a male cameraman is recording. Behind them, there are crowds of people protesting, holding flags and on looking.", 
        "source" : "https://zenon70.github.io/repository/detimages/videographerwithanchorsinplace.JPG" 
},
{ 
        "quote" : "There is a stainless-steel pot on the gas stove with some fruits boiling inside. The fruits look like kinds of berries in red and dark red.", 
        "source" : "https://zenon70.github.io/repository/detimages/barriesatgasstove.JPG" 
},
{ 
        "quote" : "A little girl in a pink T-shirt and with curly hair is using a magnifying glass to observe a flower. The flower is a yellow daisy in full bloom.", 
        "source" : "https://zenon70.github.io/repository/detimages/girlwithsunfloweratmagni.JPG" 
},
{ 
        "quote" : "A cleaning woman is wiping the glass of one restaurant. There are two signs attached on the glass.", 
        "source" : "https://zenon70.github.io/repository/detimages/aladyatbearshop.JPG" 
},
{ 
        "quote" : "A river is surrounded by green trees along the riverside and rock mountain with bushes. The water is so clean that can see the reflections of plants.", 
        "source" : "https://zenon70.github.io/repository/detimages/pikisriversidesawe.JPG" 
},
{ 
        "quote" : "A waiter in a black shirt and tie is ordering for a man in a restaurant which has a great atmosphere. There are several glasses of wine placed on the table.", 
        "source" : "https://zenon70.github.io/repository/detimages/restaurantboyincustomer.JPG" 
},
{ 
        "quote" : "Some police are holding the blast shield and guns while others are riding the horses. There is some audience sitting outside of the security barriers and watching.", 
        "source" : "https://zenon70.github.io/repository/detimages/policeacusecountrypeoplepik.JPG" 
},
{ 
        "quote" : "There are colorful posters with words on the glass wall of the building. Bunches of flowers are also placed under the glass wall.", 
        "source" : "https://zenon70.github.io/repository/detimages/cuecardsonglasswall.JPG" 
},
{ 
        "quote" : "There are group of people wearing shorts marching on the street. Apparently, they are celebrating some kind of festival. And a couple of houses are at the background.", 
        "source" : "https://zenon70.github.io/repository/detimages/studentsmocknewsongsatroad.JPG" 
},
{ 
        "quote" : "An adult woman wearing orange cloths is sitting in front of a wall. She has dark skin, and there are some buckets full of agricultural products beside her. She is probably selling them.", 
        "source" : "https://zenon70.github.io/repository/detimages/oldsadwomanatmarkets.JPG" 
},
{ 
        "quote" : "Two large elephants are standing by the side of a river. Behind them, there is a mountain covered by green plants.", 
        "source" : "https://zenon70.github.io/repository/detimages/twoelephantatpark.JPG" 
},
{ 
        "quote" : "The picture shows a keyboard and a host computer on the orange desktop. Interestingly, the mouse is an actual mouse with fluffy hair and its tail being the wire that connects to the USB port, which is kind of cute.", 
        "source" : "https://zenon70.github.io/repository/detimages/realmiceatcomputertable.JPG" 
},
{ 
        "quote" : "Several people are sitting in the passenger seats inside a train carriage. The man with long hair in front is reading a book. There are also handrails and overhead lights inside the carriage.", 
        "source" : "https://zenon70.github.io/repository/detimages/agirlinsubwaytraincity.JPG" 
},
{ 
        "quote" : "This picture shows musicians are playing a concert. A group of musicians wearing red hats are playing music which indicates that Christmas is around the corner.", 
        "source" : "https://zenon70.github.io/repository/detimages/musicfestatcirclepanel.JPG" 
},
{ 
        "quote" : "There are three adult men in the picture. One of them is driving a massive tractor loaded with piles of hay while the other two are sitting and standing on it.", 
        "source" : "https://zenon70.github.io/repository/detimages/amanwithhistractor.JPG" 
},
{ 
        "quote" : "This is a picture of a bunch of people who are having a party. They are gathering around a long table on which there are lots of food and drinks.", 
        "source" : "https://zenon70.github.io/repository/detimages/wholefamilytimesdinner.JPG" 
},
{ 
        "quote" : "There are three horses on the ranch which is enclosed by a line of white fence to prevent the animals from escaping. And a large barn is built on it.", 
        "source" : "https://zenon70.github.io/repository/detimages/horsegreenplaceses.JPG" 
},
{ 
        "quote" : "A basketball player wearing a white sleeveless top and pair of blue shorts is hanging on the basket. At the background, there is a small audience watching him, who is taking photos of the player.", 
        "source" : "https://zenon70.github.io/repository/detimages/oplympicsvolleyballmatch.JPG" 
},
{ 
        "quote" : "A few people are walking on a trail in a boundless, wild field. Each of them is carrying a whole load of equipment for fieldwork. At the background, there are massive rocks.", 
        "source" : "https://zenon70.github.io/repository/detimages/aforestmanatemptyplace.JPG" 
},
{ 
        "quote" : "A massive helicopter is landed on the top of a mountain. It is in green color and is equipped with a number of weapons. Its huge propeller, which consists of four blades, is still rotating.", 
        "source" : "https://zenon70.github.io/repository/detimages/aarmyhelicopterreadyforwars.JPG" 
},
{ 
        "quote" : "There are two firefighters who wear protective equipment demonstrating the procedure of rescuing victims from a car. And the car is involved in an accident in front of a large group of people who wear uniforms.", 
        "source" : "https://zenon70.github.io/repository/detimages/fireworkersatcarfire.JPG" 
},
{ 
        "quote" : "This picture shows a beautiful view by a lake from the balcony of a unit. A couple of chairs and small table are placed on the balcony. At the other end of the lake, there are mountains covered with green vegetation.", 
        "source" : "https://zenon70.github.io/repository/detimages/homeniceviewfromforest.JPG" 
},
{ 
        "quote" : "A young girl is crouch down to feed a white puppy on the street. She has short brown hair and wears a white short-sleeved T-shirt and a pair of shorts.", 
        "source" : "https://zenon70.github.io/repository/detimages/acutegirlwithhercats.JPG" 
},
{ 
        "quote" : "A fierce forest fire is happening on one side of a highway which generates a massive amount of black smoke. And a number of fire engines have arrived at the scene to put out the fire.", 
        "source" : "https://zenon70.github.io/repository/detimages/fireancidentatroadbycar.JPG" 
},
{ 
        "quote" : "There is helicopter with blue and white color flying in the air. It is trying to rescue a man from the ocean beneath it.", 
        "source" : "https://zenon70.github.io/repository/detimages/helicopterforrescuetwopeople.JPG" 
},
{ 
        "quote" : "An adult man in a grey suit and white shirt is giving a speech via a microphone, while another man is taking a photo of him. Behind him, there is a woman looking at the speech man.", 
        "source" : "https://zenon70.github.io/repository/detimages/oldguystakingpikandwoman.JPG" 
},
{ 
        "quote" : "A doctor who wear a blue hat and a grey gown is doing some sort of examination on the patient. The patient is closing his eyes, and it can assume that they are in a hospital.", 
        "source" : "https://zenon70.github.io/repository/detimages/eyesdocwithpaitent.JPG" 
},
{ 
        "quote" : "A woman with dark skin and wearing huge earrings is smiling. Beside her, there is man wearing sunglasses.", 
        "source" : "https://zenon70.github.io/repository/detimages/smilenegrywomanwithman.JPG" 
},
{ 
        "quote" : "An adult woman with short hair is playing a doll. She wears a blue short-sleeved T-shirt and the doll is in black.", 
        "source" : "https://zenon70.github.io/repository/detimages/aladywithherpuppet.JPG" 
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

