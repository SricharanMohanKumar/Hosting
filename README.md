# Getting Started with Create React App

# Volunteer Wave
## Overview
We aim to create a user-friendly web application tailored specifically for users who like selfless volunteering. The interface shall enable the user to discover and engage in the event while fostering a sense of community and personal growth.
## Features
User Profiles: Users can create personalized profiles to track their volunteering interests and history.
####
Opportunity Discovery: A search feature to find volunteering opportunities that align with user's interests and availability. 
####
Event Registration: Users can register for events and keep track of upcoming volunteer activities.
####
Opportunity Posting: Individuals can post new volunteering events.
## Getting Started
### Prerequisites
Before running the application, ensure you have the following installed:
####
VS Code: Visual Studio Code is a lightweight and powerful code editor developed by Microsoft for Windows, macOS, and Linux. 
###
Installation of VS Code:
### Windows

1. Visit the Visual Studio Code website (VS Code)(https://code.visualstudio.com/).
2. Click on the "Download for Windows" button.
3. Once the installer is downloaded, run the executable file.
4. Follow the on-screen instructions to complete the installation.

### macOS

1. Visit the [Visual Studio Code website](VS code)(https://code.visualstudio.com/).
2. Click on the "Download for macOS" button.
3. Open the downloaded `.dmg` file.
4. Drag the Visual Studio Code icon to the "Applications" folder.
5. Eject the mounted volume and launch Visual Studio Code from your Applications folder.
## Installation	
Clone the Repository from Git Hub:
### `git clone git@github.com:SammedJainDP/VolunteerWaveCode.git`
###
How To Run the project:
###
•	Open the cloned project in Visual Studio Code.
###
•	Open New terminal in vs code (Click on terminal -> New terminal in the menu bar)
###
•	Ensure the terminal is open for the folder ’VolunteerWaveProject’
(For example, if you are in ‘VolunteerWaveCode’, use the command ‘cd VolunteerWaveProject’ to navigate)
###
•	Once you are inside VolunteerWaveProject folder, use the following command in terminal 
### `npm install`
•	To run the website, use the following command in terminal
### `npm start`
‘npm start’ will run the application on your local development server:
This will start the application and automatically open it in your default web browser. By default, it will be available at http://localhost:3000.

## Usage
Volunteer Connect is designed for two primary user groups: those seeking volunteer opportunities and those looking to provide opportunities. Here’s how each user type can navigate and utilize the platform:
For Volunteers Seeking Opportunities
###
Creating a User Profile:On the homepage, click on ‘Sign Up’ to create a new account.
Fill in the required details to set up your profile.
##
Logging into Profile:
Users can login into the profile using their User Id and Password. (Note: Since we have to mock the backend, please use user id as ‘Sam’ and password as ‘AAA’.)
##
Discovering Opportunities:
Once logged in, browse through available volunteering events or use the ‘search’ search a particular event.
You can filter opportunities based on Perks, Physical Requirement and age.
##
Registering for Events:
When you find an event you’re interested in, click on it for more details.
Use the ‘Register’ button to sign up for the event. You’ll receive a confirmation and your registration will be confirmed.
The event, users have registered will be reflected in ‘My Events’.  You can also cancel the registration in ‘My Events’.
## Posting New Opportunities:
Click on ‘Post’ button in the header.
###
Fill in the event details, including date, time, location, volunteer requirements and click on post.
###
## Managing Posted Opportunities:
‘My Posts’ from the dropdown allows you to view the opportunities that you’ve posted.
Each opportunity has an edit button which allows you to edit the details of the opportunity that you have posted.
###

Each opportunity has a delete button that allows you to delete the posted opportunity. The deleted posts will be reflected both in ‘My Posts’ as well as the home page.
