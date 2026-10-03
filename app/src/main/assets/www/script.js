document.addEventListener("deviceready", function () {

const menuToggle =
    document.getElementById("menu-toggle");

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

    const classHeaderNames =
        document.querySelectorAll(".header-name");

    classHeaderNames.forEach(function (element) {
        element.textContent = name;
    });

}

function getSession() {

    const studentSession =
        localStorage.getItem("studentSession");

    if (!studentSession) {
        return null;
    }

    try {

        const session =
            JSON.parse(studentSession);

        if (!session.token) {
            return null;
        }

        return session;

    } catch (error) {

        return null;

    }

}

function redirectToLogin() {

    localStorage.removeItem("studentSession");

    window.location.href =
        "login.html";

}

function loadProfileFromDatabase() {

    const session = getSession();

    if (!session) {
        redirectToLogin();
        return;
    }

    cordova.plugin.http.get(
        "http://10.0.2.2:3000/api/profile",
        {},
        {
            "Authorization":
                "Bearer " + session.token
        },
        function (response) {

            let data = {};

            try {

                data =
                    JSON.parse(response.data);

            } catch (error) {

                alert(
                    "Unable to retrieve profile."
                );

                return;

            }

            if (
                response.status < 200 ||
                response.status >= 300
            ) {

                redirectToLogin();
                return;

            }

            const student =
                data.student || {};

            const profileName =
                document.getElementById(
                    "profile-name"
                );

            const profileDegree =
                document.getElementById(
                    "profile-degree"
                );

            const profileDescription =
                document.getElementById(
                    "profile-description"
                );

            if (profileName) {

                profileName.textContent =
                    student.name || "";

            }

            if (profileDegree) {

                profileDegree.textContent =
                    (student.course || "") +
                    " - " +
                    (student.year_level || "");

            }

            if (profileDescription) {

                profileDescription.textContent =
                    student.about_me || "";

            }

            session.student =
                student;

            localStorage.setItem(
                "studentSession",
                JSON.stringify(session)
            );

            updateHeaderNames(
                student.name || ""
            );

        },
        function (error) {

            console.error(
                "PROFILE HTTP ERROR:",
                JSON.stringify(error)
            );

            alert(
                "Unable to retrieve profile. " +
                JSON.stringify(error)
            );

        }
    );

}

const profileName =
    document.getElementById(
        "profile-name"
    );

const profileDegree =
    document.getElementById(
        "profile-degree"
    );

const profileDescription =
    document.getElementById(
        "profile-description"
    );

const editProfileButton =
    document.getElementById(
        "edit-profile-btn"
    );

const editPanel =
    document.getElementById(
        "edit-panel"
    );

const editName =
    document.getElementById(
        "edit-name"
    );

const editCourse =
    document.getElementById(
        "edit-course"
    );

const editYearLevel =
    document.getElementById(
        "edit-year-level"
    );

const editDescription =
    document.getElementById(
        "edit-description"
    );

const saveProfileButton =
    document.getElementById(
        "save-profile"
    );

const cancelProfileButton =
    document.getElementById(
        "cancel-profile"
    );

function loadProfileData() {

    const session = getSession();

    if (!session || !session.student) {
        return;
    }

    const student =
        session.student;

    if (profileName) {

        profileName.textContent =
            student.name || "";

    }

    if (profileDegree) {

        profileDegree.textContent =
            (student.course || "") +
            " - " +
            (student.year_level || "");

    }

    if (profileDescription) {

        profileDescription.textContent =
            student.about_me || "";

    }

    if (editName) {

        editName.value =
            student.name || "";

    }

    if (editCourse) {

        editCourse.value =
            student.course || "";

    }

    if (editYearLevel) {

        editYearLevel.value =
            student.year_level || "";

    }

    if (editDescription) {

        editDescription.value =
            student.about_me || "";

    }

    updateHeaderNames(
        student.name || ""
    );

}

if (
    window.location.pathname.endsWith(
        "index.html"
    )
) {

    const session = getSession();

    if (!session) {

        redirectToLogin();
        return;

    }

    loadProfileFromDatabase();

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

            if (menuToggle) {
                menuToggle.checked = false;
            }

            loadProfileData();

            editPanel.style.display =
                "block";

            editPanel.style.visibility =
                "visible";

            editPanel.style.opacity =
                "1";

        }
    );

}

