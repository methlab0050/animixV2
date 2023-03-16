# My anime website

Hi!  
  
So, I'm changing the project structure  

The first time we tried this  
Things did not go well  
And were not going to go no matter what way you put it  
    
We were taking the wrong approach  
So, here I am,  
Taking the right one  
  
From now on, we'll be working in qwik, the fastest framework on the web

The first stage is going to be making a static site
That means you'll be writing plain HTML and CSS  
If you don't know what those are, they're really easy  
They're not even considered programming languages, cause all they're meant to do is make words look pretty  

# ^^AT LEAST READ TO THIS POINT BEFORE YOU DECIDE TO QUIT THE PROJECT

If you've decided to stay, ur a very cool person 

Before you continue reading, I suggest you get/open vscode, open this file and use the preview command (ctrl+shift+v), it'll make reading a lot easier
Either that, or, if you don't have vscode, run `npm run dev` from the commandline, and click the link it gives you

Check out all of these in order:
1. [Things you need to install](#things-you-need-to-install). Don't worry about security or space, its all safe and only takes up a few mb
2. [how qwik works](#how-qwik-works)
3. [How the project is gonna work](#how-the-project-is-gonna-work)

# Things you need to install
Don't worry, these shouldn't take up much space

You can click on each of the following links to be redirected to an install page
- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/downloads)
- [Vscode](https://code.visualstudio.com/Download) (optional)

# How qwik works
Qwik uses the file system to route files  
Heres an idea of what that means:

The content in our.website.com                   comes from the file src/routes/index
The content in our.website.com/**dev**           comes from the file src/routes/**dev**/index
The content in our.website.com/**anime**         comes from the file src/routes/**\[anime\]**/index
The content in our.website.com/**anime/s1e3**    comes from the file src/routes/**\[anime\]/\[sep\]**/index

Do you see the pattern?
the content of our.website.com/**folder** comes from src/routes/**folder**/index

You might notice that the anime folder actually has brackets around it (\[anime\])
That actually means its a wildcard, and catches all routes that aren't already taken
For instance,

src/routes/dev/index correlates to our.website.com/dev
But src/routes/[anime]/index correlates to our.website.com/anime-title, our.website.com/other-anime, and many others

One last thing about qwik
So far, I've been calling all the content files index, but index actually comes in two formats
- typescript + react (index.tsx)
- markdown (index.md)

Markdown is very simple
[Heres a cheatsheet](https://www.markdownguide.org/cheat-sheet/)
[Heres a full tutorial](https://www.markdowntutorial.com/), although its kinda long and I don't suggest it

    Tip: In markdown files, you can actually write raw html and it'll work just fine

TSX (typescript + react) is a little bit more on the complicated side, and I have a brief tutorial [here](/tutorial)

    Warning: If you wanna use your own stylesheets in combination with the global one, you'll need TSX

To preview your project, run the command `npm run dev` from the command line, and click the link it gives you

# How the project is gonna work
In this stage, each page is very far from the finished product.  
The pages in this stage are going to be filled with unresponsive pages filled with placeholders.  
These pages are sorta gonna be like scaffolding for the project, so feel free to use appropriate placeholders whenever acceptable.  
Each page can have basically any and every piece of information about an anime, so go wild,  
Furthermore, you have a lot of creative liberty, so really go wild  

Here are the jobs I need (you can fill in ur names if u wan):
|Job|File|Description|Languages|Whos doin it?|
|---|----|-----------|---------|-------------|
|Rewrite Global Styles|src/global.css|The current css styling is pretty lame, if someone could make it look cool, that would be sick|100% css| _________ |
|Make homepage|src/routes/index|Make a homepage with spaces for recent releases, trending series, etc. Basically, think of the a netflix homepage, but better.|about 60% html, 25% css| _________ |
|Make series info page|src/routes/\[anime\]/index|I put a brief description in the file, so just go there|| _________ |
|Make series watch page|src/routes/\[anime\]/\[sep\]/index|^^same|about 60% html, 25% css| _________ |
|Make series relations page|src/routes/\[anime\]/relations|^same|about 60% html, 25% css| _________ | 
|Dynamize everything|Everywhere|Add all the actual data to the pages|100% js/tsx| Me |
|Logos/art|||| _________ |



