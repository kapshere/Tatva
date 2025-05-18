# User Acceptance Testing Document - Tatva MVP (v2)

## Introduction
This document outlines the test cases for validating the user acceptance criteria for the Tatva application MVP (v2). Each test case corresponds to user stories and their acceptance criteria.

## Test Environment Requirements
- Mobile device (Android/iOS) or emulator
- Internet connection
- Test user accounts (seeker and provider roles)
- Test data for courses and jobs
- Aadhaar test credentials
- Social login test accounts
- Test payment methods

## Test Cases

### TC2.1: Aadhaar Integration
**Related User Story:** US2.1  
**Test Objective:** Verify that users can verify their identity using Aadhaar

**Test Steps:**
1. Log in to the application
2. Navigate to profile settings
3. Select Aadhaar verification option
4. Enter valid Aadhaar number
5. Complete OTP verification
6. View verification status on profile
7. Test with invalid Aadhaar number

**Expected Results:**
- Aadhaar verification flow works correctly
- OTP is received and can be entered
- Verification status is updated on profile
- Error handling for invalid Aadhaar numbers

**Pass/Fail Criteria:**
- Successful verification with valid Aadhaar
- Appropriate error handling for invalid attempts
- Verification status is correctly displayed on profile

### TC2.2: Social Login
**Related User Story:** US2.2  
**Test Objective:** Verify that users can log in using social media accounts

**Test Steps:**
1. Launch the application
2. Select social login option (Google, LinkedIn, Facebook)
3. Complete authentication flow
4. Verify successful login
5. Check profile information import
6. Link account with email login if applicable

**Expected Results:**
- Social login options are available
- Authentication flow completes successfully
- User is logged in to the application
- Profile information is imported where available
- Account linking works correctly

**Pass/Fail Criteria:**
- Successful authentication via social platforms
- Proper account creation and login
- Correct profile information import

### TC2.3: Multi-factor Authentication
**Related User Story:** US2.3  
**Test Objective:** Verify that users can enable and use MFA

**Test Steps:**
1. Log in to the application
2. Navigate to security settings
3. Enable MFA
4. Set up chosen verification method
5. Log out and log back in
6. Complete MFA verification
7. Generate and test backup codes

**Expected Results:**
- MFA setup process works correctly
- Login requires second factor verification
- Backup codes can be generated and used
- MFA can be disabled if needed

**Pass/Fail Criteria:**
- MFA setup is successful
- Login with MFA works correctly
- Backup codes function properly

### TC2.4: Password Recovery
**Related User Story:** US2.4  
**Test Objective:** Verify that users can recover forgotten passwords

**Test Steps:**
1. Launch the application
2. Select "Forgot password" option
3. Enter registered email
4. Receive password reset email
5. Follow reset link
6. Set new password
7. Log in with new password

**Expected Results:**
- Password reset flow is initiated correctly
- Reset email is delivered with valid link
- New password can be set and validated
- Login with new password works

**Pass/Fail Criteria:**
- Password reset flow completes successfully
- New password is accepted
- User can log in with new password

### TC2.5: Comprehensive Profile Builder
**Related User Story:** US2.5  
**Test Objective:** Verify the profile building process

**Test Steps:**
1. Log in to the application
2. Navigate to profile completion
3. Go through step-by-step wizard
4. Save progress at different stages
5. Complete profile
6. View profile strength indicator
7. Follow profile improvement suggestions

**Expected Results:**
- Profile wizard functions correctly
- Progress can be saved and resumed
- Profile strength indicator reflects completeness
- Recommendations for improvement are provided

**Pass/Fail Criteria:**
- Profile can be built in stages
- Progress saving works correctly
- Profile strength indicator is accurate

### TC2.6: Education History Management
**Related User Story:** US2.6  
**Test Objective:** Verify that users can manage education history

**Test Steps:**
1. Navigate to profile education section
2. Add new education entry
3. Upload certificate/transcript
4. Edit existing entry
5. Delete an entry
6. View education section on profile

**Expected Results:**
- Education entries can be added
- Certificates can be uploaded
- Entries can be edited and deleted
- Education history appears in chronological order

**Pass/Fail Criteria:**
- Education entries are managed correctly
- Uploads work properly
- Changes persist and display correctly

### TC2.7: Work Experience Management
**Related User Story:** US2.7  
**Test Objective:** Verify that users can manage work experience

**Test Steps:**
1. Navigate to profile work experience section
2. Add new work experience entry
3. Mark entry as current position
4. Edit existing entry
5. Delete an entry
6. View work experience section on profile

**Expected Results:**
- Work entries can be added
- Current position can be marked
- Entries can be edited and deleted
- Work history appears in chronological order

**Pass/Fail Criteria:**
- Work entries are managed correctly
- Current position is clearly indicated
- Changes persist and display correctly

### TC2.8: Skills Management
**Related User Story:** US2.8  
**Test Objective:** Verify that users can manage skills

**Test Steps:**
1. Navigate to profile skills section
2. Add skills from predefined list
3. Add custom skill entry
4. Indicate proficiency levels
5. Reorder skills by relevance
6. Remove skills
7. View skills on profile