if (
    cancelProfileButton &&
    editPanel
) {

    cancelProfileButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            editPanel.style.display =
                "none";

            editPanel.style.visibility =
                "hidden";

            editPanel.style.opacity =
                "0";

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
        function (event) {

            event.preventDefault();

            if (
                !editName ||
                !editCourse ||
                !editYearLevel ||
                !editDescription
            ) {
                return;
            }

            const name =
                editName.value.trim();

            const course =
                editCourse.value.trim();

            const yearLevel =
                editYearLevel.value.trim();

            const description =
                editDescription.value.trim();

            if (!name) {

                alert(
                    "Please enter your name."
                );

                return;

            }

            if (!course) {

                alert(
                    "Please enter your course."
                );

                return;

            }

            if (!yearLevel) {

                alert(
                    "Please enter your year level."
                );

                return;

            }

            if (!description) {

                alert(
                    "Please enter your description."
                );

                return;

            }

            const session =
                getSession();

            if (!session) {

                redirectToLogin();
                return;

            }

            const currentSkills =
                session.student &&
                session.student.skills
                    ? session.student.skills
                    : "";

            cordova.plugin.http.setDataSerializer(
                "json"
            );

            cordova.plugin.http.put(
                "http://10.0.2.2:3000/api/profile",
                {
                    name: name,
                    course: course,
                    year_level: yearLevel,
                    about_me: description,
                    skills: currentSkills
                },
                {
                    "Authorization":
                        "Bearer " +
                        session.token,
                    "Content-Type":
                        "application/json"
                },
                function (response) {

                    let data = {};

                    try {

                        data =
                            JSON.parse(
                                response.data
                            );

                    } catch (error) {

                        data = {};

                    }

                    if (
                        response.status < 200 ||
                        response.status >= 300
                    ) {

                        alert(
                            data.message ||
                            "Unable to update profile."
                        );

                        return;

                    }

                    session.student =
                        session.student || {};

                    session.student.name =
                        name;

                    session.student.course =
                        course;

                    session.student.year_level =
                        yearLevel;

                    session.student.about_me =
                        description;

                    localStorage.setItem(
                        "studentSession",
                        JSON.stringify(session)
                    );

                    localStorage.setItem(
                        "profileData",
                        JSON.stringify({
                            name: name,
                            degree:
                                course +
                                " - " +
                                yearLevel,
                            description:
                                description
                        })
                    );

                    if (profileName) {

                        profileName.textContent =
                            name;

                    }

                    if (profileDegree) {

                        profileDegree.textContent =
                            course +
                            " - " +
                            yearLevel;

                    }

                    if (profileDescription) {

                        profileDescription.textContent =
                            description;

                    }

                    updateHeaderNames(name);

                    editPanel.style.display =
                        "none";

                    editPanel.style.visibility =
                        "hidden";

                    editPanel.style.opacity =
                        "0";

                    alert(
                        "Profile updated successfully!"
                    );

                },
                function (error) {

                    console.error(
                        "PROFILE UPDATE ERROR:",
                        JSON.stringify(error)
                    );

                    alert(
                        "Unable to update profile. " +
                        JSON.stringify(error)
                    );

                }
            );

        }
    );

}

const editSkillsButton =
    document.getElementById(
        "edit-skills-btn"
    );

const editSkillsPanel =
    document.getElementById(
        "edit-skills-panel"
    );

const saveSkillsButton =
    document.getElementById(
        "save-skills"
    );

