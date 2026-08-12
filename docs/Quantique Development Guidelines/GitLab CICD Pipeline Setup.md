# GitLab CI/CD Pipeline Setup User Guide
# 1.	Overview
This guide will help you set up automated CI/CD pipelines for all repositories, eliminating the need for manual deployments. By following these steps, each repository will automatically deploy changes when code is pushed to the designated branches.
## 1.1	Prerequisites
- Access to the GitLab server
- Remote server with SSH access
- The Project source code is ready for deployment
- Basic knowledge of Git commands
## 1.2	Intended audience
This guide is intended for the following users:
- **DevOps Engineers:** responsible for setting up, maintaining, and monitoring CI/CD pipelines.
- **Software Developers:** who push code to GitLab and want to understand how automated deployments work.
- **System Administrators:** managing servers and environments where applications are deployed.
- **Technical Leads:** who oversee the development lifecycle and want to streamline deployment workflows.
- **QA Engineers:** interested in integrating automated testing into the CI/CD pipeline.

# Stage 1: GitLab Project Setup
This guide outlines the process of setting up a GitLab CI/CD pipeline, with a focus on automating deployments and streamlining workflows across multiple repositories. Follow these stages to configure your pipelines successfully.
## 1.1	Login to the GitLab Server
1)	Open your web browser and go to your GitLab instance URL. ![](/img/cicd-pipeline-setup/CICD1.png)

2)	Enter your username and password (provided by your organization), then click ‘Sign in.’  ![](/img/cicd-pipeline-setup/CICD2.png)

- The GitLab dashboard opens, displaying your workspace overview. ![](/img/cicd-pipeline-setup/CICD3.png)

## 1.2	Create a New Group

**Note: -** *This step is optional if you already have an existing group structure. Groups help organize related projects and manage permissions across multiple repositories.*


1)	From the left navigation pane, under Your work, click Groups. The Groups page opens. ![](/img/cicd-pipeline-setup/CICD4.png)

2)	On the Groups page, click New groups (blue button, upper right). ![](/img/cicd-pipeline-setup/CICD5.png)

3)	The Create new group page opens. select Create group to begin setting up your group. ![](/img/cicd-pipeline-setup/CICD6.png)

- The Create group page opens. ![](/img/cicd-pipeline-setup/CICD7.png) 

4)	Enter the Group name, the Group URL automatically populates based on the Group name. ![](/img/cicd-pipeline-setup/CICD8.png) 

5)	Set Visibility level to Private to restrict access to authorized users only. ![](/img/cicd-pipeline-setup/CICD9.png)

6)	Scroll down and select Create group button. ![](/img/cicd-pipeline-setup/CICD10.png)

7)	Your new group is created and appears on the Groups page. ![](/img/cicd-pipeline-setup/CICD11.png)
 
8)	Click the group and then click added subgroup under the group. ![](/img/cicd-pipeline-setup/CICD12.png)

- The subgroup page open, know you can add project from hear also. ![](/img/cicd-pipeline-setup/CICD13.png)

9)	Select the New project button. You are redirected to the Create new project page. ![](/img/cicd-pipeline-setup/CICD14.png) 

- To learn how to create a new project, refer from step 3 in the # Create a New Project # procedure.

**Result: -** Your group is now created and ready for project setup. 

1.3	Create New Project
1)	From the left navigation pane, under Your work, click Projects. The Projects page opens. 

2)	On the Projects page, click New project (blue button, upper right). 


The Create new project page opens. GitLab offers several options to create a project:
•	Create a blank project: Start with an empty repository
•	Create from template: Use predefined project templates
•	Import project: Import existing projects from external sources (such as GitHub).
 

3)	For this guide, select Create blank project. 

The Create blank project page opens. 

4)	Enter the Project name, the Project slug automatically populates based on the project name. 

5)	From the Project URL dropdown menu, select the appropriate group. 

Note: - Ensure that groups and subgroups are properly structured under the main group section, as they will be reflected in the project URL when creating a group project.


6)	Set Visibility level to Private to restrict access to authorized users only. 

7)	Under Project configuration, enable. Then click Create project.
•	☑ Initialize repository with a README
•	☑ Enable Static Application Security Testing (SAST).
 

Result: - Your GitLab project is now created and ready for CI/CD pipeline setup.
1.4	Invite Team Members
Use the steps below to invite team members to your GitLab project and assign appropriate access levels.
1)	From the left navigation pane, under Your work, click Projects. The Projects page opens.  

2)	On the Projects page, select the project and sub project where you want to add team members. 

The Project repo page opens. 

Note: - once you enter in the project repo page, the side pane options changes.


3)	From the left navigation pane, click Manage, then select Members. 

