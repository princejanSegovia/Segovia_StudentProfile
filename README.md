This is a small student profile application, using HTML for the structure and JavaScript for responsiveness, having a profile, About, Skills, Project, and Contact, pages. 

Profile - The main or the entrance view of the application, where we can find a general summary, it contains the student information such as name, degree/year level, and a short about myself description. When you change the name here, you are also changing the names on the other pages.

About - it is contains a more in-depth description about the student.

Skills - This is where the user can input the skills of the users.

Project - This is where the user can input what projects they have done or are doing.

Contact - This is where the user can input their contact info.

JavaScript is used:
* Form Handling - JavaScript opens and closes and edit forms and get the information entered by the user.
* Validation - JavaScript checks that required fields are not empty and validates information such as the email address and contact number.
* Profile Updates - When the user saves changes, JavaScript updates the profile information displayed on the page.
* Save - The updated information is stored using localStorage, allowing the changes to remain after refreshing the page.
* Cancel: The Cancel button closes the edit form without saving the changes.

The application uses localStorage to save profile information directly in the browser/device.

-  When the user clicks SAVE, JavaScript stores the updated information in localStorage.
   The profile information is stored as data such as the name, degree, and description.
   When the page is opened again, JavaScript retrieves the saved information from localStorage and displays it.
   This allows the updated profile information to remain available even after refreshing or reopening the application.

The application uses CSS responsive design so that the layout can adjust to different screen sizes.

- Desktop: The page uses the available screen width while keeping the content organized and centered.
- Tablet: The layout adjusts to the smaller screen width while maintaining readable text, spacing, and navigation.
- Mobile: The design adapts to narrow screens, with the hamburger menu providing navigation and content adjusting to fit the screen.
- The use of flexible widths, spacing, and responsive CSS allows the application to remain usable across different devices.

To build and run the application as a Cordova application:

1. Install Node.js and Cordova on the computer.
2. Open Command Prompt or a terminal.
3. Navigate to the project folder.
4. Create or open the Cordova project.
5. Place the HTML, CSS, JavaScript, and image files inside the project's www folder.
6. Add the desired platform, such as Android:

The Edit profile, I actually split it, so when you visit the different pages, it will have different and dedicated edits, so when you are in Skills page, it will have 'edit skills', in about, it will have 'edit about' and so on. For the profile edit, you will be able to edit the "Name, Degree and About Myself Text". In the About, you will be able to change the "About Myself" Text description. For the Skills, you will be able to change the different skills individually "Skills". For the Project, it is similar with the skills, you are able to change the projects and their description individually. And in contact, you are able to change the email, facebook, github and phone number, individually, where in email you are required to input a valid email, and for number, you are only able to input a number, and the '+' & '-'

Screenshots:

<img width="522" height="962" alt="image" src="https://github.com/user-attachments/assets/d5126a53-29ee-44a1-a919-eaac703afe16" />

<img width="520" height="948" alt="image" src="https://github.com/user-attachments/assets/f9e64cb6-6930-4fa1-84aa-8e069dafe70e" />

<img width="522" height="957" alt="image" src="https://github.com/user-attachments/assets/93f9ff87-fbd2-4f88-8a87-53add36e9c2a" />

<img width="520" height="961" alt="image" src="https://github.com/user-attachments/assets/6e7f43f4-d6d0-4e7b-97f0-eba9b491a50e" />

HIT CANCEL:

<img width="1912" height="1018" alt="image" src="https://github.com/user-attachments/assets/2092d8e6-e814-44c2-a205-b954a7b00bd4" />

Did not input "EDIT 2"

<img width="522" height="968" alt="image" src="https://github.com/user-attachments/assets/67abada8-46a4-4c37-bd28-0cca4603c774" />

<img width="530" height="971" alt="image" src="https://github.com/user-attachments/assets/421ecc75-0a30-4126-a020-45b55988e068" />

BLANK FEILD:

<img width="1917" height="1011" alt="image" src="https://github.com/user-attachments/assets/d38fa72a-bb88-4824-b731-f48cfc31a993" />

<img width="1917" height="1016" alt="image" src="https://github.com/user-attachments/assets/bbcbe69c-7e73-408f-b98e-0e29d3c43e43" />

BEFORE CLOSING: PERSISTENCE

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/9c19daef-b89c-4efb-90fe-5f27860f506c" />
AFTER:

<img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/9d21f6ec-fd5d-47b3-8685-fca7f6b2139f" />

MULTIPLE UPDATES:
EDIT 1:

<img width="1916" height="1015" alt="image" src="https://github.com/user-attachments/assets/9c5685f2-6142-4d62-adc8-da6a6c378d34" />

SAVE:

<img width="1917" height="1015" alt="image" src="https://github.com/user-attachments/assets/73cbc759-0b69-4e9d-a3d8-1b614c12fff6" />

EDIT 2:

<img width="1917" height="1011" alt="image" src="https://github.com/user-attachments/assets/ccdc72ea-aa9e-4cf8-9fc3-5505109c7211" />

SAVE:

<img width="1917" height="1011" alt="image" src="https://github.com/user-attachments/assets/6d0008a7-1bdd-4fc3-bd67-76f5c5e92a56" />

EDIT 3:

<img width="1916" height="1005" alt="image" src="https://github.com/user-attachments/assets/2116d7d9-2a8b-4977-96a6-4818f8249a12" />

SAVE:

<img width="1917" height="1018" alt="image" src="https://github.com/user-attachments/assets/317fad02-96f1-469b-b2ec-f97df95871be" />












