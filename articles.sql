-- MySQL dump 10.13  Distrib 8.0.15, for macos10.14 (x86_64)
--
-- Host: localhost    Database: articles_db
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `article` text NOT NULL,
  `blurb` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `headerImageUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (67,'Love, Actually! The Feedback Your Child Needs Most','<p>As children, we learn who we are and how we are valued by the feedback we\nreceive from other people. If we do something and others respond with warmth, admiration, and\npleasure, we think of that action as reflecting the good part of ourselves. If, on the other\nhand, we do something and it is met with disapproval or withdrawal of love, we have been bad\nand we must not do it again.</p>\n\n<h3>How Kids with ADHD Are Perceived and Judged</h3>\n\n<p>There are three basic ways in which this feedback loop goes wrong for children with attention\ndeficit disorder. The first is that kids with ADHD rarely behave the same way consistently enough\nto get a consistent stream of feedback. Sometimes they are empathic and other times self-absorbed.\nIf they find something interesting, they can achieve anything but they cannot do 20 minutes of\nhomework without a meltdown. It can be hard to develop a singular sense of self while evoking\ncontradictory feedback.</p>\n','What feedback do our children need the most?','2019-05-29 20:35:02','2019-05-29 20:35:02','https://images.pexels.com/photos/2306850/pexels-photo-2306850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),(68,'You Are Not Broken:” How ADHD Erodes a Child’s Self-Confidence','<h3>You Are Not Broken:” How ADHD Erodes a Child’s Self-Confidence<h3>\n<p>One lesser known curse of attention deficit disorder (ADHD or ADD) is low self-esteem.\nIn my more than 20 years of mental health training and practice, I have yet to meet a child diagnosed with ADHD who doesn’t feel bad about him or herself from time to time. In addition to attention and concentration issues, children with ADHD struggle with an underlying belief that they are broken — that something’s wrong with them and they cannot control it.\nIn the very moments when they are trying to do their best, their bodies betray them. The world reprimands them for being “a little too much.” And they are externally stigmatized and internally shamed with the notion that, even if they want to be good — they can’t.\nParents whose children have ADHD know the scenario all too well: Your child gets overly excited at an inopportune moment. You see him try to control himself, but he can’t. You or someone else tells him to calm down or stop. Your child does the exact opposite. Your patience diminishes and your frustration increases; maybe you scold him more harshly than you mean to or maybe he feels the shame coming and act out even more.\nIn the end, your child feels worse about himself. It’s heartbreaking for parents and providers who know deep down that these kids are good kids trying every day to do their best.</p>\n\n<h5> My work with brave, resilient, and astute children has taught me that children with ADHD can stop the cycle. Here are a few simple and fun mind-body awareness exercises that kids can do to begin to do to take back control:</h5>\n<ol>\n<li> 1. Deep breathing. Taking a big, deep belly breath teaches kids that they can stop themselves and regroup. And, even better, they often feel calmer afterwards.</li>\n<li> 2. Progressive muscle relaxation. Children can learn body control and gain another tool for self-calming by practicing tightening and relaxing different muscle groups. In my own daily life, I have found that I can stop myself from saying or doing something I may otherwise regret by shrugging my shoulders in an exaggerated way and then dropping them back down.</li>\n<li> 3. Taking your pulse and regulating it. Because heart rate is often linked to emotions, some kids find it useful to take their pulse when they feel excited, nervous, or angry as an indicator of their mind-body state. Gaining control of heart rate can be a wonderful proxy for developing emotional regulation.</li>\n</ol>\n<p>It is tremendously liberating when kids realize that they can stop the cycle of low self-esteem by controlling some part of their body. In fact, I distinctly remember the day when a patient of mine realized his own power of self-control. He was the youngest of four very successful over-achieving brothers. He was bright, articulate, sensitive, and reactive. He would often have an outburst in school settings surrounding math (a challenging subject for him). Then, he would feel terrible and act out even more because he couldn’t control his feelings of shame around his initial over-reaction.\nAll who knew him struggled to watch him in this cycle. After three days of mind-body work he came running into my office: “Erina, Erina, guess what I just realized! These games — they taught me that I CAN control myself. I don’t HAVE to be a bad kid. I can fix myself.”\nHealthcare practitioners tend to look at ADHD as a deficit that needs to be fixed through medication or long-term therapy. What gets lost is the emotional burden that children with ADHD take on. Because they feel responsible for their behavior and the disruptions it can cause, they’re desperate for tools to self-regulate. Mind-body awareness is one of those tools, and it can be incredibly freeing and empowering for children who learn how to use it.</p>\n','One lesser known curse of attention deficit disorder (ADHD or ADD) is low self-esteem.','2019-05-29 20:35:02','2019-05-29 20:35:02','/images/happy_kids_2.jpeg'),(69,'I Will Sit With You In The Dark','<h3>I Will Sit With You In The Dark<h3>\n<p>One lesser known curse of attention deficit disorder (ADHD or ADD) is low self-esteem.\nIn my more than 20 years of mental health training and practice, I have yet to meet a child diagnosed with ADHD who doesn’t feel bad about him or herself from time to time. In addition to attention and concentration issues, children with ADHD struggle with an underlying belief that they are broken — that something’s wrong with them and they cannot control it.\nIn the very moments when they are trying to do their best, their bodies betray them. The world reprimands them for being “a little too much.” And they are externally stigmatized and internally shamed with the notion that, even if they want to be good — they can’t.\nParents whose children have ADHD know the scenario all too well: Your child gets overly excited at an inopportune moment. You see him try to control himself, but he can’t. You or someone else tells him to calm down or stop. Your child does the exact opposite. Your patience diminishes and your frustration increases; maybe you scold him more harshly than you mean to or maybe he feels the shame coming and act out even more.\nIn the end, your child feels worse about himself. It’s heartbreaking for parents and providers who know deep down that these kids are good kids trying every day to do their best.</p>\n\n<h5> My work with brave, resilient, and astute children has taught me that children with ADHD can stop the cycle. Here are a few simple and fun mind-body awareness exercises that kids can do to begin to do to take back control:</h5>\n<ol>\n<li> 1. Deep breathing. Taking a big, deep belly breath teaches kids that they can stop themselves and regroup. And, even better, they often feel calmer afterwards.</li>\n<li> 2. Progressive muscle relaxation. Children can learn body control and gain another tool for self-calming by practicing tightening and relaxing different muscle groups. In my own daily life, I have found that I can stop myself from saying or doing something I may otherwise regret by shrugging my shoulders in an exaggerated way and then dropping them back down.</li>\n<li> 3. Taking your pulse and regulating it. Because heart rate is often linked to emotions, some kids find it useful to take their pulse when they feel excited, nervous, or angry as an indicator of their mind-body state. Gaining control of heart rate can be a wonderful proxy for developing emotional regulation.</li>\n</ol>\n<p>It is tremendously liberating when kids realize that they can stop the cycle of low self-esteem by controlling some part of their body. In fact, I distinctly remember the day when a patient of mine realized his own power of self-control. He was the youngest of four very successful over-achieving brothers. He was bright, articulate, sensitive, and reactive. He would often have an outburst in school settings surrounding math (a challenging subject for him). Then, he would feel terrible and act out even more because he couldn’t control his feelings of shame around his initial over-reaction.\nAll who knew him struggled to watch him in this cycle. After three days of mind-body work he came running into my office: “Erina, Erina, guess what I just realized! These games — they taught me that I CAN control myself. I don’t HAVE to be a bad kid. I can fix myself.”\nHealthcare practitioners tend to look at ADHD as a deficit that needs to be fixed through medication or long-term therapy. What gets lost is the emotional burden that children with ADHD take on. Because they feel responsible for their behavior and the disruptions it can cause, they’re desperate for tools to self-regulate. Mind-body awareness is one of those tools, and it can be incredibly freeing and empowering for children who learn how to use it.</p>\n','“When you can’t look on the bright side, I will sit with you in the dark.” Alice in Wonderland','2019-05-29 20:35:02','2019-05-29 20:35:02','/images/happy_kids_4.jpeg'),(70,'My Morning Is Crazier Than Your Morning”: The Mantra of ADHD Families','<h3>My Morning Is Crazier Than Your Morning”: The Mantra of ADHD Families<h3>\n<h6>Parenting a child with ADHD can be joyful, complex… and a nightmare on school mornings!<h6>\n\n<p>When my alarm sounds, I’ve learned to hit the floor quickly, brush my teeth, wash my face, and throw on the Mom uniform: yoga pants and a tee. Through trial and error, I’ve mastered completing this all-hands-on-deck routine before my 6 year old, who has ADHD and sensory processing disorder, wakes up.\nAm I the only one who feels like she’s run a marathon before 8 a.m.?\nEven though we picked out Kennedy’s pale pink sparkly unicorn tunic and leggings last night as the day’s selected outfit, I am fully prepared for the texture of the shirt or socks to bug her when she slides them on. There is a 50/50 chance she will refuse to wear them. And I’ve learned not to sweat it.\nI know that no matter how gently I comb through her beautiful, chestnut-brown curly locks, she’s going to yell at me and argue that I can’t put a cute little grosgrain ribbon bow in her hair like her friends wear.\n<strong>[Self-Test: Could Your Child Have Sensory Processing Disorder?]</strong>\n“Leave it down, Mom,” she might say with irritation. “I like my hair natural and wild.”\nBut the biggest stressor of all? When I get out her morning Vyvanse pill.\n“Do you want to take it in chocolate milk this morning, or a muffin?” I ask, afraid of the response.\n“Neither,” Kennedy says.\nAfter putting up a half-hearted fight, Kennedy obliges and takes her medicine in a scoop of chocolate ice cream. Chocolate ice cream? Don’t judge. Sometimes you just have to keep the peace.\n<strong>[Free Parenting Resource: Manage Your Child’s Anger]</strong>\nAfter getting her backpack and coat, and strapping herself into her car seat, Kennedy says, “Mommy, I love you! I’ll miss you and sissy today.”\nAnd just like that my heart melts.\nMy sweet girl doesn’t mean to struggle in the mornings. She simply likes things a certain way, and morning routines are hard on everyone — including her.\nI’ve learned what to expect and I try to keep our morning routine as simple as possible. Like most kids with ADHD, Kennedy is thrown off by any slight deviation. On this particular day, I drop off Kennedy at kindergarten, knowing she loves me and knowing we made it through another school morning with few battle wounds.\nIt’s almost spring break in Charlotte, which means the school year is nearing an end.\nSummer in our home is a lot more lax as nobody feels the pressure to rush out the door quickly, and we can go at Kennedy’s pace even though we still try to keep a routine. I’m looking forward to a summer full of sunshine, parks, and playdates — and a break from the stressful school morning routine.</p>','Morning is not a time for battles. It’s not a time for trying new routines or imposing new consequences. It is a time for maintaining perspective, positivity, and a sense of humor.','2019-05-29 20:35:02','2019-05-29 20:35:02','/images/happy_kids_5.jpeg'),(71,'The (Reactive) Parent Trap','<h3>The (Reactive) Parent Trap<h3>\n<p>Before entering parenthood, you never imagined that someone you loved would affix 23 Pokémon stickers inside your rear car windows. Or pour shampoo in the washing machine “just to see.” Or scream directly in your face over taking out the recycling. But here you are — facing the reality that parenting a child with attention deficit disorder (ADHD or ADD) is a daily (if not hourly) test of your patience.\nFew would blame you for yelling out “I’ve had it!” Your frustration, anger, and exhaustion are understandable. But that doesn’t mean they are healthy — to either you or your child.\nTo see real change and growth in your child’s behavior, you’ve got to make a fundamental shift from reactive (“I’ve had it!) to proactive parenting. What does this look like? Proactive parents do the following:\n* Speak with intention and consistency\n* Create plans and follow routines\n* Reward direction over outcome\n* Accept and learn from mistakes — their own and their child’s\nHow Reactive Parenting Sucks Us In\n“She’s trying to drive me crazy.”\n“How many times do I have to tell him?”\n“Why is he doing this to me?”\n[Self-Test: Signs of Inattentive ADHD in Children]\nThese are the thoughts that sow the seeds of reactive parenting. They result in feelings of frustration, self-loathing, and worry, and they produce actions such as yelling, punishment, and abandonment. When emotions are running high, it’s difficult to remember that children with ADHD face some unique neurological challenges beyond their control:\n* Heightened Emotionality and Reactivity: Emotional sensitivity and rejection sensitive dysphoria are common among children with ADHD. Both may trigger what appears to be deliberately inappropriate or disrespectful behavior, like yelling at the top of their lungs or slamming doors.\n* Insensitivity to Feedback Clues: A neurotypical child might notice if Mom comes home weary and worn out from her day at work, and consciously give her space. A child with ADHD likely will not; he may demand the same level of attention that he would normally expect, despite his parent’s emotional state.\n* Impulsivity: If a child has hyperactive/impulsive ADHD, she may be unable to stop and think about the consequences of her actions before executing them.\n* Difficulty Learning from Experience: Whereas a neurotypical child can be expected to avoid past mistakes in the future, a child with ADHD rarely has the necessary executive-function faculties to do so.\n* Difficulty replaying A+B=C: Children with ADHD struggle to connect the dots between what happened, what reaction ensued, and the final result.\n[Your Free Guide to Parent Training Programs]\nHow to Adopt a Proactive Parenting Approach\nWhen faced with an upset child, stay neutral and trust that you are helping your child take over his own problem-solving process by slowly building these skills until they become internalized and adopted:\n1. Empathize: A child needs to know that her parents understand what she’s feeling and stand with her. By empathizing, you open up a parent-child dialog that may stem a shut down. If, instead, you start by grilling, “What happened?” or “What did you do?” your child will feel backed into a corner.\n2. Get Neutral: Understandably, your first reaction to your child’s bad behavior might be, “Seriously? Again?” Instead, try to read this incoming information neutrally, and remember to listen.\n3. Narrow: After a child has shared everything on his mind, focus the conversation by asking a question like, “So, tell me what is bothering you the most about this situation.”\n4. Optimize: Receive the information your child has shared without argument; instead look for ways to work cooperatively on solutions by asking, “What kinds of things can you do about it?”\n5. Get Moving: Remember your ultimate goal: Help your child become more independent and solve her own problems.\nCommon Parenting Traps\nCommunication is the root of all good and evil in a parent-child relationship. Here are common traps that lead to misunderstandings and negative responses.\nIneffective Directives: Establish that you actually have your child’s attention before getting angry that he isn’t doing as you’ve asked. Children with ADHD struggle with attention, so it’s quite possible he didn’t hear or process the request the first couple of times it was made.\nString Commands: Avoid long lists of commands. If you ask your child to take out the trash, feed the dog, fold their laundry, and set the table, it is unlikely she will remember anything beyond the trash.\nRepeated Frustrations: No one likes repeating the same request over and over again, but you must resist the urge to yell out of frustration. You don’t want to train your child to listens only when he or she is being yelled at.\nInterrupted Commands: Avoid interrupting a command by going to complete a different task or respond to a question. Remain focused if you’re requesting focus.\nVague Directives: Vague commands such as “Well, I’d really like it if you were more respectful to me,” are perplexing for children with ADHD. What does that mean — “more respectful?” How does that get conveyed? What is respect? Be clear about what, exactly, you are requesting.\nQuestion: Avoid phrasing requests as a question: “Hey, how about you organize that backpack?”\nLet’s: Avoid saying “Let’s clean up your room,” and start to make the motions of cleaning because that gives your child the option to say, “Let’s not.”\nThis article was adapted from Cathi Cohen’s 2018 CHADD presentation, Raise Your Child’s Social IQ” and the forthcoming book on this topic, “Raise Your Parenting IQ: Moving From I’ve Had It! to I’ve Got This!”</p>','Your child’s behavior never ceases to amaze you. “Again? Really?” you say, “I’ve had it!” The exhaustion is real, but continuing on the road you’re traveling won’t solve that.','2019-05-29 20:35:02','2019-05-29 20:35:02','/images/happy_kids_3.jpeg'),(72,'The One Word That Has Transformed Our Family Dynamic','<h3>The One Word That Has Transformed Our Family Dynamic<h3>\n<p>Our son received his first diagnosis three summers ago. Since then, four more have joined his laundry list of what teachers and therapists call “special needs.” Our rambunctious little ball of energy began showing signs that his Dad and I, with a combined 20-plus years of experience educating and caring for the special-needs population, knew were red flags.\n<p>He is almost seven years old now, but we spent the better part of his life from age two to five pleading with specialists and doctors who refused to evaluate a child that young. They doubted, but we already knew.\nOur days were filled with unarticulated emotions, explosions of frustration, radically aggressive meltdowns, and even restraint as we tried to prevent self-harm or harm to others. This was more than parenting a defiant toddler or adolescent; we were exhausted each day by repeating over and over again, “No,” “Don’t do that,” “Get down from there,” and “Please stop. That is dangerous.”\nWe saw therapists, specialists, OTs, play and talk therapists, and natural remedy healers. We finally decided to medicate our son. But what we learned along the way was that he was hearing lots more negative talk than positive reinforcement or praise from us, his parents — the two people who should be his greatest cheerleaders.</p>\nThis revelation was no surprise to us. We’d felt the weight of our corrections for years, and we felt unable to redirect our son’s behaviors, teach him discipline, and keep him safe while balancing the parental desire to lift him up and make sure he knew we believed he could do anything.\nLast August, after more than a year of research supporting the idea of simplification and minimalism as a means to address sensory overload for children with needs similar to our son’s, our family sold our 15-acre farm, gave away at least 80 percent of our belongings, and moved into a 36-foot gooseneck tiny home. The drastic reduction in clothes, décor, toys, and stuff has, in the last year, had a positive impact on our son’s ability to manage his surroundings and to thrive in his daily environment.\n<strong>[Self Tests for Children: ADHD, ODD, Autism, and More]</strong>\nThe move to downsize has taught us many lessons, but this summer’s perspective change came as both a surprise and a true gift to our family. Having fewer expenses allows us to be a one-income household, so we can “road school” our two kids. Since I am a teacher outside of the home, we have the summer off together as a family of four for the first time ever.\nAs we planned a road trip to speak to teachers and leaders about how to educate difficult learners — and to tiny house audiences about the benefits of downsizing and minimalism — we knew it would be a summer like no other.\nWe call it the “Summer of Yes.”\nOur son’s specialist had suggested years before that we choose two or three of his behaviors that required behavioral interference and redirection. That meant that any transgression besides those two or three behaviors (barring imminent danger), would not merit a negative reaction. Nothing. No emotion. No huffing and puffing in a silent attempt to convey our frustration. Silence.\nSince making this promise and discussing the boundaries and expectations with our son, the “Summer of Yes” has changed our perspective on parenting an extreme child.\n<strong>[Free Download: What NOT to Say to a Child with ADHD]</strong>\nOur days are no longer spent waking up and dreading what the day might bring. We no longer impatiently wait for bedtime so we can eke out a couple of hours not feeling scared or frustrated or isolated from the rest of the world that just never seemed to get us or our son.\nInstead of avoiding certain opportunities, like a festival or a park, because he might have a meltdown in public, or always ordering fast food from the the drive-through instead of dining in since he struggles with waiting, we say “Yes.” It has been incredible. Our son feels more encouraged and less restricted. It empowers him to take control over his actions.\nThe first six weeks of this summer we have been on road trips, dressed like cows at Chick-fil-A, visited splash pads, gone to birthday parties, enjoyed picnics at the park, gone putt-putting, and much more. We avoided these activities in the past because we know our son, and it often feels easier to avoid the potentially disastrous meltdown than to risk it and have to pick up the pieces.\nHe still gets overstimulated. He still struggles to articulate his feelings and emotions. And we still strategize and adjust during meltdowns. Our son has been diagnosed with brain disorders, not the common cold.\nBut now — now that we say “yes” so much more — we have fun. Enjoying our son feels like a dream! Yes, he still needs more than the neurotypical child, but he doesn’t need me to hover over him, protecting him from every potential disaster. He doesn’t need his dad to redirect every backtalk slip-up. Ignoring these small behaviors has freed up our anxiety and exhaustion. These days we see our son as a problem-solver learning to redirect himself.\nSometimes parenting feels like a broken record of “No,” “Not right now,” and “Stop that,” but it doesn’t have to be. We parents have a choice in this dance of raising our extreme children, just as much as our kids do. Try saying yes. It could change everything!</p>\n','Just say, “Yes.” When I added this word to my vocabulary — changing my knee-jerk reaction from “Heck, no” to “Why not?” — it changed everything in my relationship with my extreme child.','2019-05-29 20:35:02','2019-05-29 20:35:02','/images/happy_kids_6.jpeg'),(73,'Dear Doctors: I Need You Tell Me There Is No Magic Cure','<h3>Dear Doctors: I Need You Tell Me There Is No Magic Cure<h3>\n<h6>To my son’s doctors:<h6>\n<p>Before I even thought about you, I watched my son struggle to find the shoes sitting right in front of him. I wondered why he gave me a blank stare when I told him to do this and then that. I spent hours trying to get him to complete his homework — and years feeling annoyed at the fight because the work usually took just 5 minutes to complete. I watched him at the playground, playing all alone. Then received the harsh stares and words of parent who heard profanities come out of his mouth. I watched the simplest tasks become the biggest fights. And listened as my son told me “It’s just too hard — everything is impossible.” I wondered what was wrong with him.\nBefore I met you, I wracked my brain thinking of ways to help him. I also answered untold calls from the school. While trying to layer in good things about my son, they always ended up emphasizing the many things he did wrong — despite their efforts. And I worried — a lot.\nBefore we met, my mother told me I needed to create more structure. My aunt told me I needed to be present. Others told me that I had it all figured out. When I tried to make changes, the very people offering advice then quickly undermined me.\nI cried. I checked out. I yelled. I screamed. I hit. I blamed others. I questioned myself. I resented my son.\nThen, at some point, summoned the strength to dig deep. I made a plan. And it led me to you.\n[Self-Test: Could Your Child Have ADHD?]\nWhen we met, I listened intently, desperate for an answer. I wanted nothing less than magic. I wanted you to take away my worries, my guilt, and my anger.\nBut there is no magic. There is no clinical tool or medication that can take away the storm and chaos of ADHD and its associated behaviors.\nAnd I need you to tell me that. Again and again.\nI also need you to tell me that you’re in this storm with me. And that, ultimately, I will become the leader in the chaos, the expert in my child and what he needs. That I will become his fiercest advocate when times are tough.\nMost importantly, I need you to remind me that my son is not defined by his chaotic way of thinking and his impulsive behaviors. Remind me of the things that he can do instead of what he can’t.\n[Help Your Child’s Peers ‘Get’ ADHD: A Free Guide for Parents]\nHis gifts are sometimes overshadowed by the delivery or the emotion behind them. My son is smart. He is creative. He can dance. He can draw. He will make you laugh when you need it most. He can nurture his younger brother, delight his elderly great-grandparents, and demonstrate genuine concern for society as a whole. He can spin information and place words in context in ways you never considered. Most importantly, he protects me. And I will spend my days ensuring that I do my best to protect and fight for him — always.\nPlease remind me of this.<br>\nSincerely,<br>\nParent of a son with ADHD<br>\n</p>\n','“My mother told me I needed to create more structure. My aunt told me I needed to be present. Others told me that I had it all figured out.”','2019-05-29 20:35:02','2019-05-29 20:35:02','/images/happy_kids_7.jpeg'),(74,'Individualized Education Program (IEP): Summary, Process and Practical Tips','<h3>Individualized Education Program (IEP): Summary, Process and Practical Tips<h3>\n<p>Individualized Education Programs help ensure a student with autism is receiving the best possible services in school. IEPs are based on each student’s unique strengths and challenges. They help define a student’s personalized educational goals and lay out the steps that will be taken to achieve those goals.\nA team of lawyers at Goodwin Procter LLP has generously put together a helpful guide to help families understand the IEP process. This guide includes an overview of IEPs, an IEP timeline and critical information for each stage of the IEP process.\nQuestions answered include:\n<ul>What are the basic requirements for an IEP?\n<ul>What is the timeline for developing an IEP for my child?\n<ul>How can I be an effective participant in developing and managing my child\'s IEP\n<ul>What are the things I should consider in developing my child\'s IEP?\n<ul>What can I do if I disagree with the IEP developed for my child?\n<p>','Individualized Education Programs help ensure a student with autism is receiving the best possible services in school.','2019-05-29 20:35:02','2019-05-29 20:35:02','/images/happy_kids_8.jpeg'),(75,'What Is Autism?','<h3>What Is Autism?<h3>\n<p>Autism, or autism spectrum disorder (ASD), refers to a broad range of conditions characterized by challenges with social skills, repetitive behaviors, speech and nonverbal communication. According to the Centers for Disease Control, autism affects an estimated 1 in 59 children in the United States today.\nWe know that there is not one autism but many subtypes, most influenced by a combination of genetic and environmental factors. Because autism is a spectrum disorder, each person with autism has a distinct set of strengths and challenges. The ways in which people with autism learn, think and problem-solve can range from highly skilled to severely challenged. Some people with ASD may require significant support in their daily lives, while others may need less support and, in some cases, live entirely independently.\nSeveral factors may influence the development of autism, and it is often accompanied by sensory sensitivities and medical issues such as gastrointestinal (GI) disorders, seizures or sleep disorders, as well as mental health challenges such as anxiety, depression and attention issues.\nIndicators of autism usually appear by age 2 or 3. Some associated development delays can appear even earlier, and often, it can be diagnosed as early as 18 months. Research shows that early intervention leads to positive outcomes later in life for people with autism.<p>\n',' There is no one type of autism, but many.','2019-05-29 20:35:02','2019-05-29 20:35:02','/images/happy_kids_9.jpeg');
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-29 23:10:38