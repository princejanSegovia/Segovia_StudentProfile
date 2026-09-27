alert("script.js loaded");

document.addEventListener("deviceready", function () {

    const menuToggle =
        document.getElementById("menu-toggle");

    const profileName =
        document.getElementById("profile-name");

    const profileDegree =
        document.getElementById("profile-degree");

    const profileDescription =
        document.getElementById("profile-description");

    const editProfileButton =
        document.getElementById("edit-profile-btn");

    const editPanel =
        document.getElementById("edit-panel");

    const editName =
        document.getElementById("edit-name");

    const editDegree =
        document.getElementById("edit-degree");

    const editDescription =
        document.getElementById("edit-description");

    const saveProfileButton =
        document.getElementById("save-profile");

    const cancelProfileButton =
        document.getElementById("cancel-profile");


    function loadProfileData() {

        const savedProfile =
            localStorage.getItem("profileData");

        if (savedProfile) {

            const profileData =
                JSON.parse(savedProfile);

            if (profileName) {
                profileName.textContent =
                    profileData.name || "Prince Jan A. Segovia";
            }

            if (profileDegree) {
                profileDegree.textContent =
                    profileData.degree || "";
            }

            if (profileDescription) {
                profileDescription.textContent =
                    profileData.description || "";
            }

            if (editName) {
                editName.value =
                    profileData.name || "";
            }

            if (editDegree) {
                editDegree.value =
                    profileData.degree || "";
            }

            if (editDescription) {
                editDescription.value =
                    profileData.description || "";
            }

            updateHeaderNames(
                profileData.name || "Prince Jan A. Segovia"
            );
        }
    }


    function updateHeaderNames(name) {

        const headerNames = [
            "about-header-name",
            "skills-header-name",
            "projects-header-name",
            "contact-header-name"
        ];

        headerNames.forEach(function (id) {

            const element =
                document.getElementById(id);

            if (element) {
                element.textContent = name;
            }
        });
    }


    loadProfileData();


    if (
        editProfileButton &&
        editPanel
    ) {

        editProfileButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                alert("Edit Profile button clicked.");

                if (menuToggle) {
                    menuToggle.checked = false;
                }

                editPanel.style.display = "block";
                editPanel.style.visibility = "visible";
                editPanel.style.opacity = "1";
            }
        );


    if (
        cancelProfileButton &&
        editPanel
    ) {

        cancelProfileButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                editPanel.style.display = "none";
                editPanel.style.visibility = "hidden";
                editPanel.style.opacity = "0";

                loadProfileData();
            }
        );
    }


    if (
        saveProfileButton &&
        editPanel
    ) {

        saveProfileButton.addEventListener(
            "click",
            function () {

                const name =
                    editName.value.trim();

                const degree =
                    editDegree.value.trim();

                const description =
                    editDescription.value.trim();


                if (!name) {
                    alert("Please enter your name.");
                    return;
                }

                if (!degree) {
                    alert("Please enter your degree.");
                    return;
                }

                if (!description) {
                    alert("Please enter your description.");
                    return;
                }


                const profileData = {
                    name: name,
                    degree: degree,
                    description: description
                };


                localStorage.setItem(
                    "profileData",
                    JSON.stringify(profileData)
                );


                if (profileName) {
                    profileName.textContent = name;
                }

                if (profileDegree) {
                    profileDegree.textContent = degree;
                }

                if (profileDescription) {
                    profileDescription.textContent =
                        description;
                }


                updateHeaderNames(name);


                editPanel.style.display = "none";


                alert(
                    "Profile updated successfully!"
                );
            }
        );
    }


    const editSkillsButton =
        document.getElementById("edit-skills-btn");

    const editSkillsPanel =
        document.getElementById("edit-skills-panel");

    const saveSkillsButton =
        document.getElementById("save-skills");

    const cancelSkillsButton =
        document.getElementById("cancel-skills");


    const skillElements = [
        document.getElementById("skill-1"),
        document.getElementById("skill-2"),
        document.getElementById("skill-3"),
        document.getElementById("skill-4"),
        document.getElementById("skill-5")
    ];


    const skillInputs = [
        document.getElementById("edit-skill-1"),
        document.getElementById("edit-skill-2"),
        document.getElementById("edit-skill-3"),
        document.getElementById("edit-skill-4"),
        document.getElementById("edit-skill-5")
    ];


    function loadSkillsData() {

        const savedSkills =
            localStorage.getItem("skillsData");

        if (savedSkills) {

            const skills =
                JSON.parse(savedSkills);

            skillElements.forEach(
                function (element, index) {

                    if (element) {
                        element.textContent =
                            skills[index] || "";
                    }
                }
            );


            skillInputs.forEach(
                function (input, index) {

                    if (input) {
                        input.value =
                            skills[index] || "";
                    }
                }
            );
        }
    }


    loadSkillsData();


    if (
        editSkillsButton &&
        editSkillsPanel
    ) {

        editSkillsButton.addEventListener(
            "click",
            function () {

                if (menuToggle) {
                    menuToggle.checked = false;
                }

                editSkillsPanel.style.display =
                    "block";
            }
        );
    }


    if (
        cancelSkillsButton &&
        editSkillsPanel
    ) {

        cancelSkillsButton.addEventListener(
            "click",
            function () {

                editSkillsPanel.style.display =
                    "none";

                loadSkillsData();
            }
        );
    }


    if (
        saveSkillsButton &&
        editSkillsPanel
    ) {

        saveSkillsButton.addEventListener(
            "click",
            function () {

                const skills = [];


                for (
                    let i = 0;
                    i < skillInputs.length;
                    i++
                ) {

                    if (!skillInputs[i]) {
                        continue;
                    }

                    const value =
                        skillInputs[i].value.trim();

                    if (!value) {
                        alert(
                            "Please fill in all skill fields."
                        );
                        return;
                    }

                    skills.push(value);
                }


                localStorage.setItem(
                    "skillsData",
                    JSON.stringify(skills)
                );


                skillElements.forEach(
                    function (element, index) {

                        if (element) {
                            element.textContent =
                                skills[index] || "";
                        }
                    }
                );


                editSkillsPanel.style.display =
                    "none";


                alert(
                    "Skills updated successfully!"
                );
            }
        );
    }


    const editAboutButton =
        document.getElementById("edit-about-btn");

    const editAboutPanel =
        document.getElementById("edit-about-panel");

    const saveAboutButton =
        document.getElementById("save-about");

    const cancelAboutButton =
        document.getElementById("cancel-about");


    const aboutDescription =
        document.getElementById("about-description");

    const editAboutDescription =
        document.getElementById("edit-about-description");


    function loadAboutData() {

        const savedAbout =
            localStorage.getItem("aboutData");

        if (savedAbout) {

            const aboutData =
                JSON.parse(savedAbout);

            if (aboutDescription) {
                aboutDescription.textContent =
                    aboutData.description || "";
            }

            if (editAboutDescription) {
                editAboutDescription.value =
                    aboutData.description || "";
            }
        }
    }


    loadAboutData();


    if (
        editAboutButton &&
        editAboutPanel
    ) {

        editAboutButton.addEventListener(
            "click",
            function () {

                if (menuToggle) {
                    menuToggle.checked = false;
                }

                editAboutPanel.style.display =
                    "block";
            }
        );
    }


    if (
        cancelAboutButton &&
        editAboutPanel
    ) {

        cancelAboutButton.addEventListener(
            "click",
            function () {

                editAboutPanel.style.display =
                    "none";

                loadAboutData();
            }
        );
    }


    if (
        saveAboutButton &&
        editAboutPanel
    ) {

        saveAboutButton.addEventListener(
            "click",
            function () {

                if (!editAboutDescription) {
                    return;
                }


                const description =
                    editAboutDescription.value.trim();


                if (!description) {
                    alert(
                        "Please enter your About information."
                    );
                    return;
                }


                const aboutData = {
                    description: description
                };


                localStorage.setItem(
                    "aboutData",
                    JSON.stringify(aboutData)
                );


                if (aboutDescription) {
                    aboutDescription.textContent =
                        description;
                }


                editAboutPanel.style.display =
                    "none";


                alert(
                    "About information updated successfully!"
                );
            }
        );
    }


    const editContactButton =
        document.getElementById("edit-contact-btn");

    const editContactPanel =
        document.getElementById("edit-contact-panel");

    const saveContactButton =
        document.getElementById("save-contact");

    const cancelContactButton =
        document.getElementById("cancel-contact");


    const contactEmail =
        document.getElementById("contact-email");

    const contactPhone =
        document.getElementById("contact-phone");

    const contactAddress =
        document.getElementById("contact-address");


    const editContactEmail =
        document.getElementById("edit-contact-email");

    const editContactPhone =
        document.getElementById("edit-contact-phone");

    const editContactAddress =
        document.getElementById("edit-contact-address");


    function loadContactData() {

        const savedContact =
            localStorage.getItem("contactData");

        if (savedContact) {

            const contactData =
                JSON.parse(savedContact);


            if (contactEmail) {
                contactEmail.textContent =
                    contactData.email || "";
            }

            if (contactPhone) {
                contactPhone.textContent =
                    contactData.phone || "";
            }

            if (contactAddress) {
                contactAddress.textContent =
                    contactData.address || "";
            }


            if (editContactEmail) {
                editContactEmail.value =
                    contactData.email || "";
            }

            if (editContactPhone) {
                editContactPhone.value =
                    contactData.phone || "";
            }

            if (editContactAddress) {
                editContactAddress.value =
                    contactData.address || "";
            }
        }
    }


    loadContactData();


    if (
        editContactButton &&
        editContactPanel
    ) {

        editContactButton.addEventListener(
            "click",
            function () {

                if (menuToggle) {
                    menuToggle.checked = false;
                }

                editContactPanel.style.display =
                    "block";
            }
        );
    }


    if (
        cancelContactButton &&
        editContactPanel
    ) {

        cancelContactButton.addEventListener(
            "click",
            function () {

                editContactPanel.style.display =
                    "none";

                loadContactData();
            }
        );
    }


    if (
        saveContactButton &&
        editContactPanel
    ) {

        saveContactButton.addEventListener(
            "click",
            function () {

                if (
                    !editContactEmail ||
                    !editContactPhone ||
                    !editContactAddress
                ) {
                    return;
                }


                const email =
                    editContactEmail.value.trim();

                const phone =
                    editContactPhone.value.trim();

                const address =
                    editContactAddress.value.trim();


                if (!email) {
                    alert(
                        "Please enter your email."
                    );
                    return;
                }


                if (!email.includes("@")) {
                    alert(
                        "Please enter a valid email address."
                    );
                    return;
                }


                if (!phone) {
                    alert(
                        "Please enter your phone number."
                    );
                    return;
                }


                if (!/^[0-9+\-\s()]+$/.test(phone)) {
                    alert(
                        "Phone number can only contain numbers and phone symbols."
                    );
                    return;
                }


                if (!address) {
                    alert(
                        "Please enter your address."
                    );
                    return;
                }


                const contactData = {
                    email: email,
                    phone: phone,
                    address: address
                };


                localStorage.setItem(
                    "contactData",
                    JSON.stringify(contactData)
                );


                if (contactEmail) {
                    contactEmail.textContent =
                        email;
                }

                if (contactPhone) {
                    contactPhone.textContent =
                        phone;
                }

                if (contactAddress) {
                    contactAddress.textContent =
                        address;
                }


                editContactPanel.style.display =
                    "none";


                alert(
                    "Contact information updated successfully!"
                );
            }
        );
    }


    const editProjectsButton =
        document.getElementById("edit-projects-btn");

    const editProjectsPanel =
        document.getElementById("edit-projects-panel");

    const saveProjectsButton =
        document.getElementById("save-projects");

    const cancelProjectsButton =
        document.getElementById("cancel-projects");


    const projectDescription =
        document.getElementById("project-description");

    const editProjectDescription =
        document.getElementById("edit-project-description");


    function loadProjectsData() {

        const savedProjects =
            localStorage.getItem("projectsData");

        if (savedProjects) {

            const projectsData =
                JSON.parse(savedProjects);

            if (projectDescription) {
                projectDescription.textContent =
                    projectsData.description || "";
            }

            if (editProjectDescription) {
                editProjectDescription.value =
                    projectsData.description || "";
            }
        }
    }


    loadProjectsData();


    if (
        editProjectsButton &&
        editProjectsPanel
    ) {

        editProjectsButton.addEventListener(
            "click",
            function () {

                if (menuToggle) {
                    menuToggle.checked = false;
                }

                editProjectsPanel.style.display =
                    "block";
            }
        );
    }


    if (
        cancelProjectsButton &&
        editProjectsPanel
    ) {

        cancelProjectsButton.addEventListener(
            "click",
            function () {

                editProjectsPanel.style.display =
                    "none";

                loadProjectsData();
            }
        );
    }


    if (
        saveProjectsButton &&
        editProjectsPanel
    ) {

        saveProjectsButton.addEventListener(
            "click",
            function () {

                if (!editProjectDescription) {
                    return;
                }


                const description =
                    editProjectDescription.value.trim();


                if (!description) {
                    alert(
                        "Please enter your project description."
                    );
                    return;
                }


                const projectsData = {
                    description: description
                };


                localStorage.setItem(
                    "projectsData",
                    JSON.stringify(projectsData)
                );


                if (projectDescription) {
                    projectDescription.textContent =
                        description;
                }


                editProjectsPanel.style.display =
                    "none";


                alert(
                    "Project information updated successfully!"
                );
            }
        );
    }


    const changeProfilePictureButton =
        document.getElementById(
            "edit-profile-picture-btn"
        );

    const profileImage =
        document.getElementById("profile-image");


    function openCamera() {

        if (!navigator.camera) {

            alert(
                "Camera is not available."
            );

            return;
        }


        navigator.camera.getPicture(

            function (imageData) {

                if (!imageData) {

                    alert(
                        "No image was captured."
                    );

                    return;
                }


                profileImage.src =
                    imageData;


                localStorage.setItem(
                    "profilePicture",
                    imageData
                );


                alert(
                    "Profile picture updated successfully!"
                );
            },


            function (error) {

                if (!error) {
                    return;
                }


                const errorMessage =
                    String(error).toLowerCase();


                if (
                    errorMessage.includes(
                        "cancel"
                    ) ||
                    errorMessage.includes(
                        "no image selected"
                    )
                ) {

                    return;
                }


                alert(
                    "Unable to access the camera. Please check your device permissions."
                );
            },


            {
                quality: 30,

                destinationType:
                    Camera.DestinationType.FILE_URI,

                sourceType:
                    Camera.PictureSourceType.CAMERA,

                encodingType:
                    Camera.EncodingType.JPEG,

                mediaType:
                    Camera.MediaType.PICTURE,

                targetWidth: 600,

                targetHeight: 600,

                correctOrientation: true
            }
        );
    }


    function requestCameraPermission() {

        if (
            !cordova ||
            !cordova.plugins ||
            !cordova.plugins.permissions
        ) {

            alert(
                "Camera permission service is not available."
            );

            return;
        }


        const permissions =
            cordova.plugins.permissions;


        permissions.checkPermission(

            permissions.CAMERA,

            function (status) {

                if (status.hasPermission) {

                    openCamera();

                } else {

                    permissions.requestPermission(

                        permissions.CAMERA,

                        function (status) {

                            if (
                                status.hasPermission
                            ) {

                                openCamera();

                            } else {

                                alert(
                                    "Camera permission was denied. The profile picture cannot be changed."
                                );
                            }
                        },


                        function () {

                            alert(
                                "Unable to request camera permission."
                            );
                        }
                    );
                }
            },


            function () {

                alert(
                    "Unable to check camera permission."
                );
            }
        );
    }


    if (
        changeProfilePictureButton &&
        profileImage
    ) {

        const savedProfilePicture =
            localStorage.getItem(
                "profilePicture"
            );


        if (savedProfilePicture) {

            profileImage.src =
                savedProfilePicture;
        }


        changeProfilePictureButton.addEventListener(
            "click",
            function () {

                if (menuToggle) {
                    menuToggle.checked = false;
                }


                requestCameraPermission();
            }
        );
    }

});