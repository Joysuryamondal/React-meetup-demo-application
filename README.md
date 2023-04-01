১. প্রথম এ স্টার্টিং ফাইল নিলাম 

২.ডিরেক্টরি তে গিয়ে এনপিএম ইনস্টল দিলাম। তারপর এনপিএম স্টার্ট দিলাম। 

৩.তারপর গিট্ এ পুশ করলাম সব ফাইলস। 

৪.তারপর প্রথম এ পেজেস এর আন্ডার এ যে পেজ গুলা প্রজেক্ট এ আছে কম্পোনেন্ট হিসাবে পেজেস এর আন্ডার এ ডট.জেএস ফাইল বানালাম। তারপর ইনফো কোড এ লিখলাম। 

৫.router package initialize করলাম। তারপর কোন url এর জন্যে কোন পেজ load হবে সেটা সেটআপ করলাম (index.js ফাইল এ) 

৬.তারপর route আর Routes কম্পোনেন্ট ইউজ করে url এর ডিফারেন্ট ডিফারেন্ট পথ সেটআপ করলাম যে কোন path এর জন্যে কোন কম্পোনেন্ট লোড হবে। (router -dom নিয়ে একটু সমস্যা হলো। সেটা সল্ভ করলাম https://dev.to/arunavamodak/react-router-v5-vs-v6-dp0 এই লিংক পরে আর রাউটার ডোম আপডেট করে । ভার্সন ৫ আর ৬ নিয়ে সমস্যা হচ্ছিলো।)(App .js )

৭.(Adding links with Navigation Bar)তারপর আমরা navigation বার create করবো এবং navigation bar এর title(All Meetups,New Meetups,Favorites) এর সাথে পেজ এর লিংক কানেক্ট করলাম <Link > use করে । 

৮. তারপর আমরা component style করবো scoping করে css module দিয়ে।যার ফলে এই ডিজাইন গুলা শুধু নির্দিষ্ট component এ apply হবে.

৯.তারপর কিছু dummy ডাটা add করলাম array হিসাবে। Map ইউজ করে ওয়েবসাইট এ ডাটাগুলা শো করলাম। আর একটা ইউনিক key দিলাম id . 

১০.নতুন component add করলাম আর map use করলাম data dynamic ভাবে আনার জন্যে এবং ডাটাগুলা পরে dynamic ভাবে use করার জন্যে component বানালাম। 

১১. তারপর card এ css design add করার জন্যে children props use করলাম। use করার পর কার্ড এর নিচে একটা shadow অ্যাড holo css ডিজাইন থেকে আর এটা রে আমরা বলি wrapper component ।

১২. তারপর কার্ড আরো সুন্দর করার জন্যে আমরা আবার css add করলাম children props use করে wrapper component এর মাধ্যমে।

১৩.আমরা form এ data input দিলাম তারপর ডাটা টা  backend server এ save হবে then data টা fetch হয়ে page এ load হবে।
  
  ১৩.১.আমরা NewMeetupForm.js নামে একটা নতুন কম্পোনেন্ট add করলাম এবং আগের reuseable Card component আবার use করলাম card templete নেয়ার জন্যে।  
  
  ১৩.২.তারপর  Card component এর ভিতরে form add করলাম। তারপর useRef use করে form এর submit করা data console.log  এ send করলাম।
  
  ১৩.৩.তারপর আমরা firebase use করবো dummy database হিসাবে।Realtime database ->create database ->next ->start in test mode ->Enable ->
  
  ১৩.৪. তারপর আমরা console.log এ যে data send করসিলাম সেটা firebase এ সেন্ড করলাম props use করে। তারপর আমরা form এ data fill করে submit করলাম firebase এ। {router -dom এ problem হইছিলো version ৫ আর version ৬ নিয়ে। version ৫ এ useHistory ছিল যেটা version ৬ এ useNavigate লিখতে হয়. solution SOverflow  link (https://stackoverflow.com/questions/62861269/attempted-import-error-usehistory-is-not-exported-from-react-router-dom)}. আমরা useHistory(dom -৫)/useNavigate(dom -৬) use করলাম form সাবমিট করার পর first page এ ফিরে আসার জন্যে। 
  
  ১৩.৫.তারপর আমরা firebase থেকে ডাটা fetch করে website এ আনার জন্যে request পাঠাবো firebase server এ। তার জন্যে useState এবং useEffect use করবো AllMeetups.js পেজ এ ।

১৪. Lastly আমরা item favourite item এ add করবো এবং যখন favorite এ add করবো তারপর আমাদের remove from favorite button show করবে। আর একটা feature অ্যাড করবো সেটা হচ্চে কতগুলা আইটেম favorite এ আছে সেটা number দিয়ে show করবে।
