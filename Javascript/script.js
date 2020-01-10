var faq = [
    "Chiropractic approach is a combination of science-based medicine, art, &amp; philosophy of natural health. Chiropractic is famous for locating &amp; correcting bone misalignment (know as subluxations) then treating by gentle, specific adjustments thus allowing your body to repair and function to its optimum potential.<br><br>Chiropractic also covers nutrition, health care, homeopathy, muscle work, diet, and life style.",
    
    "A chiropractic technique delivered by a chiropractor trained to correct a bio-mechanical (structural) problem of a joint - known as a subluxation. This is a gentle, specific procedure in the most conservative of treatment approaches.<br><br>A chiropractic subluxation is a misalignment of a joint in the body, such as the spine (back, neck), knee, wrist, shoulder, etc.<br><br>This chiropractic subluxation can cause nerve interference which in turn can affect your body's natural ability to heal itself.<br><br>A chiropractor’s job is to reduce or remove such chiropractic subluxations, allowing the body to heal itself.",
    
    "Most people know about chiropractic care for back or neck problems, as well as headaches. But chiropractic care can treat more conditions than just the spine.<br><br>Chiropractic is the largest natural healing art in the world. It is based on the premise that the body is a self healing organism and that the nervous system is the master control system of the body. Remember that the nervous system controls every function performed by the body directly or indirectly.<br><br>Therefore, ANY problem may be related to the nervous system and could benefit from chiropractic care.<br><br>Chiropractic helps the nervous system perform better by restoring function that may be preventing you from good health. Who can benefit from this? Everybody!",
    
    "Yes. Scientific research in peer reviewed Medical Journals all provide evidence that chiropractic care is one of the safest types of health care in the world. Of the millions of people receiving chiropractic adjustments (from infants to seniors) each year, only a handful will even make a complaint.",
    
    "Not normally. Chiropractic adjustments are not usually painful at all. An adjustment to a joint usually relieves a lot of pressure and feels very comfortable. This can help heal your body and give you a sense of relief and relaxation after care.",
    
    "Popping your own spine is not recommended. You tend to move the joint above and below the problem spot, which &quot;feels good&quot; for the moment but does not fix the problem.<br><br>The joints above and below become too loose (hyper-mobile) if moved all the time, the stuck joint becomes even more jammed and fused (hypo-mobile) leading to more problems and pain. In addition the person tends to move the wrong joints again and again several times a day making it worse over time.<br><br>Chiropractors are trained to only move the &quot;stuck joint&quot;, allowing the body to heal over time &amp;  the need for adjustments of the joint become less frequent, hence the feeling to &quot;pop&quot; that joint lessens as well.<br><br>As a chiropractor I will never try to &quot;self adjust&quot; myself, instead I will get adjusted by another chiropractor.",
    
    "This question is frequently asked to Dr. Lawson, DC, because people associate the &quot;cracking&quot; or &quot;popping&quot; of one's back or neck with a chiropractic adjustment. The two are not the same thing. If a person has a desire to &quot;crack&quot; their neck or back it is often because one area of their spine is fixated or jammed causing another area to move too much and &quot;pop&quot;, sometimes by itself.<br><br>It's the fixated or jammed area that needs to be specifically adjusted by a chiropractor so that the other parts of the spine or joints will not be hyper mobile (too much motion between the joints) and noisy.<br><br>When you &quot;crack&quot; your back you may be relieving the tension for a little while. Do you notice how it keeps coming back? That is because you are not giving yourself a specific chiropractic adjustment. The cause of the spinal tension, the fixated or jammed (subluxated) vertebrae, has not been corrected.<br><br>Any person who makes a habit out of &quot;cracking&quot; or &quot;popping&quot; their back or neck needs to go to a Doctor of Chiropractic to have their spine checked. Proper adjustments by a trained chiropractor over a period of time lessens such spinal stress which in turn lessens need for treatment.<br><br>Untrained people trying to self adjust themselves or other people can actually make spinal problems worse by moving the bones that already move too much. A trained chiropractor knows which segment is &quot;stuck&quot; and needs adjustment versus the ones that don't. Even a chiropractor gets chiropractic adjustments from other chiropractors, they do not &quot;pop&quot; themselves.",
    
    "Most people incorrectly think your spine makes &quot;cracking&quot; or &quot;popping&quot; sounds of bones rubbing together. That sound actually is created by gas (in this case, nitrogen) rushing in to fill the partial vacuum created when the joints are slightly separated.<br><br>Another example of this phenomenon would be the &quot;pop&quot; sound you hear when the cork is taken out of a champagne bottle.<br><br>Not all chiropractic adjusting techniques produce this noise. In fact, some adjusting techniques use little force and thus produce no noise at all.",
    
    "Scientific research shows that 80% of pain will resolve over time (average 4-6 weeks). The problem often times does not disappear. In time pain will return because the problem is not fix. Not only does it perpetuate a cycle, it often gets worse with each subsequent episode.",
    
    "It depends if you want better health. Just because your symptoms disappear, does not mean the problem is gone. Just imagine not brushing your teeth over time. Over time your teeth and gum will go bad and can even rot away and fall out. Yet not brushing your teeth you would feel no pain until it is too late.<br><br>The same can happen to your body. A lot of times you may feel fine, but try to perform activity that can “stress” your body which can cause injury or health problems to show up.<br><br>You have most likely heard someone complain of a significant injury that was attributed to very little trauma. The most common might be: I just bent over to pick up the newspaper and my back totally locked up on me. Many times it is not the light paper, the person had problems in the past that finally caught up to them.",
    
    "No. The extent to which you choose to benefit from your chiropractic care is ultimately up to you and your life style.<br><br>However, we do strongly encourage you to seek help before there is a major problem. There are always warning signs, and a chiropractor can help teach you how to recognize them."
];

$(".q").click(function(){
    var id = $(this).attr("id");
    var html = "<h2>" + $(this).text() + "</h2>";
    html += "<p>";
    html += faq[id];
    html += "</p>";
    
    $("#text").append(html);
    
    $(".q").addClass("blur");
    
    $("#faqContainer").css("opacity", "1");
    $("#faqContainer").removeClass("blur");
});

$("#faqContainer img").click(function(){
    $("#faqContainer").addClass("blur");
    $("#faqContainer").css("opacity", "0");
    
    $(".q").removeClass("blur");
    $("#text").empty();
});