4)	The Project members page opens, click the blue Invite member button. 

The Invite members dialog box opens. 

5)	In the Username, name or email address field, enter the member's user name or email address. 

6)	From the Select maximum role from the dropdown menu, and choose the appropriate permission level:
•	Guest: View-only access to most project areas
•	Reporter: Read access to the repository and issues
•	Developer: Push access to the repository, create issues, and merge requests
•	Maintainer: Full project access except admin settings
•	Owner: Complete administrative control
 

7)	From the calendar option, always select the Access expiration date, then click Invite. 

Result: - The team member receives an email notification and appears in your project's member list.

Stage 2: Initialize the Repository
This stage explains how to prepare your project folder for Git tracking on a remote server. Git helps you manage versions of your project and collaborate with others.
1.1	Log in to the Remote Server
1)	Open your preferred web browser
2)	Navigate to your server’s login page (e.g., WHM/cPanel).
3)	Enter your username and password to access the server.
1.2	Open the Terminal
1)	Once logged in, locate the Terminal tool:
•	Look for "Terminal" in the search bar.
•	Or find it under "Advanced Tools" in WHM/cPanel.
2)	Click to open the terminal.

1.3	Navigate to Your Project Directory
1)	In the terminal, use the cd command to go to your project folder. Replace /path/to/project with your actual folder path: 
cd /path/to/your/project

2)	Verify you’re in the correct folder by listing files:
ls  

1.4	Initialize Git
1)	Run this command to turn your project folder into a Git repository:
git init  

•	This creates a hidden .git folder to track changes.
1.5	Configure Git (One-Time Setup)
1)	Set your Git username and email (used for tracking changes):
git config --global user.name "Your Name"  
git config --global user.email "your.email@example.com"  
1.6	Add and Commit Files
A.	Exclude Unnecessary Files
1)	Create or edit a .gitignore file to exclude sensitive/unwanted files (e.g., node_modules/, uploads/):
nano .gitignore  

2)	Add the following lines (adjust as needed):
node_modules/  
vendor/  
uploads/  

•	Save the file (Ctrl+O, then Ctrl+X in Nano).

B.	Stage and Commit Changes
1)	Stage all files for tracking:
git add .

2)	Commit the changes with a descriptive message:
git commit -m "Initial project setup"  

1.7	Create a Main Branch
Rename the default branch to main (or master for older repos):
git branch -M main  

Stage 3: Connect GitLab with the Remote Server
This procedure describes how to securely connect your remote server to GitLab using SSH. SSH keys authenticate your server without needing a username and password each time you interact with your GitLab repository.
1.1	Generate SSH Key Pair on the Remote Server
To create a public and private key pair:
1)	Open the terminal on your remote server.
2)	Run the following command:
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"

•	Replace your-email@example.com with the email address associated with your GitLab account.
3)	When prompted, press Enter to save the key to the default location:
/home/your-username/.ssh/id_rsa

4)	You can optionally set a passphrase. Leave it empty for password-less access and press Enter twice.
Upon successful completion, two files will be created in your `~/.ssh/` directory:
`id_rsa`: Your private key (keep this file secure and never share it).
`id_rsa.pub`: Your public key (this is the key you will upload to GitLab).

1.2	Add the Public Key to GitLab
A.	Copy the Public Key
1)	Run the following command to copy the contents of the public key:
devqcrmquantique@45-120-137-128:~]$ cat .ssh/id_rsa.pub

2)	Copy the entire output from the terminal.

B.	Add the Public Key to GitLab
1)	Open GitLab in your web browser.  

2)	Sign in to your GitLab account.  

3)	Click the profile icon (a green circle next to the Plus + icon) in the top-right corner.  

4)	From the profile menu, choose the Preferences option. This will direct you to your user settings. 

5)	In the left navigation pane, under User Settings, click SSH Keys. 

6)	On the SSH Keys page, click the Add new key button. 
 
7)	In the Key field, paste the public key content you copied earlier. 

8)	Enter a title in the Title field. 

9)	Set an Expiration date for added security. 

10)	Click the Add key button to complete the process. 

Result: - A success message will confirm that your key has been added. 
1.3	Test the SSH Key Connection to GitLab
After adding the SSH key, verify that the connection between your deployment server and GitLab is working.
1)	Open the terminal on your deployment server.
2)	Run the following command:
ssh -i /home/posptmf/.ssh/GitlabOnboardTMFKey -T -p 8995 git@gitlab.quantique.ai

•	-i specifies the SSH private key path
•	-T disables pseudo-terminal allocation
•	-p 8995 specifies the custom SSH port
•	git@gitlab.quantique.ai is the GitLab SSH target

