import React from "react";
import { Link } from "react-router-dom";
import logo from "./intro.jpg";
import guidelines from "./guidelines.jpg";
import rules from "./rules.jpg";
import FrontendNav from "../frontend_nav/FrontendNav";
import googlecalendaricon from "./google_cal_icon.png";
import arrow from "./arrow.png";

class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  // Send Everything to the DOM and pass relevant elements to other components
  render() {
    return (
      <div className="news-container">
        <FrontendNav />
        <div className="row mx-auto bottom_buffer">
          <div className="col-md-10 m-auto">
            <div className="card card-body text-center">
              <h2 className="header">Wahoo! Get ready to connect and discuss!</h2>
              <p>{" "}</p>
              <p className="text-faq">
                We'll send you a calendar invite as soon as you're matched!
              </p>
              <img className="center" src={googlecalendaricon}></img>
              <p className="text-faq2">
                Prepare for the discussion
              </p>
              <img className="center-logo" src={arrow}></img>

            </div>
          </div>
        </div>

        <div className="row mx-auto bottom_buffer">
          <div className="col-md-7 m-auto">
            <div className="card card-body">
              <h2 className="header text-center">Preparing for the discussion</h2>
              <ol>
                <li className="text-list text-left">Read the article</li>
                <li className="text-list text-left">Highlight sentences you liked, disagreed with, or didn't understand </li>
                <li className="text-list text-left">Connect with other content or personal experiences</li>
                <li className="text-list text-left">Review the Discussion Guidelines and Community Rules</li>
              </ol>
              <div class="row">
                <div class="col">
                  <p className="text-faq2">
                    Discussion Guidelines
                  </p>
                  <img className="center-logo" src={arrow}></img>
                </div>
                <div class="col-5">
                  <p className="text-faq2">
                    Community Rules
                  </p>
                  <img className="center-logo" src={arrow}></img>
                </div>
              </div>
            </div>
          </div>   
        </div>

        <div className="row mx-auto bottom_buffer">
          <div className="col-md-10 m-auto">
            <div className="card card-body">
              <div className="faq-content text-left">
              <div id="guidelines">
                  <img className="img-fluid" src={guidelines}></img>
                  <h3 className="small_header text-center"> Discussion Guidelines </h3>
                  <p>
                    {" "}
                    The goal is to learn, have fun, and meet new people with similar interests through semi-structured, 30-minute live discussions. The following guidelines will help you have an enjoyable, useful conversation.{" "}
                  </p>
                  <p>
                    {" "}
                    Begin by introducing yourself. Include your name, where you live, and how long you’ve been a subscriber of this newsletter. {" "}
                  </p>
                  <p>
                    {" "}Kick off the discussion by summarizing the article. Whoever has been a subscriber longer goes first. This framework might be helpful to stimulate conversation.{" "}
                  </p>
                  <p>
                    <ol className="text-left mx-auto">
                      <li><b>Summarize</b> - recap what you read.</li>
                      <li><b>Describe</b> - go in detail on something you found interesting, confusing, or you agreed with or didn’t agree with.</li>
                      <li><b>Personalize</b> - connect the concept described in the previous step to a personal experience, thought, idea, or alternative conceptual paradigm.</li>
                      <li><b>Handoff</b> - allow your partner to connect to your point, ask questions, or share their understanding. </li>
                    </ol>
                  </p>
                  <p>
                    {" "}Take 1 minute to write down key takeaways from the discussion. It could be something new you learned, an important point you don’t want to forget, a new perspective. {" "}
                  </p>
                  <p className="text-left mx-auto">
                    Remember
                    <ul>
                      <li>Listen as much as you talk. A good conversation is like playing a game of catch: each person should throw and catch the same number of times. And you should throw to where your partner can catch it.</li>
                      <li>It’s okay to disagree. Be curious and explore where you and your partner think differently. Respect your partner’s opinions and viewpoints.</li>
                      <li>It’s okay to look stupid. This isn’t a contest. Slow things down if necessary and ask the questions you have.</li>
                    </ul>
                  </p>
                  <p className="text-left mx-auto">
                    Avoid
                    <ul>
                      <li>Unsolicited advice</li>
                      <li>Criticizing others</li>
                      <li>Going too far off topic</li>
                      <li>Getting personal. Keep it professional.</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div id="rules">
                  <img className="img-fluid" src={rules}></img>
                  <h3 className="small_header"> Rules </h3>
                  <p>{" "}These rules are to keep everyone safe. If you don’t feel safe or if someone breaks one of these rules, please contact us immediately. We’ve got your back. These rules apply to all interactions on Neuron.{" "}</p>
                  <h5 className="text-center">Breaking these rules will result in a ban:</h5>
                  <ol className="text-left mx-auto">
                    <li>No nudity, sexual acts, or sexual harassment. No nudity, no sexual acts, and nothing sexually suggestive at all.</li>
                    <li>No threats, violence, or harm. Don’t threaten anyone in any way. Don’t harm someone else or yourself.</li>
                    <li>No hateful conduct or harassment. Don’t harass, bully, or shame anyone. Don't do anything that demeans, defames, or promotes discrimination or violence on the basis of gender identity and expression, race, ethnicity, national origin, age, sexual orientation, disability, physical appearance, body size, religion, or veteran status.</li>
                    <li>No flirting or inappropriate comments. Don’t be flirty or make suggestive remarks. Keep the conversation focused on work. Don’t ask for your partner’s full name, exact location, age, or anything else that’s personally identifiable.</li>
                    <li>No inappropriate attire. You don’t need to dress up, but you should be appropriately covered up, as you would be to go to a cafe, including wearing a shirt and shorts/pants/skirt at all times.</li>
                    <li>No selling. Don’t sell or promote a product, service, or brand. No “soft-selling,” i.e., promoting content or a brand you are affiliated with.</li>
                  </ol>

                  <h5 className="text-center">What To Do If You Encounter Bad Behavior</h5>
                  <p>What should you do if you encounter bad behavior? Follow these 2 steps.</p>
                  <ol className="text-left mx-auto">
                    <li><b>Take care of yourself. </b>If you ever feel uncomfortable, unsafe, harassed, or scared, trust yourself and your intuition and take care of yourself before anything else. Don’t forget that you can always exit the session to immediately disengage and collect yourself.</li>
                    <li><b>Report the incident. </b> Please report any rule violation or inappropriate behavior as soon as you’re able. It’s vital for members to report incidents to prevent others from having the same bad experience you did.
                    <ul>
                      <li>Your report will be confidential and only be shared with Neuron. </li>
                      <li>We’ll review your report and get back to you within 24 hours. Expect a much faster response for high-severity incidents.</li>
                      <li>Depending on the severity of the rule your partner broke, they’ll either get warned, suspended, or banned.</li>
                    </ul>
                    </li>
                  </ol>
                </div>
            </div>
          </div>   
        </div>


      </div>
    );
  }
}

export default Faq;