const cancelSkillsButton =
    document.getElementById(
        "cancel-skills"
    );

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

    const session =
        getSession();

    if (!session) {

        redirectToLogin();
        return;

    }

    cordova.plugin.http.get(
        "http://10.0.2.2:3000/api/profile",
        {},
        {
            "Authorization":
                "Bearer " +
                session.token
        },
        function (response) {

            let data = {};

            try {

                data =
                    JSON.parse(
                        response.data
                    );

            } catch (error) {

                alert(
                    "Unable to retrieve skills."
                );

                return;

            }

            if (
                response.status < 200 ||
                response.status >= 300
            ) {

                alert(
                    data.message ||
                    "Unable to retrieve skills."
                );

                return;

            }

            const student =
                data.student || {};

            const skills =
                (student.skills || "")
                    .split(",")
                    .map(
                        function (skill) {
                            return skill.trim();
                        }
                    )
                    .filter(
                        function (skill) {
                            return skill !== "";
                        }
                    );

            skillElements.forEach(
                function (
                    element,
                    index
                ) {

                    if (element) {

                        element.textContent =
                            skills[index] || "";

                    }

                }
            );

            skillInputs.forEach(
                function (
                    input,
                    index
                ) {

                    if (input) {

                        input.value =
                            skills[index] || "";

                    }

                }
            );

            updateHeaderNames(
                student.name || ""
            );

            session.student =
                student;

            localStorage.setItem(
                "studentSession",
                JSON.stringify(session)
            );

        },
        function (error) {

            console.error(
                "SKILLS HTTP ERROR:",
                JSON.stringify(error)
            );

            alert(
                "Unable to retrieve skills. " +
                JSON.stringify(error)
            );

        }
    );

}

const hasSkillsPage =
    skillElements.some(
        function (element) {
            return element !== null;
        }
    );

if (hasSkillsPage) {
    loadSkillsData();
}

if (
    editSkillsButton &&
    editSkillsPanel
) {

    editSkillsButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            if (menuToggle) {
                menuToggle.checked = false;
            }

            loadSkillsData();

            editSkillsPanel.style.display =
                "block";

            editSkillsPanel.style.visibility =
                "visible";

            editSkillsPanel.style.opacity =
                "1";

        }
    );

}

if (
    cancelSkillsButton &&
    editSkillsPanel
) {

    cancelSkillsButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            editSkillsPanel.style.display =
                "none";

            editSkillsPanel.style.visibility =
                "hidden";

            editSkillsPanel.style.opacity =
                "0";

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
        function (event) {

            event.preventDefault();

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
                    skillInputs[i]
                        .value
                        .trim();

                if (!value) {

                    alert(
                        "Please fill in all skill fields."
                    );

                    return;

                }

                skills.push(value);

            }

            const session =
                getSession();

            if (!session) {

                redirectToLogin();
                return;

            }

            const student =
                session.student || {};

            const skillsText =
                skills.join(", ");

            cordova.plugin.http.setDataSerializer(
                "json"
            );

            cordova.plugin.http.put(
                "http://10.0.2.2:3000/api/profile",
                {
                    name:
                        student.name || "",
                    course:
                        student.course || "",
                    year_level:
                        student.year_level || "",
                    about_me:
                        student.about_me || "",
                    skills:
                        skillsText
                },
                {
                    "Authorization":
                        "Bearer " +
                        session.token,
                    "Content-Type":
                        "application/json"
                },
                function (response) {

                    let data = {};

                    try {

                        data =
                            JSON.parse(
                                response.data
                            );

                    } catch (error) {

                        data = {};

                    }

                    if (
                        response.status < 200 ||
                        response.status >= 300
                    ) {

                        alert(
                            data.message ||
                            "Unable to update skills."
                        );

                        return;

                    }

                    skillElements.forEach(
                        function (
                            element,
                            index
                        ) {

                            if (element) {

                                element.textContent =
                                    skills[index] || "";

                            }

                        }
                    );

                    session.student =
                        session.student || {};

                    session.student.skills =
                        skillsText;

                    localStorage.setItem(
                        "studentSession",
                        JSON.stringify(session)
                    );

                    localStorage.setItem(
                        "skillsData",
                        JSON.stringify(skills)
                    );

                    editSkillsPanel.style.display =
                        "none";

                    editSkillsPanel.style.visibility =
                        "hidden";

                    editSkillsPanel.style.opacity =
                        "0";

                    alert(
                        "Skills updated successfully!"
                    );

                },
                function (error) {

                    console.error(
                        "SKILLS UPDATE ERROR:",
                        JSON.stringify(error)
                    );

                    alert(
                        "Unable to update skills. " +
                        JSON.stringify(error)
                    );

                }
            );

        }
    );

}