Expected Result: - If everything is set up correctly, you should receive a message like:
Welcome to GitLab, @your-username!
This confirms that the SSH key was successfully configured and GitLab recognizes your server.
Stage 4: Push the Code to GitLab Repository
This stage describes how to connect your local Git repository to a GitLab repository using SSH and push your project files to it. Make sure your GitLab SSH key has been configured and tested before proceeding.
1.1	Get the GitLab Repository URL
1)	Open your project repository on GitLab in a web browser.  

2)	On the project's overview page, locate the Code button (typically on the right side of the page, above the file list).  

3)	Select the Clone with SSH option.  
Example:
git@gitlab.com:your-namespace/your-project.git


1.2	Add the Remote Repository to Your Local Git Project
1)	On your remote server (where your project code is located), open the terminal and run the following command:
git remote add origin git@gitlab.com:your-namespace/your-project.git

2)	Replace your-namespace/your-project.git with your actual GitLab SSH path.

3)	To verify that the remote has been added:
git remote -v

You should see output similar to:
origin  git@gitlab.com:your-namespace/your-project.git (fetch)
origin  git@gitlab.com:your-namespace/your-project.git (push)
 
1.3	Push Your Code to the GitLab Repository
Finally, push your local code changes to the newly configured remote repository on GitLab.
1)	From your terminal in the local repository's root directory, execute the following command to push your current branch (e.g., master or main) to the origin remote and set it as the upstream tracking branch.
git push --set-upstream or`igin master

•	git push: This command uploads your local changes to the remote repository.
•	--set-upstream origin master: This option not only pushes your changes but also establishes a tracking relationship between your local master branch and the master branch on the origin remote. This simplifies future git pull and git push commands. If your default branch is main, replace master with main.

2)	Monitor the terminal output for the push process. You should see messages indicating objects being enumerated, compressed, and written to the remote repository.
•	A successful push will typically end with a message similar to:
remote: To create a merge request for master, visit:
remote:   https://gitlab.quantique.ai/quantique/qcrm/qcrm_lead/-/merge_requests/new?merge_request%5Bsource_branch%5D=master
   * [new branch] master -> master

Result: -Your code is now successfully pushed to your GitLab repository.
Stage 5: Set Up the GitLab CI/CD Pipeline
This procedure explains how to configure GitLab CI/CD to deploy your code to a remote server using SSH. It includes setting secure GitLab variables and preparing the private key for automated deployment.
1.1	Switch to the Master Branch
1)	Before configuring your pipeline, make sure you’re working from the correct branch.
•	In the terminal, run:
git checkout master

Note: - This ensures your CI/CD configuration applies to the main deployment branch.

1.2	Add GitLab CI/CD Environment Variables
To allow your pipeline to connect securely to the remote server, define the following variables in GitLab:
1)	Navigate to:
GitLab Project → Settings → CI/CD → Variables

2)	Click Add variable for each of the following:
Variable	Description
HOST	Domain name or IP address of the remote server
PORT	SSH port of the remote server (e.g., 22 or custom port)
USER	Remote server user (⚠️ avoid using root)
SSH_PK	The Base64-encoded private key of your remote server

Note: - Use the "Protect variable" and "Mask variable" options where appropriate to enhance security.

1.3	Convert the Private Key to a Base64-Encoded String
GitLab pipelines can break if special characters or line breaks in the SSH private key are not handled correctly. To avoid this, encode the key in Base64.
A.	Download the Private Key
On your remote server, locate and download the private key file, usually named id_rsa.
Example:
scp user@remote-server:/home/user/.ssh/id_rsa .

B.	Convert the Private Key to Base64
On your local machine, run the following command:
base64 id_rsa > id_rsa_base64.txt

Note: -This will generate a new file called id_rsa_base64.txt that contains your Base64-encoded private key.

C.	Add to GitLab as SSH_PK
1)	Open id_rsa_base64.txt in a text editor.
2)	Copy the entire Base64 content.
3)	In your GitLab project:
•	Go to Settings → CI/CD → Variables
•	Add a variable with the key SSH_PK
•	Paste the copied value into the Value field
1.4	Set Up the Pipeline
To configure your GitLab CI/CD pipeline:
1)	Navigate to:
GitLab Project → Build → Pipeline Editor

2)	Create or edit the .gitlab-ci.yml file to define your deployment pipeline. Below is a basic example:
stages:
  - deploy

deploy_to_server:
  stage: deploy
  script:
    - echo "$SSH_PK" | base64 -d > id_rsa
    - chmod 600 id_rsa
    - ssh -i id_rsa -p $PORT $USER@$HOST "cd /path/to/project && git pull origin master"
  only:
    - master

Note: - Ensure the SSH connection and repository permissions are properly configured.

