 let constraintObj = { 
            audio: true, 
            video: { 
                facingMode: "user", 
                width: { min: 640, ideal: 1280, max: 1920 },
                height: { min: 480, ideal: 720, max: 1080 } 
            } 
        }; 
        // width: 1280, height: 720  -- preference only
        // facingMode: {exact: "user"}
        // facingMode: "environment"
        
        //handle older browsers that might implement getUserMedia in some way
        if (navigator.mediaDevices === undefined) {
            navigator.mediaDevices = {};
            navigator.mediaDevices.getUserMedia = function(constraintObj) {
                let getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
                if (!getUserMedia) {
                    return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
                }
                return new Promise(function(resolve, reject) {
                    getUserMedia.call(navigator, constraintObj, resolve, reject);
                });
            }
        }else{
            navigator.mediaDevices.enumerateDevices()
            .then(devices => {
                devices.forEach(device=>{
                    console.log(device.kind.toUpperCase(), device.label);
                    //, device.deviceId
                })
            })
            .catch(err=>{
                console.log(err.name, err.message);
            })
        }

        navigator.mediaDevices.getUserMedia(constraintObj)
        .then(function(mediaStreamObj) {
            //connect the media stream to the first video element
            let video = document.querySelector('video');
            if ("srcObject" in video) {
                video.srcObject = mediaStreamObj;
            } else {
                //old version
                video.src = window.URL.createObjectURL(mediaStreamObj);
          
            }
            
            video.onloadedmetadata = function(ev) {
                //show in the video element what is being captured by the webcam
                video.play();
            };
            
            //add listeners for saving video/audio
            let start = document.getElementById('btnStart');
            let stop = document.getElementById('btnStop');
            let vidSave = document.getElementById('vid2');
            let mediaRecorder = new MediaRecorder(mediaStreamObj);
            let chunks = [];
            
            start.addEventListener('click', (ev)=>{
                mediaRecorder.start();
                timeReduce();
                console.log(mediaRecorder.state);
		document.getElementById("linkk").style.display = "none";
		document.getElementById("retry").style.display = "none";
		document.getElementById("btnStop").style.display = "block";
		document.getElementById("btnStart").style.display = "none";
		document.getElementById("gi").style.display = "none";
            })
            stop.addEventListener('click', (ev)=>{
                mediaRecorder.stop();
                 clearInterval(timer);
                console.log(mediaRecorder.state);
                document.getElementById("btnStop").style.display = "none";
				document.getElementById("btnStart").style.display = "none";
				document.getElementById("linkk").style.display = "block";
                document.getElementById("retry").style.display = "block";
                document.getElementById("source").style.display = "block";
		       document.getElementById("hi").style.display = "none";
                document.getElementById("cck").style.display = "none";
            });
            mediaRecorder.ondataavailable = function(ev) {
                chunks.push(ev.data);

                if (mediaRecorder.state == 'inactive') {
                        // console.log(chunks)
                        // Create a new Blob with the array created
                        let blob = new Blob(chunks, { type: 'video/mp4' });
                    }

            }
            mediaRecorder.onstop = (ev)=>{
                let blob = new Blob(chunks, { 'type' : 'video/mp4;' });
                chunks = [];
                let videoURL = window.URL.createObjectURL(blob);
                vidSave.href = videoURL;
                vidSave.download = `Interview-Video-${Math.floor(Math.random()*quotes.length)}-${Date.now()}.mp4`;

              
            }
        })
        .catch(function(err) { 
            console.log(err.name, err.message); 
        });
        
        /*********************************
        getUserMedia returns a Promise
        resolve - returns a MediaStream Object
        reject returns one of the following errors
        AbortError - generic unknown cause
        NotAllowedError (SecurityError) - user rejected permissions
        NotFoundError - missing media track
        NotReadableError - user permissions given but hardware/OS error
        OverconstrainedError - constraint video settings preventing
        TypeError - audio: false, video: false
        *********************************/



