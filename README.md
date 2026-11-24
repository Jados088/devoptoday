
# 🚀 CODERWANDA Ltd – User Management Web Application

![Project](https://img.shields.io/badge/Project-CODERWANDA-blueviolet)
![HTML](https://img.shields.io/badge/HTML5-orange)
![CSS](https://img.shields.io/badge/CSS3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow)
![DevOps](https://img.shields.io/badge/DevOps-Project-success)

## 📌 Project Overview

CODERWANDA Ltd is a modern, responsive, web-based user management application that allows users to register, log in, and access information through a web browser.

The project demonstrates the implementation of DevOps practices to improve collaboration, automate software development processes, and ensure reliable application deployment.

The application provides a modern dashboard with user statistics, profile management, notifications, and account management features.

## 🎯 Project Objectives

- Develop a responsive web application.
- Implement user registration and login interfaces.
- Provide a dashboard for managing users.
- Apply Git and GitHub for version control.
- Use Jira for project planning and sprint management.
- Containerize the application using Docker.
- Automate build and deployment using Jenkins.
- Deploy and manage the application using Kubernetes.

## ✨ Application Features

### 1. Company Branding
- CODERWANDA Ltd branding.
- Modern user interface.
- Professional colors and layouts.

### 2. Registration Page
- Full name registration.
- Phone number.
- Email address.
- Password and confirmation.
- Registration validation.

### 3. Login Page
- Email and password authentication demo.
- Password visibility option.
- Login validation.
- Dashboard access after successful login.

### 4. Dashboard
- Dashboard overview.
- Total registered users.
- Active account statistics.
- Recent activity information.
- Responsive dashboard layout.

### 5. User Management
- View registered users.
- Search users by name or email.
- Delete registered users.

### 6. Profile Management
- View profile information.
- Update username.
- Save profile changes.

### 7. Navigation and Notifications
- Sidebar navigation.
- Dashboard navigation.
- Notifications panel.
- Logout functionality.

### 8. Responsive Design
- Desktop support.
- Tablet support.
- Mobile phone support.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 | Styling and responsive design |
| JavaScript | Application functionality |
| LocalStorage | Front-end demonstration data |
| Jira | Project planning and sprint management |
| Git | Version control |
| GitHub | Source code hosting |
| Docker | Application containerization |
| Jenkins | Continuous Integration and Deployment |
| Kubernetes | Application deployment and scaling |

## 📂 Project Structure

```text
CODERWANDA/
│
├── index.html
├── login.html
├── register.html
├── README.md
│
├── Dockerfile
├── .dockerignore
│
└── Jenkinsfile
```

## ⚙️ Installation and Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/CODERWANDA.git
```

### Step 2: Navigate to the Project

```bash
cd CODERWANDA
```

### Step 3: Open in Visual Studio Code

```bash
code .
```

### Step 4: Run the Application

Open `register.html` using the VS Code Live Server extension.

Alternatively, use Python:

```bash
python -m http.server 8000
```

Open your browser:

```text
http://localhost:8000/register.html
```

Register an account, log in, and access the dashboard.

## 🔄 DevOps Implementation

### 1. Jira – Project Management

Jira is used to:
- Create project tasks.
- Organize development activities.
- Manage sprint planning.
- Track project progress.
- Monitor completed and pending tasks.

### 2. Git and GitHub – Version Control

Initialize Git:

```bash
git init
```

Add project files:

```bash
git add .
```

Commit changes:

```bash
git commit -m "Initial CODERWANDA application"
```

Connect GitHub:

```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/CODERWANDA.git
git push -u origin main
```

### 3. Docker – Containerization

Docker is used to package the application into a container.

Build the Docker image:

```bash
docker build -t coderwanda-app .
```

Run the container:

```bash
docker run -d -p 8080:80 --name coderwanda coderwanda-app
```

Access the application:

```text
http://localhost:8080
```

### 4. Jenkins – Continuous Integration and Deployment

Jenkins automates the application build and deployment process.

The pipeline can perform:

- GitHub source code checkout.
- Docker image building.
- Application testing.
- Docker image publishing.
- Deployment automation.

### 5. Kubernetes – Deployment and Scaling

Kubernetes manages application containers.

Example commands:

```bash
kubectl apply -f deployment.yaml
```

```bash
kubectl apply -f service.yaml
```

Check deployments:

```bash
kubectl get deployments
```

Check pods:

```bash
kubectl get pods
```

Check services:

```bash
kubectl get services
```

Scale the application:

```bash
kubectl scale deployment coderwanda --replicas=3
```

## 🧪 Application Testing

The following features should be tested:

- [ ] User registration.
- [ ] Login with valid credentials.
- [ ] Login with invalid credentials.
- [ ] Password confirmation.
- [ ] Dashboard access protection.
- [ ] Dashboard statistics.
- [ ] User search.
- [ ] User deletion.
- [ ] Profile updating.
- [ ] Notifications.
- [ ] Logout functionality.
- [ ] Responsive mobile interface.
- [ ] Docker container execution.
- [ ] Jenkins pipeline execution.
- [ ] Kubernetes deployment.

## 🔐 Security Considerations

This initial version is a front-end demonstration.

For production deployment, additional security measures are required:

- Backend authentication.
- Password hashing.
- Secure session management.
- Database integration.
- Server-side input validation.
- Role-based access control.
- HTTPS configuration.

Browser LocalStorage is not suitable for storing real user passwords or production authentication credentials.

## 📸 Screenshots and Evidence

Add screenshots demonstrating your implementation:

```text
screenshots/
├── registration.png
├── login.png
├── dashboard.png
├── user-management.png
├── jira-board.png
├── github-repository.png
├── docker-container.png
├── jenkins-pipeline.png
└── kubernetes-pods.png
```

## 👨‍💻 Project Information

**Company:** CODERWANDA Ltd

**Project:** Web-Based User Management Application

**Project Type:** DevOps and Web Development

**Frontend:** HTML, CSS and JavaScript

**DevOps Tools:** Jira, Git, GitHub, Docker, Jenkins and Kubernetes

## 📜 License

This project was developed for educational and practical DevOps implementation purposes.

---

**CODERWANDA Ltd**

*Building Digital Solutions. Creating Better Experiences.* 🚀
