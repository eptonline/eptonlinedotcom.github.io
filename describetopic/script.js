//Random Quotes Api URL
const quoteApiUrl = "https://api.quotable.io/random?minLength=120&maxLength=160";
const quoteSection = document.getElementById("quote");
const userInput = document.getElementById("quote-input");
let quote = "";
let time = 300;
let timer = "";
let mistakes = 0;




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
    ,
    
{ 
        "quote" : "Nowadays new technology is increasingly being used to teach students. What are the advantages of this new approach?", 
        "source" : "Using technology to teach students has several advantages such as creating a more engaged environment, improving collaboration, having more scope to connect with the students, etc. Technology also allows teachers to explain complicated theories and concepts to students using attractive visuals, which in turn helps students to learn and understand better. As a result, incorporating technology in the field of teaching has positive effects both on the method of teaching and the students. "
},

{ 
        "quote" : "In many countries schools have severe problems with student behavior? What do you think are the causes of this ?", 
        "source" : "Perhaps the most predominant cause of problematic student behavior is a troublesome home environment. Negligence, abuse, lack of affection from parents at home are some of the causes of students developing problematic behavior and expressing them at school. Furthermore, being exposed to negative experiences in life, having wrong companionship, and low mental health are also causes of problems with student behavior. Most importantly, school authorities are not trained enough to handle such student behavior, which in turn exacerbates the issue. "
},

{ 
        "quote" : "Many historic buildings are being destroyed or replaced. What are the reasons for this?", 
        "source" : "One of the predominant reasons behind historic buildings being destroyed is shortage of land. As the population of the world continues to rise, more land is needed to accommodate housing for the increasing number of people. Furthermore, many historic buildings are being replaced due to urbanisation. The rapid growth in urbanisation has allowed many companies to take over historic buildings in the name of development. As a result, the value of historic buildings are gradually decreasing as people go unbothered by these changes around them. "
},

{ 
        "quote" : "Describe a time when you were extremely happy. What happened?", 
        "source" : "The last day when I was able to spend time with my entire family was a time when I was extremely happy. It was during the holiday last year and that was the last time I had each and every one of my siblings together at our parents house. Now we are all in different parts of the world, living our lives, trying to make a living. While I do have my fair share of fun every now and then, there is nothing quite like the pure happiness of spending time with your own family."
},

{ 
        "quote" : "Some people argue that the teenagers have lost moral values. What is your opinion?", 
        "source" : "I think that children from every generation differ from their previous generation in many ways, and this difference attracts a lot of scrutiny. I believe that the importance of moral values has declined for all people, and that includes teenagers as well. Therefore, while it is safe to say that many teenagers these days have lost regard for moral values, it is not true that all of them have done so. So, I do not think that the statement should be generalized for teenagers only."
},

{ 
        "quote" : "Describe the house in which you live? ", 
        "source" : "The house that I live in is an apartment. It is a ten storied building that has six flats on every floor, and forty flats in total. It is located in the city, and in quite a busy street. I have been living here my entire life and have made many friends from this apartment. We all grew up together and have developed very good friendships over the years. This house and its people are two components that I have made some of the most beautiful memories with in my life."
},

{ 
        "quote" : "Describe the neighborhood where you live?", 
        "source" : "The neighborhood where I live is located in the city, and in quite a busy street. There are not many trees around, but there is a park very close to it that sort of fulfills the need of greenery in the area. Many people from the neighborhood and especially kids flock to the park every afternoon. I myself go there a couple times a week to catch up with my friends from the area. Our neighborhood is quite safe, with rarely any sort of crime happening here. I have lived here my entire life and truly believe that this is a great place to grow up and live in."
},

{ 
        "quote" : "Public transport helps save money and curbs pollution over private transport. What do you prefer and why?", 
        "source" : "Personally, I wholeheartedly agree with the statement. Public transports are indeed an inexpensive option as opposed to private transport. It is something that I use everyday myself. But while they do curb pollution as opposed to private transports, the convenience and comfort of owning a private transport can not be denied. It is truly a luxury and privilege to own a private transport. But for mass people, public transports are definitely the better option by a landmark. "
},

