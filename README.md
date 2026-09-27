1. Project Description

The Student Profile application is a Cordova-based mobile application that presents a student's personal and academic information in an organized and interactive profile. The application allows the user to view and edit profile information, manage skills and other details, and update the profile picture using the device camera.

The application uses HTML, CSS, and JavaScript for its interface and functionality. JavaScript and localStorage are used to save profile information, while Cordova provides access to device features such as the camera.

2. Application Pages
Profile

The Profile page serves as the main page of the application. It displays the student's profile picture, name, degree, and description. It also provides options for editing profile information and changing the profile picture.

About

The About page provides additional information about the student. The information can be edited using the provided editing functionality.

Skills

The Skills page displays the student's skills. The user can edit the listed skills through the edit functionality.

Projects

The Projects page displays the student's projects and related descriptions.

Contact

The Contact page provides the student's contact information. The information is presented in an organized format and includes validation when editing the fields.

3. Profile Editing

The application includes an Edit Profile function that allows the user to update their name, degree, and profile description.

The user can select Edit Profile, enter new information, and select Save to update the profile. The Cancel option allows the user to leave the existing information unchanged.

The application uses JavaScript localStorage to save profile information. This allows the updated information to remain available when the application is reopened.

4. Camera Integration

The application uses the Cordova Camera Plugin to allow the user to change their profile picture using the device camera.

The process is:

Change Profile Picture → Open Camera → Capture Image → Update Profile Picture

When the user selects Change Profile Picture, the application checks for camera permission. Once permission is available, the device camera is opened.

After the user captures an image, the captured image is returned to the application and displayed as the new profile picture.

The user can repeat the process to replace the existing profile picture with a new image.

5. Device Feature Integration

Cordova is used because it allows a web-based application using HTML, CSS, and JavaScript to access native device features.

In this application, Cordova provides access to the device camera through the cordova-plugin-camera plugin. This allows the Student Profile application to use the camera while running as an Android application.

6. Image Handling

After an image is captured, the Camera Plugin returns the location of the captured image.

The application uses the Cordova File API to access the captured image and display it in the profile.

The image location is stored using localStorage under the profilePicture key. When the application starts again, the saved image location is retrieved and used to restore the profile picture.

If a new image is captured, it replaces the previously displayed profile picture.

7. Error Handling

The application includes error handling for different camera situations.

Camera Permission Denial

If the user denies camera permission, the application displays a message explaining that camera permission is required to change the profile picture.

Camera Cancellation

If the user cancels the camera without capturing an image, the application keeps the existing profile picture and returns to the profile.

Camera Errors

If an error occurs while accessing the camera or captured image, the application displays an error message instead of crashing.

8. Responsive Design

The application uses responsive HTML and CSS to support different screen sizes.

Desktop

The application can be viewed using a desktop browser or development environment with the interface adapting to the larger screen.

Tablet

The layout adjusts to tablet-sized screens while keeping the navigation, profile information, and buttons accessible.

Mobile

The application is designed for mobile devices, with a hamburger navigation menu and responsive profile layout suitable for smaller screens.

The same application structure and stylesheet are used across the different screen sizes.

9. How to Run
Step 1: Install Node.js

Install Node.js on the computer if it is not already installed.

Step 2: Install Cordova

Open a terminal and install Cordova:

npm install -g cordova
Step 3: Open the Project

Navigate to the project folder:

cd C:\Users\mrder\Documents\Segovia_Start
Step 4: Install the Required Plugins

Install the Camera Plugin:

cordova plugin add cordova-plugin-camera

Install the Android Permissions Plugin:

cordova plugin add cordova-plugin-android-permissions

Install the File Plugin:

cordova plugin add cordova-plugin-file
Step 5: Add the Android Platform

If Android has not yet been added to the project:

cordova platform add android
Step 6: Prepare the Android Project
cordova prepare android
Step 7: Build the Application

The Android project can be built using the Gradle wrapper:

cd platforms\android
.\gradlew.bat assembleDebug

The generated APK can be found at:

platforms\android\app\build\outputs\apk\debug\app-debug.apk
Step 8: Run the Application

The APK can be installed on an Android emulator or Android device.

When the application is running, open the hamburger menu and select:

Change Profile Picture

Grant camera permission if requested, open the camera, capture an image, and return to the profile to view the updated picture.

10. Application Screenshots

The following screenshots demonstrate the main functionality of the Student Profile application.

Student Profile

<img width="497" height="932" alt="image" src="https://github.com/user-attachments/assets/6dac1621-0a50-4c0a-88f0-9b5424ca09e1" />

Figure 1. Student Profile

Change Profile Picture

<img width="511" height="882" alt="image" src="https://github.com/user-attachments/assets/6f0379eb-95a9-4e93-a49d-330aea0587dc" />


Figure 2. Change Profile Picture

Camera

<img width="515" height="922" alt="image" src="https://github.com/user-attachments/assets/1855ff1c-72a8-4d8f-a8f9-1ee76490bfc9" />


Figure 3. Camera

Captured Image

<img width="520" height="920" alt="image" src="https://github.com/user-attachments/assets/07f87c38-2b05-4805-9b0e-d45774359213" />


Figure 4. Captured Image

Updated Profile Picture

<img width="512" height="915" alt="image" src="https://github.com/user-attachments/assets/97c17988-3edf-42b4-b8d8-74e5300b05b8" />


Figure 5. Updated Profile Picture