const editAboutButton =
    document.getElementById(
        "edit-about-btn"
    );

const editAboutPanel =
    document.getElementById(
        "edit-about-panel"
    );

const saveAboutButton =
    document.getElementById(
        "save-about"
    );

const cancelAboutButton =
    document.getElementById(
        "cancel-about"
    );

const aboutDescription =
    document.getElementById(
        "about-description"
    );

const editAboutDescription =
    document.getElementById(
        "edit-about-description"
    );

function loadAboutData() {

    const session =
        getSession();

    if (!session) {

        redirectToLogin();
        return;

    }

    if (
        session.student &&
        aboutDescription
    ) {

        aboutDescription.textContent =
            session.student.about_me || "";

    }

    if (
        session.student &&
        editAboutDescription
    ) {

        editAboutDescription.value =
            session.student.about_me || "";

    }

    if (session.student) {

        updateHeaderNames(
            session.student.name || ""
        );

    }

}

if (
    editAboutButton &&
    editAboutPanel
) {

    editAboutButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            if (menuToggle) {
                menuToggle.checked = false;
            }

            loadAboutData();

            editAboutPanel.style.display =
                "block";

            editAboutPanel.style.visibility =
                "visible";

            editAboutPanel.style.opacity =
                "1";

        }
    );

}

if (
    cancelAboutButton &&
    editAboutPanel
) {

    cancelAboutButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            editAboutPanel.style.display =
                "none";

            editAboutPanel.style.visibility =
                "hidden";

            editAboutPanel.style.opacity =
                "0";

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
        function (event) {

            event.preventDefault();

            if (!editAboutDescription) {

                alert(
                    "About text field was not found."
                );

                return;

            }

            const description =
                editAboutDescription
                    .value
                    .trim();

            if (!description) {

                alert(
                    "Please enter your About information."
                );

                return;

            }

            const session =
                getSession();

            if (!session) {

                redirectToLogin();
                return;

            }

            const student =
                session.student || {};

            cordova.plugin.http.setDataSerializer(
                "json"
            );

            cordova.plugin.http.put(
                "http://10.0.2.2:3000/api/profile",
                {
                    name:
                        student.name || "",
                    course:
                        student.course || "",
                    year_level:
                        student.year_level || "",
                    about_me:
                        description,
                    skills:
                        student.skills || ""
                },
                {
                    "Authorization":
                        "Bearer " +
                        session.token,
                    "Content-Type":
                        "application/json"
                },
                function (response) {

                    let data = {};

                    try {

                        data =
                            JSON.parse(
                                response.data
                            );

                    } catch (error) {

                        data = {};

                    }

                    if (
                        response.status < 200 ||
                        response.status >= 300
                    ) {

                        alert(
                            data.message ||
                            "Unable to update About information."
                        );

                        return;

                    }

                    session.student =
                        session.student || {};

                    session.student.about_me =
                        description;

                    localStorage.setItem(
                        "studentSession",
                        JSON.stringify(session)
                    );

                    if (aboutDescription) {

                        aboutDescription.textContent =
                            description;

                    }

                    editAboutPanel.style.display =
                        "none";

                    editAboutPanel.style.visibility =
                        "hidden";

                    editAboutPanel.style.opacity =
                        "0";

                    alert(
                        "About information updated successfully!"
                    );

                },
                function (error) {

                    console.error(
                        "ABOUT UPDATE ERROR:",
                        JSON.stringify(error)
                    );

                    alert(
                        "Unable to update About information. " +
                        JSON.stringify(error)
                    );

                }
            );

        }
    );

}

const editContactButton =
    document.getElementById(
        "edit-contact-btn"
    );

const editContactPanel =
    document.getElementById(
        "edit-contact-panel"
    );

const saveContactButton =
    document.getElementById(
        "save-contact"
    );