{ 
        "quote" : "Describe a time when you were cheated.", 
        "source" : "During its onset, online shopping did not have much credibility as people were afraid of being cheated on through misleading products that were different from what they had expected. However, over time, online shopping has made a place for itself in society, and rightfully so. However, there are still some online shops that are nothing but scams. Last month, I ordered an air cooler online from an advertisement that made it seem perfectly normal. In reality, it did nothing to serve its purpose and was simply an object of no use. That made me not only waste a good amount of money but also feel extremely cheated."
},
{ 
        "quote" : "Some people argue that the government should spend money on Space research while others say that the government should build hospitals. Which argument do you support?", 
        "source" : "I believe that the government should undoubtedly spend money on building hospitals as opposed to spending money on space research. I believe that space research has a lot of opportunities for human civilization. However, for a developing country like ours, it is a luxury. Our country is in dire need of better health care systems; one of the main steps to get that done is building good hospitals. While the government has every right to spend money on space research, it has no right to do so at the expense of the health of its citizens. "
},

{ 
        "quote" : "Describe your daily exercise routine. ", 
        "source" : "A prerequisite of my exercise routine is waking up early in the morning at 6 am. After that I go for a quick twenty-minute run. When I get back, I shower and then have a banana that gives me energy to do yoga for the next forty minutes. On extremely busy days, I do yoga for 15 minutes, but make sure I never go below that. Afterwards, I have my breakfast and do thirty minutes of exercise. On most days I do cardio, while I sometimes incorporate a bit of weightlifting in my exercise routine. "
},

{ 
        "quote" : "Describe a time when you travelled somewhere. ", 
        "source" : "Last year I went to Cox s Bazar with my parents and my sister. It was during the end of winter, so the weather there was quite perfect. However, the beach was quite sunny, of course. We did a lot of activities such as jet skiing, kayaking, and parasailing. It was my first time doing all of these activities, so I had an amazing time. We also bought a lot of dried fish from the street shops, which is a common tradition for visitors in Cox s bazar. We relaxed to our hearts content and returned after four days of peaceful vacationing. "
},

{ 
        "quote" : "How do you travel to your work/study? Describe your vehicle.", 
        "source" : " I use public transport to travel. So that means I have to get up early to catch the bus. I prefer using an AC bus as the route to my work is quite long and the hot weather becomes quite intolerable. It does not accommodate more passengers than it s supposed to, which is quite rare for most public buses in the country. And since I have the privilege to afford a fairly developed public transport, I choose to use this bus for my own safety."
},

{ 
        "quote" : "Having a good university degree is important in finding a job. Do you agree? ", 
        "source" : "Yes, I agree with the statement that a good university degree is important in finding a job. In fact, considering how competitive the job market is becoming with each passing day, a good university degree is not only important in finding a job but also a prerequisite. While it is true that a lot of people can not afford a good university degree, that has not stopped companies from prioritizing a good degree while hiring new employees. "
},

{ 
        "quote" : "Describe a skill that you want to learn. ", 
        "source" : "A skill that I want to learn is coding. It is a skill that has a lot of demand in the job market right now. Furthermore, coding is also an integrated part of different kinds of jobs, all of which have scope for many job opportunities. These opportunities are becoming more and more available all over the world, making a skill like coding highly advantageous. "
},

{ 
        "quote" : "Write about your dream job. Why do you want this job? ", 
        "source" : "My dream job would be a position that allows me to make a positive impact on people every day. I would love to work for a company that makes time-saving and life-enriching products that thousands of people use everyday. I would love to be part of a team that finds innovative ways to make products more efficient and effective. To be able to earn a living through something that helps people in one or more ways is the dream. "
},

{ 
        "quote" : "Write down about your best friend. How long have you known him/her? ", 
        "source" : "I have a best friend of fourteen years. We went to the same school. While we have been friends since grade 1, we became best friends in high school. Ever since then, we have become inseparable, but only in terms of bonding because we now live in different countries. However, the distance has not affected or deteriorated our friendship in any way. If anything, it has made the friendship even stronger. I can not imagine my life without my best friend."
},

{ 
        "quote" : "What is your favorite dish? How is it prepared?", 
        "source" : "My favorite dish is pizza. Its main component is a flat soft bread which can be thin or thick depending on choice. The bread is then covered by a sauce, predominantly ketchup, followed by ingredients such as chicken, beef, bell peppers, olives and many others depending on the choice. One of the most important components of the pizza is cheese which goes on top of it at last. The bread is then baked at very high heat in an oven and becomes ready to eat in 15-20 mins. "
},

