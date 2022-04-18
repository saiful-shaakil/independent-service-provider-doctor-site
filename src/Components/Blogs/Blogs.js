import React from "react";
import "../Stylesheet/PublicStyleSheet.css";

const Blogs = () => {
  return (
    <div className="each-section pt-20">
      <b className="">
        Question-1: What is the difference between authorization and
        authentication?
      </b>
      <p className="mt-2 mb-8">
        <b>Ans:</b> Authentication is the process of verifying who someone is,
        whereas authorization is the process of verifying what specific
        applications, files, and data a user has access to. The situation is
        like that of an airline that needs to determine which people can come on
        board. The first step is to confirm the identity of a passenger to make
        sure they are who they say they are. Once a passenger’s identity has
        been determined, the second step is verifying any special services the
        passenger has access to, whether it’s flying first-class or visiting the
        VIP lounge.
      </p>
      <b className="mt-4">
        Question-2: Why are you using firebase? What other options do you have
        to implement authentication?
      </b>
      <p className="mt-2 mb-8">
        <b>Ans:</b> Firebase allow me to sync the real-time data across all the
        devices- Android, iOS, and the web without refreshing the screen.That's
        why I use firebase. I can use Google,Facebook,Github,Play Games, Apple,
        Microsoft, Anonymous,Twitter, Yahoo and even Phone number for implement
        authentication.
      </p>
      <b className="mt-4">
        Question-3: What other services does firebase provide other than
        authentication?
      </b>
      <p className="mt-2">
        <b>Ans:</b> Firebase provides integration to Google Ads, AdMob,
        DoubleClick, Play Store, Data Studio, BigQuery, and Slack, to make my
        app development with efficient and accurate management and maintenance
        other than authentication.
      </p>
    </div>
  );
};

export default Blogs;
