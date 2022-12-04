import "./BlogDetail.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const BlogDetail3 = () => {
  return (
    <div className="blogWrapper">
      <Link to="/blogs" className="back-btn">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <div className="blogDetail">
        <h1>
          Incubator Hub: just one week since it's inception and leaked plans for
          passive income generating NFT collection release from the-labz and
          Wagmilabz.com as the hub hits over 1300 members
        </h1>
        <h2>
          By: <strong>LABZ</strong>
        </h2>
        <img src="/blog3.jpg" alt="" />
        <p>
          It’s been 7 days since the links were made available to the public to
          join the telegram group targeting fans of the XRPL and BSC community
          projects , for the free mint of the professors NFT collection
        </p>
        <p>
          The group recieved instant traction after some great publicity from
          XRPL influencers who continued to push the power and opportunity
          presented by the incubator-hub.com
        </p>
        <p>
          The professors NFT collection has been created by one of the lead
          in-house artists and carefully hand drawn to include 250 traits ,
          Which make up the 10,000 piece collection, each piece is unique as you
          would expect.
        </p>
        <p>
          These pieces include some of the special edition ‘retro marvel’ style
          characters.
        </p>
        <p>
          Labz ceo said ‘ we’ve been working closely over this past week with
          the two founders of shibanft.co.uk and some of its leading community
          members who now help moderate the incubator hub and play an
          instrumental role in its popularity.
        </p>
        <p>
          “ We would also like to take a moment to thank all of the XRPL
          community as a whole who have made the effort to download EVM
          compatible wallets especially to mint the professors. Because of this,
          work has begun on the creation of the ‘Shiba masked professors’ That
          will be launching on the XRPL chain especially for the XUMM wallet
          very soon.”
        </p>
        <p>
          Rumours of a ‘Surprise’ have spread throughout both communities When a
          “Labz” team member Set a new bot command,
        </p>
        <p>
          The BOT command /surprise , prompts an intriguing paragraph to appear
          inside the group, Advising members to save a little Xmas money for New
          Year’s Eve 31/12/2022
        </p>
        <p>
          Rumours amongst many who know the-labz.com previous history regarding
          its focus on passive income generating projects on the BSC chain and
          snippets of information posted inside the group leads us to believe
          that the first paid NFT project is set to impress and provide it's
          participants with passive rewards.
        </p>
        <p>
          The first time we interviewed the-Labz CEO about a week ago, he
          mentioned his plans with upcoming paid NFT collections and two very
          unique ways in which he wanted to reward this growing community.{" "}
          <br />
          May I add that he insisted I do not “let the cat out of the bag’ in
          his words
        </p>
        <p>
          Whatever it is in store for the members of the ‘{" "}
          <a
            style={{ color: "black", textDecoration: "none" }}
            href="https://incubator-hub.com/"
            target={"blank"}
          >
            incubator-hub.com
          </a>{" "}
          ‘ We know that at least one of the projects details will be announced
          on New Year’s Eve On another note , projects enquiring about AMA
          sessions and guest speaking have now started booking in and
          information on their scheduled dates will be released in the near
          future
        </p>
        <p>
          To become a part of the groundbreaking AMA lounge in this coming week,
          in the lead up to the first of the AMA’s please join the following
          link
        </p>
        <p>
          <a
            style={{ color: "black", textDecoration: "none" }}
            href="https://t.me/incubatorhub"
            target={"blank"}
          >
            https://t.me/incubatorhub
          </a>
        </p>
      </div>
    </div>
  );
};

export default BlogDetail3;
