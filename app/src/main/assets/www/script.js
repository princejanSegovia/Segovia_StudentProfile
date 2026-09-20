document.addEventListener("DOMContentLoaded", function () {

    const menuToggle =
        document.getElementById("menu-toggle");



    const savedProfileForHeaders =
        localStorage.getItem("profileData");

    if (savedProfileForHeaders) {

        const profileDataForHeaders =
            JSON.parse(savedProfileForHeaders);

        const headerNames =
            document.querySelectorAll(".header-name");

        headerNames.forEach(function (headerName) {

            headerName.textContent =
                profileDataForHeaders.name;
        });
    }



    const editProfileButton =
        document.getElementById("edit-profile-btn");

    const editPanel =
        document.getElementById("edit-panel");

    const profileName =
        document.getElementById("profile-name");

    const profileDegree =
        document.getElementById("profile-degree");

    const profileDescription =
        document.getElementById("profile-description");

    const nameInput =
        document.getElementById("edit-name");

    const degreeInput =
        document.getElementById("edit-degree");

    const descriptionInput =
        document.getElementById("edit-description");

    const saveProfileButton =
        document.getElementById("save-profile");

    const cancelProfileButton =
        document.getElementById("cancel-profile");



    if (editPanel) {
        editPanel.style.display = "none";
    }



    if (editProfileButton) {

        const savedProfile =
            localStorage.getItem("profileData");

        if (savedProfile) {

            const profileData =
                JSON.parse(savedProfile);

            profileName.textContent =
                profileData.name;

            profileDegree.textContent =
                profileData.degree;

            profileDescription.textContent =
                profileData.description;
        }



        editProfileButton.addEventListener("click", function () {

            nameInput.value =
                profileName.innerText;

            degreeInput.value =
                profileDegree.innerText;

            descriptionInput.value =
                profileDescription.innerText;

            editPanel.style.display = "block";

            if (menuToggle) {
                menuToggle.checked = false;
            }

            editPanel.scrollIntoView({
                behavior: "smooth"
            });
        });
    }



    if (saveProfileButton) {

        saveProfileButton.addEventListener("click", function (event) {

            event.preventDefault();

            const updatedName =
                nameInput.value.trim();

            const updatedDegree =
                degreeInput.value.trim();

            const updatedDescription =
                descriptionInput.value.trim();



            if (updatedName === "") {

                alert("Name cannot be empty.");

                nameInput.focus();

                return;
            }



            if (updatedDegree === "") {

                alert("Degree cannot be empty.");

                degreeInput.focus();

                return;
            }



            if (updatedDescription === "") {

                alert("About Myself cannot be empty.");

                descriptionInput.focus();

                return;
            }



            const profileData = {

                name: updatedName,

                degree: updatedDegree,

                description: updatedDescription
            };



            localStorage.setItem(
                "profileData",
                JSON.stringify(profileData)
            );



            profileName.textContent =
                updatedName;

            profileDegree.textContent =
                updatedDegree;

            profileDescription.textContent =
                updatedDescription;



            const headerNames =
                document.querySelectorAll(".header-name");

            headerNames.forEach(function (headerName) {

                headerName.textContent =
                    updatedName;
            });



            editPanel.style.display = "none";

            alert("Profile updated successfully!");
        });
    }



    if (cancelProfileButton) {

        cancelProfileButton.addEventListener("click", function (event) {

            event.preventDefault();

            editPanel.style.display = "none";
        });
    }



    const editSkillsButton =
        document.getElementById("edit-skills-btn");

    const editSkillsPanel =
        document.getElementById("edit-skills-panel");

    const skill1 =
        document.getElementById("skill-1");

    const skill2 =
        document.getElementById("skill-2");

    const skill3 =
        document.getElementById("skill-3");

    const skill4 =
        document.getElementById("skill-4");

    const skill5 =
        document.getElementById("skill-5");

    const skill1Input =
        document.getElementById("edit-skill-1");

    const skill2Input =
        document.getElementById("edit-skill-2");

    const skill3Input =
        document.getElementById("edit-skill-3");

    const skill4Input =
        document.getElementById("edit-skill-4");

    const skill5Input =
        document.getElementById("edit-skill-5");

    const saveSkillsButton =
        document.getElementById("save-skills");

    const cancelSkillsButton =
        document.getElementById("cancel-skills");



    if (editSkillsPanel) {
        editSkillsPanel.style.display = "none";
    }



    if (editSkillsButton) {

        const savedSkills =
            localStorage.getItem("skillsData");

        if (savedSkills) {

            const skillsData =
                JSON.parse(savedSkills);

            skill1.textContent =
                skillsData.skill1;

            skill2.textContent =
                skillsData.skill2;

            skill3.textContent =
                skillsData.skill3;

            skill4.textContent =
                skillsData.skill4;

            skill5.textContent =
                skillsData.skill5;
        }



        editSkillsButton.addEventListener("click", function () {

            skill1Input.value =
                skill1.innerText;

            skill2Input.value =
                skill2.innerText;

            skill3Input.value =
                skill3.innerText;

            skill4Input.value =
                skill4.innerText;

            skill5Input.value =
                skill5.innerText;

            editSkillsPanel.style.display = "block";

            if (menuToggle) {
                menuToggle.checked = false;
            }

            editSkillsPanel.scrollIntoView({
                behavior: "smooth"
            });
        });
    }



    if (saveSkillsButton) {

        saveSkillsButton.addEventListener("click", function (event) {

            event.preventDefault();

            const updatedSkill1 =
                skill1Input.value.trim();

            const updatedSkill2 =
                skill2Input.value.trim();

            const updatedSkill3 =
                skill3Input.value.trim();

            const updatedSkill4 =
                skill4Input.value.trim();

            const updatedSkill5 =
                skill5Input.value.trim();



            if (updatedSkill1 === "") {

                alert("Skill 1 cannot be empty.");

                skill1Input.focus();

                return;
            }



            if (updatedSkill2 === "") {

                alert("Skill 2 cannot be empty.");

                skill2Input.focus();

                return;
            }



            if (updatedSkill3 === "") {

                alert("Skill 3 cannot be empty.");

                skill3Input.focus();

                return;
            }



            if (updatedSkill4 === "") {

                alert("Skill 4 cannot be empty.");

                skill4Input.focus();

                return;
            }



            if (updatedSkill5 === "") {

                alert("Skill 5 cannot be empty.");

                skill5Input.focus();

                return;
            }



            const skillsData = {

                skill1: updatedSkill1,

                skill2: updatedSkill2,

                skill3: updatedSkill3,

                skill4: updatedSkill4,

                skill5: updatedSkill5
            };



            localStorage.setItem(
                "skillsData",
                JSON.stringify(skillsData)
            );



            skill1.textContent =
                updatedSkill1;

            skill2.textContent =
                updatedSkill2;

            skill3.textContent =
                updatedSkill3;

            skill4.textContent =
                updatedSkill4;

            skill5.textContent =
                updatedSkill5;



            editSkillsPanel.style.display = "none";

            alert("Skills updated successfully!");
        });
    }



    if (cancelSkillsButton) {

        cancelSkillsButton.addEventListener("click", function (event) {

            event.preventDefault();

            editSkillsPanel.style.display = "none";
        });
    }



    const editContactButton =
        document.getElementById("edit-contact-btn");

    const editContactPanel =
        document.getElementById("edit-contact-panel");

    const contactEmail =
        document.getElementById("contact-email");

    const contactFacebook =
        document.getElementById("contact-facebook");

    const contactGithub =
        document.getElementById("contact-github");

    const contactNumber =
        document.getElementById("contact-number");

    const emailInput =
        document.getElementById("edit-email");

    const facebookInput =
        document.getElementById("edit-facebook");

    const githubInput =
        document.getElementById("edit-github");

    const numberInput =
        document.getElementById("edit-number");

    const saveContactButton =
        document.getElementById("save-contact");

    const cancelContactButton =
        document.getElementById("cancel-contact");



    if (editContactPanel) {
        editContactPanel.style.display = "none";
    }



    if (editContactButton) {

        const savedContact =
            localStorage.getItem("contactData");

        if (savedContact) {

            const contactData =
                JSON.parse(savedContact);

            contactEmail.textContent =
                contactData.email;

            contactFacebook.textContent =
                contactData.facebook;

            contactGithub.textContent =
                contactData.github;

            contactNumber.textContent =
                contactData.number;
        }



        editContactButton.addEventListener("click", function () {

            emailInput.value =
                contactEmail.innerText;

            facebookInput.value =
                contactFacebook.innerText;

            githubInput.value =
                contactGithub.innerText;

            numberInput.value =
                contactNumber.innerText;

            editContactPanel.style.display = "block";

            if (menuToggle) {
                menuToggle.checked = false;
            }

            editContactPanel.scrollIntoView({
                behavior: "smooth"
            });
        });
    }



    if (saveContactButton) {

        saveContactButton.addEventListener("click", function (event) {

            event.preventDefault();

            const updatedEmail =
                emailInput.value.trim();

            const updatedFacebook =
                facebookInput.value.trim();

            const updatedGithub =
                githubInput.value.trim();

            const updatedNumber =
                numberInput.value.trim();



            if (updatedEmail === "") {

                alert("Email cannot be empty.");

                emailInput.focus();

                return;
            }



            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(updatedEmail)) {

                alert("Please enter a valid email address.");

                emailInput.focus();

                return;
            }



            if (updatedFacebook === "") {

                alert("Facebook cannot be empty.");

                facebookInput.focus();

                return;
            }



            if (updatedGithub === "") {

                alert("GitHub cannot be empty.");

                githubInput.focus();

                return;
            }



            if (updatedNumber === "") {

                alert("Number cannot be empty.");

                numberInput.focus();

                return;
            }



            if (!/^\+?[0-9\s-]+$/.test(updatedNumber)) {

                alert("Number can only contain numbers, spaces, +, and -.");

                numberInput.focus();

                return;
            }



            const contactData = {

                email: updatedEmail,

                facebook: updatedFacebook,

                github: updatedGithub,

                number: updatedNumber
            };



            localStorage.setItem(
                "contactData",
                JSON.stringify(contactData)
            );



            contactEmail.textContent =
                updatedEmail;

            contactFacebook.textContent =
                updatedFacebook;

            contactGithub.textContent =
                updatedGithub;

            contactNumber.textContent =
                updatedNumber;



            editContactPanel.style.display = "none";

            alert("Contact information updated successfully!");
        });
    }



    if (cancelContactButton) {

        cancelContactButton.addEventListener("click", function (event) {

            event.preventDefault();

            editContactPanel.style.display = "none";
        });
    }



    const editProjectsButton =
        document.getElementById("edit-projects-btn");

    const editProjectsPanel =
        document.getElementById("edit-projects-panel");

    const project1 =
        document.getElementById("project-1");

    const project2 =
        document.getElementById("project-2");

    const project3 =
        document.getElementById("project-3");

    const projectDescription1 =
        document.getElementById("project-description-1");

    const projectDescription2 =
        document.getElementById("project-description-2");

    const projectDescription3 =
        document.getElementById("project-description-3");

    const project1Input =
        document.getElementById("edit-project-1");

    const project2Input =
        document.getElementById("edit-project-2");

    const project3Input =
        document.getElementById("edit-project-3");

    const projectDescription1Input =
        document.getElementById("edit-project-description-1");

    const projectDescription2Input =
        document.getElementById("edit-project-description-2");

    const projectDescription3Input =
        document.getElementById("edit-project-description-3");

    const saveProjectsButton =
        document.getElementById("save-projects");

    const cancelProjectsButton =
        document.getElementById("cancel-projects");



    if (editProjectsPanel) {
        editProjectsPanel.style.display = "none";
    }



    if (editProjectsButton) {

        const savedProjects =
            localStorage.getItem("projectsData");

        if (savedProjects) {

            const projectsData =
                JSON.parse(savedProjects);

            project1.textContent =
                projectsData.project1;

            project2.textContent =
                projectsData.project2;

            project3.textContent =
                projectsData.project3;

            projectDescription1.textContent =
                projectsData.description1;

            projectDescription2.textContent =
                projectsData.description2;

            projectDescription3.textContent =
                projectsData.description3;
        }



        editProjectsButton.addEventListener("click", function () {

            project1Input.value =
                project1.innerText;

            project2Input.value =
                project2.innerText;

            project3Input.value =
                project3.innerText;

            projectDescription1Input.value =
                projectDescription1.innerText;

            projectDescription2Input.value =
                projectDescription2.innerText;

            projectDescription3Input.value =
                projectDescription3.innerText;

            editProjectsPanel.style.display = "block";

            if (menuToggle) {
                menuToggle.checked = false;
            }

            editProjectsPanel.scrollIntoView({
                behavior: "smooth"
            });
        });
    }



    if (saveProjectsButton) {

        saveProjectsButton.addEventListener("click", function (event) {

            event.preventDefault();

            const updatedProject1 =
                project1Input.value.trim();

            const updatedProject2 =
                project2Input.value.trim();

            const updatedProject3 =
                project3Input.value.trim();

            const updatedDescription1 =
                projectDescription1Input.value.trim();

            const updatedDescription2 =
                projectDescription2Input.value.trim();

            const updatedDescription3 =
                projectDescription3Input.value.trim();



            if (updatedProject1 === "") {

                alert("Project 1 cannot be empty.");

                project1Input.focus();

                return;
            }



            if (updatedDescription1 === "") {

                alert("Project 1 description cannot be empty.");

                projectDescription1Input.focus();

                return;
            }



            if (updatedProject2 === "") {

                alert("Project 2 cannot be empty.");

                project2Input.focus();

                return;
            }



            if (updatedDescription2 === "") {

                alert("Project 2 description cannot be empty.");

                projectDescription2Input.focus();

                return;
            }



            if (updatedProject3 === "") {

                alert("Project 3 cannot be empty.");

                project3Input.focus();

                return;
            }



            if (updatedDescription3 === "") {

                alert("Project 3 description cannot be empty.");

                projectDescription3Input.focus();

                return;
            }



            const projectsData = {

                project1: updatedProject1,

                project2: updatedProject2,

                project3: updatedProject3,

                description1: updatedDescription1,

                description2: updatedDescription2,

                description3: updatedDescription3
            };



            localStorage.setItem(
                "projectsData",
                JSON.stringify(projectsData)
            );



            project1.textContent =
                updatedProject1;

            project2.textContent =
                updatedProject2;

            project3.textContent =
                updatedProject3;

            projectDescription1.textContent =
                updatedDescription1;

            projectDescription2.textContent =
                updatedDescription2;

            projectDescription3.textContent =
                updatedDescription3;



            editProjectsPanel.style.display = "none";

            alert("Projects updated successfully!");
        });
    }



    if (cancelProjectsButton) {

        cancelProjectsButton.addEventListener("click", function (event) {

            event.preventDefault();

            editProjectsPanel.style.display = "none";
        });
    }



    const editAboutButton =
        document.getElementById("edit-about-btn");

    const editAboutPanel =
        document.getElementById("edit-about-panel");

    const aboutText =
        document.getElementById("about-text");

    const aboutInput =
        document.getElementById("edit-about");

    const saveAboutButton =
        document.getElementById("save-about");

    const cancelAboutButton =
        document.getElementById("cancel-about");



    if (editAboutPanel) {
        editAboutPanel.style.display = "none";
    }



    if (editAboutButton) {

        const savedAbout =
            localStorage.getItem("aboutData");

        if (savedAbout) {

            aboutText.textContent =
                savedAbout;
        }



        editAboutButton.addEventListener("click", function () {

            aboutInput.value =
                aboutText.innerText;

            editAboutPanel.style.display = "block";

            if (menuToggle) {
                menuToggle.checked = false;
            }

            editAboutPanel.scrollIntoView({
                behavior: "smooth"
            });
        });
    }



    if (saveAboutButton) {

        saveAboutButton.addEventListener("click", function (event) {

            event.preventDefault();

            const updatedAbout =
                aboutInput.value.trim();



            if (updatedAbout === "") {

                alert("About information cannot be empty.");

                aboutInput.focus();

                return;
            }



            localStorage.setItem(
                "aboutData",
                updatedAbout
            );



            aboutText.textContent =
                updatedAbout;



            editAboutPanel.style.display = "none";

            alert("About information updated successfully!");
        });
    }



    if (cancelAboutButton) {

        cancelAboutButton.addEventListener("click", function (event) {

            event.preventDefault();

            editAboutPanel.style.display = "none";
        });
    }

});