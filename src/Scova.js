import React from "react";

// Players
import FacebookPlayer from 'react-facebook-player';
import SpotifyPlayer from 'react-spotify-player';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import InstagramEmbed from 'react-instagram-embed';
import ReactPlayer from "react-player";
// import ImageViewer from 'react-simple-image-viewer';

// Images
import bismillah from "./images/bismillah.png";
import vbEmail420 from "./images/vbEmail420.png";
import leif420email1 from "./images/leif420email1.png";
import leif420email2 from "./images/leif420email2.png";
import thumb13Reasons from "./images/thumb13Reasons.png";
import ogIPhone from "./images/ogIPhone.png";
import trumpElection from "./images/trumpElection.png";
import orm from "./images/orm.png";
import analytics from "./images/analytics.png";
import marsMeme from "./images/marsMeme.png";
import bunnyInBubble from "./images/bunnyInBubble.png";
import pageRank from "./images/pageRank.png";
import aws from "./images/aws.png";
import trumpMeme from "./images/trumpMeme.png";
import lwtTrump from "./images/lwtTrump.png";
import affectHeuristic from "./images/affectHeuristic.png";
import sockPuppet from "./images/sockPuppet.png";
import nsaNYC from "./images/nsaNYC.png";
import nsaNYCNews from "./images/nsaNYCNews.png";
import sockPuppetsShowTime from "./images/sockPuppetsShowTime.png";
import civilWar from "./images/civilWar.png";
import sockPuppets from "./images/sockPuppets.png";
import martaResignation from "./images/martaResignation.png";
import gottlieb1 from "./images/gottlieb1.png";
import ritual from "./images/ritual.png";
import fractal_equation from "./images/fractal_equation.png";
import harmony from "./images/harmony.png";
import emc from "./images/emc.png";
import jesus from "./images/jesus.png";
import yx3 from "./images/yx3.png";
// Fonts
import Charter from "charter-webfont";

const onboarding = [
  {
    classes: "quote",
    html: (
      <p>
        <strong> For Life, Liberty and the Longevity of Happiness</strong>
        <br/>
        <em>Narrated to, lived, and explained by Anhad Singh Arora</em>
      </p>
    ),
  },
  {
    classes: "quote",
    html: (
      <p>
        <em>Dedicated to my Father in Heaven –</em>
        <br />
        <em>For sending me down here</em>
        <br />
        <em>In different time periods,</em>
        <br />
        <em>To explain the same thing</em>
        <br />
        <em>To the same souls, and</em>
        <br />
        <em>Expecting me to not go insane.</em>
        <br />
        <br />
        <em>And my Parents on Earth,</em>
        <br />
        <em>Who nudge me to prefection,</em>
        <br />
        <em>In each waking moment.</em>
      </p>
    ),
  },
  {
    classes: "heading",
    html: (
      <p>
        <strong>GOD</strong>
      </p>
    ),
  },
  {
    classes: "title-image",
    html: (
      <p>
        <img src={bismillah} />
      </p>
    ),
  },
  {
    classes: "quote",
    html: (
      <p>
        The Conductor of the Universal Symphony;
        <br />
        The Modulator of Anhad.
        <br />
        <br />
        The Architect of the Grand Design;
        <br />
        The Monad of the Universe.
        <br />
        <br />
        Forever the Inquisitor – 
        <br />
        Most Gracious, Most Compassionate.
        <br />
        <em>God. Allah. Bhagwaan. Rabb. 
        <br />
        It's all the same – Khuda</em>.
        <br />
      </p>
    ),
  },
];

const verses = [
  {
    classes: "book-title",
    html: (
      <p>
        Part 1: <br/>
        Alethia
      </p>
    ),
  },
  {
    classes: "chapter-title",
    html: (
      <p>
        1 <br />
        Glimpse
      </p>
    ),
  },
  {
    classes: "verse title-quote",
    html: (
      <p>
        <strong>
          <em>dis aliter visum</em>
        </strong>
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        It was the week following April 20, 2017. I was prancing around my
        shoebox of an apartment in New York City, tripping on acid, and
        pondering over the nature of reality – you know, the usual thing to do
        when you have just skipped a major midterm of a very important course in
        your final semester of college, and failed to turn in a very important
        paper of the only course that you found meaningful by lying about the
        death of a grandparent that was still paying for this so called
        "educational endeavour" of yours – so that you could fuck off to the
        capital of the country you had slowly come to despise, to celebrate the
        freedom of debauchery, in a hotel room paid for with loyalty points you
        had not earned, with friends whose only true connection to you was that
        you indulged in illicit substances together, to celebrate the unoffical
        cultural holiday of 4/20.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:27SdWb2rFzO6GWiYDBTD9j" // Sia, Cheap Thrills
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },
  {
    classes: "verse image",
    html: <img src={vbEmail420} />,
  },
  {
    classes: "verse",
    html: (
      <p>
        It had already been a very challenging year for me. After repeatedly
        failing, dropping out, and letting a certain important courses remain
        incomplete, I had put my plans for graduating with the rest of my class
        in jeopardy by pulling this stunt. I hadn't been able to study, given
        all the emotional "trauma" that I was supposedly going through, but even
        so – who in their right mind goes off to smoke marijuana in the capital
        city of a foreign country, on what was, quite possibly, the single most
        important day of their entire undergraduate career? This detour was more
        important to the "boys" than they could have realised in the moment, or
        even years after the moment.
      </p>
    ),
  },
  {
    classes: "verse image",
    html: <img src={leif420email1} />,
  },
  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:6E7oFW7xTK6Ghucsq6tMUj" // Icona Pop, Emergency
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        My other professor, was kind-hearted enough, that he graciously involved
        his assistant in the thread, and we agreed that I would be allowed an
        extension until the end of the week. I really tried to submit the paper
        within the given timeframe, but as fate would have it, and my will would
        allow it, the paper grew into something larger than life, into a sort of
        emergency that had to be dealt with as soon as humanly possible – all
        other things happening in my life at the time, had to wait, my intuition
        said.
      </p>
    ),
  },
  {
    classes: "verse image",
    html: <img src={leif420email2} />,
  },
  {
    classes: "verse",
    html: (
      <p>
        Now, a blog post might not mean much to experienced writers, or even the
        avid readers who frivolously scroll through the endless stream of
        content in each waking moment, but to me, this article encompassed
        almost all aspects of what I had supposedly come to learn in this
        strange, but visually familiar land. As you have now read, it was a very
        lengthy read, so really, nobody other than my professor and his
        assistant really took notice of it – now that you're here, this is the
        perfect place to begin. Mind you, this is the entirety of my article
        from 2017, so you have to go back to what the bourgeoisie of the US of
        America, and the rest of their people, were up to, during this fated
        year.{" "}
      </p>
    ),
  },

  {
    classes: "demarcator",
    html: <hr />,
  },
  {
    classes: "verse image",
    html: (
      <a href={"https://medium.com/@SonOfGod/sock-puppets-383fc33da8a7"}>
        <img src={thumb13Reasons} />
      </a>
    ),
  },
  {
    classes: "block-quote",
    html: (
      <p>
        <h1>13 Reasons Why I am afraid of the Cloud</h1>
        <h2>The Legacy of Cybernetics in a Data-Driven World</h2>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If communication is to be considered a game played in partnership by the
        speaker & the listener, against the <strong>forces of confusion</strong>{" "}
        as stated by Norbert Wiener in <em>Human Use of Human Beings</em>, then
        – in a closed social ecosystem our desire to gain more information only
        gives us a bloated sense of awareness (read: education and entitlement)
        where the easier option is to surrender control to anything that holds
        our attention the longest through our screens as our disposition to
        propagate opinion using affect heuristic increasingly sets the scene for
        reality of alternative facts (read:{" "}
        <a href={"https://en.wikipedia.org/wiki/Alternative_facts"}>
          alt-facts
        </a>
        ).
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <strong>
          To explain our existence as sock puppets in a data driven world, I
          thought I’d share my{" "}
          <a href={"https://twitter.com/hashtag/13ReasonsWhy?src=hash"}>
            #13ReasonsWhy
          </a>{" "}
          I am afraid of the cloud:
        </strong>
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <h2>1. Revolution: Apple</h2>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        A decade ago, in 2007 when Steve Jobs{" "}
        <a href={"https://www.youtube.com/watch?v=wGoM_wVrwng"}>
          unveiled the iPhone
        </a>{" "}
        to the world as the intellectual offspring of the{" "}
        <em>1997/Think Different</em> campaign — hardly anyone anticipated the
        tectonic shift that keynote would trigger in the technological
        landscape. Just to recall — this was a time of flip-phones and limited
        text-messages; and Obama was a cool president because he used a
        Blackberry.
      </p>
    ),
  },
  {
    classes: "verse image",
    html: <img src={ogIPhone} />,
  },
  {
    classes: "verse",
    html: (
      <p>
        The iPhone was marketed as a touch controlled iPod that you could make
        calls and surf the internet with. Cut to 2017 — chances are you are
        reading this on a rectangular aluminum-glass Apple device connected to
        high-speed unlimited internet, still recovering from the hate-spewing
        tweet that the Leader of the Free World sent out at 3 AM. Yes, times
        have changed. Even back in 1984, when Apple was the David to the Goliath
        of corporations, they wanted the Mac to symbolize empowerment — the Mac
        being a tool to combat conformity. They aired the{" "}
        <a href={"https://www.youtube.com/watch?v=2zfqw8nhUwA"}>
          <em>1984</em>
        </a>{" "}
        ad, which is arguably the most memorable Super Bowl commercial of all
        time. To jog your memory, here’s a transcript:
      </p>
    ),
  },
  {
    classes: "verse image",
    html: <img src={trumpElection} />,
  },
  {
    classes: "verse",
    html: (
      <p>
        [Apple’s rebel enters, pursued by police]
        <br />
        <br />
        Today, we celebrate the first glorious anniversary of the Information
        Purification Directives. We have created, for the first time in all
        history, a{" "}
        <em>
          <strong>
            garden of pure ideology — where each worker may bloom, secure from
            the pests purveying contradictory truths
          </strong>
        </em>
        . Our Unification of Thoughts is more powerful a weapon than any fleet
        or army on earth. We are one people, with one will, one resolve, one
        cause.{" "}
        <em>
          <strong>
            Our enemies shall talk themselves to death, and we will bury them
            with their own confusion
          </strong>
        </em>
        . <br />
        <br />
        We shall prevail!
        <br />
        <br />
        [Hammer is thrown at the screen: Boom!]
        <br />
        <br />
        On January 24th Apple Computer will introduce Macintosh.{" "}
        <strong>And you’ll see why 1984 won’t be like ‘1984.’</strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What I love about Apple is that they have always advocated for
        technology as an instrument for change. Maybe Steve Jobs had a{" "}
        <a href={"https://www.youtube.com/watch?v=lSiQA6KKyJo"}>
          genuine vision
        </a>{" "}
        to change the world — maybe he didn’t. What I know for sure, is that the
        rest of the company, rather, corporate America blindly incorporated this
        strategy to feed their bottom line.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The iPhone certainly had the flair of the <em>Think Different</em>{" "}
        campaign, and I sincerely wish Jobs himself would have been around to
        see the technology mature. Otherwise, who could have imagined that
        decades later, Apple would be instrumental in creating the same
        Orwellian future it said it would fight against?
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: <p>2. Corporations: Apps</p>,
  },
  {
    classes: "verse",
    html: (
      <p>
        Apple made technology accessible in a way that had not been done before.
        This wasn't a personal computer for the geeks, or a music player for
        hipsters — this was a <em>communication window</em> for the masses. How
        many people do you know who don’t have an iPhone?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        For this technology to be ever more personal and accessible, it had to
        be dynamic. The people at Apple initially built an accelerometer into
        the iPhone only so it could readjust when you switched from portrait to
        landscape and that lone sensor planted the seed for fitness tracking
        through sensors. Only because those phones were programmed to track one
        extra data-point, wearable tech is a real industry and{" "}
        <em>Internet of Things</em> is not just an abstract concept anymore.
        This is only one such example.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The mobile app economy today is driven by such personal, social and
        engaging digital information. When the iPhone first came out, it seemed
        ridiculous that a phone would have so many extraneous uses. Now, there
        is rarely anything that doesn’t have an App anymore. There’s a{" "}
        <em>facebook for… uber for… tinder for…</em> It is such an abstract
        concept, but if you are like most people, you too definitely have an
        imaginary app idea. I can keep writing ad nauseam about the iPhone, it’s
        engineering, the genius behind its marketing, and the change it
        triggered in in entrepreneurial landscape—I did write my college essay
        on it. The point is that Apple has exponentially sped up the
        technological advancement — placing the mother lode of information
        sending & receiving in people’s hands, so much so that that societal and
        political progress seems glacially slow.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: <p>3. Data: cloud of the internet: Google</p>,
  },
  {
    classes: "verse",
    html: (
      <p>
        There is an an illusion of knowledge when all the world’s information is
        a command away. You never fully grasp a concept because it is always at
        your fingertips. We all “research” everything so well, to try and be
        prepared in advance for everything. It is such a millennial belief too:
        “I’ll just <em>google</em> it” This leads us to falsely believing that
        we know everything.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Shout a question out loud preceded by <em>“Hey Siri/Alexa/Cortana”</em>{" "}
        or the gender-neutral omnipresent <em>“Ok Google!”</em> and see if a mic
        is currently on standby for any query you might have. We’re letting
        Amazon’s Alexa record all private conversations inside our house only so
        we can miscommunicate the name of our favorite playlist 657 times and
        enjoy the extra comfort of shouting at a machine to snooze the alarm for
        the 787th time.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        "The commands through which we exercise our con­trol over our
        environment are a kind of information which we impart to it…Information
        is a name for the content of what is exchanged with the outer world as
        we adjust to it, and make our adjustment felt upon it … To live
        effectively is to live with adequate information."
        <br />
        (Norbert Wiener, Cybernetics & Society)
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is the exchange of this data through an interface — visual, auditory
        or tactile — with the internet that makes all this possible. This
        continued exchange of information is important as more collected
        information leads to more insightful results. It only makes sense that
        Norbert Wiener in <em>Human Use of Human Beings</em> wrote that, “the
        fate of information in the typically American world is to become
        something which can be bought or sold.”
      </p>
    ),
  },
  {
    classes: "verse image",
    html: <img src={orm} />,
  },
  {
    classes: "verse",
    html: (
      <p>
        Not that I, am any special — I have backed up all my personal and work
        information to Google Drive because they offer unlimited storage to
        students. I trust them with my deepest moments because Google Photos
        offered to backup all my old pictures in high definition for free to
        clean up space on my low cost low physical space phone. Even though it
        is fun to have a world map that puts a pin on every location I have ever
        travelled to, this also means that — Big Brother also always knows where
        I am — courtesy of the latest fitness tracker I am using to watch how
        little steps I am taking towards accomplishing a goal. I have no qualms
        against all this too, I just want to pose this question:
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <strong>
          How protected is my data from misuse under the
          <br />
          *Terms & Conditions that I never read but agreed to?
        </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        We blindly accept whatever data an app requests to receive; accept terms
        and conditions solely to consume freemium — never acknowledging the
        repercussions of misuse of data on the other end — trusting a
        corporation that only ultimately sees us as a data-point in a
        multidimensional matrix of millions.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: <p>4. Social Media: Facebook & Twitter</p>,
  },
  {
    classes: "verse quote",
    html: (
      <p>
        “to be alive is to continuously exchange information with the world.”
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The only decision you make on the internet is where you choose to click.
        Every social network’s revenue and valuation depends on how frequently{" "}
        <strong>YOU, the user</strong> checks the screen. They especially hire
        psychologists to understand our minds better, and more often than not,
        they choose to employ our ‘Fear of Missing Out’ to their advantage.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Did you think you were the only one who judged people by looking at
        their profile? When was the last time you stalked someone’s Instagram
        profile without <em>double tapping</em> on any picture?
      </p>
    ),
  },
  {
    classes: "verse image",
    html: <img src={analytics} />,
  },
  {
    classes: "verse",
    html: (
      <p>
        Autoplay videos, disappearing stories, they all have the same goal —
        that you either don’t leave or you keep coming back to it as many times
        as possible. <strong>Social Media is our mental junk food.</strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It definitely is working to their advantage. Google, Facebook, Instagram
        — all get paid for advertised keywords. Each impression is worth
        something. So even if you are mindlessly scrolling through your feed 10
        times a day, not even clicking on anything, you are still helping social
        networks mint money — and if you click on the ad, then that is just a
        classic financial transaction.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: <p>5. Engagement: see Glitter & give Gold</p>,
  },
  {
    classes: "verse",
    html: (
      <p>
        How did you land onto this article? Did you type in the link? Of course
        not. The link is too long. Maybe you clicked on it while browsing your
        social feed perhaps? Was it Facebook or Twitter or good ol’ email? You
        have definitely come to this website from some other place. It’s how the
        internet is built. Bits of information linking to each other.{" "}
        <em>
          One moment you’re inching closer to nirvana — discovering the meaning
          of life in the vibrational energy of the universe and a few clicks
          later you’re self-pleasuring to humans in demeaning positions.
        </em>
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        Your attention has some inherent value according to a method calculated
        by an ad agency which, they figure is contingent on the likelihood of
        you clicking on that ad, and further contingent on the likelihood of you
        converting that ad click into a transaction — isn’t that just the most
        cybernetic thing you’ve ever heard?
      </p>
    ),
  },
  {
    classes: "verse image",
    html: <img src={marsMeme} />,
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>Content is King,</em> and the longer any online content can keep you
        glaring at a screen, the better chances of it converting into a
        financial transaction. People have a <em>fear of missing out</em>{" "}
        because they have looked at so much good content. Real life never quite
        matching up to imagination can be detrimental to us both physically and
        mentally.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <h2>
        Separate us from our phones, and watch us crumble under the itch to
        scroll.
      </h2>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        We watch movies to find out what kind of experiences are possible in the
        world — align ourselves with a character in the storyline, and follow
        along their story making decisions if we were in that situation. We
        judge people who think like the characters we hated, or rather,{" "}
        <em>the-protagonist-whom-we-associated-with</em> hated. We might
        convince ourselves that this is educational, but in reality it is
        substituting <em>virtual storylines</em> for actual{" "}
        <em>human experiences</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I haven’t even begun to talk about Virtual Reality and how it might
        affect our our development as social beings. As these experiences become
        more and more real, and the more online content that you trade in for
        your time — the more time you take away from your real life. Granted
        real life isn’t that interesting, but{" "}
        <strong>that’s the problem</strong>. Only last week, Facebook announced
        Facebook Spaces: a place in virtual reality so you can engage in totally
        normal activities that would otherwise be too boring and uneventful in
        real life. I can’t help but feel like Nicole Stenger as she wrote in{" "}
        <em>The Mind is a Leaking Rainbow:</em>
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        “As those vessels of reality communicate, you feel that any level of
        commitment is possible: that you can answer the phone, drink your coffee
        and yawn, as you drag yourself as a grasshopper in the greens of
        cyberspace. Or that you can pull yourself entirely into the Blue Lagoon
        and get drowned. “The real can be turned inside out like a glove,” says
        Virilio (1984: 148). On the other side of our data gloves, we become
        creatures of colored light in motion, pulsing with golden particles.
        Forget about Andy Warhol’s petty promise of fame for fifteen minutes. We
        will all become angels, and for eternity.”
      </p>
    ),
  },
  {
    classes: "verse image",
    html: <img src={bunnyInBubble} />,
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <strong>Always struggling to keep up. Never really there.</strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>FOMO</em> causes real feelings of dissatisfaction, and this constant
        fear of missing out means you are not participating as a real person in
        your own world — too distracted living the content instead of living
        actual experience. If virtual-reality is more interesting than our
        shared 3-D reality, and there is an endless supply of content that gets
        more real with each iteration, with offers of increasingly varied
        choices, and very low involvement from the consumer —{" "}
        <em>if this isn’t utopia, then what is?</em>
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        "What is surfing? surfing (or browsing) is the activity of engaging in a
        series of glimpses, each of which exposes the browser to objects of
        potential interest; depending on interest, the browser may or may not
        examine more closely one or more of the (physical or represented)
        objects; this examination, depending on interest, may or may not lead
        the browser to (physically or conceptually) acquire the object."
        <br />
        (Marcia J. Bates)
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In the age of virtual reality and instant gratification, we have come to
        expect the same standards for rewards elsewhere in life. Surfing around
        from experience to experience just like on the web. In the land of
        social jerk-offs, when was the last time you had a completely engaging
        conversation in real life where you weren’t inclined to be in contact
        with more than one person?
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: <p>6. Filters: gardens of pure ideology</p>,
  },
  {
    classes: "verse",
    html: (
      <p>
        Are you constantly staying updated through news alerts — hopelessly
        trying be to be smarter, more aware, more caring about the world? With
        social interactions delegated through social media, haven’t the
        unfiltered barrage of notifications only left you desensitized?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Have you tried to speak up, and reach out to the other side to resolve
        your differences? Were you instantly labelled with an{" "}
        <strong>“-ist”</strong>? You would think that with all this data, people
        would educate themselves, and get smarter — but they have only gotten
        worse.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In this environment of political correctness and <em>safe spaces</em>,
        we aren’t doing any favour to the communities that have been harmed and
        hurt by obsessing over semantic indiscretions. How will an argument ever
        be resolved if neither side hears a nuanced and detailed advocation from
        the other side? This won’t happen unless those people have a civil
        conversation as grown adults — in REAL life. You can’t expect that to
        happen on social media. Even a simple comment will have you lynched by
        trolls & fanatics.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If social networks were to be considered a parallel half-dimension to
        our 3-D reality, then what would the{" "}
        <a href={"http://art.yale.edu/file_columns/0000/8696/galloway-ch4.pdf"}>
          Protocol
        </a>{" "}
        be in this new half-dimension? Even Political Correctness, like all
        protocols, is a technique for achieving voluntary regulation within a
        contingent environment.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So how do you ever clarify your stance if the nuances can’t be debated,
        and decisions and judgements are made without fully processing all
        available information in its entirety?{" "}
        <strong>Does anyone even have the time?</strong>
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        “Confirmation Bias is the mother of all misconceptions. It is the
        tendency to interpret new information so that it becomes compatible with
        our existing theories, beliefs and convictions. In other words, we
        filter out any new information (disconfirming evidence) that contradicts
        our existing views, such that prior conclusions remain intact.”
        <br />
        (Rolf Dobelli, The Art of Thinking Clearly)
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: <p>7. PageRank: machines take over your thought process</p>,
  },
  {
    classes: "verse",
    html: (
      <p>
        The more machines aid in extending our thoughts, more control we
        surrender. What actually is the <em>best</em> result? How does the
        machine render anything important?{" "}
        <strong>
          <em>
            Rather: what was the programmer’s intent for the machine to deem
            important?
          </em>
        </strong>{" "}
        The associations that you naturally make in your mind, as you transcribe
        your thoughts on the screen — if the machine starts to predict what you
        are going to type next, how instantly regressive is that?
      </p>
    ),
  },
  {
    classes: "verse image",
    html: <img src={pageRank} />,
  },
  {
    classes: "verse",
    html: (
      <p>
        If you see recommendation services as machines feeding us information,
        then as the{" "}
        <strong>
          <em>source of information</em>
        </strong>
        , they — and by extension, whoever controls the machine you are
        currently looking at — has a certain{" "}
        <strong>
          <em>control over you</em>
        </strong>
        .
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In most cases, it is a server out of a thousand similar in an entire
        colony of servers performing thousands of permutations per second —
        constantly 24 x 7 x 365 with minimal downtime. They are only just{" "}
        <em>computers</em> left automated to find optimized content for millions
        of users without human intervention.
      </p>
    ),
  },
  {
    classes: "verse image",
    html: <img src={aws} />,
  },
  {
    classes: "verse block-quote",
    html: (
      <h2>
        <strong>Google. Netflix. Spotify.</strong>
      </h2>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Devices are getting smarter at predicting what you intended to find —
        finally delivering the promises of <em>artificially intelligent</em>{" "}
        code predicting individually optimised results.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Mechanisms are perfectly in place to feed us our freemium. Corporations
        don’t need to know what you’re actually thinking. They just use metrics
        to single out remarketing segments that lead to high conversion rates.
        They know what you want; and have an inherent need to manipulate public
        perception using basic social psychology. It’s called marketing. It is
        not necessary for a product to be good, it needs properly marketed —
        otherwise in all this noise of social media, the consumer would never
        find them. That’s fine — it is Capitalism 101. Know your consumer. It’s
        only natural, and probably even comes from a place of good intent.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        If you are really scared of AI taking over the world, then think about
        this: at what point does the machine’s suggestion become our default
        selection? And who is actually controlling what we choose to see?{" "}
        <strong>
          Does the algorithm only learn from our choices, or does it contribute
          to our bias?
        </strong>
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: <p>I don’t think we have asked ourselves these questions.</p>,
  },
  {
    classes: "verse block-quote",
    html: <p>8. Closed Social Ecosystem: fall into the loop</p>,
  },
  {
    classes: "verse",
    html: (
      <p>
        With everybody hyperfocused on their particular issues, the internet
        becomes a particularly fertile ground for confirmation bias. To stay
        informed, we continually browse pages & blogs, almost always forgetting
        that our favoured pages mirror our existing values, be they liberal,
        conservative or somewhere in between. With tailored content being
        delivered with least resistance, the chance to engage with a divergent
        opinion altogether disappears.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Entropy in a closed system always increases — hence decreasing the
        amount of effective information available in the system. The{" "}
        <em>system</em>, for our purposes is simply some social web service that
        provides utility to users in the form of informational requests &
        responses. The more you tie yourself into the system, and stop reaching
        out for different stuff, the more likely are you to fall in an infinite
        loop of confirmation bias — it’s what Democrats are calling
        peak-liberalism.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This situation obscurely corresponds to an experiment by British
        cybernetician Stafford Beer in 1970’s socialist Chile. Project Cybersyn
        advocated for democratic participation of factory workers in the process
        of data-driven decision making in a factory system. Stemming from good
        intent, the experiment ultimately revealed a lot of the design biases
        that continue to exist as we transition into a new system with the rules
        of the previous one — and how that can lead to exclusion and
        marginalization of sectors of the population.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: <p>9. Trump: force of confusion</p>,
  },
  {
    classes: "verse quote",
    html: <p>“seduction represents mastery over the symbolic universe.”</p>,
  },
  {
    classes: "verse",
    html: (
      <p>
        Before Trump, I never quite realized the propaganda I was devouring.
        Presidents come and go but it is the spirit of democracy that keeps the
        system intact, right? Trump is no ordinary president. No matter how much
        the left denies it, even I really hate to say it — but{" "}
        <em>Trump is a leader</em>.
      </p>
    ),
  },
  {
    classes: "image",
    html: <img src={trumpMeme} />,
  },
  {
    classes: "verse",
    html: (
      <p>
        He was thought to be temperamentally unfit for the Presidency— and even
        rallied against by politicians from both sides of the aisle at some
        point or the other during the past year. Yet he won; and that’s scary,
        since his public perception is that of a
        trigger-happy-carpet-bombing-white nationalist to his enemies. A person
        of such temperament is just one bad decision from assuming dictatorship
        and leading the world into apocalyptic oblivion.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        For him, it is a game in the Von Neumann sense. Donald Trump managed to
        stay in the limelight consistently for abundant forgotten reasons
        throughout his campaign, just liked he wanted—by introducing confusion
        into the messages of the side he opposed, and news outlets took the bait
        every single time — as they continue to do so to this day. I can
        personally vouch for this from the meagre effort I put in that{" "}
        <a
          href={
            "https://github.com/anhadarora/NLP/blob/master/Anhad%20Arora%20-%20NLP%20-%20Project%20Report.pdf"
          }
        >
          qualifies as research
        </a>{" "}
        to explore Trump’s manipulations of the media narrative. In Trump’s Von
        Neumann game, concealing the strategy of the sender is not only
        permitted but encouraged.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Trump’s special skill in selling himself is his uncanny ability to
        intuit crowd mood. He understands that he has to reach past the
        nitty-gritty social-media issues to the American people’s sense of
        themselves. Regaining the <em>feeling of greatness</em> is the key.
        Trump’s quote on exaggeration, from his <em>Art of the Deal</em>{" "}
        explains this succinctly:
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        “The final key to the way I promote is bravado. I play to people’s
        fantasies. People may not always think big themselves, but they can
        still get very excited by those who do. That’s why{" "}
        <strong>a little hyperbole never hurts</strong>. People want to believe
        that something is the biggest and the greatest and the most spectacular.
        I call it truthful hyperbole. It’s an innocent form of exaggeration, and
        a very effective form of promotion.”
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What if he steps up his rhetoric? That’s what everyone is constantly
        thinking — what’s on the Donald’s mind?{" "}
        <em>Nobody knows. And that’s his game</em>. You’re not supposed to know
        what he might do, were a situation to occur. I understand that, you have
        the element of surprise. It is pretty neat actually. All you need to do
        is tweet out different permutations of the same rhetoric phrases at
        strange hours of the night. Always keep the people guessing —{" "}
        <strong>keep them on edge</strong>.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: <p>These guesses are the same questions we are all asking.</p>,
  },
  {
    classes: "verse",
    html: (
      <p>
        Why are you constantly tweeting about North Korea? Why are you calling
        the free press <em>fake</em>? What do you mean by <em>fake</em>? Why
        don’t you ever clarify yourself? Will you ever tone down your rhetoric?
        Will you stop confusing issues of nuclear stability, with religious
        radicalism, with police brutality, with promises of a healthcare plan
        you don’t have, and jobs you can’t deliver?
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        Why are we still debating legitimacy of climate change, evolution and
        the civil war when it should be your presidency that should be
        challenged?
      </p>
    ),
  },
  {
    classes: "verse image",
    html: <img src={lwtTrump} />,
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <a
          href={
            "https://medium.com/@HooperDrivesTheBoatChief/18-lessons-i-learned-from-reading-trumps-art-of-the-deal-66d67e94ab23"
          }
        >
          Rhetoric over Substance.
        </a>
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        “The whole technique of secrecy, message jamming, and bluff, is
        concerned with ensuring that one’s own side can make use of the forces
        and agencies of communication more effectively than the other side”
        <br />
        (Norbert Weiner)
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        A dictator, to be successful, gives their people an impression of law
        and order, and a belief in themselves. To those who truly support him,
        Trump is a businessman first, who will renegotiate America’s true place
        in the world — what matters is the perception that he has created
        through targeted marketing to passionate supporters. If you don’t see
        the Presidential side of the Donald, it is because you might not be his
        target demographic, they are the people whom you silently judge when you
        spot them wearing a #MAGA hat.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Many critics still fail to get this point. There is a{" "}
        <a
          href={
            "http://www.independent.co.uk/voices/donald-trump-might-not-be-good-news-for-america-but-hes-great-news-for-the-tv-networks-a6941441.html"
          }
        >
          famous quote from Les Moonves
        </a>
        , the head of CBS, “Donald Trump is horrible for America but he’s
        amazing for this network.” He has made his demographic feel comfortable
        — if only by preying on their fears multiples times each day. He
        probably tweets out every time he has a literal itch. Everyone else,
        will stay distracted.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I’m sure if Trump tweeted this out once, we could all rest and move on:
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        I am a reasonable man, I will not trigger a worldwide nuclear
        apocalypse.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: <p>10. Fake News</p>,
  },
  {
    classes: "verse quote",
    html: (
      <p>
        "What is news? What is it that we believe is important?"
        <br />
        Carl Bernstein
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        That the media could be used to manipulate the mass unconscious, is no
        big secret. Since, entropy in a closed system always increases, this
        means that the effective information available in the system decreases.
        Currently, the Democrats are trying to pin down whatever Donald’s game
        is, especially with respect to his plans for the next four years.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        A manual of the public relations industry by one of its leading figures,
        Eddie Bernays, opens by observing that “The conscious and intelligent
        manipulations of the organized habits and opinions of the masses is an
        important element in democratic society.”
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In my opinion, with the Russian connection, Trump’s opposition is going
        too far. There is no ulterior motive — the real estate mogul is seeing
        the value of his properties appreciate worldwide, and that is the only
        deal he was ever interested in. Our game is to keep guessing, and stay
        engaged without ever taking the time to process anything — while you
        secretly hope that all your crazy theories about the world aren’t true.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If you don’t trust the paid media, then you probably believe what your
        social connections tell you. Even in that case, if you read some
        person’s opinion online, and find their views agreeable — you might be
        inclined to share it with your network. Maybe you even add a
        clarification on where you stand on specific details if they differ from
        the author’s view. You can do this for some articles, not all. You don’t
        have that kind of time, or energy. Many times you might even share
        something with opinions drastically different from yours, but that was
        probably not why you shared it. It doesn’t matter what the inclination
        to share, everybody reads — and everybody shares.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Are more people likely to share a viral tweet, or a 4000-word
        thinkpiece? Since most of this information is shared without context,
        anything with a negative connotation spreads faster than any fire. We
        still continue to share — more content consumed somehow feels more
        satisfying.
      </p>
    ),
  },
  {
    classes: "verse image",
    html: <img src={affectHeuristic} />,
  },
  {
    classes: "verse",
    html: (
      <p>
        There is a lot of room for misunderstanding and the mistreatment of
        information if the intention is only to move on to the next piece of
        information without ever fully grasping all available data at hand. If
        you see an article from a seemingly trustworthy website, shared and
        commented on by a lot of people, then you are likely to believe it too
        right? If human experiences are irrelevant and metadata is enough to
        corroborate your actions in real life, then does it really matter if it
        happened in real life? Then does it really matter if the news was
        legitimate? Or the commenting users real? Imagine this for users of
        varied demographic, with numbers in millions. You’ve generated fake
        opinion. It’s how{" "}
        <a href={"https://www.youtube.com/watch?v=zmeDzx4SUME"}>
          <em>Reddit</em>
        </a>{" "}
        grew.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <h2>Spread this around effectively, and you’ve generated fake news.</h2>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The data from our social engagements can be used to build fake profiles,
        and propagate malicious opinions — sometimes sock puppets could
        influence you, sometimes you propagate their alternative-facts. In the
        age of Trump & 24-hour news cycle and unbreakable feedback loops, who
        even knows what’s what anymore?
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        It is not really fake news, it is just you who is going crazy thinking
        about it.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: <p>11. Sock Puppets: engineering consent</p>,
  },
  {
    classes: "verse",
    html: (
      <p>
        Sock Puppets are more damaging and confusing than just noise. By design,
        they spread their opinion with malicious intent. In the old days they
        called it <strong>Sabotage</strong> — the kind seen in cloak and dagger
        political dramas—bribing actual humans to align with a political
        interest through exchange and barter and coercion. Sock Puppets just
        need to be fed the required variables — and you’ve generated buzz about
        an issue that no person even talked about.
      </p>
    ),
  },
  {
    classes: "verse image",
    html: <img src={sockPuppet} />,
  },
  {
    classes: "verse",
    html: (
      <p>
        On the subject of manipulating opinion through information control in a
        system that is the state, Noam Chomsky in his book Masters of Mankind
        writes of “democratic” process of <em>consent without consent</em>,
        quoting Walter Lippman, he states that the public must “be put in its
        place”, and that its “function in a democracy is to be “spectators of
        action,” not participants, acting “only by aligning itself as the
        partisan of someone in a position to act executively,” in periodic
        electoral exercises. Evidently, propaganda works best when influencing a
        reluctant or indifferent majority.
      </p>
    ),
  },
  {
    classes: "verse image",
    html: <img src={nsaNYC} />,
  },
  {
    classes: "verse",
    html: (
      <p>
        The Critical Art Ensemble somehow prophesied in 1996 on the subject of
        transfer from a disciplinary society to one of control:
      </p>
    ),
  },
  {
    classes: "verse image",
    html: <img src={nsaNYCNews} />,
  },
  {
    classes: "verse quote",
    html: (
      <p>
        “…the conspicuous appearance of halls of power was used to regimes to
        maintain their hegemony…Even though the monuments of power still stand,
        visibly in stable locations, the agency that maintains power is visible
        nor stable. Power no longer permanently resides in these monuments, and
        command and control now move about as desired.”
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        When the government gives the people an <em>illusion</em> of progress
        and prosperity, that’s propaganda.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: <h2>It’s all about the optics, isn’t it?</h2>,
  },
  {
    classes: "verse",
    html: (
      <p>
        The more technology becomes an extension of who we are — the less you
        would need humans to influence mass behavior. You learn to{" "}
        <em>control the narrative</em> in the medium that garners the most
        attention (engagement) from your target audience — and then you feed
        them what you want, with the added advantage of propaganda optimized
        especially for individual consumer.
      </p>
    ),
  },
  {
    classes: "verse image",
    html: <img src={sockPuppetsShowTime} />,
  },
  {
    classes: "verse",
    html: (
      <p>
        This way, everyone gets a right to their opinion so they can feel
        special while consuming the same nonsense content as everyone else.
        Better yet, if the content is merely suggested to them — they will learn
        to associate with the suggestion as their default choice and possibly do
        your work for you by defending opinions that were never their own to
        begin with.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: <p>12. Reality of Alternative-Facts</p>,
  },
  {
    classes: "verse quote",
    html: (
      <p>
        "Facts do not cease to exist because they are ignored."
        <br /> (Aldous Huxley)
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If there are so many conflicting versions of the same truth, then how
        will we ever reach a consensus, let alone a{" "}
        <em>collective consciousness</em>? Meanwhile, the mass unconscious is
        well open to manipulation — like the Freudian devil that it is. Engaging
        content has kept us occupied, with almost no difference between
        entertainment and education, and then we ask ourselves how we ended up
        with a President who doesn’t believe in Climate Change and a Vice
        President who wants Evolution to be taught as a theory — as if all of
        science is just people getting baked and merely <em>suggesting</em>{" "}
        their Alternative-Facts.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The election is over. Republicans won. Everyone should move on — I want
        to. I can’t yet, I still don’t have the answers to posed question —
        meanwhile, life calls and there is not much anybody can really do — and
        what about the next season of House of Cards? I can’t deal with all this
        real stuff right now.{" "}
        <em>Makes me very compliant doesn’t it? Not being able to keep up.</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Norbert Wiener wrote of such a thing that kept the masses compliant:
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        “The loyalty to humanity which can be subverted by a skillful
        distribution of administrative plums will be followed by a loyalty to
        official superiors lasting just so long as we have the bigger sugar
        plums to distribute. The day may well come when it constitutes the
        biggest potential threat to our own security.”
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        With the internet being a fertile ground for confirmation bias, and
        everyone sharing half-baked versions of their truths — living in their
        bubbles, thinking they are smart — we are probably just being led by
        machines in search for more content. Our interaction with technology has
        certainly brought about more polarization than connectivity. In our
        frivolous attempts to never offend anyone, we often don’t say the things
        we should have said. Likewise, when we err on the side of caution, we
        sound overzealous and borderline conspiracy theorist. Although, I did
        see this viral meme, so I’m not the only person to acknowledge social
        media’s importance:
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        We don’t write <strong>IRL</strong> (in real life) anymore.
        <br />
        We write <strong>AFK</strong> (away from keyboard)
        <br />– internet is real life.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In a closed system, where we are increasingly getting accustomed to
        passive organized habits based on primitive heuristics — because there
        is so much information to go around — people see what they want to see.
        Often, they are backed by skewed information — especially now, with the
        speed of social media, decisions made on snap judgments are plenty, and
        more often than not, we don’t have the time to convince the intelligent
        ignorant otherwise. This very well could be a factor in the rise of this
        “wall” that really divides two sides of any issue.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The presence of a force of confusion in such a closed system is almost
        always accompanied by chaos.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: <p>13. Chaos</p>,
  },
  {
    classes: "verse",
    html: (
      <p>
        You know you’re onto something when you wake up to find that topic
        trending on twitter, on #LoyaltyDay of all days.
      </p>
    ),
  },
  {
    classes: "image",
    html: <img src={civilWar} />,
  },
  {
    classes: "verse",
    html: (
      <p>
        The <em>Information Purification Directive</em> requires assault on any
        source of information that does not conform to the Center’s dictation of
        Truth: “Our enemies shall talk themselves to death. And we will bury
        them with their own confusion.”
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This sounds like the doctrine that authoritarian and totalitarian
        governments feed their people: telling them to <em>not think</em> as the
        chaos of disorder will enslave them. People are expected to forfeit
        their freedom of thought and action to the State so they get taken care
        of.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Sounds like America to me. Not to single you out America, my homeland
        India is the same — we love the same content you do, we just have to
        wait for the content to buffer sometimes. We did elect Modi, and he was
        actually tried for abuse of power against religious minorities — so I
        could just as well have said the same things back home. And this is what
        troubles me. In the context of our mobile-first world, I believe Nicole
        Stenger said it better:
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        "Cyberspace, both open and closed, would be our last shelter… We would
        celebrate in cyberspace💃🏻, rocking and humming in televirtuality,
        inhabitants of a country that is nowhere, above the networks of busy
        money laundering.
        <br />
        Over the rainbow." 🌈
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The US recently dropped their largest non-nuclear bomb only to kill ~90
        ISIS militants. The orange missile was quaintly titled{" "}
        <em>Mother of All Bombs</em>. Just to give you a perspective, if not
        nuclear, which triggers a worldwide apocalypse, this was just a close
        second. This is at the beginning of their offensive. Imagine how this
        ends, <em>if ever</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What did America do? Laughed at the fact that it looked like an orange
        cheeto, tagged a couple friends in a meme, and moved on to kitten
        watching.
      </p>
    ),
  },
  {
    classes: "image",
    html: <img src={sockPuppets} />,
  },
  {
    classes: "verse",
    html: (
      <p>
        Pause for a second and think. Do you really know anything? If you
        couldn’t google tomorrow —{" "}
        <strong>
          How smart is your brain really without the comfort of the white search
          bar?
        </strong>{" "}
        Meanwhile, somebody is collecting all this data that you generate to
        construct an alternate person in the virtual world (sock puppet) to push
        their own agenda. If all of us real humans are just metrics in
        cyberspace — a data point in a multidimensional dataset of millions,
        nobody needs to hire street vandals anymore. Use your sock puppets —
        which we might be feeding with all this data that we generate and leave
        online — free for anyone to use, alter, and propagate.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It was probably stupid to buy into Apple’s change the world philosophy,
        because even as they set out to ‘smash the old canard that the computer
        will enslave us,’ as an Apple spokesperson said at the time of the{" "}
        <em>1984 ad</em>, they were just doing their job —{" "}
        <em>
          ‘We did not say the computer will set us free — I have no idea how it
          will work out. This was strictly a marketing position.’
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        We’re so distracted in trying to know everything about the world, that
        we lose out on the details. Political theater exists only in screens of
        continuous engagement, only to serve as an object of entertainment.
        We’re fighting amongst ourselves in this garden of pure ideology — while
        the grown ups have taken back control, with populist leaders popping up
        all over the globe — closing borders and retracting from trade deals.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <strong>Ask yourself this:</strong> How much of your life do you really
        control?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I’m glad at the end of the day I can pack up and move back to a
        disciplinary society where I am well aware of the forces of control.
        While America figures out the controlling forces in play in their new
        system, the world patiently hopes that your internal conflict doesn’t
        pour over onto the rest of the globe. As for the Donald, I hope he
        peacefully delivers on his campaign promises, because if he follows his
        own ideology, he will get a good deal:
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        “You can’t con people, at least not for long. You can create excitement,
        you can do wonderful promotion and get all kinds of press, and you can
        throw in a little hyperbole. But if you don’t deliver the goods, people
        will eventually catch on.”
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Unless Marine Le Pen wins the French election — then it’s WWIII for
        real. (God, I hope not).
      </p>
    ),
  },
  {
    classes: "demarcator",
    html: <hr />,
  },
  {
    classes: "verse",
    html: (
      <p>
        To be fair, I had no prior knowledge about LePenn's political leanings,
        or the domestic politics of France in general. I only came across LePenn
        from barely working on an experiment during my oh-so-brief stint at a
        psychology research lab at NYU. There too, I barely made through a week
        before I panicked about not being sufficiently qualified, or trained, to
        hold a job whose only purpose was training. I had gotten fired from that
        job too, only a week prior to 420 – so LePenn was still very fresh in my
        mind.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Even more important than the President that France didn't choose at the
        time, was the President that America had chosen. After all the political
        dramas that I had so ferociously absorbed in all of my time in New York,
        the borders between real and reel life were so precariously blurred,
        that it had become all the more harder to keep up with the political
        scenario.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        As a young, "woke" person of my time, I felt that it was my civic duty
        to stay current with the affairs of the country where I had wished to
        set my roots. I had come to USA from India, with a couple suitcases of
        clothes and paraphernalia, that may have seemed overkill at the time,
        but, in my mind, I had packed up and left the country. Education was my
        only way out, and I had taken it.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “Trouble and anguish shall make him afraid; <br />
          they shall prevail against him, as a king ready to the battle.” <br />
          (Job 15:24)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I wanted to be free from my current societal constructs, from the
        expectations of what I was <em>supposed to be doing</em>, and most of
        all – I needed to get away from this family of mine who I had come to
        detest. It didn’t help that over 90% of my high-school class had
        boycotted me over their childish insecurities. In my mind, I had packed
        up and left a life behind, to which I had no intentions of coming back. Nothing in the world could make me. 
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Here’s the thing though: before going out, and finding faults in the
        world – look inwards and correct yourself. Ask why <em>you</em> are the
        way you are. What are the things, the experiences, the people that made
        you the person you are today? When you explore all that, and more, and
        still don’t manage to find an answer to solve all your life’s problems,
        then, and only then choose to blame the world, and ask why the world is
        the way it is. Don’t, until then, discount even a single negative habit
        that you have – not one negative behaviour you partake in.{" "}
        <strong>
          Everything matters, and be damn sure – that every action does count
        </strong>
        .
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Put yourself in a position to change your circumstances; and if you want
        to change the world – put yourself in a position to bring change into
        the world – whether that is your own <em>self-centred</em> bubble of a
        world, or the entire human populace as we know it. Don’t be an ignorant
        protester, cursing from the bottom of the ladder.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Climb on top of the ladder first, understand what it takes to climb the
        ladder, and only then point out the negativities that exist in the
        system of climbing that ladder. If for some reason, you cannot climb the
        ladder, don’t fault the system before you have had the chance to
        properly experience it. You might only have witnessed the hardships of
        the beginning, but don’t complain before you have had a chance to taste
        the fruits of the end. If there exists a system in the world, it must be
        because it works. You can find faults in it for not being perfect, for
        not being the best implementation of what it could be –{" "}
        <em>nothing ever will be</em>. You can’t find faults in it because it
        has not worked for you so far.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In a similar manner, you can’t find faults in a person whose life you
        have not lived – whose hardships you have not experienced. You can’t
        simply hate or despise another entity for having a particular opinion,
        for engaging in a particular behaviour, and simply interpret their
        actions from your own perspective. There are reasons for why people are
        the way they are and why they engage in certain behaviours in the way
        that they do – you will never truly understand those reasons if you keep
        looking at things from <em>your</em> point of view.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Therefore, whenever you feel the urge to express hate, or your
        disposition, or your disappointment, or any other negative emotion - the
        first thing to do is to break down the issue at hand to the tiniest
        indivisible components. Then, psychoanalyse those issues ad nauseam.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You could do this with a professional, but it will always help if you
        know the theory for yourself. People with domain knowledge are far
        better at finding actionable insights than people who only know how to
        interpret, and have access to, the data, but are working without domain
        specific expertise. It is <em>always</em> better if you exist at the
        intersection of this Venn diagram.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Ask yourself why each component is relevant to the problem at hand, and
        locate its source up to the most basic <em>fractal origin</em>. Run
        scenarios in your head, explore alternative strategies and formulate a
        game plan. When you do this exercise, and if you do it very well, you’ll
        realise that the problems really, actually, stem from within your own
        self and manifest outward into your{" "}
        <strong>
          <em>confine of influence.</em>
        </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        While doing this, also{" "}
        <em>
          accept that you are only just a human, and as such, have limitations{" "}
        </em>
        – in your scope of understanding and execution of said method. Do this,
        knowing full well, that you may be wrong.{" "}
        <em>
          Nothing you will ever know, or understand, or comprehend, will ever be
          truly absolute – an end unto itself
        </em>
        .
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Even after you do all that, and the answer to your initial problem comes
        from a <em>source seemingly separate from your own self</em>, then, by
        all means available to you – channel your negativity into the world.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <em>You will most definitely be proven wrong, correctly so. </em>
        <br/>
        I did, and I was.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Even then, one of the things about humans though, that truly gets to me,
        is how easily we pass judgements – on each other, on situations, on any
        and all entities that we ever come across. I have often wondered what
        life would’ve been like if we just did not have the ability to judge.
        That was swiftly proven majorly antithetical, given that this is{" "}
        <em>the very evolutionary trait</em> that has kept us on top of the food
        chain despite our physical shortcomings.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Here I was, shying away from my personal responsibilities, and ranting
        into the void of the internet with all my puny might, getting nowhere.
        What was I expecting? Did I think that this singular thinkpiece that
        outlined our <em>collective ignorant surrender of control to an invisible
        force </em>had the potential to trigger a global revolution on the scale that
        had never before been witnessed? I sure wrote it with that intensity.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:6axOZ4BSW8rj9KbislTMrx" // Sophia Bastian, Blind Ambition
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The question then I had was not why I, personally, wrote it with that
        connotation; the question on my mind was why every single article that I
        encountered on the web was reverberating the same intensity? Was this
        the <em>archetypal definition of passion</em>? Was this what people meant when
        they said – "put your heart and soul into what you do"?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        An incalculable number of thoughts along these lines were coursing
        through my brain at the time – each having an infinite depth that was
        begging to be explored, no matter the topic I chose to give attention
        to. It didn't help that I was sufficiently baked at the time, because{" "}
        <em>sativa</em> strain of marijuana does that to you. Usually I would've
        been ecstatic at such a coherent realisation of my own accord, but this
        was different.{" "}
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I was usually debating vague philosophical arguments with my self when
        the mood called for it, but I wasn't <em>just baked</em> at the time
        that I had this realisation. For the first time ever in my life, I had
        written them down in a coherent, empirically verifiable manner. I
        should've been proud. Perhaps if I had gotten my fifteen minutes of fame
        following my posting of this article, I would've been content.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:6IFwG4pnVPcpwX4kXFUbsV" // Tove Lo, Influence
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        As a tangent to the above thought, I was also thinking about the fact
        that I had written all of this down while under the influence of LSD, so
        there was a part of me that wondered about the rise of this new trend in
        Silicon Valley of microdosing on LSD – taking miniscule amounts of this
        chemical each day to incrimentally increase one's productivity. I was
        wondering whether I should move to Silicon Valley after graduation,
        where, for once in my life, I would fit right in.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:2J2Z1SkXYghSajLibnQHOa" // Sia, Unstoppable
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I had moved from Ludhiana, to Mussoorie, and then back to Ludhiana, and
        then to New York City – maybe that's where my life would take me next. I
        was going to be a graduate in Computer Science, so I thought it'd be a
        perfect fit. Little did I realise in that moment, that being the social
        creatures that we are, if I was escaping one model of society, I would
        have to put more efforts into adjusting into a different societal model.
        After having written the article that you have just read, you would
        expect that I, of all people, should not have been thinking about
        further entwining myself into this decadent system that I had just
        rallied against.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:3tJ4y2Zqx6gM9xOAuFfsSF" // Tove Lo, Cool Girl
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        On a personal note too,{" "}
        <em>
          I had already I altered my entire persona to <strong>fit</strong> into
          the new dynamic
        </em>{" "}
        of New York City, and of America. I had so desperately wanted to be a
        part of this glamourous life, of the{" "}
        <em>Land of the Free, and the Home of the Brave,</em> that I had just
        reduced all of my entire upbringing to zero. Doing this, and more,
        hadn't gotten me to a particularly exciting position.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “And he dwelleth in desolate cities, and in houses which no man
          inhabiteth, which are ready to become heaps.”
          <br />
          (Job 15:28)
        </em>
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        It is a very famous cliché that ‘
        <em>change is inevitable – nothing is constant but change</em>.’ It is
        true, but the true beauty of human nature is in retaining the{" "}
        <em>essence</em> <em>of what was</em> in the face of{" "}
        <em>what could be</em>. No matter how much circumstances change, how
        much you change yourself to adapt according to those circumstances – you
        still remain <em>You</em> – changing ever so slightly, yet remaining
        constant in the midst of evolution.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        Thinking this, I started to wonder about my true essence – what was I,
        if there was no internet tomorrow? What skills had I gained in life,
        that would help me survive in a world with no computers? What
        connections had I personally fostered in my own life that made me
        eligible to cast metaphorical stones at every single person in the
        world?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What did I really know about the nature of reality, or the workings of
        the world? What experience did I have in the human condition that
        qualified me to talk at length about the nudging of the collective
        consciousness? Was I truly awake, or more incoherently, "woke"? Wasn't I
        also, truly, just an ignorant protester, cursing from the bottom of the
        ladder?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I was worried, anxious, and in complete disarray, but my outward manner
        was calm, composed, and apparently, <em>in control</em>. It was at this
        moment, that my gaze was directed at the very last line of this
        mind-bending article that I had somehow written, onto the words{" "}
        <strong>"God, I hope not."</strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:44p0C72gL2FbjWbzkUFfTf" // Sia, Bird Set Free
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Here's where I was, at that point in spacetime – for most of my college
        life, I was clinically depressed, and hopelessly suicidal. Every single
        night, as every single day, was to me, the same. I'd start the day
        mildly hopeful, every other day I'd make a plan to revive my life's
        trajectory towards positivity, and every single night, I'd disappoint
        myself.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To constantly avoid feeling like a disappointment, to my own self, and
        to others that I held dear – I had stopped feeling any negative emotions
        altogether, and saturated myself with physical relievers. I never wanted
        to feel bad, so I did the opposite – tried to feel good all the time,
        because, like I've already said, I was ecstatic when I was able to form
        a coherent thought that people could relate to. This habit of mine had
        started because I wanted to explore more of what the world had to offer,
        and see if life was really worth living.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Then, because I had kept this facade up for longer than needed, I lost
        the true essence of myself altogether.{" "}
        <strong>
          <em>I was it, and it was me.</em>
        </strong>{" "}
        It was as if I hadn't let go of the mindless garbage that I was trying
        to get over, but instead, stuffed it deep down into wherever these
        thoughts went, and slapped a fancy band-aid on top of it all. This
        facade was how others that saw me, defined me.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I do not know when exactly I lost faith in God as a concept – I remember
        for sure, that I never believed in God as an anthropomorphic being –
        that's one thing I'm eternally grateful for, for having been born in a
        home where Sikhism was the faith in practice. I believed that, an
        omnipresent, all powerful entity surely couldn't take the fragile human
        form – it was just the most stupid notion that never remotely made
        sense.{" "}
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:2CPqh63wRVscbceKcPxwvv" // The Ocean, Mike Perry
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        God, as a trusted guide too, had ceased to exist for me – perhaps when I
        realised that nothing I ever truly wished for in prayers ever came true. I had stopped asking for guidance, because the world's version of the forever generous being had never worked for me. I was raised well by my mother, so I just naturally assumed that I had turned out to be a good person. If that wasn't good enough for God, then so be it – what had He done for me anyway? I never prayed in a superstitious manner anyway, so it couldn't be that. I had always referred to Him internally as "Babaji" – a revered guru, because that's what my mother called Him.{" "}
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I never truly understood why she used that specific term – perhaps
        because she cannot imagine God not being an anthropomorphic figure – she
        was exposed more to Hindu mythology, so that might be my best guess as
        to why. It was very clear that <em>mama</em> revered God, whatever his form, or
        lack thereof, may be. That was nurtured in me, even though I stopped accepting it for a very long time.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:2ZXgJg2WwDnVmR8Ats9ph6" // Spada, Cool Enough
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Here I was, in my fancy shoe-box of an apartment, in the most talked
        about place on Earth – unhappy to the deepest recessions of my
        conscious, and arguably subconscious, being. I was not going to graduate
        on time, and I had just been fired from a menial job, and the one that I
        still had, I really didn't want to go back to.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In that moment, I wrote another email. This time, to my boss, at the
        only job that could guarantee my further stay in this country that I was
        slowly coming to detest.
      </p>
    ),
  },
  {
    classes: "verse image",
    html: <img src={martaResignation} />,
  },
  {
    classes: "verse",
    html: (
      <p>
        Now, I truly had no further job prospects, and the classes I was still
        in, just felt pointlessly tiresome. Couple that with hopeless
        addictions, widely unaccepted proclivities of sexual nature, an immense
        amount of deception towards the self, and the world, and finally – a
        recognition of being unfinished – of being an unfinished version of
        myself, of being a rip-off of the real thing, of being, utterly,
        hopelessly, outrageously,{" "}
        <strong>
          <em>inadequate</em>
        </strong>
        .
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:4X9ZNYMNhSLEooltuPAjWV" // Tove Lo, Thousand Miles
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        For the past four years, I had felt that way – as if an impending
        catastrophe was going to befall me, and the more I read the news, the
        world at large. I was not one to pretend that I did not have any
        problems. I had many. More than I could recount at any given point in
        time. I had sought help, and the system had truly failed to work for me;
        as it had failed for countless others in a position similar to mine.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:1brwdYwjltrJo7WHpIvbYt"
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        During the third year of my college, I had received a conclusive
        diagnosis of Clinical Depression. To say that I was shocked would be
        untrue, because being a Psychology major myself, I had sort of seen this
        coming. I had spent many lonesome nights wandering aimlessly across desolate cities, always feeling that something in me was just <em>off</em>. For my self, it was not a matter of if, but when. Receiving this diagnosis was rather anti-climactic.
        </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Even still, just because I was intuitively aware of it, that didn't necessarily mean that I was well equipped to deal with it. Before this diagnosis, I had voiced out my concerns to all the people I thought I could confide in – some were inexperienced, some ill-equipped, but what it really was – was that people were too lost in their own problems to adequately be able to deal with mine. And I had broken way too much of my furniture in moments of pure rage to be qualified just as a "moderately sad" person. All of me, was all over the place, and at all times. I surely couldn't expect someone to take the time out of their own struggles to devote to my issues – issues which I, myself, did not perceive as worthy of being resolved. 
      </p>
    ),
  },
  {
    classes: "verse image",
    html: <img src={gottlieb1} />,
  },
  {
    classes: "verse",
    html: (
      <p>
        I sent multiple emails like this, and had multiple in-person
        conversations like this, and they all said the same thing –{" "}
        <em>seek help.</em> Arguably, it didn't take a genius to figure out that
        I needed help – I used the actual words that "I need help." I asked
        friends – they were the same age as me, so of course they were clueless.
        How could they know more? They were also limited in their exposure to
        the right information. I asked my parents – they were the root cause of
        most of my problems, and because I was their first-born, they had no
        clue as to how to deal with someone my age. They too, were limited in
        their exposure, and experience.{" "}
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        Even still, I had asked people for accommodations, and they had made
        provisions to the best of their abilities in many cases (some weren't as kind as the example above) – it was still, just not enough. I did not have enough support, and despite other people around me trying their level best, it all just felt –{" "}
        <em>inadequate</em>.
      </p>
    ),
  },


  {
    classes: "verse",
    html: (
      <p>
        Here's the thing though – in such a beaurocratic system, not everyone
        has the time, or the empathy to engage in such a lengthy discussion.
        Arguably, not every person in the position that I was, is able to
        coherently conjure up actual words to describe these motions. The point
        that I'm really trying to make here – is that we are all just, almost
        always, inadequate. We have to work to perfect ourselves to become our
        best selves. A 22 year old cannot be the best version of a human –
        that's a recipe for disaster. You peak too soon, so you spend the rest
        of your life looking back at the supposed "best" times of your life. The
        best, should always be what's to come – not what's already gone; because
        what kind of an existence would that be? Isn't the system of wiping your
        memories at each birth, but keeping your intuition, fair?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        How are we then set up for failure? How could one possibly fathom this
        system to be unfair, if it really just wants what's best for us. How is
        it not generous, compassionate, and innately forgiving? I know how one
        can fathom – because I was just pondering over it today. I was thinking
        about why the collective consistently arrives at a place where the
        decadence of the individual causes a catastrophic collapse of the entire
        system. If it is so easy, almost natural to act like there are no rules
        in the Game of Life, and that you can get away with anything as long as
        nobody living being knows about it, how has the world functioned well
        enough such that we have managed to persist thus far?
      </p>
    ),
  },




  {
    classes: "verse",
    html: (
      <p>
        I was just in a hopeless state, psychologically, but physically, a sort
        of serenity was taking over me gently. An experienced psychologist might
        call it dissociation, or the uninitiated might try to pass it off as a
        hallucination, and in the moment, I would've been at a loss for words
        when trying to rebut their claim. I felt dizzy, so I laid down on my
        bed, and started to look at the sunlight refracting through my
        decorative curtains – slowly, but surely, the rays of sunlight began to
        glimmer into a sort of golden sparkle, the patterns on the drapes began
        to interchange, and reorganise, a jigsaw puzzle began to unlock, all in
        real time, and lo and behold, an image of Guru Nanak began to emanate
        through the floral patterns of the curtains as beams of light passed
        through them.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:3VRlXNkZXwodUYo6DU8puS" // Fitz and the Tantrums, HandClap Spotify Sessions
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I wasn't shocked, or even on my feet running around muttering{" "}
        <strong>
          <em>"Eureka, I found God"</em>
        </strong>{" "}
        because like I've just said, a serenity was taking over me gently. Guru
        Nanak's image in the curtain, slowly started to move, and then spin –
        and then, appeared a Gautam-eque <em>mudra</em> of the hands covering
        his face. In that hand, was a joint, that this spinning image of this
        holy person seemed to be smoking. My mind began to wonder about all of
        history's holy men being just dudes tripping in caves, but the image
        immediately signalled me to shush – the finger on lips gesture
        internationally interpreted as the command "Be Quiet."
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:40MkEbKzuSW9ET6HBngqnK" // Major Lazer, Light It Up
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },
  {
    classes: "demarcator",
    html: <hr />,
  },
  {
    classes: "chapter-title",
    html: (
      <p>
        2 <br />
        LoST
      </p>
    ),
  },
  {
    classes: "verse title-quote",
    html: (
      <p>
        <strong>
          <em>dolce far niente</em>
        </strong>
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <FacebookProvider appId="295988795097494">
        <EmbeddedPost
          href="https://www.facebook.com/anhadarora/posts/10212133203226339"
          width="100%"
        />
      </FacebookProvider>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        As the serenity of Nanak's presence started to fade away, I felt an
        unusual anxiety creeping up my spine. This wasn't just my usual
        life-sucks-I-want-to-die anxiety, this was so much more ominous than
        that. It wasn't just my own sorry existence that I was beginning to
        doubt, I had started to question the nature of reality itself.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The clearheadedness of LSD faded away over the coming week, and in its
        wake, began a series of unfortunate coincidences that could not possibly
        be explained by mere chance alone. There was a colloquial working theory
        floated famously by Elon Musk, that all of human reality was just a
        simulation, controlled by higher order beings, much less sinister than
        the one portrayed in the <em>Matrix Trilogy,</em> but something with a
        more apathetic intent, a Grand Experiment, if you will.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <InstagramEmbed
        url="https://www.instagram.com/p/BTvvgU2FiNC/?utm_source=ig_web_copy_link"
        containerTagName="div"
        hideCaption={false}
        width="100%"
        align="center"
      />
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        According to my version of events at the time, America, and its people,
        were being prepared for a long, unattached war, that would undoubtedly
        encompass most of their allies, and by extension, their declared enemy
        states. To say that I was scared would be the understatement of the
        Millennium – I had started to shake to the bone. Sure, that could also
        just be a side-effect of my indulgences – I had known LSD to have that
        effect on my physical body. Still, the Devil's Advocate in me couldn't
        just pass this off as a coincidence.{" "}
        <em>
          Either I had stumbled upon the Divine path, or I had definitively
          discovered that the concept of religion itself was a global
          conspiracy, led by dudes tripping balls in caves and whatnot
        </em>
        .
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What I witnessed that day, lying down casually, and anxiously, drugged
        in my apartment on that sunny afternoon, could really, ideally, be
        snubbed off as a hallucination – a figment of my elevated conscious
        state, and my twisted, sick brain, as a result of having taken in so
        much visual information while in the elevated state.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:7jStM0aMv8WoG91YrrDMbw" // MUNA, Around U
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In fact, that's exactly what I did when the drug washed away from my
        system. I went about my daily routines, went back to college for the
        final week of classes, and sanitised my apartment as my parents were due
        to come into town for my <em>Graduation.</em> At the time, they knew
        nothing about my indulgences in this foreign country, and I intended to
        uphold the status quo. <em>Why fix what ain't broke</em>, I thought;
        rather, why upset the balance when the alternative is pure chaos?
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <FacebookProvider appId="295988795097494">
        <EmbeddedPost
          href="https://www.facebook.com/anhadarora/posts/10212360541149645"
          width="100%"
        />
      </FacebookProvider>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Exams went by nicely, all things considered. Unsurprisingly, I failed
        Linear Algebra, and had to repeat the course over the summer, with the
        same professor. I took it in my stride, and put up mandatory
        ecstatic-about-graduation posts across all my social channels. Of
        course, my original facebook post was just a continuation of my ongoing
        facade, prior to this Glimpse, but what else could I do? Drop everything
        and announce I was going home, because "death to America"? I wasn't
        suddenly going to turn into a radical religious fanatic because Nanak
        had shushed me.{" "}
        <strong>
          <em>I needed to know more.</em>
        </strong>{" "}
        I couldn't just blindly trust. I had to verify. I needed time, and
        access to more of this magical potion that was causing the structure of
        reality to fall apart.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        My parents came, happy, but not content – I had been avoiding talking to
        them for months now, and all of a sudden they were here. Could I tell
        them anything? Where would I start? How would I frame the sentences?
        What mindset were they supposed to be in to be truly acceptant of my
        revelry? Was I really prepared for all the questions that they would
        most definitely throw at me? I knew I was at fault, but wasn't I the
        victim once? Wasn't this why I began this whole charade? Wasn't this why
        I essentially ran away from home, desperately trying to escape? How did
        I end up in the worst possible position, given all of my actions? I had
        done no harm to any other person, but myself, why was I being punished
        more, and repeatedly?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <InstagramEmbed
        url="https://www.instagram.com/p/BT0KQaPFyyu/?utm_source=ig_web_copy_link"
        containerTagName="div"
        hideCaption={false}
        width="100%"
        align="center"
      />
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        Like I mentioned, I wasn’t equipped to maintain this balance between the
        self and situational control for a very long time. In college, I was on
        a different continent. I had some childish desires and pent-up
        frustrations that I needed to blow-off. I <strong>needed</strong> to let
        loose, and experience what it meant to be<em> truly free</em>.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “He shall shake off his unripe grape as the vine, <br />
          and shall cast off his flower as the olive.” <br />
          (Job 15:33)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I knew I was addicted to <em>stimulation</em> – via chemical inducing
        drugs or other dopamine related acts – didn’t matter. I liked my
        isolation. Having found this alternative world where I was the master,
        and where with each command, I could only make my life seemingly better
        – I never wanted to get out of it.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        People say that addiction to drugs and other illicit substances is
        largely because the partaker wants to escape the mundane life that they
        have built for themselves. That is largely true; but look around the
        world.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        How many things are offered to you in the form of media representations
        that you cannot really have? How many images are you exposed to, to make
        you think that the life you are currently living is only just mediocre?
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        How many advertisements tell you that you only deserve the <em>best</em>
        ?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You might not think so highly of yourself, but you are surely made to
        feel like you should. All the gourmet food, all the nice material
        things, all the exotic adventures in unexplored lands, and all the
        beautiful people – why wouldn’t you want to surround yourself with only
        the <em>best</em>? And if you cannot have the best in the outside world,
        then why would you deprive yourself of the best stuff in the comfort of
        your own house?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I liked that idea, for a while, and it was fun while it was good. As my
        college life neared its end, and reality came knocking, I was starting
        to feel an existential dread hover over me. I spent so much time
        thinking, pondering, and revising my ideas about life – but then all of
        a sudden, this? Where did this holy person, the founder of my faith,
        appear out of? Was it the specific placement of the drapes at that very
        moment, in that very spot – was it just a massive coincidence, or was
        this a recurrent pattern, or something, really, wholly, truly, larger
        than life? What kind of sorcery had I gotten myself mixed up in?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <InstagramEmbed
        url="https://www.instagram.com/p/BUIXviOltSp/?utm_source=ig_web_copy_link"
        containerTagName="div"
        hideCaption={false}
        width="100%"
        align="center"
      />
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        All I really wanted to do, was enjoy my free time, and I did it in the
        best way I knew how. Then, was my way truly so great that I had found
        the ultimate respite – the Absolute Truth? Is this what Nanak spent his
        life singing about? Were the 10 gurus, just a closed cult of hedonistic
        nepotists, who passed on the secret to a pleasurable life over
        generations to close relatives, and then, in the end, composed a cryptic
        symphony that was in some way related to the rituals that a person in
        that elevated state was bound to have established for their own self
        anyway? Over a month went by, and I was just – processing.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <InstagramEmbed
        url="https://www.instagram.com/p/BUQpZs-FigS/?utm_source=ig_web_copy_link"
        containerTagName="div"
        hideCaption={false}
        width="100%"
        align="center"
      />
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        A month later, I had almost forgotten about this Glimpse. Yes, I was
        processing it for a very long time, but as is the nature of life, other
        stuff that is currently ongoing, takes precedence. The parts of life
        that do not have a proper storyline, the parts that are dissonant, and
        involve a boatload of brain power are often kept on the backburner –
        making their existence felt only when relevant.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Three odd things did happen which I have managed to remember to this
        day. The first one being the unavailability of LSD, but also, of time to
        indulge in such a long trip that required a good portion of the day, and
        left you so exhausted that you really had to set aside a whole weekend
        for just a single trip. I usually had the luxury for such indulgences
        when I easily cancelled plans with the "boys." To be really honest, I
        wasn't very keen on calling LSD an indulgence at that moment. At the
        time, it was more of a life-exploration, mind-expanding treatment that I
        was flirting with. The Glimpse had happened on what was essentially my
        sixth acid trip.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I had made a mental commitment that I was going to get the best grades I
        possibly could, and with a little flattery and presenting myself as an
        ideal student, impress my Analytics professor and cajole him into
        getting me a job somewhere not in the US. I was most definitely not
        ready to go home yet, or ever. I may have seen Nanak's face, but that
        really didn't change anything. I had written that article, but that
        also, just had tainted America for me – other caucasian countries still
        had a fair chance.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The second odd thing was very miniscule, something which I would've
        disregarded, had it not been for the impeccable timing of it. The boys
        and I were at a club, and one of them had just ordered a bottle of
        champagne to celebrate his admission into a prestigious MBA program.
        This was hardly surprising, given that he was genuinely book-smart. I
        was, also slightly unsure about this news, given this person's history
        of lying. Whatever the case, I wasn't one to turn down a free drink –
        the more the merrier.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        We sat down, and began to chat about our future prospects. I, at the
        time, had already given up all of my prospects, by will or by
        circumstance, and was left with nothing to talk about, but this latest
        introspective adventure of whose meaning, I had no way of explaining. I
        began to talk anyway. I started off with declaring that I wasn't
        entirely sober when said occurence took place, and he scoffed, because
        what else was expected of me anyway? I skipped over the dates of this
        trip, because then he would know why I had missed our senior formal.
        Being sufficiently vague, I skipped the segment about my article, and
        moved ahead to the part about lying down on my bed and looking at the
        drapes.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I mentioned that I saw an image of Guru Nanak while tripping on acid,
        and that the face in the image was obscured by a mudra of the hands. I
        was about to get to the part about Him consciously shushing me, but we
        just got interrupted by another friend of ours who dragged him away. It was like a well-timed skit – I got shushed by the universe when I tried to tell someone that I had been sushed by, the universe?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Later that night, before going to bed, I was led to searching the
        meaning of the word, "syncronicity" and my intuiton told me that that's
        probably what was beginning to occur with me. A slight shiver went down
        my entire body – not the kind that makes one scared, but the kind that
        slightly arouses one's sense, in a sort of awakening, in the presence of
        something novel, and breathtaking.{" "}
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The third oddity was probably the major turning point that would form a
        prelude to what was to come later. It was one of the boys' last night in
        New York, before leaving for India after college had ended for them. I,
        on the other hand, was going to be in New York for at least that summer,
        as I still had those failed classes to retake. He wanted to have a sober
        night out, after his own carousal journey. The one who was not leaving,
        wanted to celebrate equally on finally getting a permanent, paying gig
        that would sponsor his stay in the country for years to come.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I can undoubtedly say, that they both deserved it. They had partied, but
        also balanced their responsibilities with a clear head. I admired their
        gumption, and their focus – which is why I liked having them around.
        They made me want to be better, to do better, to try harder, and to give
        my own life, my own ambitions, and my own narrative, the grit with which
        I engrossed myself in this exploratory parallel life wherein I was
        always looking for ways to be more comfortable than my actual, physical
        stature had warranted.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So to celebrate earnestly, in a manner that suited all of our mellow
        temperaments, my friend who was staying in New York, and myself, decided
        to take ecstacy. We were accompanied by our friend who was leaving, and
        another one of their friends, with whom I had never actually had a
        chance to properly bond. He was more of a delicate whiskey admirer, who
        couldn't indulge in illicit substances to the level that three of us
        "boys" could.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In most social situations, especially where drugs and alcohol is
        involved, most people judge your personality by the <em>vibe</em> you
        give them in the moment with a thought that goes along the lines of —
        “Can I kick back, relax, and have a beer with this person?” If yes,
        you’re in. You are the considered a part of the imaginary group of
        people that this person would choose to hangout with, if such an
        opportunity ever arose.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Even if the social situation has no indication of such a future
        connection, most people are thinking about it — consciously, or
        subconsciously. Even if the social setting is such that no possible
        future connection can be made,{" "}
        <em>most people just need an excuse to talk</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Not that talking without purpose is in any way wrong. On the contrary,
        it is talking without an end-goal or predisposition that often leads to
        serendipitous understanding – of the situations that you are, and have
        been in, and about the other person, and by extension, the self.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        We were all not the kind to dance all night, and party till the sun came
        up, so we just decided to walk around East Village, in an attempt that
        was reminiscent of a beautiful walking around acid trip that my friend
        partaking in ecstacy with me had had with me a couple months prior.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “Not that which goeth into the mouth defileth a man; <br />
          but that which cometh out of the mouth, this defileth a man.” <br />
          (Matthew 15:11)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I believe, that if you really have to indulge in such a thing, do it out
        in the open – with other people around you – so they can see who you
        truly are when your prefrontal cortex has given up a certain amount of
        control, given the amount of illicit substance currently in your body.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is true, that when you relax your senses, your inhibitions, and by
        extension, your best judgement – you are losing some control to what is,
        in appearance, separate from the self. You open yourself up in front of
        this separated entity – make yourself <em>vulnerable</em>, and thus,
        open to exploitation. In such a situation, the elements of said entity
        can make <em>you say</em> things you wouldn’t have otherwise, they can
        make <em>you confess</em> to personal stuff since you are more prone to
        sharing details that you wouldn’t have otherwise. They can make{" "}
        <em>you engage </em>in activities that you wouldn’t have otherwise. Life
        doesn’t get much beyond stupid high-school games.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “Do not ye yet understand, <br />
          that whatsoever entereth in at the mouth goeth into the belly, <br />
          and is cast out into the draught? <br />
          But those things which proceed out of the mouth <br />
          come forth from the heart; and they defile the man. <br />
          <br />
          For out of the heart proceed evil thoughts,
          <br />
          murders, adulteries, fornications, <br />
          thefts, false witness, blasphemies:
          <br />
          These are the things which defile a man: <br />
          but to eat with unwashen hands (hands is a metaphor) defileth not a
          man.”
          <br />
          (Matthew 15:17-20)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        All of us are just expected to do adult things because we have spent so
        much time LOL-ing around. We are expected to do better, more mature
        things based on the stuff we have learnt in all our traversal in this
        spacetime and in this life. Sometimes the actual experience doesn’t
        really matter, it is just a matter of having spent more time in a
        situation than the other person that leads most people to think you have
        more <strong>experience</strong>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This is most often true in social situations.{" "}
        <strong>
          <em>
            A large chunk of all social interaction, is really just predicated
            around an experienced entity being engaged by others with seemingly
            lesser experience in the domain on which the entity being engaged is
            seemingly more experienced.
          </em>
        </strong>{" "}
        Most of your knowledge <em>about</em> social situations comes from your
        family, and this is subconsciously engrained in you, as you have been
        watching your family in social situations since before you knew the
        difference between private and public behaviour.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You also mostly don’t think about acting on this knowledge – it is
        already a part of your natural mannerisms. Sometimes you work hard to
        get rid of these behaviours, sometimes you flaunt them knowingly. Your
        relationship with these mannerisms mostly depends upon your relationship
        with your family members, particularly the ones who implanted these
        traits into your persona.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Family, then, is an important part of who you are, and – if you stay
        with them long enough – who you eventually become. You can’t discard the
        influence <em>they have on you (read: nurture)</em>, neither should you
        discard the behaviours <em>you receive from them (read: nature)</em>. It
        is <em>always</em> better if you embrace them for what they are, and
        make the quirks of your family your strengths, rather than focus on them
        as some sort of disability that needs to be overcome.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Throughout the night, we were split into combinations of pairs, walking
        side by side, just calmly chatting about where we came from, and
        reflected on how far we had come, and how we still, had miles to go
        before we slept. All three of the guys had fabulous prospects in every
        sense of the word. The one in finance was going to work for a major
        multinational bank, the one in tech was going to work for a social media
        behemoth, and the business oriented one was going to take up his
        position in his family's company.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It seemed that life was panning out very well according to the
        aspirations that they said they had in the beginning of their respective
        undergraduate journeys. Myself on the other hand, had vague ideas about
        exploring life, and escaping home; and to be really honest, I had
        actually done well too – given the mind-shattering Glimpse.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It wasn't as if my existence thus far had been just of a pathetic
        addict, who was rolling around in the mud because he didn't know better.
        I had learnt, I had failed, and I had always gotten the courage to get
        back up, no matter how flailingly. If the summer went well, I would only
        be three months behind the rest of my class, and would've graduated with
        a double major, that too, in the vastly uncommon combination of Computer
        Science and Psychology. If I played my cards right over the summer, I
        could still land a paying gig in the field of my choice.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Ofcourse my start would be a little harder than these three compatriots
        for the night, but then again, I had much more emotional maturity than
        them three combined. My emotional stability, however, was an altogether
        different matter. The fact that I had come this far, without any
        emotional support system to carry me across throughout my days, was an
        issue that I had yet, not acknowledged properly.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I had come to New York City from Ludhiana, with no friends, or relatives
        to guide me, and stand by me, in this strange country. Most of the
        people who had supposedly been doing well in college, had some kind of
        support system. Whether it was friends from the same school, or the same
        town, at NYU, or in neighbouring colleges, or visiting repeatedly from
        different citites in the States, or relatives to spend the weekend at,
        who would aid them, and guide them through the bureaucratic complexes
        that are a major challenge for anyone willing to relocate. 
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Even though my education and living expenses were paid for, it was money that wasn't
        mine, or my parents'. I had read this play by GB Shaw in high-school,
        about a lowly cockney-London girl being taught the mannerisms and
        dialect of the London-bourgeoisie – I had felt that my life was turning
        out like that – in a very Pygmalion-esque fashion, I knew how to be
        among, and around all kinds of people, but I knew I didn't belong, at
        least not yet. In essence, I was starting from nothing, a true outsider.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Even back in Ludhiana, my birthplace, and the residence of my parents
        since their marriage, I never felt at home. I was never really there. My
        thoughts, my dreams, my hopes, my aspirations, and my desires had always
        been elsewhere. I had never truly accepted Ludhiana as my home, and in
        turn, Ludhiana had never truly accepted me. It made sense then, that
        wherever I went in this city, and whoever I talked to, thought of me as
        an outsider.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To add to the outsider complex, I was also not a social kid when I was
        young – I made one friend in kinder garden and then stuck to that person
        until I left that school. I don’t really remember much from that time,
        other than the fact that I was a socially awkward, wallflower type kid
        who cried a lot because most things were too hurtful. I looked back last
        night, at some of my pictures from that time. They were all taken at
        some competition, or at some social event – looking at them, you surely
        wouldn't be able to verify my description of that time – because who
        takes a picture of their kid when they come home from school, having
        crapped their shorts? It is of empirical importance, that kids have a
        happy childhood, or at the very least, the appearance of it.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I have seen similarly sensitive traits in my sister over the years, so
        from this limited observation, I am concluding that these habits were
        inherited from the{" "}
        <em>familial environment (some of it nature, most of it nurture)</em>.
        This, I remember, because these mannerisms had followed me to my
        boarding school in Mussoorie. I was, at the time, a cranky kid, in a
        boys’ school – imagine how I would be treated.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        My parents and I have taken a lot of decisions together since then, but
        I clearly remember this one as being the first. Not that they didn’t
        adhere to my likings whenever I asked them for something – this
        particular decision was one that would shape the rest of my path. For
        the first time, I was outside Ludhiana on my own. I didn’t know it yet,
        but in St George’s College, I would be known and associated with the{" "}
        <em>space</em> I had never myself associated with, all my life.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I was one of the few Indian Sikh kids, and out of that very small group,
        I was the only turbaned Sikh kid from Punjab in my class. At the time, a
        class was the biggest social group a kid could hope to be a part of. So,
        for the first time – my also mind wandered towards defining myself in
        terms of my religion, the only group that I could be a part of and yet
        stay my unique self. I had for the first time, heard myself being called
        by my full name, with Singh in the middle.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is a particularly enervating emotion when you want to be a part of a
        group, yet stay your distinct self. What is one such group? The answer
        is <em>always religion</em>. Your relationship with the universe makes
        you one out of a million others (read: similar) who relate to this
        energy in the way that you do, but also, because of your personal
        relationship with your subjective reality, you still remain one in a
        million (read: unique).
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        Back to Mussoorie – I was in a different place, a long way from home –
        deeply entrenched in the mountains. We had little contact with the
        outside world, and whatever “outings” we had, lasted mere hours in this
        small hill-station. For the most part, the people you went to class
        with, became your dorm mates, and since we all slept in the same dorm,
        we were at times, closer than family. I say this, because family affects
        you in deep and profound ways, and since I had found myself in a
        different family, my mannerisms would now adapt to be more associated
        with my current peers.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Perhaps I had to work a little harder to adapt with my speech and
        personality, because I was always perceived as visually different from
        what I was <em>supposed</em> to look like – folks in Punjab always
        called me Nepalese, most strangers in New York thought of me as Mexican,
        and to those in my boarding school, I was many things, but the major
        part of my description of them, was Sardar. Really though, whatever they
        perceived me as,{" "}
        <em>
          it was almost never an association of being a different variation of
          their own self, but almost always a familiar variation of the other.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Since these new peers were from all over the country, talking to, and
        interacting with, all of them meant that my accent, and my mannerisms
        could not be placed to a single location. I picked up different things
        from different people – as a result, I learnt to be comfortable with all
        kinds of people. It is really something when you’re a turbaned Indian
        Sikh kid in a Catholic school of British Colonial era. It was the kind
        of multicultural experience that would help me later on in college.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        As we grow up, life teaches us a couple things about interacting with
        other people. First and foremost of them being that there should be a{" "}
        <em>common medium for interaction</em>, the second being{" "}
        <em>something to associate with</em> as a dialogue takes place in this
        common medium of interaction.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “For the congregation of hypocrites shall be desolate, <br />
          and fire shall consume the tabernacles of bribery.”
          <br />
          (Job 15:34)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        When it comes to illicit substances and acts, people don’t even need
        these two things – they just start conversing over the shared moment in
        spacetime where they were{" "}
        <em>both truly equal in their act of acceptance</em> of the world as it
        was handed to them.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        These conversations, on the surface, might appear to be deep,
        insightful, or even heartfelt, but unless these two apparently separate
        beings have interacted with each other in a different setting without
        said substances, don’t expect the conversation to begin a long-lasting
        bond of camaraderie.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “They conceive mischief, and bring forth vanity, and their belly
          prepareth deceit.” <br />
          (Job 15:35)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You would think that the association and medium should be enough to a
        fluid conversation to take place. This is in fact, what conventional
        wisdom dictates; but in doing so, you are discounting the entire{" "}
        <em>human element</em> from this interaction.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Even though human beings require common media to interact over, and
        common associations to interact about, human beings are much more
        complex than that. We, as <em>free-floating beings</em> in this
        universe, have a lot of things going on inside our heads at any given
        time. Most of us are at different points in our Journey when we interact
        at a given time, in a given space.{" "}
        <em>
          Having the same interaction in a different space leads to different
          results, and interacting at different times of our Journeys leads to
          even more different results.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This is mostly what all friends’ night outs are about. We bond over the
        simplest things during the <em>early stages</em> of our own Journeys,
        then we spend time with each other indulging in ungodly acts –
        interacting in ways that could hardly be perceived as meaningful. In
        this shared-nothingness, we often drop cues about where we really are in
        life, and where we really want to be. If those cues are properly picked
        up in the group, it leads to a sense of bonding where the only
        expectation is to <em>not be ignored</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The response given by participating members need not be meaningful,
        heart-felt, or in most cases – <em>relevant</em>. There just needs to be{" "}
        <em>a response</em>. A human, always, has to find all the answers to
        life’s great big questions within the self – because it is only very
        late in life, do most people realise that all this while they have only
        been talking to{" "}
        <em>
          versions of themselves from a different time, living in a different
          space
        </em>
        .
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        There need not always be a proper reply to any personal cue dropped by
        any member – there just needs to be a reply – an{" "}
        <em>acknowledgement</em> that the cue has been heard. I say that the
        reply doesn’t need to be relevant because most of the time, other
        people in the group aren’t in a position to give the correct answer, and
        they might never be in that particular situation to know what needs to
        be known for a person in that position. You could say it is equivalent
        to talking to a wall, but I would vehemently disagree.{" "}
        <strong>
          A wall does not have consciousness, and neither can your voiced
          opinions flow back into your head when you talk to a wall.
        </strong>
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        What I have found is that, when you try to communicate something
        pertinent to your own life, to another human being, they will almost
        always, first think about the ideas and situations that your words do
        not directly address. The thought that they will have in the beginning,
        will be very tangentially related to what you are trying to say, but
        their <em>subconscious</em> will pick up on the very cues that you had
        put in just for the purposes of making a thought coherent for that
        audience.
      </p>
    ),
  },

  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “And beside all this, between us and you there is a great gulf fixed:
          <br />
          so that they which would pass from hence to you cannot; <br />
          neither can they pass to us, that would come from thence.”
          <br />
          (Luke 16:26)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This thing that you just communicated, is, in your opinion, something
        very personal that applies to you and you only. The listening audience
        then, will think about the generalisation of that thought, and how it
        relates to other human clichés in a similar position. Thereon they will
        start to think about how that generalisation fits in with their{" "}
        <em>own perception of the self</em>. If they are really empathetic, only
        then will they be able to make a connection to someone they associate
        with. If at all, some <em>breath</em> is still left in their system to
        ponder and delve deeper, only then, will they be able to make said
        connection back to you, the human person.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If you are trying to communicate something that, in your opinion, would
        apply to a vast generality of beings, they will instantly make the
        connection to the self, and skip the loop entirely to circle back to{" "}
        <em>their</em> projection of <em>your</em> human self.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        I remember the first time we, as a family, went out of the country – to
        our supposed "enemy" country of Pakistan. We went there for a couple
        days to watch a single cricket match that spanned a couple days. I want
        to call it a test-match, but I'm not sure cricket will remain relevant
        for posterity. Maybe it will, so I will not be talking about why an
        actual competitive game is called a "test" match. 
        
        
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        My family (apart from my father) were not particularly interested in cricket, but we went along anyway, because travel was convenient (we literally crossed the
        border on foot), and the tickets for the match didn't cost all that much
        (can't say the same for our accommodation). Really though, we went
        because we weren't aware of the instability that was the norm within the
        country at the time. This was before the internet had saturated our
        lives.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Outside the stadium, where our cab driver dropped us off, there was a
        group of young guys, doing <em>bhangra</em> with the traditional{" "}
        <em>dhol</em>. They were <em>Punjabi</em>, just like us, so this was a
        welcome sight. They called out to my father with the calls of{" "}
        <em>"oho sardarji, aao ji,"</em> signalling to my turbaned father, to
        come and join them in the dance. My father, who appeared to me an
        ignorant simpleton at the time, wilfully complied. After the deed was
        done, and we were making our way to the stadium again, all of us
        realized at nearly the same moment, that they were actually making fun
        of my father, and we told him to not partake in such tomfoolery again –
        to which my father replied that he didn't really have a choice. He
        didn't want to turn the group into an angry mob, so he plastered a
        smile, and indulged them.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        A couple of obvious things stand out to me now, when this incident has
        been brought to my attention at this particular junction in the chapter.
        The first being, that my father was only called at, because of his
        perceived difference. Had he not been wearing a turban, the crowd would
        not have realised that we were different from them, and hence, would not
        have had any reason to bother a family to partake in their diversion.
        The second being, that he was called at, with full knowledge that he was
        essentially the same as them, as our religion was associated with the
        province of Punjab, and hence, the dance of bhangra was native to us.
        The third being, that he was called out with kind salutations of "ji,"
        which is used when you are referring to someone respectfully. Fourth,
        the use of the term "sardar," which, initially adopted for its revered
        stature, was now often used in a derogatory context, alluding to the
        supposed stereotype of a stupid-sardar, who couldn't understand the
        nuances of a situation, and was often looked at as a simpleton.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is weird, that this idea of the simpleton sardar originated towards
        the end of Mughal India, almost definitely during the period of
        annexation of Delhi which was spearheaded by the Iranian Muslim ruler,
        Nader Shah. The story goes, that around the year 1739 CE, the Shah's men
        were not only looting treasures during their conquests, but also taking
        Hindu women hostage. Sardar Jassa Singh, commander of the Sikh army at
        that time, decided to attack Nader Shah’s troops at midnight. It began a
        series of extractions, where the Sikh army would attack Muslim raiders
        at midnight, and bring back the women to their homes. That whole series
        of occurrences began a smear campaign, probably starting off as a
        deprecating joke arising out of insecurity and contempt, about sardars
        going mad at midnight. To this day, turbaned sikhs, all over the world
        have to be the butt of those jokes about being stupid, especially more
        so, when the clock is about to strike 12.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I mention this, not to gain sympathy, certainly not to reignite
        religious tensions – 11 year old me was mightily affected by the riots
        that broke out in the city on the day we were scheduled to leave
        Pakistan, than by this minor brush with discrimination. Markets were
        closed, not a single uninvolved bystander was to be seen, every turn we
        took just led to a wall of lynching crowd – cracking windows, and
        burning tyres. My father had to remove his turban, and my sisters were
        hidden from outside view. Who knows what their issue was at the time,
        but years later when I recounted this issue to a Pakistani friend of
        mine, he scoffed "unka roz ka hai, aap hamare ghar aaye, khatirdaari
        karenge" –{" "}
        <em>
          this is usual for them, you should come to our house sometime, you'll
          be well taken care of.
        </em>{" "}
        I'm assuming he meant people of Lahore in general, but he could very
        well be talking about a particular faction. I can't remember, we were
        sufficiently baked. The trip to Pakistan too, would've been erased from
        memory, had it not been for these two occurrences. We had a pre-planned
        vacation to Malaysia and Singapore just a day later, so that overwrote a
        bunch of trauma. To be quite honest, our family was doing very well in
        life, all things considered.{" "}
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I really don't care for sympathy by mentioning this interaction with the
        dancing group of ignorant simpletons, which is probably the reason why I
        mentioned that we were well-off. Perhaps I wanted to incite a certain
        amount of dissonance in you? Maybe. Really though, I wanted to point out
        the intricate irrationality that is reflected in each of our ignorant
        actions, especially more so in the case of discrimination, positive or
        negative. Think about all the different ways in which we have to alter
        the flow of our regular routines to accommodate others who aren't aware
        of the implications of their own actions. I'm absolutely sure, that
        there isn't a single person on this planet, who has not faced
        discrimination – it is the baggage that we inherited, but were not born
        with. Isn't it time to let that go? We are all the same here. Why don't
        we treat each other well? What's the point of enemity when all known
        territory has been conquered, and is under some administration? Why is
        it still about us and them, and not just us?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Despite everything that could be going on in a different setting, this
        particular group had no such predispositions to speak of, at least
        superficially. I don't particularly remember the specifics of that night
        (as I do not remember most of my college details), but I do remember the
        feeling I had when I got back home – sheer <em>emptiness.</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I had spent so much time in this place, hung out with so many different
        kinds of people, given so much of my time, effort, energy, and
        commitment to these people – but to what end?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The conversations we had that night, barely scratched the surface of
        what it was that I had to offer. All of us were so busy telling our own
        stories, that we never heard what the other person was really saying. We
        understood their situation instantly, given the amount of information
        that we absorb on a daily basis, so we "knew of" that situation – but
        because we were all so young, we did not know how to deal with those
        situations, not adequately.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The part about substituting virtual storylines for actual human
        experiences from my article was all too real in that moment. I just
        could not stop my mind from wandering back to this piece that I had
        written. It was as if, everything I had written in that article, related
        personally to my own life, and for good reason – I was critiquing my own{" "}
        <em>self</em> in the article, for having wasted so much of my time in
        this once-in-a-lifetime opportunity of being allowed to study at the
        cultural epicenter of the world, by staying indoors, and pondering over
        vagaries, while my actual life had slipped by me in an excruciating
        instant.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Humans are weak. We try something that gives us relief from the
        mundaneness of our regular lives – something that gives us a break from
        our current sense-perception and transfers us into an alternate version
        of what could be. In this version, not everything changes – depending on
        the potency of the drug, much stays the same; but in a very subjective
        sense – things appear better. Our lives appear better. The sensory
        overload that we all experience, especially in the modern century,
        lightens.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        There is a release from pain that is almost always hindering us from
        being our <em>true selves</em>. That does not mean that we should all
        partake in drugs all the time – I can see why that would appear as the
        only way to express your true self.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “It shall be accomplished before his time, <br />
          and his branch shall not be green.” <br />
          (Job 15:32)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        All that you consume, all that you take in, all that goes inside your
        body – is a sort of a drug. The air that you breathe, the light that you
        absorb, the food you intake, the flowers you smell – in their true
        essence, they’re all drugs. Doing drugs is not a problem. Taking drugs
        is not a problem. Sure. You cannot survive normally without oxygen, or
        water. That’s alright. Nature has meant for it to be that way. Tobacco
        is natural, so is marijuana, as are the grapes used to ferment wine. The
        printing press was invented because of a wine enthusiast monk. Most of
        the great works of human art were done under the influence of some sort
        of drug. Music is a drug. Fruits are drugs. Bread is a drug. When your
        body starts to feel like something is lacking in <em>life</em> without
        them, that’s the problem. Most of my adult life, has been based around
        drugs. The first part around their over consumption, and the next around
        their over aversion. Neither works. Sometimes you want drugs, sometimes
        you need them. Sex is a drug. Pleasure itself is a drug. In their true
        form, they are all just molecular interactions with internal bodily
        chemistry that gives you a sensation of being <em>more </em>alive. I say
        more, because the humdrum life in most moments doesn’t feel like being
        alive. Adrenalin is a drug. Productivity is a rush. Escapism is a rush.
        Every upper is a rush that excites, and every downer is a rush that
        mellows, all very potent in their own right. At the time of writing this
        text, I don’t think I could ever be fit enough to judge another human
        being for partaking in the use of drugs, whatever their kind may be
        (drugs, I mean).
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In that moment, I was home, and out of habit, I started rolling a joint.
        I was tired to the bone, but I did not want to go to sleep like this, at
        least not depressed again. I was doing so well after my parents had left
        after graduation, that I just did not want to start the vicious cycle
        yet again.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I just did not have enough courage in me to face another day with this
        dread, this loneliness, this emptiness, this feeling that if I were to
        end my life tonight, people wouldn't find out for weeks. I was once
        again, out of touch with my family, and the friends that I had, were
        busy enough to stay unaware, and given my usual unexplained absences
        from social events, nobody would realise that something had gone awry.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It was in that moment, that I realised, that if I were to die, nobody
        would've known the true Me – nobody would tell them of the things that I
        had discovered, or rather, re-discovered in the modern context. I did
        not have a conscious constant. I just had my puny self, and some drugs.
        Granted that what I had discovered was not much, and all the more
        dubious, since I had not witnessed it in a lucid state, but it was
        something – it was the starting point, the universe had given me a new
        path.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Sitting on my couch, in the dark, listening to sad, hindi music in my
        ears, and smoking a joint, I leaned back – and as I did, my wrists
        guided my hands, outside of my conscious control, back towards the wall,
        with the palms facing forward – in the hand wave that you have seen
        literally EVERY SINGLE HOLY PERSON BEING DEPICTED THROUGHOUT ALL OF
        HUMAN HISTORY. AND THEN A VOICE:
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <strong>
          <em>"It's Me. Your intuition is correct. I'm here."</em>
        </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The music switched, and a previously unheard rendition of the song
        "Channa Mereya" started to play seamlessly. My feet were guided onto the
        empty space in the kitchen area of my apartment, and my feet and hands
        started a well coordinated Sufi Whirling movement that went along with
        the song. The music got more crisp, the tempo of the beats lowered, and
        the vibrations of the instruments was felt to the deepest roots of my
        sensory organs. I was spinning around, in an unusually choreographed
        manner (I am a characteristically bad dancer), and although my eyes were
        looking at everything around me, my head was not spinning – that
        although my feet were moving, and my body was turning, the surrounding
        world seemed uncannily stable – as if the whole world was spinning with
        me, and us, as a result, were at rest, with respect to each other. I
        spun around for the entire duration of the song, and for the first time,
        understood what this song meant, and whom was it addressed to, and who
        were the subject and predicate of each couplet.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <ReactPlayer
        url="https://www.youtube.com/watch?v=IF6ZN0Wa3tM"
        width="100%"
      />
    ),
  },
  {
    classes: "demarcator",
    html: <hr />,
  },
  {
    classes: "chapter-title",
    html: (
      <p>
        3 <br />
        Calling
      </p>
    ),
  },
  {
    classes: "verse title-quote",
    html: (
      <p>
        <em>
          “Blessed is that servant, whom his lord when he cometh shall find so
          doing.” <br />
          (Matthew 24:46)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The basis for observing the world <em>must</em> come to be shaped by the
        understanding that things need to be proven absolutely to be considered
        certainly true, but also that they need to be disproven absolutely to be
        considered certainly false.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        All things between, and indeed, such would be the vast majority of
        things, must be considered in the context of probability – based on the
        evidence we have seen surrounding them, and also be malleable in the
        presentation of new evidence, until the truth or falsehood of a thing
        becomes irrefutable (which may be very rare).
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:0zswVEAFordAn8lbrgWsb6" // Henry Jamison, Real Peach
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What in fuck's name was that voice? What was that dance I just did? I
        wasn't even on a psychedelic this time! Could any psychotropic drug do
        this? Why hadn't it happened before? Did my brain somehow unlock a new
        capability? Or had I fried my brain beyond repair as a result of all the
        concoctions that I had partaken in? How did my hand just move and start
        waving? Why was this specific wave so important?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Questions like this were just buzzing through my brain, and then I
        remembered this scene from <em>Jodha Akbar,</em> where the actor playing
        the part of the Mughal emperor, Akbar, gets up in the middle of the
        qawalli <em>Khwaja Mere Khwaja,</em> and joins the Sufi mystics in their
        trance in perfect synchrony.
      </p>
    ),
  },
  {
    classes: "verse",
    html: <ReactPlayer url="https://youtu.be/3dG2FK3_NfQ?t=319" width="100%" />,
  },
  {
    classes: "verse",
    html: (
      <p>
        Did I just do that? There was no bright light emanating form the sky, so
        it didn't look as advertised. My hands didn't have the same exact
        movements, so it definitely was similar, but not the same. Then I
        realised that the people depicting the dance were also not depicting
        this from first-hand experience. Maybe the proper movements got lost
        across the expanse of time?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Was I being facetious about this whole thing? Should I have been more
        serious? Should I have been scared? What did I have to fear? I had just
        heard a nonverbal voice, and I did not know how that was possible. It
        wasn't my internal anxious ranting for sure. This was much more serene.
        It was non-verbal, so there was definitely no sound. I was confused; but
        also, ecstatic? Despite all the dissonating questions, I was just –
        calm, as if this was the most natural thing to have done. Of course, my
        mind was still wandering, trying to find a light switch in the dark –
        but also, it felt like wandering around in the dark in my own home – a
        feeling of knowing exactly where everything was. I hadn't any memories
        of having felt this way, in all of my life. I wanted more.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        The voice said again, <em>"tu mera hi bacha hai, zaroor milega."</em>
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: <p>This time, I replied back, with a "ya, sure."</p>,
  },
  {
    classes: "verse",
    html: (
      <p>
        There was no follow-up, so I went back to my joint, and lit it up again.{" "}
        <em>
          "Life would be so much better if all I had to do to get through tough
          moments was dance to a song by myself, and know that if all else
          failed, I would still have me, and I'd be okay"
        </em>{" "}
        – I said to myself.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Around 10 days passed, before I had enough time on my hands to ponder
        deeply over what I had performed. Rather, what I was made to perform,
        because I surely hadn't done this of my own accord. No amount of drugs
        just makes a person do things that they don't already know how to do.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        My masi was in town that weekend, with my cousin sisters, hoping to do
        some back-to-school shopping, and finalise some logistics before she
        could properly drop off her elder daughter to her boarding school in
        Ohio. It was a tiring trip for all of us, more so for me I think,
        because I really did not want to be around family at that point. I was
        just not in the right headspace. Given all that was happening, how could
        I have been?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Towards the end of the day, she asked me for my genuine opinion on
        choosing America as a future prospect country for my sister. I told her
        outright that it was a bad decison. I had been planning on leaving the
        country, so I couldn't, in good conscience, advise anyone to stay.
        Certainly not my sister. This was a bad place to be for at least the
        next couple years. Of course, I myself was still on the fence about
        leaving, and would've probably stayed, had things gone according to this
        sparsely hatched out plan of mine.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        As I was walking back home, this existential dread started to hover over
        me again. This time, my vision too, started to get blurry and gray, as
        if a literal cloud was afloat on the top periphery of my vision. I
        looked at the Empire State building, and the sky over it was much
        clearer than the last time I saw it. I snapped a picture, and kept
        moving.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        By the time I got home, this hovering dread transformed into a full
        blown breakdown. What the hell was I doing? I should've just dropped
        everything and gone back home the next morning with masi. I didn't want
        to be here. This place was pretty, and glamourous – but I hated it here.
        I just hated it to the core. I hated myself when I was here, and I hated
        who I was going to become if I stayed here any longer. I was not
        getting along with the people, and they sure as hell weren't bothered
        enough to want to keep me around. I had lost all that made me special,
        and in this drive to "fit-in" with the rest of the crowd, I had gotten
        lost in the crowd.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In grade 7, us boys had to run a marathon, an event that took place
        every year, for all the kids in the school. The terrain, and the
        distance were decided by our respective classes. I had lost my balance
        in the very beginning, fallen flat on my face, and skid downhill in the
        hilly terrains of Mussoorie. I wasn't able to even take part in the rest
        of the event because I had gotten hurt so badly. Considering the fact
        that I wasn't an athletic kid to begin with, my morale was too badly
        wounded that the physical pain of it was merely a welcome excuse at that
        point. This was like that, even more hard hitting since this one time in
        college I was so drunk that I just fell face first, and broke two teeth
        in the center of my face. I was so drunk that I couldn't use my hands to
        break my fall. I had taken the Irish-exit out of this houseparty that I
        wasn't enjoying at all, somehow ended up in an under-construction
        apartment complex, come out a window onto the scaffolding, recorded an
        embarrassing video, gone back into a different apartment, and been
        kicked out by an unsuspecting old woman. That night was like a weird
        dream, that leaves you scatter-brained for days, and I had literal
        proofs of its occurence. I had had way too many nights like that, and so
        I wasn't just a metaphor of a disaster, my life was a literal example.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <FacebookProvider appId="295988795097494">
        <EmbeddedPost
          href="https://www.facebook.com/photo/?fbid=10206445255591203&set=a.1587161079949"
          width="100%"
        />
      </FacebookProvider>
    ),
  },
  {
    classes: "verse quote",
    html: <p>I wanted an out; and I wanted it ASAP. </p>,
  },
  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:7z72BGlsE21horfWo8hG4d" // Wingtip, Rewind (feat. Sophie Strauss)
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Where could I go? What could I do? What would I say? How would I start?
        From when would I even begin? If I could have gone back in that moment,
        I would've gone back long ago. My life was a broken mess, and I just did
        not trust anybody else enough, and revere anybody else enough, to take
        the time to pick up the pieces, and present to me a coherent version
        of my self.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Nobody else could truly value myself, the way I could; but I had lost
        the ability to value myself altogether. I just couldn't go on. All the
        vagaries about life that I had pondered over, all the kinds of people
        and situations that I had observed, had just left such a huge void in
        me, that I didn't know where Anhad existed anymore. I was just –{" "}
        <strong>
          <em>lost.</em>
        </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Depression can be equated with the loss of a loved one, or a super
        emotional break-up – but if the only person you've lost is yourself,
        where do you go from there? Who do you take along? On whose shoulder do
        you cry out loud? Whom do you seek for guidance? Who can help you pick
        up those pieces that you have scattered all over, not knowing which
        piece was important in the first place?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:6wsMVa2M6Ktea2UbnVoMvO" // Shafqat Amanat Ali, Kyun Main Jaagoon'
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Out of an unbreakable routine, I lit up another joint. What else could I
        have done in the moment? I had closed every avenue available to me as a
        result of my own actions – who else did I have to share the blame, but
        my own self?
      </p>
    ),
  },
  {
    classes: "verse image",
    html: <img src={ritual} />,
  },
  {
    classes: "verse",
    html: (
      <p>
        The icing on the cake in all this ruckus, were these tabs of acid that I
        had managed to procure over the past couple days. In my mind, the world
        was fucked, and I was too. There was no hope, but the only surity was
        that there would be a tomorrow, where I would find something else to put
        my mind towards. Tonight, I would at least get to see some cool
        patterns, maybe hear the music a little better, and perhaps dance a
        little. If I only had me, then this was the one thing that I knew how to
        do best.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: <p>Pop; and wait.</p>,
  },
  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:1uahtMMjNzfo4854aTvbXE" // pronoun, a million other things
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Around the time I wrote that article, I had started this new practice of
        adding all the songs that I was vibing with, to a specific playlist, and
        named it with the first word or phrase that came to mind. Even if I
        hadn't paid attention to the specific lyrics of the songs involved, I'd
        add them anyway, and pay attention later. On the weekend that I wrote
        that article, I started making this playlist called, "Calling."
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I probably called it that, because at the time, my mother was calling me
        repeatedly, and I, being in no state to answer properly, rarely picked
        up. So I gave it that name, and moved onto adding all the songs that I
        thought were cool, and perhaps they reflected my mood at the time,
        perhaps not – I wasn't consciously aware.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So I had popped two tabs of acid, and intuitively, asked <em>Alexa</em>{" "}
        to play this playlist. The AI complied, and couple moments later, I was
        hands-free – ready to be truly comfortable despite the shambles that my
        actual reality was hanging in. At least the music would be good, I
        thought. That this curation of mine, to which I hadn't given any real
        thought, would come to define the rest of my life – I had absolutely no
        clue.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The last time I was near to that state, which I was currently in, I had
        experienced something larger than life. Something only talked about in
        abstractions and revered, but never really understood. I had possibly
        unlocked a new layer of perceptual reality, and at the back of my head,
        I was willing to learn more. What did I have to lose anyway? I was
        already depressed to the bone, and ruined any hopes of a future that I
        had thought of myself as being on the path for.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Last time, it was a hand wave, stronger in my left hand than the right –
        a mirror image of all the holy people ever, as if a monkey had reflected
        the master. It was weird to stay the least, but when had I ever done
        something that was truly conventional?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        As the psychedelic started to kick in, and the music seemed to be
        getting more involved, my body started to adapt to the vibrations, and
        moved along with it, as a surfer riding a wave. These vibrations, almost
        started to slip away through my body, and in the moment, the only way I
        could keep riding was if I played chords of sorts on a stringed
        instrument. It was equivalent to playing air-guitar, but instead of my
        palm being rolled inwards, and towards my own self, in the moment, it
        felt more intuitive to focus the face of my palm on the hardwood floor
        below.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Slowly but surely, some patterns started to emerge from within the
        organic texture of the wooden floor, as I had seen them before in this
        state. This was familiar, but not the same – the wired patterns started
        to have a sort of glimmer, almost golden in appearance. I vividly
        remember my hearing being focused on the specific lyrics of the song
        that was playing at the time – <em>Doin' it Right,</em> by Daft Punk.
        This wasn't a usual artist for me, and this surely wasn't the kind of
        song I'd hear on my long commutes, but I had vibed a little with this
        song, so it was in the playlist. The repetitive lyrics in the beginning
        of the song got me focused on that specific spot on the floor, and I
        started to feel the vibrations get a little stronger, my fingers started
        to strum a little harder, and faster.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:36c4JohayB9qd64eidQMBi" // Daft Punk, Doin' It Right
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        "If you do it right
        <br />
        Let it go all night
        <br />
        Shadows on you break
        <br />
        Out into the light
        <br />
        <br />
        If you lose your way tonight
        <br />
        That's how you know the magic's right"
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The golden two-dimentional wired pattern, slowly began to transform
        itself into a three-dimentional grid-like structure, and began to rise
        up from the ground. I began to feel ecstatic, amazed, and found myself
        smiling harder than I had done in the longest time. My heart began to
        race, and the cloud of dread began to fade away. I kept moving my hand
        in the repetitive motion to see where this was going to lead. A
        beautiful golden circle formed on the floor, composed in a paisley
        pattern, with a roman touch formed on the circle, at whose center, I was
        seated – naked, and now afraid. A blinding flash of white light emanated
        from the roof of my periphery, and engulfed the dark ambient lighting of
        my tiny apartment. The whole world seemed to spin, with each object
        haphazardly changing its position from where it was supposed to be. I
        began to frantically run around, afraid for my life. The
        police/ambulance sirens that were a norm in New York at the time,
        certainly didn't help my case.{" "}
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I began to look for a pair of trousers that fit properly, and barely
        managed to put them on. I had fucked around too much too soon with
        reality, and God had come to punish me, I thought. Then I thought that
        it was probably God that had consoled me only days earlier, so I
        couldn't possibly me chastised for doing what I always did. This was the
        world's fault, and my prayers had been heard, I thought. The world was
        fucked, and God was now here to set things in order.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The non-verbal voice said,{" "}
        <strong>
          <em>"leave now"</em>
        </strong>{" "}
        and I took that literally. I grabbed my speaker that was still buzzing,
        and leaped towards my bedroom window, my apartment being on the second
        floor of the building, hoping to proclaim as an announcer on the empty
        streets that things would now be okay – and jumped off. This was my
        Eureka moment. Catastrophically dumb.
      </p>
    ),
  },

  {
    classes: "demarcator",
    html: <hr />,
  },


  {
    classes: "verse",
    html: (
      <p>
        For over three years since that fated night, I have wondered about how to express the feelings, emotions, and sensations that I felt that night. I have wondered about how I could possibly describe the weeks that followed that night, and continued until the moment I left America. 
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        To say that I have been at a loss for words, would be the understatement of the Millennium, and it has only just begun. In fact, every time I have made such lofty statements since that night, it has always gotten me into trouble. 
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        I have wanted to cut short the parts of my Journey since that night, and compress them to only the parts that I think are valueable, but what do I know about value anyway? I, as the person I was until that moment before the jump, had ceased to exist the moment I took the leap. 
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        Perhaps I never jumped, and my senses deceived me. Perhaps I did jump, and really died. Perhaps I did jump, but didn't die at all. My senses blacked out for what seemed like eternity. My mind ceased to wander. My thoughts came to a halt. There was nothing, nothing at all.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        This would've been fine in some other situation – I had blacked out before, lost moments in spacetime that, for the life of me, cannot be recalled. This wasn't that. I hadn't wandered off in a drunken daze from a party I was not enjoying. It was eternal damnation I had feared, for what seemed, only moments ago. 
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        When I came back to my senses, I wasn't in my usual post-blackout location – which was usually lying down sideways with my clothes in a mess, shoes still on my feet, and a bucket next to my face, you know, in case I felt the urge to vomit. Not even in my worst moments had I actually considered death as a way out, no matter how much time I spent thinking about it. To be honest, I had gotten quite good at getting "fucked up."
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        On that night, however, the situation was a little different. I had leapt out the window, and lost all sense of time. When I regained consciousness, I found myself hanging over the windowsill, with one hand supporting my body weight, and the other still holding onto that damn speaker that was playing a wierd tune, with an unreasonably slow tempo. 
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        I do not know how my skinny arms supported my entire body, given that I had never been one for upper body strength. Perhaps adrenaline does do wonders in times like these. I climbed up, and jumped back onto my bed, hoping to pass out, and write off the night as a really bad trip. 
      </p>
    ),
  },

  {
    classes: "verse block-quote",
    html: (
      <p>
        Fucking hell, the night had only just begun. 
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        Over the years, I have pondered over the how, what, and why of that
        night. I have called it by various different names, and I have felt a
        plethora of emotions every single time I have tried to recount the
        events of that night, and now, for the first time, in so many years, I
        have the mental clarity, and the physical reassurance, from Him, on what
        I have, almost always, in some shape, way or form, called, My Judgement
        Day.
      </p>
    ),
  },

  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “The lord of that servant shall come in a day <br />
          when he looketh not for him, <br />
          and in an hour that he is not aware of, <br />
          And shall cut him asunder, <br />
          and appoint him his portion with the hypocrites:
          <br />
          <br />
          there shall be weeping and gnashing of teeth.” <br />
          (Matthew 24:50-51)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        We usually don’t like being judged by random strangers, who know nothing
        about our person. We hate it when the ones who we think know us, judge
        us – it almost always seems like a betrayal. Imagine how it feels when
        an entity who knows you, and literally everybody else, and keeps track
        of all that you do, and literally what everyone else does, and is truly
        objective on all matters, literally all of them –
        <strong>
          <em> judges you.</em>
        </strong>{" "}
        To call that night, the night of June 11-12, 2017 CE, a living nightmare, would be the understatement of the millennium, as I have already said.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>I was truly judged, and by none other than the Almighty Himself. He told me who I was, and what my purpose was to be in this life. I hardly believed it at the time, but my fate was sealed, and I wasn't happy. <em>My ill-understandings of free well and destiny at the time notwithstanding</em>, I did not like what God told me about myself. I was relieved, when He told me the reasons for my sufferings in this life, but then I cried some more. In fact, I cried out so loud that I was honestly surprised that the neighbours didn't come knocking to check up on  me. They never had. This was Manhattan, and neighbours avoided you like the plague. </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        Traditionally, in a book such as this, the very first page of the very
        first chapter is dedicated to a prayer recitation, or an introduction of
        sorts that underlines the book’s legitimacy to the people that it is
        meant to address. There’s a description of God’s qualities that a human
        should imbibe, there’s a mention of the cosmic lineage of the mouthpiece
        responsible for the story behind the book, or there’s a list of
        incantations to be said before beginning anything to demonstrate the
        orator’s respect for the Almighty.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        However, history is proof that this approach does not work. Even still,
        this is not the first verse in Scova. This surely isn’t the first page.
        So then, why am I rallying against something I myself have just done? Am
        I hypocritical, or did I just want to waste a couple hundred verses just
        talking about my especially loathsome self?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The answer is neither. The previous books that were written, didn’t just
        contain banal salutations, and pointless incantations – certainly not in
        the very beginning. The authors of the book made God easily accessible
        by providing you with the most important information in the very
        beginning. Practicing religious friends of mine have even scoffed at me
        for even thinking of reading a scripture, any scripture, in its
        entirety. What a weird thing to discourage! Why wouldn’t you want to
        read the complete theory of everything? Why wouldn't you want{" "}
        <strong>God's Word</strong> to tell you the reason for your existence?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        One answer, and one alone – it’s boring; and with good reason too – half
        the stuff in the book is not meant for a regular person to comprehend.
        What could a person in the 2nd century CE have done after reading a
        prophecy for the 21st century? What use did a slave have for laws that
        governed the master? What was the point of mentioning the bloodline of
        Abraham, or Noah, or any of the other characters, repeatedly?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It didn’t matter then, if you started the book with <em>Om</em>,{" "}
        <em>Ik Onkar</em>, <em>Bismillahirrahmanirrahim</em> or{" "}
        <em>Our Father</em> – they have all been lead to the same demise –{" "}
        <em>
          mechanical performance of outdated rituals in times of
          socio-politico-cultural decadence which is almost always coupled with
          an impending economic downfall.
        </em>
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        For this reason, I'll try a different approach this time. I'll start
        with the provocative question, that I was asked, by God, when He
        kickstarted my <em>Freedom Bootcamp –</em> a crash course in the nature
        of reality that began roughly around the Independence Day of my
        then-home-country-to-be, America, which was on the 4th of July, 2017,
        and ended roughly around the Independence Day of my country-of-birth,
        India, which was August 15th, 2017. I was taught a great number of
        things during that time, and was <em>made to unlock</em> a lot of aspects about
        my own, and everybody else's, subjective reality. Scova is an attempt to
        codify it into a replicable experience, so that my life's Calling might
        be fulfilled –{" "}
        <strong>
          <em>Collective Nirvana.</em>
        </strong>
      </p>
    ),
  },

  {
    classes: "demarcator",
    html: <hr />,
  },
  {
    classes: "chapter-title",
    html: (
      <p>
        4 <br />
        Dwitiya
      </p>
    ),
  },


  {
    classes: "verse",
    html: (
      <p>
        Given all that background story, I believe <em>now</em> is the natural
        starting point to begin talking about the component that was the
        catalyst, for events leading upto, and after this jump –{" "}
        <strong>a ritual.</strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To truly appreciate the purpose, the value, the <em>ahmeeyat</em> of
        this ritual to the self, personally, you have to see it not as an act that is
        an end unto itself – you have to inquire about the thought behind the
        setting of this ritual, the expected and actual outcome of this ritual,
        the personal want for this ritual, and most importantly, the
        psycho-social precursors that led to the development of this ritual in
        the way that it did.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Imagine Gautam, back in <em>His</em> day, under a tree, in a serene
        setting – meditating. The sight of <em>Him</em> meditating, is as
        fascinating as it is picturesque, but, remember this – <em>He</em>{" "}
        didn’t get the <em>right</em> to sit idly by in specific positions on
        the <em>first day</em> of <em>his</em> journey, <em>he</em> had to{" "}
        <em>earn</em> it.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What you see in the paintings and sculptures of <em>Him,</em> is the{" "}
        <strong>end result </strong>of his spiritual journey, and not the
        beginning. To sit at the top and do nothing, you have to have climbed
        the tree first (metaphor). Rome was not built in a day, and neither is a
        Nobel prize earned overnight – so why should you get to sit idly by and
        chant “<em>Om</em>” repeatedly and wash away all your frailties and
        insecurities?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If anybody “guides” you towards meditation on day one of your spiritual
        expedition, run in the opposite direction (not literally, idiot) as
        there is a lot of metaphorical and physical ground that needs to be
        covered before you are allotted the right,{" "}
        <strong>
          <em>the permission, to sit</em>
        </strong>{" "}
        idly by with the feeling of having truly earned it.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Our actions as sentient beings, have to have meaning, and this{" "}
        <em>meaning is predicated by our life’s Journey</em> – the where, why
        and how of it – most importantly, the WHEN of it. Yes, the space, the
        characters, the mental balance – it is all important; but the most
        important of all these not entirely predictable factors is{" "}
        <em>the time</em> at which a particular event occurs in relation to your
        own personal internal narrative, and how it corresponds to the events of
        the bubble in which you are the lead character.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I may have possibly boosted the trumped up ego of pseudo-scientists
        claiming to be astrologers by saying this line – but that’s a risk we’re
        going to have to take if we want actual progress in this ancient meta
        science – to the point where the information received from it benefits
        the receiver as well, and not just serves as a life long stunt for a
        conman.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So even though I may have just given a pat on the back to the field of
        astrology – that should not take away from the fact that I have also
        used the phrase, <strong>“own personal internal narrative.”</strong>{" "}
        What I meant to imply was that just because <em>I</em> happened to
        mention that a certain room in a certain building on a certain street in
        a certain city happened to trigger my cleansing –{" "}
        <em>it means nothing to you</em>. Just because a certain someone happens
        to mention that a said time of the year is auspicious for a person born
        in the same timeframe as yourself – and that the performance of a
        certain set of rites and rituals during said timeframe by you, would be
        able to absolve you of a certain negative energy from your life –{" "}
        <em>
          it means nothing to you without that event clearly, and coherently
          being a part of your own internal narrative
        </em>
        . You simply cannot replicate such a cleansing, that blip in spacetime
        without <em>it</em> holding a coherent, and serendipitously originated
        significance in your <em>own personal journey.</em>
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        The Science of Existence is objective in the sense that it holds
        empirically true for each being, in that, it requires the{" "}
        <em>same subjective</em> understanding and action from each one of us.
        You can probably conduct a double blind, controlled study with a random
        sample from the populace for this. You may ask independent jurors to
        rate the subjects' propensity towards Nirvana (if you manage to game the
        system somehow – I don't see how you could, but feel free to try!)
        before and after the introduction of the thing that nudges them towards
        it. You can also, maybe, verify in a different experiment that they all
        have the potential to achieve the same level of{" "}
        <em>perceptual transcendence</em>, but you can’t guarantee they will all
        reach the same end state at the same time, in the same place.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The idea of <em>similar subjectivity</em>, in and of itself, goes
        against the societal model that we have thus built over the past few
        centuries ever since the industrial revolution began – of{" "}
        <em>replication at scale</em>. One small factor that other humans often
        forget to account for when they start to replicate a ritual (read:
        actions based on ideology) en masse across the social strata without any
        regard for the individuals’ internal state of mind or physical
        capabilities, or general level of understanding – is that humans are{" "}
        <em>not just </em>molecular objects interacting with other molecular
        objects. In a very Gestaltian fashion, it seems almost absurd to even
        have to mention it,{" "}
        <em>the whole is greater than the sum of its parts</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Humans, being the <em>complex adaptive systems</em> that we are, are as
        such composed of “myriad individual constituents or agents that once
        aggregated, take on collective characteristics that are usually not
        manifested in, nor could easily be predicted from, the properties of the
        individual components themselves.” Geoffrey West, in his book “
        <em>Scale</em>”, calls this <em>emergent behaviour</em>, inasmuch that
        the prediction of such characteristics cannot be understood by simply
        studying the individual parts, and that you have to look at the whole to
        get a clearer picture.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The <em>whole</em> that I am referring to, is superficially different
        from what the author further goes on to explore in his book, but indeed,
        actually does validate his understanding of abstract emergent patterns
        in all aspects of life. The whole that I will have been talking about at length
        is the complete composition of the <em>sentient</em>{" "}
        complex adaptive system as allowed to be perceived to the limits of our
        perception, and in elevated states of consciousness.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        You might be sitting there wondering, that I had, just moments ago,
        jumped from a possibly lethal height. Where did I go? What happened to
        me after the jump? Why the hell would my mind wander towards jumping out
        the window, when I simply could've gone live on any of the social
        platforms and proclaim the same thing? Arguably, it would've reached the
        same number of people, in a much non-lethal fashion. Also, what is up
        with this God angle? Elevated states of consciousness might have piqued your interest, but all this talk of God sure seems regressive.
      </p>
    ),
  },
  
  {
    classes: "verse block-quote",
    html: (
      <p>Him? Really? Why a "Him" specifically? Also, why "Him" in singular?</p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        Often with works of scripture, painstaking translations need to occur so
        as to preserve the original meaning, and not distort the valuable
        lessons and information, in light of personal biases. Especially in a
        work of scripture, however, this pain is worthless, if the entity
        engaged in said translation did not know the intent of the words in the
        first place. Rearranging the word order of a simple sentence to suit the
        traits of a <em>different language</em> can lend to the sentence meaning
        something entirely different. Exchanging the subject and the predicate
        is not something that can be taken lightly in scriptures.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        God made man in His image.
        <br />
        Wrong translation.
        <br />
        <em>Human is made in God's image.</em>
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        The oppression that this debacle has thereon caused, was probably not
        the original aim of the scribes. I'm quite sure that they had the best
        intentions at heart, but as they say,{" "}
        <em>"all roads to hell are paved with good intentions."</em> I truly
        believe that such was the case over centuries of translations, and
        mistranslations. 
      </p>
    ),
  },
  // {
  //   classes: "verse quote",
  //   html: (
  //     <p>
  //       <FacebookPlayer
  //         appId={"295988795097494"}
  //         videoId={"573899893124700"}
  //         allowfullscreen={true}
  //         autoplay={false}
  //         width="100%"
  //         showText={true}
  //         showCaptions={true}
  //       />
  //     </p>
  //   ),
  // },
  {
    classes: "verse",
    html: (
      <p>
        {" "}
        This goes without saying, but please do not trust blindly any theological
        material that does not directly come from the{" "}
        <em>entity connected to the source</em>. Always be wary of the{" "}
        <em>human errors </em>that might stem from the personal biases of the
        entities making that translation. Be sufficiently watchful of what you
        interpret after reading someone else's commentary of a particular
        scripture of reverence. They might not be aware of the distortions they
        are weaving in the minor creative liberties they are taking.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Even if the languages stem from the same root, there too, sometimes,
        keeping the same word order lends to a different interpretation than the
        one intended. This one will take a longer time to explain explicitly,
        but by the end of Scova, my hope is that you'll start to see things in
        the way that I now see them.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Getting back to the example at hand, the scribe should have written down
        the sentence that I transcribed, and not the one that is widely
        circulated. It is because the face that a human sees when they look at
        their reflection, is actually the image of God,
        <em> refracted through</em> our human eyes when we look in the mirror,{" "}
        <em>as allowed by our perception of the self</em>. A human is literally{" "}
        <em>made</em> in the image of God.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So when you actually do look in the mirror, it is the{" "}
        <em>
          image of God as <strong>seen</strong> by you
        </em>
        . It is also the{" "}
        <em>
          image that God looks at when He <strong>sees</strong> you
        </em>
        . This is not to say that You and Him are one. It definitely does not
        mean that the face of God is the same as your face. God has no face, or
        form. It also does not mean that You and Him are separate. It just means
        that without Him, there is no you – but without you, there will still be
        Him. Your physical body is merely a <em>reflection of the self</em>, and
        the self is intricately connected to the Source.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Sure enough then, God is gender neutral. How can He not be? The tiniest
        of quarks have His presence, as do the most gigantic of heavenly bodies
        –{" "}
        <em>
          and all the animated and inanimate entities in between these
          proportions, also conform to the same principle
        </em>
        . The concept of male and female is not relevant with God – for He is
        the <em>eternal, formless one</em>. To reduce Him to our binary
        worldview would be diminishing His Divinity, and constrain Him to our
        puny status – and what right do we have to say something this
        "blasphemous"?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        With regard to my use of a <em>gender leaning</em> pronoun, had I
        substituted "Him" with "it" – that would be tantamount to belittling Him
        to the stature of a non-sentient being – one with no regard for{" "}
        <em>time</em>, its passage, and its impact on the self. That just
        doesn't sit well with me.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To use the modern, makeshift excuse of a compromise, "they", would be
        instantly regressive, for there is no other God, but Allah – and Allah
        is one. You can call Him by ninety nine different names, or a million –
        each signifying the million (read: not countable) different functions He
        performs and the million different forms (read: literally every form
        there is) He temporally takes (read: in time); but the fact still
        remains – our civilisation up until this point has developed from
        monotheism: not polytheism, surely not pantheism, or any future
        concoctions anybody after my time might come up with – and there's a
        reason why – that God is One – He is Unity – a single system.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is true, that humans may, over time, take up Divine forms, but God
        will still just be the <em>one true constant</em> – the Absolute Truth.
        In the mythical ages gone by, regular people did take up those forms,
        and rule alongside Kings – today we call them <em>demigods</em>. Shiva,
        Vishnu, Brahma, Zeus, and all other mythical avatars that they,{" "}
        <em>and others</em>, subsequently occurred in, were all demigods. Some
        cultures even worship them <em>as God. </em>It is, indeed, possible to
        achieve the divine, but don't make the age old mistake of equating
        yourself, or other anthropomorphic entities, to God – none are, and they
        can never be. God dwells in all creation, so why would He confine the
        entirety of Himself to just a single state? He does not play favourites.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        God doesn't <em>just</em> have a human form – He is <em>the form</em>,
        essentially, all forms there are. Everything you see around you, hear,
        feel and experience, it's all part of <em>the One</em>.{" "}
        <strong>
          Spacetime itself, is just God folding in and out on Himself.
        </strong>{" "}
        The question then becomes – is He alive? Why doesn't He talk back? This
        questions just translates to, why don't rocks talk back when you worship
        them so fervently? Why don't portraits of demigods speak to you when you
        look to them to guide you? Then, if God is present in anything and
        everything, shouldn't everything just have the same stature as God?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        There are reasons why Abrahamic religions, and the Gurbani stricly
        forbid idolatory, and more importantly, Islamic traditions regard the
        presence of mirrors in your space as sacred. Don't talk to a decorated
        sculpture and expect it to talk back. Why don't you talk to the form of
        God that does talk back – another human perhaps, or the Self? Why are
        you so hell bent on talking to inanimate matter as God, and non-sentient
        animated entities as sentient entities? It is ignorant to assume that
        life would be so primitive, especially with regard to communication with
        God – if simple stones and portraits could elude His presence, what
        would be the point of faith, really? 
        </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Instead of trying to make the world in your own image, it is better for you to accept the world as is and try to change the things that you actually can change. Isn't that the
        more practical alternative? Despite the scriptures repeatedly telling
        you to not engage in idolatry, if you still are adamant on choosing the
        easy route, why should God guide you anyway? God speaks to all creation,
        and guides their every move, so there must be a reason why you haven't
        felt it yet. Don't look in the wrong places and expect to find the
        treasure that every other being in existence is seeking as well.
      </p>
    ),
  },


  {
    classes: "verse",
    html: (
      <p>
        This is why, I have not revealed what my own ritual was. This book, no matter how self-centered it may seem superficially, is not about me. Some rogue radicals and ignorant
        mechanical tools may disregard entirely the wisdom that preceded before
        the revelation of the personal tale – and may very well start the
        tradition of replicating my personal ritual even without any prior
        personal connection to said act – they did that with Shiva, and His
        supposed penchant for marijuana. Let those morons be. What can be done?
        Nothing substantial.
        </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Rather, I would ask you to recall what <em>your ritual</em> is – why is
        it a ritual for you? What do you get out of it? Why do you keep doing
        it? Is it a social thing? Why always the same set of entities in the
        performance of this ritual? What is the thing that nudged you towards
        this ritual? What’s the thing that <em>keeps nudging you</em> to perform
        this ritual regularly?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        None of the books of this genre are about the person that lives and breathes the human flesh. We are simply abstractions, that do our part in serving our higher selves, our Lord, if you will. It's that simple – all of religion, is just an attempt by those select few individual selves, who, through indescribable torment, were served with a Divine Ordinance. All of our lives as individuals, and as a collective, are just abstractions of the free floating beings, roaming around in endless loops in the astral realm. This life, as a whole, is about the <strong><em>dance of the self, with the Higher Self, and the Holy Trinity they form together, as a cohesive unit, with God.</em></strong>
        
        
      </p>
    ),
  },
  

  
  {
    classes: "verse",
    html: (
      <p>
        The demigods of the years gone by did not just stand by doing mechanical
        rituals half-heartedly. They were called <em>masters of perception</em>{" "}
        for a very simple reason – <strong>they mastered perception</strong>.
        They deeply enveloped their life into, and according to, the Natural
        Law, and fully stood by it each time they were tested, which, if you are
        even remotely familiar with God, you'll know that with God, everything
        is a test. He loves tests – just not the kind of mechanical,
        rote-learning standardised tests that we are all used to. These tests
        are innately personal, require complete surrender, and childish
        curiosity, <strong>insurmountable questioning</strong>, and most
        important of all – <em>they are empathetic</em>, they understand your
        humanity, and by extension, your fallibility.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>God understands, and He accepts, and helps, provided, you improve.</p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The idea of an anthropomorphic entity as God's proxy does fit well with
        me, and I really do believe it is the next best thing – humans relate
        very well to the idea of another human being, who is able to touch
        divinity; but that, in and of itself, is the blessing and the bane of
        walking this path alongside God – as He connects with each soul
        directly, and not via intermediaries. You can, of course, use those
        intermediaries as and when you please, it is why they exist.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Jesus – the Son, Mohammad – the guide, Gautam – the recluse, Gurbani –
        the teacher, and a plethora of other revered entities throughout the
        world's history, are all <em>layers of abstractions that represent</em>{" "}
        God in a relatable fashion. You can surely put them in between you and
        God, if that is the <em>level of burden</em> that you are comfortable
        with. Then again, do you simply accept yourself as a lesser being? Are
        you not even as capable as pieces of paper stitched together with words
        written in a coherent manner? You surely do not act like it. Had you
        acted in the world according to the stature that you mentally occupy,
        then we would be having a different conversation altogether.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You may have tried to see Jesus as a vessel of the Holy Spirit, or
        Mohammad as a trusted mediator, Gautam as the model teacher, or even
        looked to the Gurbani as the eternal guide – I'm very sure that none of
        those abstractions have sufficed so far – which is why you are here, in
        this spacetime, reading Scova. I have a feeling that{" "}
        <em>
          you do not want to put a layer of abstraction in between You and Him
        </em>
        , and deny yourself the rich, unedited experience that is custom
        tailored to you alone. It occurs with a nonchalance, where things just fall into place at just
        the right time as if the universe itself conspired to make things happen
        just for you. Wouldn't you want to experience this ease firsthand? Why
        then, go by someone else's life experience? Why surrender to man, when
        you could surrender to God? Scova is full of platitudes like this, so
        don't fret – they exist for a reason, and inshallah, by the end of
        Scova, you will be able to grasp why. My sincere hope is that you do.
        
        
        
        
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If the world thus far has told you that you are special, do you want to
        deny yourself the sole thing in the universe that makes you, and{" "}
        <em>you alone</em>, very special? Has this not been you entire life's
        narrative thus far – that you <em>are special</em>? If you{" "}
        <em>attach yourself</em> to Him, He makes{" "}
        <strong>
          <em>your entire world</em>
        </strong>{" "}
        revolve around you – altering the spacetime ever so slightly, and
        nudging the thoughts, and unthought-of actions, of those within your
        confine of influence ever so discreetly that really, all you have to do,
        is just – <em>Be Your True Self</em>, and things just happen to
        facilitate you being your true Self, in the way that you know best, and
        in a way that only you,{" "}
        <em>the specific instance of you in the current spacetime</em> could
        have.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If that is the case, then you are finally reading
        the right book, after all the garbage that you have spent your life
        absorbing, this is IT. This is why I'm here, in my spacetime, in the
        infamous <em>Kalyug –</em> the sad state of affairs on this pale blue
        dot in the magnificent cosmic dance.{" "}
        <strong>
          <em> I'm here for you, and I will make your journey worthwhile.</em>
        </strong>
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        The why of monotheism, from my perspective, is very simple, that{" "}
        <strong>
          <em>all is God</em>
        </strong>
        .
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Quotable quips like this have caused a lot of damage as it is, so I will
        refrain from using them unless I am trying to get across an important
        point – that point <em>always</em> being to provoke less &amp; read
        more, to speak less &amp; listen more, to judge less &amp; understand
        more, to condemn less &amp; question more, to mechanically infer less
        &amp; intuitively comprehend more, to tear down less &amp; build up
        more, and most importantly – to exploit less, and empathise more.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If you liked the three word wisecrack, then surely, you owe it to
        yourself to explore the deeper meaning of what could not have been said
        to instantly gain your attention in the first place. It is really hard
        to properly grab another person's attention, and even harder, to hold
        onto it for a period long enough so that you can get your message
        across, so don't fault someone for evoking simplified aphorisms to get
        it.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Fault them for not going beyond the provocation, and then fault
        yourself, for not delving deeper into the pithy moral conclusion on your
        own time. Don't fault God, fault humans. God created the world, and
        nature – and at times they may be harsh, but they are always just. They
        evolve constantly with each unit interval of time, and are renewed by an
        infinite vibration – but human systems don't work like that. Our
        cultures do sometimes, our customs, our trends, our fads – they all
        recycle, upscale, and evolve. Sometimes our systems fall behind, trying
        to retain their essence in the face of chaotic change. That is good
        sometimes, but when you remain static for a period that is longer than
        necessary, like every static thing in time, you will tend to wither
        away. There's a reason for that.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <em>
          There's also a reason why morals always come at the end of the story,
          never in the beginning.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If things are just given to you as perfect, what would be the point of
        having you? Why would You exist? Why{" "}
        <em>
          <strong>do you</strong>
        </em>{" "}
        exist? If the whole point of creation was to have humans in a perfect
        world, there wouldn't ever be any humans besides Adam and Eve. The point
        I will be trying to make throughout all of the first half of Scova, will
        not be whether or not God exists – I believe He does. There's no way in
        Heaven you can convince me otherwise. I'd be the most stupid being to
        ever exist if after all that I have seen, heard, felt, and truly
        experienced, I went on to deny that God exists. The point is not whether
        or not He exists – the point is,{" "}
        <strong>
          if you <em>allow</em> yourself to believe that He does, what then? How
          does life change when you put God into the picture?
        </strong>
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:0yt31hMKZMiyIEfiBiLD2N" // Imagine Dragons, Whatever It Takes
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        Coming onto the point that previously bothered you, or alleviated your
        doubts (depending on your perspective or prejudice) –{" "}
        <strong>God is also not a Him</strong>. <em>I am being made</em> in the
        image of God, as are you. We all, in any given spacetime, possess varied
        proportions of the male/female predilections, and no single complex is
        exactly the same. If we profess that humans cannot be fully defined by
        simplistic boxes of categorisation, why try that with God?
      </p>
    ),
  },
  {
    classes: "verse quran",
    html: (
      <p>
        أَلَمْ يَكُ نُطْفَةً مِّن مَّنِيٍّ يُمْنَىٰ <br />
        ثُمَّ كَانَ عَلَقَةً فَخَلَقَ فَسَوَّىٰ <br />
        فَجَعَلَ مِنْهُ الزَّوْجَيْنِ الذَّكَرَ وَالْأُنثَىٰ
        <br />
        <em>(Quran 75:37-39)</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        For me, personally, the male facet is largely dominant. I'm born with a
        certain set of biological components whose presence cannot be overcome
        by <em>mental means alone</em>. To not accept that simple fact, is to
        deny my bodily self, it's true potential. In doing so, I hinder my
        mental, true self, from showing it's complete texture, and thus, my
        bodily self from living a full life. Unless you live up to your full
        potential, and accept all that makes you, You – you cannot reside in
        Heaven. This is<em> the one example </em>that I said will take the
        entirety of Scova to comprehend. The scriptures never actually condemn
        that which is not heteronormative – condemn is too strong a word.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        They did, however, fail to appreciate the beauty of it, and because of
        that, they left no room for further exploration of the human condition.
        To be human, is to not blindly follow the path on a straight line –
        although it is the most convenient way. Not fraying from the singular
        defining thread of your narrative just makes it boring – and who wants a
        boring life? The second lesson to learn here is this: if something that
        is said and is then held to be true, that, which was assumed
        complementary to the thing that was said, but left unsaid, must not
        necessarily also be true. I'm sure the specie that learnt how to cause a
        rift in spacetime by splitting an atom can surely be trusted to
        interpret and apply such a simple statement.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:1y3bE5i57eUm3hfLAc7h08" //Imagine Dragons, Walking The Wire
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        In the moments I was lost in the prisons of my own invention, agreeable
        to being submissive, kindred in the face of adversity, and in need of
        solace from the outside world – I saw God as a female entity, and She
        saw me as the same, because that's who I was in the moment, and that's
        how I needed God in that moment. I'm most definitely not talking about
        the physical form of God – none can. I'm talking about the who
        experience of Him, or in this example, Her. God is, and becomes who you
        need in the moment – He is formless, and so, the discussion over His
        gender, or lack thereof, is moot.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:4F4skIPOcmPAEVQauG3GVB" // Imagine Dragons, Yesterday
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        "Our Father in Heaven" is antiquity's version of{" "}
        <em>The Parent in Heaven</em>. People should really have adapted this
        with time. It's a damn shame how much oppression has been carried out in
        His name. It really is shameful that the status of women in our society has
        not been one of veneration, but of disdain. I'm very much inclined to
        ask, "What the hell?", but that would be me looking at the past from the
        widened perspective of the future that has now already occurred.
        Hindsight is always 20/20, so be very cautious in blaming the people of
        the past. They were, after all, not very much smarter than yourself, and
        they never had the privilege of looking at the world from a single
        screen.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        They were doing the best they could, in the way that they had learnt
        from their ancestors, and them from the ones which came before. In this
        spacetime, for the first time in human history, the entire globe can
        live, breathe and interact as a single ecosystem, very much aware of
        each other's faults, as well as accomplishments. It's better if we stop
        pointing fingers, and collectively accept responsibility. No soul on the
        planet in this spacetime is new, in the sense that we have all spent our
        fair share of time living and interacting on this planet. God only knows
        what our deeds were in past lives that we are all in such a deeply
        connected, collective hell. Even though, this is literally almost three
        millennia old knowledge, still, I will clarify for those yet
        unacquainted – this was one of the very first commandments –
        <br/>
        <br/>
        <em>
          "Honour thy father and thy mother: that thy days may be long upon the
          land which the Lord thy God giveth thee." (Exodus 20:12)
        </em>
        <br/>
        <br/>
        It clearly means to give equal stature regardless of gender – to father,
        as well as to the mother, and to sister, as much to the brother, to son,
        the same as daughter – and so on an so forth. Why does it mean something
        different to you? If three thousand years of indoctrination wasn't
        enough for some of you, I doubt we'll see you in the{" "}
        <em>First Resurrection</em>. You'll most likely have to suffer in Hell a
        little longer than the first wave – so <em>God be with you</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Now, coming onto why I still insist on calling God, Him, the reasons are
        highly personal, but still, I'll lay out certain, now clichéd
        adjectives. To the best of my interpretation, in the moments when I was
        true to my own self<em> –</em> wilfully vulnerable, open to empathy,
        shackle-free and <strong>graciously uninhibited</strong> – I always
        perceived <em>Him</em> as a Him – because that was me actualising{" "}
        <em>my true self, </em>and I could not have done it otherwise
        <em>. God is my Father, and also, my best friend. </em>The idea of God,
        then, is subjective in the sense that He plays different roles for
        different people in different spacetimes – but to say that the the idea
        of God is subjective in the sense that He exists as an illusion of hope
        for some people, and doesn't exist at all for others that are more
        pragmatic, just renders this millennia old trance a facade. That is not
        just ignorant, but very much irresponsible.
      </p>
    ),
  },

  {
    classes: "verse quote",
    html: (
      <p>
        <em>
          “A religion, old or new, that stressed the magnificence of the
          Universe as revealed by modern science might be able to draw forth
          reserves of reverence and awe hardly tapped by the conventional
          faiths.”
          <br />
          (The God Delusion – Page 33, Richard Dawkins)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To that end, I also don’t understand any religion that exists outside
        the realm of science. This is, after all, the original science – the{" "}
        <em>Science of Existence</em>. It might be referred to as meta-science
        before and in my time, but I surely hope that it doesn’t stay that way.
        The science of Strings of Time; the Science of Synchronicity; the
        Science of Existence –{" "}
        <strong>the how and why we dance to the tune of His commands</strong> –
        is the foremost thing that we have been studying all this time (the
        printing press itself, was a tangential offspring of this exploration),
        and it is <strong>the fundamental question</strong> that most of us are
        trying to answer in our own struggles that we call lives.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This, <strong>by no means</strong>, is an indication to extremists to
        misinterpret as a disregard for all other sciences. I, myself, am a
        scientist by training – or at least I try to be. The reason why I failed
        before, is probably the reason why most of us fail in our journeys – we
        try to do things without God. We get so engrossed in the workings of our
        puny worlds, that we forget the Creator who set all things in motion and
        keeps everything <em>spinning,</em>{" "}
        <em>while the whole world changes with each unit interval of time.</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Just because you can’t see God, doesn’t mean He isn’t around. Can you
        see quarks? You can only infer their presence with telemetry.
        Understanding and interpreting said telemetry requires a certain amount
        of skill to be gained before obscure Greek symbols and complicated
        mathematics behind the symbols makes any sense to you. Experiments have
        to be carefully designed and the results have to be reproducible under
        similar conditions for any hypothesis to be considered valid.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Why don’t the same standards apply to the Science of Existence? Well,
        for one, in this field, knowledge with copious practice, is literally
        power. You have an alluring affect on other entities around you – and
        it’s very easy to be intoxicated with this power. It is also{" "}
        <em>not just</em> a metaphorical intoxication of having people look upto
        you for help, and you being incharge of them – in these altered states
        of consciousness, even drinking plain water will give you the
        intoxication of the finest wine, it is, indeed, the majorly unattainable, Heaven.
      </p>
    ),
  },


  {
    classes: "verse",
    html: (
      <p>
        It’s actually my very selfish reason for doing all this –{" "}
        <em>I want to be in Heaven too</em>. I was in it for 6 weeks, and not
        that we have any authority to swear by anything, but I’ll be damned if I
        said that I didn’t want to be in that state for all my living moments.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        So then, I ask, <em>why should you believe in God?</em> Is it because He
        knows you better that you will ever know yourself? That’s not a strong
        enough reason. Is it because He will constantly put you in uncomfortable
        positions knowing that the result of your successful actions in that
        position will ultimately make you a better, stronger person? That reason
        also, pushes people away from God rather than bringing them towards Him.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Most of you will probably never see God. Even when you do hear Him, He
        sounds like a voice you already know. You can’t smell him – although
        every time I have been explicitly made aware of His presence, I have
        smelt marijuana. I think that’s what Heaven smells like. Maybe that’s
        just <em>My Heaven</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        My Heaven also involved a lot of other variables – one of them being a
        resolution with my parents, and absolution from the shackles of my
        childhood insecurities and frustrations. I believe deep down, we all
        really just want the same bloody thing – <strong>absolution</strong>. We
        want relief. We want to be unburdened, to be untethered, and allowed to
        be the free spirits that we were <em>originally</em> born as.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “Whosoever therefore shall humble himself as this little child, <br />
          the same is greatest in the kingdom of heaven.” <br />
          (Matthew 18:4)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It was such a simple thing, just believing that life was a fairytale,
        and all would be well because the world belonged to, and was run by, my
        Father in Heaven. Now that night alone should have been enough for
        anyone to be convinced of their special status – but not me – I had
        always fancied myself as the Devil’s Advocate in every situation,
        offering countering viewpoints, and exploring the nuances of any and all
        arguments. So I did the same with God – and by Him, did He encourage me
        in this endeavour.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It was this very trait of mine that led me to write Scova in the first
        place – a comprehensive guide to convince everyone on the planet that
        there was an overseer, and that all would really just be, okay.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        That’s really the root of the problem isn’t it? That all is really just,
        okay. It’s not great, it’s not really good – it’s just okay. As much as
        I like to preach about this fantastical life that God promises you, in
        the beginning, it really is, just, all okay.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        <em>
          I can go on and on about what God is; what I really need to tell you
          is what God isn’t.{" "}
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        He’s not a genie. He will not magically make your life okay even if you
        spend a lifetime praying to His Name. Only <strong>you</strong> have the
        power and capacity to make things better for yourself. You have to get
        up from that sorry ass of yours and take a step towards a different
        life.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What you can do is ask for step by step inspiration –{" "}
        <em>
          break down any problem you have into a series of tiny dilemmas where
          the slightest nudge could lead you onto a different path{" "}
        </em>
        – a well chartered path, or a road less travelled, that’s always up to
        you – <em>there is no wrong answer –</em>
        <em> </em> <em>only wrong executions</em>.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “Ask, and it shall be given you; <br />
          seek, and ye shall find; <br />
          knock, and it shall be opened unto you: <br />
          <br />
          For every one that asketh receiveth; <br />
          and he that seeketh findeth; <br />
          and to him that knocketh it shall be opened.
          <br />
          <br />
          Or what man is there of you, <br />
          whom if his son ask bread, <br />
          will he give him a stone? <br />
          Or if he ask a fish, will he give him a serpent?
          <br />
          <br />
          If ye then, being evil, <br />
          know how to give good gifts unto your children,
          <br />
          how much more shall your Father which is in heaven <br />
          give good things to them that ask him?
          <br />
          <br />
          Therefore all things whatsoever <br />
          ye would that men should do to you, <br />
          do ye even so to them: <br />
          for this is the law and the prophets.”
          <br />
          (Matthew 7:7-12)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It doesn’t have to be a big decision. It almost never has to be a big
        decision. Life is lived second by second, moment by moment. Learn to
        make small, split second decisions, and the big ones will be cake walk
        (metaphor). With that, I believe now is the correct time to introduce the most basic
        construct of any organised religion:{" "}
        <strong>The Natural Prayer.</strong>
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        “Oh God my day at work is going terribly. There’s not much to do here,
        but I can’t just leave. It just doesn’t seem like the right thing to
        do…”
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Seems like something a moderately “good” person would think. There is
        clearly a lack of motivation, a sort of encouragement in spending time
        at a place so mundane, it could hardly ever be described as “meaningful”
        in traditional sense of the word, where the partaker looks for some
        impact to be made in the physical world so as to describe the work done
        in terms of the results obtained from their actions.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The good thing about this thought is that there is an understanding that
        avoiding the task at hand does not align with the moral compass that
        accepts abandoning of one’s duties as a sincerely dickish thing to do.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This is just the first part of a natural prayer which translates a
        passing thought into a conversational sentence with a definite structure
        – the first part of which addresses the recipient of the thought, ie,
        God. Then, there is a description of the tiny dilemma at hand, which has
        lead the thinker towards the recipient. Then there is some optional
        background information on why the said dilemma is a problem in the first
        place.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The words “It just doesn’t seem like the right thing to do” are optional
        in the sense that God is all-knowing, so He knows why you are having a
        problem with this mundane decision. It is important that you know the
        reason too, as it only goes to show how self-aware you are.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The more self-aware you are, the better will your conversations will be
        with the Divine. After the first part of describing the dilemma, there
        comes the <em>Ask</em>. It describes what it is that you really want in
        the moment – everything else in the universe remaining constant – all
        you bigger, introspective problems aside – what would you have God do to
        bring you at ease:
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: <p>“…give me some motivation…”</p>,
  },
  {
    classes: "verse",
    html: (
      <p>
        This part can get very tricky. You can ask for the tiniest thing like
        the disappearance of a fly that has been bothering you, to the bigger
        problems of making your work impactful to millions of people and
        “fixing” the disastrous existence that you call a life.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        At best, this is a very tiny nudge that distracts you from your problem
        at hand, and allows you to breathe a little without being distracted by
        said problem – so that moments later, you can refocus on your task in a
        much better way.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This may seem like a distraction in the moment, but that’s almost always
        what God gives you, a distraction from pain, so that you heal and emerge
        much more powerful, and much more motivated to tackle the problem that
        had become the bane of your existence – all by yourself,{" "}
        <em>with a little bit of his help</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        After the Ask, comes the Why – here you outline the result that you
        would like to see after a successfully answered prayer. Again, God, the
        all-knowing, knows what’s in your heart. He knows you better than you
        know yourself, so it is obvious that He will give you a result that you
        truly need. This part is important for the same reason – it’s better if
        you know what YOU need. If the results of His actions align with what
        you had wished for, won’t you be much happier with the results?
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: <p>“…so I can use my time properly”</p>,
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>Note: </em>I believe this is a given, but{" "}
        <strong>do not lie at all</strong> in this short prayer thinking that
        you saying certain things will guarantee certain results. Just because
        something is “expected” from the good people of a time and place,
        doesn’t mean that that’s what you should aspire to say in your most
        private thoughts.{" "}
        <strong>
          A person who is not able to think freely inside their own head, is a
          long, long way from having any of their prayers answered by God.
        </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Now that you know the structure of this natural prayer, let’s unravel
        the general thought behind all of them. Every small prayer loosely
        translates to:
        <br />
        <br />
        “Dear God, I recognise that I’m just a lowly earthly being, stuck living
        a regular life. I don’t want to ask for much here, I’m not looking for
        some greater meaning in what I am doing. I also, wouldn’t ask you for a
        bunch of worldly possessions that I know I don’t really need because I
        know you’re not a genie, and genies aren’t real. What I want is not
        beyond the realm of possibilities – all I ask is for a little nudge that
        makes this mandatory mundane activity a little more encouraging so I can
        spend my free time in a better manner with the people I cherish most in
        the world.”
      </p>
    ),
  },

  {
    classes: "demarcator",
    html: <hr />,
  },


  {
    classes: "chapter-title",
    html: (
      <p>
        5 <br />
        Question
      </p>
    ),
  },


  {
    classes: "verse",
    html: (
      <p>
        Over these past millennia, what is the{" "}
        <strong>one defining trait that has made us truly human</strong>? Is is
        our propensity for infinite progress? That one has put us in the mess
        that we find ourselves in; so that can’t be it. Is it our desire to
        continually improve? That almost inevitably lends us to failures and
        disappointments. Is it then our want of a better life, no matter what
        the emotional, spiritual, and mental cost? That statement in itself
        sounds very wrong. Is it our empathy, or lack thereof? Other animated
        string complexes have that, so that doesn’t make us unique.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What does, however, make us unique, is our undying curiosity – one that
        leads us down Frostian less-travelled paths. It’s not our penchant for
        the shiny new thing that everybody else has,{" "}
        <em>
          it is our desire to have unfettered access to unexplored territories
          and untested ideas that leads us to chartering paths where none ever
          existed before
        </em>
        .
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        History is proof – for narrow is the path, and smaller still, is the
        gate that lends to life itself. In the beginning, like most things, it
        is hard to follow, but if you keep on going, and keep on wishing with
        your mind and soul, you may just find what you were looking for, and
        receive all that you hadn’t thought of asking for.
      </p>
    ),
  },


  {
    classes: "verse",
    html: (
      <p>
        It has been written that, “In the beginning was the Word, and the Word
        was with God, and the Word was God.” The line after this has caused some
        confusion, and because religion is no place for brevity – it calls for
        questioning and elaboration. The next line goes – “In the beginning was
        God, and God was with the Word, and God was the Word.” This is not the
        version you’ll find in any Bible <em>yet</em> published, but I know this
        interpretation is correct. <em>So I have been told.</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Too big of a digression? I don’t think so. Let’s draw a parallel: In the
        beginning there was material energy, and this material energy was one
        with the informational energy – they weren’t two parts of a whole – they
        were indeed one – as much as anything and nothing there ever was – this
        was <em>the one</em> – the sheer nothingness and completeness before the
        ‘Big Bang.’
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        On the subject of the catalyst, or the cause for this Big Bang, I have
        no answers. <em>I didn’t ask</em>. What good would it do? My mind was
        already in shock after the magnitude of information I had received, that
        I just couldn’t risk taking in more of it. It has taken over two years
        for me to recover from that intake, and it is for the first time that,
        now, I can conjure up concrete words to articulate what I have received.
        It will have taken me thirteen more years to finish explaining what I
        essentially absorbed over six weekends. A lot can happen in 42 days, and
        a lot happened in an instant all those billion(s) years ago.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I didn’t say that God is material energy and this Word thing is
        something else – quite the opposite –{" "}
        <em>
          there is nothing but God, there is no God, but Allah, Allah is
          Bhagwaan, and Bhagwaan is Rabb, and Rabb is Khuda.
        </em>{" "}
        It’s all the same – it is all a part of the one.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        There is nothing but this one – all things, material or purely
        informational, are part of this one. God is a force. He’s also an
        energy. He is also a gigantic particle. He is also the filter through
        which we look at life and perceive Heaven and Hell.{" "}
        <strong>
          God is the <em>Universal Relay </em>
          that controls the <em>intensity</em> of all that you experience
        </strong>
        .
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What God is, that the Guru Granth Sahib will tell you, as God, in His
        entirety, is indescribable. You have to see Him, and experience His
        presence and even then your mind can only conjure up simplistic clichés
        to describe Him. The <em>Gurbani</em> goes on for over 1400 pages
        describing God, yet it hardly does justice in being comprehensive about
        His work. Gurbani is lengthy, but not exhaustive by any means.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The most important thing that it does mention is, that{" "}
        <em>God is complete</em>. He is complete without humans. The
        omnipresent, all powerful being/particle is well suited to reside in
        this universe all by Himself. He does not need you, some times, because
        of our negative actions, He does not even want you.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        He accepts that you exist, and hence, being the forever generous being
        that He is, He wants to help you in whatever way you will let Him –
        because you, me, all of what you see and experience around you, is a
        part of Him. <em>Life itself, is the universe experiencing itself.</em>
      </p>
    ),
  },


  {
    classes: "verse",
    html: (
      <p>
        If my words thus far have already had the effect of being offensive, or worse, banal –
        then I am doing something right. It wasn't my intent to
        <em>weave dissonance</em> too early on, but as is the nature with{" "}
        <em>any truth</em> – it has the propensity to offend. This most often
        occurs with those who harbour insecurities in the name of tradition, and
        societal bounds of accepted and non-accepted behaviours and acts.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If you are experiencing some dissonance, then that's good, sometimes –
        it forces you to look inwards and identify the root cause, rather than
        act mechanically, or on animalistic instincts.{" "}
        <strong>It is the defining trait of sentience</strong>; and as
        scriptures have told you already – this was the{" "}
        <strong>original sin</strong> that caused us all miserable souls to be
        born into life itself.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The parable goes, that at the time of{" "}
        <em>Choosing (or The Great Feud)</em>, the <em>souls</em> who couldn't
        recognise God's <em>absolute authority</em> over all the angelic souls –
        the ones who couldn't make up their minds due to internal dissonance,{" "}
        <em>were made</em> to live and breathe on this biosphere called Earth –
        until such time as the Kingdom of God was at hand, and the{" "}
        <em>final</em> Day of Judgement was nigh. This Qayamat ka din is quite
        the recurrence, haan? You can find references to it in literally every
        scripture that exists, so there is definitely a need to explore it.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        There's a reason why every religious book of consequence revolves around
        this time period – it's coming, and the events that precede it. Some
        even document the afterwards, calling it the end of the recurring four{" "}
        <em>Yugs</em> or eras. Those are the ones that give me hope – hope that
        this is a recurrence, and that <em>humans in the past </em>have found a
        way to get beyond it. Today we refer to them as mythological demigods.
        Did you think we would just stop at <em>Qayamat, </em>and call it a day
        for all humankind? If God does not will a reset to the beginning, why an
        end?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Up until this point, I have not mentioned that we were originally born
        as humans. I just wrote "live and breathe," and your mind tangentially
        assumed I was talking about humans. I just said that we were born into
        life on this biosphere, and a working theory started to form in your
        mind about this, current, human life. Now why would your mind conjure up
        such a thing when I never actually said it?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Why this fixation on the current level in this long evolutionary game?
        Why the opposition to scientific facts? If science is a developing
        pursuit to decode the eternally existing facts, why not religion? Why
        would you assume that God was so simplistic as to wake up one day, be
        bored, and work for <em>one whole week without pause</em> and hurriedly
        concoct the concept of life on Earth?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        That doesn't sound like the God I know – that sounds like the manic I
        have experienced myself on the verge of becoming. For sure, it sounds
        like a made up tale that you, yourself, would have made up, had you been
        born a couple millennia ago, in a time, in a space where science and
        mathematics did not exist as proper disciplines – where paper was an
        elitist luxury, and standard education was a concept yet to be
        perfected. To a human born in that spacetime, how could God have
        conveyed properly the Absolute Truth except in the form of parables and
        glistening sceneries, addressed to only those that had the gumption, the
        experience, and the gall to think beyond what was being said.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Would you, yourself, have even been able to comprehend what was being
        narrated inside your head, demonstrated in your vision, and felt as a
        crawling up your spine – tugging your wrists and ankles, stifling your
        waist, heating up your chest, and nagging inside all fabric of your
        being? <strong>That's how God communicates.</strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Would you not have tried your best to{" "}
        <strong>
          impart the necessary mental constructs to the primitive, simplistic
          people
        </strong>{" "}
        with whose education you had been tasked with?{" "}
        <strong>That's His command to you.</strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Would you not have tried, at a later time, to{" "}
        <strong>impart to people, the proper methods</strong> to invoke the
        mental constructs that they had previously, then, been taught?{" "}
        <strong>That is what you have to implement.</strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Would you not have tried, at an even later time, to{" "}
        <strong>guide people back to the proper path</strong> when they had over
        exploited the methods that they had used, and still failed at grasping
        the basic point of it all?{" "}
        <strong>
          This is what you have to do each day, and you have to do it
          repeatedly.
        </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Would you, after all that, not have tried to guide people towards
        repentance, via your witty use of <strong>simplistic parables</strong>,
        telling that it was never to late to find salvation? This,{" "}
        <strong>you have to do in each moment</strong>, and apply this thinking
        to your own self too.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Would you, after having observed people receive all that knowledge and
        still be lost as sheep without a shepherd, not{" "}
        <em>give them another chance</em> by detailing every single thing
        meticulously, and graphically, and hand over to them the{" "}
        <strong>instructional manual to the proper way</strong> – hoping that
        one day, peace shall prevail by choice or force – so that all could be
        right, and adequately functioning in their world?{" "}
        <strong>Isn't this your only task</strong> in maintaining a worthwhile
        enterprise?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Would you then, much later into the future, not focus on the world at
        large, but try to confine people to their close social circle and tell
        them to focus on just those key elements in their life by{" "}
        <strong>living your own life for them to see as an example</strong> – so
        that they may be inclined to try for themselves, and taste the{" "}
        <em>manna</em> that He so graciously, benevolently provides? Do you not
        try to do this in your personal life?{" "}
        <strong>Aren't all your actions geared to accomplishing this?</strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Even when all of that was done, and the dust had still not settled,
        would you not come up with the <strong>Final Solution</strong> to burn
        it all down and start from the very beginning – all the knowledge left
        standing, but all the corrupting aspects of the sociopolitoculture just
        exterminated at an industrial scale?{" "}
        <strong>Are you also, sometimes, not forced to do this</strong> with
        relationships, person and professional?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Of course you could question the single person's aims, ambitions, and
        methods of operation for carrying out these mammothly impossible tasks –
        you could maybe judge them in a legal court and declare them
        certifiably, pathologically psychopathic – or you could see them as
        fools – that's really up to you. They weren't Gods, and neither are you.
        We all just try; and fail – still we try again, despite the chance of
        failure – learning from our failures and adapting, always.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I could tell you that you have right to discern their life choices, and
        dissect their every move – but you have no right to judge them. They
        were all decreed with a Divine Ordinance, and{" "}
        <strong>they couldn't not continue</strong> – for their own sake, and
        for the sake of everyone and everything they held dear. They are all
        destined to come back – wearing numerous skins, speaking different
        tongues, and try different approaches to achieve the same end – the
        Longevity of Happiness.{" "}
        <strong>
          <em>Is that not, just the only worthy goal?</em>
        </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Contrary to popular opinion, happiness is not a state of mind.
        Dissonance, disturbance, irritability, nervousness, agitation – these
        are states of mind. Life itself, is a long, arduous struggle that is
        interspersed with momentary <em>states of being</em> – happiness,
        sadness, indifference and all the other states in between.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        We all live, breathe and act like Gods in our own, puny spheres of
        influence – but we really do not know shit.{" "}
        <strong>
          Some things just come to our mind, and we choose or refuse acting on
          them.
        </strong>{" "}
        <em>
          That's what those poor incarnations were trying to tell us all this
          time.
        </em>{" "}
        Yet, we never really understood. Instead, we mistook them for actual
        Gods – focusing on the liberties they took in life, yet{" "}
        <strong>never really understanding the burden</strong> that comes when
        you take liberty.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        There's just one God. All of Him, is just one single entity – with each
        component no different from the rest in the hierarchy. God is the all in
        all. In fact, there is nothing else but God. It is all a part of the One
        thing. All things are part of the One thing there is, and since there is
        only One thing, there is nothing else that this One thing could want –
        because there is nothing else. Within us, and without, there is nothing
        else but God, so, practically, in a way, we are also a part of God, and
        so, there exists in us a capacity to achieve the divine.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        We couldn't understand this simple fact all those eons ago, and we still
        refuse to accept it. Just like at the time of The Great Feud, we
        couldn't understand the magnitude of the decision that had befallen us.
        God should've decimated us all into oblivion at that very moment; but He
        didn't. How could He? Being the all knowing, He knew that even if He
        started from scratch at that moment, He would be confronted with the
        same situation, eons later, the moment some other soul questioned His
        supreme authority and then He would be stuck in an{" "}
        <strong>infinite loop of creation and decimation</strong>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Maybe He did. Maybe the flood of Noah's time was a legitimate
        occurrence. How would one know? Simply being show the portrayal of it
        will not suffice, neither will explaining it scientifically. The fact
        that we are all here, and still alive, is a testament to the fact that
        God didn't fall into that loop, instead, He nudged it in a different
        direction – He allowed us all the time, however long it took, for ALL
        SOULS to acknowledge his supreme authority – for posterity, no matter
        how long it took for each and every one for us to get there.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        God Himself cannot revoke the Natural Law, so He devised a game – the{" "}
        <em>Game of Life</em>. The objective?{" "}
        <strong>
          To live, breathe, behave and act as if you were God, and mould your
          world into your own reflection – as He does to You
        </strong>
        . If then, you could prove yourself worthy to run the this world, and
        sustain it, nurture it, and nudge it in the direction you saw fit, you
        would be given a chance to actually accomplish those things within your
        single lifetime – and He would guide you.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          And the Lord God said,
          <br /> Behold, the man is become as one of us, to know good and evil:
          and now, <br />
          lest he put forth his hand, and take also of the tree of life, and
          eat, and live for ever: <br />
          <br />
          Therefore the Lord God sent him forth from the garden of Eden, <br />
          to till the ground from whence he was taken. <br />
          (Genesis 3:22-23 )
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Whatever your actions, good or bad, you would feel their effect in the
        current life; if those actions demanded a greater repercussion, you
        would be fairly awarded the requisite status in the next life, where, if
        you truly honed into your intuition, you would find a way to continue
        what you started in a previous lifetime, and build on the foundation
        that your previous self had built. Within those puny lifetimes, you
        would also go through various other tests, that truly adjudged your
        commitment to one single fact – that{" "}
        <em>you are nothing without Him</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        अहम् ब्रह्मास्मि – the Sanskrit aphorism{" "}
        <em>Aha&#7745; Brahm&#257;smi</em> is a cute abstraction of the same
        that translates to – <em>I am Brahma, I am the Absolute</em>. It is
        actually one of the problems with Hinduism. This eclectic collective
        idea of the master Yogi has been around for so long that people really
        have no clue as to what it means. Millennia of conquests and division
        and destruction has brought us to a point where the true knowledge
        behind these aphorisms is lost, while only strange shorthands remain,
        left to be repeated in mechanical incantations as robotic workers in a
        factory.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This one is more of a positive affirmation to give you hope in
        tumultuous times (if you know it's true meaning) more than a magical
        mantra that mystically makes all your troubles go away. In a simpler
        time, I would've vaguely mentioned this phrase in the book for some
        discerning nerd to scout and find peace, but I cannot. Not now.{" "}
        <em>The time for legendary games has passed</em>. This Journey that God
        has put me on, and this narrative that I have since built, does not
        allow room for frivolous pursuits like this anymore. The entirety of the
        globe has been conquered and the Gospel has spread to wherever language
        is spoken. In the places that it wasn't allowed to make a breakthrough,
        Islam has managed to settle in.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What I sowed millennia ago, I have come to reap – the good, the bad, and
        the ugly – all of it. As Allah has deemed, sufficient time has now
        passed since the original sin – we grew from single-celled organisms to
        multi-celled, and then grew exponentially complex. It is now, in this
        time, that we are all finally in a state where we can comprehend truly,
        equally, without, and beyond a shred of doubt – that{" "}
        <em>we aren't Gods</em>. We can't possibly be. Look around you. We
        tried, we have been trying, and God has been guiding us all this time –
        but we still have failed. Kalyug has still come knocking yet again, and
        all of us are here, in this time for a reason – that reason being{" "}
        <em>The Final Test, </em> <strong>The Day of Judgement </strong>- the
        most awaited historical prophecy yet to be fulfilled. On that day, a
        simple question will then be put forth to all humanity, and each
        individual's answer to that question will determine their course for all
        eternity:
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <em>"How did you like playing God?"</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What a dumb game, haan? Dumb here means magnificently intelligent –
        sometimes people use syntactically opposite phrasing to convey the true
        meaning of a thing – who has ears to listen, let them listen.
      </p>
    ),
  },


  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:2SxHDk6boh56PHvx66U4li" // Imagine Dragons, I Don't Know Why
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        To reiterate, material and informational energy form all that there is –
        and this entire system is God. Stay with Me long enough, and I’ll prove
        that this (Matter/Information) Energy paradigm that you have considered
        inanimate and non-living for so long because of your{" "}
        <em>belief in opposition</em> to the ‘God Delusion’ is nothing but
        hokum, and life itself, is just the Source experiencing itself.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        To that end, it is not easy to explain God in today's twitchy,{" "}
        <em>over-stimulated</em>, butterfly-garden world. You can't just sum Him
        up in 140 characters or less; or write a cliff notes version of{" "}
        <em>His Manual to the Universe</em> just because we think we are too
        busy to engage ourselves in an actual discussion over the expectation of
        the Creator from His Creation. As the Creator of our entire universe, He
        does have that right of expectation over us. If you do not accept that
        right now, that's fine too – if you believe you know more about creation
        than the Creator Himself. Maybe you think you know more than me. Perhaps
        you do, I will never know. Maybe you have you own interpretation – as
        you should. If you have you own version of events, congratulations, you
        are ahead of the curve, Scova will be mighty exciting for you, as you
        read, and re-read it in an order that pleases You.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Surely, you can doubt other people's interpretation over what they think
        over the Creator's expectations from them, but if and when you hear it
        directly from the Source? How can you deny? On what grounds will you
        resist? What maxim will you take your stand on? To what end will you
        argue? When will the answers that you then receive, be enough?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You cannot. It just simply, is not possible. It never will be enough.
        <em> Still, life sucks if you don't try.</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To that end, you first need to be told how to heed to God's indications
        when He is trying to caution you. How do you do that? Do you pray, or do
        you curse? Do you shout loudly into the abyss, or do you take a vow of
        silence? Do you go around the world looking for answers, or do you keep
        looking inwards? Do you take advice of learned elders, or ask an
        innocent child? Do you embed yourself in fervent calculations, or just
        toss a coin and be done with it? Do you trust your internal instinct, or
        do you analyse every known variable cerebrally? The answer is all of
        them, but none at all.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        The answer can come in a split second, and take lifetimes to master;
        <br /> or it can take lifetimes of mistakes, and dawn as clarity in an
        instant.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <em>
          You do the best You can, and that is all God asks of you.
          <br />
          It's that simple, and it doesn't have to be harder than this.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This life that you have, is all but moments – moments to master, and
        moments to enjoy, to make merry, and to toil hard. Sometimes you may get
        hurt, so get back up – sometimes you may find peace, so find comfort in
        that fact. Cherish these moments, but also, learn, grow, and adapt with
        them. As you grow more complex, these moments come again, but in a
        different form, a more complicated form – if you've been doing well
        before this moment, the stakes of this moment are dramatically
        increased, but if you have been ill-performing, these moments will be
        anti-climactic.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          "Prepare thy work without, and make it fit for thyself in the field;
          <br />
          and afterwards build thine house."
          <br />
          (Proverbs 24:27)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It all just depends on the work that you've put in{" "}
        <strong>before</strong> you ask the question that determines if you are
        prepared to comprehend what it is that God has really been signalling
        like a crazy person for all the time that preceeded your asking of said
        question. That's the thing about God – you have to be prepared mentaly,
        emotionally, physcially, and most important of all – temporally, to be
        able to truly comprehend what answers He gives you when you ask Him the
        questions that you do end up asking. If you are not considerably
        prepared, then you are in for a great detriment; or worse – greater
        challenges in life as a result of the, now greater, corpus of wisdom
        that your mind now cohabits. Be especially wary of the wisdom that you
        acquired, but did not rightfully earn. If you are prepared, then,
        wah-e-guru, what a Journey you're going to have!
      </p>
    ),
  },




  {
    classes: "demarcator",
    html: <hr />,
  },

  {
    classes: "chapter-title",
    html: (
      <p>
        6 <br />
        Science
      </p>
    ),
  },

  {
    classes: "verse title-quote",
    html: (
      <p>
        <em>
          “Who is as the wise man? <br />
          and who knoweth the interpretation of a thing?
          <br />
          a man’s wisdom maketh his face to shine, <br />
          and the boldness of his face shall be changed.”
          <br />
          (Ecclesiastes 8:1)
        </em>
      </p>
    ),
  },

  {
    classes: "verse quote",
    html: (
      <FacebookProvider appId="295988795097494">
        <EmbeddedPost
          href="https://www.facebook.com/anhadarora/posts/10213183984935225"
          width="100%"
        />
      </FacebookProvider>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What I really should have said, was that I had conceptually reconciled
        general relativity with quantum mechanics by following the symphony of
        space, in time. Semantic inaccuracies of a 23 year old aside, should I
        have written a paper as suggested by one of my friends when I put this
        question up as my Facebook status on August 9, 2017 CE?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        A day before the last exam of my undergraduate college, it had finally
        dawned upon me – this side gig that I had been engaged in, and committed
        to for 42 days, was something far greater than I personally, could ever
        have fathomed. This was <em>bigger than me</em> and my own internal
        struggles in this puny existence that I had inhabited for the past 23
        years. I wasn’t just a boy who had seen infinity – I would one day{" "}
        become the man who had the complete
        <strong>Theory of Everything</strong>. More importantly, as this
        knowledge came from God Himself, the stakes were beyond human
        comprehension.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        To that end, I could pursue research in the field of physics,
        mathematics, psychology, philosophy or maybe just deep dive into
        metaphysics. What couldn’t I do given this knowledge that had been
        freely given to me, as the <em>True Master </em>guided my wrist? My
        original thought was to find the best mathematicians and physicists of{" "}
        <em>this</em> time and get them to work on this as a team – for all
        humanity’s sake.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Scientists from different walks of life had come together before in a
        time of uncertainty to sketch out a blueprint for quantum mechanics in
        the 1927 Solvay Conference. To this day, that Conference is the largest
        gathering of high-IQ geniuses working towards a common goal. So I
        thought, why not do this again? I could go to these people one by one,
        and it would be easy enough to convince them of the{" "}
        <em>Absolute Truth</em>. Now that I had God{" "}
        <em>speaking through me</em> – what could go wrong? Mouthpieces of His
        have been known to have all kinds of effects on people through mere
        speech. Yes, they had the Holy Spirit, but I had had it too. At least I thought I did, at the time.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Even still, how could I expect other people to take me seriously? How
        could I expect people to follow and imbibe this sacred knowledge with
        whose proclamation I was tasked with? How could I inspire people to drop
        their live’s work and pivot to the unknown wilfully?
      </p>
    ),
  },


  {
    classes: "verse",
    html: (
      <p>
        A lot of great things happened during the 42 days when I had God to
        guide me in{" "}
        <strong>
          <em>the most</em>
        </strong>{" "}
        immersive, all encompassing, complete surrender bootcamp (as a crash
        course in the nature of life should be). A lot of bad things happened,
        some more heartbreaking than disappointing, some foolish, some ignorant,
        some – well they were just plain wrong. Was I completely exhausted and
        in shock by the end of it? Well, not for a long time – it took a while
        to really sink in. Did I go completely mental, and have a break from
        reality? Never. Not even in my worst moments.
      </p>
    ),
  },

  {
    classes: "verse quran",
    html: (
      <p>
        وَلَقَدْ كُنتُمْ تَمَنَّوْنَ الْمَوْتَ مِن قَبْلِ أَن تَلْقَوْهُ فَقَدْ
        رَأَيْتُمُوهُ وَأَنتُمْ تَنظُرُونَ
        <br />
        <em>(Quran 3:143) </em>
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        All that I remember from that bootcamp was a constant internal warmth in
        every inch of my bodily self, a constant, everlasting glow on my face,
        freakishly high metabolism, and no pains in my body – none at all. By
        the end of this bootcamp, it was as if the boundary of my skin that
        existed to remind me that my blood and organs were separated from the
        outside world just did not exist anymore. I had not known true comfort
        or true emotions of that level, of that intensity before, and I will not
        have attained that level for a very long time until after the bootcamp.{" "}
        <strong>That was Heaven</strong>.
      </p>
    ),
  },


  {
    classes: "verse",
    html: (
      <p>
        God? In this day and age?
        <br />
        Am I crazy?
        <br />
        Technically, I have been diagnosed.
      </p>
    ),
  },


  {
    classes: "verse",
    html: (
      <p>
        As part of my deal with God, I had to tell my parents everything, so it
        was only natural that when they heard that I was going to spend an
        entire weekend with the “boys,” they were not happy. Needless to say,
        after what they put me through for <em>supposedly</em> being addicted to
        drugs, and apparently being maniacal – they don’t trust me being alone.
        Even more so, when I’m in the company of the friends whose only relation
        to me was that we indulged in drugs together.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Many such weekends have passed since the time I first wrote this, and on
        many occasions I have indulged in ungodly substances with the same set
        of people in different spacetime situations, and like clockwork, many
        layers of vulnerability have successfully come apart during and after
        those weekends.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        My parents did however, in that instance, let me go since I hadn’t seen
        the outside world, without a family member’s presence, for over a year
        now. I wasn’t at home all this time by force; it was <em>by choice</em>.{" "}
        <strong>I was still in shock.</strong> I had come home from New York
        City, which was, at the time, arguably one of the most highly
        recommended spaces in the world to be social (or anti-social). I had
        come home thinking I would only be there for six months and then I would
        move onto the next location of my Journey, wherever that might be, doing
        whatever it is that God thought suitable for me. Apparently God sought
        Ludhiana to be suitable for the next part of my Journey, and willed that
        it be the place where I rightfully set my roots.
      </p>
    ),
  },


  {
    classes: "verse",
    html: (
      <p>
        Why this digression about family, when I really should be talking about
        the <em>structural dynamics of flow</em>? It is because while writing
        this chapter I have come away from my family for the first time ever
        since I opened the pandora’s box (this was always a metaphor) and
        revealed to them all that there is to know about me.
      </p>
    ),
  },


  {
    classes: "verse",
    html: (
      <p>
        The thing about setting your roots when you has already grown up, is that this process requires you to uproot yourself from some other spacetime. Although I was going "back to where I had come from," I had to be readjusted into this model of society as well. That programming itself required a bunch of unlearning, or you know, purging. That's in fact, what had started on that ill-fated summer night in New York. I thought my life ended, and I was damned for all eternity, when in reality, my life had only just properly begun, and everything prior to that moment, was just the Prologue. And that damnation? Yes, that too, had only just begun. 
      </p>
    ),
  },


  {
    classes: "verse",
    html: (
      <p>
        I have told you that on the Day of my Judgement, I was naked, afraid,
        embarrassed, remorseful, and broken; but I didn't specify why, or how. I
        did not want Alethia to just be reduced to the level of a human
        autobiography, which, in a way, it already is. Regardless, I did not
        want us to end up in a situation where, either the specific details of
        my present life were microanalysed ad inifinitum, which would lead to
        their true substance being lost – because a human life is not just a set
        of parameters that are introduced in a linear fashion. It could also go
        the opposite route, which would be worse, where people started to
        replicate my journey mechanically – thinking that this was one sure-shot
        way towards salvation. Be assured, that at the time of writing this
        chapter too, I am not entirely free – that's why it is
        entitled in the way that it is.{" "}
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Not maintaining the proper balance between telling a detailed account of
        events as they occurred, and post-occurrence interpretations of said
        events was not something I wanted to involve in the equation. Most of
        what I wanted to talk about life itself, I already have said. Even
        still, there was left in me, a feeling of this work not being whole.{" "}
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Sure enough, events started to occur in my life to facilitate my
        thinking, and nudge me towards writing this chapter in a way I knew
        best, and was now, properly equipped to execute. It's only a bonus then,
        if readers are enticed into reading Scova because of my personal story,
        and not despite it. To do that, I could find no other event that has
        pivoted my life in a way that my Judgement Day did. It is definitely not
        something that should've been brushed over, and so I certainly will not
        be providing a sanitised account of events. I will, however, leave room
        for interpretation, only so that someone in this position in a later
        spacetime can rewrite the story with their own narrative. Hopefully
        scribes after my time will not alter anything in Scova to suit their own
        interpretations.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The first part of my description of the ill-fated event is not the most
        striking part of the story by any stretch of the imagination – the fact
        that I was naked. It is because I literally was. I have it on video, if
        anyone is masochistic like that, not that I would expect anyone to
        understand the reason why I was sitting naked, all alone in my apartment
        at midnight, tired to the bone, exhausted by any reasonable definition,
        lonely, desolate, smoking marijuana in the dark, and finally deciding to
        drop some LSD.{" "}
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The first part, really, is the most easy question to answer – I wanted
        to be as comfortable as possible. Any fabric of clothing that I had on
        my body, just irked me to the point that it started to interfere with my
        "high." In the moments I was all alone, and protected in my private
        oasis, I wanted nothing to do with clothes. I wanted to be as
        comfortable as I possibly could be in my own skin.{" "}
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It didn't help that I was riddled with all sorts of body image issues,
        and being naked in a confined space allowed me to learn to accept myself
        for who I truly was, and not merely what others perceived me to be, or
        worse – how insanely weird I perceived myself to be. Its bizzare how
        much damage childhood name calling, and light-hearted remarks on one's
        appreance can reveal their true face in later years; worse, the way they
        can stunt one's growth towards their full potential one of the prime
        reasons why children should be taught kindness, decency, and empathy
        from the very beginning.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        All sorts of potential arguments could also be made here about me being
        brown skinned in modern day America, of hailing from a post-colonial
        country that was at the time, only starting to wake up to the prejudices
        of Imperial rule that got carried forward into the colloqium, despite
        each human being declared equal before the law.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I could go to the very depths of the kind of sociopoliticocultural
        landscape that allows for a the entire complex of being to become so
        decadent that there are people are being asked to apologise for the acts
        that they did not commit because of their heritage, while the ones who
        commit atrocities in real time are frivolously being ignored – but let's
        save that part for the second half. The first half is about the individual, and as such,
        I will refrain from the discussions about the collective for the most
        part until then.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In the most subtle of ways, I was made to feel less-than in a country
        where I most definitely did not belong – despite it being world-famous
        for accepting people of all castes, creeds, colours, cultures, or any
        confinement of categorisation that your mind could possibly conjure up.{" "}
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In my own country, I was mildly fair-skinned, so I never felt
        marginalised. As a reason, I never had the mental construct of
        discrimination by colour built into my mindset. It was that simple. I
        never experienced it for myself, so I never acknowledged it. Make
        whatever you want of it, it just never occurred to me, the extent to
        which the pigmentation of one's skin affected their life, and how
        persistently, it was the primary driving force behind other entities'
        treatment of them. It also didn't help that my accent sounded funny to
        the natives, regardless of their own skin pigmentation – that's a whole
        other issue that was a key motivator that led me to spend most of my
        time alone, by myself.{" "}
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I, really, after 4 years of indoctrination, and adaptation, could not
        find it within myself to speak in the way I wanted. I had always moulded
        myself, my persona, my language, and my dialect according to what the
        other person across from me would find comfortable, so this experience
        wasn't anything particularly novel. I always wanted others to be
        comfortable with me, because I wanted to be comfortable with them.{" "}
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I told you that I picked up a mixed dialect as a result of being
        educated in a multi-cultural environment of my Catholic boarding school,
        with people from all over the country, as a result of which, my language
        couldn't really be traced back to anywhere specific in the country, but
        the country itself.{" "}
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        That was a problem to me in high-school where I was perceived as an
        outsider, and that proved to be a problem in college where I literally
        was an outsider. I grew, I adapted, I tried to switch accents when
        talking to different sets of people – because of which, I expanded, but
        at the same time, I lost a little essence of who I really was, because I
        never really knew much about myself anyway. How could I? I was in my
        late-teens, early-twenties. Does anyone really expect you to know
        anything about yourself at that point?{" "}
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        How do we then just commit to life-altering decisions at such a young
        age? We vote for the future our country, we go fight in wars about whose
        true nature, we don't learn about until decades later – we move entire
        continents, and leave everything behind that nurtured us, and built all
        parts of us until that given point in spacetime.{" "}
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        We do all this in the name of Freedom, and exploration – we love to use
        the phrases along the lines of "find myself" as if the self is something
        that was long lost, and that an archaeological treasure hunt halfway
        across the globe is needed to truly find <em>our self</em> that has been
        within us all this time.{" "}
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What is freedom really? Why do we need so much freedom? Why don't we
        accept the world as it was handed to us? Is it really, always that bad?
        Was it really all that bad when we didn't know anything about it anyway?{" "}
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Everybody's house has problems. That's the nature of living in a
        confined space and agreeing to raise more of one's kind in said space.
        We aren't perfect. We have baggage. Is it so unnatural to assume that
        the person that we get bound to for the rest of our lives will not have
        an equivalent, if not more, of the same? If those people do not sort
        their all their problems, before they bring more of their combinations
        into the world, it is only natural that the new combination that has
        just arrived on the scene with zero memories, but some innate intuition,
        will have newer, and also equivalent, if not more, problems of its own –
        depending on its eternal internal intuition, and it's compatibility and
        familiarity with said problems.{" "}
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If this is the case, which it absolutely is, then how is this model of
        society sustainable? The world is not running on pure chance, because
        otherwise, we are all astronomically lucky. If God is not modulating
        this system, then I'd rather just check out of life the moment I'm born
        every single time – because I'd like to have at least some notion of
        control, rather than leave it to random chance.{" "}
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        This, and more, I have already discussed ad nauseam in the previous
        chapter – I was afraid because I knew that I had not{" "}
        <em>earned the comfort</em> that I was so wilfully enjoying. If I hadn't
        been stopped at that point by God, I would've been lost beyond reproach.
        Well, at the very least, my life would've been geometrically harder. I
        was afraid because I knew that God came to me, and I was at my lowest
        point – nakedly indulging, without just cause – and I trembled in fear
        of what was to follow.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        Now you might be inclined to say, to each their own, and as a regular
        human being, I could try to convince you of how, when my whole world
        came crashing down, I was left with no other options – but that's a very
        lengthy discussion, given how much I have psychoanalysed my own self,
        and given how much I have observed the world, the societies, the
        cultures, the traditions, and the people of my time. Couple those two
        things with the fact that I know what is actually up with the world due
        to this divine ordination that I so generously received in my Freedom
        Bootcamp. 
        
        </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        
        Having all this matter up for discussion with a person who is
        not even remotely as equipped to handle the truth bombs that I was bound
        to drop on them, would be inhumane. Also, the entirety of that
        discussion, would be all of Scova – so I'll just talk about the stuff which I could
        never talk about to, with a real person, in a face to face conversation;
        because, first, they will never be interested in my life to the depths
        that I am interested in mine. Second, and this is a big one – even if I
        managed to do all that in a conversational setting, the person would
        then ask – "if you know everything about everything, then why haven't
        you fixed it?"
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Now that's the real kicker, isn't it? All of this realization, and
        nothing to show for it? What was the whole point of having that
        discussion if all it was going to acheive was, to make the other person,
        and myself – feel inadequate? Keep the word inadequate in mind, because
        that will come in handy in a while.
      </p>
    ),
  },

  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          "Remember ye not the former things, neither consider the things of
          old.
          <br />
          Behold, I will do a new thing; now it shall spring forth; shall ye not
          know it?
          <br />
          I will even make a way in the wilderness, and rivers in the desert.
          <br />
          The beast of the field shall honour me, the dragons and the owls:
          <br />
          because I give waters in the wilderness, and rivers in the desert,
          <br />
          to give drink to my people, my chosen.
          <br />
          This people have I formed for myself;
          <br />
          they shall shew forth my praise."
          <br />
          (Isaiah 43:18-21)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        All that is stagnant in nature, withers away, but also, all that which
        moves in the opposite direction of the flow, only makes it's journey
        needlessly hard. Sometimes we just choose the harder road just because
        it is hard. Don't be obstinately passionate about something without
        knowing what it is that really drives that force. If God is doing all
        the work for you, why do you resist? Why, then, despite all the
        Testaments, and handing down of order from the top down, such chaos in a
        general person's life? Time causes all things in the universe to age,
        but <strong>you</strong>, as a living soul,{" "}
        <strong>have eternal life</strong> – and you've had so much time to fuck
        around and try all things – you can continue doing them – but don't
        throw away millennia of civilisation away for your moments of respite.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You may have ascribed to the philosophy of only living or dying once, or
        you may know these moments to come and go as God wills – but know this –
        you are living this life through Him, and it's only fair that if God is
        always watching, you might as well put up a great show; because we{" "}
        <strong>all</strong> have the potential to do great things, and become
        the greatest versions of ourselves, and here's the kicker –
        <strong>
          {" "}
          everyone can be great at the same time and nobody needs to be put down
          in the process.{" "}
        </strong>
        Life is a non-zero-sum game, so <em>khuda ke liye,</em> please revise
        your traditions accordingly.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        You have tried to do things without God, so isn't it only rational that
        you give the Creator of all things a fair chance too? Haven't you grown
        tired of the needless struggle that sentient life has been leading on to
        become? There has got to be an end to this madness. Wouldn't you rather
        have the end result tilt in your favour? Just try it, because – what else are you going to do? Run away? I've tried that. It doesn't work.
      </p>
    ),
  },
  
  
  {
    classes: "verse",
    html: (
      <p>
        In that regard, you have been told that God is an all powerful,
        supernatural <em>being</em> that is omnipresent and is always listening.
        That one is true. You also have some vague idea about God being the
        Grandmaster of the Universe and us being instruments that He plays as He
        sees fit. This is most definitely true. That being said, does your
        perception of God involve an old fair-skinned man in a Santa Claus beard
        walking down a grand staircase in a white gown? Isn't that insanely
        ridiculous? Of course this one is not true. Why would it be? God is not
        a humanoid figure.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        We cannot revoke the <em>Natural Law</em> just because you want God to
        be able to do that. What we can do, is widen the pinhole from which you
        have been perceiving life, just so you can get a better perspective. The
        humans you have seen as His proxy, were <em>regular people</em> who
        attained the Divine – through sheer virtue and labour.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Those human proxies weren't just gifted people who had any special
        powers in the beginning of their lives, they had to earn it – as any{" "}
        <em>merit has to be earned </em>in this world. Why would you think that
        some double standard applied to the ideal that the rest of the humans
        were chasing in their own intricate ways?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You might then think that God has waited far too long to send a
        messenger, a prophet, a guide, an incarnation – his only Son to explain
        to mortals living on this rock what the <em>Bible</em>, the{" "}
        <em>Quran</em>, the <em>Vedas</em> were all about; that too much time
        has gone by while too little has been properly explained. Perhaps{" "}
        <em>that was the intention</em> – to show the effect of the sheer{" "}
        <em>force of decay</em> that takes over when <em>renewal</em> does not
        take place frequently, and properly. Maintenance of any entity is vital
        for its adequate functioning. If this is{" "}
        <em>true for every other entity in the world</em>, why haven't the same
        standards of quality assurance been applied to religion and faith in
        God? Do the regular people not have the right, or rather, a
        responsibility unto themselves, to find out for themselves, the purpose
        of their miserable condition?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:7fz2ClBknteKGZqw5e1PQr" // Imagine Dragons, Mouth of the River
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In the face of pure corruption and decadence, why have the walls of
        secrecy and double standards been held up so high – to the extent that
        it has become impossible for a regular human being to be empowered
        enough to question the nature of the thing that brought previous
        generations so much abundance, but only gave them confusion and
        discontent? The existence of God in today's times, because of such
        autocratic and dehumanizing systems, is surely up for discussion – but{" "}
        <strong>
          <em>God still exists, in and outside of time.</em>
        </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To me, and perhaps everyone else too – this generation feels abandoned,
        and is seen to be, in a state of disarray. There is a general feeling of
        being "unfinished" that lingers around everybody's persona – that
        feeling of not being "whole," of not having truly achieved things
        according to one's life plans – as if the best version of life was yet
        to come, but time, which keeps moving, just passed, and this best
        version almost never came to proper fruition. If God still exists, and
        humans still worship Him, why is there such a disconnect? Why is the
        planet as a whole, just minutes from midnight at all times? Surely this
        was not the case with our ancestors, so then, how did we grow up to get
        so corrupted, or rather, how did our ancestors fail in properly
        imparting the wisdom that they so freely, and generously received?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In the times that the nature of things was truly explained, peace and
        contentment didn't last very long as the knowledge was limited, and as a
        result, so were its applications. All of world history is an example.
        The Dharmaśāstras, Torah, Vedas, Upanishads, Dhampadda, Bible, Quran,
        Gurbani, and even the last resort, Mean Kampf – all have tried, and all
        of them have endured up to this point in human history – but to achieve
        what end? This shithole? With all the world's solutions at the tap of a
        finger, why is there still suffering? What's the missing variable?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The answer is Scripture – just not in the way that we have classically
        perceived it. As I have stated before, Scova is a work of scripture,
        which is unusual as no previous volume has referred to itself as a part
        of a genre of books. How could they? They were all unique in their own
        right, given to different people, in different spaces, and in different
        times – all for the very first time. They all had one purpose – to
        introduce the idea of God, and His expectations, and His gifts, hence,
        the word "Testament."
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        A lot of time has passed since the Original Testament in the Torah, and
        the Newer Testament of the Gospel, and the newer still, Final Testament
        of the Quran. The Word of God has been spread to every point on the
        globe, and there's not anything that is much newer than that which has
        already been said to ignite people's faith in, what is essentially, at
        this point – an accepted fact. Our cultures and their customs have been
        saturated with the idea of God to such an extent, that without Him,
        sentient civilisation cannot exist.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Sure, you could burn the books, and delete all the data, but what good
        would that serve? You cannot kill every sentient being on this planet,
        and then kill yourself. That just is not a possibility. The time for
        pressing the reset button has passed, and God understands this, which is
        why we haven't had any great floods since Noah (feel free to substitute
        this name with any other that your own culture has passed down to you),
        or an asteroidal collision since the dinosaurs. We have to let nature
        run its course, and play our part in it symbiotically – without
        bloodshed, or further environmental damage.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So then, there will be no more updated Testaments furtheron, as Mohammad
        has rightly told us. This is self-evident since in this quest for
        gaining more followers, and forming the largest flock ever to exist,
        much of the substance behind the aphorisms has been lost, and as such,
        there exists a void where many, often competing ideologies are fighting
        to claim dominance, and disastrously failing.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <em>Scova itself, is not a Testament, </em> <br />
        <em>but the renewal of the Covenant of Humans with God.</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        For that reason, I shall do no fighting here.{" "}
        <strong>Not now, not ever.</strong> I will simply live my life in the
        way that I know best; and when the time comes, I intend to{" "}
        <em>establish order from the top-down</em>, on my own terms. The
        Absolute Truth still remains absolute no matter how hard you try to
        twist up the words and try to push a particular narrative to suit your
        own agenda. In the end, however, truth alone triumphs, and God always
        finds a way.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        That <em>way</em>, in this spacetime, is Scova. You may ask, that why
        haven't you heard this name in the previous scriptures? To that, I would
        counter, that when a new operating system is announced, does the company
        announce the version they are going to release <em>after</em> the
        current version, or do they focus on the currently new version that the
        users should rightly get acclimated with first, before they rush onto
        thinking about what comes after?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You can look for signs in vague prophecies, but really, what's the
        point? Even the people living through those prophecies have no absolute
        surety that the thing that they are currently living through is the one
        that they read about. That's the beauty of prophecies – they can happen
        at any time, in any space, even repeatedly – because they are just bland
        ideas on top of which we add our own personal flavour, as dictated by
        our own internal, personal narrative, being contingent upon our
        attunement to our own true Self. The only surety is that it all, almost
        always, unfolds in real time.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If you are trying to run your life according to some obscure prose that
        some eccentric person wrote under divine inspiration for some other
        person in a future spacetime, then you've got the whole idea of
        scriptures backwards. Hopefully, you don't do that with Scova.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I have also said, Scova is not yet another Testament, nor is it any
        cheap rebranding of the same, now mundane, ideology that has already
        saturated the collective consciousness. It is much more than that – it
        is the renewal of the "Covenant," that God made with the Humans, to
        occupy the earth, and mould it in their image, with them as masters of
        the land and all the fruits that it provided.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Come to think of it, all great books that garnered a considerable
        following were written under <em>Divine Inspiration</em>. Over time, God
        has graciously guided us to education, to governance, and ultimately, to
        self-reliance, and in this Journey, the Grand Experiment, time has now
        come to bring forth the Kingdom of God, so that all humans{" "}
        <em>may see</em> what it is like to <strong>live as God</strong>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Like a parent handing over their life's work to their children, God has
        guided us collectively, and individually, every step of the way, and so
        it would be mighty stupid to go astray when we have come this far,
        together. This is why, in Scova, I take God's existence as a given, I
        take some expectations of His, as a given, I also accept that in the
        past, some mistakes have been made by humans interpreting His wishes,
        and I, as His proxy on earth, take the blame for it. Those people were
        representing the entity that I am representing, so it is only fair that
        I carry my fair share of the burden. Might not seem like a lot at the
        time I am writing this, but by the time you will have read Scova, you'll
        understand the magnitude of this verse.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I have garnered some knowledge which has come directly from Him, and in
        Scova, I will have done my best to quell any doubts and misconceptions
        that will eventually arise in the minds of the people. Mind you,{" "}
        <em> I am not God</em>, I can never be. I have as much God in me as the
        next person. What I do have, is the Holy Spirit – and that has taken
        years of overcoming of immense personal struggles, and the full range of
        overabundant human emotions that they entail.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This knowledge, and these thoughts <em>don't always </em>have to do with
        spirituality or the foundation of <em>yet another religion</em>. In many
        cases, religion is merely a byproduct of a life with God. I could say
        Newton's <em>Principia Mathematica</em> was also a work of Divine
        Inspiration (you can include Leibniz in the mix if your heart so
        desires), but that probably doesn't bode well with your scientific
        minded worldview.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <em>It's the way He does it. </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        He makes you gain some skills in a way best suited to your individual
        life, and conjures a composition <em>through you</em>, that helps to
        preserve <em>your</em> knowledge for all eternity, so that others may
        learn something newer, go a little deeper, and discover the same things
        in their own, personal ways.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I know <em>for sure</em>, that even <em>Mein Kampf</em> was a work
        tangentially arising out of Divine Inspiration (Adolf got lost early on,
        but let's save that part for later), but that also most definitely does
        not fit in with your view of God, the most gracious, most empathising.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Why not though? Oppression has been carried out in the name of God when
        it was never intended, so what's so different about blatant ruthlessness
        and inhumanity when God's name is not directly mentioned? Does the name
        of God somehow justify corrupt actions? Life is a struggle for all
        people – that just has been the nature of it thus far. To throw the
        towel in, and have the world start over on your own terms is foolishly
        maniacal, but do not just judge the actions of another human being in a
        spacetime long passed by, with the hindsight of the future. Hindsight is
        always 20/20.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        Expanding on the description of my Day of Judgement, I will not go into
        all the gory details of the night here, as I need to leave some
        information out, so when your own day comes, as it most definitely will,
        you'll be necessarily surprised. Humans get off on a lot of things, and
        one of the foremost of them being the suffering of others. It is the
        basis of almost all kinds of comedy there is; but this isn't comedy, or
        a clearly defined tragedy. To the best of my coherence, I am only able
        to conjure up a single word that most accurately describes this position
        of mine –{" "}
        <strong>
          <em>necessary.</em>
        </strong>
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        I was naked, afraid, embarrassed, remorseful, and broken – in Biblical proportions, specifically, the Old Testament proportions. <em>God does not kid around</em>, and probably, for the sake of all our betterment, <em>neither should I</em>. This thing that I am writing, and this thing that you are currently reading – is the work of a lifetime of struggles, rejections, disappointments, dissonance, and most of all – anger. I have, and will have, continued to make all the mistakes firsthand, and I am made to pay my dues as and when He sees fit. I have accepted that with all my mind and soul. I may, at times, talk about the wonders, and the promises – but they aren't the whole story, <em>they almost always never are.</em> 
      </p>
    ),
  },


  {
    classes: "verse",
    html: (
      <p>
        There's a reason why scriptures need to be revised time and again
        despite all of them saying the same exact thing. They push forward
        what's best in us, and{" "}
        <em>graciously forgive the shortsighted failings</em>. Therefore, this
        interpretation of the differing perception of God being contingent upon
        one's state of mind – I will leave up to the reader to decide for their
        self – you do you.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Who am I do dictate what God should feel like to you? And if I am nobody
        to dictate such a ridiculous notion, what good is anybody else to do the
        same? What manner of human has that right, but your Self?
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <em>This is Your interpretation of the Source – </em>
        <br />
        <em>Don't hang by the words I feed you</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Whatever your conclusion thereon, just know that it will have been your{" "}
        <em>own interpretation</em>, and <em>yours only</em> – other people do
        not have to agree with you – it is up to you to convince them{" "}
        <em>peacefully</em> of your interpretation. Do it in the most poised way
        you know how, or do not do it at all. Let others bodies be as they want
        to be – your fulfilment and enlightenment as a sentient being, is not
        tied to <em>their</em> <em>personal</em> self-actualisation. Get a grip
        on your own life first, and then preach.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You aren't responsible for their eternal judgment.
        <br /> You, as a human, are truly, only responsible for your{" "}
        <em>own self</em>.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        Sure, by the end of Scova, you will have realised that there is just one
        self – <em>the Self</em>, and{" "}
        <strong>
          there is nothing else in this world but the self and God
        </strong>{" "}
        – but I'm getting ahead of myself here. Having said that, for the
        purposes of simplicity, tradition, and others that I will{" "}
        <em>reveal later</em>, I prefer to address God as a HIM. God is still gender
        neutral – but the aura surrounding His presence isn't – you decide that
        when you see IT.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Sure, in my younger years I have had certain inclinations, and I have
        more often than not erratically acted on them – but that in no way makes
        a current state of mind, the self's abject reality. That also does not
        mean that just because something isn't true for the entirety of your
        life, for all your breathing moments – that it wasn't true in the moment
        that you were experiencing it. Grow, adapt, evolve, and most of all –
        learn to accept yourself, life gets better that way.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Disregarding perceptual influences on the internal narrative reduces the
        sentient experience. Not everything is purely black and white. There are
        shades of grey, and all perceivable colours that don't fall on the
        spectrum. Yes, this is a reference to the black and white perceived
        normality and the perceived contrast of the rainbow.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This sparse texture, this lack of colour in the perceived norm of black
        and white, is exactly the kind of thing that the scriptures have warned
        us against. On the flip side too, this idea that parts of the spectrum
        can be binned into demarcated subdivisions is innately absurd, and
        flawed.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In reality, the situation is quite nuanced in a manner that has not thus
        far been discussed. Why does the rainbow not include the ends of the
        spectrum that are black and white? In modernity's attempt to
        demarginalize the disenfranchised, the esprit of the perceived normative
        has been restricted within a perimeter whose boundaries were never
        supposed to be drawn anyway.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          "Ye are the salt of the earth: <br />
          but if the salt have lost his savour, <br />
          wherewith shall it be salted? <br />
          it is thenceforth good for nothing, <br />
          but to be cast out, <br />
          and to be trodden under foot of men."
          <br /> (Matthew 5:13)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Truly, such is the case with the perceived majority of my time. Many
        would say that this was necessary to counter the millennia of oppression
        that "their kind" brought upon the minorities. It may be true in letter,
        but you have to understand that the factions you may be inclined on
        "oppressing" do not necessarily comprise the same souls that previously
        did the oppressing. Arguably, you could be doing more damage right now
        by taking revenge on the so called oppressor of the times gone by, and
        torturing the souls that may, in fact, have previously occupied the
        bodies of the oppressed.
      </p>
    ),
  },


  {
    classes: "verse",
    html: (
      <p>
        Why this disconnect with <em>the other </em>then? Why the judgement
        without careful examination? Why, instead of accommodating someone
        else's point of view into our own mindset, and creating a new, enriched
        understanding, do we almost always have to push for an either-or
        scenario? What's with the extremism? Why do all these works made with
        the purest of intensions always lead to the same detriment? Wanting the
        entire world to believe you own interpretation is also highly
        ego-centric, don't you think?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You are <em>only</em> a human. <br />
        Put your own house in order first, before you go around demanding social
        revolutions.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        There is an <em>intrinsic</em> order to this world, makes itself
        apparent in a sea of chaos, which is why the traditions of continuity
        have existed, and persisted for so long, for a reason – I don't intend
        to uproot <em>all</em> of the good foundation just because I want to
        appeal to a wider audience, or because I want to write something that
        goes along the <em>currents of my time</em>.{" "}
        <strong>Life is not a zero-sum game</strong> – there's something in it
        for everyone, and the Absolute Truth encompasses all of it, from
        everyone's perceptive.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I also, will blatantly disregard any and all attitudes that have creeped
        up to this time because of our failings as a collective, as those have
        been deemed unworthy of being preserved for posterity if sentient life
        on this planet (and further) has to
        <em>thrive en masse.</em>
      </p>
    ),
  },
  
  {
    classes: "verse bible",
    html: (
      <p>
        <em>"And you, be ye fruitful, and multiply; </em>
        <br />

        <em>
          bring forth abundantly in the earth, and multiply therein."
          <br />
          (Genesis 9:7)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You see, the purpose of life in not to blindly reproduce and multiply. I
        can see why that can be presumed, and based on that assumption,
        everything else that strays from this mandate can be perceived as
        unnatural – after all, God Himself said this. Of course He did so
        indirectly – but He did. He did not necessarily mean what you
        comprehended.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What humans assumed on having read this verse is altogether a different
        matter. The part to focus on, in this verse, is not the pleasurable,
        multiplying aspect – but the pushing forward of humanity, or sentient
        life itself so that the collective thus formed, is able to "breathe in"
        and comprehend the Divine Plan as it unfolds in real time, in a way such
        that it thrives in true Darwinian fashion – by building up, and not just
        tearing down. It is funny how people can miscomprehend theology just as
        much as other sciences. The common denominator is obviously at fault
        here – blind misinterpretation without clear perception.
      </p>
    ),
  },
  
  {
    classes: "verse",
    html: (
      <p>
        Your beliefs should have a root in your <em>own</em> solid understanding
        of the world through your <em>own</em> experiences. They shouldn’t be
        predicated on societal acceptance, cultural traditions, and most of all
        – reading the end results of someone else’s Journey,{" "}
        <em>mine included</em>.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        Ordinarily, I wouldn’t even mention the impending, but{" "}
        <em>definitive apocalypse</em> in a conversation, much less in the only book I will ever
        write – but if not <em>here</em> then where, and if not <em>now</em>{" "}
        then when? If I don’t have the courage to talk about{" "}
        <em>the Rapture</em> in the book that's supposed to contain the plan for
        afterwards – a book that nobody has read, and will read for a
        considerable amount of time, how can I be entirely honest in the{" "}
        <strong>only</strong> work that gives my life purpose?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is a very famous quotation that “all roads to Hell are paved with
        good intentions.” I don’t doubt that, not in the slightest. I do,
        however, wonder and worry tremendously, about the degradation and the
        degeneration of individuals in particular, and societies at large, that
        occurs several generations after <em>any revolution</em> has triumphed,
        and slowly died down.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What I have pondered over, and the conclusions that I then arrived at,
        would be the subject of another book, and as such, not comprehensible to
        a major subset of human population. Despite that, what I can, and am
        permitted to, write about, is something much more substantial, that will
        help humans <strong>renew</strong> their covenant with God in a way that
        they <em>understand best</em>, and are <em>most comfortable</em> with.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What I am really proposing here, in indirect terms, is the{" "}
        <em>formulation of a new religion</em> – because that, despite what you
        may have been led to believe by your own volition or a corpus of
        external forces, is the need of this time. To get to the point where I
        have wanted this movement to have gotten, I see only two options with
        high chances of success.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The first one being the easiest – tyranny. History is proof that you can
        have the best intentions at heart, and <em>believe</em> that you have
        God’s support, yet descend into tyranny when tested against the currents
        of the time. On one hand, <em>forced conversions</em> are a very
        effective way to bring all the people together – regardless of their
        customs, previous beliefs and existing understanding of life – into a
        single entity so that an outward appearance of unity can be seen; but
        that’s just it – it is just the <em>appearance of unity</em>, not an{" "}
        <em>organically developed harmony</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I could slap the modern sticker of diversity on it, and to counter them,{" "}
        <em> </em>you could propose a plethora of ways in which{" "}
        <em>
          forced conversions of a subset of people into a new, unfamiliar
          ideology is – all in all, just the most dumb idea in the world.{" "}
        </em>
        I already condemn it, so any further discussion would be a waste of
        valuable space, and will lead entities to find loopholes if I propose a
        list of any sort.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        As such, these radical entities will let themselves believe that any
        list of reasons I give to discourage any negative act, will be
        exhaustive and an end unto itself; and that any other reason that I will
        most definitely have not mentioned will count towards the encouragement
        of said negative act. Those entities are the <em>scum of the earth</em>,
        and should be treated as such. Such entities will never find a place in
        Heaven, and it will have been nobody’s fault, but their own self.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Another option, the very unlikely, almost impossible option, is for
        myself to <em>perfect the application</em> of{" "}
        <strong> this knowledge </strong>that I am about to impart to you, the
        reader, to such an extent that I achieve for myself <em>the limit </em>
        of what is possible for a person with <strong>this knowledge </strong>–
        and put it to <em>good use</em>. You have already been made aware of a
        bunch of things, so if you weren't paying attention, I suggest that you
        go back to the beginning of Scova everytime you feel like you aren't
        following the narrative. It is how I have written it – so it makes sense
        to read it that way. Of course, it goes without saying, but I have to
        say it anyway – read Scova however you want, and wherever you want.
        There's a reason I put this up on the internet before I put it on paper.
        God is present everywhere, so it doesn't make sense anymore to{" "}
        <strong>only</strong> read a revered book in a particular setting.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “Therefore thy gates shall be open continually; they shall not be shut
          day nor night; that men may bring unto thee the forces of the
          Gentiles, and that their kings may be brought.”
          <br />
          (Isaiah 60:11)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        A belief system, like any system, needs regular upgrades to stay
        purposeful. It is not so much corruption, as it is the withering away of
        an entity stagnant in time. Over time, people learn, grow, adapt, and as
        intended, they get smarter. They then start to game the system to gain a
        competitive advantage – as is the Law of Nature. Darwinian to the core,
        the system is unforgiving to entities that are stagnant in time. That's
        what the Rapture is – the abolition of the Church, all of them. Your
        home is the house of God, your body is a temple, your workplace is a
        place of worship – why do you still consider a temple relevant, or Holy?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Even still, temples as places of congregation and public gatherings
        could still be relevant, but why don't we give the Sacred stature to
        community centers that are widespread across the globe and try to do
        God's work even more than priests and clergymen? People will resist,
        even though they should know better by now. Therefore, there will be a
        pressing need to achieve harmony after eradicating the antiquated belief
        systems. I will then need to fill up the power vacuum that the
        destruction of said belief system will leave in its wake.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Now, in this case, because the ideals and beliefs, and places that serve
        as concrete metaphors of those ideals that needed to be replaced were{" "}
        <em>humanistic</em>, and <em>non-divine </em>since their very conception
        – the only rational approach is to replace them with{" "}
        <em>revised Divine ideals</em>; and because we are inherently selfish
        and ego-centric, we would also like to know what’s in this ideal for our
        own puny selves that we should restructure our entire individual lives,
        focus our cultural and technological developments, and our economic
        resources towards the development of said ideal.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To that end, I would like to present{" "}
        <em>
          the ideal of a life well lived, of a fantasy properly fulfilled, of
          acquisition of worthwhile knowledge and the harnessing of its innate
          potential – all in all, of time well spent
        </em>
        .
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If that doesn’t sound enticing to you, then you should definitely read
        ahead, and if it does, then I hope you are already leaning forward in
        your stance – intrigued at the very least. If you are reading Scova{" "}
        <em>before</em> the Rapture, you're probably just assuming me to be
        another charlatan. I can forgive that. I wouldn't give in so easily
        either.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In that regard, this chapter, is supposed to frame the problem, whose
        importance I will have to highlight, and defend, and by the grace of
        God, The counter measures that I will propose thereon, will be put to
        good use. You could see this from the point of view of Artificial
        Intelligence, wherein, to describe a model world, some axioms are simply
        stated so that other, general problems may be then solved, given those
        assumptions.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You could also see it as me, asking God, about where did it all go
        wrong? Why are we in such a state of affairs? Old questions about life’s
        sufferings and inevitable death notwithstanding,{" "}
        <em>what the fuck is life</em>?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Now that I have told you what has been on my mind for most of my life, I would like to
        rephrase what the two books in Scova really depict. <em>Alethia</em>{" "}
        states – <em>what the fuck life is</em>; following that, <em>Neeti</em>{" "}
        gives you the answer to –{" "}
        <em>
          how the fuck do I live, and why does it feel so unnecessarily
          difficult
        </em>
        ?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Sure enough, being born in the spacetime that you were born in, you
        would not have settled for a 20 something person giving you advice on
        how to live life. Sure, you could’ve heard him all through his wild
        speculations about what the world is, as long as you did not have to
        commit anything personally; but to take his advice on something he
        hasn’t personally experienced? Yeah, big no to that.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Would you have heard a 30 something person advise you on the same?
        Probably; but by then I would’ve already committed myself to my own
        life, because what level of a hypocritical coward would I be if I never
        tried and failed for myself at living a life while peacefully coexisting
        with my close companions anyway?
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “In whom also we have obtained an inheritance, being predestinated
          according to the purpose of him who worketh all things after the
          counsel of his own will: That we should be to the praise of his glory,
          who first trusted in Christ.”
          <br />
          (Ephesians 1:11-12)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        As God planned it, the knowledge narrated and imparted to me would be
        put in the crosshairs of the world around the time I was a 40 year old.
        That’s probably the right time to give someone solid life advice –
        because then you know it has come from personal experience that is
        wilfully acquired through personal growth, and not from unfulfilled
        blind chase of some unrealistic ideal.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        As is most often the case with inexperienced people, they are more than
        likely to fight tooth and nail for an ideology about the conception of
        which they have no idea, and in whose development, they are seldom
        involved. That, to me, goes to the very heart of the{" "}
        <em>pathology of ideological possession</em>. To quote from an
        interview, given by one of the few people whose <em>articulation</em>{" "}
        and <em>resolve</em> I have truly come to respect, Jordan B Peterson, on
        the subject of a purely ideological conversation:
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        “I am not hearing what <em>you think</em>, I am hearing how you are able
        to present the ideology <em>you were taught</em>; and it’s not that
        interesting –because when you do that, I don’t get to know anything
        about you.
        <br />
        <br />
        I could then replace you with someone else with the same ideological
        leanings, and that means that you’re not here.
        <br />
        <br />
        It’s <em>not pleasant</em> – because you are not integrating the
        specifics of your personal experience with what you’ve been taught, to
        synthesise something that is <em>genuine</em> and <em>surprising</em>{" "}
        and highly engaging in the narrative sense as a consequence.
        <br />
        <br />
        And it’s not good, because then, <em>why have a conversation</em>? I
        already know where you stand on things.”
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This, to me, has been <em>THE</em> most enervating aspect of having been
        born in this specific spacetime; because, for a very long time, and
        especially more so after the Summer of 2017, I had only wanted to have
        genuine, heartfelt, and empathetic conversations with, really just,
        everyone. I talked to people directly on this subject, mentioned it off
        and on in texts, and even made it my social media bio for a very long
        time:
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: <p>“Let’s have a conversation, not a collective monologue.”</p>,
  },
  {
    classes: "verse",
    html: (
      <p>
        To me, it was just the most vibrant philosophy to be engaged with for an
        entire lifetime – have truly honest conversations without pandering or
        societal pressure of political correctness, out of pure curiosity and
        without malice of any sorts. Sure enough, as it was written over two
        millennia ago, my life had to play out like clockwork, even though I
        would almost always have no idea about it happening beforehand.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “But first must he suffer many things, <br />
          and be rejected of this generation.” <br />
          (Luke 17:25)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Even if it was written in scripture, that did not necessarily mean that
        I couldn’t find reasons for their occurrence. I was deeply saddened when
        I was first <em>led to read</em> this verse, angry even, but mostly
        disappointed – for I had much to offer, and no takers for this knowledge
        in a world where the validity of your knowledge was judged by the number
        of people already talking about it.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Surely, nothing new under the sun could be explored and shared under
        such a paradigm. According to my best judgment, I had something entirely
        novel, something at the level which nobody on the planet during my time
        could have possibly claimed – well, maybe the inventors of the internet.
        <em>I would gladly share the stage with them. </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So then I found myself with two options again, this time, my vision was
        focused on my personal confine of influence, and not the world at large.
        The first choice was for me to keep hankering friends, and family, and
        any and all persons I could find, and try to <em>force them</em> to{" "}
        <em>find out for themselves </em>what I had truly found – to find out if
        people, who I had previously thought of as being better than me in most
        aspects, could replicate something that I had in an even better fashion.
        The second option was to could explore the limits of the application of
        this knowledge that had been freely imparted to me, and use it in the
        way I knew best, in a way that exceeded imagination, in a way that
        fulfilled the <em>purpose I've been built for</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I tried the former approach for a very long time. It was exhausting, and
        to be very honest, demeaning.{" "}
        <strong>
          {" "}
          This was the Word of God, and I was going around like a street urchin
          crying out loud for acceptance.{" "}
        </strong>
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “Give not that which is holy unto the dogs, <br />
          neither cast ye your pearls before swine, <br />
          lest they trample them under their feet, <br />
          and turn again and rend you.” <br />
          (Matthew 7:6)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I did not like it, and I most certainly did not like who I was going to
        become if I were to continue down that path. I would especially not have
        liked it when my social bubble would surely expand, to include the
        entire world as it were.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So I bowed my head down, and trusted that as{" "}
        <em>every dog must have its day</em>, I too, was to have mine. I did
        have an advantage – I was told the exact date of the very day that would
        mark the inflection point in my own life, and the lives of everyone I
        was going to affect in the process – <strong>May 9th, 2032 CE</strong>.
        Not many people get that kind of reassurance, but{" "}
        <em>
          those people aren’t born with a divine ordained purpose now, are they
        </em>
        ?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Naturally then, I started to mind my own life, and skewed away from
        trying to influence other people before I was in a position,
        spiritually, socially, financially, and physically, to nudge people in a
        direction that helped them in bringing about real change, in themselves,
        and in their own bubbles. I stopped hoping for those honest, eclectic
        conversations with strangers and casual acquaintances – and started to
        develop deeper connections with those whom I intuitively knew were to
        play definitive roles in my life.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “He is despised and rejected of men; <br />
          a man of sorrows, and acquainted with grief: <br />
          and we hid as it were our faces from him; <br />
          he was despised, and we esteemed him not.
          <br />
          <br />
          Surely he hath borne our griefs, <br />
          and carried our sorrows: <br />
          yet we did esteem him stricken, <br />
          smitten of God, and afflicted.
          <br />
          <br />
          But he was wounded for our transgressions, <br />
          he was bruised for our iniquities: <br />
          the chastisement of our peace was upon him; <br />
          and with his stripes we are healed.
          <br />
          <br />
          All we like sheep have gone astray; <br />
          we have turned every one to his own way; <br />
          and the Lord hath laid on him the iniquity of us all.
          <br />
          <br />
          He was oppressed, and he was afflicted, <br />
          yet he opened not his mouth: <br />
          he is brought as a lamb to the slaughter, <br />
          and as a sheep before her shearers is dumb, <br />
          so he openeth not his mouth.”
          <br />
          (Isaiah 53:3-7)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        When you pivot to this path that I later chose, you{" "}
        <em>stop thinking about the world at large, and your place in it</em> –
        you start to concentrate on your own tiny existence – you truly accept
        where you are in life, and start to learn to be content with what you’ve
        been given, rather than aspire for something that has yet to come –
        because{" "}
        <em>
          {" "}
          the future, no matter how well prophesied, is still in flux, and is
          therefore, yet unwritten
        </em>
        .
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So then, even though I knew what was in store for me, and the rest of
        the world – I had reached the end of my spiritual journey, truly
        content, and truly acceptant of my true self, knowing full well that God
        concurred too.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Having come to this point in my spiritual journey, I felt it not as a
        task, or a burdensome chore, rather, a moral duty – to share with the
        world, <em>on my own terms</em>, what I had truly found. I did not want
        to live a legendary life that I had expected in the beginning of my
        journey – I wanted a full life, I wanted to run, to take a break, to
        fall in love, to harness my true potential, and impart my knowledge to
        the future generation, all the while knowing full well – that this was a{" "}
        <em>fantasy being properly fulfilled in real time</em>.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        After my <em>42 Days of Freedom</em>, I wanted this power forever. I
        thought I would never lose it. Once I had gained the tacit knowledge
        about the intricate workings of the universe – both inner and outer – I
        thought I could just summon the “magic” anywhere, at anytime. I was
        disastrously wrong. As God would have it, over the next 15 years, I
        would have to learn to acquire this power on my own merit without any
        supplements.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Of course, the way God had planned for things to happen, I did end up
        going back to the shitty life that I had <em>pre-Satori</em>. The only
        difference was that now I was better prepared for what would be thrown
        at Me – better yet, <strong>I had God by my side</strong>. If I played
        my cards right, applied the right knowledge in the right place and at
        the right time, and practiced all that I was planning on preaching to
        the world –<em> I would be invincible</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This was for two very important reasons – the first was to{" "}
        <em>
          show people that what I had achieved in this life could be attainable
          by any person
        </em>
        . The second was a lesson for myself to remember and engrain in my mind
        –{" "}
        <em>
          if I was nothing without this power, then I did not deserve to have it
        </em>
        .
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is a lesson in humility, but also a test of self-determination. If I
        was only doing this in order to gain absolute power over people, then I
        was doing it for the wrong reasons –{" "}
        <strong>and my authority would not be absolute</strong>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If I said that I was only doing this to leave a better world for
        successive generations – I would be partly concealing the truth. I was
        doing this for all of these reasons, but most importantly, none of
        these.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The supreme reason of why I was in this, was that{" "}
        <em>I had found a better way to live</em> – and I simply could not go
        back to the mess that I called a life before{" "}
        <strong>His Intervention</strong>, or as I formally call it –{" "}
        <em>My Judgement Day</em>.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        For most of my <em>post-Satori</em> life, and even during the bootcamp,
        I had understood my purpose in life as to{" "}
        <em>guide people of this time</em>, to the place I informally referred
        to as Heaven. I thought, that my oath towards God meant that I had to
        somehow <em>be the guide</em> for all people, of all nations – all the
        people of this time, my current time, as a sort of a teacher in remidial
        classes, that makes clear some concepts that weren’t properly understood
        by the students.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Reading the scriptures and strategically citing its verses throughout
        the pages that have preceded this sentence, I realised – once and for
        all – that <em>I am not a bloody teacher</em>. I never have been. I
        never intended to be one before God came in to the picture; so why was I
        doing that now? I tried nonetheless. I tried a lot.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        As I said in the beginning of this chapter, I tried to the best of my
        abilities – to engage people, to foster in them a sort of spark that had
        been ignited in me, by God – the childish curiosity that was on the
        verge of dying; and <em>through my internal contentment</em>, possibly
        breathe new life into it.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Whether that spark is alive or not for the people that I had conversed
        with, I do not know. What I do know is that, I am not here to{" "}
        <em>just</em>
        impart knowledge that has remained previously unexplored, and largely
        misunderstood, despite being in the public domain for the PAST TWO
        MILLENNIA.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Don’t ring the damn bell if you <strong>truly don’t understand</strong>{" "}
        why. God isn’t your peon.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Don’t worship the cow <strong>only</strong> because some obscure text
        said so. Find out why.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        Don’t slaughter helpless animals in <strong>vain</strong> sacrifice. Ask
        why.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Don’t sit around a fire pit mumbling obscure chants{" "}
        <strong>without deciphering the meaning</strong> of each and every
        incantation. Ask why.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Don’t <strong>mechanically paint</strong> symbols everywhere if you’ve
        never really been explained the <em>true meaning </em>of said symbol.
        Ask why, or better yet – stare at the damn thing and find out why.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Don’t be afraid to <strong>peacefully interrupt</strong>, and quench
        your curiosity. Ask why.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Don’t be afraid to remove yourself from a ritualistic practice if you
        don’t full agree with it,{" "}
        <em>
          {" "}
          let others ask why and explain to you, as <strong>
            coherently
          </strong>{" "}
          as they can – the why
        </em>
        .
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <strong>Don’t just ask why</strong> just because some dude from another
        spacetime told you so – ask yourself – why?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Don’t think that if someone is engaged in a ritual different from yours,
        they are in the wrong.{" "}
        <em>
          Ask why they’re doing it in that way, and ask if they know the meaning
          behind it
        </em>
        . If they don’t know the meaning, and say that they are doing it only
        because it is tradition to do things a certain way – feel free to
        belittle them. <em>Cause a ruckus.</em> Let the world know that they are
        wrong.
      </p>
    ),
  },
  {
    classes: "verse quran",
    html: (
      <p>
        وَإِذَا قِيلَ لَهُمُ اتَّبِعُوا مَا أَنزَلَ اللَّهُ قَالُوا بَلْ
        نَتَّبِعُ مَا أَلْفَيْنَا عَلَيْهِ آبَاءَنَا ۗ أَوَلَوْ كَانَ آبَاؤُهُمْ
        لَا يَعْقِلُونَ شَيْئًا وَلَا يَهْتَدُونَ
        <br />
        <em>(Quran 2:170)</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If any harm comes to you, just know that whatever their actions towards
        you in that moment, and whatever your actions in that moment, it will
        all be accounted for in front of God – not on some obscure Day of
        Judgement that <em>may</em> never come, but{" "}
        <em>at night when they sleep</em> (more on this later).
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Even if He doesn’t show up physically (which He obviously will not), He
        is seeing it all, and if you were pure in your intensions, no{" "}
        <em>real harm</em> can come to you. He might not give you physical
        strength to defend yourself in that moment, but He will set you on a
        path that{" "}
        <em>
          you truly deserve – one you may not have explicitly wished for, but
          one that He knows is best for you; and in time, if you are discerning
          enough, you’ll agree too.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <strong>Keep in mind:</strong>{" "}
        <em>The intent has to be purely curious, not malicious. </em>
      </p>
    ),
  },
  {
    classes: "verse quran",
    html: (
      <p>
        فَإِنْ خِفْتُمْ فَرِجَالًا أَوْ رُكْبَانًا ۖ فَإِذَا أَمِنتُمْ
        فَاذْكُرُوا اللَّهَ كَمَا عَلَّمَكُم مَّا لَمْ تَكُونُوا تَعْلَمُونَ
        <br />
        <em>(Quran 2:239)</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It doesn’t matter which direction you pray in, or if you pray at all.
        Talk to God in your <strong>private moments, ask for guidance</strong>,
        and He will guide you in a way best suited to your current life, while
        accounting for the skills you can and will acquire in this life.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “But thou, when thou prayest, enter into thy closet, and when thou
          hast shut thy door, pray to thy Father which is in secret; and thy
          Father which seeth in secret shall reward thee openly.”
          <br />
          (Matthew 6:6)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Just because someone’s performance of a ritual is different from your
        performance of the same act, doesn’t mean that they’re in the wrong.
        Don’t ever assume that you know all that there is to know about any
        ritual.<em> You never can.</em> Just because someone is attempting a{" "}
        <em>different version of the same ritual</em> as you, doesn’t make their
        way of doing things wrong.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Do you know what each and every movement of the program you follow meant
        to the entity that first encoded it into a <em>ritual</em>? Does your
        conduct of the same ritual preserve its original meaning? Has it been{" "}
        <em>
          altered ever so slightly to account for the time that has elapsed
        </em>
        between the encoding of the ritual and your performance of it? If it has
        not changed according to the time, chances are, YOU are doing it wrong.
        Don’t perform a set of movements – any ritual – without learning about
        its true meaning and significance. Whenever you repeat this ritual, go
        over what the performance of said ritual means to you, and what it meant
        to the person who first codified it. It is really important that You
        understand what your ritual means.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <em>Others can catch up later</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Each and every ritual has to evolve as the people performing it evolve.{" "}
        <em>Nothing is static in time</em>. It all needs to keep changing or it
        becomes <em>stagnant</em>, and hence, prone to corruption. Ask yourself,
        and the people around you – what does the ritual mean? Not just the{" "}
        <em>symbolism</em> around it, but what{" "}
        <em>changes in the physical world</em> can be seen during and after the
        performance of said ritual? What is the role of each movement, each
        incantation, each and every accessory used in the ritual? Are the people
        surrounding the performer actually affected by the ritual, or are they
        just passive bystanders? Is the performer special in any way for knowing
        how to perform this ritual? Is the performer replaceable? Has the
        performer gained any special skills, or does he possess any special
        knowledge that led him to the discovery of said ritual?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Just a gentle reminder, this performer will <em>always</em> have had
        gained some knowledge or skills for being able to correctly perform this
        ritual. Nobody is just “gifted” or “blessed.” If <em>I</em> had to
        practice consistently after gaining the right knowledge from the right
        source to perform the rituals that I now perform, you can be damn sure
        that nobody on this planet is simply “gifted.”
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is of prime importance that <em>you understand</em> what it is that{" "}
        <em>you are doing</em>, and what it is that{" "}
        <em>you are experiencing</em>. It is <em>now</em>, simply not enough to
        admit that you do not understand, or that you are not capable of making
        your own judgement. If you can live, breathe and interact in the modern
        world with all it’s technology and all the information at your
        fingertips – you best be assured that your mind is capable of
        understanding all that there is to understand about life, the universe,
        and our role in it.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I did; and I have a very average brain. It is all only a matter of{" "}
        <em>resolve</em>, and a <em>bit of stamina</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To explain and understand the universe, we have to rely upon our{" "}
        <em>own</em> perception of it – the organic capability of which,
        incidentally, almost everyone has more or less at the same level. The
        funny thing is, that we are <strong>bound</strong> in our understanding
        of everything because of our <em>finite</em> perceptual experiences. Our
        understanding is limited by the quality and quantity of information
        about the world that we are able to <em>perceive</em>. Thus, to
        understand the universe – or actually – our perception of it – we have
        to{" "}
        <strong>understand the nature of perceptual information first</strong>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is not just that we perceive in a unidirectional manner – wherein
        information only goes in and triggers a response. It is a feedback loop
        of “reflexive self-perception” – more commonly known as introspection,
        specifically, internal perception of the self that <em>mirrors</em> our
        understanding of the outside world. The thinking-being, who operates in
        such a manner, continually develops an all encompassing theory of
        reality as it were as <em>this being </em>passes through life – the
        theory commonly referred to as the their “mindset.”
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Given that this mindset is limited to the experiences, thus perceptions,
        and thus the information intake, and finally, the{" "}
        <em>understanding of a single being</em> – the{" "}
        <strong>absolute validity</strong> of such a model is almost always very
        limited. Now this mindset might be, in most cases, limited – but on a
        very high level (programmatically speaking), it conforms with the
        structure of the very universe that it is modelled upon. Think of it as
        a beginner’s tutorial version of the multi-billion user app that
        everybody wishes they had built. A person whose mindset appeals, even
        tangentially, to another being – has the <em>potential</em> to be the{" "}
        <em>Shepherd of the Herd</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Following this logic, <em>Alethia</em> can be regarded as a{" "}
        <strong>subclass</strong> <strong>of the logic </strong>that sentient
        beings employ, but a{" "}
        <strong>superclass of all paradigms of theology</strong> that have
        preceded it.
      </p>
    ),
  },
  

  {
    classes: "verse",
    html: (
      <p>
        To that end, we now have just the ticking nerve that, to me personally
        at least, represents the{" "}
        <strong>bane of every single individual’s existence</strong>, regardless
        of their religious leanings – <em>rituals and routines</em>. First,
        we’ll focus on rituals – specifically,{" "}
        <strong>
          the mechanical performance of any and all encoded rituals in any and
          all scripture – written or otherwise.
        </strong>
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “But when ye pray, use not vain repetitions, as the heathen do: <br />
          for they think that they shall be heard for their much speaking.”
          <br />
          (Matthew 6:7)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You see, no matter what you do to explain to the people about the
        significance, or purpose, of a ritual, or how delicately you handle the
        training involved in the imparting of the knowledge required for the
        performance of said ritual – over time, every ritual is{" "}
        <em>destined to become</em> a mechanical thing that people just do,
        because other people have been doing it for a while.
      </p>
    ),
  },
  {
    classes: "verse quran",
    html: (
      <p>
        وَمَثَلُ الَّذِينَ كَفَرُوا كَمَثَلِ الَّذِي يَنْعِقُ بِمَا لَا يَسْمَعُ
        إِلَّا دُعَاءً وَنِدَاءً ۚ صُمٌّ بُكْمٌ عُمْيٌ فَهُمْ لَا يَعْقِلُونَ
        <br />
        <em>(Quran 2:171)</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        When the philosophical and psychological continuity is lost from the
        original encoder to the current performer of the ritual, the act itself
        becomes obsolete, and as such, <em>should be considered optional</em>,
        if only under the hope that at some time in the future, some
        self-proclaimed <em>master of perception</em> will arise from within the
        collective who will breathe new life into this antiquated act.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <FacebookProvider appId="295988795097494">
        <EmbeddedPost
          href="https://www.facebook.com/2071080513112802/videos/573899893124700/"
          width="100%"
        />
      </FacebookProvider>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        Every act that you engage in, every word you have ever spoken, and
        almost every mental construct that you have had –{" "}
        <em>somebody made that</em>, and because it managed to persist and
        evolve to reach <em>your</em> spacetime, <em>you also</em> do it. The
        world was, and is, built and run by people{" "}
        <em>not much smarter than yourself</em>. The only difference is, and
        was, their <em>resolve</em> – in what they believed.
        <em>
          {" "}
          Whether it was faith – in themselves, or their interpretation of
          someone else's composition – it’s all the same
        </em>
        .
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Each time you perform a certain routine, make sure that the original
        meaning of the ritual is <em>reflected</em> in each and every movement,
        otherwise you’re just following something mechanically, and that is not
        alright. In fact, that is one of the worst possible things you can do
        for yourself, and towards God.
      </p>
    ),
  },

  {
    classes: "verse quran",
    html: (
      <p>
        لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ
        وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا
        أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا
        حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا
        مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا
        ۚ أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ
        <br />
        <em>(Quran 2:286)</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This is why, my relationship with God was not something that I wanted to
        put up in a short article that I posted on the internet, boasted about
        repeatedly, and then mined for likes and shares. It doesn't help that He
        has put me in a position where nobody will listen to me anyway, even if
        I hint (or loudly project) at a possible chance of salvation to all
        those who encounter me – because I <em>rarely ever</em> do it out of
        philanthropic intent. I live through Scova, and grow, and adapt, each
        day.
        <em> I am to told to not seek</em> validation from any other human
        being, for <em>I know</em> that I have His. Not many people can make
        such a statement with such confidence, and rarely ever someone will.{" "}
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Most of the ones who have, didn't really amount to much in their
        lifetimes anyway. They surely had temporal, worldly success in terms of
        limited financial security and conditional social validation – but they
        never truly felt anything different from the ones they were influencing.
        Sure enough, their misdeeds in one life, did not let them feel whole in
        that life, neither did it give them an advantage in the next – this, I
        know for sure. The true prophets, were almost always bizarrely
        prosecuted and ostracised. The concrete details of my own future in this
        life too, are hidden from me – which is surely for the best. I do have a
        guarantee that this will be hardest thing I will ever have done, in all
        of my lifetimes.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I am ready to be laughed at, condemned, and ostracised – I did take a
        pledge to follow through – come what may. Successful or not, influential
        or not, venerated or not, understood or not, I <em>have been told</em>{" "}
        that my life will amount to as much as I can humanly handle, and that
        much is enough for me.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        On the question of what part I am playing in this lifetime, my closing
        salutations will answer that. On the question of my legitimacy as His
        mouthpiece – the first part of this Volume, <em>Alethia</em>, intends to
        answer that. Sometimes addressed to all of humanity, but mostly as an
        internal monologue – it documents my bachelor life and understandings of
        my relationship with God, and by extension – the world at large. I was
        informed of my cosmic legitimacy on my very first encounter with Him,
        but it took me a while to believe it, to believe in Him, in myself, and
        to really, understand what was being asked of me, and how
        <em> He </em>would deliver. Some revelations dawn on me as passing
        thoughts, some are very conscious sit-downs – but mostly, it is an
        ongoing dialogue that surpasses linear time as an ongoing discussion
        across spacetime, tangentially relevant to my internal personal
        narrative, yet related to all versions of me in a way that cannot be
        explained by mere chance, or even insightful discernment. My own self
        did not need much convincing, because God's force is overwhelming, and
        so, by the time Scova is publicly available in its entirety, I will
        already have lived a majority of my life fully convinced of my
        legitimacy –<em> this, also I have been told</em>.
      </p>
    ),
  },
  {
    classes: "verse quran",
    html: (
      <p>
        {" "}
        وَقَالَ لَهُمْ نَبِيُّهُمْ إِنَّ اللَّهَ قَدْ بَعَثَ لَكُمْ طَالُوتَ
        مَلِكًا ۚ قَالُوا أَنَّىٰ يَكُونُ لَهُ الْمُلْكُ عَلَيْنَا وَنَحْنُ
        أَحَقُّ بِالْمُلْكِ مِنْهُ وَلَمْ يُؤْتَ سَعَةً مِّنَ الْمَالِ ۚ قَالَ
        إِنَّ اللَّهَ اصْطَفَاهُ عَلَيْكُمْ وَزَادَهُ بَسْطَةً فِي الْعِلْمِ
        وَالْجِسْمِ ۖ وَاللَّهُ يُؤْتِي مُلْكَهُ مَن يَشَاءُ ۚ وَاللَّهُ وَاسِعٌ
        عَلِيمٌ
        <br />
        <em>(Quran 2:247)</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If I'm not being entirely clear, don't fret just yet; and if the Devil's
        Advocate within you is already contemplating a possible argument of
        predestination versus merit, let me save you the trouble. The entirety
        of Scova is an attempt to answer just that.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This whole thing, this journey that I'm bound to take you on, is a three
        dimensional puzzle, whose pieces fall apart the longer you divert your
        attention away from them; and because it is so complex, you will not
        perceive the whole picture in a single glance – you have to personally
        keep paying attention to each single detail, as your
        <em>intuition</em> and <em>perception of the self</em> allows for a
        richer understanding in ways you couldn't have arrived at by conscious
        analysis alone, and in ways in which I will never explicitly mention.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Let yourself be guided by your intuition, not fear or insecurity, as you
        perceptually absorb all the information coursing through your system as
        you <strong>read Scova by yourself </strong>first, before you go out and
        preach.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        At times the information will be a subtle clue, but mostly, it will be a
        literal definition intermingled with personal experience – really, at
        its core, everything you are now reading is a <em>nudge</em>. Where that
        nudge directs you is very subjective, and what you make of it, is
        entirely your interpretation, and yours alone. Do not expect others to
        latch onto it immediately. Focus on the self for now.{" "}
        <em>
          How you then act upon arriving at a conclusion, from Scova, or life in
          general, is entirely a burden shouldered onto you – as a responsible
          human being, this is the least that is expected of you. Don't forget
          to be empathetic.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The entitled rights of liberty are symbiotic in their relation to the
        expected responsibilities – if there is a disconnect between the two,
        anarchy swiftly follows. We surely don't desire such a scenario after
        millennia of civilisation – otherwise what is the point of anything
        really? Why were the cavemen even taught how to light a fire?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In the old days, they didn't do much writing, it was more action, and
        narration. Bold statements needed to be made, and even bolder actions
        needed to be executed so that their impact would last for generations.
        Myths and legends circulated far and wide, and there was much room for
        error due to the frailties of eye-witness testimony. Now that we have
        tools that provide little resistance in transcribing thoughts to words,
        we are in a good place. We could've been in a better place had there
        been little internal hurdles to jump through to get to a state of pure
        inspiration, but that's one thing I can leave to God, and in turn, He
        can guide you in a way that You know best.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        There is also not a lot of leeway now, as every single move, and every
        click, and every word that is associated with you is under constant
        scrutinisation by the ones under the possibility of being affected by
        your actions, disconcertingly so in most cases. This is one of the
        reasons I didn't put Scova out into the world until it was considerably
        ready. I say <em>considerably</em>, because no work ever will be
        complete in itself.
        <em>
          {" "}
          Nothing is a self-contained sandbox, and the more you perceive, the
          more you'll realise that everything is connected, each to the other in
          a self-perpetuating feedback loop as modulated by the Source Himself.
        </em>
      </p>
    ),
  },
  {
    classes: "verse quran",
    html: (
      <p>
        وَلِلَّهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۚ وَإِلَى اللَّهِ
        تُرْجَعُ الْأُمُورُ
        <br />
        <em>(Quran 3:109)</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In that regard, the Grand Inquisitor always sends a soul in human form,
        such as myself, to aid the{" "}
        <em>
          cause of all humanity – which is to survive, and hopefully – with
          time, effort, energy, commitment, understanding, and empathy –
          self-actualise.
        </em>{" "}
        This soul is intricately entwined into the zeitgeist – both
        metaphorically, and physically. This is done so that this soul lives,
        breathes, acts and behaves in a manner such that the world is an
        inheritance – to be nurtured, guarded, and cultivated. In turn, God
        protects this soul as His own progeny, as a <em>Father, His Son.</em>
        <strong>
          <em>
            {" "}
            This soul can function as a prophet, a messenger, a teacher, or the
            Messiah. That's contingent on God's will, and this soul's
            compliance.
          </em>
        </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Most of the aforementioned Volumes, and others not mentioned, have not
        been written by the human who was directly connected to the Source. They
        were transcribed long after the events had passed, and things were
        mentioned with the rose-tinted lenses of hindsight. The guys themselves,
        were so busy living their legends that they had no time to transcribe
        and make clear all the doubts that would most definitely arise in the
        minds of the people who had no relation to their spacetime. It is hard,
        keeping up with God's synchronicity.
      </p>
    ),
  },
  {
    classes: "verse quran",
    html: (
      <p>
        كَمَا أَرْسَلْنَا فِيكُمْ رَسُولًا مِّنكُمْ يَتْلُو عَلَيْكُمْ آيَاتِنَا
        وَيُزَكِّيكُمْ وَيُعَلِّمُكُمُ الْكِتَابَ وَالْحِكْمَةَ وَيُعَلِّمُكُم
        مَّا لَمْ تَكُونُوا تَعْلَمُونَ
        <br />
        <em>(Quran 2:151)</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This is why, there has been just one{" "}
        <em>religious text of consequence, thus far,</em> that was composed by
        the
        <em> humans Themselves, in tandem with God</em> that would actually
        convey what it really meant to be
        <em>one with Him</em> – the <em>Guru Granth Sahib</em>, a compilation by
        a group of people who, over generations, connected with the Source and
        contributed to this <em>lively</em>, collaborative document. I say
        lively, not because I love poetry, nor do I love the metaphor of the
        Living Guru – it is the literal aspect of the
        <em> living</em> that appeals to me. Why? Read on.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The traditions associated with that Volume too, are being corrupted, so
        that only makes me wonder if My efforts will reap the same results – in
        which case I should just stop writing now. What good is 1000 years in a
        span of eternity? Well, what good is cleaning when you have to do it
        again the next day? What good is any task that reoccurs?
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>"I will declare thy name unto my brethren: </em>
        <br />
        <em>
          in the midst of the congregation will I praise thee."
          <br />
          (Psalm 22:22)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I have wished so many times that I could stop; but I can't. In fact,
        just a short while before writing this very statement, I was
        contemplating the same thing, again. Slowly but surely, God talked some
        sense into me. Like the stern father that He is, He made me realise the
        importance of what I was doing, and would be doing.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        He had already coddled me, let me run loose, made me feel guilt,
        remorse, ecstasy, and all the plethora of emotions and sensations in
        between, but in the end it was probably just a frank talk that I needed
        to hear from my own mouth, in my own words, and my own voice that did
        the trick.{" "}
        <em>
          I love how I can say the most sane thing, and sound, even to myself,
          like the most insane person there will be.
        </em>
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          "Then Jonah prayed unto the Lord his God out of the fish's belly,{" "}
          <br />
          And said, I cried by reason of mine affliction unto the Lord, and he
          heard me;
          <br />
          <br />
          out of the belly of hell cried I, and thou heardest my voice.
          <br />
          For thou hadst cast me into the deep, in the midst of the seas;
          <br />
          and the floods compassed me about:
          <br />
          all thy billows and thy waves passed over me.
          <br />
          <br />
          Then I said, I am cast out of thy sight; <br />
          yet I will look again toward thy holy temple.
          <br />
          The waters compassed me about, even to the soul: <br />
          the depth closed me round about, the weeds were wrapped about my head.
          <br />
          <br />
          I went down to the bottoms of the mountains; <br />
          the earth with her bars was about me for ever: <br />
          yet hast thou brought up my life from corruption, O Lord my God.
          <br />
          <br />
          When my soul fainted within me I remembered the Lord:
          <br />
          and my prayer came in unto thee, into thine holy temple.
          <br />
          They that observe lying vanities forsake their own mercy.
          <br />
          <br />
          <strong>
            But I will sacrifice unto thee with the Voice of Thanksgiving;
            <br />I will pay that that I have vowed. Salvation is of the Lord."
          </strong>
          <br />
          (Jonah 2:1-9)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I made a promise, and I fully intend to honour it – no matter the
        resistance (internal or otherwise), or the fear of failure. This is my
        only <em>Purpose</em> in <em>this</em> life. This will be the one thing
        that will outlast my current lifetime, and{" "}
        <em>possibly haunt me in the next one(s) </em>(depending on the
        direction in which things progress).
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          "For destruction from God was a terror to me,
          <br />
          and by reason of his highness I could not endure."
          <br />
          (Job 31:23)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        That being said, I have written Scova with the intent that it be the
        most <em>comprehensive</em>, yet
        <em> scrutable</em> piece of work you have ever encountered. It covers a
        wide breadth of subjects (almost everything), so naturally, there has
        not been much time in my life to get into the depth of all things that
        exist. The most important concepts, and the most scrounging dilemmas
        have been explored in grave detail – as a work like this demands. Even
        still, this is still just the tip of the iceberg, as God, if you are
        worthy, is the gift that keeps on giving the more you ask from Him.
        <em> The worth is decided by the self, in tandem with God</em>. Would be
        very unfair if God didn't take your perspective into account now,
        wouldn't it?
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <em>Allah is nothing, if not compassionate.</em>
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        ਹਮ ਕੁਚਲ ਕੁਚੀਲ ਅਤਿ ਅਭਿਮਾਨੀ ਮਿਲਿ ਸਬਦੇ ਮੈਲੁ ਉਤਾਰੀ ॥੧॥
        <br />
        ਸੰਤਹੁ ਗੁਰਮੁਖਿ ਨਾਮਿ ਨਿਸਤਾਰੀ ॥
        <br />
        ਸਚਾ ਨਾਮੁ ਵਸਿਆ ਘਟ ਅੰਤਰਿ ਕਰਤੈ ਆਪਿ ਸਵਾਰੀ ॥੧॥ ਰਹਾਉ ॥
        <br />
        <em>(Sri Guru Granth Sahib – Page 911)</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Unlike other works, which <em>borrow from the same source</em>,
        including the ones I have already mentioned, this
        <strong> Volume</strong> is meant for the
        <em>entire population of the world (current and future)</em>, not just a
        sect, not a city, not a country, not a race –
        <strong> for all sentient life</strong>. It is filled with language that
        cannot be misinterpreted or mistranslated,
        <em> if perceived correctly,</em> by the original reader.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <em>Everything is conditional, so pay close attention. </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        English is then, probably a poor choice for the{" "}
        <em>Purposes of Posterity</em>, as the language allows for much
        vagaries; but this is the language of this time, and there is a reason
        why I was brought up speaking, reading, and writing this language.
        <em>
          {" "}
          It is precisely for its vagaries that this language is used – if there
          wasn't any room for reinterpretation, people would start following it
          mechanically, without purposeful meaning, and in a way that absolves
          all chances of a newer Me.{" "}
        </em>
        So be watchful when humans in the future claim to translate this work in
        the name of a "regular update." Do let them update it, if English is a
        dead language by then, but be wary still.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Yes, Scova is a continuation of all that has come before.{" "}
        <em>
          This does not mean that all that has been written before this, is 100%
          correct.
        </em>
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <em>Almost nothing ever is. </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>
          No static thing can remain relevant across time, hence, this update.
        </em>{" "}
        What I really mean to say when I call Scova, a<em> Volume</em> in a set
        of all the previous books, is that from this point on, you, as a
        species, should
        <strong> not have to</strong> read anything written before this time.
        <strong>
          {" "}
          Please do read books other than this one; please read the books quoted
          in this one, and most importantly, also read other books dealing with
          other subjects. I can't stress this enough – life cannot be lived by
          only having read one book.
        </strong>{" "}
        The only reason why I have called it a Volume, and not a whole new
        radical ideology, is for the <em>Purposes of Continuity</em> – so that{" "}
        <em>readers after my time</em> can have a fuller understanding of{" "}
        <em>what were the missing pieces in the previous Volumes</em> that led
        to things being the way they were in my time. That being said, I will
        not spend any time talking about the current temporal events, as there
        are other professionals who get fulfilment doing just that.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        As is the nature of life, <em>it goes on</em>. We can only build
        something new, if there is something old to serve as a roadmap. To be
        human, is to learn from one's mistakes, and I sure have learnt from
        mine. If you are already bored, uninterested, or have long judged
        yourself to be a better person than I, then you should just stop
        already. We can start the <em>Rapture</em> without you. It is one of the
        wonders of overpopulation, quite possibly the only one.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To all those intrigued, just make sure that while, and after, reading
        all that I have lived and transcribed, you remember that{" "}
        <strong>
          this is not your understanding, you are only just a reader, yet. The
          experiences in Scova are mine alone, but as has been the nature of my
          life, it is bound to be instantly relatable, in which case – your
          experiences have found a coherent voice, in a way that your own self
          has not been able to express so far.
        </strong>{" "}
        That is my solace. So thank you for letting me.{" "}
        <strong>
          If you don't agree with this voice, feel free to find another.
        </strong>{" "}
        There will have been many false prophets before, and in, my time – and
        all shall fail. So try your luck elsewhere, because
        <em>laut ke buddhu ghar ko hi aate hai</em>.<em> </em>This will remain
        your respite, always.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          "What I tell you in darkness, that speak ye in light:
          <br />
          and what ye hear in the ear, that preach ye upon the housetops."
          <br />
          (Matthew 10:27)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You might be wondering that if this is a book of scripture, then why am
        I going out of my way to exclude some people whom I haven't personally
        met? Hasn't religion always been a place for acceptance? Doesn't God
        love and accept all His children? To that end, I'd say you are right in
        your initial assumptions, but your approach to get to the conclusion
        that you have gotten to, is foiled.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Yes, we are all God's children – in a way that a Creator loves His
        creation. Yes, God loves you, and His love knows no bounds. How can He?
        Everybody loves according to their limits, and possibly beyond too – God
        does not have any limits. Religion too, is a place for acceptance of all
        beings alike, but
        <em>religion is established by humans</em>, and humans have limits, so
        do their constructs. Those limits being clearly defined across spacetime
        as
        <em>
          including only people who may differ in their approaches and
          demeanours and their vibrance, only so long as they have the same end
          goal as the collective that is driving their every decision
        </em>
        .<strong> Everything is contingent</strong>.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        ਬਾਦੀ ਬਿਨਸਹਿ ਸੇਵਕ ਸੇਵਹਿ ਗੁਰ ਕੈ ਹੇਤਿ ਪਿਆਰੀ ॥੨੧॥ <br />
        ਸੋ ਜੋਗੀ ਤਤੁ ਗਿਆਨੁ ਬੀਚਾਰੇ ਹਉਮੈ ਤ੍ਰਿਸਨਾ ਮਾਰੀ ॥੨੨॥ <br />
        ਸਤਿਗੁਰੁ ਦਾਤਾ ਤਿਨੈ ਪਛਾਤਾ ਜਿਸ ਨੋ ਕ੍ਰਿਪਾ ਤੁਮਾਰੀ ॥੨੩॥ <br />
        <em>(Sri Guru Granth Sahib – Page 911)</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To that end, you will find in Scova, a lot that you agree with, and an
        equal amount of disagreement. You will also find things that you already
        know in your own peculiar ways, and equally you shall find things that
        you thought you knew, but did not understand completely. You will find
        contentment, and an equal amount of dissonance as you peruse the
        sentences I have spent this lifetime crafting, while trying to
        coherently convey the thoughts I have been carrying around for all of my
        eternal life.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        At times you will find some overly simplistic clich&#233;s which will
        almost always be coupled with abundantly obtuse technicalities that
        govern your own life. Don't fret. Such is the nature of this work. I did
        not embark on this journey to codify the Natural Law into a humanly
        readable, and comprehensible scripture just so you could coast your way
        through it. You aren't a robot, so don't act like it. That way, you will
        not be bored – at the very least, I will have done my best to stop you
        from being bored – because let's be honest, the foremost defining human
        trait is getting bored with the thing that has already been explained,
        and exploited to its full potential. There is celebration and joy for a
        while – but that lasts only as long as the magic of the illusion is
        still intact.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This illusion is the boon and bane of your experience with God – some
        room for secrecy is initially allowed wherein you truly learn about what
        it is that you are experiencing; but if you keep this up for{" "}
        <em>longer than needed</em>, it turns to a facade. I could point fingers
        at every religious and spiritual organisation in the world, and probably
        take heat for some of them, but I will not – for there is{" "}
        <em>Qayamat</em>. The moment this illusion starts to briefly crumble and
        fade into oblivion, as is the nature of things static in time, people
        very swiftly start to lose "faith" in the thing that has brought them
        all the happiness, and the progress, and the advancement that led them
        to self-fruition.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Adding to that, even though it is abundantly clear, I will still
        positively affirm a few important disclaimers that need to be made
        before anything with the potential to cause proper damage is revealed.
        People have a habit of misinterpreting what is not said.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        First, Scova is <strong>not a call to arms</strong> for people to take
        to the streets, or worse – invading territories, because of their
        disenchantment with the status quo. The time for <em>Crusades</em> and{" "}
        <em>Jihads</em> and <em>Blitzkriegs</em> has passed. We have no need for
        them anymore, we've already established that we are all the same people.
        Perfect yourself first, the surroundings will naturally follow.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Second, this is most definitely <strong>not a seal of approval</strong>{" "}
        for all the people misleading, on purpose or out of ignorance, the
        entities for whose well being they were supposedly responsible, because
        of the writings they read in the books resulting directly out of my
        previous lives. Scova, however, is a<strong> solution</strong>, and most
        importantly, an
        <strong> apology</strong> – this was all a consequence of my doing, and
        it is only fair that I be the one to undo it. So leave that burden to
        me.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Another bit of advice for those proceeding:{" "}
        <strong>
          God lets you pick and choose on what it is that you want to implement
          in your own life, but the moment you start to influence other entities
          seemingly separate from your own self, there is no if-else – there is
          just if and only if – you will have to follow it ALL if you want to
          influence the actions of another soul.
        </strong>{" "}
        Influencing in any manner, that is.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <strong>
          While influencing, know this too – until and unless you have practiced
          all that I have preached, and I do mean ALL of it, you are fallible.
        </strong>{" "}
        I, myself, didn't garner all this knowledge by basking under the sun. I
        surely was not born with it.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <em>
          <strong>I have made all the mistakes firsthand, repeatedly.</strong>
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>Understand this too:</em> Any and all clich&#233;s that you have
        heard about life are true. Abandon all notion that you can avoid
        clich&#233;s. The best thing you can do, is understand the kind of
        clich&#233; you currently are; and see how life plays out for such a
        clich&#233;. If you like your chances, proceed on that path – provided
        your conscience supports it, and God allows it. You'll know where He
        stands through your status quo.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If not, change yourself.
        <br /> If that doesn't help, change your surroundings.
        <br /> If that fails too, change your approach to your surroundings.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>The secrets have always been in the clich&#233;s.</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Read this text in its entirety, and immerse yourself in the pictures and
        insignia while consuming <strong>"the blood of Christ"</strong> under My
        guidance (this obviously refers to psychedelics), and only then can you
        hope to have a modicum of <em>Clarity</em> when you perceive this
        Heaven/Hell dichotomy that most of us categorise as LIFE.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To that end, understand this too – you are not "supposed" to be anything
        that you haven't actually decided to become. You could "supposedly" be a
        lot of things.{" "}
        <em>
          Knowing yourself and the situations you could work in – is the first
          step to realising the things you are going to become.
        </em>{" "}
        Do not think for a second that just because you have
        <em>read</em> the right stuff, that you will feel these things the way I
        have felt.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <em>
          Your life is specifically catered to you and you only, but at the same
          time, we all will almost always end up as clich&#233;s.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Every clich&#233; unravels into another one. This happens in a way that
        is <em>personal to you and only you</em>. Nobody else will truly, fully
        relate to what you have experienced. Someone else's decision in a
        similar situation might not completely resonate with you if you haven't
        understood their situation deeply enough.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        On the flip side, somebody with a situation{" "}
        <em>drastically dissimilar from you on the surface</em> might hold the
        Key to the Gate you have found yourself standing in front of repeatedly,
        for a long time. So pay heed to what people around you are saying, and
        not saying – but understand everything <em>within the context</em> of
        your own confine.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>
          The decision to put faith in your interpretation of the situation and
          assessment of known variables is yours to make, always.
        </em>{" "}
        It might be affected by imperceivable factors, but try your best to keep
        track of the ones you can perceive, and hope for the best – for
        <em>
          this is the only freedom we've all got, so you owe it to yourself to
          hone it properly.
        </em>
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          "Believest thou not that I am in the Father, and the Father in me?
          <br />
          the words that I speak unto you I speak not of myself:
          <br />
          but the Father that dwelleth in me, he doeth the works."
          <br />
          (John 14:10)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The only true decision you will ever make is to find out what kind of a
        stereotype you were, and what kind of a stereotype you want to be. All
        the steps in between – you will have to navigate through, throughout
        your life, <em>almost always listening</em> to what He is trying to tell
        you, because He is always listening to You. Let this serve as a guide to
        wander through life in the best way only you could.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>Baaki, Allah maalik hai.</em>
      </p>
    ),
  },
  {
    classes: "salutation",
    html: (
      <p>
        – Anhad
      </p>
    ),
  },













  {
    classes: "demarcator",
    html: <hr />,
  },

  {
    classes: "chapter-title",
    html: (
      <p>
        7 <br />
        Faith
      </p>
    ),
  },


  {
    classes: "verse title-quote",
    html: (
      <p>
        <em>
          “But Jesus said unto them, <br />
          A prophet is not without honour,{" "}<br />
          but in his own country, <br />
          and among his own kin, <br />
          and in his own house.”
          <br />
          (Mark 6:4)
        </em>
      </p>
    ),
  },


  {
    classes: "verse",
    html: (
      <p>
        The way that we understand reality is through our own mind – meaning,
        that <em>our</em> world can only be explained by <em>our</em> own mind.
        Yes, people can talk about the world for us a species, but to explain{" "}
        <em>your own</em> life – <em>your own</em> mindset – <em>your own</em>{" "}
        way of perceiving situations and things – that can only be explained by
        using <em>your own</em> mind — <em>your own</em> perceptions to explain{" "}
        <em>your own</em> reality.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In a sense – You are the supreme being <em>in your own mind</em> as
        there is none but you – and even when there was no matter to reside in,
        no memories to recall, no information to intake, and by extension,
        nothing to perceive – there was just you. One moment you weren’t and in
        the next, you just were. Sound familiar?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Everything you perceive – goes <em>into</em> you, travels{" "}
        <em>through</em>
        you and comes <em>out</em> of you.{" "}
        <em>You are the informational gateway to your own world.</em> Starting
        afresh, you and your mind – can be directed to be anything and become
        anyone. This progress and development, occurs through the recursive
        perception/introspection paradigm previously defined.
      </p>
    ),
  },



  {
    classes: "verse",
    html: (
      <p>
        To further understand, and explain logic – it is thus important to
        understand the <strong>language</strong> by which ‘we’ communicate
        logic. The phrase, self-configuring self-processing language (SCSPL)
        comes into light when trying to explain the logic that sentient beings
        employ when interacting with their environment.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        SCSPL is just intellectual jargon to say that the language we use,
        configures our interaction with elements of our environment – on whose
        application, some events occur in the surroundings that are then
        perceived by us – causing us to change and alter our method of
        interaction so that our{" "}
        <em>perceptual interpretation of said interaction </em>can influence our
        understanding of the environment.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Yes, all these statements fold in on themselves to explain themselves.
        That’s teleology. You will not learn anything new here – you’ll just
        learn a new way of doing the same stuff that you were doing before this.
      </p>
    ),
  },
  
  {
    classes: "verse",
    html: (
      <p>
        You don’t realise this, but life never simply takes us from one state of
        being to another. It happens in the form of loops – <em>time loops</em>{" "}
        – some good, most bad, overall, largely okay. This progress, largely
        focused on the self, and others close to one’s self, which by extension,
        would only help push forward the self – operates through various
        emotions, social constructs, innate abilities and other such internal
        subprocesses. The operating principle of these subprocesses is based on
        the familiar fractal equation:
      </p>
    ),
  },
  {
    classes: "verse equation",
    html: (
      <p>
        <img src={fractal_equation} />
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>
          Why fractals? “All scientific knowledge has fractal properties, that
          no matter how much we learn, whatever is left, however small it may
          seem, is just as infinitely complex as the whole was to start with.”
        </em>{" "}
        That, Isaac Asimov knew to be the secret of the universe. To quote
        Giuseppe Damiani, “if a system is controlled by a set of completely
        deterministic rules, its behaviour may be unpredictable because
        measurements (of this time) are not precise enough to distinguish nearby
        trajectories that may later diverge because{" "}
        <em>
          similar physical laws and forces acting in the same way at different
          levels, produce structures with self-similarity at different levels
        </em>
        .”
      </p>
    ),
  },
  {
    classes: "verse image quote",
    html: (
      <p>
        <img src={harmony} />
        <br/>
        <em>
          “Pretty pictures in the appropriate minds <br />
          lead to pretty problems, and entire new fields.”
          <br />
          They don’t call the Mandelbrot, <br />
          the thumbprint of God for no reason.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Recent developments in the <strong>science of reality theories</strong>{" "}
        have been reaching an inflection point wherein, to move forward and make
        any substantial progress, they have to first{" "}
        <em>detach themselves from talking only about material objects</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The aim of scientists, is to discover and to explain regularities in the
        patterns of natural phenomena. Even so, there is a difference between
        the irregularities of the real objects and the regular unchanging
        blueprints that govern them. In particular, the genesis of <em>form</em>{" "}
        in nature is an important issue which gives rise to many controversial
        explanations.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is important, then, to consider not only the isolated objects, but
        also the <strong>network of relations</strong> existing among them. One
        of the pioneers of <em>Alethia</em>, Aristotle, in De Anima, set out to
        enquire into the nature of the soul – but before that, he said, that to
        enquire into the nature of any phenomenon, you have to first decide if
        whether it is the <em>act</em> you want to study or the{" "}
        <em>thing that facilitates</em> said act.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The most prominent theories dealing in the nature of reality are the
        theory of Chaos (formally: Complexity Theory), the theory of
        self-organising systems, and the Intelligent Design Theory. It has been
        widely speculated and observed, that chaotic behaviour is the result of
        non-linear interactions between different elements of a complex system.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To that end, I could just end Alethia here stating that
        <em>
          the universe operates on the Intelligent Design of Chaos, which is
          only perceptible to the human eye/mind via the illusion of order which
          can be seen as the system rapidly self-organises.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Since any statement can be open to misinterpretation after millennia, I
        will delve much deeper into this one, because weird things happen when
        important things are left unsaid, especially so in the field of
        religion.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It also needs to be stated here, in the very beginning, that the basis
        of reality is not matter, as was the traditional view. It is not even
        purely information as is the current, modern, view. It turns our that
        there are a lot of physical and perceptual layers to reality.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        These layers are multifaceted, in that they get expressed in different
        ways in different scenarios and under different states of mind, but{" "}
        <strong>at the very basic level</strong>, programmatically speaking, the
        physical reality is is a two part composition – the first one comprising
        the <em>Strings of Time</em> through which energy travels.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Sounds made up? Maybe <em>“samay ke dhaagey”</em> will ring a bell for
        some.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The <strong>Strings of Time</strong> form the structural scaffolding,
        and govern the movements of all that is that you can and cannot see.
        These strings start from infinity, go through each of the base
        indivisible expressions (BIE) of matter which{" "}
        <em>loop around in a rendition of the trefoil knot</em>, and go back to
        infinity again. This holds true for every BIE of matter that has, or
        will ever exist. As these strings twist and turn and bend – they give
        the <strong>illusion of space</strong>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        When these strings do form knots, as is the nature of bending, looping,
        and intersecting strings, they trap energy within a definite expressed
        area – and as Einstein has proved mathematically in the previous
        century:
      </p>
    ),
  },
  {
    classes: "verse equation",
    html: (
      <p>
        <img src={emc} />
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <em>Energy in a definite space equals mass.</em>
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        So, it turns out, that humanity’s traditional understanding of their
        surroundings was almost right – matter and energy do form the structural
        basis for the physical reality – although, not in the way that we have
        classically understood. This too, is not the whole story.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        As humans, however vast the physical world exists for us, an equally, if
        not more, expansive world exists in our minds. If the classical view of
        matter/energy is right, it would hardly seem fair if we{" "}
        <em>disregarded entirely</em>, the modern viewpoint of{" "}
        <strong>information</strong> being the base of all that we experience.
        Let’s go back to the Aristotelian notion of wanting to study the act, or
        the thing that facilitates said act. I have already told you that the
        structure of reality is held by the Strings of Time. These strings are
        not to be confused with the poorly conceived, yet emerging String Theory
        which is a misnomer.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I do mean <em>actual</em> strings, not <em>rings</em> as String Theory
        assumes. Our mind too, is a clusterfuck of knotted strings which
        entangle and untangle in a <em>dance</em> of self-reorganisation as we
        traverse through the symphony of space, in time.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The fabric of spacetime thus formed by the criss-crossing of the strings
        of time, operates in such a manner that allows us to live <em>with</em>{" "}
        the inanimate 3D reality with brief interludes of Heavenly projections
        in the astral skew apeirohedron. Formerly referred to as the astral
        plane, the astral “skew apeirohedron” could be best perceived as a
        blanket or a filling of soft-cotton (example) around our bodily self.
      </p>
    ),
  },
  {
    classes: "verse quran",
    html: (
      <p>
        كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ ۗ وَإِنَّمَا تُوَفَّوْنَ أُجُورَكُمْ
        يَوْمَ الْقِيَامَةِ ۖ فَمَن زُحْزِحَ عَنِ النَّارِ وَأُدْخِلَ الْجَنَّةَ
        فَقَدْ فَازَ ۗ وَمَا الْحَيَاةُ الدُّنْيَا إِلَّا مَتَاعُ الْغُرُورِ{" "}
        <br />
        <em>(Quran 3:185) </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The acquisition of access to the astral self comes via an{" "}
        <strong>effective</strong> progress (as in, moving <em>forward</em>, not
        material progress) through the symphony of spacetime in accordance with
        the <strong>Natural Law</strong>, the monotony of which is spiced up by
        the familiar principle of natural selection and evolution, and{" "}
        <em>
          free will of infinite options that, in appearance, don’t exist in the
          physical world{" "}
        </em>
        – only in the inner world, and the astral skew apeirohedron.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This is the ‘c’ in the fractal equation. The ‘Z<sup>2</sup>’ stands for
        your future self that has been through the time loop that you, ‘Z,’ will
        partake in, while <strong> </strong>recursively perceiving/affecting
        your conscious reality via feedback – introspective and otherwise.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This entire paradigm works on one assumption: that{" "}
        <em>the nature of information is that it travels</em>. If information
        does not travel, it can hardly be considered anything. This has been
        extensively documented by physicist, John Wheeler's "It from Bit"
        hypothesis and the corpus of research that it inspired. You could also
        see it as the classical <em>Schrödinger’s Cat</em> problem. Along
        similar lines, the mathematician David Berlinski wrote, “We quite know
        what DNA is: it is a macro-molecule and so, a material object. We know
        what is achieves: apparently everything. Are the two sides of this
        equation in balance?”
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In a similar manner, we conjure a similar proposition:
        <em>
          the constant rearrangement of the Strings of Time that hold the BIEs
          in this extremely complex system of objective reality, dominate the
          observed cooperative behaviour more than the detailed properties of
          the individual BIEs themselves.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Having already posed a doubt in your mind about human beings being much
        more than their molecular composition, the question can then be
        generalised into the form –{" "}
        <strong>
          what separates an inanimate knotted string complex from an animate
          knotted string complex? Animate here being defined as the apparent
          presenter of free-will as shown via the complex’s traversal in
          spacetime; and inanimate being one that does not seem to engage in
          such a traversal.
        </strong>
      </p>
    ),
  },


  {
    classes: "verse",
    html: (
      <p>
        Keeping that in mind, the overall goal of the Alethian Model of Reality
        is to provide a new perspective on the{" "}
        <em>widely read and believed and worshipped</em> paradigms of reality
        according to the most acclaimed religious texts – the foremost reason
        for this being the{" "}
        <strong>
          restoration of science and religion as a symbiotic whole{" "}
        </strong>
        as they deepen and expand in scope.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To accomplish this, a certain few requirements have been put forth by
        the collective consciousness of this planet thus far. The focus of my
        discernment over the next hundred pages would be:
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <em>
          The answer to the Unified Field Theory that aims to reconcile quantum
          theory with Newtonian physics which affects and is affected by the
          subjective consciousness’ interaction with the objective material
          reality in a self-determining feedback loop that is altered in and
          after each iteration as material energy travels in the Strings of
          Time, changes in which are interpreted as informational nudges which
          travel in the Modular Conduits of Perception, thus creating a layer of
          subjective reality on top of inanimate organic composites.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        A key task in doing all this would be a resolution of paradoxes and
        conceptual inconsistencies that have long been a source of
        <em>technical debt</em>, hindering us, as a species, to progress to our{" "}
        <em>true form – which is innately Divine</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To understand the Alethian Model of the Universe – it is important to
        grasp at the very nature of a model – it being defined as a valid
        interpretation of a theory in <strong>its universe of reference</strong>{" "}
        – that is – its explanation and functioning holds perfectly valid only
        if certain conditions are met. This, being reality theory, by definition
        explains everything in the world – no exceptions and caveats as to when
        it does and does not hold. It just has to – for posterity.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I cannot guarantee if people will believe it for posterity –{" "}
        <em>
          some of it is bound to crumble because of the limitations of the
          language of this time{" "}
        </em>
        – just like past books have become open to misinterpretation,
        misguidance, and corruption.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Our concern also, right now, is not to get bogged down with artificial
        constructs of continuum and discrete models; rather, quite the opposite
        – to combine the best of both worlds – a continuum that, at its very
        basic – non-perceptible level, allows for discrete, finite jumps. The
        best I can do, is make sure this theory (read: fact – trust but verify)
        does not fall flat on its face as its own implications are unpacked.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To that end, I am very much inclined on calling myself a Guru, one
        connected with the Source as many before me have done, the only
        difference being that nobody else seriously calls me that, <em>yet</em>.
        I still try – to teach people, to make them understand,{" "}
        <em>by the virtue of their own words</em>, about where they are in life,
        and where their true potential really lies.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        On this subject, I have a lot of experience – so much so that I can do
        this one thing without any outside supplements in my body. This
        statement may not mean much by the time I actually show up as My true
        self in front of the world, but it means a lot to the self writing this
        section. Would you like to know why it means so much that I can do this
        one thing without any supplements? There’s a short story involved.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It was a humid, August night in the Summer of 2017 in New York City,
        where I met a future version of me a week before I completed my 42 Days
        of Freedom.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I <em>actually met</em> a real person. He felt insanely smart, was
        freakishly handsome, but it wasn’t who I saw myself as becoming. God
        said that this was the kind of person I’d become if I chose to continue
        walking on my current path at the time – that he <em>mirrored</em> my
        perception of <em>the self that was going to follow God’s path</em>.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <em>I really did not like that person.</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I didn’t know everything about <em>my self</em> at the time, so I
        naturally assumed that I had met <em>Jesus</em> – the Son who had
        supposedly attained eternal life and was now just passing time, showing
        up in random places wherever God commanded him to. I was just told on
        the Day of my Judgement that I was Christ. I took that to mean that
        Christ was simply a state of being – the successful turn of events
        following a Spiritual Emergency. <strong>Now, whether or not that part was open
        for application to every being on the planet, or just myself, I wasn't
        so sure then.</strong>
      </p>
    ),
  },
  {
    classes: "verse image",
    html: (
      <p>
        <img src={jesus} />
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Looking at the picture, you could make the assumption that this was just
        some homeless person that I had started talking to in my manic daze.
        Sure, you can assume that – but knowing what I do know about the
        difference between angelic souls and regular humanistic balloons, the
        discernment was not just a matter of belief in God, or even faith in my
        interpretation – it was a matter of trusting my organs of perception.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I assumed that since I was nearing the end of my bootcamp, that this was
        supposed to be sort of <strong>right-of-passage, </strong>from Christ of
        one spacetime to another, where I was to be given the sole
        responsibility of all the tasks, of which I was told, that I would one
        day <em>have to</em> take up. I didn't have the title then, so I was
        just referring to this whole journey as one where I'd become Christ. <em>At
        least, that was the working theory.</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I was ecstatic, and majorly content with the feeling of it – but also, I
        was conflicted. The guy was dirty, such a needless addict, and couldn’t
        hold a proper conversation. He couldn’t even complete a sentence without
        getting on a completely different, vaguely related tangent.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <em>So incoherent, so dirty, and such a waste of potential. </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I asked him for the details of this <em>Plan</em> that I was supposed to
        carry out in God’s name – but inside my own head, I just wanted to cry.
        There were details that my subconscious interpreted later in the night,
        but in the moment, I just wanted to get away from it all. This was the
        least coherent person I had ever encountered.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In that moment, God’s voice inside my head said, that this was who I was
        going to become if I stayed the way that I did. I would have{" "}
        <em>all that it took to be the man</em> – I could <em>look like him</em>
        and have <em>all the knowledge</em> that he did, but nobody, not even
        myself, would <em>accept me</em> if I stayed the course in its current
        form.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I was overcome to say the least – with shame, with guilt, and with
        remorse. I initially thought that if I had indeed attained Nirvana, and
        seen the “form” of God with all my faults still present, how could
        changing my habits make my experience any better? After all, wasn’t the{" "}
        <em>new-age Jesus act</em> supposed to reflect this new age? Wasn’t I,
        as a Millennial child, supposed to imbibe all the values that reflected
        THIS time?
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <strong>I wasn’t.</strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This wasn’t a new product launch that needed to be marketed to the
        masses with the qualities that <em>they thought they wanted</em>. In
        that regard, Scova, God’s ideas, and my life, are then, not so much as a
        denial of death, or promise of an eternal life –{" "}
        <strong>we all already have that. </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This isn’t a new idea, so I am not inclined to spend a long time
        elaborating it – but I certainly have to, much to my discontent.
        Religious radicals of my time have twisted the collective’s perspective
        on death to such an extent that there is a faction of people who blow
        themselves up in hope of attaining the eternal bliss that, to them, is
        supposedly Heaven. On the other hand, there is another faction wherein
        people kill themselves in isolation in hope that they will have better
        luck in the next life. Also, <em>did I mention abortion</em>?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Death is final, in the sense that this current act of our lives is over,
        and it is a certainty that the next one is due to begin – and that
        should be reason enough to take it seriously; but if that doesn’t
        suffice for you, then how about I bombard you with the fact that even
        though our <em>souls are immortal</em>, to save us from the misery and
        baggage that we are bound to get entangled with while traversing through
        an immortal life, our memories are reset at regular intervals that we
        have come to know as death. Taking your own life, in this life that you
        currently have, is, and always will be{" "}
        <strong>the most heinous crime</strong> you can commit as a human.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To take your own life, is to be the judge of when and where your
        suffering should end, and a newer, cleaner slate shall begin – but
        that’s not your right to have. You can argue about it philosophically,
        or psychologically, or even with human morals, but what is, is true. To
        be the judge of when and where your suffering should end, you are
        equating yourself with God. You are taking matters into your own hands
        then by saying that God doesn’t know when your suffering should end. Be
        assured, <em>He knows the exact moment when</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Either you’ll triumph and overcome in this life, or you’ll dissolve into
        an oblivious death and truly start afresh in the next one. Either way,
        your slate will be wiped clean and you’ll know that your karmic balance
        is perfectly equalised. Isn’t that the truly better option? Knowing that
        what you have, or will have will be the one that you truly deserve? Or
        would you rather want to give up and make such a huge mistake when
        nearing the end of your penance?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You think you have it bad now, you’ve got no legs, no hands, maybe even
        your brain has given up on you – wait for a cure, or suffer through it.
        Either way, wait out your suffering period because then your life,
        whether this one or the next, <em>will get better</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In the beginning of our human lives, we all start with the life that we
        truly deserve as a result of the actions of our past lives. Isn’t that
        the truly just system? Why would you rather put yourself in a worse
        position? Had you been in a human prison, would you risk getting into a
        fight when nearing the end of your sentence?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You are bound to find yourself in a particularly bad situation either
        because of the actions of this, or your past life. If it is the because
        of the circumstances in which you were born into, then it is the fault
        of your past self. If it is because of your own actions, then the fault
        in this is indeed, entirely of your own self. Sure, there were agents of
        change who were instrumental in bringing about your current condition,
        but they weren’t the ones at fault – not with regard to you – at least
        in the Divine Court.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        They are judged separately in their own mental fiefdoms; but also, human
        courts should prosecute them to the fullest extent of their law if the
        perpetrators are truly found guilty, but just know this –{" "}
        <em>you had a key part to play in all your suffering</em>. Regarding the
        whole world as a random set of events that just miraculously happened to
        occur without an overseer and without any rules is entirely ignorant, no
        matter how deplorable, or sympathetic your condition. Of course, if
        other humans start to see your condition as entirely your fault, then
        they are doing more harm to their own self, than they are to you, by
        hurting your sentiments. You can be sure of that.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Be assured that if you do chose the path of the one final mistake,
        you’ll most definitely start off in a worse off place than you are now.
        Adding fuel to the fire will be the fact that your memories will have
        been wiped clean and you will not have the courage, resolve, or the
        maturity in the next life that is acquired with such a horrendous
        experience in this life.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Be warned, that, as has been the case with everything in Alethia, I am
        merely making an observation and extrapolating the repercussions of such
        an observation as narrated and explained to me by the Almighty Himself.
        I cannot even say that I have no skin in the game, because I really do –
        any and all negative consequences arising out of my work in this life
        will haunt me in the next – as will they haunt you.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <strong>
          That’s what I’m trying to tell you here – that I’m not an advocate for
          anything, any ideology, any philosophy, and neither am I interested in
          building a cult that acts as my personal vigilante force by engaging
          in acts of oppression. My only job here is to tell you, to the best of
          my current abilities, what the true rules of the game are.{" "}
          <em>What you do with that knowledge is totally up to you</em>. You
          are, after all, a free spirit.
        </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: <p>Coming to the point of controversy – abortion.</p>,
  },
  {
    classes: "verse",
    html: (
      <p>
        Every living organism, has a soul – the humanistic soul resides in the
        astral bodies of all kinds of living organic entities that exist. The
        soul is without form, but, because of the vibrational pattern, and the
        spacial arrangement of the strings of time, it is seen as a black
        spirited being with two arms and a head. That’s all.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        There is no human soul, there is no animal soul. There is just one kind
        of driving force for all living entities. As far as I have been able to
        observe, the soul moves around in your astral body and only touches your
        human body on the surface of your skin.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Seems like quite a digression when talking about a political issue such
        as abortion. That’s really just the whole point, isn’t it? This is a
        political issue – not a religious one – because scripture states that
        thou shalt not kill. Certainly not humans. Certainly not a child.
        Certainly not an infant.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I will be lying if I said that the issue is as simple as that. I myself
        have tried to run all possible permutations of circumstances and
        variables that could occur and cause a moral dilemma for the doctors. So
        instead of offering a specific cut off time during the gestation period,
        I will leave you with this:
      </p>
    ),
  },
  {
    classes: "verse",
    html: <p>Would you hesitate in wiping away a mass of bacteria?</p>,
  },
  {
    classes: "verse",
    html: <p>Would you hesitate in smashing an ant crawling on your body?</p>,
  },
  {
    classes: "verse",
    html: (
      <p>
        Would you hesitate in killing a housefly buzzing around in the space
        surrounding you?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>Would you hesitate in putting to death a severely ill stray animal?</p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Would you murder a beloved pet for fun? What if there was no fun
        involved?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I have already told you that all living entities have the same kind of
        soul. You already know that we are all made up of the same molecular
        composition. If the anthropomorphic aspect was also removed, and because
        the entity is yet to develop a sentient mind, would you still have the
        same doubts? Take your own feelings about this entity into
        consideration, as the foremost driving factor behind your pending
        decision.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You, as the human with memories, have to live with the decision. The
        killing of humans with memories and sentience is already outlawed
        worldwide, and everyone can agree that it is a good thing. If you can
        live with killing a not-yet sentient, but with memories humanoid blob
        yet to develop into anything substantial, then by all means, go ahead –
        don’t force anyone to agree with your decision. They never have to. They
        are also humans, same as you. The scriptures are clear:
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “Whoso sheddeth man’s blood, by man shall his blood be shed: <br />
          for in the image of God made he man.”
          <br />
          (Genesis 9:6)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If you are willing to risk bad karma, <em>and God’s wrath</em>, then,
        who am I to interfere? Who is anyone to interfere if both the parents
        consciously agree? Until the child is born, that is, until it is within
        that parent’s body – the state has no right to interfere with the
        decisions that the parents might take. This also applies to children who
        may, after my time, be gestated outside the parent’s bodies – until the 
        child is in the gestation pod, the state cannot, and should not, interfere.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Yes, I have called said unborn entities children, and not foetuses, or
        embryos. They are children – your selective interpretation of a language
        structure is not going to change how God views them. If you proceed to
        abort the child before the gestation period has completely ended, know
        full well, that there will be consequences – just not from the state.
        They will be personal in nature, and mostly internally damaging, as all
        punishments and rewards are with God.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <em>
          Our relationship with God, then, is a solace in the misery of life and time.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In that moment, sitting next to whom <em>I thought to be Jesus</em> – I
        was hit with <em>this</em> realisation. I realised the gravity of the
        situation <em>I had put myself in.</em>{" "}
        <strong>This was eternal </strong>– even if I committed suicide in that
        moment, odds were that I would find myself in the same stage at in a
        different space, at a different time, in a different body – and then I
        would have to confront this situation again.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <em>
          This shit was eternal, and demanded that it be done a certain way
        </em>
        .
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I just couldn’t bear it anymore, and as was the theme of my journey, I
        once again sat down on the steps of <em>the Church</em> where my
        connection to God had materialised, only this time, I cried my heart
        out. I asked God to never show me a version of myself before I had
        corrected course. I never wanted to feel that way, ever again.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <em>That was the worst moment of my life</em>.
      </p>
    ),
  },

  {
    classes: "demarcator",
    html: <hr />,
  },

  {
    classes: "chapter-title",
    html: (
      <p>
        8 <br />
        Flow
      </p>
    ),
  },



  {
    classes: "verse",
    html: (
      <p>
        Turns out, at the beginning of this weekend, I was unhappy about a lot
        of things – Him sending me back home by promising me a legendary life,
        but instead endowing me with a mundane one. Then there was the promise
        of me healing my parents, which was conditional (His condition
        obviously) on the fact that I was to tell them EVERYTHING that I had
        done in the time I had been away – all my mistakes, all my lies, all my
        addictions exposed.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        And also, the fact that <em>I was the Son of God reincarnate. </em>
      </p>
    ),
  },
  

  {
    classes: "verse block-quote",
    html: (
      <p>
        <em>
        Now, before you freak out, or blindly dismiss me as a classic bipolar maniac, I suggest you read the book till the end. <br/>
        This isn't a regular story.  </em>
      </p>
    ),
  },

  

  {
    classes: "verse",
    html: (
      <p>
        Turns out, I wasn’t ready to put <em>all of what you've read so far</em> into speakable terms,
        and any attempts to take on a task before arduous preparation almost
        always leads to complementary failures. To that end, God told me to go
        beyond the confine of influence of a single entity, and imbibe the full
        stature of the position that I was honoured with. What?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What did that position mean? What is the Son of God? What does it mean
        exactly to “Be Christ”? I wasn’t raised Christian, or Jewish, or even
        Muslim. How was I to have any remote understanding of this title? Would
        I read? Watch documentaries? Follow saturations of His influence in
        popular culture? I was freely imparted with wisdom during the 42 days
        that I walked with God, but to{" "}
        <em>be Christ</em>? I was told that all the pain and suffering that I
        had been through until that moment in time, and if I so chose, after
        that moment was solely because of the burden that I was going to be
        built to carry properly.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The first time I was told about this, I was honoured, overwhelmed, ecstatic, shaking to the bone, and on my
        knees – naked and afraid for my own life, and all of a sudden – I was
        incharge of everything? This shithole of a fiasco that people called life?
        How was I any better suited, or worthy, or even prepared to be a person
        like that? Before that moment, I hardly believed in His existence (God
        and Christ), so then, what did I have?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        As the night is darkest before dawn, so was the beginning of my romance
        with the hidden nature of reality. If I was to be the true judge of all
        humankind, and execute The Day of Judgement for all souls, it was only
        fair that I had one of my own – well before I was given any chance to
        repent.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        How could I have known to repent? I wasn’t brought up indoctrinated in
        the Gospel, or the Quran. In our house, we barely practiced the rituals
        of the Guru Granth Sahib – let alone some foreign religions which did
        not originate in our homeland.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I had spent most of my life up until that point mocking all that God had
        supposedly stood for in my time. I had always thought of Jesus and other
        messengers as psychedelic adventures in a cave who spent too much time
        staring at their hands and thought that they had glimpsed infinity.
        Before my encounter with God, I had done the same thing that I believed
        other “prophets” had, and I never went out into the world proclaiming
        stuff I knew nothing about.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So then, why now? Even if I had the Holy Spirit coursing through me, I
        did not understand it. Moreover, I knew even little about my own self
        than I knew about the world. Did I qualify for a special status, now
        that I had a fancy title? Not really. Was I just an empty puppet who
        acted as God’s speaker as he spoke into the microphone of my brain? Not
        in the least bit. I was just told about the way reality worked, and a
        major portion of it concurred with my previous understanding of the
        world, sans God. So then, the way things were at the beginning of the
        Journey, I knew some stuff about the world to be true through
        experienced observations, and because I had an average brain, there were
        bound to be others who had the same level of acuity and more experience,
        and logically, they would know more than me. How would I fare then? The
        moment I encountered with someone who had more experience than me, I
        would falter.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        As God’s mouthpiece, I did not have that luxury. I was allowed to make
        personal mistakes, as long as they did not upset the balance of the
        world, which, given my position at that point, would not seem like much
        at that time, but having the knowledge of the possibility of my life
        being much larger in its stature in the near future – I just couldn’t.
        Not without preparation. My complete understanding of a situation, and
        my ability to put it into words was uniquely important to God being able
        to
        <em>speak through me</em>. Only once had I understood a situation
        completely, could God convey the meaning to another person to the depth
        that I had understood it myself.
      </p>
    ),
  },
  



  {
    classes: "verse",
    html: (
      <p>
        See, a conversation, as most things involving information, is fluidic in
        nature. There is a sort of flow, that happens, and is generally also
        observed by the populace, lending to the colloquial expression “go with
        the flow” – which to an enlightened being, means something very literal.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This "flow," is not just a means to express something abstract for which
        a better word has not yet been articulated. "Flow," implies fluidity, of
        something that is not static in nature. For a functioning
        individual – a normal day, in the life of a usual person needs to
        comprise some working hours, or else they might as well have laid waste
        like discarded furniture. Doing something daily, regularly, repeatedly,
        gives a sense of sanity to the person, but also, helps them feel
        productive. This productivity doesn't always have to do with pride about
        the person's mental and social status, their sense of entitlement, or
        even resistance to becoming those that they despise. These are all
        superficial presentations of the same phenomena – all that is stagnant
        in nature, withers away.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You might be inclined to think that the attributes I have called
        superficial, are actually very deeply embedded in the sentient psyche,
        and often require introspection beyond the capacity of an average
        person. I would agree with you on that factor. Like I said, this book is
        not written for those that have not yet read, or read-but-not-understood
        the previous volumes. I am writing Alethia for those beings who have
        surpassed all that was taught before, and have still found the world
        lacking. They have observed and understood the nature of things, perhaps
        more than all their ancestors combined, but have still found something
        in life that truly makes it worth their time.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Our sociopoliticocultural landscape has been saturated with the ideas
        from the previous volumes, and anyone familiar with most pop-culture of
        this time, can gain the knowledge that is a basic requirement to being
        considered a part of the group that I am now addressing. I gained all my
        knowledge from popular culture, and am famous within my confine of
        influence for not having read that many books. This was one small
        portion, of my many failings during my Judgement Day, but let's save
        that part for later.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The point that I want to focus on is the term "flow" – the reason why it
        is used, and the reason why it specifically explains the nature of
        conscious reality, and others do not (they may later, but not to my
        current knowledge). Your actions, by the virtue of the decisions that
        you make with the space you're in, and the time you're at, mould you
        into the person you want to become. It is then, imperative, that you
        take conscious control of it; because until you don't – circumstances
        will happen <em>to you</em> that will shape the kind of person you will
        become, but if you pivot, and take control – like occurs in a way such
        that spacetime moulds itself to suit your internal personal narrative.
        Your belief in God, then, is the modulating force that regulates the
        intensity of these alterations.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        As it turns out, even the Cartesian point of view of the mind-matter
        dualism was correct, somewhat. If strings control the matter, then the
        counterpart for the mind is a modular system of pipes which forms the{" "}
        <em>medium</em> in which all information travels.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I will not, however, stop here because as long as matter and information
        remain separate, with specialists treating one as primary, while tacitly
        relegating the other to secondary status,{" "}
        <strong>dualism remains in effect.</strong> To this extent, history is
        merely repeating itself. My only job here is to not let things continue
        as they were. So, even though strings form the metallic building bars
        (metaphor) and energy is the concrete (also metaphor), there also exists
        informational energy which flows in{" "}
        <em>Modular Conduits of Information</em> (MCI). These conduits are a
        subway-line looking structure as one would expect an informational
        superhighway to look like.{" "}
        <strong>
          This is the <em>second part</em> of the composition of reality.
        </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Sentient beings are unique in that way. We are all connected by ongoing
        traffic lines that I have come to perceive as the <em>Force of Life</em>{" "}
        (literal), or more colloquially, the <em>Chi</em>. It is the
        informational energy that forms the <em>perceptual counterpart</em> to
        the material energy flowing in the Strings of Time. I call them{" "}
        <em>traffic lines</em>, because this energy, flowing in the Modular
        Conduits of Information does, in fact, appear to an enlightened being as
        traffic lines – a kind of <strong>subway map superimposed</strong> on
        top of the <em>surface of all organic entities</em>.
      </p>
    ),
  },
  {
    classes: "verse quran",
    html: (
      <p>
        أُولَٰئِكَ جَزَاؤُهُم مَّغْفِرَةٌ مِّن رَّبِّهِمْ وَجَنَّاتٌ تَجْرِي مِن
        تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا ۚ وَنِعْمَ أَجْرُ الْعَامِلِينَ{" "}
        <br />
        <em>(Quran 3:136)</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        How do I know this? Well, like all vagaries and previously misunderstood
        concepts in Scova, I have <em>seen</em> them in action in front of my
        eyes – both with, and without outside supplements. Experiencing life
        like a regular human being, you will almost never be in a position to
        properly see these things in action – because that would be cheating –
        and God does not let you cheat, ever.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: <p>Not even I, am allowed that luxury.</p>,
  },
  {
    classes: "verse",
    html: (
      <p>
        He might let you fuck around for a while, but as the energy in the
        Strings of Time, and their <em>constant rearrangement </em>keeps the
        world’s entities moving, this short while lasts for a very limited
        interval before{" "}
        <em>
          the control of the situation goes away from your self and onto the
          next instrument of pertinence
        </em>
        , given all variables in your spacetime.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Furthermore, even though the Strings form <em>all</em> that you see (and
        don’t), the Conduit structure is present <em>only on</em> organic
        matter. Having said that, even though I have used the same denomination
        for matter forming energy and informational energy – they are not the
        same. I have also used the terms force and energy synonymously, but what
        would you rather have me use? Spirit? That has caused enough trouble as
        it is.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <em>
          Matter is energy in a definite space; <br />
          Information is the interpretation of the traversal of energy
        </em>
        .
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So, what exactly have I stated here? Up until now, the dualism remains
        intact. In that sense, it will remain that way. What I seek to do here
        is <em>widen the keyhole</em> from which we have been observing the
        world thus far. To really cease the gap between information and matter
        as it exists in our current understanding, it needs to be stated here
        that animated knotted string complexes have the{" "}
        <strong>ability to direct information in these conduits</strong>, which,
        due to their modular nature, can fit in with the conduits of knotted
        complexes that in appearance, are separate from their own self.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>
          When these conduits are thus modularly connected, the knotted complex
          which is currently allowing informational energy though its MCI,
          causes change in the structural alignments of the strings that
          underlay the MCI to which it is connected.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        When you are alive,{" "}
        <em>
          you can direct information to and from different parts of this modular
          system
        </em>
        . When you aren’t alive – you just exist as an empty medium – unable to
        direct anything. There is nothing sacred about a dead corpse, and as
        such, it should be <em>properly</em> discarded back into the biosphere
        in a way such that Mother Nature can truly thank and reward you, and
        recycle the body naturally on it’s own timetable.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Until and unless your soul leaves the physical vessel, there exists in
        you, this capacity to interact with this modular system. It is not,
        then, a far fetched assumption that When your physical form, which is
        the container vessel for the soul, leaves a physical space, your ability
        to direct information to, and from, different modules of this system
        ceases with time. Given enough time, it becomes as if you were never
        there. I do not mean this in the sense that footprints in the desert
        sand disappear quickly. At least I do not mean that in the very
        beginning of your exploration into this thought.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        When you are continuously, repeatedly, interacting in a given space,
        across time – a semi-self-perpetuating feedback loops forms with you,
        the space that surrounds you, the animate, and inanimate knotted string
        complexes that you interact with. If the universe is a self-regulating
        feedback loop, and you are the universe in motion, and if your internal
        systems function in a feedback loop, then doesn't it makes sense that
        the system that you make yourself a part of repeatedly, across
        spacetime, is a feedback loop in and of itself?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Us being the universe in motion, cannot operate on principles that are
        separate from the parent node. The solar system works on a recurrent
        pattern, our years are based on the solar year, our festivals are based
        on lunar and solar recurrences – we have monthly, daily, and even hourly
        cycles regulating our every movement – it is for this reason, that
        habits that disrupt the cyclic flow of the force of life, are almost
        discordant. The habits that act along with this flow, are almost
        blissful in nature, and integrate with our Long-Term and muscle memory.
        This is the reason human beings like mechanical, almost mindless tasks
        that have a recurrent nature. If it is too simple a task, we outsource
        it to a machine, or delegate it to a subordinate. Why do we let go of a
        blissful habit? It is because we like a little something called optimum
        uncertainty to help us keep our attention directed at the task in hand,
        or else, like in everything, <em>the mind wanders</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So, whenever you are in a spacetime situation, if you truly want to have
        an open and honest conversation in which both parties can be vulnerable
        in front of each other, then these traffic lines{" "}
        <em>consciously intersect</em> in such a way that there is a path formed
        that goes via you, through the other person, and circles along the
        surface of space around you, only to come back into you.{" "}
        <em>
          There's a reason why spirited gatherings public squares are often
          precursors to revolutions
        </em>
        . Would you care to guess why?
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “For where two or three are gathered together in my name, <br />
          there am I in the midst of them.” <br />
          (Matthew 18:20)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The Force of Life flows <em>via</em> all human beings, and <em>from</em>{" "}
        the surface of all physical matter. This is why the space that you are
        in, is responsible for the texture in your life. You are constantly
        picking up the Force of Life whenever you interact in any given space.
        It is an ongoing traffic, that <em>flows better</em> once the
        participants in a given space have found a <em>medium</em> to
        communicate in, and an <em>association</em> to communicate about.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What I have found, is that alcohol and <em>most</em> drugs help you
        relax your senses to a limited extent which allows for a much more fluid
        conversation. <em>Mind you</em>, this is a{" "}
        <strong>limited effect</strong>{" "}
        and holds true only up until a certain threshold, which is{" "}
        <strong>different for everyone</strong>, after which the psychological
        relaxation withers away and the physical relaxation takes over, and all
        that really remains is a blabbering mess that cannot seem to hold onto
        any particular train of thought, internal or otherwise.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        The best way to form human relationships is to share information in a
        way that is pertinent to you and in the form that you associate with.
        Your perception is everything that seems personal to your life. It is
        always something about you, and occurs with something that you associate
        with.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So, when it is said that alcohol and other drugs get the participating
        members on the same wavelength as each other, what people really mean is
        that the participating members get on the same{" "}
        <em>vibrating frequency</em>{" "}
        as each other – something that would’ve taken arduous bonding time
        without said substance, thus allowing for a more fluid travel of the
        Force of Life, <em>via</em> the speaking individual, <em>through</em>{" "}
        the listener and <em>back</em> to the speaker while traveling{" "}
        <em>on</em> the <em>surface</em> of all organic material that is
        surrounding them.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What I can then say for certain, is that these substances allow the
        individuals to open up the pores of their consciousness (literally) more
        easily than they would have otherwise. So when I say that in opening up
        in front of an apparently separated entity, you make yourself vulnerable
        – I really do mean <em>opening up</em>.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        This precept is quite valid if your religion-centric mind can get beyond
        the fact that I just said doing drugs and drinking alcohol – socially –
        is <em>acceptable</em> (it is still <em>very</em> wrong, but you’ll see
        why shortly). Mind you, the word I have used is “acceptable.” Like all
        italicised words in the book, pay special attention.
      </p>
    ),
  },


  {
    classes: "verse",
    html: (
      <p>
        To truly experience life to its full extent, you will almost always need
        to open up. Otherwise the “traffic” will just stop when it hits your
        physical body, and not go through you, and will never reach the other
        person. This is the cause for any and all awkward silences that often
        fill the rooms where something radically controversial is mentioned; or
        after a really distasteful joke.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <em>
          And in that moment, that person may as well be talking to a wall.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        When you open yourself up <em>completely</em> in this manner, you
        experience, what I like to call – <em>true emotion</em>. This emotion
        does not depend upon where you are in your personal Journey, and is not
        affected by the space you’re in. Although, it must be said that the
        spacetime synchronicity involved is a major precursor to the mental
        coherence of this emotion.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Even so, it is <em>absolute</em> in terms of the experience it provides.
        Its <em>intensity</em> depends on the entity you are sharing that
        connection with. This apparently separated entity need not be present
        physically to implant that emotion within you, even the idea of{" "}
        <em>it</em>{" "}
        will suffice for you to experience this true emotion.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To truly get to this point, however, you have to drop all preconceived
        notions about the <em>space you’re in</em> and let go of any mental
        hiccups about the <em>time you’re at</em> in your Journey. You might not
        always be in the proper head-state to truly experience a moment to its
        full extent, or the space might not be comfortable enough for you to
        truly absorb the feelings you experience in that moment – but you have
        to let go.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Living life, then, is like a <em>guided meditation session</em> where
        the guide most often tells you to not focus on specific thoughts, but
        instead, just let them pass by. Thoughts come and go as they please,
        they never define you – only <em>your decision </em>to act on those
        thoughts does.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Better yet, be around people that instinctively make you forget about
        all the hiccups you have had when not in their presence. You might not
        always be in a position to let go, but you can find such people that
        make you forget the misery that hovers (literal) over your daily life.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This experience of true emotions comes in brief moments – and in most of
        those special moments, we are more than ready to ruin a chance of being
        our true selves by over-thinking things. Most of us plebeians can barely
        manage to get a moment correct. The concept of the perfect moment – done
        mostly for the purposes of taking a visual memory, is where most people
        reach their limit.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Is the setting correct? Is every prop in the right place? Do the visuals
        of this moment perfectly align with the picture you had in mind? Are
        there any extraneous elements that could possibly ruin this moment? When
        does this moment begin? Does it have to end? Are other people involved
        in this moment? Or is it a solo thing? If you are alone in this moment,
        then, how much of it is dependent on your imagination? What are you
        hoping to get out of this moment – if anything? How does the occurrence
        of this moment affect you? What about others around you? How does the
        exact same scenario change by changing these variables? And if this
        moment can be recreated at a later time, in a different space – are the
        feelings that you get in different versions of this moment even real? Do
        you get the same feelings every time? How much do these feelings change?
        If the feelings have changed, is the moment still the same? (see: Ship
        of Theseus)
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        True emotion only occurs when our train of thought is the opposite of
        the aforementioned paragraph. It requires a level of self-satisfaction
        that most of us are almost-never in a position of attaining. Of course,
        being with the right people helps our cause, and yes, drugs and alcohol
        do help in <em>briefly experiencing</em> such a state –{" "}
        <strong>but only up until a specific threshold</strong>. After that, so
        much control is lost <em>from the self</em> onto the separated entity,
        that it almost immediately results in self-humiliation and validation of
        insecurities.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        We engage in activities that our sober-self would immediately find
        contrary to our lifestyle and beliefs. We end up committing, what in the
        pre-enlightened times would be called, <em>cardinal sins</em>. Life is
        already hard enough for most people without involving the stupidity of
        alcohol and drugs into the equation.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This is the prime reason why they are vehemently discouraged by most
        religions – human beings are stupid enough even without illicit
        substances in their system, nobody wants the complications of their
        after effects. It is a very tricky balance that only a handful few are
        well equipped to keep up with. <em>I wasn’t – for a very long time</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The ongoing quest of my entire life{" "}
        <em>until any given point in spacetime</em> has always been to find
        mundane reasons to explain the supernatural, and as is the nature of
        Alethia – I always end up using the supernatural to explain the mundane.
        And as I have stated quite obtusely just a couple paragraphs ago,
        <em>
          moments of true emotion do not last very long to work well in your
          favour, and if you keep pondering and self-reflecting, much control is
          lost – quite quickly I might add
        </em>
        .
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So when I say that a person needs to be vulnerable to experience true
        emotion, for the force of life to freely flow, I am asking a lot of that
        person. On one hand, they are required to not overthink, on the other,
        if they don’t at least think things through, life can go downhill pretty
        quickly. Why shouldn’t people exploit your inebriated gaffes when you
        would’ve cherished doing the same?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        My advice is, exercise the best judgement you have left, and decide the
        extent of stupidity you are going to indulge in. If you do not trust
        this entity, behave according to the prevalent protocol of your time and
        space. For shorthand – for most things, and most strangers in social
        situations, always <em>assume</em>:
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <em>
          Nobody knows it all,
          <br />
          Nobody cares about all that there is, <br />
          Everybody inflates the truth.{" "}
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If you have to engage in small talk about the weather and sports, do it.
        If you have to take the customary “one hit” to get your foot in, do it.
        If you have to alter your self-identity to try to “fit-in,” then you are
        seeking a validation that you will never truly find. Don’t lie to
        yourself – if you do not get to be your real self in that moment, that
        is only because of the presence of this currently separated entity.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        May you find a group of people who can be loyal, non-judgmental,
        brutally honest – and empathetic of your quirks. Everybody has them,
        quirks I mean. Find people who accept your idiosyncrasies – and don’t
        see you as the person you currently are. They <em>should</em> see who
        you <em>want to become</em>, and <em>assist you</em> however you need
        them, in whichever way that can be deemed necessary through a shared
        consensus.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <strong>
          No judgements. No demands. Always there. Never needing much.
        </strong>
      </p>
    ),
  },




  



  













  {
    classes: "verse",
    html: (
      <p>
        The object of any new writing, any innovative analysis, and any novel
        approach is always to preserve that which is valuable in the old methods
        while adjoining new methods that refine their meaning and extend their
        horizons, likewise, I would like to thank Christopher Michael Langan,
        without whose paper, the ‘Cognitive-Theoretic Model of the Universe,’ to
        serve as scaffolding, my efforts to actually write something empirically
        replicable and verifiable would’ve been met with disappointment and
        self-loathing.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        When I started writing this, I meant for my writing to be an addendum to
        all previous works of metaphysical reality theories and laws – but the{" "}
        <em>technical debt</em> arising from the simplicity of those works, and
        thus, their propensity for misinterpretation has already crippled much
        of what we love and adore about this life giving rock of ours and is
        well on the way to disrupt the other cosmic elements it shares
        synchronous choreography with.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        With that in mind, it is imperative that this work is elevated to the
        highest status, with all of the previous works being regarded as
        subclasses of the <em>Alethian model</em>, whose foundation I have laid
        in this chapter, and whose relevance I will proceed to sketch out in the
        following sections.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This also means that most (not all) theories and principles and
        theologies of <strong>understanding reality </strong>are{" "}
        <em>somewhat valid</em> – but they cannot be allowed any further to
        exist as self-contained sandboxes as they always have affected the world
        in the most intricate and profound ways. They are an integral part of
        the people’s reality – and by extension – their perceptions/actions
        regarding it. They haven’t gone down the gutter altogether. We will
        scrap them for parts.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Science as we now know, will thereby be changed, but it is a tiny
        sacrifice, as in return – fate will smile upon us – and give us vast
        gains in depth, significance and explanatory power, and hopefully,{" "}
        <strong>constructive empathy</strong>.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <em>May you find something that I haven’t yet found.</em>
      </p>
    ),
  },

  {
    classes: "demarcator",
    html: <hr />,
  },

  {
    classes: "chapter-title",
    html: (
      <p>
        9 <br />
        Anathema
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        It is not easy being human. You start doing a “bad” thing once you
        have been wronged by the world. Then, you continue doing that bad thing since nobody corrected you at the “right” time. Slowly but surely, you continue on that path. And now this habit that you picked up without thinking much, has become a part of who you are.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <em>It is how you, and others around you, now define You</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Your relationship with this habit is strange, counter-productive and
        even self-consuming at times, yet, you don’t change. How can you?{" "}
        <em>You have been entangled in the Strings of Your Time</em>. These
        strings move along with you, or rather,{" "}
        <em>you move along with these strings</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        When a loop is formed, and you only have so much time to correct course
        while this loop gets tightened and forms a knot. You twist and you turn,
        you change and you adapt – the knot stays within you – ever tightening,
        always convoluting.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If you could see the knot forming in realtime, surely you would change
        your behaviour, and try a different movement so this loop doesn’t get
        tightened and instead, merely <em>slides past</em> to stay an elongated
        string – <strong>but you can’t see it</strong>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You only have to trust the word of the supposed learned persons and yes,
        maybe follow the example of My life, and hope that your interpretation
        of the information communicated to you, audible or textual or visual or
        tactile, is right, and <em>have faith</em> that you are following the
        instructions correctly.
      </p>
    ),
  },
  // {
  //   classes: "verse",
  //   html: (
  //     <p>
  //       I realise that even while I’m writing this, I know in my heart
  //       (metaphorical) that the above paragraph about loops and knots will be
  //       misinterpreted. What can I do? I’m only human (for now) and this has
  //       been explained to the best of my current abilities.
  //     </p>
  //   ),
  // },
  // {
  //   classes: "verse",
  //   html: (
  //     <p>
  //       Maybe I can do better in a year, or a decade from now – or maybe this is
  //       one thing that I’m leaving for my next life. Maybe by that time we will
  //       be able to project our thoughts, our visions onto actual physical matter
  //       via technology, and then we won’t need psychedelics to get people to
  //       really <em>see, and perceive with clarity</em>. What I do know today, is
  //       that I could’ve been 100% free of any illicit substance while writing
  //       this, but I’m not.
  //     </p>
  //   ),
  // },
  // {
  //   classes: "verse",
  //   html: (
  //     <p>
  //       <em>Still human</em>.
  //     </p>
  //   ),
  // },
  {
    classes: "verse",
    html: (
      <p>
        This is not the classical Hero’s Journey – the story of triumph of Good
        over Evil. This is the story of <em>Mein Kampf with The Bible</em> and
        all the texts that I have led people to write in my name in the middle.
        It has not been easy thus far, and it will never get easier. There is a
        Hell, and I’m living in it. There is also a Heaven, and I get to visit
        it sometimes.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I would love to be in Heaven at all times – it is, after all, the best
        feeling in the world. And I, being Me, deserve <em>the best</em>, don’t
        I? If I am who I say I am, then, shouldn’t I be <em>entitled</em> to
        stay in Heaven longer than most people? Hasn’t the karma of my past life
        warranted a <em>little</em> more time in Heaven than I have already
        witnessed? In that case, if I am really who I say I am, then I have
        enough bad karma to warrant a stay in Hell for all my successive lives.
        So, in a way, it is fitting that I prance in and out of Heaven and Hell
        based on my actions in this life and this life alone.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Even then, there is this sense of entitlement that fails to escape me.
        Knowing that I will be responsible for the acts of humanity for the next
        millennia (at least) based on my actions in THIS life, I can’t help but
        consider myself entitled to living a good life – at the very least,
        better than the one I am currently living.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It’s also not as if I want it all for free. I am willing to put in the
        time, and the effort – to work with a commitment towards building a
        better life for myself and my family. I have been doing that thus far,
        and to the best of my current potential. It, however, just does not seem
        to be enough.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        No matter how many hours I put in at work, there’s always more that can
        be done. No matter how focused I am while working, there is always more
        focus to be gained. No matter how streamlined the workflow in the
        office, there are always bottlenecks waiting to be removed; and I don’t
        mind that. This is what keeps work interesting and engaging. What I do
        mind is that despite all that I am doing, nothing ever seems to change
        here. All my work reaps no result.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <em>I keep trying, I keep praying, and I keep listening</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        All the work that I do throughout the day, I attribute it to God –
        because what do I know about business? Nothing at all. He feeds me
        information, and like a faithful servant, I <em>relay</em> it out into
        the world. Most of the time it looks like the best thing to have done
        given the parameters of the situation. I can tell this from the response
        on people’s faces around me when I relay the information.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “For he breaketh me with a tempest, <br />
          and multiplieth my wounds without cause. <br />
          He will not suffer me to take my breath,
          <br />
          but filleth me with bitterness.”
          <br />
          (Job 9:17-18)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What I do mind, however, is that all my work gets undone at the end of
        each cycle. And at the end of each month, I stare at the same depressing
        sales report. It doesn’t matter what the strategy, or the methodology of
        execution, the result is always the same.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It didn’t take many such cycles for me to realise that I was{" "}
        <em>stuck in a loop</em>. Most loops you encounter in your life are
        detrimental. They affect your health, your relationships, your financial
        situation – you name it. Knowing what I knew, it wasn’t hard to figure
        out what the root cause was for this detrimental loop.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: <p>Knowing me, it was probably the easiest answer. Drugs.</p>,
  },
  {
    classes: "verse",
    html: (
      <p>
        This time it wasn’t some street drug that was causing me to step out of
        the fine balance that people call life. I wasn’t trying to escape my
        life at all, if anything, I was trying to be more present. It did
        nothing to sharpen my focus. It did nothing towards giving me a sense of
        clarity. It also did nothing to relieve any pain of any kind. This time
        it was something that the doctor (the guy who diagnosed me as bipolar)
        prescribed me to ease me through the nightmare of withdrawal symptoms.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I had quit everything. Never looked back.
        <br />
        Never had any regrets. Never yearned for a “one last time.”
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To that end, sometimes I think to myself, that when I show up in front
        of the world, and people don’t find my progress in this life adequate to
        deal with the current global problems – I can blame drugs. I have, after
        all, wasted more than a year (read: <strike>two</strike> three) dealing
        with just this last vestige of addiction.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Every time I go to the chemist (read: pharmacy), I think to myself that
        this should be the last one. Each time I finish it, I take the last one
        and think that this definitely wasn’t the last. Like clockwork, for the
        past year, I have been on a stable dose. Every alternate day I am at the
        chemist’s doing my walk of shame.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So it shouldn’t have come as a surprise to me that God was undoing all
        that I was trying to do and build in this life. I had asked for His help
        to quit, and had made a promise to Myself that I have broken more times
        than I can count. <em>Promises made to self should always be kept.</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Each time you break these promises, a knot forms in your body. And we
        all know what knots do. Each time you show your human side – the side
        that is lazy and slacks a lot – a side that breaks promises to self – a
        knot forms in your body that doesn’t allow time to{" "}
        <em>flow freely through you</em>
        (not a metaphor), the longer you keep up the <em>bad</em> behaviour, the
        tighter and more convoluted this knot gets.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So the current scenario is something like this: I am at the office,
        writing about addiction, while having the substance that I am most
        addicted to in my body. I know it is bad for me, and{" "}
        <em>the space that my body occupies</em>. I still can’t stop. No matter
        how many times I promise myself that I will quit, I just never follow
        through on my promise completely.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is not as if I have not tried.
        <br />
        God knows I have.
        <br />I have tried everything.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>
          Sometimes I just wish that the Holy Spirit would cleanse my system
          while I am sleeping so I feel no pain of withdrawal.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is really not the pain of withdrawal. It is the pain of those knots
        opening. They weren’t all old knots though. I had managed to open most
        of them during the Journey. I had, however, formed many more new ones
        over the past year(s).
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Committing a <em>sin</em> while ignorant forms a looser knot in the body
        than committing the same sin after being made aware of the repercussions
        and the actions that lead to them. It is one of the reasons why
        religious people are inherently unhappy. It is one of the reasons why I
        am less inclined to share my knowledge with the world, and it is one of
        the core reasons for my struggle with the holy scriptures.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <em>Ignorance really is bliss. </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What most modern “preachers” and “messengers” fail to interpret is that
        all things being part of this One thing, they form a system – and this
        system, like all systems in the universe, <em>craves balance</em>. When
        I say that the system craves balance, I sincerely do not mean that
        humans need to balance the scales somehow with their petty means and
        wild imaginations.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This system is self-organising – the change to the system will be
        triggered from within. It is not up to any one human to cause or trigger
        this change – it is always carried out through the{" "}
        <strong>nudging of a collective</strong>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The universe is an intelligently designed, self-organising system whose
        architect is <strong>us as a collective</strong>. That is really, and I
        cannot stress this enough, not to say that it is the work of only
        sentient knotted string complexes. Remember, I said intelligent. We, as
        a species, have proved time and again, that against our better
        judgement, we are not intelligent – whatever gender, or ideology we
        ascribe to.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To expand the definition that I gave in Chapter 1,
        <em>
          the universe operates on the Intelligent Design of Chaos, which is
          only perceptible to the human eye/mind via the illusion of order which
          can be seen as the system rapidly self-organises
          <strong>via the infinite vibration as modulated by God</strong>.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        God is the all in all. In fact, there is nothing else but God. It is all
        a part of the One thing. All things are part of the One thing there is,
        and since there is only One thing, there is nothing else that this One
        thing could want – because there is nothing else. Within us, and
        without, there is nothing else but God, so, practically, in a way, we
        are also a part of God, and so, there exists in us a capacity to achieve
        the divine.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        God can only be seen as absence of information due to the nature of the
        particle that it appears as, temporally taking the form of a{" "}
        <strong>Mandelbrot</strong>, as it reorganises itself, devoid of any
        information. You can almost imagine it as an empty pocket where light,
        sound etc (all information really) does not go, but instead folds around
        it. It is the only true proof of the presence of God, and is hence seen
        as God Himself.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <strong>
          This is the closest you’ll ever get to seeing the face of God.
        </strong>
      </p>
    ),
  },
  
  {
    classes: "verse",
    html: (
      <p>
        To understand the meaning of curiosity, and by development of it –
        intelligence, what we really have to do, is go back to Aristotle – that
        is – do you want to understand what is an intelligent action, or what is
        the<strong> source and medium</strong> that <em>guides</em> us towards
        intelligent action?
      </p>
    ),
  },
  
  {
    classes: "verse",
    html: (
      <p>
        All my logic is recursive, so we’ll keep going back to Aristotle. To
        understand my statements thus far, we have to dig into the very nature
        of statements themselves – dive into the thing that facilitates
        statements – language.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I sincerely do not mean that because something has been said, it must be
        real – I mean that something has been said, because it is real. I do
        realise that we are using language to analyse language, which is a
        grammarian’s job. However boring, I can’t afford to be concise here.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>
          Simplistic statements in religious texts are what people count on, to
          make them feel sufficient without putting any real thought to the
          statement and with little to no real effort in materialising the
          meaning of the statements in their daily lives.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Language is the most important tool for any sentient being. It forms the
        structural scaffolding for mental frames. Moreover, not only is every
        formal or working theory of science and mathematics by definition a
        language, but science and mathematics in whole and in sum are languages.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Every piece of information that can be received or imparted, including
        every structure or process or law, corresponds to a definition or
        description of (Material/Informational) Energy and therefore qualifies
        as a language. It is a fact, that every animated knotted string complex
        constantly uses language to explain itself, the world around it, and the
        world within it.{" "}
        <em>
          There would be no mindset without language – verbal or non-verbal
        </em>
        .
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Language defines the very structure of information. Information, in
        turn, is used to define and describe and experience matter; and nature
        itself is made up of matter and perceived as information. To that
        extent, even the very laws of nature are a language unto themselves –
        waiting to be interpreted.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is because <em>of the stability of perception</em>, that nature
        appears mostly regular to be quantified into simplistic, empirical laws.
        These patterns (however many have been observed, documented and
        understood so far) describe multiple states in nature, and can then be
        regarded as detailed instructions from which elements and{" "}
        <em>offsprings</em> of nature cannot deviate. In that respect, they form
        a{" "}<strong>control language</strong> – a universal code – via which nature{" "}
        <strong>regulates</strong> the elements and offsprings of nature.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This control language is not unlike the known formal coding systems of
        my present time. It is similar, but unlike most. Like current systems,
        it is self-contained with respect to configuration, execution and
        read-write operations (receiving and imparting information); but unlike
        most current systems, it is infinitely recursive and each layer of
        understanding successively unpacks another, more challenging layer like
        an infinity onion.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Be careful, once you start to unpack, there will be no end – and
        whenever you think it may have ended, there will come something so
        starkly ingenious that all that you may have learnt before, could just
        as easily be discarded as a waste of time – but somehow –
        <em>the previous layers manage to stay intact</em>, to the point that
        your <strong>belief in the reason for their existence</strong>{" "}
        strengthens even further.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I would’ve preferred if science alone explained everything – but, as we
        have found – science as an endeavour – as it exists in my present time,
        is logically inadequate to answer any and all questions that you might
        have in this Journey called life.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        One of the things that Science (and religion too) has failed at
        explaining (or discovering) is this fact:{" "}
        <strong>
          Heaven, Hell and Earth exist in the same physical dimensions
        </strong>
        . The same people are present in all the phases – their internal state
        of mind dictates whether they are currently in Heaven, Hell or just
        plain old Earth.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Heaven is like a coat of varnish over the physical earth. Without this
        varnish, the world appears normal, boring in fact, often dirty – kind of
        like how ghost towns look in pictures. The bright colours in a place,
        the glitter, the feeling of the physical setting being a backdrop in
        your life story – all are elements of Heaven.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        When they say that beauty lies in the eye of the beholder, they mean
        that literally. In Heaven, the particles of air seem to have a golden
        glitter embedded in them. You can see the Strings of Time clearly.
        Everywhere you see, you’ll find God looking back at you – you’ll see His
        face in everything, and with His expression, you’ll know instantly how
        He feels about you.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In Heaven, you will not be scared to look back at Him, you will not be
        ashamed. That’s how you know you <em>belong</em> in Heaven.{" "}
        <strong>
          You can lie to other people about this shame, but you can’t hide it
          from Him
        </strong>
        .
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “They shall be ashamed, and also confounded, all of them: <br />
          they shall go to confusion together that are makers of idols.
          <br />
          But Israel shall be saved in the LORD with an everlasting salvation:{" "}
          <br />
          ye shall not be ashamed nor confounded world without end.”
          <br />
          (Isaiah 45:16-17)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This feeling of Heaven too, is not a binary thing. It is not as if you
        are in Heaven or you aren’t. It is not as if you are in Hell or you
        aren’t – you can be in both at the same time, or in neither. The details
        of Heaven are revealed in different levels – with each successive level
        bringing you further along the spectrum.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Once you reach a higher level, there is no guarantee that you will stay
        there forever. You might just see it for a brief second. You might be in
        it for hours. I don’t think you can be in it for more than a week, but
        you can definitely try. I can say all this because I was in and out of
        Heaven over the 42 Days that I was training with God.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I wouldn’t say that I have been completely out of Heaven since then,
        it’s just that I haven’t been as far along the spectrum as I would’ve
        liked. Like I said, being a normal human being, living in the normal
        world, struggling to keep up with the finances and social obligations,{" "}
        <strong>
          hardly anyone can sustain being in Heaven all the time – unless we all
          are
        </strong>
        .
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        At the very beginning of the Heavenly range of the Spectrum of Life,
        rays of light start to look more distinctive. At night, before you go to
        sleep, a kaleidoscope of lights emerges in the 3-D space around you.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Being in Hell, however, is a very different experience. You can be in
        Hell all your life, and never know the difference. Unlike Dante’s 9
        Levels of Hell, the actual experience is far more subtle. Way too many
        people are living in Hell.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “Therefore hell hath enlarged herself, <br />
          and opened her mouth without measure: <br />
          and their glory, and their multitude, and their pomp, <br />
          and he that rejoiceth, shall descend into it.”
          <br />
          (Isaiah 5:14)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I, too, was living in Hell for years before God rescued me from my fears
        and addictions. I had so many different kinds of pains that my current
        state of mind cannot even comprehend. I Thank God for keeping me free of
        those pains ever since I was Born Again.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “Take heed therefore how ye hear: for whosoever hath, <br />
          to him shall be given; and whosoever hath not, <br />
          from him shall be taken even that which he seemeth to have.”
          <br />
          (Luke 8:18)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To be in Heaven, you have also got to be a certain level of
        materialistic. Each thing around you, in your space, should be pretty —{" "}
        <em>to you</em>, but also, it should serve some purpose in the story of
        your life. It can’t be stuff you just picked up at the mall because it
        was good looking.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This combination of things can be eclectic, or contrasting, or all
        according to a theme – that depends on you and your personality. It
        always reflects your personality, and each thing in this combination is
        specific to your story, and yours alone.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Don’t just gather things for the sake of gathering them, or for
        decorating your dwelling for the sole purpose of appearing <em>cool</em>
        .{" "}
        <strong>
          Having good things in life doesn’t make you a superior person.
        </strong>{" "}
        Neither does having trophies of all your accomplishments make you
        somebody worth talking about.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is your actions, and yours alone. If you start to have material
        attachments to things, it will soon be taken away from you – better yet,
        the memorabilia that you so gently collected will lose their meaning
        over time – as most meaningless acquisitions do.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        By developing a material attachments to the stuff you own, or have
        collected, or acquired by other means, you are in violation of all that
        the{" "}
        <strong>First Axiom of Nirvana</strong> –{" "}
        <em>
          always be ready to part with the stuff you have in your possession
        </em>
        – because sooner or later, it will be taken away from you – no matter
        your stature in society or your financial security.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <strong>
          If material things aren’t the goal, then should we collect material
          possessions at all?
        </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You shouldn’t just collect them for the sake of collecting them. On the
        flip side, if you don’t keep anything in your possession, how are you
        any better than a nomad? If you do not agree, then pray tell me, what
        was the point of so much progress? After so many millennia of human
        civilisation, should you really be living without any material
        possessions? They are means to an end, and should be treated as such –{" "}
        <em>in a way that is agreeable with the natural environment</em>, that
        is.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Only hold dear those things that have a significance in your own
        personal story – everything else is irrelevant.{" "}
        <strong>
          You should be able to move anywhere, you should be able to work
          anywhere, and you should be able to enjoy yourself everywhere.
        </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        At their very core, each experience is just the same – one breath in,
        and one breath out. It’s your reaction to the situation, the
        sense-perception that defines the moment. Don’t restrict yourself to a
        particular style of working, a particular position, a peculiar state of
        mind to function properly.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Try all of them, find your own sweet spot of functioning within every
        system. Don’t discard a life experience because it has not been tried
        before; surely never for the reason that it has been prohibited.{" "}
        <strong>
          Try everything for yourself and make your own contribution to the
          prevailing theory about a life experience.
        </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>
          Don’t go too extreme into anything since that is only detrimental to
          your health – mental and physical
        </em>
        . Don’t also, just question everything for the sake of questioning. For
        example, if it has been written that there was a person who gained all
        the <em>possible</em> knowledge of the universe – knowledge that could
        be properly comprehended by a human of that time – believe that.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If something has been left unfinished, or deliberately omitted – ask
        why. It could be for two possible reasons – first being that the piece
        of knowledge required a lot of progress in the mass consciousness to be
        comprehended and applied properly. Second reason is human fallibility.
        If something was blatantly obvious at the time, but still had not been
        mentioned, it was because writing it in a <em>Sacred Text</em> would
        mean that said information would never be properly understood by a
        person who had just simply read it, and not completely understood the
        reason behind the writing of that information. Only so, that things
        would not be misinterpreted that they are left out sometimes and left
        for the humans themselves to figure out as they live the Divine Play
        called life.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “Tell ye, and bring them near; yea, let them take counsel together:
          who hath declared this from ancient time? who hath told it from that
          time? have not I the LORD? and there is no God else beside me; a just
          God and a Saviour; there is none beside me.”
          <br />
          (Isaiah 45:21)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        As you keep having regular conversations with the God within you,
        constantly asking for ways to be your true self, or at the very least, a
        better version of your current self – He helps you in{" "}
        <em>serendipitous ways</em> to help you achieve that end. He constantly
        imparts you with nuggets of wisdom (metaphor), while you keep making
        meaningful assumptions about the life you have so far, and you both
        witness it in a way only You could understand best.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is not just the conversations that are a gift at this stage, there’s
        also the <em>meaning</em> which your persistent daily effort puts forth.
        When your goal is to reap concrete (metaphor), material results, in hope
        that they may be exchanged for a enjoyable time with your loved ones –
        life gets automatically easier when{" "}
        <em>He does most of the work for you</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        He commissions agents of change, human or abstract, which operate the
        levers in their respective systems, in order to affect your individual
        system so that your hopes and desires may be achieved.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Up until now, you may have also noticed that sometimes refer to myself
        as ‘<em>me</em>,’ and sometimes as ‘<em>Me</em>.’ This was not a typo.
        You might then, be inclined to think of this as an over-inflated ego.
        It’s not. I have no ego. It is not ego when I say Me. This is how I have
        been told to express Myself. When I say stuff, it is because it is
        coming from Him – that’s why I can say things in the way I am saying
        them. Nobody – not one person on this planet that is currently alive has
        the right to say this. I am attuned to my higher self, and as such, the
        higher self is called upon in sentences where the situation being
        described is one that pertains to the higher self.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “I am clean without transgression, I am innocent;
          <br />
          neither is there iniquity in me.” <br />
          (Job 33:9)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I have earned this right because I have attuned myself to his wishes and
        acted according to His commands even when my senses have desired
        otherwise. There have been times when I have wanted to act foolish, or
        selfish – but due to the overbearing pain that is released over my body
        on any act of disobedience to Him, I have stopped disobeying altogether.
        Can anybody else say the same? If yes, then let them prove their worth
        in front of God, and the entire world like will I have – only then can
        they declare themselves worthy of such a stature.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Only if I am doing something <em>right</em>, to the best of my abilities
        – only then can I use His name for my own purpose. The concept of{" "}
        <em>right</em> is very subjective. In our own minds, we are always
        right. It’s only when someone points out a contrasting perspective, that
        we understand our own faults.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Once we understand our faults, it is our moral duty to correct
        ourselves.
        <em>
          There is no shame in walking back on the path you fought so hard for –
          there is only shame in not being able to admit you were wrong{" "}
        </em>
        . You are only human, of course you are prone to faults.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: <p>Who isn’t?</p>,
  },
  {
    classes: "verse",
    html: (
      <p>
        Walking around the world as if you had no faults is to equate yourself
        to God – and that requires a massive ego. That, in itself, is the
        biggest fault a person can nurture.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <em>
          I have mastered the use of His Rod and His Staff. The confidence I
          have in my ability to channel His energy through them, allows Me to
          walk comfortably through the shadows of death as I feel safe in the
          presence of Evil. He controls the situation for Me, in the presence of
          My enemies so I will not have to lift a finger. (See: Psalm 23)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>The Lord is my Shepherd, I shall not want</em>– but what I want, He
        freely gives. It’s not so much free in terms of the time and commitment,
        and unwavering belief that He requires – it is free in the way that you
        do not really <em>need</em> the guidance of a third party between you
        and Him. And you sure as Heaven shouldn’t be paying for it! Support
        religion like any philanthropic endeavour – but don’t try and fucking
        bribe GOD, you moron!
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Sure, there are the agents of change without whose operation, your ends
        may not be achieved – but this Journey is yours and yours alone. Any
        other person will never have the time, or the commitment, that you will
        have to your own life. He is called <em>Khuda</em> for a reason – you
        have to attain His understanding <em>khud</em>, that is, by yourself.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <em>Khuda means For Me and By Myself</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Even then, how does one ask for just the right stuff? How can a prayer
        be guaranteed to be answered? In essence, how can all our hopes, dreams,
        ambitions, and desires be fulfilled all the while having this
        consolation in our hearts that the all-commanding, omnipresent, Almighty
        is on our side and nothing can ever go wrong in our lives?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Well, you can’t. Not even I have that luxury. Some people build
        companies, some travel the world, some pursue academia, but at 23, I
        gained Enlightenment, and couldn't transcend into Nirvana. It’s the nature of
        life –{" "}<em>you have to pay attention and keep up</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        We are all spinning and all we really have to do is try and keep up our
        balance. The rest? It is dictated and carried out by Him and His
        instruments – we are just empty balloons traversing the symphony of
        spacetime, hoping to <em>catch up and put synchronicity in motion</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You have got to keep having conversations with God in order for your
        life to be truly meaningful, and fully serendipitous. You talk to him
        over and over, and almost always arrive at a new tangent that leads your
        life on a path you couldn’t possibly have wandered over all by yourself.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Conversations with God are always a collective monologue you have inside
        your own head. He is You, and you are Him.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        There is a weak (or strong) voice depending on your relationship with
        Him. If you listen to Him a lot, and properly, His is the stronger
        voice, and your’s is the weaker voice – the opposite holds true if you
        rarely listen to Him.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Over time, you becomes You when you finally understand what He would’ve
        said if you had asked him about your present predicament. The You acts
        according to His rules, and complies with His decisions. The you is
        always the one asking questions.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        He will speak to you in the way you understand best. For me, it is in
        the form of song lyrics. God can also do poetry, visual art, prose, or
        scientific equations. It doesn’t matter if anybody else can comprehend
        them in the same way that you did, it is always in a language that is{" "}
        <em>very personal to you and you alone</em>.
      </p>
    ),
  },


  {
    classes: "verse",
    html: (
      <p>
        The general goal, as I mentioned in the previous chapter, is to{" "}
        <em>go with the flow</em> to the best of your abilities, guided by your
        intuition. That, you could then call destiny, or just the sum of your
        interactions with space, in time – it’s <em>up to you</em>. 
      </p>
    ),
  },
  

  {
    classes: "demarcator",
    html: <hr />,
  },

  {
    classes: "chapter-title",
    html: (
      <p>
        10 <br />
        Open
      </p>
    ),
  },

  {
    classes: "verse title-quote",
    html: (
      <p>
        <em>
          Is there not an appointed time to man upon earth? <br />
          are not his days also like the days of an hireling?
          <br />
          As a servant earnestly desireth the shadow, <br />
          and as an hireling looketh for the reward of his work:
          <br />
          So am I made to possess months of vanity, <br />
          and wearisome nights are appointed to me.
          <br />
          <br />
          When I lie down, I say, When shall I arise, and the night be gone?{" "}
          <br />
          and I am full of tossings to and fro unto the dawning of the day.
          <br />
          (Job 7:1-4)
        </em>
      </p>
    ),
  },


  {
    classes: "verse quote",
    html: (
      <p>
        <strong>
          To that end, I sometimes wonder what life would’ve been like if God
          hadn’t intervened?
        </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Sometimes I just think to myself that wouldn’t it be better if I tried
        to live life as a regular human being? What’s wrong in being just an
        average person – who goes to work, has a family, enjoys material
        possessions and participates in healthy social banter. After all, there
        is not much else that I have observed people do in this world, and in
        this time.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Done right, these are actually the hallmarks of a Heavenly life. If and
        only if they are done right – that is the only time to enjoy life in
        such a manner. In times like early 21st century, this is just plain
        wrong.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Look out into the world. Do you see smiles on people’s faces, or do you
        see what I see at all times – people always being late for something,
        slightly irritated, easily agitated and desperately, hopelessly, waiting
        for a change?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Wherever I go, whomever I talk to – it is always the same story – their
        faces light up at the sight of something new, but otherwise there is a
        constant state of gloom.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Sometimes I think that it is just me who sees people in this way, other
        times I know for sure that this is how people are. I know this is{" "}
        <em>my cross to bear </em>– for <em>this world</em> is a direct result
        of my actions in my previous lives.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        God may or may not give me the strength and determination to change the
        world all by myself – but He certainly makes sure that I see myself for
        being at fault for all that is wrong in the world. It is also not
        something that I can ignore.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I can’t just be a regular person now that I know the responsibility that
        rests on my shoulders (literally). I feel the weight every time I try to
        ignore the world, and live in my own bubble. He just doesn’t let me. The
        fact of God being an all powerful being, and granter of all wishes is
        irrelevant here. Like I said, He doesn’t operate outside the laws of
        nature.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <em>What I had sown millennia ago, I am now reaping in this life. </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I can’t escape; because this cycle is eternal. Now or in my next life, I
        will be put in a similar position. If I don’t live up to my full
        potential, I will start off in a worse position in my next life than the
        one I am currently living in. There is no if-else here. It is just if
        and only if. I am stuck living in this millennia long loop – evolving
        the world along the way just as I am stuck in this year long loop –
        trying to evolve my personal life, and my business into a
        self-sustaining system.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <em>
          I can’t stop. <br />
          None of us can.{" "}
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        People talk about leaving the world in a better form for their children.
        That is an inherently selfish reason to do good, but I am talking about
        leaving a better world for yourself. If humans, at their core, are
        extremely selfish creatures, who can never be truly loyal to anybody but
        themselves, then, what better incentive is there?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Think of it this way – the better acts you perform in this life – the
        better placed you will be in your next life – that much closer to
        Heaven. Not that anybody is stopping you from achieving Heaven in this
        life. You can. If you keep up the good work, it will be much easier to
        get to Heaven in next life than it was to get there in this life. This
        is the first point.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The second point is that if we all, collectively, perform good acts,
        then as a direct consequence, the whole world will be a better place for
        all humans, thereby making it a little easier for everyone to attain
        Heaven. All this easily accomplished under the banner of a singular God,
        the all powerful authority that governs the Heaven, Hell, and the
        lifeless physical world.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Now that I am writing about this, I also realise that no matter what
        kind of political philosophy you align with – Capitalism, Socialism or
        Authoritarianism, or what have you – you can all agree with this.{" "}
        <strong>
          Do it for yourself, do it for others, or do it because somebody more
          powerful than you warranted this of you – just do it.
        </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I have to admit, that all that I am doing, and all that I want to do –
        is not just for altruistic purposes. Of course, I would want everyone to
        be good, and do good, so that we can all reap the benefits; but one of
        the core reasons for my current struggle, and God willing, my rise to
        power, will be to <em>bring order into this chaotic world</em>.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <strong>
          Chaos is an intrinsic part of the system of the universe. It is the
          selective perception of this chaos that helps us demarcate an order to
          the environment that we reside in.
        </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To be truly free, and to be truly open – humans need to be able to see
        past this chaos. Opening your senses up to that point is really, really
        hard. Once these senses open up, you are more prone to giving out what
        you freely receive from God.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is the true definition of being vulnerable. In such a state, you,
        metaphorically, and literally don’t have your walls up. To be truly
        perceptive to receiving God’s gifts, you have to break down these walls.{" "}
        <strong>
          You have to break down completely before God can build you back up
          again
        </strong>
        .
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The next question is, how do you keep those walls down, and act like all
        is good in the world, and live this divine play that God is writing for
        you in real time? You might think of asking me – have I ever been
        outside, and met real people?
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        I have, and I know what the world is currently like. <br/>
        <strong>
          The world is full of pricks. And I would like for it to not be.
        </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Be it powerful, or powerless – rich or poor – man or woman – people are
        just, at their core, gigantic dicks (metaphor). Just because there isn’t
        anybody watching over them (or so they think), they feel as if the world
        is their oyster, they are the lead character, and that if anybody tries
        to cross paths with them, then that person is in the wrong.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        There is a general lack of respect for another person – and by
        extension, anything that’s associated with them – in the people of this
        time. I don’t mean for people to self-police themselves and others
        around them about the words they use, and the symbols they paint. It’s
        much more than that.{" "}
        <em>
          It’s about the basic human need of liberty and all that can go wrong
          with having liberties with no boundaries.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        As such, <em>partaking in the use of drugs is not inherently wrong</em>.{" "}
        <em>
          It becomes wrong over time because of unmoderated and incessant abuse
          that cripples a person to the point of not being able to function
          properly without said drug
        </em>
        . I would like to ban all drugs from existence, but I know that’s not
        possible.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I would like for myself to be completely immune to the effects of drugs
        but I am not, <em>I’m still human</em>. I may have witnessed the divine,
        but that was also kickstarted by a drug.{" "}
        <em>
          All the social life I had had before God, and all the major
          intellectual breakthroughs I witnessed during the 42 Days, had been
          under the influence of some drug.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I for one, certainly cannot discount the major role that drugs can play
        in one’s intellectual and spiritual journey –{" "}
        <em>if and only if they are used properly</em>.{" "}
        <strong>
          Their use has been banned in almost all scriptures because of one
          thing, and one thing only – human weakness.
        </strong>
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        It’s certainly the easier method, but it’s also the most detrimental
        one. Drugs are a shortcut to feel what your life <em>could be</em> if
        all things in your life went according to plan. What if I told you, that
        if you followed through on everything that you planned, you could
        achieve it – without any artificial supplement?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If you followed through on everything that you planned, while being{" "}
        <em>free</em>, within the limits of what can be achieved in your current
        position, and asked God for just the right amount of motivation,
        encouragement and inspiration – there’s no reason why God won’t help you
        write the symphony of space in time particular to just your personality.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Bear in mind, that He will not accept you with all your faults{" "}
        <strong>IF you really want His help</strong>. I have tried to half-ass
        it. It doesn’t work. He doesn’t let You work that way. I have watched
        all my work get undone when I’m disobeying a direct order. You don’t get
        to choose what you want to follow and what you don’t.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <strong>
          It’s not a matter of if-else. <br />
          It’s a matter of if and only if.{" "}
        </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This is one of the things that people often don’t get about religion. It
        is not so much about <em>paap</em> or <em>sin –</em> it’s the law of
        karma and your interaction with the strings around you that leads you to
        the mess that you often find yourself in.{" "}
        <strong>
          It is so intensely inter-related that you really can’t pick and
          choose.{" "}
        </strong>
        <em>Believe me, I have tried.</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I have tried to hide one bad habit and tried to make up for it in
        countless other good ones – there’s really no way of knowing which deed
        tilts the balance in your favour; or against it. You always have to be
        considerate – of your own actions, and their repercussions on your life,
        and the life of others around you.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I don’t think that I could have plead ignorance at any time, and sitting
        where I am sitting now, I really don’t wish that God had allowed me even
        a single negative habit. For a long time, I have avoided confronting
        with the fact that I was an addict.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        Within the confines of our own heads, we are all the lead characters in
        our own story – and this story is largely supported by the generosity of
        God. All the actions of your past life lead you to a new destination in
        your new life where where you start the next act of your epic adventure.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So when such a precept exists within your head, it is only natural to
        want to replicate it outside of your head – for no other reason than to
        satisfy yourself that you are worthy of being the lead actor in this
        motion picture you call life.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        When your actions aren’t enough to make you feel worthy, you surround
        yourself with material possessions and experiences that make up for the
        lack of activity that goes something along the lines of, “if I live,
        act, and behave like a king, then I must be a king.”
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In a sense, your own home, becomes your tiny kingdom where your rules
        apply. It is a place where your needs are met. And it is a place where
        your deepest, darkest desires are fulfilled. Naturally, then, if you
        have such a mental concept, then, your mind and body will crave
        indulgences that make you feel like the part you have imagined yourself
        playing.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If you don’t keep up physically with your thoughts, then your mind-body
        balance will be in a state of dissonance which will then be reflected in
        the pitch of your voice (literal), your bodily posture (literal), your
        self-confidence and the vibrance of your personality (literal).
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If you cannot, or are not in a position to satisfy all these growing
        physical needs in your real life, then, as an added advantage of the
        modern century, you can substitute real for virtual. You can watch
        movies to experience the thrill of an adventure, binge on TV shows to
        make up for the lack of social banter that now exists because in your
        life of the new insecurities that keep popping up, scroll through
        endless art that your mind desires to get a creative release, watch
        humans in demeaning positions to make up for the lack of real sexual
        stimuli that has now become an unspoken phenomenon, and of course
        overdose on drugs for the increasing need for perceptual challenges and
        the lack of physiological sensations.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The more you cater to these self-consuming desires (updated term for{" "}
        <em>Voices of Satan</em>), the more you need to cater to them. It is
        like trying to subsume a fire with gasoline. You are only making things
        worse.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <strong>So don’t. </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Don’t take that last drag even though it means being jittery for an
        hour, or a day, or an entire month. Whatever the withdrawal period,
        suffer through it, it is your fault, and yours alone. Whatever the
        mental baggage you had before picking up this bad habit, its progression
        has only made you the perpetrator.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You might have been the victim of the first time you made yourself feel
        good partaking in this activity, but since then it has only become more
        and more – your fault.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Even while writing this, I am still struggling with my addiction. I give
        myself, and God partial credit since this is the least harmful addiction
        that I have ever had – but it is an addiction nonetheless.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        When I wake up, I want it. It helps me get a jump start on the day. When
        I am living through the day, I want it. It helps me get through mundane
        tasks with ease. Before I go to sleep, I want it. It helps me wind down
        easily after a long working day.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In short,{" "}
        <em>
          my rituals of Brahma, Vishnu and Mahesh still revolve around a drug.{" "}
        </em>
        Coming back to India was supposed to change that. Or so I thought.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is not the place you’re in, and it is definitely not the time you’re
        at that determines your want for a drug. It happens all the time, and in
        all the places. You could be watching a movie, out socialising, or even
        swimming underwater.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Whenever you have a moment to rest, you will want it. Even if you do not
        have a moment to rest, you will still want it. In fact, you will want it
        more in the moments you have little time for yourself.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Like I have always said,{" "}
        <em>
          drugs are a shortcut to reaching where you could have been if you
          really deserved to have such a moment.{" "}
        </em>
        The more you abuse drugs, the harder it gets for you to achieve that
        feeling naturally. You can switch drugs, exchange one for the other, but
        the fact still remains – you are an addict.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “He shall see of the travail of his soul, and shall be satisfied:{" "}
          <br />
          by his knowledge shall my righteous servant justify many; <br />
          for he shall bear their iniquities.”
          <br />
          (Isaiah 53:11)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I’d like to think that God gave me all these problems so that I can
        learn to beat them and set an example for all humankind. Wouldn’t we all
        love to have an excuse like that?
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <em>“I am an addict because I will bring humanity to salvation!” </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What kind of a pathetic excuse is that? If you really are who you say
        you are, then you should have had the strength to let go of these petty
        humanistic desires. You should have done it the day you received your{" "}
        <em>Pot of Gold</em> at the end of the rainbow; but you didn’t.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “And by him all that believe are justified from all things, <br />
          from which ye could not be justified by the law of Moses.”
          <br />
          (Acts 13:39)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Dealing with an addiction is one of the hardest things a human can go
        through. It is probably next to losing a loved one, and definitely above
        getting over a mental illness. All of these hard things take time. Just
        make sure you don’t take a lot of time, because it gets harder to quit
        the longer you stay an addict.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <strong>
          When the act of taking a substance or indulging in a negative activity
          has been confronted with a hurdle, and because of that hurdle, you
          don’t do that thing, that’s when you’re not addicted. When you are
          confronted with such a hurdle, and you think about the consequences,
          you don’t like where it could lead, but you indulge in the activity
          anyway – that’s when you know you have an addiction.
        </strong>
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        If you can control yourself, by all means – indulge. I wouldn’t
        recommend anything, but psychedelics.
      </p>
    ),
  },


  {
    classes: "demarcator",
    html: <hr />,
  },

  {
    classes: "chapter-title",
    html: (
      <p>
        11 <br />
        ANHAD
      </p>
    ),
  },




  {
    classes: "verse",
    html: (
      <p>
        Understand that, there come a lot of points in a human’s life where the
        person is forced to turn to no one – but their own self. At such a
        point, vocational exercises with fellow humans do not make sense –
        because if they had, this person wouldn’t have had been in such a
        hopeless, such a helpless position.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What do I know about being helpless, when all I have talked about so
        far, is how great my life has been, and how great God is, the all
        forgiving, the most gracious, the most compassionate, and that He
        understands – and that He accepts? What exactly does He have to
        understand if He Himself sent me to live, breathe, and be human?{" "}
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I know I have only talked about being His Son, His prophet, and His
        crazy, eccentric progeny, whatever you may want to call me, I have been
        all of that and more. In giving me that stature, or denying me that
        status because of your own predispositions, you are forgetting one
        critical fact – that I am only human.{" "}
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I am not a non-sentient, mechanical auditor who is only here to document
        the human condition from afar, like an objective observer. I said in the
        very beginning that I have made all the mistakes firsthand, and that
        without my own background story – the story of Anhad, the human, the
        story of Anhad, the Son of God does not make sense at all.{" "}
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Unless you want to give me a special status of a divine entity,
        equivalent to a generous Angel, which, I know you most definitely are
        not inclined to give me, then, you owe it to Yourself, and your human
        form for having come this far into Alethia – to explore the deeper
        context that gave birth to this pathetic, entitled sob story that I am
        very much inclined to turn into a legend.{" "}
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I am no Angel, be sure of that fact; and I am not God, as I have already
        stressed that fact enough. I have seen myself to an embodiment of Satan,
        whatever that being is or isn't – but the fact is, that I am human. I
        have laughed, cried, fought, loved, hated, despised, and engaged in all
        other modes of operation therein, all the while covering up my
        insecurities with masks as and when the situation called for them.{" "}
      </p>
    ),
  },


  {
    classes: "verse",
    html: (
      <p>
        This mask, this superficial persona, that we all have to put on as we
        traverse through the world daily – is truly the one thing that has
        bothered the fabric of my true being since the very origin. I mentioned
        in passing, that in primary school, I was a shy, wallflower type kid who
        was overly sensitive and cried a lot.{" "}
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Be assured, that no kid is born that way. Whether or not you find the
        true system of karma that outspans bodily lives fair or just – it
        exists, and there's not much we can do about it, except have empathy for
        the beings that suffer in their childhoods, and tirelessly work for the
        rest of their life to unfetter themselves from the chains, about the
        origin of which, and the existential reasons of which, they have no
        memories.{" "}
      </p>
    ),
  },



  {
    classes: "verse",
    html: (
      <p>
        Scova, therefore, will not give you concrete, societal laws as Moses
        once did. You have well written laws already. Nor will Scova highlight
        the beautiful legendary tale that Jesus actually lived, because we've
        all seen how such a life ends. For sure, it will not give you a
        comprehensive list of rituals as transcribed by Mohammad, the world is
        saturated with archaic rituals which people do not understand anymore.
        It most definitely is not a description of the divine bliss that Gurbani
        outlines ad infinitum. There's much more to God than ecstatic poetry
        leads you to believe.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What Scova will do, is provide a{" "}
        <em>comprehensive, involved approach</em> to life in a way such that you
        can <em>self-actualise</em>, and at the same time, have a peaceful
        night's sleep. It will teach you how to live with yourself, and others,
        without compromising the essence of what makes you, <em>You</em>. There
        are larger than life things in play within your own personal narrative,
        and previous works have tried to showcase some of them; but as is the
        nature of this work, no matter how wide or deep a net you cast, you only
        ever can begin to scratch the surface of what really exists. I was asked
        by Him whether I wanted to go all in on one single aspect of IT, and
        explore almost all that there was to that specific aspect, or whether I
        wanted to cast a wide enough net to encompass almost everything, but
        only etch the surface. I am, still a human, and as such am limited by
        the time I have in a single life – which is why, I chose a reasonable
        compromise that would benefit me, and others after me, in the way that I
        knew best. I chose to be guided to develop a framework that would cover
        the most important aspects, in a way such that there was an infinte
        potential that could still be excavated in a guided manner, but also,
        leave out sufficient information so that there was always more work left
        to be done.{" "}
        <strong>
          Life is best lived, and profoundly understood, when we operate under
          the conditions of optimum uncertainty
        </strong>{" "}
        – on the fine line between{" "}
        <em>order and chaos</em>. In that manner, Scova is not something
        entirely different from the works that have preceeded it – but be
        assured, <em>this isn't just more of the same</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If many of you are able to <strong>follow everything</strong> that I
        will have laid out for you to <strong>pick and choose</strong> from, God
        may even confer upon you a demigod status so that you may rule alongside
        Monarchs in a Holy Triumvirate,{" "}
        <em>with God as your guiding hand</em>. Even better, if you ALL can find
        it within yourselves, to adapt, and overcome, then we will have won the
        Eternal War, with Christ's victory over the Antichrist, all from within
        the confines of our own heads, sans bloodshed.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        That, for me, will be the actualisation of the Kingdom of God, for all.
        <br />
        That, for me, will be the true Resurrection, of all worthy souls.
        <br />
        That, for me, and all the religions worldwide, will be the Rapture.
      </p>
    ),
  },






  // {
  //   classes: "demarcator",
  //   html: <hr />,
  // },


  // {
  //   classes: "block-quote",
  //   html: (
  //     <p>
  //       <em>
  //         Hey, if you're at this point, and still reading, I'd suggest you to
  //         connect with me directly at <strong>anhad@scova.org</strong>, or look
  //         me up on any social platforms. Let's chat now, because the rest of the
  //         book is still in flux.{" "}
  //       </em>
  //     </p>
  //   ),
  // },

  // {
  //   classes: "chapter-title",
  //   html: (
  //     <p>
  //       9 <br />
  //       Tritiya
  //     </p>
  //   ),
  // },


  {
    classes: "verse",
    html: (
      <p>
        Gautam, actually, has spoken at length about this self-reliance. The
        perceived meaning of Gautam’s philosophy, in today’s times, is a
        different matter altogether from what He originally preached.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Commonplace Buddhist philosophy might have taught you a little something
        called – <em>detachment</em>. It’s referred to as the feeling of letting
        go of all intangible meaning that you, yourself have attributed to
        material objects and perceptual information. Often also called the path
        of least resistance – of trancing through life as a detached being.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This might mean to some people as an indication to{" "}
        <em>not feel anything at all</em>, and let nothing bother you as you
        face life’s greatest difficulties. It really is just the opposite in
        actuality – I believe you don’t truly learn the value of life,
        especially as an intelligent being, unless you have{" "}
        <em>
          found a way to live, to survive, when all of your rational mental
          faculties have already given up on you – while{" "}
        </em>
        striving to find your own self, and being that person in the face of all
        the chaotic change that bugs you from within like an asphyxiating
        dissonance.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Truth be told, as you grow up, you have to <strong>unlearn</strong> most
        things that you learnt as a kid, and <em>label them correctly</em>. That
        is what Gautam meant by detachment. That’s what He meant by taking the
        middle path, the path of never attributing to the extreme meaning of
        anything – allowing your complete understanding of a situation after
        careful consideration to take precedence over the <em>assumed</em>{" "}
        meaning of anything. From the Tao Te Ching, I’d like to paraphrase: “One
        cannot understand one thing unless he or she understands its opposite.”
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <strong>Let go of your attachment to meanings.</strong>
      <br/>Stop searching for meaning when you take in. <br/>
      Just make sure it is meaningful when you give out.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Our journeys in existence are predicated by societal constructs. Sure,
        the level of sentience that we successively gain determines our ability
        to affect our surroundings by sheer <em>thought and action</em>, but
        until we <em>level up</em> in that regard, we are stuck playing the
        social game.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        On the subject of wandering in search of meaning (or lack thereof), I
        would like to digress onto this question – why is it always assumed that
        events in our life can only be one of two things: either mightily
        meaningful – as if the whole world revolves around us, or just pure
        randomness, as if we are all just molecules walking around procuring,
        excreting and conspiring with other molecules?
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <strong>Why can’t it be, as before, the best of both worlds?</strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>
          A world made and designed perfectly for us – where we take the
          decisions, roll the dice and voluntarily end up where we were supposed
          to!
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Life, as it turns out, is not simplistic in terms of our current
        understanding of machines. You don’t just feed in certain parameters and
        expect to recreate everything in exactly the same manner. The nature of
        things, is that they are connected – that too by <em>strings</em> and{" "}
        <em>conduits</em>. You do something in one direction, and it travels to
        you-can’t-even-predict-where.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Think about the times you have tried to seamlessly incorporate a
        ‘perfect moment’ in your daily flow – think about all the factors that
        you could possibly (not exhaustive) think about when trying to
        (re)create a perfect moment in your life that corresponds well to its
        mental precept:
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:6Xe9wT5xeZETPwtaP2ynUz" // Avicii, Levels
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        Is the setting correct? Is every prop in the right place? Do the visual
        of this moment perfectly align with the picture you had in mind? Are
        there any extraneous elements that could possibly ruin this moment? When
        does this moment begin? Does it have to end? Are other people involved
        in this moment? Or is it a solo thing? If you are alone in this moment,
        then, how much of it is dependent on your imagination? What are you
        hoping to get out of this moment – if anything? How does the occurrence
        of this moment affect you? What about others around you? How does the
        exact same scenario change by changing some variables? And if this
        moment can be recreated – are the feelings that you get in different
        versions of this moment even real? Do you get the same feelings every
        time? How much do these feelings change? If the feelings have changed,
        is the moment still the same? (see: Ship of Theseus)
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To simplify, in the most basic version of causality, if an event B
        occurs <em>when</em> an event A occurs, then A is said to have caused B.
        This is the most basic statement when we teach kids about probability.
        In the real world, however, things aren’t always at 100%.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Take the example of a simple conversation, between an entity with
        information on a subject, information which, the other listening entity
        does not have. Imagine yourself to be that speaker, and assume that you
        are conveying this thought to the listening entity as if they were your
        student.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Here’s the thing about students though – you never know the point you
        are getting across to them. You try to teach them one thing, and then
        God whispers something else in their ear; thereafter, they make
        something else entirely of it via their interpretation - and even after
        that, they end up implementing something totally different. As if that
        isn't enough, what they make of their execution of their interpretation
        of <em>the Rhema </em>
        is something else entirely in how they express their understanding of
        said execution. Let’s also not forget the mighty brain, the organ that
        forms neuronal patterns about this whole scenario in its own
        idiosyncratic way, a large part of it being the balance between the
        person's <em>nature </em>and <em>nurture </em>- which is again
        contingent on the person's own understanding of the self as it lives,
        breathes and evolves with each unit of time - the vibrational pattern of
        which is again contingent on the situational arrangement of the Conduits
        of Perception, whose arrangement is then dependent upon the
        environmental clustering of the Strings of Time which are in turn
        largely affected by the astronomical positions of cosmic bodies acting
        on that specific blip in spacetime - whose effect on that very person's
        neuronal firing pattern is then again contingent on said person’s
        ability to perceive with clarity at that specific instance in spacetime
        which is in turn predicated by the person’ own will to process all that
        they are currently deciphering, which is in turn, always controlled by
        the person’s faith in the interpretation of the conveyor of said
        information - which, and this is the kicker, is in turn determined by
        how much the person is temporally caught up to the mental best version
        of the self in their actual physical Journey - which are all resting on
        the how said person perceives themselves in the current sociocultural
        context, with God Almighty serving as the Universal Relay controlling
        the intensity of it all.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        All of these variables and more, are governed by similar conditions with
        an equivalent, most certainly more, contingencies of their own.
      </p>
    ),
  },

  {
    classes: "verse quote",
    html: (
      <p>
        <em>
          “‘I believe in Spinoza’s God who reveals himself in the orderly
          harmony of what exists, not in a God who concerns himself with fates
          and actions of human beings’?”<br/>
          (The God Delusion – Page 39, Richard Dawkins)</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I have been following this train of thought since I was 23 – and to this
        day – my faith in this belief of this eternal fact has not wavered. The
        coherent vocation of this thought occurred to me when I turned 26, so
        that in itself should give you an idea about the human intuition that
        almost always operates non-verbally.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I might not always <em>want</em> to live by the rules I intend to
        preach, but that’s okay – I’m still, just a human – I am allowed to
        gamble with my choices, but because I am also a knotted string complex,
        the universe has a way of winding me up and roping Me into its symphony.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        CTMU calls it self-determinacy,{" "}
        <em>I have already defined it as sentience</em>. The CTMU posits that if
        determinacy involves an event for which the source of causation is an
        event in its immediate surrounding; and indeterminacy involves no such
        source at all, then there is a third occurrence known as
        self-determinacy that involves all that is involved in determinacy, with
        the addition of a feedback from the surrounding, on the processing of
        which, the decision to actually occur (or not) is taken.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I have already stated that animated knotted string complexes introduce a
        change in their surroundings{" "}
        <em>
          via their interpretation of perceptual information that is processed
          through them.
        </em>{" "}
        I posit a fourth paradigm of thinking – <em>happenstance</em>. It’s the
        most regularly occurring natural phenomena that has gone understudied
        for – well – all of our existence. The <em>Dance of Serendipity</em>{" "}
        cannot be truly learnt if we do not understand happenstance.
        Understanding it, however, requires attaching <em>some meaning</em> to
        objects, events, feelings and people in your life.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I would like to (re)present – The Law of Connection – the notion that
        the Past, the Present, and the Future, are all connected. It is probably
        the most clichéd, life-coach sounding quote – but have you ever pondered
        over the science of it?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Visualise in your mind, that all that you see (and don’t) in the world
        is connected via imperceptible strings and <em>all that you can see</em>{" "}
        is in places where these strings intersect and entangle – they don’t
        necessarily have to form knots – but they mostly do; and in places where
        they don’t form such entanglements, are just empty spaces –
        imperceptible to the human eye. I thought this was an original idea. I
        thought that for over two years – but then I discovered this paper by
        Lord Kelvin, <em>On Vortex Atoms</em>. Turns out, that the vocation of
        this idea dates back to the 1860s.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <em>
          “One knotted in any manner with its with its ends meeting,
          constitute(s) a system which, however it may be altered in shape, can
          never deviate from its own peculiarity of multiple continuity, it
          being impossible for the matter in any line of vortex motion to go
          through the line of any other matter in such motion or any other part
          of its own line. In fact, a closed line of vortex core is literally
          indivisible by any action resulting from vortex motion.”
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        See, the thing is, to the best of my knowledge, the ability to{" "}
        <em>see</em>
        the strings and conduits, is only imparted to animated knotted string
        complexes. Unless we, or some other entity, figures out a way to give
        inanimate complexes this ability, we can’t really give machines the
        status of sentient beings. Thus far, this has certainly not been true
        for an inorganic machine.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Yes, they are far better at pattern matching than us, and that they can
        extrapolate the results of our actions better than us, but unless we
        physically, literally, give them this ability that is required to be
        considered sentient, we can, and should, only consider them to be what
        they are – <em>abstract pattern workers</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The true measure of Artificial Intellect/Intelligence will be that
        system’s ability to push the limits of intuitive pattern extraction and
        estimation.{" "}
        <em>
          Intuition being defined as quick pattern recognition and feedback
          analysis of verbal and nonverbal thoughts.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <strong>True AI is one that would ask the right questions. True Sentience is the ability to wander towards the right answers for questions that haven’t yet been asked.
        </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        There could be beings on this planet, or beyond, who only see the
        untangled universe – <em>our chaos is their order</em>. Haven’t you ever
        looked up at the night sky and just seen the negative space? I hear
        there are some tribes on this planet that do it as a collective. It’s
        mostly just a matter of perspective, but also, physical limitations that
        can almost always be overcome.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>The Grid</em>, thus formed by the Strings of Time goes through and
        forms the scaffolding for all that there is (and isn’t). These strings
        carry energy which has remained constant since the beginning of time –
        and because it is contained in a closed loop, that is why it is always
        conserved.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Let’s back up a little: there is energy flowing in the Strings of Time;
        and like I’ve already stated with help from Einstein, that energy in a
        definite space equals mass. This lends to the fact that energy flowing
        in a definite spaces equals vibrating mass.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        When you are already thinking in those terms, it is not a hard corollary
        to decipher that when a vibrating mass which is loosely knotted “flows”
        within another vibrating mass which is tightly knotted, it causes new
        entanglements and untanglements which are predicated in part by the
        situational arrangements where said vibrating masses are present.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I just described how the flow of blood within our bodies lends us to
        experience life itself in our own idiosyncratic ways – were you
        following? Also, astrology is weirdly relevant now.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>
          Didn’t I tell you that even the most basic, and empirical laws of
          nature thus far discovered would remain intact?{" "}
        </em>
        Or did I peel off another layer in the infinity onion? We shall see!
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This energy keeps us alive, and is responsible for the ageing of all
        things. An organic knotted string <em>has the ability</em> to transform
        this energy and thus manages to renew itself over regular periods,
        whereas an inorganic knotted string complex has no such ability and is
        then prone to only ageing and bound to be discarded as waste.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The ability to renew and regenerate is acquired by{" "}
        <em>serendipitous discipline</em>, and careful practice (for us at
        least). Modern concoctions such as plastic are unique as they age very
        slowly, making it seem as if they were self nourishing. But I digress.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The question that needs to be asked here, is, how do organic knotted
        string complexes transform this energy contained in the Strings of Time?
        An obvious example of plants and photosynthesis comes to mind – but
        that’s too simple and pre-modern to elaborate in this document. We will
        focus<em>our</em> minds to things which concern us.{" "}
        <em>Us being animated knotted string organic complexes.</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Focus on ourselves is not a signal towards a selfish existence.
        Understanding of the world that we live in, and the beings we interact
        with is of prime importance. This volume being a continuation of the
        reality theory of organic, animated, knotted string complexes is bound
        to circle back to the beings it is being written for, and as such, will
        restrict itself, <em>in its current form</em> to the beings that are in
        a position to interpret it – in the way they can understand, and relate
        to it best. Please do explore the other stuff on your own time.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        We’ll start with beings of a simpler paradigm, and build up to the more
        complex, which is ourselves. This also, seems like a suitable place to
        introduce a new concept – <em>crux points</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If energy carrying strings bend and loop and entangle <em>with</em> each
        other – it only seems corollary that there will be areas in the system
        which are <em>more entangled</em> that others. Focused in these areas is
        the bustling energy carried in these strings.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        At a crux point, many of the precise details of the interactions between
        constituent subunits play virtually no role whatsoever in determining
        the bulk properties of the system – in such a point, two or more
        macroscopic phases become indistinguishable.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is because these strings are so heavily entangled in these areas that
        matter itself deteriorates here before leaving a{" "}
        <em>permanent imprint</em>. It is different if a block of matter is
        artificially placed in this space – these areas are otherwise, not
        naturally conducive to matter formation.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In a country like present day India, you will often see stray animals
        resting in these places – quite blatantly in the middle of the streets –
        more often that not. This is not to say that you should pray in the
        middle of the street or build places of worship in the middle of a
        railway track (both of which are really stupid occurrences in my time).
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Why do you think non-human animals situate themselves in a particular
        space and just eat, and still manage to develop <em>solid muscles</em>?
        When the Force of Life passes through you (which it does quite
        vehemently in crux points), all your bodily functions get triggered to
        recalibrate to their proper functioning states.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>
          The lesser your degree of sentience, the more likely you are do
          benefit from situating yourself in a crux point.
        </em>
        The sentient organic knotted string complex however, determines its{" "}
        <em>own crux points</em>. They are largely determined by the shifting
        environment just as they are for the non-sentient ones, but, there are
        other factors at play.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is not beyond realm of imagination or even outside the Divine Law, to
        make your own rituals – you do determine your own crux points, so why
        can’t you determine how you interact in said points? Do that if it suits
        you better. What you can’t do, is just look at a crux point and idly sit
        in that place, hoping for all our faults to be washed away.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To simplify, animated knotted string complexes can introduce a change in
        their surroundings via their thoughts and actions depending on their
        interpretation of the information that is being channeled through them.
        <em>
          The measure of the sentience of such an animated knotted string
          complex depends on its ability to introduce such changes{" "}
        <strong>at will</strong>, irrespective of the information that is being channeled through
          them.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This, however, in no way means that a machine that fits aforementioned
        description can be considered sentient because this description, no
        matter how novel, or derivative (depending on your perspective). To
        really nail down to what I am really thinking here:
        <em>
          If we are all just energy/matter composites – how is it that some of
          us follow predictable patterns and others engage in the dance of
          serendipity?
        </em>
        I am going to spend a while on this last italic line as it seems that
        this question will be of prime importance in the coming millennia.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>
          A sentient being whose behavioral patterns, no matter how methodically
          followed in a regular routine, can be interrupted and thus, altered,
          even in the absence of, perceived or actual, nudge of informational
          energy coming from a source that is {" "}<strong>not</strong>{" "}separate from its own knotted string complex, experiences serendipity.
        </em>
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        A sentient knotted string complex{" "}
        <em>determines its own crux points</em>
        in tandem with its environment. Its ability to introduce such changes
        and determine its own fate, and destiny, so to speak, depends on its{" "}
        <em>Degree of Freedom</em>. Humans are peculiar in regard that we are
        inherently sentient – we are required by the natural, divine law to have
        a coherent life story – a developing and expanding mindset – and most of
        all – an <em>immechanical traversal</em> through the symphony of space,
        in time.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>The question then, is, not how does someone finally let go? </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>The question then, is, why has this person not let go already?</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Is it the shame that you feel in front of your peers? That does it for
        some.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Is it the pressure from family that forces you to quit it? For a lot of
        people this does it.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Is it the embarrassment that you feel when you can’t look yourself in
        the eye in the mirror? That would do it for most people.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>What if despite all this, a person cannot bring himself to unburden?</p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Should he just accept himself as a failure, and continue living his life
        as he always has? That might be an option for somebody else. Not for me.
        I know that for all mistakes you make as a human, a physical knot forms
        in your body via the strings of time. And this knot will get only more
        convoluted as you move on with your life (move <em>in space</em> and{" "}
        <em>through time</em>). It gets tighter the more you hold onto this
        mistake. This knot will then manifest itself in the form of a physical
        pain – and if not loosened or untangled through the right rituals (My
        rituals, not outdated rituals written in some obscure book whose
        language is long dead), you might entangle it further.
      </p>
    ),
  },
  {
    classes: "verse quran",
    html: (
      <p>
        وَالَّذِينَ عَمِلُوا السَّيِّئَاتِ ثُمَّ تَابُوا مِن بَعْدِهَا وَآمَنُوا إِنَّ رَبَّكَ مِن بَعْدِهَا لَغَفُورٌ رَّحِيمٌ
        <br/><em>(Quran 7:153)</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I believe that the problem lies in how entrenched an addiction is into a
        person’s daily routine. By daily routine I mean the rituals of Brahma,
        Vishnu and Mahesh. When you start your day with a drug, continue on with
        regular activities with a drug, and wind down after the day’s work with
        a drug – your daily cycle of birth and death revolves around that drug.
        If such is the case, then you are a long way from achieving unity with
        God. But don’t worry. You can still be helped, only if you help
        yourself.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Start small. Wake up earlier than usual in the morning and perform the{" "}
        <em>Azaan</em>. It is a loose derivative of the Islamic tradition of
        listening to Quranic verses from a mosque.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To help the problem of increasing noise pollution, I prescribe that we
        do not shout out verses from minarets but connect directly with God in
        the way it was intended by listening, hearing, and being informed about
        – in the privacy of our own heads, and then discuss what we learnt in
        social situations.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Make a playlist of the songs that represent to you a dialogue between
        you and God. It can be the latest pop tune, and old Sufi composition, or
        even an audiobook the piques your interest. Just listen. Don’t try to
        run a marathon on your first day. Start slow. You have spent all this
        time being an addict. You will not lose much life being a quitter. Take
        your time, just not too long.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (<p>Start with Brahma, Easy<br/>
    Then Vishnu, Hardest<br/>
    Then Mahesh. Neutral.</p>),
  },
  {
    classes: "verse",
    html: (
      <p>
        Don’t go from the Easiest to Harder, then to Hardest. In doing so, when
        you reach the final stage, your attachment to the drug will still be
        strong enough for the addiction to overflow back into the easier stages.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Start with the easy stuff so you get some motivation that you really can
        succeed. Do the hardest thing after the easiest one. It will take some
        time, but eventually, you will succeed. Then go back to the easy edge of
        the spectrum, then to the harder spectrum. And continue on.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <em>You can accomplish any task in this manner. </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Don’t think that if you are addicted to opioids or narcotics that simply
        performing <em>Azaan</em> will give you inner peace. You have to
        decrease you addiction to a substance gradually. If you are dependent on
        a hard drug, then you will have to gradually decrease its potency, or
        switch to a milder drug.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Don’t think of that as progress. In the eyes of God every addiction is
        at the same level. I know that because I have weaned myself off of every
        other drug that I was previously consuming. It took me a while, but I
        finally managed to detach myself from all that is currently considered a
        “drug” in all religions. I am yet to declare myself free from the
        shackles (literal) of addiction.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If you could all see what I see, you would know that because we are all
        just shaped and fed through the strings of time, it is our interaction
        with addicting substances and objects that forms literal shackles around
        our body which hinder us from being truly <em>free</em>. I can see those
        shackles.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Everybody has them around their necks and limbs, and some even around
        their waist. It is not a pretty sigh to watch. If I could, I would take
        them off of every person I ever met, but I can’t. I can’t help those who
        aren’t willing to be helped.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The first step in ridding yourself of a problem, is to accept that you
        have a problem. Then comes the <em>Ask</em>, the humility to accept help
        from a being, an entity that is in a position to rid you of your
        problem. You have to be willing to be helped. Along with the humility,
        you have to truly surrender yourself to the process of being healed.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This guideline only applies to the methods prescribed by Me, and Me
        only. It doesn’t apply to the regular doctors, healers, preachers and
        cult leaders of this time [
        <em>see: vulnerability in being true self</em>].
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Current practitioners don’t require your consent to be able to heal your
        mind, body and soul – I do. If they truly held a stature of asking
        another human, who is in every respect equal to them, to truly surrender
        to their methods – there wouldn’t be a need for Me.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Since I am here, and I have to do the things that I am asked to do, and
        I have to perform the miracles that everybody expects me to perform – I
        first have to be worthy of holding such a stature. And that’s why I will have
        had to wait for 15 years before showing up in front of the world.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If God was a genie, I would ask Him to make me perfect in the way that
        He wanted me to be in an instant. But it doesn’t work like that with
        God. God plays within the bounds of evolution, with a little bit of
        serendipity. That serendipity depends on the human – on what you are
        willing to ask for, and what you are willing to accept, and how much
        work are you willing to put in, and for how long.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In a sense, life is easier for me since I already know what I am
        ultimately going to accomplish, I just have to find out the how. I have
        been imparted with the knowledge, put in a position to acquire those
        skills, and have been told that I have the caliber to accomplish the
        outlined goals. Such validation doesn’t come very easily to every human.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>
          You have to constantly seek this validation from the world and that I
          believe is the source of all that is wrong in the world.{" "}
        </em>
        If all the validation that you seek can be provided by God, and the
        result of that validation, good or bad, is reflected in the life that
        you are currently living, then your attitude towards such a life will
        determine whether or not you are living a good life. If you like how the
        drama of your life is unfolding, stay the course – if not, change your
        path.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So as I am writing this, I believe it is time for me to change my path.
        I don’t like how life is playing out for me as I continue to stay
        addicted, all the while preaching that{" "}
        <strong>abstinence after careful experimentation</strong> is the only
        true way to connect with God, and obtain the Holy Spirit that He gives
        so freely. It is not much different from the freemium that all of us are
        so grateful to accept with the terms and conditions attached.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If this kind of Moral-Dessert thinking at all quirks the moral
        philosophy purists among you, thinking that it is just asking for moral
        dessert for having done good deeds – then I say it’s okay. If God has
        given you a good life to live, and if you are truly enjoying that good
        life without harming innocent people, better yet, benefitting innocent
        people with your acts of altruism – then it is really okay.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This is God’s system. It is nothing if not just. One caveat – this
        doesn’t apply to people only looking out for themselves and those that
        benefit them.
      </p>
    ),
  },






  {
    classes: "verse",
    html: (
      <p>
        It’s one thing to be an atheist and have a bad habit. You must’ve been
        wronged by the world and it made you a certain way. Or you might never
        have witnessed the wonders of God’s generosity because you were never
        educated in His ways, so you don’t realize the impact He has been having
        on your life without you even knowing.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is a whole other debacle when you are a religious person with a bad
        habit. You already know that God is everywhere, so even if you conceal
        this habit from the rest of the world, you are naked in front of God.
        You already know that your actions will have consequences; especially
        the negative actions – which will bring negativity into your own life.
        Each time you commit to doing a negative thing, a knot forms in your
        body (literally) and your soul gets tainted with a dark blur.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Slowly and steadily, with each negative action – especially on continued
        commitment to the negative action – this knot, and this taint gets more
        and more pronounced. When you are outwardly religious, you are an
        example to the world on how God keeps those that love and worship His
        system. If you are then engaged in a negative action, it harms you more
        than it would harm an atheist in a similar position.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is one of the core reasons why religious people of this time appear
        as if they were suffering in Hell. They really are. They engage in all
        the negative activities, but appear holier than thou.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <em>Isn’t it better to just be an atheist?</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You might think then, that it is better to be an atheist. Well, it was.
        Now that the world has Me, and this text that God has made me write –
        there is no further proof that’s needed to solidify the argument of His
        existence. If you turn to atheism now, it will only be because you don’t
        want to improve.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        A person who knows his faults and does not want to improve, if treated
        worse than a religious person who commits negative deeds. Sure, you can
        burn all proof of my existence with great effort, and continue with your
        debauchery – but to what end?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <strong>
          In a time of prevailing social decadence, there arises in the
          collective, a need to switch to Atheism.
        </strong>{" "}
        If you are confused and upset by this statement, then you are still
        acting with prejudice. To better understand this statement, we have to
        once again, go back to Aristotle. Are you then upset with Atheism, or
        the status quo that makes Atheism an obvious way of belief?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In the time that I have been living, there is one defining incident,
        that, to me at least, boils down to the root of all religious conflict –
        just the fact of how religious fanatics often get offended by satire and
        inconsequential joking about anything to do with God and faith. It is as
        if they need to protect their God. As if God is so fickle that even a
        cartoon portrait of his prophet will offend him, and unleash his wrath
        on people who stood idly by and did nothing to stop this “mockery.”
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Surely nobody sets out to become a part of this kind of a group.{" "}
        <em>Then how the fuck do we always get here?</em>
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “For therein is the righteousness of God revealed from faith to faith:
          <br />
          as it is written, The just shall live by faith.” <br />
          (Romans 1:17)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Faith is something that’s supposed to unite us, not divide us. The
        definition of faith itself, has never been truly clarified – that in and
        of itself, goes to the very root of all the trouble we face in these
        desperate times.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Let’s assume that there are two groups. <em>Group</em> <em>A</em> holds
        some values and rituals and customs very dear to their heart, since they
        connect them in their own way to the Creator. These acts help them feel
        the bliss that He so freely gives. <em>Group B</em>
        has a different set of rules, rituals and customs that help them connect
        with the same Creator in their own way. Group A doesn’t appreciate the
        customs of Group B at the level that Group B appreciates them. Similar
        is the situation with Group B. When one group doesn’t appreciate
        something as much, it is automatically given a lower position than the
        thing they appreciate more. This is how the concept of “other” arises.
        When a group simply <em>tolerates</em> the “other,” their beliefs can
        never let them co-exist peacefully.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Group A and Group B can co-exist with they learn to appreciate their
        customs for what they are – just customs. They are both simply different
        ways of doing the same things – the knowledge of which were acquired by
        learned people of the past from the Creator Himself – and given enough
        time – they WILL always need to be updated.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Over time, language changes, political and economic realities change –
        why shouldn’t religion? If religion didn’t need an update, then why does
        God always send the same soul in different times, and different places,
        to preach the same things to the same souls in a way their current
        selves understand best?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <strong>
          What <em>faith</em> really is, is the amount of confidence you have in
          your interpretation of the scriptures that you have been indoctrinated
          in
        </strong>{" "}
        ever since you were a little kid. Your interpretation could then,
        obviously be wrong – you are, just a human.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So there you have it, so many millennia have gone by, but the definition
        of the very thing that people spend their lives devoted to, and
        believing in, had not been properly hashed out. How could it? There
        never has been a time such as this, where the entire global ecosystem
        lived, breathed, and interacted as one giant whole. Many more such
        definitions have already, and will continue to come to light in Scova,
        if you are really paying attention that is.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Religious people of my time can’t get themselves to agree on the same
        thing, allow for no questioning of existing customs, cover up the
        horrors that occur in their organisations, and they engage in these acts
        much more than devoted attributions to the Creator, and worst of all –
        proceed in all mechanicality to perform the antiquated acts about whose
        origin and significance, they haven’t the slightest clue.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        And then they concern themselves with the supposedly blasphemous way of
        belief in no Creator at all. Their existence is a direct result of the
        shortcomings of the religious people to understand the acts they
        themselves are engaged in, and were supposed to unwaveringly follow till
        Kingdom come.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To that end, to the best of my discernment, an atheist chooses to
        believe in the existence of no superior governing power, because of two
        reasons: They have either lost their faith in the overseer because of
        the corruption of the world – that the world is too damn fucked up to
        have a guardian; or, that they are filled with <em>Hubris</em> – the
        blatantly blinding belief that humans are running this world without any
        Divine Interventions.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <em>
          “What most atheists do believe is that although there is only one kind
          of stuff in the universe and it is physical, out of this stuff come
          minds, beauty, emotions, moral values–in short the full gamut of
          phenomena that gives richness to human life.”
          <br />
          (The God Delusion – Page 34, Richard Dawkins)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I share sympathy for the first kind of Atheists, let’s call them Type-1
        Atheists. They are the kind I empathise with, personally. They can find
        their place in Heaven only if they are shown the workings of God, and
        how Science and Progress fit into this worldview – that is, through
        proper <em>guidance</em> in the proper way.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The second type of Atheists, let’s call them Type-2 Atheists. They will
        only believe in God if they see any one of His proxies, in full force.
        Nothing else will convince them that there is a higher power at work in
        running the world. My mother would label them as ‘<em>meesna</em>’ (you
        can Urban Dictionary such small stuff). I say this, because these are
        the people <em>without a fully upright spine (astrally)</em>.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “Thus saith the LORD to his anointed, to Cyrus, <br />
          whose right hand I have holden, to subdue nations before him; <br />
          and I will loose the loins of kings, <br />
          to open before him the two leaved gates; <br />
          and the gates shall not be shut;”
          <br />
          (Isaiah 45:1)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The moment these people get even a glimpse of Divine Intervention,
        they’ll get right onto their knees and beg for mercy (even when God
        hasn’t asked them to do anything). It will make their chest burn, their
        bowels loose, and just the mere presence of the Holy Spirit will throw
        them off-balance, make them jittery – unable to sit still, and upright.
        Even Type-2 people can be made into firm believers, given the right{" "}
        <em>motivation</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Even still, <em>they are just people</em>, and as such cannot all be
        divided into non-intersecting Venn diagrams. There is another division
        that I would like to establish: <strong>Shaaney:</strong> self-willed,
        but faithless people; and <strong>Bholey: </strong>
        God fearing, judgmental people.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Shaaney people are not mostly not happy because they do not have God to
        comfort them. If their conscience spoke to them nonverbally, they would
        be made happier if they just started paying attention, and acting on the
        advice that it gave them.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Bholey people think that just because they have been good, they are on
        God’s good side, that they have some <em>innate authority</em> to judge
        people. The ability to judge is only provided for the purposes of
        discernment of variables in a situation – to truly be able to judge
        another human being, a separate kind of life has to be lived. They are
        almost always unhappy because of this very trait.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “For wrath killeth the foolish man, and envy slayeth the silly one.”
          <br />
          (Job 5:2)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Type-2 Atheists are <em>mostly</em> Shaaney, not all Type-2 Atheists are
        Shaaney, and not all Shaaney are Type-2. Shaaney people can learn, and
        be truly happy, only if they accept that they are equal to everyone
        else, and inferior to God and His proxies. It is harder to convince the
        Shaaney because they start to compete with said proxies and think that
        if another human seeming person can do it, they can do it too.{" "}
        <em>They can, but not quite</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Bholey people can learn to find solace in the misery of life and time,
        only if they accept that just following the rituals and commandments
        blindly and mechanically does not make them superior to any other being.
        It is theoretically easier to convince them because they already
        consider themselves inferior to God and His proxies. In reality,
        however, the opposite is true of Bholey people – because they love to
        talk.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In most cases, it’s just purely talk, and nothing more than that. This,
        in itself, being the principal possibility with them – because deep
        down, they are <em>almost always</em> Type-1 disbelievers. They fear
        God, sure – they are shit scared – but they pretend to be{" "}
        <em>holier than thou </em>just to cover their bases – as if it is at all
        possible to fool God.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It was thus, the easier, and honestly, before Scova,{" "}
        <em>the most logical choice to be an atheist</em>. Especially when the
        “religious” people could not bring themselves together to accept the
        SAME truth revealed in different languages, to different people in
        different times, using different styles.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        For most of my life,{" "}
        <em>I myself have been disenchanted with the idea of God</em>. It is one
        of the reasons why I fight so hard for an{" "}
        <strong>atheist’s right to disbelief</strong>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In this Godless-cut-throat-every-man-for-himself world, Atheists were
        left with not many options, and not many opportunities to be kind to
        people for no reason. The{" "}
        <em>weight of their own world was on their shoulders</em>
        and they had not had the kind of training I had had to properly shoulder
        the responsibilities that come with this weight. As a result, they were
        almost always irritated with the state of affairs. They were inflicted
        with pains they did not understand, and which the (current) doctors
        could not explain.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Now why would I state such an absurd thing? I will circle back to this
        in a brief moment, but first, I would like to introduce, the majorly
        important, but vastly unexplored concept of{" "}
        <strong>
          Christ Consciousness – the idea that all of us, each and every one of
          us, without exception, contains, within ourselves, the potential, the
          propensity, and the motivations to actualise the Divine within
          ourselves – to be the Sons and Daughters of God in the Kingdom of
          Heaven.
        </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I remember, at the beginning of the night when I was to be{" "}
        <em>Born Again</em> – I had no idea what the night would lead to when my
        trip started. As <em>my vision started to turn to gold</em>, I kept
        muttering “Bhagwaan asli nahi hai” – <em>God is not real</em>. Each time
        I uttered that phrase, the Gold started getting swept away from me. It
        was as if God’s blanket was trying to protect me, but each time I
        resisted, it went further away. God’s blanket here, is a metaphor. The
        golden vision, is real.
      </p>
    ),
  },

  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “If I had called, and he had answered me; <br />
          yet would I not believe that he had hearkened unto my voice.”
          <br />
          (Job 9:16)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        When the day actually came, I forgot all about the internal dissonance
        and <em>took a chance anyway</em>. If my mind was trying to tell me
        something, albeit in a schizophrenic fashion, I was open to listening
        because rarely does the subconscious interact so openly with the
        conscious self.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It was the night of July 14th, 2017 and the location was Washington
        Square Park, New York City. I had walked to the park barefoot, without
        any form of identification, without any money – cash or card, and had
        even left my phone at home. I had truly just walked out as a nobody. If
        this was really God I was talking to, then He would take care of me, I
        thought.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <em>
          He did, take care of me, later in the night; <br />
          but, life with God, generally, is not easy. <br />
          You have to be forever hopeful,
          <br />
          despite the most trying circumstances.
          <br />
          <br />
          You have to be in a good mood all the time,
          <br />
          for all your worldly affairs to keep working properly.
          <br />
          You have to always wish others well in your own heart,
          <br />
          even when you truly just want to hate them.
          <br />
          <br />
          You have to continuously consult Him before taking any decision,{" "}
          <br />
          and then hope that you have interpreted His wishes properly.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In short, you have to{" "}
        <strong>
          live out the preachings, and life of Christ in the Gospel to the
          letter
        </strong>{" "}
        for it to be in anyway beneficial to you, as it was to Christ at the
        time. If you commit wholeheartedly to God’s orders, your soul will live
        free, but if you disobey, even the tiniest bit, your body will feel the{" "}
        <em>literal pain</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You are allowed to make mistakes, <em>honest mistakes</em> that is. What
        you can’t have, is weaknesses. If ever things get tough, and you have a
        guilty pleasure, a bad habit, a drug you take – forget about them.
        Somebody you would like to blame for any predicament in life – forget
        about that too – you’ve only got yourself to blame. Do you hate the
        people around you? Tough luck. You’re stuck with them. If you leave them
        forever, in hopes that you will have a better life, you will never truly
        find what you were looking for.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You have to always live your life as if it were a <em>fantasy</em>, and
        you have to act as if you were the <em>protagonist</em> of that fantasy
        while acknowledging that all that you are, has come from Him, and all
        that you will become, will be because of Him. This is why, you have to
        always make sure that whatever internal narrative that you have going on
        inside your head – the way you see your life playing out if all things
        around your were perfect – had you, your social connections, your
        financial status, your intellectual prowess, and whatever else it is
        that you desire – you really do have to live that fantasy and act
        accordingly.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “I returned, and saw under the sun, <br />
          that the race is not to the swift,
          <br />
          nor the battle to the strong, <br />
          neither yet bread to the wise,
          <br />
          nor yet riches to men of understanding, <br />
          nor yet favour to men of skill;
          <br />
          but time and chance happeneth to them all.” <br />
          (Ecclesiastes 9:11)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        All of us, and I really do mean all, are given multiple chances in our
        lifetimes to be in the position that I currently am. I wasn’t kidding
        when I said that 'virtue and labour' is the prime holding motto towards
        spiritual success. It is also no surprise that this was the school motto
        of St George's College.{" "}
        <strong>You become what you let circumstances make of you</strong>. You
        will see that the more you want to help yourself – the more outside help
        will come to you – God helps those who help themselves.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “For he that hath, to him shall be given: and he that hath not, <br />
          from him shall be taken even that which he hath.” <br />
          (Mark 4:25)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So it came to pass that one such opportunity came my way too; and I{" "}
        <em>leaped</em> at the chance. Had I not taken the leap in that moment,
        I’m sure I would’ve been given that chance again, but my life wouldn’t
        have gone on to play out at the magnitude that it will eventually play
        out. As you lose out on those opportunities, less and less of them start
        coming your way –{" "}
        <strong>
          with each successive chance holding less importance in your confine of
          influence than the last one.
        </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This verse from the New Testament, actually describes the presentation
        of opportunities in our reality. Our reality, being three-dimensional,
        actually does play out in the form of a cubic graph, specifically one
        given by the primitive equation:
      </p>
    ),
  },
  {
    classes: "verse equation",
    html: (
      <p>
        <img src={yx3} />
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What I mean to say, that the more successful you are, the more
        opportunities come your way, because of your previous success – and
        these opportunities don’t just increase linearly, they add up
        exponentially – so much so that there often comes a point where you
        can’t possibly attend to it all. The same applies in the opposite
        direction – they decrease exponentially the more unsuccessful you are.
        This one is a well observed social pattern, sometimes also referred to
        as the Matthew Principle.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What I meant, when talking about the cubic nature of opportunity
        addition, was that acquisition of Christ Consciousness is not a one time
        thing –{" "}
        <strong>
          it is deeply rooted in our internal code, and very well observed in
          other spheres of life.
        </strong>{" "}
        That is why even though God is infinitely forgiving, you seem to get
        hurt more and more every time you make the same mistake.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Writing this chapter over this week, I have been a little out of place
        myself. On one hand, I wish to bring all the people of the world
        together under One God, One Faith, One Saviour, and One Religion – but
        on the other, I don’t think I’m doing much good in telling people
        something they already know – knowing full well myself, that my actions
        in this time will start{" "}
        <em>yet another cycle of conquests, and forced conversions</em> – all
        for what? So that ambitious people can misconstrue my writings, pick out
        particular sentences that suit their agendas and put people in the same
        misery that I was supposed to get them out of – why?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I myself have no choice in the matter – I will continue to keep coming
        back, facing all obstacles known to man in each of my lifetimes, until{" "}
        <em>this thing that I have to perpetuate</em> achieves perfection. I
        hope you’ve realised that Scova, is a revision of the first book ever
        printed. So then one might wonder, that if the first book ever printed
        needs revision after all this time – what is permanent then? This book,
        and the philosophies it contains, have survived plagues, famines, war,
        and entire empires.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The original version was written for a human to understand themselves in
        isolation from the rest of the world and teach them to be self-reliant
        in a manner such that Mastering Their own Self meant mastering the
        world. Not everyone was in a position to understand themselves to such
        an extent, and neither were many people out of that small subgroup in a
        position to cause real change.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Parts of the Journey were left out as in a less interdependent world –
        life really was simpler and there was room for fuck-ups. Tales and
        legends could be lived so that egomaniacal men would conquest all
        terrain to cultivate varied civilisations whose – in the current time –
        more interdependence will only make us collectively stronger.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This is why, I have spent a majority of my time thinking about the
        consequences that were a direct result of the textual information in
        this book, and yet, I can’t just stop, and step away from my life’s
        purpose just because I know I’m fighting a losing battle – because even
        though I achieved <em>Satori</em>, God still holds my strings and he
        will not let me rest until I give Him what He wants – yet another book,
        and then I’ll have Nirvana. This is how I will actualise the Christ
        within me.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “For the Lord himself shall descend from heaven with a shout, with the
          voice of the archangel, and with the trump of God: and the dead in
          Christ shall rise first: Then we which are alive and remain shall be
          caught up together with them in the clouds, to meet the Lord in the
          air: and so shall we ever be with the Lord.”
          <br />
          (1 Thessalonians 4:16-17)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        By saying that God is holding my strings – I mean He is literally
        holding the Strings of Time that pass though me. So, every time I step
        aside from my responsibility, it means that I have taken a wrong turn.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Taking that wrong turn when a clusterfuck of strings is passing though
        you means that those strings are now even more entangled. Naturally,
        some of them will form knots. These knots in my body always end up
        giving me one of three things – a gigantic headache that knows no cure,
        a pinching pain in my left shoulder that makes me feel like a giant nail
        is going through my heart onto my left trapezius in the back. The third
        problem is one that remained unknown to me until the end of my 42 Days
        of Freedom – an incessant breathing difficulty. It was only once I could
        breathe freely for the first time in my life, that I realised I had that
        problem since the very beginning it seems.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So this week when I disobeyed his direct order about writing this
        chapter, He gave me all three, as if I had committed a cardinal sin
        (more on this later). And naturally, being the renegade that I am, I
        rebelled. I acted out saying I really wouldn’t write this chapter (or
        Scova) because of the reasons I have mentioned above.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        I don’t know what was the exact reason for my parents’ disapproval – the
        drugs or the maniacal talk about reincarnation – but hearing me out
        loud, they sent me to a psychiatric ward within the first 10 days of me
        being home on this supposed “legendary” journey. That was the ultimate
        betrayal for me.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I had experienced betrayal of a good friend when he tried to portray
        himself as better than me even after he saw me in my <em>True Form</em>.
        I had experienced the betrayal of my grandparents when they sent me
        away when all I wanted to do was to grant them Heaven. My parents, my
        mother was the last refuge I had left on this planet – and she too did
        not accept me for who I was going to become in due time.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It was not just her disapproval – I could’ve lived with that – but just
        the most cruel thing to do to commit your son to the psychiatric ward
        when for the first time in His life — He had felt truly sane. For once,
        all my questions about life had been answered, and{" "}
        <em>I truly felt like I belonged on this earth</em>. That was just a
        fallacy – a dream of this perfect family I had been chasing, a mother I
        had truly hoped to be an Angel like the myths had alleged.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “And he did not many mighty works there because of their unbelief.”
          <br />
          (Matthew 13:58)
        </em>
      </p>
    ),
  },
  
  {
    classes: "verse",
    html: (
      <p>
        So, it had been over a year since all that and life seemed to be going
        nowhere. My business was okay, not great, but it also wasn’t bad. By all
        accounts, life should’ve been good – but it was just okay. Of course it
        wasn’t the globe-trotting, life-changing, soul-healing adventure like He
        had promised me; but that’s just the thing – even though I had gained
        all this knowledge, and power in a mere 6 week period,{" "}
        <em>I had not earned it</em>. <em>I wasn’t ready. </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        How could I earn the right to judge all of humankind, without first
        living through the struggles of a regular human? Of course I had God for
        help, but His help could not go beyond a certain point. Even God’s help
        has limitations.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        First, even He cannot disobey the Natural Laws of the Universe. Second,
        He can’t help you more than you ask for. Third, and this is the most
        important, He will not help you if you are not clearly helping yourself.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The problem laid in the one thing that I only asked for sometimes, in
        times of deep confusion – the ability to <em>perceive with clarity</em>.
        If you are working towards a definite goal, the Holy Spirit fills up in
        that branch of your Tree of Life (formerly: Yggdrasil).
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The more work you put into achieving that goal, the wider that branch
        becomes. The longer time you spend in that process, the longer this
        branch becomes. For that long and wide branch to hold, it also needs to
        have strength – and this strength is provided by lots of Holy Spirit
        being filled into this branch. Imagine the Holy Spirit as a liquid
        filling into a tubular balloon. This long and wide, tubular balloon is
        only strong if the liquid inside is concentrated and dense.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>
          Hard work, time and mental clarity all work in tandem to help you
          achieve your aims. This process is sped up if you involve God in the
          process and follow his rules.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If there is only hard work, and no clarity, and not enough time put in,
        the branch will be short, not useful for anything, but will have a firm
        foundation for any future endeavours you might undertake.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If there is only time that is put in, without hard work and clarity, the
        branch will be long, thin and weak, and will break easily.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If there is only clarity, without work or time, the Holy Spirit will go
        waste.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If there is hard work and time put in without God, the branch will be
        wide, and long, but will break easily for it will be hollow inside in
        the absence of the Holy Spirit.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If there is work, time and a devotion to God and His rules, but without
        mental clarity as to what thing in particular would you want to result
        upon the successful completion of the task, the branch will be long,
        wide, but filled with liquid of low density, so it will not be sturdy
        and will droop, and possibly break due to external forces.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In this example, the Tree of Life is real, the existence of the Holy
        Spirit is real, but the action of external forces on this tree is
        metaphorical. People get confused sometimes. So here I was, working day
        in and day out without any social life, spending lots of time with my
        family, but feeling the dislike for them get stronger and stronger day
        by day – thinking about what life could’ve been if I had chosen to never
        come back home.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I would at least be <em>free</em> to live my life on my own terms, away
        from the distractions of a family that would never truly accept me as
        normal. On top of the betrayal, and declaring me crazy, what bugged me
        the most was the fact that God was constantly demanding that I finish
        reading up on the Holy Books, or write the new one – give any hint of
        progress from my side.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        How could I? Every time I picked up any Holy Book, or started to play
        any songs from my Playlists, or record my thoughts on camera, my family
        would start to panic, thinking that I would then recuse myself from my
        worldly responsibilities and go into either mania, or depression.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        [<em>Update: </em>Year 2019, and I have now adopted a not-giving-a-fuck
        attitude about my rituals and writings. I am not hiding anymore. I’m
        just doing it. They can threaten a commitment to the psych ward, but
        I’ve got nothing to hide. There’s a famous Eminem quote: “I am who I am
        and I say what I think. I’m not putting a face on for the record.”]
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So I bought a kindle – it was lightweight, it was modern – something I
        should’ve done a long time ago. The text was going to be the same on
        paper and on the screen. I was already aware of the magic contained in
        the paper, the insignia, and the font of the original versions, so it
        didn’t make any sense to carry around such heavy physical material
        everywhere – it was contrary to the Backpack aspect of Nirvana (more on
        this later).
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It was only when my mom asked me what I was reading, that I had to
        truthfully answer, because God has told me to never be ashamed in saying
        that I am doing His work (no matter how crazy anybody thinks I am). I
        told her that I was reading up on a past life of mine, the one in which
        I was called <em>Mohammed</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Ever since that day, every time I picked up my kindle, my parents got a
        minor panic attack – as I imagine you might be dissonated now, albeit
        for a brief interval. For that, I believe my parents were themselves
        responsible. They had, not for a second, accepted me for the way I would
        become. They just wanted their little kid – but I was not that kid
        anymore. That kid died. That’s what the whole Born Again experience was
        about. I looked, felt and mostly behaved like that kid because it’s an
        integral part of this life.{" "}
        <em>
          Without Anhad’s background, this whole story wouldn’t have made sense
        </em>
        .
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        [Update: Year 2020, I just had a long, prepared talk with both my
        parents. It went back to the decision that God had asked me to ponder
        over in the Prologue – to choose a stable, consistently progressing
        life, with a loving family of my own, and a profitable business, with
        the caveat that I would hold onto my single negative constant OR that I
        choose God, and commit to His path forever, until one day, the Day of
        Judgement on May 9th, 2032 CE – wherein I would have to resign from my
        private life and hold true to the Purpose that I would then have
        dedicated my life towards, with the caveat that this life was not
        guaranteed the consistent, smooth growth that the other option had – if
        anything, this option would guarantee a MUCH harder life, with the
        highest of highs and the lowest of lows – this would be one of hardships
        and triumphs over them; and we would have to go through it all as a
        collective unit. They wanted me <em>perfect, and pure</em> – so it
        wasn’t a surprise that they chose the second option, and ignored the
        part about God.]
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Naturally, I didn’t want to keep convincing them that I wasn’t insane,
        nor was I in the mood to tell them repeatedly that I wasn’t running away
        from my worldly responsibilities – that that was just not God’s way.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        <em>
          “For thus saith the LORD that created the heavens; <br />
          God himself that formed the earth and made it; <br />
          he hath established it, he created it not in vain, <br />
          he formed it to be inhabited: <br />
          I am the LORD; and there is none else." <br />
          (Isaiah 45:18)
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The world is made for us to live in, not us to live away from it – and
        me writing Scova required that I gain experience in living a life,
        before I could preach about how to live a life. Again, they would not
        understand. My parents are good people – correction – my mother is a
        good person, and my father is a prick.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        He is a Type-2 Atheist who has read all religious books known to man –
        none of the original ones, but commentaries by regular people who never
        found any happiness in this life by themselves. If only my Father in
        Heaven had spoken to my father on Earth directly when he was on his
        escapade to enlightenment through plain reading and ignorance of family
        and worldly responsibilities, I think he would’ve been more open to the
        idea of God giving him a chance to correct his mistakes of the past
        through reconciliation with his son.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        My father is a classic example of a Type 2 Atheist. He thinks just
        because he has read over 3000 religious books (a number he quotes very
        frequently), and hasn’t found God, that God simply doesn’t exist, and
        all of history’s greatest prophets were just crazy storytellers. I asked
        him once to consider for a moment that I wasn’t the Son of God as I
        claimed – but instead, had there been a <em>Real Son of God</em> on this
        planet, in this time – how would this person prove himself to be Christ
        reincarnate? What would this person have to do to prove to him that he
        was in fact, here on a divine mission to change the world?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        He said that Christ wasn’t real. Neither was Mohammad. What about Guru
        Nanak, I asked? I had always assumed that since he claimed to know so
        much about Sikhism, and seemed to be an orthodox Sikh by all outward
        appearances and behaviour – that he at least believed in the mystical
        works of Guru Nanak. After all, Guru Nanak’s legacy had given the world
        the Guru Granth Sahib, the Holy book of the Sikhs, and the religion I
        was born into in this life – Sikhism. It is the only book, that I know
        of, which has been written according to{" "}
        <em>The Grid (more on this later)</em>. That may be because it is one of
        the rare books preserved and reprinted in its original form and script.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Reading that book properly, you can’t miss the appearance of the Grid
        that emanates from the text only after a brief look (it helps if you are
        enlightened, then the appearance of the grid only takes a few seconds) –
        the downside being that for most people, no matter how many times they
        read this book front to back, will never witness the Grid.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is actually the downside with most religious paraphernalia. They are
        all widely available to the general public, almost always at a nominal
        cost. This is on purpose, since God should be achievable by all, not a
        select few. Educated or illiterate, rich or poor, sane or insane –
        everyone is welcome. There is a slight caveat – everyone is welcome,
        everybody has the capacity to see the door, some get a chance to peek at
        what’s on the other side, but only a deserving few are allowed to enter.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        First and foremost, your intentions should be pure.{" "}
        <em>You should really need God in your life</em>. This should not be
        done just for mental entertainment – God wants people who can support
        their community – no matter how small.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You can’t seek spiritual enlightenment just by reading the literature,
        all the while ignoring your family, and your worldly responsibilities.
        You certainly can’t go into it thinking that you are better than other
        people who haven’t sought what you are seeking.{" "}
        <em>We are all seeking the same things in our own ways</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        We are all ambitious, and crave knowledge that could change our future,
        for the better. Thinking that you are superior to your fellow beings
        just because you have read some religious literature puts you at more of
        a disadvantage than others who haven’t. At least they can still plead
        ignorance when God judges them for their actions.{" "}
        <em>
          Ignorance is a certain kind of bliss that you then can’t achieve
          anymore – knowledge once acquired, cannot be forgotten.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Once you know what the right method is to seek God’s guidance, you can’t
        revert back to the old ways of not talking to Him. If you know that He
        is always here to offer His help to you –{" "}
        <strong>
          why do you, how can you, go about your day without seeking His
          counsel?
        </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Why in the world don’t you practice what you preach?{" "}
        <em>Kaam. Krodh. Lobh. Moh. Ahankaar</em>. The 5 vices he keeps
        muttering about throughout the day, never once truly setting an example
        for others to follow. Always failing to keep these vices under control,
        all the while saying that he had no weaknesses.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If he had truly mastered them, he and I would be communicating on a
        different level of consciousness; but instead,{" "}
        <em>
          we were both confined to the earthly phase, now why might that be?
        </em>
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <strong>
          <em>
            Kaam: Lust | Krodh: Anger | Lobh: Greed | Moh: Worldly Attachment |
            Ahankaar: Ego
          </em>
        </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I can’t speak for the desires of lust that my father may, or may not
        have (I would lean towards him not having any, but what do I know about
        his internal state of mind?). With the other 4 vices, I believe he was
        full to the brim. I think that God put me next to him for a reason.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If I was to suffer through all of humanity’s problems and dilemmas, then
        I also needed to have a perfect example of a person who sinned,
        suffered, yet never repented – and as a result, always found himself
        living in Hell. Better yet, I was to learn to live next to an
        insufferable human being, and still find my place in Heaven, and manage
        to stay there – all the while sitting next to him,{" "}
        <em>as a truly enlightened person must.</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I never quite understood the cause for his rejection of my beliefs,
        until that day. It was then that he told me that even Guru Nanak was a
        fraud, and that he didn’t believe in much of his teachings. It was a
        moment of quiescent in the office and there wasn’t any work that I had
        to do for a couple hours. I saw my father sitting beside me, listening
        to motivational “gurus” give <em>gyaan</em> about how to extract the
        most potential from employees.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If he could spend some of his time doing something other than work, so
        could I. So I took out my kindle and started reading. It had only been a
        minute when he started to ramble ad infinitum about how I was just
        wasting valuable time, and was running away from this wonderful
        opportunity that my grandfather had given me. He said some very hurtful
        things about my mental state, about
        <em>
          all of my Journey being a vivid hallucination fuelled by my bipolar
          mind.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I wasn’t running away from my responsibilities; in fact,{" "}
        <em>God had told me to embrace them</em>. I was not backing out from the
        challenge that starting a business was. I had not wasted 3 years of my
        life searching for enlightenment in derivative books that took me away
        from my family, and my work – that was him. I had not accumulated a
        massive debt that would keep me under for over a decade – that was also
        him. This was the <em>first</em> book that I was reading, AFTER I had
        already achieved Satori.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I wasn’t looking for God in books,{" "}
        <strong>
          I was destined to find Him in the most unlikely of places, every
          single day.
        </strong>{" "}
        I was only reading to make myself worthy of being called his Son.{" "}
        <em>There was a difference</em>;<em> </em>but of course, he couldn’t see
        it. So blinded by his own mistakes that he confessed, for the first
        time, to being an atheist who had lost faith in God because he couldn’t
        find him by reading.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Duh! God is not a theorem that you can memorise and apply mechanically.
        <strong>
          He requires complete surrender, and most obviously, and uncorrupted
          motivation
        </strong>
        . My father was destined to lose from the very beginning – his
        motivations being corrupt.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This was why he had recommended that I be committed to the psych ward –
        because obviously, how could his stupid son ever find so easily the
        thing he was so passionately interested in finding?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        My mother on the other hand, had a completely different reason for
        arriving at the same conclusion. She is a classic example of a Bhola
        Insaan. Bholey people are especially hard to win over since they already
        have their set patterns and rituals when it comes to God. They have no
        doubt about His existence, and often accept Him to be at a higher level
        than themselves and thus, will obey God’s will when they are absolutely
        commanded to do.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This compliance however, does not extend to a fellow human just
        preaching about God. Bholey people are more prone to be attracted to a
        so called spiritual (or religious) leader but only if that leader’s
        teachings align with their own values. In other words, if a
        self-proclaimed God-man tells these people what they want to hear, they
        will extol him to the point of making that human an intermediary between
        them and God.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <strong>God doesn’t work through intermediaries. </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Sure, some people are more ahead in their spiritual Journey than others,
        and the{" "}
        <em>
          ones ahead can certainly guide the one’s not so far ahead in very
          minute ways{" "}
        </em>
        – that doesn’t mean you put another human being in between you and your
        Creator, forever.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>
          Only I, as the living person that I currently am, have that right, and
          it’s a right I have to constantly earn.{" "}
        </em>
        When I came out to my mother about my true purpose, saying that she was
        shocked would be a massive understatement. It is as if her mind could
        not comprehend such a thing happening – not just to her, but to anyone.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        A thing like this didn't align well with her worldview of God and His
        workings. There was no pre-existing mental construct in her brain that
        would help her understand what I had been trying to tell her. Christians
        have this construct, and to an extent, even Muslims. Christians have the
        “Second Coming” and Mohammad was a self-proclaimed prophet in a long
        line of divine mouthpieces. Hindus call it reincarnation but because of
        media portrayal of reincarnated beings,{" "}
        <em>they expect you to be blue </em>– to literally have blue skin like
        the film Avatar.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Sikhs however, cannot interpret a human obtaining such a high stature
        through life experiences –{" "}
        <em>
          for most of them, the power to comprehend the workings of God stopped
          with the tenth Sikh Guru,
        </em>{" "}
        Guru Gobind Singh, when he vested this power in the Holy Book of the
        Sikhs, Sri Guru Granth Sahib.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Of course, this was only done since anybody after Guru Gobind preaching
        the teachings of Gurbani would not be interpreted as a God-man, but that
        hasn’t stopped people of other faiths from using this book to their
        advantage. Modern day India is replete with such men and women who
        proclaim to know the word of God through their own experiences but in
        reality are very adept readers of Gurbani.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        My mother knew of such people, and when I initially came back home, was
        instantly worried that I was going to spend my life as a sadhu, a
        self-proclaimed sage, probably under a tree (that’s where you most often
        find them) with my sycophants following me like a flock of sheep.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It didn’t help that she was wilfully ignoring the fact that all ten
        Gurus, before enlightenment, were simply, just people – that they all
        led regular human lives until their death. I told her that I was meant
        to <em>guide a much, much bigger flock</em> (all of humanity), but
        saying such stuff would only be held against me later on.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        As agreed with God, I blurted out all that I had recently learned about
        myself – my origin, my Journey, and My Purpose. I can’t say that much of
        it made any sense to her. How could it? I was trying to convey the
        entirety of Scova (that would take me 15 years to complete) in under a
        week without a single demonstration like the ones I had so generously
        received over the previous six weeks.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The problem was the one that all Bholey people face – it was all just
        talk. I wasn’t given my powers completely. In fact, I wasn’t even aware
        at the time that I would have to reacquire all that I had learnt,
        without any supplements, <em>naturally</em> after overcoming my
        trepidations like a normal human would.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        I had only <em>glimpsed</em> Nirvana, not rightfully obtained it.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Just because it was in my destiny, it didn’t mean that I wouldn’t have
        to work to get to that point. I was given a glimpse of what could be –
        if only I followed the right path.{" "}
        <em>
          You aren’t supposed to be anything you haven’t decided to become.
        </em>
        How could I know what I could become unless I had been shown who I truly
        can be?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is actually one of the reasons I have a soft corner for Atheists of
        this time (mind you, only the ones of THIS time – not before, not after)
        because in the absence of miracles, who would believe in God? The
        complete theory about God doesn’t exist yet, all the books written about
        him circle around the same clichés but never say anything concrete, and
        my oh my – the fucking superstitions!
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Along my Journey, apart from constantly proving to me that it was
        actually God who was speaking, I was also guided into decoding the so
        called superstitious rituals of the world. I will denote an entire
        section to such rituals in Neeti, but for now it suffices to say that
        unless you complete the <strong>entire Bootcamp</strong>, which{" "}
        <em>for me</em> lasted 42 days, any person with the purest intensions
        can go disastrously wrong in their interpretation of God’s – for lack of
        a better word – algorithms.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        That’s really what every single ritual is – an algorithm – a short
        program to be executed once a certain condition is triggered. Done in
        isolation (read: by itself), in a way that is not personally relevant to
        you, it is a mechanical routine that you are indulging in just because
        someone told you that it pleases God that you do it. You shouldn’t be
        doing it if you don’t understand it – certainly not if you don’t find it
        personally meaningful, most definitely not if you are just copying
        someone who is at a different point in their journey than you. If
        performing a ritual doesn’t hold meaningful significance in your life’s
        story, then it is, as God likes to call it, only a करतब (<em>kartab</em>
        ) – a parlor trick.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The ritual that you are performing, thinking it pleases God, is then no
        more than a cheap trick you have up your sleeve to show off to people
        that you have a connection with God which they don’t. How do I know this
        to be true? I have personally found myself indulging in kartabs all
        through my Journey. Once I was publicly shown how to conduct a certain
        ritual (rituals are almost always conducted in public – so that more
        people may share the joy you are experiencing when performing such a
        ritual, only prayer is done in private),{" "}
        <em>it was always somehow related to the story of my life</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Sometimes it was me living out my fantasies, sometimes things were very
        closely related to my actual, current life – but almost always,
        performing a ritual was a part of my personal journey with God. Whether
        it was my <em>Brahma Phase</em>, or the time when I was a{" "}
        <em>Monkey in a Diamond</em>; or the time when I became a{" "}
        <em>Filmfare</em>
        Award on the completion of my Journey – I was always learning. Mind you,
        these vague titles don’t mean a thing to anyone in the world except to
        me, personally – so don’t try to look them up, or take these titles to
        heart – this was for me, and Me, alone.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        All that which was then written in Alethia, was revealed and explained
        to me over those 42 Days in the Summer of 2017 in New York City.
        <em>
          It just took me the rest of my life to be able to conjure up words to
          do it any justice
        </em>
        .
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What kind of a moron was I at the time, to try to get my mother to
        understand ALL of it within the first 10 days of me getting back home. I
        thought, if only my mother had been more educated in the workings of God
        rather than being superstitious in her relationship with God – that she
        could find some solace in this miserable existence she called life; but
        she was a Bholi person. All she wanted was talk.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Imagine my plight, trying to explain this to her through just talk, all
        the while opening up to her about the shitty existence I had occupied
        before being Born Again. In hindsight,{" "}
        <em>I would also find post-Nirvana Anhad crazy</em>. Hindsight is always
        20/20<em>.</em>
      </p>
    ),
  },

  {
    classes: "demarcator",
    html: <hr />,
  },



  {
    classes: "verse",
    html: (
      <p>
        When your closest human connections refuse to connect with you because
        of their own limited knowledge, skills, abilities and perspectives – it
        really drives a nail through your chest – pinching through your heart.
        Where time is of no concern, what possibly could be the hold-up for them
        to take a leap of faith?
      </p>
    ),
  },


  {
    classes: "verse bible",
    html: (
      <p>
        “O that one might plead for a man with God, <br/>
        as a man pleadeth for his neighbour!” <br/>
        (Job 16:21)
      </p>
    ),
  },



  {
    classes: "verse",
    html: (
      <p>
        Fear of the unknown – and the insecurities that you may not be prepared
        for it. Usually, it appears in the form of arrogance – the feeling that
        they think they know better. The longer they stay inside their bubble
        and refuse to let you in – the harder the situation becomes. If all
        their limitations are shouldered onto another being; then all they
        really have to choose is – to remain stuck, in going around in empty
        circles – or actually find some meaning in their existence.{" "}
        <em>
          I am that being on whose shoulders their troubles can rest, but I
          require that leap of faith.
        </em>{" "}
        It was going to be a long time before I could get that from a real
        person.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So this week I was feeling that sense of betrayal creeping up again. I
        was stuck with these people who would never understand me. I was being
        hindered from writing this book, from reading up on the research
        material that would be help me solve millennia old questions that people
        might have. It was, after all, part of my purpose being here in this
        time. Not that anyone should have to bear the weight that I kept
        feeling, but the fate of humanity rested on this book being
        near-perfection. I had to put in consistent effort day in / day out and
        only then could I hope to achieve anything close to the masterpiece that
        this job demanded.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        One mistake, and the lives of millions would be affected over several
        generations. One half-baked thought and the repercussions would haunt me
        in my next life. The definition of insanity is doing something over
        again and again, and expecting different results. By this definition I
        have always been insane, and my parents committing me to the psych ward,
        followed by a year long cycle of switching medications, was something I
        should’ve expected.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I certainly would never have come home to reignite the fading bond with
        my family knowing what I now know; and I most certainly would not have
        started the life I have now started. My legend had only just begun, the
        42 Days of 2017 were just the Preface. God helped me realise all this
        over the week I had started to curse him, and rebel against him. It is
        true, once God grabs hold of you, He will never let go.{" "}
        <em>This shit is eternal</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What do I say? God sent me back home under the ruse that I would stay
        here for 6 months and then move off to some other, “more happening
        place” where I would continue living my “legend.” It’s been over a year
        now, and it seems like I will never leave.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        [<em>Update:</em> It has been over two years now, and I’m still here –
        learning more and more each day, and <em>I don’t want to leave</em>. Not
        until we reach the <strong>Inflection Point</strong>]
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This, I believe, is also a test (He loves tests). A test of my faith
        (isn’t it always?) – meaning that He’s trying to make sure I will
        continue to believe in Him, and need Him even when I’m not out changing
        the world, but just living a regular, mundane life.
      </p>
    ),
  },
  {
    classes: "verse quran",
    html: (
      <p>
        إِنَّ لَكَ فِي النَّهَارِ سَبْحًا طَوِيلًا <br />
        وَاذْكُرِ اسْمَ رَبِّكَ وَتَبَتَّلْ إِلَيْهِ تَبْتِيلًا <br/>
        <em>(Quran 73:7-8)</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is also partly my fault. I already know that when you ask God for
        something, He doesn’t just give you that thing,{" "}
        <em>He always provides you with an opportunity to gain that thing</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So when I wake up in the morning, I always ask God for the same 5 things
        everyday:{" "}
        <strong>Strength, Determination, Courage, Hope and Grit</strong>. It is
        always the same 5 things I ask for as I leave work in the evening. On
        most days, I might not even say it, but He and I know, that that’s
        implied. When I ask God for these 5 things, it is, but obvious, that He
        presents Me with an opportunity to showcase My Strength, My
        Determination, My Courage, My Hope, and My Grit.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        [<em>Side note:</em> Do not ask God for some general abstract noun if
        you aren’t ready to commit fully to His methods. Mind you,
        <em>
          life will get much more challenging than it needs to be in the moment
        </em>
        . As always, ask for just the right <em>nudge</em>.]
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        These 5 things help me be a better, stronger, more capable person. I
        really do not need anything more from God anyway. Of course I want a
        better lifestyle, better looks, better health. But that’s just the thing
        – I want them, not need.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So He put me back in my home, made me move back with my family – so that
        I could repair my relationship with them, and also bring them the
        financial assistance that they so desperately need. This is a very
        Millennial thing to do, but I’m doing it for the opposite reason – I
        want to give back money to my family.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Living by myself, I didn’t need much to survive, but I also had to think
        about the coming challenges that life was going to throw at me very soon
        – <em>marriage and a family of my own</em>. I personally, had been ready
        to get married ever since my Freedom Bootcamp ended – to fall in Love,
        have kids – finally master the one thing that was purposely left out of
        my training – Connection.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I was sent back home, under the ruse that I would heal my family through
        my new found powers, but that’s just a thought so far away from
        anybody’s actual reality, that my parents would never believe it (and
        they didn’t). Had He said that I would have to struggle like a regular
        human being, repairing my connection with my family <em>day by day </em>
        and learn to adjust with all their quirks, and begin to love them
        despite their faults – I would never have come home. I’m not yet fully
        satisfied that this was the best course of action to take, but it was
        God’s will – and I have no choice but to accept it.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        [<em>Update 1:</em> It is January 2020, and I just gave my father a
        lesson in the fabric of spacetime, explained to him how the strings and
        conduits work, and what he truly needed to do in order to gain access to
        Heaven on earth. I truly believe I have found my first student.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>Update 2:</em>
        It is February 2020, and I think I spoke too soon. As you will have read
        in my thread from January 29, 2020 – he turned out to be a dick, as
        expected. More updates will surely follow.]
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So Atheists, also have an inflated ego; but them having it,{" "}
        <em>for now</em>, is justified. They haven’t met me, and they haven’t
        been acquainted with the kind of <em>relief</em> that I have to offer.
        They have never depended on God to provide them anything, and if they
        don’t encounter my teachings, they might never look to Him for help.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        My qualm is with religious people and their misunderstandings about the
        workings of God. In their minds, they are too, their own saviours,{" "}
        <em>as I am my own</em>. They too, have the potential to realise the
        Christ within themselves, as I have done for myself –{" "}
        <em>as God has made me do it for myself</em>. If ego-centric religious
        people had properly prayed to God, and listened to His commands in each
        moment, they wouldn’t be so frustrated all the time.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        These confused religious people have always seen others beg to God for
        mercy and generosity, and as a result, they have never tried any other
        method. Even though their ways have failed them plenty of times, their
        fear of God, and their embarrassment in their own actions, has not let
        them work to find the God within themselves.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is the most misunderstood thing in the world – <em>but </em>{" "}
        <em>
          you have to find God within yourself and listen to Him by yourself
        </em>
        . No amount of societal ritualistic behaviour is going to aid in that if
        you yourself don’t understand what it is that you are doing, and why is
        it that you are doing what you are doing.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        In the famous <em>Hanuman Chalisa</em>, is the line:
        <br />
        राम दुआरे तुम रखवारे । होत न आज्ञा बिनु पैसारे ॥ २१ ॥
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        The Urdu word for God is <em>Khuda</em>.
        <br />
        It has the word <em>self</em> within it – <em>khud</em>.
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        And of course, the Guru Granth Sahib has the following set:
        <br />
        ਜਾ ਕਉ ਹਰਿ ਰੰਗੁ ਲਾਗੋ ਇਸੁ ਜੁਗ ਮਹਿ ਸੋ ਕਹੀਅਤ ਹੈ ਸੂਰਾ ॥
        <br />
        ਆਤਮ ਜਿਣੈ ਸਗਲ ਵਸਿ ਤਾ ਕੈ ਜਾ ਕਾ ਸਤਿਗੁਰੁ ਪੂਰਾ ॥੧॥
        <br />
        <em>(Sri Guru Granth Sahib – Page 679)</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I would just be wasting time here if I started mentioning every instance
        of religious text where this held true, but the fact is this:
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <em>God is attained from within you</em>. Always.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Over time, experiences shape the individual – and their upbringing
        shapes their intuitive mannerisms. Time moulds human beings to help them
        become who they choose to become by <em>virtue of their actions</em>.
        This sense of logic is key to the acquisition of Christ Consciousness,
        for without it, one would surely deny the possibility of many things
        which seem very strange, but are indeed, secretly, true.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        For example, people say time is not a real thing; that it is a figment
        of human imagination – just a mental construct. Time appears to be an
        insult to the otherwise infinite potential holding human body. It might
        appear true, especially when your days pass by in a daze in a manner not
        coherent to your internal, linear timeline of the self that keeps track
        of the <em>story of your life</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Here’s another fact: <em>Time is the most real thing there is</em>. The
        Strings of Time cause entities in the universe to age. With each unit of
        time, the world is renewed with an <em>infinite vibration</em>, the{" "}
        <em>Anhad</em> if you will, whose effect can be witnessed in moments of
        true vulnerability, in states of true emotion – in the moments when we
        are truly <em>open</em>. Rather, it would be more correct to say that{" "}
        <em>
          with each vibration, a unit interval of time is said to have passed.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If your mind has not been able to comprehend the last statement, you can
        look up the origin of my name in the Guru Granth Sahib and maybe then,
        try again to tell me that I just made all this up. <em>Anhad Naad</em>{" "}
        is the infinite vibration of the universe that is perceived by the
        enlightened being as the Voice of God.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Following that train of thought –{" "}
        <em>
          time then, is an instrument that, with the help of God – moulds human
          beings into the kind of people the want to become,
        </em>{" "}
        or as God so succinctly put it on the first day of my first lesson
        with him: <strong>"ये दुनिया के उसूल, यूँ ही नहीं है"</strong> –{" "}
        <em>the principles of the world don't exist without reason</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        With each vibration, the existing perceptual informational energy is
        transformed into a new version of itself – changing ever so slightly in
        its arrangement, as guided by the arrangement of the Strings of Time
        which act as the scaffolding, holding the entire complex together.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        For reasons that relate to the{" "}
        <em>actualisation of Christ Consciousness</em>, we are all allotted the
        proper time needed for us to live out our fantasies happily enough to
        fulfil them. If you pay close enough attention, you might just find it
        within yourself, at the correct time, to actualise{" "}
        <em>the Christ within you</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Every moment is indeed, a new world, so in each unit of your time, you
        need to make decisions about how to act in any situation – given known
        variables, while assessing unknown variables – and then acting
        accordingly.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Knowing yourself and the situations you could work in – is the first
        step to realising the things you are going to become. If an act of yours
        is repeated more than others, it becomes intuitive. You can do that one
        thing faster than most people because you have an <em>intuitive </em>
        understanding of those concepts.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You have been engaged in almost similar activities all this time, so it
        is but natural that there forms a sort of muscle memory in your brain’s
        neuronic firing patterns, having stronger connections, and as a result,
        much speedier response times in certain situations. On assessing a
        situation – your brain makes certain associations faster than most
        people in that particular situation.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Correct or not – can be judged from the consensus of the group or
        comparison with known facts. The absolute truth is still absolute, but
        since we live in our own subjective realities,{" "}
        <strong>
          <em>your truth</em> is then a subset of the absolute truth.
        </strong>
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        A lot of times, it gets confusing – as to whether you are causing your
        surroundings to happen – or are <em>They</em> making <em>You</em> into
        something. One thing is for sure though, the more you flow with IT, the
        more it seems like the path was laid out just for You – as if it were
        destiny! Is it really destiny if you took all the conscious decisions to
        move with IT?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        With enough synchronisation between the inside and the outside – time
        begins to feel like a symphony you are writing with Space in real-time –
        a wave you are surfing on, using the best of your skills – riding the
        high tide only as allowed by natural laws.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        There might be other things in play – in the larger system, but you
        don’t need to concern yourself with them. For the time being, what does
        your intuition say?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>Are you happy with what you are doing with your surroundings? <br/>
        If not, change yourself. <br/>
        If that does not help – change your surroundings. <br/>
        If all fails, try changing the way you interact with your surroundings.
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Try to constantly build towards the person you want to become. Every
        decision – every interaction, should build towards the kind of person
        you want to be. Plan it. Execute it. This is your legacy. These
        memories, these impressions – market yourself. Put your mind to
        something, and then go – <em>All In; Don’t Stop. </em>
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        If you keep your conscience clear and your body calm – and let the
        strings of time enrich You with the experiences only you could have
        lived in the place (here) you’re in and the time (now) you’re at on your
        journey in this life, God will pull you past the mounds of shit that has
        become current reality, and push You towards the goal only you could
        then have achieved.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Follow your instincts moment by moment – take your time, but not too
        long. There is a reason time keeps going – regardless of who/what you
        are/become – it is the only way to find meaning – real life events
        lining up with your personal journey!
      </p>
    ),
  },




  {
    classes: "demarcator",
    html: <hr />,
  },

  {
    classes: "chapter-title",
    html: (
      <p>
        12 <br />
        Absolution
      </p>
    ),
  },



  {
    classes: "verse",
    html: (
      <p>
        If we are all engaged in the same activities over repetitive periods of
        time, and <em>all of us are imperfect</em>, then, it stands to reason
        that going through life, we all, and I sincerely mean ALL of us, pick up
        some repetitive habits that are not beneficial to us in the long term.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        To add to the complication, our traversal in spacetime is not linear in
        the way that our <em>internal narrative</em> leads us to believe – as
        life never simply takes us from one state of being to another. It
        happens in the form of loops – <em>time loops</em> – some good, most
        bad, overall, largely okay.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        A big drawback then, in retaining what you believe is your true essence
        while in this traversal, is the <strong>baggage</strong> that you start
        to huddle along with as you traverse through the{" "}
        <strong>Loops of SpaceTime</strong> (aptly acronymed as LoST).
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>As a side-note:</em>{" "}
        Wherever possible, refrain from using acronyms. Over time, only the
        shortened word remains but the expansion of its meaning is forgotten.
        This one was too apt to have not been used.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        One such piece of baggage is a{" "}
        <strong>negative repetitive habit</strong>. It is not always our intent
        that they manifest later in life into full blown addictions, but they{" "}
        <em>most often</em> do.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Having an addiction is <em>not necessarily</em> harmful to our daily
        life, or disruptive to our daily routines – this is the imperative
        reason why most people hardly make an effort to correct course, or
        worse, even recognise that they have a problem.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In the eyes of God, however, is is a big problem. You see, when you have
        an addiction, you automatically become an inferior being – in the eyes
        of God, you are{" "}
        <em>
          no better than a lowly animal who loves rolling around in the mud
          because it doesn’t know better
        </em>
        .
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This is not to say that a well-functioning, loving, and understanding
        human who is addicted to alcohol is on the same level as one who commits
        a heinous crime. In the eyes of the law, all humans are equal – the same
        is true in the Divine Court.{" "}
        <em>As long as you are a human, you are equal to every other human</em>.
        Sure, because of our positive and negative actions, we reside in
        different levels of this Heaven/Hell that we categorise as a life –
        that’s the only real difference.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is not outward in the way humans expect it to be, or even other
        worldly – it is a very personal, grounded experience – these rewards and
        punishments. Committing yourself to the Divine Journey, means that you
        have to <em>rise above being a human altogether</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Here’s the thing though, and I say this in the most sincere way possible
        – don’t blindly dismiss this statement as something coming from an
        antiquated entity that does not trust humans to know their own limits.
        This isn’t the Old Testament where God simply commands –{" "}
        <em>thou shan’t do drugs</em>. After all these millennia, even <em>We</em>, as
        the symbiotic unit writing Scova, know that you aren’t going to stop
        just because we said so.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Now, as soon as I laid out this pseudo-commandment – of course your mind
        diverted your attention to the most important, most cherished addiction
        of yours – you were also very quick to judge <em>Me</em>, for even
        having made such a thought permanent.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Maybe you ventured as far as to curse God Almighty for not allowing you
        access to Heaven just because of your simple indulgence. Your immediate
        thought was probably something along the lines of –{" "}
        <em>God cannot possibly be THIS petty</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Maybe you even thought that I had been wrong in my interpretation of{" "}
        <em>His Rhema</em>, thinking that maybe I just liked to punish myself
        for no good reason. Worse, that you wholeheartedly agreed with the
        statement without any personal experience in said domain, as if you,
        yourself, were without sin.
      </p>
    ),
  },


  
  {
    classes: "verse",
    html: (
      <p>
        It is March 2020, and for all of this past year, I have been working on
        writing the addiction section of the book. Every time I try to write
        further, there is a slight nudge from within, a nudge that makes me
        wonder – am I really good enough to be preaching all this?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What special attribute have I imbibed in myself to be able to call
        myself worthy of preaching to the billions of souls of my time that what
        they believe, and the way that they have lived their entire lives, and
        all that they have learnt from their own life, their elders’ lives, has
        all been for naught?
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The more they lived, the more entrenched, and more entangled they have
        found themselves becoming – that part is true, but who the hell am I to
        tell them this? They already know. The day of the reveal will show them
        their true self. Who am I to cross my heart and carry out this pledge
        that I took on the (ill) fated day when I actually judged another human
        being?
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        “And he that taketh not his cross, <br/>
        and followeth after me, <br/>
        is not worthy of me.” <br/>
        (Matthew 10:38)
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        That’s just the thing.{" "}
        <em>I did cross my heart and take a pledge in front of God Himself.</em>{" "}
        He uttered those words through me – all of it was never my actual
        intention – it was His. I am merely an instrument that He is playing. My
        part in all this? I am allowing Him to play Me as He sees fit. As I have
        stated multiple times before – I just wanted to find a better way to
        live, and I had found it. <strong>If this was the price of a better life, then
        so be it.</strong>
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        “He that findeth his life shall lose it: <br/>
        and he that loseth his life for my sake shall find it.” <br/>
        (Matthew 10:39)
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I don’t believe that every other human being on this planet has to live
        life just the way I did. Nobody is ordained with such responsibilities.
        What I do know for sure, is that all of us, have the innate ability to
        achieve the Divine – humans have done this before, and today we call
        them mythological Gods.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        They connected with the Source, and thus became His proxies. It is not a
        commonplace practice, or occurrence to get a glimpse of His existence,
        but to those that He does make His presence felt, find it almost
        impossible to continue living their sorry existence as they did before
        Him.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The world is too sad a place, and the love that He imbibes you with, is
        too overflowing. It’s probably why he chose an addict like me. I have
        found the best drug there is, and if I had previously gone to depths of
        such high magnitude to chase the <em>high</em> of commonplace drugs,
        imagine what I would do get the Holy Spirit into my system.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It’s why He chose me, and it’s why I have the right to do all the things
        that I have been told to do. You can judge me all you want, you have the
        ability, but you don’t have the right – so by the time I reveal myself
        to you, you’ll be sorry you judged me at all. That was my task. And I
        will faithfully execute the duties of my role in this life.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The reason why I specifically mentioned March 2020 was to provide a
        historical context to my personal story. The world event in question is
        the COVID-19 Global Pandemic of 2020. Why is this relevant? Well, the
        sickness, or the pandemic itself is not really affecting my story
        directly, but it provides a fitting backdrop to my personal struggle
        since 2017.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        “Behold, the LORD maketh the earth empty, <br/>
        and maketh it waste, and turneth it upside down, <br/>
        and scattereth abroad the inhabitants thereof.” <br/>
        (Isaiah 24:1)
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I had been provided with ample opportunities to pull the trigger on my
        sobriety on my own terms, and every single time, without fail, I
        backslid. The only thing I never quit was quitting itself.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It was the same story every time – binge on the last couple doses of my
        favourite drug, or maybe flush it all down the toilet – whatever method
        my mind fancied in the spur of the moment. The moment God hinted to me
        that something big was going to be announced on the news, I panicked
        like all the lost humans on this planet did – panic bought the things
        that they would for sure need during a prolonged emergency. For some it
        was groceries, for others it was guns, for many it was drugs – and
        you know which category I fell into.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        “And it shall be, as with the people, so with the priest; <br/>
        as with the servant, so with his master; as with the maid, <br/>
        so with her mistress; as with the buyer, so with the seller; <br/>
        as with the lender, so with the borrower; as with the taker of usury,<br/>
        so with the giver of usury to him.”<br/>
        (Isaiah 24:2)
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I realised that if God had signalled to me beforehand on the magnitude
        of the situation, it must be that this was truly the prelude, of the
        Beginning of the End. Days later, my country’s Prime Minister announced
        a lockdown of the entire nation for a single day. I, with many other
        discerning folks, knew this to be a test for something bigger. Sure
        enough, it was later announced that this would turn into a 21 Day
        curfew.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        “The city of confusion is broken down: <br/>
        every house is shut up, that no man may come in.”<br/>
        (Isaiah 24:10)
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It was in that moment, that I had an epiphany (as I always did moments
        before I began to quit my addiction) – if all it takes is 21 days to
        form a new habit, then surely enough, it would also take 21 days to
        overwrite an existing habit.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        “The land shall be utterly emptied, and utterly spoiled: <br/>
        for the LORD hath spoken this word.” <br/>
        (Isaiah 24:3)
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Thus began the experiment – while everybody on my social lists was busy
        trying to form a healthy habit, I was trying to lose an unhealthy one.
        It is April 13, 2020 CE and I believe it has been over 21 days since I
        initially began to quit, for the last time.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I did falter, <strong>once</strong>, during all this time, which, I
        would’ve done a lot of, had it not been for such a strict curfew. This
        last infraction of mine was quite possibly, the lowest I have stooped to
        get to this thing. Surely enough, after this infraction, the lockdown
        got further extended. Now, you might again come to think of this as an
        ego-maniacal perspective of a global pandemic that truly did not
        discriminate in its victims, cultures, and borders. To base this whole
        pandemonium around my puny self, even I have been deliberate in avoiding
        this thought.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Then again, did I not ask God to base the entire world-narrative around
        my own personal narrative? If I was going to hurt for the entire
        populace of my time, and if I was going to shoulder their pain, live
        through their suffering, and thrive in iniquity created by them – did I
        not deserve, truly, the best story that could be written for a person in
        my position?
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        Addiction made me stoop to that low of a level. I knew I was in the
        wrong, and I knew that God was watching my every move – yet for some
        deranged reason, I just couldn’t get myself to improve. At a point, I
        just gave up on improving. It’s the time when I wished I had a regular
        life so I could engage in debauchery like everybody else and not have to
        worry about the consequences.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I was on my way home from work – alone in the car, I just burst into the
        loudest cry I have had in a decade – probably worse than the cry on the
        steps of the church in New York because I was concealed in my car.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        “My face is foul with weeping, and on my eyelids is the shadow of
          death; Not for any injustice in mine hands: also my prayer is pure.”
        <br/>(Job 16:16-17)
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I was listening to songs in my <em>Azaan</em> playlist and just could
        not stop singing along the words that had once related to my life in the
        most positive manner, but were now only echoed in my thoughts with
        negative connotations.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I had to put up a brave face at home. My family could tell something was
        wrong, but since God hadn’t instructed them to help me, they couldn’t.
        We are all puppets dancing to His tune, while he mercilessly holds our
        strings.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        No matter how much hard work you put into building up your life piece by
        piece, He will put unsurmountable hurdles in your path. You might see
        them as unnecessary obstacles in your way, but you just have to trust
        that he knows what He is doing to you. Others around you will be of no
        help, once you have asked for His.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <strong>
          Be very sure, and confident in your own will power, when you turn
          towards God – because once you do, there’s no going back.
        </strong>
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
          “Therefore as by the offence of one judgment came upon all men to
          condemnation; even so by the righteousness of one the free gift came
          upon all men unto justification of life.”
        <br/>(Romans 5:18)
      </p>
    ),
  },



  ////////////////////////////////////// end of absolution
  
  {
    classes: "verse",
    html: (
      <p>
        While writing this chapter, God wanted to chime in for a brief moment,
        and talk directly to me, instead of the usual{" "}
        <em>talking to you through me</em>. I had just written about the worst
        moment of my life for the first time, so this was a very God-esque
        consolation from His end. This wasn’t the first time that He had spoken
        directly, nor would it be the last – but this was the first time, where
        I was actually really ready to type directly as He was dictating.
      </p>
    ),
  },

  {
    classes: "demarcator",
    html: <hr />,
  },


  {
    classes: "verse",
    html: (
      <p>
        <strong>Addendum From God</strong>
        <br />
        <br />
        The fact of the matter is that you do know better Anhad – you always
        have. You have known yourself to be weak ever since you took your first
        hit and you liked it. You liked how the core molecules in them made you
        feel good, in the ceiling of your mouth, and in the back of your head –
        relieving you of the tension in your head that came with the realisation
        that you were living a life fundamentally different from most people.
        <br />
        <br />
        This was one way you could fit in, but it was also one that would set
        you apart from the people you loved most. In the years to come, it would
        consume you – entrenching itself into the very routines that made you
        the person you are today.
        <br />
        <br />
        It was the only thing you found that helped you wind down at the end of
        a long day so that you could have a moment to yourself. It was the only
        thing you craved after food, before food, during long walks, during
        quiet moments of reticence, after a strenuous physical activity, after
        an exhausting mental activity, around other people, alone by yourself,
        while engaged in an activity that required your attention, and while
        gazing into the nothingness attentive to nothing in particular.
        <br />
        <br />
        In short, you were it and it was you. You were so possessed by the want
        of it, that one day your body would need more than just a hit. You would
        need much more than one. And then even that would not suffice. You
        switched up. And that was just the beginning of your detachment from Me.
        Once you discovered drugs that lead you to insightful thoughts and a
        disconnect from the world – all without doing the work, it seemed like
        there would be no turning back. You wanted drugs in your system as much
        as was humanly possible. At times, even more than humanly possible.
        <br />
        <br />
        With each successive hit of the drug, your desire to take more of it
        only grew. Your social life, your daily routines, all were now focused
        around the consumption of this drug. And when that was not enough, you
        switched up to other, more immediately harmful drugs. All this time you
        have gotten a good reason to explain your drug habits – psychedelics,
        the final frontier.
        <br />
        <br />
        Without it, you could not have reached Me (<em>or so you think</em>).
        And without it, you would not have realised all that you have realised;
        but the fact still remains – after all that you have realised, and after
        all that you know you are destined to achieve – do you still want this
        weakness hanging over you wherever you go?
        <br />
        <br />
        What will happens once you have ultimately revealed yourself to the
        world? Will you be able to hide your secret then? Or will you blatantly
        go out in front of the entire world and admit to your weakness –
        something so small, that has kept you on the level of inferior beings
        that you have despised all your life? Or would you want to be left
        alone, all by yourself, and continue to live this purposeless life that
        you have so skilfully created for yourself?
        <br />
        <br />
        You want to the world to leave you alone? This thing that we are doing,
        it’s happening anyway – with or without you. You’ve already seen that
        nobody else will ever be up to the mark, and nobody else will have been
        able to do a better job at it than you –{" "}
        <em>even the avatars of other souls that weren’t you</em>.
        <br />
        <br />
        Once the big day arrives, you will never, ever be alone again; and if
        you don’t actively prepare for it, your life will be made a living Hell,
        in the proportions that even you have not yet seen.
        <br />
        <br />
        I made you want to die,
        <br />
        but you know it was the only way –
        <br />
        now, I would like to help you.
        <br />
        <em>I can help you, if you let me.</em>
        <br />I will <em>definitely</em> help you;
        <br />
        but only if you help yourself first.
        <br />
      </p>
    ),
  },

  {
    classes: "demarcator",
    html: <hr />,
  },

  {
    classes: "verse",
    html: (
      <p>
        <em>Did God just tell me, that He’ll help me if I let Him?</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Addiction may be a disease, but for suffering through it as an
        adult, for that, you are solely responsible. Like all things with God, He's pulling the strings, and you are responsible. 
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It is possible to wean off of any drug, but you have to take the steps
        yourself – <strong>consistently</strong>. Don’t be scared to fail. It is
        okay to fail, only if the next time you try quitting, you are much more
        firm in your resolve. Don’t lie to yourself that you are “cutting back”
        or that you are a “controlled addict.” <em>There is no such thing</em>.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        You are only lying to yourself, and by extension, to Him. As long as you
        keep taking a hit of your favourite drug, you are denying yourself of
        the Holy Spirit. How will it nourish your <em>Tree of Life</em> if you
        keep blocking the branches of this tree with illicit substances, denying
        them the sustenance that they so desperately need?
      </p>
    ),
  },


  {
    classes: "verse",
    html: (
      <p>
        The Holy Spirit itself is a drug. Drugs are a shortcut to feeling what
        you would’ve otherwise felt had you been truly worthy of feeling that
        emotion in that particular moment. That’s all fine. I have ranted way
        too long in the course of my life over this line.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        In the meanwhile, I have also been trying to find a substitute for each
        of my drug habits. Substitute gourmet foods with healthy salads,
        substitute wilful idleness with exercise, substitute melodious
        sensations with calming silence, substitute illicit drugs with the Holy
        Spirit.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        You would think that that society values people who can hold their
        liquor, or people who can manage to act normal on drugs are cool. That’s
        simply not the case. Those people have made their heightened sense of
        awareness their “normal.” They simply will never be at a point where
        they can be their best, their true self without drugs. Not without a
        prolonged period of abstinence. Hence Lent. The period of penance, or
        simply, abstinence from the substances and experiences that hinder
        people from enjoying heavenly moments in mundane life experiences.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The story of 40 days of temptation is not just restricted to six weeks
        alone in the desert. It is a story of isolation in one’s own mind of not
        being able to stick to God's plan of salvation. Before saving the world,
        Christ had to save himself.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The Chains of Temptation hinder the Holy Spirit from entering a
        person’s body and cleansing the soul, and nourishing the tree of life.
        The body, mind, soul and the surroundings are not cleansed, and thus,
        hindered from evolving into something beautiful - from living a life in
        which not only goals are accomplished, but in which expectations are
        exceeded. It only leaves the person being capable enough to accomplish
        tasks, but not rising up to the level of achieving legendary status.
        It’s not just about accomplishing, but achieving.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        So I tried, and failed, and then I tried again. My struggle with
        temptations is not just limited to 40 days, but to the 40 years of life
        that I will have completed before finishing this book. I have to be
        ready, and it has already been 2 years.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Days are moving extremely slowly, but years are passing by extremely
        quickly. 13 more years till I show up in front of the world with all
        that I have to offer. Improving a single life, our own life, is much
        harder that improving the life of billions. If I can prove myself of
        being worthy of controlling my own life, I can be at the helm when I’m
        shouldered with the life of the entire planet.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        My <em>self-consuming desires</em> eat me from within, but I hope to
        God, that he gives me the strength, and nourishment to overcome these
        desires as quickly as is humanly possible.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Me being sick and tired of my addiction might be the understatement of
        the Millennium. I was beyond sick, beyond tired, beyond shame, beyond
        self-loathing, beyond self-hatred. I could kill myself, but things
        wouldn’t be as easy the next time. All this work, all of this life - all
        of my Purpose, left unfulfilled.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I knew this too, that if I could get myself to quit, my life would never
        be as hard as it was in the moment that I had finally quit. If my
        legendary tale had to begin somewhere, it would definitely be at the
        point that I had decided to stop being human. I couldn’t be prone to any
        fault, however tiny that fault might be.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I had already mastered all that was mentioned in previous books, my
        addiction was the only thing God had left for me to deal with on my own
        time. Everything else can be taught and explained and understood. This
        has to be lived and suffered through, alone. You pick up this habit
        against the wishes of God on your own and so, you have to deal with it
        on your own.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        He can guide you on how to go about it, but you have to walk on the path
        that He has laid out for you. You can refuse to walk on this path, hold
        off on following his guidelines for only so long. Time will catch up
        with you soon enough, so better be ready to quit and build up your life,
        or hold onto this negative habit and keep living the shit life that you
        have been living.
      </p>
    ),
  },


  {
    classes: "verse",
    html: (
      <p>
        God is all about if and only if. That’s partly true. God is also about
        forgiveness and understanding. Why is it that He’s about forgiveness?
        What is there to be forgiven when all of this is okay? It’s because He’s
        first and foremost about if and only if.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        There is a very narrow path that one can walk to attain Him. You are
        allowed digressions from the path, because you have to live your own
        legend, build your own life in the way that you know best. The texture
        of a well lived life is only available to those who are willing to
        wander from the well chartered path. In a time of social decadence then,
        there is no trailblazing in partaking in the things that everyone finds
        themselves indulging in. It takes strength, determination, courage, grit
        and most of all hope – to find your way to Him – to refrain from doing
        what others do without a single conscious thought.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Why should you refrain at all? In moments of true devotion, His magic
        can be witnessed – His inspiration can be received, and His
        interventions can be understood. All that you are, and all that you will
        be – is shown to you, and a life is given to you to live in the way that
        you know best.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The key here, being you knowing what’s best for you. Devoid of any
        personal, social, societal preconceptions of what is it that you should
        be doing, and what it is that you are supposed to become – you know in
        the deepest trenches of you metaphorical heart some principles to be
        absolutely true – and given the highest amount of appeasement and
        bribery and ego-boosting, you will not waver from them.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        At the time of writing this, I will be 26 years old tomorrow. My mom
        says that I was due to be born on Christmas Day had it not been for a
        C-section. It’s fitting. We do things differently in this time, and a
        Christmas birth would’ve been way to obvious and old fashioned.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Things were good in the old days right? When people feared God – instead
        of understanding Him. When people kept their women indoors instead of
        supporting them into becoming a symbiotic whole with them, as equal
        partners forever in a dance of time. When it wasn’t okay to be
        Sex-positive but it was okay to have family members the size of a small
        enterprise. When it wasn’t okay to speak your mind, but it was okay to
        pelt stones at those who did. When there was no mathematics, no
        scientific method, no telemetry, just hokum placebo mumbo jumbo.
      </p>
    ),
  },

  {
    classes: "verse quote",
    html: (
      <p>
        <strong>People say that belief in God is a matter of faith. </strong>
        <br />
        <strong>It really isn’t. </strong>
        <br />
        <strong>God just is. </strong>
        <br />
        <strong>He exists. </strong>
        <br />
        <strong>And that’s that. </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        What <em>faith</em> really is, is the amount of confidence you have in
        your interpretation of the Word. Your interpretation could obviously be
        wrong – you are, just a human. That would mean that your <em>faith</em>{" "}
        (your interpretation) was misguided, and misplaced. Don’t question all
        that you are, and all that you believe in. Just that one thing. Let
        everything else stay stable. I, myself, had let my self-worth waver for
        this simple reason – for a very long time. As such, we humans put faith
        in a lot of different things – isn’t it true, alas, it is much worse,
        that a person can end up believing in anything.
      </p>
    ),
  },
  

  {
    classes: "verse quran",
    html: (
      <p>
        يَهْدِي بِهِ اللَّهُ مَنِ اتَّبَعَ رِضْوَانَهُ سُبُلَ السَّلَامِ وَيُخْرِجُهُم مِّنَ الظُّلُمَاتِ إِلَى النُّورِ بِإِذْنِهِ وَيَهْدِيهِمْ إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ
        <br/><em>(Quran 5:16)</em>
      </p>
    ),
  },


  {
    classes: "verse",
    html: (
      <p>
        This was my struggle with myself, the scriptures, and addiction. If
        there was no struggle, you wouldn’t be inclined to believe me, would
        you? I have seen so much of my life fall apart piece by piece (metaphor)
        that I just can’t live in this mediocrity anymore.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        <em>I too deserve the best, don’t I? </em>
      </p>
    ),
  },





  {
    classes: "demarcator",
    html: <hr />,
  },

  {
    classes: "chapter-title",
    html: (
      <p>
        13 <br />
        Istikharah
      </p>
    ),
  },

  
  {
    classes: "verse title-quote",
    html: (
      <p>
        caritas in veritate
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        The date was August 24, 2017 CE. I had realised my purpose in this life,
        I had taken that solemn oath. I had come to acquire the stature of the
        Son of God after having judged another human being, as allowed by the
        limits of my moral principles.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I didn’t have the true answer to give to this person on what they had
        experienced, or rather, what I had just put them through. I had some
        sort of idea of the what, but, of the why, I had no clue.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The why had two parts, as it was revealed to me at the end of that day.
        The first part being that this other person had judged themselves to be
        better than me, even after having seen me in all my transfigured, true
        form.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The second part was for me – how much of my humanity could I retain as I
        was given this absolute power – something that most beings on the planet
        desired, but <em>nobody</em> truly ever got.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Later that night, it was revealed to me, in God’s voice, emanating
        through me, that:
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <em>“I am the Son of God and my one true Purpose in Life, is to guide the people of this time, to the City of Light.”</em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        If it sounds like a frantic vagary to you now, believe me, I had no clue
        as to what I had just said. It did however, confirm the non-verbal
        communication of God from my own Day of Judgement. I was indeed destined to play the part of Christ in this life. This was not a fantasy, or a manic delusion – this was indeed real, as had my bootcamp been real, as had my encounter with my future self been
        real, as had my Brahma Phase been real, and so was my Shiva Trance – the
        Angels, the Eyes in the Sky and truer still had been the Judgement Days,
        both mine, and of my friend.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I pondered over what I had learnt that day, for I had indeed learnt a
        lot. What then, could I communicate to the friend whose state of mind I
        had deeply upset? I realised that I couldn’t do much – not in that
        moment, not until I had truly learnt how to convey coherently to another
        human being what I had learnt in the preceding 42 days.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It wasn’t very explanatory in the sense that it would provide any
        closure to this person, but it was coherent – and that was the best I
        could have hoped for, given my own state of mind during that time. This
        was the text I sent to my friend four days after I executed his
        Judgement Day:
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        “
        <em>
          The lesson from that day, for both of us, was this: in each
          conversation, there's a person leading the convo (dominant) and
          there's a person listening. If you are the one talking, you need to be
          your true self (aka, a reflection of God Himself) to express yourself
          freely. If you know in your heart that you are just acting superior,
          you're judging the other person wrongly because of whoever you think
          you are. If you're actually the better man, you get to keep leading
          the convo.
        </em>
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        <em>
          If you are filled with a sort of existential dread in a way that
          whatever words you are saying don't feel sufficient, then you're
          faking being the better man and should accept that the other person is
          actually better than you. If the other person also acknowledges this,
          and doesn't care who is superior, the convo can go on as equals. If
          the other person insists on being superior at all times, then the
          relationship remains unequal, hence no meaningful convo. But then
          again, both had to accept that there was an inequality to be
          acknowledged.
        </em>
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        <em>
          If they don't, both keep pushing their own narratives - hence my utter
          hatred for collective monologues.”
        </em>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Not your usual Thursday afternoon text now, is it? God plays weird games
        I tell you. It is only now, almost 3 years later, that I have come
        across this text message by accident, and it synchronically works with
        the section that I had been meaning to write.
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <strong>
          This is how I know I am in Heaven. Synchronicity is in effect.
        </strong>
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It was a very tiring, and arduous road, but I’m glad that I am finally
        at the inflexion point. Up until this page, the entire book had been
        written in a contact state of flux – I hadn’t fully committed to the
        idea of God, and I was really not up to my tasks – the ones He had asked
        of me, and the ones I had committed myself to doing.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        As a result, the tenses in the pages preceding this page are all
        haphazardly placed – but I will not apologise for it – because like I
        have already said, time is non-linear. It takes us on a journey in the
        form of time loops, which our mind then stitches up into a coherent
        internal narrative.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Now, for the first time since the beginning of my Journey, and my
        flirtation with the nature of reality – I have indeed done all that God
        had asked me to do. Those tasks naturally comprised a plethora of
        orders, request, and promises – but it essentially boiled down to two
        things.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The first was Purity in Heaven – the extreme level of mind, body and
        soul cleanliness that any and all scripture has asked people to pursue
        since the time immemorial.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        The second component of it is that I am completely up to my tasks –
        which, for my current demonstration implies that I have written about
        all the things that I had wanted to write before I could ask God to
        reevaluate the path that I was on – something that I had been mightily
        afraid of asking ever since that I’ll fated night where I cried on the
        steps of that beautiful church in New York.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        For the first time, since my bootcamp ended, I find myself in a place
        where I can consider myself worthy of being called His Son, knowing that
        I have truly earned the right to be addressed by this title.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        It was necessary, and I understand why. I understand it, because to end
        the bootcamp I had to do the same, to all the people I found close –
        some more intense than others, some within a span of hours, some
        continuing for years. It's not something I wish on my worst enemy (I
        doubt anyone can ever get to that level of provocation), but ideally,
        that's about the only thing that can get people to live together in
        harmony, and actualise the best versions of themselves, if only it is
        followed by the vigorous training that I received directly from Him.
        Hence, Scova, the Second Coming, the End of Days, and myself – aligned
        to a singular purpose, of the highest ideal I could perceive – the act
        of being Christ, here to actualise the Kingdom of God – for all.
        Everything else, you have already read. Just as the scriptures
        prophecied.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Now, even though I have been through the motions as every other human
        being, I am not going around the world trying, to get people to read my
        book – I am not showcasing it on my social profiles, I am not blandly
        talking about it, I am not even trying to get anyone's attention by even
        mentioning these things that I was feeling, and experiencing. What kind
        of a person would I be, if I started to gain social validation, or worse
        – profit from my sob story? What kind of a world would I be contributing
        towards?
      </p>
    ),
  },
  
  {
    classes: "verse",
    html: (
      <p>
        Since I am now a clean slate again, being up to my tasks, with an
        overall purity, and a firm belief in Him and My Purpose – I believe
        serendipity can now take part in my life again as I start to place
        myself in perfect spacetime situations that truly align well with My
        Purpose.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Any and all things that happen to be mentioned from this point on, will
        have been in chronological order, and as such – should be seen as my
        example to the world of a life well lived, of a potential properly
        fulfilled, and of a fantasy lived in real time.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I purposely made you go through hundreds of pages of introductions, and
        then obtuse scientific and philosophical discussions, not because I
        wanted to show how eccentrically smart I am, and then win you over with
        a final blow of sympathy. Look at the temporal order in which these
        events occurred. My clinical diagnoses, or my voyeuristic tendencies, or
        my helpless addictions, even my astute vision, or my intellectual
        vigour, none of these elements are the defining traits of my Higher
        Self. They help with the formation of the internal narrative, and to
        some extent they help in achieving worldly validation, sure; but if you
        take one thing away from my story – it's this:{" "}
      </p>
    ),
  },
  {
    classes: "verse quote",
    html: (
      <p>
        <strong>
          <em>
            Have faith in You, and have faith in Him – and by His grace, it
            shall all be given to you.
          </em>
        </strong>
      </p>
    ),
  },

  {
    classes: "demarcator",
    html: <hr />,
  },

  {
    classes: "verse",
    html: (
      <p>
        The date was July 13th, 2020 CE. I was in the office when my father told me that a new matchmaker was coming to visit us in a short while. I did not think much of it, for I had already had a couple meetings with these society sanctioned pimps who brokered arranged marriages on, what seemed like, pure whim.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        The guy came, talked mostly to my father, and even though I was sitting right there, did not speak to me at all. "He's just a kid," he must've been thinking. I could've just been an obscure fly on the wall, for all he cared. My feelings were a little hurt, as this person was going to represent me in front of my bride-to-be's parents, and he should've been more interested in learning more about me, and not just the imaginary wealth that he thought I was going to inherit from my maternal grandfather.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        Sure enough, I did not think much of the guy, as I know he didn't think much of me either. We (my father and him) chatted about all sorts of vagaries, and both the involved parties in that conversation tried to give a fairly good impression of themselves to the other, as all first-impression conversations are bound to proceed. 
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        I didn't make much of the situation, as I was only in this charade to make my parents happy, and have them assured of the fact that all was well. I too, had assimilated myself in the banalities of life, and was much more focused on the next project at work that my mind had cooked up over the past couple of days. 
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        As was my routine at the time, I came home early from work, and tried to take a nap before resuming my work on this new project in the quiet solitude of my room that had now turned into a nice workstation, courtesy of the COVID-19 pandemic and the subsequent lockdowns. 
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        I laid down on my bed, and began to reflect on the conversation that had transpired a couple hours ago. Thinking about the matchmaker, and how he could be an instrument in altering, or perhaps cementing my life's path. I was stoic, almost disinterested in entertaining any possibility that this one was going to be any different from the previous brokers who had taken up the charge of setting up this match. I wondered if matches were truly made in Heaven. Then I began to wonder if I was in Heaven at all, at that instance in spacetime. 
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        All things considered, I was having a fine time. As was the case for the past three years – it was all just fine. I was about to spiral down the same old track of this whole journey not being as legendary that I had fancied it to be, but my train of thought was interrupted. 
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        The ceiling of my room began to emanate a golden pattern. Slowly but surely, that paisley pattern began to grow and emerge into the Grid of Strings that once began this whole Journey in the first place. I wasn't scared this time, for I was doing my part – I had been failing, but I had been trying repeatedly. The only thing I hadn't quit was quitting itself. Then, once again, came the non-verbal voice that was once characterised with fear and torment all those years ago, and it said, once again, <strong><em>"This is real. Pay close attention."</em></strong>
      </p>
    ),
  },


  {
    classes: "verse",
    html: (
      <SpotifyPlayer
        uri="spotify:track:76EeScTnI2sCjDY0SfEoSb" // Walk The Moon, Work This Body
        size={{
          width: "100%",
          height: 300,
        }}
        view={"coverart"}
        theme={"white"}
      />
    ),
  },


  {
    classes: "verse",
    html: (
      <p>
        At the time Gautam walked this earth, online shopping and same-day
        delivery didn’t exist, so He had to venture out into the woods and beg
        for alms from nearby villages while He contemplated in silence. At the time Christ walked this earth, recording instruments didn’t exist so His walk on water couldn’t be recorded. At the time Mohammad walked this earth, the internet didn’t exist so He was forced to choose a successor from amongst the stupid idiots who surrounded Him. At the time Nanak walked this earth, airplanes and universal translators didn’t exist so He was confined to the people He could barely communicate with. At the time Adolf walked this earth, walls of immigration control didn’t exist so He was forced to purge an entire race of people at an industrial scale.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Why this unrelated rant? If Gautam’s Nirvana could be attained while existing within the confines of a social world, people wouldn’t be so turned off by the idea of Nirvana. If Christ’s Walk on Water was recorded, that would be clear proof that God exists and grants superhuman powers to those who follow His path. If Mohammad’s inner circle comprised like-minded individuals from all over the globe, He wouldn’t be restricted to the dumbos who only believed in the power that God gave Him, and not entirely in His teachings. That’s why He left without a clear indication of who would succeed Him. If Nanak could travel all over the globe, and have a meal with the most influential people of His time, the world would’ve already united under a single banner without death and destruction that followed His death. If Adolf was allowed democratically agreed provisions of imaginary boundaries, He would’ve built His thousand year reich without opposition from those who didn’t fit into His world’s ideals.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>Did I gain Enlightenment in the crux of all human activity of my time? Yes, indeed, I did do that.</p>),
  },
  {
    classes: "verse",
    html: (<p>Do I want to walk on water? I dream about it, and practice my movements almost everyday.</p>),
  },
  {
    classes: "verse",
    html: (
      <p>Do I want to leave a better world in the hands of trusted comrades? It's my only worry on most days.
        </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Do I want to connect face to face with the beholders of collective power
        in my time so that I can spread my message from the top down instead of
        a long and arduous grassroots movement that can only begin with anger,
        hate, and leave destruction in its wake? I’d be catastrophically stupid if I said I want to raise an army to help spread my message.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Do I want to leave out people who don’t agree with me, and my
        interpretation of His word? You’d be a real moron to try to talk
        sense into people who will not succumb to reason alone.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Of course, all these people were with fault. Who says they weren’t?
        That’s just the thing. You cannot judge their actions from your
        perspective of the future that is now your present. Hindsight is always
        20/20. Is there much to be learnt from their wonders as is from their
        failures? You’d have to be really fucking stupid to not notice it all in
        its entirety.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Gaining access to God is easier than you think. Gaining access to the Holy Spirit is pretty fucking neat if it allows for the things that it does. Gaining access to this knowledge comes with a fuck ton of responsibility. You can’t just give it to anyone because of their proximity to you. Granting the everyday person with this access does not have to be a bloody battle. God isn’t accessible to just about anybody. It’s an exclusive club. Choose the members wisely. Then again, what do I know? I only gained access to Him at 23. 
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        That in and of itself is a hard fact to swallow. Had I been just another
        person, the sage advice of quitting drugs and moving on and never
        looking back would be rock solid; but I’m not just any person, am I? I
        am bound to do all the great things that took these super-humans entire
        lifetimes, and yet they didn’t truly succeed in their missions.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Maybe they did, in the way that tiny cogs in a gigantic machine work in
        tandem with each other from obscure locations and at different times so
        that a strategic whole operation can be completed. I just know that the
        buck stops with me. I have been trying to swallow this fact since 2017 and I still haven’t quite absorbed it.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        The whole point of this volume was to create an equality of opportunity, because this knowledge has existed in the world as long as language has been around - it was God’s people who taught humans language itself.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        I have, in some ways, tried to gather knowledge from different sources,
        eclectic even. That has only been to demonstrate the fact that all of
        what I have now told you, is universal, in that it applies equally to
        each being, regardless of their backgrounds - socioculturopolitical.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        Education is the silver bullet (metaphor). It is the great equaliser for
        the masses - regardless of the civilisation’s chosen mode of governance. Knowledge, thus far, has been difficult to acquire, and very hard to interpret - both subjectively snd objectively.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This was why I did it. So that people after my time cannot misconstrue
        sacred knowledge to suit their own, puny ideals. When everyone has access to the same knowledge, from the same source, in the same language, with the same constructs, it becomes that much harder to fool the ignorant collective.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        This also means that their is an equal potential for exploitation at a
        much grander scale - but to counter that, I will have written Neeti - to
        make sure that even though I have taken this risk, imparting this
        knowledge to the entire human populace, I believe there will be an
        equal, if not more, influence of its counterpart in the cosmic duality.
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        And this will, in turn, rightly kickstart, mine, and God’s vision for
        his Kingdom - that ultimately nudges us, as a collective into the
        Sata-Yug, or as I like to call it – Collective Nirvana.
      </p>
    ),
  },

  {
    classes: "verse",
    html: (
      <p>
        At the time of this new glimpse in 2020, I had given up all hopes of a normal life, and sacrificed all my vices for the Holy Spirit, and had followed all of God’s commands, and lived the life of Christ to the letter, while being in sync with all my worldly tasks. Did I not then, deserve the <em>legend</em> that I was initially promised? As with everything with God, it wasn't what I had asked for, but it was the best thing I could never have perceived for myself. 
      </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>
        On December 31, 2019, a cluster of unidentified viral pneumonia cases
        was reported in Wuhan, China. As the virus spread around the globe, so
        did the panic surrounding it. Nations closed their borders, people were
        confined to their own homes, businesses shut down and markets closed.
      </p>
    ),
  },
  {
    classes: "verse bible",
    html: (
      <p>
        “Seventy weeks are determined upon thy people and upon thy holy city,
          to finish the transgression, and to make an end of sins, and to make reconciliation for iniquity, and to bring in everlasting righteousness, and to seal up the vision and prophecy, and to anoint the most Holy.<br/><br/>
          Know therefore and understand, that from the going forth of the
          commandment to restore and to build Jerusalem unto the Messiah the
          Prince shall be seven weeks, and threescore and two weeks: the street
          shall be built again, and the wall, even in troublous times.”
        <br/>(Daniel 9:24-25)
      </p>
    ),
  },
  
  
  {
    classes: "verse",
    html: (
      <p>
        I just know that much bigger events will come into play once this pandemic is old news, and the scriptures are clear on how much time we all have to tie up loose ends in our internal narratives. I, for one, would finally love to have someone by my side, who makes this whole thing worthwhile, because I am today, in the same state I was over three years ago, when I had taken that solemn oath, and sworn myself to this alternate path – alone, in front of a screen, wondering, if there is someone, other than God, who can truly understand what it is that I am feeling, or at the very least, acknowledge me for who I am, without malice or contempt, or any predisposition, and see this work of mine, not as the lonely musings of a depressed human, but as an extention of the Divine, that I have yet to actualise. 
        
        </p>
    ),
  },
  {
    classes: "verse",
    html: (
      <p>

        I know she's out there, and that God has a plan for me, because, like He said in 2017, <em>“...what use is all the knowledge in the world if you're sitting across from an empty seat at the end of the day?”</em>
      </p>
    ),
  },
  {
    classes: "verse block-quote",
    html: (
      <p>
        <em>
          I'm letting God grab a hold of my wrist and guide me onto the right path, serendipitously.
        </em>
      </p>
    ),
  },
  


  



  {
    classes: "verse",
    html: (
      <p>
        <em>Thank you for reading Alethia. </em>
      </p>
    ),
  },
  // {
  //   classes: "salutation",
  //   html: (
  //     <p>
  //       – Anhad Singh Arora,
  //       <br />
  //       दत्तात्रेय
  //     </p>
  //   ),
  // },

  {
    classes: "salutation",
    html: (
      <p>
        – Anhad Singh Arora,
        <br />
        <em>Son of God.</em>
      </p>
    ),
  },

  {
    classes: "demarcator",
    html: <hr />,
  },


    {
    classes: "block-quote",
    html: (
      <p>
        <em>
          Hi there! You've reached the end of the first half of Scova, which is titled Alethia, and for now, I'm not writing any more of my story, I have yet to live it! The next volume will be called Neeti, and I will begin that after I get married. Until then, if you would like to have a chat, I'd suggest you to connect with me directly at<strong> anhad@scova.org</strong>, or look me up on any social platforms.
        </em>
      </p>
    ),
  },

  
  
  



];
// without default
export { onboarding, verses };