const cancelContactButton =
    document.getElementById(
        "cancel-contact"
    );

const contactEmail =
    document.getElementById(
        "contact-email"
    );

const contactFacebook =
    document.getElementById(
        "contact-facebook"
    );

const contactGithub =
    document.getElementById(
        "contact-github"
    );

const contactNumber =
    document.getElementById(
        "contact-number"
    );

const editContactEmail =
    document.getElementById(
        "edit-email"
    );

const editContactFacebook =
    document.getElementById(
        "edit-facebook"
    );

const editContactGithub =
    document.getElementById(
        "edit-github"
    );

const editContactNumber =
    document.getElementById(
        "edit-number"
    );

function loadContactData() {

    const savedContact =
        localStorage.getItem(
            "contactData"
        );

    if (!savedContact) {
        return;
    }

    try {

        const contactData =
            JSON.parse(
                savedContact
            );

        if (contactEmail) {

            contactEmail.textContent =
                contactData.email || "";

        }

        if (contactFacebook) {

            contactFacebook.textContent =
                contactData.facebook || "";

        }

        if (contactGithub) {

            contactGithub.textContent =
                contactData.github || "";

        }

        if (contactNumber) {

            contactNumber.textContent =
                contactData.number || "";

        }

        if (editContactEmail) {

            editContactEmail.value =
                contactData.email || "";

        }

        if (editContactFacebook) {

            editContactFacebook.value =
                contactData.facebook || "";

        }

        if (editContactGithub) {

            editContactGithub.value =
                contactData.github || "";

        }

        if (editContactNumber) {

            editContactNumber.value =
                contactData.number || "";

        }

    } catch (error) {

    }

}

loadContactData();

if (
    editContactButton &&
    editContactPanel
) {

    editContactButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            if (menuToggle) {
                menuToggle.checked = false;
            }

            loadContactData();

            editContactPanel.style.display =
                "block";

            editContactPanel.style.visibility =
                "visible";

            editContactPanel.style.opacity =
                "1";

        }
    );

}

if (
    cancelContactButton &&
    editContactPanel
) {

    cancelContactButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            editContactPanel.style.display =
                "none";

            editContactPanel.style.visibility =
                "hidden";

            editContactPanel.style.opacity =
                "0";

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
        function (event) {

            event.preventDefault();

            if (
                !editContactEmail ||
                !editContactFacebook ||
                !editContactGithub ||
                !editContactNumber
            ) {

                alert(
                    "Contact form fields were not found."
                );

                return;

            }

            const email =
                editContactEmail
                    .value
                    .trim();

            const facebook =
                editContactFacebook
                    .value
                    .trim();

            const github =
                editContactGithub
                    .value
                    .trim();

            const number =
                editContactNumber
                    .value
                    .trim();

            if (!email) {

                alert(
                    "Please enter your email."
                );

                return;

            }

            if (
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                    email
                )
            ) {

                alert(
                    "Please enter a valid email address."
                );

                return;

            }

            if (!facebook) {

                alert(
                    "Please enter your Facebook name."
                );

                return;

            }

            if (!github) {

                alert(
                    "Please enter your GitHub username."
                );

                return;

            }

            if (!number) {

                alert(
                    "Please enter your phone number."
                );

                return;

            }

            if (
                !/^[0-9+\-\s()]+$/.test(
                    number
                )
            ) {

                alert(
                    "Phone number can only contain numbers and phone symbols."
                );

                return;

            }

            const contactData = {

                email:
                    email,

                facebook:
                    facebook,

                github:
                    github,

                number:
                    number

            };

            localStorage.setItem(
                "contactData",
                JSON.stringify(
                    contactData
                )
            );

            if (contactEmail) {

                contactEmail.textContent =
                    email;

            }

            if (contactFacebook) {

                contactFacebook.textContent =
                    facebook;

            }

            if (contactGithub) {

                contactGithub.textContent =
                    github;

            }

            if (contactNumber) {

                contactNumber.textContent =
                    number;

            }

            editContactPanel.style.display =
                "none";

            editContactPanel.style.visibility =
                "hidden";

            editContactPanel.style.opacity =
                "0";

            alert(
                "Contact information updated successfully!"
            );

        }
    );

}

