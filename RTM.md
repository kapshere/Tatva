# Requirements Traceability Matrix (RTM)

This matrix links the Work Breakdown Structure (WBS), User Stories, and User Acceptance Testing (UAT) for each version of Tatva.

| Version | WBS Item | User Story | Success Criteria | UAT Test Case |
|---------|----------|------------|-----------------|--------------|
| v1      | 4.1 User registration & login | As a new user, I want to register and log in with my email so that I can access the platform. | User can create an account, log in, and log out. | Register a new user with email, log in, log out |
| v1      | 4.2 Profile creation | As a user, I want to create and edit my profile with basic information, skills, education, and experience. | User can save and update profile details. | Fill in and update profile (basic info, skills, education, experience) |
| v1      | 4.3 Search/browse users | As a user, I want to search and browse other users by skill, education, or employer so I can find relevant connections. | User can view lists of users matching filters. | Search users by skill, education, or employer |
| v1      | 4.4 Connection requests | As a user, I want to send, accept, or reject connection requests. | User can send requests and see accepted/rejected status. | Send, accept, and reject connection requests |
| v1      | 4.5 Decentralized data flow (mocked) | As a user, I want to see that my data is not stored centrally but accessed via a decentralized (mocked) flow. | App demonstrates data flow between BAP/BPP components (mocked). | View demonstration of decentralized (mocked) data flow |
| v2      | 4.1 Full user registration with DID | As a user, I want to register and log in using a decentralized identity so I control my credentials. | DID-based authentication is functional. | Register and log in using DID |
| v2      | 4.2 Profile verification | As a user, I want my profile to include certifications and endorsements, and be verifiable by BPPs. | Profiles can be verified, and certifications added. | Add certifications, request verification from BPP |
| v2      | 4.3 Messaging | As a user, I want to message other users securely. | Users can send and receive messages. | Send and receive messages between users |
| v2      | 4.4 Organization onboarding | As an employer/educator, I want to onboard my organization as a BPP and manage its profile. | Organizations can register and manage their presence. | Register an organization as BPP, manage its profile |
| v2      | 4.5 Job/Opportunity posting | As an employer/educator, I want to post jobs/opportunities and receive applications. | Jobs can be posted and users can apply. | Post a job, apply as a user |
| v2      | 4.6 BECKN protocol integration | As a user, I want to interact with real BAP/BPP flows for trust and transparency. | BECKN-based flows are functional and auditable. | Complete a BAP/BPP transaction |
| v2      | 4.7 Notifications | As a user, I want to receive notifications about important events (connections, jobs, messages). | Users receive timely notifications. | Trigger events (connections, jobs, messages) |
| v3      | 2.1 Advanced search and filtering | As a user, I want to search and filter users, jobs, and organizations with advanced parameters. | Users can use multi-criteria search and filtering. | Use multi-criteria search and filtering for users, jobs, organizations |
| v3      | 2.2 Skill endorsements and recommendations | As a user, I want to endorse others' skills and write recommendations. | Users can endorse and recommend, and these are visible on profiles. | Endorse a skill, write a recommendation |
| v3      | 2.3 Analytics dashboards for BPPs | As a BPP, I want analytics dashboards to track engagement and outcomes. | Dashboards show relevant metrics to BPPs. | Access analytics dashboard as BPP |
| v3      | 2.4 External credential integration | As a user, I want to import and verify credentials from external providers. | Credentials can be imported and verified via BECKN. | Import and verify credentials from external provider |
| v3      | 2.5 Mobile app (basic hybrid) | As a user, I want to access the platform on my mobile device. | Core features are accessible via mobile. | Access platform via mobile device |
| v3      | 3.1 Security & compliance | As a user, I want assurance that my data is secure and privacy-compliant. | Platform passes privacy and security audits. | Review platform for privacy and security compliance |
| v3      | 5.1 Community & support | As a user, I want to access support and community forums. | Users can access helpdesk and participate in forums. | Access helpdesk and forums |

---

**Legend:**
- WBS: Work Breakdown Structure reference (from /WBS)
- User Story: Reference from /UserStories
- UAT: Test case from /UAT
- Success Criteria: Acceptance criteria for each user story

This matrix ensures that all requirements are mapped to implementation and testing for full traceability.
