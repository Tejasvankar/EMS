const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare quarterly report",
        description: "Gather data and prepare Q1 performance report",
        date: "2025-06-10",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team meeting",
        description: "Weekly sync with the development team",
        date: "2025-06-08",
        category: "Meeting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Client presentation",
        description: "Present the project roadmap to the client",
        date: "2025-06-09",
        category: "Client"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Bug fixes",
        description: "Fix login issues reported by QA",
        date: "2025-06-11",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Code review",
        description: "Review pull request #42",
        date: "2025-06-10",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "System testing",
        description: "Conduct tests on the new authentication flow",
        date: "2025-06-09",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Documentation update",
        description: "Update outdated API documentation",
        date: "2025-06-07",
        category: "Documentation"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design homepage mockup",
        description: "Create a new mockup for homepage redesign",
        date: "2025-06-10",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "UI feedback session",
        description: "Collect feedback on the dashboard UI",
        date: "2025-06-09",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Graphic assets",
        description: "Create icon sets for the mobile app",
        date: "2025-06-08",
        category: "Design"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Security audit",
        description: "Review and report potential vulnerabilities",
        date: "2025-06-11",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Password policy update",
        description: "Update password policy documentation",
        date: "2025-06-08",
        category: "Compliance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Firewall configuration",
        description: "Apply new firewall settings to all servers",
        date: "2025-06-07",
        category: "IT"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Penetration test",
        description: "Conduct external pentesting",
        date: "2025-06-06",
        category: "Security"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Market research",
        description: "Analyze competitors' strategies for Q2",
        date: "2025-06-11",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Content calendar",
        description: "Plan content for social media",
        date: "2025-06-09",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Email campaign",
        description: "Design and schedule newsletter campaign",
        date: "2025-06-08",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Survey analysis",
        description: "Analyze survey responses from customers",
        date: "2025-06-07",
        category: "Research"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Social media audit",
        description: "Evaluate engagement across platforms",
        date: "2025-06-10",
        category: "Marketing"
      }
    ]
  }
];
const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage =  ()=>{
 localStorage.setItem('employees',JSON.stringify(employees))
 localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () => {
 const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    console.log(employees,admin)

}