const editProjectsButton =
    document.getElementById(
        "edit-projects-btn"
    );

const editProjectsPanel =
    document.getElementById(
        "edit-projects-panel"
    );

const saveProjectsButton =
    document.getElementById(
        "save-projects"
    );

const cancelProjectsButton =
    document.getElementById(
        "cancel-projects"
    );

const projectElements = [

    document.getElementById("project-1"),
    document.getElementById("project-2"),
    document.getElementById("project-3")

];

const projectDescriptionElements = [

    document.getElementById(
        "project-description-1"
    ),

    document.getElementById(
        "project-description-2"
    ),

    document.getElementById(
        "project-description-3"
    )

];

const projectInputs = [

    document.getElementById(
        "edit-project-1"
    ),

    document.getElementById(
        "edit-project-2"
    ),

    document.getElementById(
        "edit-project-3"
    )

];

const projectDescriptionInputs = [

    document.getElementById(
        "edit-project-description-1"
    ),

    document.getElementById(
        "edit-project-description-2"
    ),

    document.getElementById(
        "edit-project-description-3"
    )

];

function loadProjectsData() {

    const savedProjects =
        localStorage.getItem(
            "projectsData"
        );

    if (savedProjects) {

        try {

            const projectsData =
                JSON.parse(
                    savedProjects
                );

            if (
                projectsData.projects &&
                Array.isArray(
                    projectsData.projects
                )
            ) {

                for (
                    let i = 0;
                    i < 3;
                    i++
                ) {

                    const project =
                        projectsData.projects[i];

                    if (!project) {
                        continue;
                    }

                    if (projectElements[i]) {

                        projectElements[i].textContent =
                            project.name || "";

                    }

                    if (
                        projectDescriptionElements[i]
                    ) {

                        projectDescriptionElements[i]
                            .textContent =
                            project.description || "";

                    }

                    if (projectInputs[i]) {

                        projectInputs[i].value =
                            project.name || "";

                    }

                    if (
                        projectDescriptionInputs[i]
                    ) {

                        projectDescriptionInputs[i]
                            .value =
                            project.description || "";

                    }

                }

                return;

            }

        } catch (error) {

        }

    }

    for (
        let i = 0;
        i < 3;
        i++
    ) {

        if (
            projectInputs[i] &&
            projectElements[i]
        ) {

            projectInputs[i].value =
                projectElements[i]
                    .textContent
                    .trim();

        }

        if (
            projectDescriptionInputs[i] &&
            projectDescriptionElements[i]
        ) {

            projectDescriptionInputs[i].value =
                projectDescriptionElements[i]
                    .textContent
                    .trim();

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
        function (event) {

            event.preventDefault();

            if (menuToggle) {
                menuToggle.checked = false;
            }

            loadProjectsData();

            editProjectsPanel.style.display =
                "block";

            editProjectsPanel.style.visibility =
                "visible";

            editProjectsPanel.style.opacity =
                "1";

        }
    );

}

if (
    cancelProjectsButton &&
    editProjectsPanel
) {

    cancelProjectsButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            editProjectsPanel.style.display =
                "none";

            editProjectsPanel.style.visibility =
                "hidden";

            editProjectsPanel.style.opacity =
                "0";

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
        function (event) {

            event.preventDefault();

            const projects = [];

            for (
                let i = 0;
                i < 3;
                i++
            ) {

                if (
                    !projectInputs[i] ||
                    !projectDescriptionInputs[i]
                ) {

                    alert(
                        "Project form fields were not found."
                    );

                    return;

                }

                const name =
                    projectInputs[i]
                        .value
                        .trim();

                const description =
                    projectDescriptionInputs[i]
                        .value
                        .trim();

                if (!name) {

                    alert(
                        "Please enter Project " +
                        (i + 1) +
                        "."
                    );

                    return;

                }

                if (!description) {

                    alert(
                        "Please enter Description " +
                        (i + 1) +
                        "."
                    );

                    return;

                }

                projects.push({

                    name:
                        name,

                    description:
                        description

                });

            }

            localStorage.setItem(
                "projectsData",
                JSON.stringify({
                    projects:
                        projects
                })
            );

            for (
                let i = 0;
                i < 3;
                i++
            ) {

                if (projectElements[i]) {

                    projectElements[i].textContent =
                        projects[i].name;

                }

                if (
                    projectDescriptionElements[i]
                ) {

                    projectDescriptionElements[i]
                        .textContent =
                        projects[i].description;

                }

            }

            editProjectsPanel.style.display =
                "none";

            editProjectsPanel.style.visibility =
                "hidden";

            editProjectsPanel.style.opacity =
                "0";

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
    document.getElementById(
        "profile-image"
    );

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

            window.resolveLocalFileSystemURL(
                imageData,
                function (fileEntry) {

                    const imageUrl =
                        fileEntry.toURL();

                    if (profileImage) {

                        profileImage.src =
                            imageUrl;

                    }

                    localStorage.setItem(
                        "profilePicture",
                        imageUrl
                    );

                    alert(
                        "Profile picture updated successfully!"
                    );

                },
                function () {

                    alert(
                        "Unable to access the captured picture."
                    );

                }
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

        window.resolveLocalFileSystemURL(
            savedProfilePicture,
            function (fileEntry) {

                profileImage.src =
                    fileEntry.toURL();

            },
            function () {

                localStorage.removeItem(
                    "profilePicture"
                );

            }
        );

    }

    changeProfilePictureButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            if (menuToggle) {
                menuToggle.checked = false;
            }

            requestCameraPermission();

        }
    );

}

