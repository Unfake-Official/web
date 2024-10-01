<h1 align="center" style="font-weight: bold;">💻 Unfake</h1>

<div align="center">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white" alt="tailwind"/>
  <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="next"/>
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript"/>
  <img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black" alt="react"/>
</div>

<p align="center">
 <a href="#about">About</a> • 
 <a href="#started">Getting Started</a> • 
 <a href="#started">App Routes</a> • 
 <a href="#contribute">Contribute</a>
</p>


<h2 id="about">📌 About the project</h2>
<p>
The growing evolution of artificial intelligence (A.I.) tools is making them increasingly efficient and globally accessible. However, some of these technologies can be harmful if used maliciously, and that includes deepfakes. Deepfakes are a type of synthetic media that generates realistic content and has the potential to clone an individual's identity, using it to spread fake news, damage their reputation and promote fraud and security breaches. Thus, there is a need for ways to verify whether a piece of media is real or artificially synthesized. However, even though there are technologies that meet this need, the detection of audio deepfakes is still a challenge, considering that it is not as effective when it comes to speech in Portuguese and has questionable effectiveness in audio with the presence of noise. In this sense, Unfake aims to develop an A.I. model capable of identifying whether an audio contains human or synthetic speech. In this way, we hope to make it possible for lay users to identify deepfakes in a robust and effective way, contributing to a safer and more reliable digital environment, as well as encouraging future research in the area using the data obtained in the project.</p>
<br>

<h2 id="started">🚀 Getting started</h2>

<h3>Prerequisites</h3>

Here is a list of all prerequisites necessary for running the project locally:

- [NodeJS](https://nodejs.org)
- [Git](https://git-scm.com)
- [pNPM](https://pnpm.io)

<h3>Cloning</h3>

```bash
git clone https://github.com/Unfake-Official/web.git
```

<h3>Starting</h3>

Firstly, go to the project's directory: 
```bash
cd unfake-web
```

Next, install all dependencies: 

```bash
pnpm install
```

Finally, run the development server: 

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


<h2 id="routes">📍 Application Routes</h2>

Here is the list of the routes of the product and what they do.
​
| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>/</kbd>     | landing page that contains some of the product informations
| <kbd>/authors</kbd>     | page that contains information about those who collaborated to the project
| <kbd>/about-project</kbd>     | markdown content pages containing more detailed info about the project
| <kbd>/classify</kbd>     | page that receives user's audio as input and sends then to the API in order to classify them

<h3>Classifying an audio</h3>
<p>Here is the request body that the website sends to the API.</p>

```bash
{
  audio: file.wav
}
```
The request sends an audio file through the body. It must have ```.wav``` extension. As a response, the API sends the prediction and the accuracy of it, as following:

```bash
{
  prediction: string,
  accuracy: number
}
```

<h2 id="contribute">📫 Contribute</h2>

If you want to somehow contribute to this project, start by creating a branch named as follow. Then, make your changes and follow commit patterns. Finally, open an pull request. 

1. `git clone https://github.com/Unfake-Official/web.git`
2. `git checkout -b feature/NAME`
3. Follow commit patterns
4. Open a Pull Request explaining the problem solved or feature made, if exists, append screenshot of visual modifications and wait for the review!

<h3>Documentations that might help</h3>

[📝 How to create a Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request)

[💾 Commit pattern](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
