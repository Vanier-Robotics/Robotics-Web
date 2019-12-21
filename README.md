# Vanier Robotics Website - 2019 Edition
If you have been added to this repository, it is because you have expressed particular interest in helping create the website for the 2019-2020 competition for Vanier Robotics. If you feel like this is a mistake, please contact the following people on Discord so that they can remove you from the repository: 

* Cry0#9879 
* infurnodragon#9598

## Underlying Technologies
This website will be built using `Gatsby`, a **React & JSX framework** designed for lightweight, resposive, scalable and easily deployable websites. Developing on this platform requires base knowledge of **HTML5 and CSS3**. JavaScript is optional but **heavily recommended**, as Gatsby uses some of its syntax in code formatting.

Documentation for Gatsby, which includes tutorials and code snippets is accessible by [clicking here](https://www.gatsbyjs.org/docs/).

We are also using Github (Git) for our code management and deployment, as it helps all of us keep track of who does what and when it was done. Please familiarize yourself with the interface,as you will be using it a lot during the development process. 

## Getting Started
### Prerequisites
This guide assumes that you have a **valid installation of Windows** and that you are the **adminitrator** on your system. Before starting work on the website, there are some packages and applications that need to be installed to ensure that the development of the website is problem-free. This is step is critical to ensure that everyone is on the same page and that there are no conflicts in installed packages or missing dependencies. Below are instructions on the different packages to install for this project. Please ensure that you have sufficient hard drive space for this project (~5GB) to accomodate for any extra ressources and packages that may get added during the development process.

--- Note: Please make sure to commit your changes to a different branch from `dev`. Naming conventions for branches should be `{PAGE THAT YOU ARE WORKING ON}-{PATCH NUMBER}` (eg. `landingpage-patch01`). This helps keep the code segregated and have less commits on the `dev` branch. Briefly describe your work when creating a pull request please!

#### Installing Git
Installing git-scm is very straightforward and requires no extra configuration or setup to get working. Simply head on over to Git's website and [download and install the latest executable](https://git-scm.com/download/win). 

#### Installing VSCode
While most code editors will work well with this project, Visual Studio Code is recommended as it is has some plugins that we need to install to begin development on this project. 
1. Head over to Microsoft's Visual Studio Code website, and [download and install the latest executable](https://code.visualstudio.com/docs/?dv=win). 
2. Once complete, launch Visual Studio Code, and head over to the "Extensions" tab on the left side (it should look like 4 squares). Search for the "Prettier - Code Formatter" extension by Esben Petersen. Optionally, also install "Prettier - JavaScript Formatter" by Bastian Kistner.
--- You can also install the extensions by clicking [here](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [here](https://marketplace.visualstudio.com/items?itemName=passionkind.prettier-vscode-with-tabs) if you are having trouble finding the "Extensions" tab. **Please make sure to restart Visual Studio Code once the installation is complete to make sure they are properly installed.**

#### Installing Node
Installing Node is, as with Git, a very straightforward process with minimal user configuration required. Head on over to their website and download [the LTS release (the left green button)](https://nodejs.org/en/). Make sure to **not select the extra features option during the installation**, as it will download an additional 3GB of files that will not be used during the development of this project.

#### Installing Gatsby with npm
Once you have installed NodeJS, you can now proceed with the installation of Gatsby, the framework that we will be using for this project. 
1. Begin by opening Command Prompt (WINDOWS BUTTON + R, then type cmd and hit Enter)
2. Check the version of **Node** by typing `node --version`. The version should be **above** `v12.10.0`. If it is not, please install a newer version of NodeJS.
3. Check the version of **npm** by typing `npm --version`. The version should be **above** `v6.10`. If it is not, please install a newer version of npm.
4. Once the checks are complete and that both *Node* and *npm* are installed, simply run `npm install -g gatsby-cli` to install the commandline interface of Gatsby. At the time that this documentation was written, **there are no standalone GUI interfaces available for download**. This installation guide will be updated if there are any new releases. 
5. Once the installation is complete, verify the version by typing `gatsby --version`. The current version of Gatsby CLI is **2.8.20**. Please make sure that your version is version 2.8 or above. If it is not, please reinstall Gatsby CLI by running the command above. Doing so will uninstall the previous version and install the latest one.
#### Installing GitHub Desktop - Optional
If you do not feel comfortable with using Git by itself, GitHub Desktop is a very good alternative, providing all of the features that Git does, using a GUI. Head over to the download page and [install GitHub for Desktop](https://central.github.com/deployments/desktop/desktop/latest/win32). From there, make sure that your Git name is the same as your username and your email is the same as your registered email on GitHub.

### Ressources
Below are some ressources that you can use to learn how to code in HTML5 & CSS3, as well as JavaScript/JSX:
* https://www.freecodecamp.org/
* https://www.codecademy.com/
* https://www.learn-js.org/
* https://www.w3schools.com/js/
* https://javascript.info/

## Initializing the repository
Once you have installed all of the above packages, you can begin the process of setting up the repository locally for development work.

To do so, there are 2 methods: using Git, or GitHub Desktop. 

**WARNING**: ONCE YOU START WITH ONE OF THE METHODS, YOU ARE STUCK WITH IT AND CANNOT SWITCH UNLESS YOU CLONE THE REPOSITORY AGAIN. The reason for that is that GitHub Desktop will fail to detect your cloned repository most of the time, asking you to create a new repository instead of detecting the existing one. To avoid complications, **USE ONE OR THE OTHER. DO NOT SWITCH.**

### Using Git
1. Open your terminal window (WINDOWS KEY + R, then type "cmd" and hit Enter)
2. Go to the directory where you want to clone your repository into (you can use `cd` followed by the directory path to change to that directory or `cd ..` to go back a directory)
3. Type the following command: `git clone https://github.com/Vanier-Robotics/robotics-web.git` and hit Enter. This will make Git download the repository on your hard drive. This process is very quick and only takes a couple of seconds.
4. Go inside of the cloned repository by typing `cd robotics-web`.
5. Run `npm install` to install all the required packages used for the development of this website. The time this process takes is dependant on your internet connection because it downloads all the packages from the Internet.
6. Once all installed, simply run `gatsby develop` to begin development. **DO NOT CLOSE THE WINDOW DURING THE DEVELOPMENT PROCESS**. As you make changes to your code and save it, Gatsby will automatically recompile and reload the webpage so that you can instantly view your changes.
--- Note: To find the URL of your locally-hosted website, simply read the output of the commandline. It should say "{PROJECTNAME} is available at the following link: {URL}". In most cases, that URL should be `http://localhost:8000`. However, if that port is used by something, that URL may change.
7. Once you are done with the development, go to the terminal window and do CTRL + C. The program will ask you if you want to terminate the batch job. Type "Y" to end development or "N" to continue development. 
8. Make sure to verify that your code works and meets the demands and standards set by the administrators of the repository. Don't forget to commit your changes to a different branch! 

### Using Git + Gatsby
This process is the same as the one with Git, but requires only 1 command, instead of 2, which some users may prefer.

1. Open your terminal window (WINDOWS KEY + R, then type "cmd" and hit Enter)
2. Go to the directory where you want to clone your repository into (you can use `cd` followed by the directory path to change to that directory or `cd ..` to go back a directory)
3. Type the following command: `gatsby new robotics-web https://github.com/Vanier-Robotics/robotics-web.git` and hit Enter. This will make Gatsby download the repository on your hard drive using Git as well as install all the required packages for the development of this website. The time this process takes is dependant on your internet connection because it downloads all the packages from the Internet.
4. Once the process is complete, change your current directory to the repository's directory by typing `cd robotics-web`. 
6. Once all installed, simply run `gatsby develop` to begin development. **DO NOT CLOSE THE WINDOW DURING THE DEVELOPMENT PROCESS**. As you make changes to your code and save it, Gatsby will automatically recompile and reload the webpage so that you can instantly view your changes.
--- Note: To find the URL of your locally-hosted website, simply read the output of the commandline. It should say "{PROJECTNAME} is available at the following link: {URL}". In most cases, that URL should be `http://localhost:8000`. However, if that port is used by something, that URL may change.
7. Once you are done with the development, go to the terminal window and do CTRL + C. The program will ask you if you want to terminate the batch job. Type "Y" to end development or "N" to continue development. 
8. Make sure to verify that your code works and meets the demands and standards set by the administrators of the repository. Don't forget to commit your changes to a different branch! 




### Using GitHub Desktop
1. Open GitHub Desktop by launching it from your Start Menu or by clicking on the Desktop shortcut that was created during the installation of the software.
2. Sign In into GitHub when it prompts you, and make sure that your **Git Username** and **Email** are the same as the ones used when creating an account on GitHub. This helps us see the work you do when you push, pull and create pull requests via the software.
3. Click the "Clone a Repository from the Internet" button. A window should appear, with a list of repositories that you can clone. 
4. Find the `robotics-web` repository, which you can see under our organization name, `Vanier-Robotics`.
5. Enter the path where you would like to clone this repository into, and hit "Clone". GitHub Desktop will then proceed by cloning the repository you selected in your selected directory.
6. Go inside of the cloned repository by typing `cd robotics-web`.
7. Run `npm install` to install all the required packages used for the development of this website. The time this process takes is dependant on your internet connection because it downloads all the packages from the Internet.
8. Once all installed, simply run `gatsby develop` to begin development. **DO NOT CLOSE THE WINDOW DURING THE DEVELOPMENT PROCESS**. As you make changes to your code and save it, Gatsby will automatically recompile and reload the webpage so that you can instantly view your changes.
--- Note: To find the URL of your locally-hosted website, simply read the output of the commandline. It should say "{PROJECTNAME} is available at the following link: {URL}". In most cases, that URL should be `http://localhost:8000`. However, if that port is used by something, that URL may change.
9. Once you are done with the development, go to the terminal window and do CTRL + C. The program will ask you if you want to terminate the batch job. Type "Y" to end development or "N" to continue development. 
10. Make sure to verify that your code works and meets the demands and standards set by the administrators of the repository. Don't forget to commit your changes to a different branch! 

# Wiki
Please refer to the [GitHub Wiki](https://github.com/Vanier-Robotics/robotics-web/wiki) for any topic-specific instructions.

# Contact
If you have any questions regarding this project, feel free to post a message in Discord, `#web` channel. If you plan to be away for an extended period of time, please contact the administrators of this project, `Cry0#9879` or `infurnodragon#9598`, so that we can assign you to less pressing issues and better distribute the workload between all members.
 