const quotes = [
    { 
        "quote" : "Describe a major decision you have taken in your life. What was that? Was it a right decision?", 
        "source" : "A really important decision I have made recently is to study abroad, which is the reason I am taking this test today. No one from my family has ever had the chance to study abroad before. My parents were actually hoping I would start training to become a doctor as soon as i graduate. But, in fact, I don’t think I want to practice medicine. I really want to study marketing, especially digital marketing, and I want to learn about different cultures. If I study digital marketing in Canada, I can learn how to do business in this new digital era, which is of course very competitive and fast-moving. As for whether it was right decision, I am pretty confident it was, and I am really looking forward to broadening my experience and meeting new people in Canada. I am going to do my best to finish my University course and I will go back to my country with new ideas that will help me to get a good job. So, anyway, that an important decision that I have taken in my life." 
    },
    { 
        "quote" : "Describe a school subject that you did not like in past, but you like now. What made you change your mind?", 
        "source" : "When I was a school student, like everyone else, I had to study a lot of subjects. I enjoyed most of them, but there was one that I really didn’t like, and that was history. I think the reason was that I dislike the teaching method of my teacher. To be completely frank with you, he was a lazy teacher. All he did was copy words and facts from our coursebook to the board and made us write down what he wrote. There was no actual teaching involved. He then tell us that we had to memorize all the information if we didn’t want to receive a low grades for his subject. It was awful! When I was in my early twenties, I watched a film about Roman history. The film was about how the Roman invented things like bridges, roads, stadiums, and lots of other important things. I really enjoyed the film and realized that history is not as dull as I originally thought. After watching that film, I began reading more history, watching documentaries, and even going to museums. I am completely fascinating with history now." 
    },
    { 
        "quote" : "Describe a person who has done a lot of work to help people. Who is this person? What has he done to help people?", 
        "source" : "A lot of my friends think that the world is full of selfish people who don’t care about anyone except themselves, but I couldn’t agree less with this. I’ve met so many extraordinary kind and generous people in my life. For this question, I would like to talk about one person who I know very well. His name is Mr. Dennis.Mr. Dennis was my high school Math teacher, and he taught at local high school in my hometown for over 20 years. He was not only the greatest teacher I ever had but also has a great heart of gold. Firstly, as a math teacher, he made learning fun and explained in an incredibly simple and practical way. He must have spent hours and hours planning his lesson as they went well beyond what a normal teacher does in a lesson. On top of that, he was the only teacher at my school that organized extra-curriculum courses and activities. If i remembered correctly, he was the soccer coach and the after-school librarian. He always went beyond what was required in order to help and assist all students at the school, and everyone loved him for that." 
    },
    { 
        "quote" : "What are the benefits of reading? Include specific example to your answer.", 
        "source" : "Reading is probably most beneficial activities you can do. The first reason why reading is so beneficial is because it increases your knowledge. Filling your mind with new facts, new information, and new ideas will make you better at conversations as you will have something interesting to talk about. Furthermore, it is a well-known fact that reading frequently improves your vocabulary. The more you read the more words you will be exposed to, which will improve your ability to articulate your thoughts more effectively. Overall, reading on a consistent basis will benefits your life in different many ways." 
    },
    { 
        "quote" : "Describe an environmental problem that has occurred in your country. a. What is the cause of the problem? b. What effect on your country? c. What step, if any, that have been taken to solve this?", 
        "source" : "This is one environmental problem that I know a lot about. It’s the polluting of the rivers and the sea in my country. I believed it’s mainly caused by the irresponsible disposal of waste by large factories.This problem, the pollution, has been brought on by many years of abuse and lack of respect. For the long time, many factory owners simply didn’t care about the damage they were causing to my country. The toxic waste in the rivers gave off very strong and disgusting smell. We even were advised by our local government not to swim in the rivers or the sea at it could lead to skin issues or other kind of health problems. Moving on to the next question, yes, there have been steps to solve this issue. About 8 or 9 years ages, the government started to take action and passed laws that made it illegal for factory owners to dump large amount of waste into the rivers and ocean. They started to give out heavy fines to any business that did this. Also, the police given more power to charges people if they were seen littering on the streets or dumping their waste to trash in the river or on the beach. To be honest, this problem still exists in my country today, but overall, it has certainly gotten a lot better." 
    },
    { 
        "quote" : "Some people believe they should keep all the money earn and not pay tax to the state. Do you agree or disagree?", 
        "source" : "I strongly disagree with the statement that individuals should not pay taxes to the state for two main reasons. First and foremost, taxpayer money collected by the government is used to fund basic amenities and public services, such as running water, schools, and hospitals. It’s important to remember that without taxpayer money we would not have access to such basic things and our lives would be worse off as a result. Additionally, taxes help stabilized the economy. Through taxes, the government is able to pay off debts and invest in the country, which, in turn, leads to a more stable and prosperous place to live. In conclusion, even though many people argue that we should not pay taxes, based on he reason discussed. I believe taxation is vital in order to maintain a high standard of living." 
    },
    { 
        "quote" : "Talk about the difference between working for a big company and working for a small company. Which do you prefer?", 
        "source" : "When choosing a company to work for, there are many things more important than the size of the company. Typically, big companies offer higher salaries and have a bigger corporate ladder to climb, which could lead more responsibilities and promotions. On the other hand, at small companies, an individual can make more of an impact. At small companies, your ideas and hard work have bigger impact on the long-term success of the company, which can feel very rewarding. These are some difference between working for a big companies and a small one. I definitely want to work for a small company when I graduate from university." 
    },
    { 
        "quote" : "Talk about a book you read recently. a. What was the title? b. What is about? c. How did you first hear of it? d. What did you like or dislike about it?", 
        "source" : "A book that I have read recently, which really inspired me, was called “Surely You’re Joking, Mr. Feynman ” by the famous physicist Richard Feynman. This book is a collection of personal stories, both hilarious and thought-provoking, from Dr. Feynman’s life." 
    },
    { 
        "quote" : "Nowadays more and more people live non-active lives. Why do you think this is? What are the problems associated with this?", 
        "source" : "Living non-active life is becoming more and more common these days even though there are a large number of sports facilities and government campaigns. The main problems caused by an inactive lifestyle are obesity and back pain. Actually, I have suffered with back pain, and it is awful. It’s a well-known fact that long period of physical inactivity raises the risk of becoming overweight and obese. This is because you burn fewer calories and easily gain weight when you don’t move or exercise often. Also, posture and back problems are associated with leading a non-active life. Sitting for long period causes back pain, and this can have long lasting problems, including obesity and spinal issues. I suggest people start exercising and going outside more often. For the past 3 years, I have been doing 20 minutes of yoga every day, and it has helped me to overcome my back pain." 
    },
    { 
        "quote" : "Describe an interesting conversation you had with someone you did not know.", 
        "source" : "A few years age, I met a man named Chris at a youth hostel while traveling in Tokyo. We had an interesting conversation because I had never met another person who thought exactly the same I do about so many things. We were chatting for more than an hour on all sorts of topics like soccer, movies, economics, and of course our own lives. After talking for a while we found out that we had some much in common. We were both born in the same year, had a degree in the same major, studied abroad in Australia for a semester, and have the same career ambitions. It was truly remarkable. Even though we live in different countries, we’ve kept in touch frequently and try to meet at least once a year." 
    },
    { 
        "quote" : "Many people think that zoos are cruel. Do you agree or disagree?", 
        "source" : "Many believe that zoos are cruelly exploitative while others argue they protect endangered animals. I agree with the former. Firstly, even though some species are under threat, there are lots of animals that are not. While it may be fun and educational to see them, animals are not meant to be caged, and their distress can often be seen in many ways. Furthermore, if the prime reason for having zoos is to protect animals, this could be done in other environments such as wildlife parks where animals can live more naturally. For these reasons, I agree that zoos are cruel and should be shut down." 
    },
    { 
        "quote" : "What are the important qualities of a good friend?", 
        "source" : "There are several good qualities all good friends should have. A good friend should, first of all, be trustworthy and honest. If you can’t trust someone, he can’t be your true friend. I addition to these qualities, a friend should be understanding and helpful so that he can help you when you face some troubles in your life. For example, if you need to borrow some money, a good friend would be willing to help without making you feel bad about the situation. I’m really luck because my best friend has all of these qualities, and I know that I can always trust him to be there for me whenever I’m in trouble. So all in all, a good friend must have these three qualities: trustworthy, honesty, and be understanding." 
    },
    { 
        "quote" : "Grades encourage students to work harder at school. Do you agree or disagree? Use specifics reason and example to support your opinion.", 
        "source" : "It is critically important that students work as hard as possible when they are at school, and I believe that grades can be motivating. To begin with, I believe students who are graded obtain more comprehensive knowledge of academic subjects. When students have the opportunity to earn grades, they spend more time working on assignments thus gain more knowledge. Secondly, grades allow students to measures their progress. This can motivate students who do well by rewarding them and also motivate students who do poorly to try to do better. I conclusion, I strongly believe that grades encourage students to learn." 
    },
    { 
        "quote" : "What change would make your hometown more appealing to people your age?", 
        "source" : "My hometown is an old, traditional kind of town in the countryside. It has a lot of older people and not a lot old entertainment for younger people. For this reason, I was keen to study and work away from my hometown. After a few years living abroad, I think my hometown could do with a lot of big changes to make it more exciting for younger people. Firstly it needs more bars and restaurants in the town center. Next, the beaches are unique feature of the town that could be developed to bring in more tourists. These are two changes that would make my hometown more appealing to people of my age." 
    },
    { 
        "quote" : "Describe a memorable journey you have made?", 
        "source" : "I have been lucky to have many memorable journeys over the years. This journey, one of the most memorable ones of my life, took place when I just started my university. I need to visit my uncle in a city, far away from my hometown, where he just had started his first job. My dad and I drove across the whole country to get there stopping off several amazing historical sites along the way. It was a fantastic bonding experience, and a journey that I will always remember fondly." 
    },
    { 
        "quote" : "Who should be responsible to care for elderly? Should it be the family or the government?", 
        "source" : "Caring for our elderly relatives is a vitally important job and, these days, there are a range of views on whose responsibility this is. On the one hand, we wouldn’t be here if not for the hard work and sacrifice of our elderly relatives, so perhaps the responsibility should fall to their kids and grandkids. On the other hand, pregnancies are increasingly planned these days and children provided a lot of joy to parents. If young people need to work hard raising children for betterment of society, perhaps the government should do more to take care of elderly. This would give younger people more time to work and improve society and the economy. Overall, I think that most of the responsibility should be with the family." 
    },
    { 
        "quote" : "Describe a historical place that you have visited. Where is it located? Where did you go there?", 
        "source" : "Every time I travel to new country, I try to visit unique, historical places that can teach me about the country. One of my favorite historical paces is St Paul’s Cathedral in London. It is located on the bank of river in London, close to some art galleries. I like to visit this Cathedral because it is a beautiful building and one of the most remarkable places in London. It even managed to survive World War II, and today it is an iconic and popular site for visitors from around the world. That is one historical place that I have visited." 
    },
    { 
        "quote" : "Do you prefer to study by yourself or with a teacher? Why?", 
        "source" : "For thousands of years, there’s generally been two main ways to study; alone or in the classroom. But these days, studying alone has become a lot easier and some ways better thanks to the advent of technologies. Personally, I prefer to study alone, either from books, videos, podcasts, audiobooks, or websites. I like to study these ways because I can rewind and study at my own pace. This allows me to understand each new concept before moving on the rest of the subject. Nevertheless, I also think teacher are invaluable resource. So I think for the best results, studying in the future will need to use mix of both online and classroom teaching." 
    },
    { 
        "quote" : "Is there a job that you would not like to do in future. What is the job? Why do you think it is undesirable?", 
        "source" : "Nowadays, there are ample choices available in the market when it comes to career options. If I had to choose one particular job among many that I would not like to do, I suppose it would be a sales job. Once I worked as a salesman for a computer company, and I really hated it. When I worked in the salesman department for that company as an intern, I was in charge of making cold calls and trying to sell computers and other computer related items like printers and so on. Initially, I was very enthusiastic about calling people and selling them the computers. But right away I figured out that it was an incredibly stressful job for me. I’m an introvert, so calling and meeting a lot of strangers every day made me very anxious. I have a lot of respect for sales workers, especially successful ones. They have a lot of determination and patience for their jobs. But I believe I don’t have the skillset or personality for a sales job in the future. Anyway, that’s a job that I certainly would not like to do in future." 
    },
    { 
        "quote" : "Describe a situation when you have give or received praise.", 
        "source" : "I am the kind of people who praises people often. However, I want to talk about wife because nowadays I give her praises all the time. We recently had our first baby, and raising a baby is so much harder than I ever imagined. Because I work full-time and my wife is on maternity leave for a year, she is doing the vast majority of the work when it comes to raising our baby and household chores. So, I am constantly giving her praises for all the amazing work she is doing." 
    },
    { 
        "quote" : "Describe an exciting experience you’ve had. What happened?", 
        "source" : "One of the most exciting experiences in my life so far was when I launched my first project for my business. I felt very proud of the product I had made, but I also had doubts about how I find people to buy the product. So, ultimately, I had very low expectations and just hoped a few people would like the product and support me. When launched day arrived, I was nervous but hopeful. At first, nothing happened and I started to get very worried. For the first few hours, my fears seemed to be confirmed since I had no sales. But then slowly over time, people began to find and buy the product, and it turn into one of the most exciting times of my life. Since then, I have launched other several businesses, mostly on the internet, and I absolutely love thinking of new products to create. I think most exciting experiences in my life so far have all been business related-I just love it." 
    },
    { 
        "quote" : "Describe a tradition in your country. Who takes part in it? What activities are there?", 
        "source" : "There are numerous traditional practices out there in Bangladesh at different times of the year. One of the most important is the autumn harvest celebration. During this celebration, all family members gather to eat home-cooked food and bow to our elders. It is how we remember and pay respect to our ancestors. After eating, we usually play traditional Bangladeshi games and drink a little bit Bangladeshi alcohol. It is one of the few times in a year when all members of the gamily get together, and it is always a great event." 
    },
    { 
        "quote" : "Activities During the last Weekend? a. Where did you go? b. When did you go? c. Who were present with you? d. What was the importance?", 
        "source" : "During the last weekend, I went to Chittagaong and I along went to my paternal family there. It was two days visit. I started on Thursday night and came back on Saturday. It was about 11 years I went there. I have my grandmother, my aunties and their family over there. My grandma couldn’t recognize me at first, because she is very old- about 90 years of age. So at this age anyone suppose to lose her memory a bit. But when I helped her to recall some of the things about me, she remembered everything. My aunt’s children are all younger than me. Two of them were new faces – because they have never been to Dhaka. One is three and other is one and half years old. They were at first feeling a bit afraid. A bit shy to come in front of me, but after a couple of hours, they made me their friend. As it was after a long time, I noticed everything’s changed there. I mean, 11 years a lot. There were many new malls, showrooms, boutiques, and restaurants. Pennisula hotel, which is the most expensive and classy hotel over there , was also new to me, because it is established a few years ago, at my time, hotel Agrabad was top in the city. So i visited many places like this and spent two days with my family. I wish I stay some more days but my university was to be started from the next day. So, I had to come back. But it was useful visiting out there. I was able to be introduced with my new cousins, see the changes of my city and most of all I saw my grandma- my blood after a long time. So, these two days were very special to me." 
    }
    
];


function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `${random.quote}.`;
    source.innerText = `${random.source}.`;
/*
var image = document.createElement("img");
image.onload = function(){
	document.getElementById("image").appendChild(image);
}

  image.src =random.source;*/
}


//Update Timer on screen
function updateTimer() {
  if (time == 0) {
    //End test if timer reaches 0
    mediaRecorder.stop();
  } else {
    document.getElementById("timer").innerText = --time + "s";
  }
}

//Sets timer
const timeReduce = () => {
  time = 300;
  timer = setInterval(updateTimer, 1000);
};

let time = 300;
let timer = "";


window.onload = () => {
timer = "";

randomQuote();
document.getElementById("source").style.display = "none";
document.getElementById("retry").style.display = "none";
document.getElementById("linkk").style.display = "none";
document.getElementById("btnStop").style.display = "none";

};






 function reload() {
       location.reload();
 }

