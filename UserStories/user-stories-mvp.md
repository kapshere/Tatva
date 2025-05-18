# User Stories for Tatva MVP (v2)

## Enhanced Authentication

### US2.1: Aadhaar Integration
**As a** user,  
**I want to** verify my identity using Aadhaar,  
**So that** I can establish credibility on the platform.

**Acceptance Criteria:**
- User can initiate Aadhaar verification from profile
- OTP-based verification flow works correctly
- Verification status is displayed on profile
- User receives confirmation of successful verification
- Graceful handling of verification failures

### US2.2: Social Login
**As a** user,  
**I want to** log in using my social media accounts,  
**So that** I can access the platform more conveniently.

**Acceptance Criteria:**
- Google login option is available
- LinkedIn login option is available
- Facebook login option is available
- Account linking between social and email login
- Profile information is imported when possible

### US2.3: Multi-factor Authentication
**As a** user,  
**I want to** enable multi-factor authentication,  
**So that** my account is more secure.

**Acceptance Criteria:**
- Option to enable MFA in security settings
- SMS-based verification code delivery
- App-based authentication option
- Backup codes generation and management
- Clear process to disable MFA if needed

### US2.4: Password Recovery
**As a** user,  
**I want to** recover my password if forgotten,  
**So that** I can regain access to my account.

**Acceptance Criteria:**
- "Forgot password" flow with email verification
- Secure password reset link generation
- Password reset link expiration
- New password validation
- Confirmation of successful password change

## Enhanced Profile Management

### US2.5: Comprehensive Profile Builder
**As a** user,  
**I want to** create a detailed professional profile,  
**So that** I can showcase my qualifications and experience.

**Acceptance Criteria:**
- Step-by-step profile completion wizard
- Progress indicator showing completion percentage
- Ability to save and continue profile building
- Profile strength indicator
- Profile completion recommendations

### US2.6: Education History Management
**As a** user,  
**I want to** add and manage my educational qualifications,  
**So that** I can showcase my academic background.

**Acceptance Criteria:**
- Add multiple education entries
- Edit or remove existing entries
- Include institution, degree, dates, and description
- Option to upload certificates or transcripts
- Education entries appear in chronological order

### US2.7: Work Experience Management
**As a** user,  
**I want to** add and manage my work experience,  
**So that** I can showcase my professional background.

**Acceptance Criteria:**
- Add multiple work experience entries
- Edit or remove existing entries
- Include company, role, dates, and description
- Option to mark current position
- Work entries appear in chronological order

### US2.8: Skills Management
**As a** user,  
**I want to** add and organize my skills,  
**So that** I can highlight my capabilities.

**Acceptance Criteria:**
- Add skills from predefined list or custom entry
- Group skills by category
- Indicate proficiency level
- Reorder skills based on relevance
- Skills appear on profile in organized manner

## BAP Functionality (Seeker)

### US2.9: Advanced Course Search
**As a** learner,  
**I want to** search for courses with advanced filters,  
**So that** I can find the most relevant learning opportunities.

**Acceptance Criteria:**
- Multiple filtering options (cost, duration, rating, etc.)
- Sort by relevance, cost, or rating
- Save search criteria for future use
- Filter by provider type
- Results update dynamically as filters change

### US2.10: Course Enrollment
**As a** learner,  
**I want to** enroll in courses through the platform,  
**So that** I can access learning opportunities.

**Acceptance Criteria:**
- Select course and initiate enrollment
- Review enrollment details before confirming
- Basic payment processing for paid courses
- Enrollment confirmation notification
- Course appears in "My Learning" section

### US2.11: Advanced Job Search
**As a** job seeker,  
**I want to** search for jobs with advanced filters,  
**So that** I can find the most relevant opportunities.

**Acceptance Criteria:**
- Multiple filtering options (salary, experience, location)
- Sort by relevance, date posted, or salary
- Save search criteria for future use
- Filter by employment type and industry
- Results update dynamically as filters change

### US2.12: Job Application
**As a** job seeker,  
**I want to** apply for jobs through the platform,  
**So that** I can pursue employment opportunities.

**Acceptance Criteria:**
- Select job and initiate application
- Submit cover letter or additional information
- Upload or select resume from profile
- Application confirmation notification
- Job appears in "My Applications" section

### US2.13: Application/Enrollment Tracking
**As a** seeker,  
**I want to** track the status of my applications and enrollments,  
**So that** I can stay informed about my progress.

**Acceptance Criteria:**
- Dashboard showing all applications/enrollments
- Status indicators for each item
- Chronological order with newest first
- Filter by status or type
- View detailed status information

## BPP Functionality (Provider)

### US2.14: Enhanced Course Creation
**As an** education provider,  
**I want to** create comprehensive course listings,  
**So that** I can attract appropriate learners.

**Acceptance Criteria:**
- Detailed course information input
- Add curriculum and learning outcomes
- Set prerequisites and target audience
- Upload course images or materials
- Set pricing and enrollment options

### US2.15: Enhanced Job Posting
**As an** employer,  
**I want to** create comprehensive job listings,  
**So that** I can attract qualified candidates.

**Acceptance Criteria:**
- Detailed job information input
- Add requirements and responsibilities
- Set qualifications and experience level
- Specify salary range and benefits
- Set application deadline and process

### US2.16: Manage Applications/Enrollments
**As a** provider,  
**I want to** manage received applications and enrollments,  
**So that** I can process and respond to them.

**Acceptance Criteria:**
- Dashboard showing all received applications/enrollments
- Review detailed information for each
- Update status (review, shortlist, accept, reject)
- Send messages to applicants
- Export application/enrollment data

### US2.17: Basic Analytics Dashboard
**As a** provider,  
**I want to** view basic analytics about my listings,  
**So that** I can understand their performance.

**Acceptance Criteria:**
- View count for each listing
- Application/enrollment count
- Conversion rates
- Basic demographic information when available
- Time-based trends (daily, weekly, monthly)

## User Experience

### US2.18: Notifications Management
**As a** user,  
**I want to** receive and manage notifications,  
**So that** I can stay informed about relevant activities.

**Acceptance Criteria:**
- In-app notification center
- Email notification options
- Push notification support
- Notification preference settings
- Mark as read/unread functionality

### US2.19: Bookmarks and Saved Items
**As a** user,  
**I want to** bookmark courses and jobs of interest,  
**So that** I can easily find them later.

**Acceptance Criteria:**
- Add items to saved/bookmarked list
- Organize saved items by category
- Remove items from saved list
- View all saved items in one place
- Receive updates about saved items

### US2.20: Basic Recommendation Engine
**As a** user,  
**I want to** receive personalized recommendations,  
**So that** I can discover relevant opportunities.

**Acceptance Criteria:**
- Recommended courses based on profile and history
- Recommended jobs based on skills and experience
- Recommendation explanation
- Option to dismiss or save recommendations
- Recommendations refresh periodically
