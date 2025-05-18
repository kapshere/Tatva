# User Stories for Tatva Prototype (v1)

## Authentication and Profile

### US1.1: User Registration
**As a** new user,  
**I want to** create an account with my email and password,  
**So that** I can access the platform's features.

**Acceptance Criteria:**
- User can register with email and password
- User receives confirmation of successful registration
- User can log in with newly created credentials
- Validation for required fields is implemented
- Appropriate error messages displayed for invalid inputs

### US1.2: User Login
**As a** registered user,  
**I want to** log in with my credentials,  
**So that** I can access my account.

**Acceptance Criteria:**
- User can enter email and password to log in
- System validates credentials
- Successful login redirects to home screen
- Error message displayed for incorrect credentials
- "Forgot password" option is available

### US1.3: Basic Profile Creation
**As a** new user,  
**I want to** create a basic profile,  
**So that** I can be identified on the platform.

**Acceptance Criteria:**
- User can enter basic profile information (name, headline, bio)
- User can upload a profile picture
- User can view their own profile
- Profile can be edited after creation
- Required fields are validated

### US1.4: Role Selection
**As a** platform user,  
**I want to** select my role as a seeker or provider,  
**So that** I can access the appropriate features.

**Acceptance Criteria:**
- User can select either seeker or provider role during onboarding
- User can switch between roles from settings
- UI adapts based on selected role
- Role selection is saved between sessions

## BAP Functionality (Seeker)

### US1.5: Basic Course Search
**As a** learner,  
**I want to** search for educational courses,  
**So that** I can find learning opportunities.

**Acceptance Criteria:**
- Search interface with keyword input
- Basic filtering options (cost, duration)
- Results display with course titles and basic information
- Search results load within 3 seconds
- Empty state is handled gracefully

### US1.6: Basic Job Search
**As a** job seeker,  
**I want to** search for job opportunities,  
**So that** I can find employment.

**Acceptance Criteria:**
- Search interface with keyword input for jobs
- Basic filtering options (location, job type)
- Results display with job titles and company names
- Empty state is handled gracefully
- Search results load within 3 seconds

### US1.7: View Course/Job Details
**As a** seeker,  
**I want to** view detailed information about a course or job,  
**So that** I can evaluate if it meets my needs.

**Acceptance Criteria:**
- Details view shows comprehensive information
- Back navigation to search results
- Details include provider information
- Images/icons render properly
- Content is properly formatted

## BPP Functionality (Provider)

### US1.8: Basic Course Creation
**As an** education provider,  
**I want to** create a basic course listing,  
**So that** seekers can discover my offerings.

**Acceptance Criteria:**
- Form to enter course details (title, description, duration, cost)
- Basic validation of required fields
- Preview option before publishing
- Confirmation on successful creation
- Edit option for existing courses

### US1.9: Basic Job Posting
**As an** employer,  
**I want to** create a basic job listing,  
**So that** job seekers can discover the opportunity.

**Acceptance Criteria:**
- Form to enter job details (title, company, location, description)
- Basic validation of required fields
- Preview option before publishing
- Confirmation on successful creation
- Edit option for existing job postings

### US1.10: View Provider Dashboard
**As a** provider,  
**I want to** see a dashboard of my listed courses or jobs,  
**So that** I can manage my offerings.

**Acceptance Criteria:**
- List view of all created courses/jobs
- Basic metrics (views, if available)
- Options to edit or remove listings
- Empty state handled gracefully
- Clear navigation to create new listings