{ 
        "quote" : "Describe your favorite actor. Why is he your favorite? ", 
        "source" : "My favorite actor is Leonardo DiCaprio. The reason he is my favorite is because of his sheer versatility. Starting from his attention grabbing role in “Catch me if you can” to his career-defining role in “Titanic”, from his mind blowing performance in “Inception” to his dangerously convincing role in “Shutter Island”, Leonardo DiCaprio is an actor who seems to have no area of weakness in acting at all. The way he adapts to every role and also makes it his own is something that is remarkably rare within actors these days."
},

{ 
        "quote" : "Some people say that with the development of the Internet, Radio has no future. Do you agree? ", 
        "source" : "While the internet has definitely taken over many different fields of media and broadcasting, including the radio, it is too bold to claim that the development of the internet will lead to radio becoming obsolete. If we pay close attention to the current status quo, the internet already has all the features of the radio, but radios are still alive and functioning. People still listen to radios in cars on their way to work and throughout the day. People still turn to radio for publicizing events and celebrities. I believe that with further development of the internet, radio will also adapt to changes and hold its place in our lives. "
},

{ 
        "quote" : "Write about your favorite book.", 
        "source" : "The name of my favorite book is “Pride and Prejudice”. It is considered a reading classic. It is one of the most popular novels in the English language. Over 200 years after its publication, it continues to win the hearts and minds of readers around the world, thanks to its delightful heroine, unforgettable cast of comic characters, witty dialog, and satisfying romantic plot. "
},

{ 
        "quote" : "Describe a time when you spent a lot of money. What did you buy?", 
        "source" : "A time when I spent a lot of money was during last Eid. I had been able to save a great deal of money by that time and had decided to spend a good portion of it for not only myself but also the people I love. I had spent the money on buying my mother a saari, my father a watch, and my sister a bag. I also decided to spend some money on my friends and got a watch for each of my four closest friends. For myself I bought a shirt, a bag, and a bracelet. Although I had spent a lot of money, I never regretted it because of how happy it made me to be able to get gifts for the people I love and for myself, with my own money."
},

{ 
        "quote" : "Write down about a time when you worked really hard for something. ", 
        "source" : "A time when I worked really hard for something was during my last board exam. It was my graduating exam from school and therefore had a lot of value to it. Besides, every board exam is very important in a student s life. And since the knowledge I had gained for this exam had implications in my exams for university admission, the pressure was even higher. Therefore, I had to make a routine for my studies, stick to it with discipline, and work hard day and night to ensure I was preparing well for the exam. I am thankful that the hard work later paid off."
}
    
    
];





//Display random quotes
function renderNewQuote() {
   let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `${random.quote}`;
  source.innerText = `${random.source}`;
};


let wor = document.getElementById('wor');
let worst = document.getElementById('worst');
//Logic for comparing input words with quote
userInput.addEventListener("input", () => {
  

let txt = userInput.value.trim();
let countt = txt.split(/\s+/).filter((item)=>item).length;

if(countt < 150){
 worst.innerText = "Words must be 150 words.";
}else if(countt > 200){
  worst.innerText = "High Number Posibility.";
}

wor.innerText = countt;

}); 


//Update Timer on screen
function updateTimer() {
  if (time == 0) {
    //End test if timer reaches 0
    displayResult();
  } else {
    document.getElementById("timer").innerText = --time + "s";
  }
}

//Sets timer
const timeReduce = () => {
  time = 300;
  timer = setInterval(updateTimer, 1000);
};




//End Test
const displayResult = () => {
  //display result div

document.getElementById("source").style.display = "block";


  document.querySelector(".result").style.display = "block";
  clearInterval(timer);
  document.getElementById("stop-test").style.display = "none";
  userInput.disabled = true;
  let timeTaken = 1;
  if (time != 0) {
    timeTaken = (60 - time) / 100;
  }
  document.getElementById("wpm").innerText =
    (userInput.value.length / 5 / timeTaken).toFixed(2) + " wpm";


};

//Start Test
const startTest = () => {
  mistakes = 0;
  timer = "";
  userInput.disabled = false;
  timeReduce();
  document.getElementById("start-test").style.display = "none";
  document.getElementById("stop-test").style.display = "block";
};

window.onload = () => {
  userInput.value = "";
  document.getElementById("start-test").style.display = "block";
  document.getElementById("stop-test").style.display = "none";
  userInput.disabled = true;
  renderNewQuote();

document.getElementById("source").style.display = "none";

};
//reload page
  function reload() {
                location.reload();
            }