**Expected Results:**
- Skills can be added from list or custom entry
- Proficiency levels can be set
- Skills can be reordered and removed
- Skills display properly on profile

**Pass/Fail Criteria:**
- Skills management functions work correctly
- Changes persist and display properly

### TC2.9: Advanced Course Search
**Related User Story:** US2.9  
**Test Objective:** Verify advanced course search functionality

**Test Steps:**
1. Navigate to course search
2. Enter search criteria
3. Apply multiple filters
4. Sort results by different criteria
5. Save search criteria
6. Load saved search
7. Clear filters and search again

**Expected Results:**
- Multiple filters can be applied
- Sorting options work correctly
- Search criteria can be saved and loaded
- Results update dynamically with filter changes

**Pass/Fail Criteria:**
- Search returns relevant filtered results
- Sorting functions correctly
- Saved searches work properly

### TC2.10: Course Enrollment
**Related User Story:** US2.10  
**Test Objective:** Verify course enrollment process

**Test Steps:**
1. Search for and select a course
2. Initiate enrollment process
3. Review enrollment details
4. Complete payment process for paid course
5. Confirm enrollment
6. Check "My Learning" section
7. Verify enrollment notification

**Expected Results:**
- Enrollment process flows correctly
- Payment processing works for paid courses
- Enrollment appears in "My Learning" section
- Notification is received for successful enrollment

**Pass/Fail Criteria:**
- Enrollment process completes successfully
- Payment processing works correctly
- Course appears in user's learning list

### TC2.11: Advanced Job Search
**Related User Story:** US2.11  
**Test Objective:** Verify advanced job search functionality

**Test Steps:**
1. Navigate to job search
2. Enter search criteria
3. Apply multiple filters
4. Sort results by different criteria
5. Save search criteria
6. Load saved search
7. Clear filters and search again

**Expected Results:**
- Multiple filters can be applied
- Sorting options work correctly
- Search criteria can be saved and loaded
- Results update dynamically with filter changes

**Pass/Fail Criteria:**
- Search returns relevant filtered results
- Sorting functions correctly
- Saved searches work properly

### TC2.12: Job Application
**Related User Story:** US2.12  
**Test Objective:** Verify job application process

**Test Steps:**
1. Search for and select a job
2. Initiate application process
3. Write/upload cover letter
4. Select resume from profile or upload new one
5. Submit application
6. Check "My Applications" section
7. Verify application notification

**Expected Results:**
- Application process flows correctly
- Resume and cover letter can be added
- Application appears in "My Applications" section
- Notification is received for successful application

**Pass/Fail Criteria:**
- Application process completes successfully
- Documents are attached correctly
- Job appears in user's applications list

### TC2.13: Application/Enrollment Tracking
**Related User Story:** US2.13  
**Test Objective:** Verify tracking of applications and enrollments

**Test Steps:**
1. Navigate to tracking dashboard
2. View list of applications/enrollments
3. Filter by status
4. Filter by type
5. View detailed status information
6. Sort by date

**Expected Results:**
- Dashboard shows all applications/enrollments
- Status indicators are clear
- Filtering works correctly
- Detailed information is accessible

**Pass/Fail Criteria:**
- All applications/enrollments are visible
- Filters function correctly
- Status information is accurate and up-to-date

### TC2.14: Enhanced Course Creation
**Related User Story:** US2.14  
**Test Objective:** Verify enhanced course creation functionality

**Test Steps:**
1. Log in as provider
2. Navigate to course creation
3. Enter comprehensive course details
4. Add curriculum and learning outcomes
5. Set prerequisites and target audience
6. Upload course images/materials
7. Set pricing and enrollment options
8. Preview and publish course

**Expected Results:**
- All course details can be entered
- Curriculum can be structured
- Materials can be uploaded
- Pricing and enrollment options work
- Course publishes successfully

**Pass/Fail Criteria:**
- Course creation process completes successfully
- All entered details save correctly
- Course appears in provider catalog

### TC2.15: Enhanced Job Posting
**Related User Story:** US2.15  
**Test Objective:** Verify enhanced job posting functionality

**Test Steps:**
1. Log in as provider
2. Navigate to job posting
3. Enter comprehensive job details
4. Add requirements and responsibilities
5. Set qualifications and experience level
6. Specify salary range and benefits
7. Set application deadline
8. Preview and publish job

**Expected Results:**
- All job details can be entered
- Requirements and responsibilities can be detailed
- Salary and benefits can be specified
- Deadline setting works
- Job publishes successfully

**Pass/Fail Criteria:**
- Job posting process completes successfully
- All entered details save correctly
- Job appears in provider listings

### TC2.16: Manage Applications/Enrollments
**Related User Story:** US2.16  
**Test Objective:** Verify provider management of applications/enrollments

**Test Steps:**
1. Log in as provider
2. Navigate to applications/enrollments dashboard
3. View list of received items
4. Review detailed information for selected item
5. Update status (review