const loginForm =
    document.getElementById(
        "login-form"
    );

const loginIdentifier =
    document.getElementById(
        "login-identifier"
    );

const loginPassword =
    document.getElementById(
        "login-password"
    );

const loginMessage =
    document.getElementById(
        "login-message"
    );

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const identifier =
                loginIdentifier
                    ? loginIdentifier.value.trim()
                    : "";

            const password =
                loginPassword
                    ? loginPassword.value
                    : "";

            if (
                !identifier ||
                !password
            ) {

                if (loginMessage) {

                    loginMessage.textContent =
                        "Please enter your Student ID/email and password.";

                }

                return;

            }

            if (loginMessage) {

                loginMessage.textContent =
                    "Logging in...";

            }

            try {

                cordova.plugin.http.setDataSerializer(
                    "json"
                );

                cordova.plugin.http.post(
                    "http://10.0.2.2:3000/api/login",
                    {
                        student_id:
                            identifier,
                        password:
                            password
                    },
                    {
                        "Content-Type":
                            "application/json"
                    },
                    function (response) {

                        let data = {};

                        try {

                            data =
                                JSON.parse(
                                    response.data
                                );

                        } catch (error) {

                            if (loginMessage) {

                                loginMessage.textContent =
                                    "Invalid server response.";

                            }

                            return;

                        }

                        if (
                            response.status < 200 ||
                            response.status >= 300
                        ) {

                            if (loginMessage) {

                                loginMessage.textContent =
                                    data.message ||
                                    "Login failed.";

                            }

                            return;

                        }

                        if (
                            !data.token ||
                            !data.student
                        ) {

                            if (loginMessage) {

                                loginMessage.textContent =
                                    "Login response is incomplete.";

                            }

                            return;

                        }

                        localStorage.setItem(
                            "studentSession",
                            JSON.stringify({
                                token:
                                    data.token,
                                student:
                                    data.student
                            })
                        );

                        window.location.href =
                            "index.html";

                    },
                    function (error) {

                        console.error(
                            "HTTP ERROR:",
                            JSON.stringify(error)
                        );

                        if (loginMessage) {

                            loginMessage.textContent =
                                "Unable to connect to the server.";

                        }

                    }
                );

            } catch (error) {

                console.error(
                    "LOGIN EXCEPTION:",
                    error
                );

                if (loginMessage) {

                    loginMessage.textContent =
                        "Unable to process login.";

                }

            }

        }
    );

}

});
