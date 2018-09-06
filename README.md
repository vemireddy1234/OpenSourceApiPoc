Karate DSL Setup Instructions
Pre-requisites: 
•	Install Visual Studio Code on your system (link given below)
•	https://code.visualstudio.com/
•	More Karate DSL documentation can be found here: https://github.com/intuit/karate

After Installing the code please install extensions within the Extensions tab of the Visual Studio Code:
•	All AutoComplete
•	Automagic Code
•	Debugger for Java
•	Java Extension Pack
•	Java Test Runner 
•	Language Support for Java(TM) by Red Hat
•	Material Icon Theme
•	Maven for Java
•	Snippets and Syntax Highlight for Gherkin(Cucumber)
•	Visual Studio Team Services
•	Vscode-icons
 
•	After installing the Visual code app please confirm that you are using a jdk version of 1.8 and java 8 version. 
o	Make sure the JAVA_HOME (environment variable) is pointed to jdk1.8 and above.
o	E.g.: JAVA_HOME: C:\Program Files\Java\jdk1.8.0_181 – should look similar to this, there might be some subtle version differences
o	Make sure that the environment variable “PATH” has a reference to %JAVA_HOME%\bin
•	Download and install Apache maven by following the instructions below:
o	https://maven.apache.org/download.cgi
o	https://maven.apache.org/install.html
•	Please install “Git” if you don’t have it. Follow the necessary steps to pull the git repositories from your github to your machine, that might require sometimes you having access to those repositories or having your ssh keys configured between github and your machine
•	Based on the project you are working you might require SSL certs or other things installed depending on how the AUTH mechanisms were set up for the API stack  



API Sample Project
•	This is a sample project done with opensource API’s available on the web
•	If you need to extend your project for any other purposes , lots of variations and flavors of DSL specs are available on Karate DSL github project
•	The Sample API’s are open source API’s that were utilized from this website : 
o	http://www.groupkt.com/post/5c85b92f/restful-webservice-to-get-and-search-states-and-territories-of-a-country.htm

•	After completing the above installation instructions, please clone the git repository from github to your C:/drive: 
o	https://github.com/vemireddy1234/OpenSourceApiPoc.git
o	Open the downloaded project in Visual Studio through explorer or directly open the Project from windows explorer in Visual Studio Code  

 

•	Go to the View Menu within the Visual Code and Click on ‘Integrated Terminal’ to open a terminal within the Visual Studio Code application 
o	Within the terminal make sure you are in the parent directory where the java class exists
o	From the terminal you can run ‘maven install’ to just compile the code and build maven tasks. Alternatively, you can also run ‘Maven Clean install – X’ to print the output in debug mode in the terminal 
o	To run the tests run this command ‘mvn test -Dtest=TestsRunner’ – This is the class that was created for all tests to run in the sample project
?	The sample tests should run very quickly 
o	If the run is successful you have ‘sure-fire reports’ within project directory: ‘…\target\surefire-reports’ . Click open the html report 
o	The html report should list the steps that are passed /failed.

