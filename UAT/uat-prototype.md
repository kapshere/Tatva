# User Acceptance Testing Document - Tatva Prototype (v1)

## Introduction
This document outlines the test cases for validating the user acceptance criteria for the Tatva application prototype (v1). Each test case corresponds to user stories and their acceptance criteria.

## Test Environment Requirements
- Mobile device (Android/iOS) or emulator
- Internet connection
- Test user accounts (seeker and provider roles)
- Test data for courses and jobs

## Test Cases

### TC1.1: User Registration
**Related User Story:** US1.1  
**Test Objective:** Verify that users can register successfully

**Test Steps:**
1. Launch the application
2. Navigate to the registration screen
3. Enter valid email address
4. Enter valid password
5. Submit registration form
6. Verify confirmation message
7. Attempt to log in with new credentials

**Expected Results:**
- Registration form accepts valid inputs
- Confirmation message appears on successful registration
- New user can log in with created credentials
- Validation errors appear for invalid inputs

**Pass/Fail Criteria:**
- User account is created in the system
- User receives confirmation
- Login is successful with new credentials

### TC1.2: User Login
**Related User Story:** US1.2  
**Test Objective:** Verify that users can log in successfully

**Test Steps:**
1. Launch the application
2. Navigate to the login screen
3. Enter registered email
4. Enter correct password
5. Submit login form
6. Verify navigation to home screen
7. Repeat with incorrect credentials

**Expected Results:**
- Login form accepts inputs
- Successful login redirects to home screen
- Error message appears for incorrect credentials
- "Forgot password" option is visible

**Pass/Fail Criteria:**
- Successful authentication with valid credentials
- Appropriate error handling for invalid login attempts

### TC1.3: Basic Profile Creation
**Related User Story:** US1.3  
**Test Objective:** Verify that users can create and edit basic profiles

**Test Steps:**
1. Log in to the application
2. Navigate to profile creation
3. Enter name, headline, and bio
4. Upload profile picture
5. Save profile
6. Navigate to profile view
7. Attempt to edit and save changes

**Expected Results:**
- Profile form accepts all inputs
- Profile picture upload works
- Profile information is saved correctly
- Profile can be viewed after creation
- Profile can be edited

**Pass/Fail Criteria:**
- Profile is created with all entered information
- Profile is editable after creation
- Required validations are enforced

### TC1.4: Role Selection
**Related User Story:** US1.4  
**Test Objective:** Verify that users can select and switch roles

**Test Steps:**
1. Complete registration
2. Select "Seeker" role
3. Verify seeker-specific UI elements
4. Navigate to settings
5. Switch to "Provider" role
6. Verify provider-specific UI elements
7. Log out and log back in

**Expected Results:**
- Role selection is available during onboarding
- UI adapts based on selected role
- Role switching works from settings
- Role selection persists between sessions

**Pass/Fail Criteria:**
- Different interfaces appear based on selected role
- Role preference is saved correctly

### TC1.5: Basic Course Search
**Related User Story:** US1.5  
**Test Objective:** Verify that users can search for courses

**Test Steps:**
1. Log in as a seeker
2. Navigate to course search
3. Enter search keyword
4. Apply basic filters
5. View search results
6. Test with empty search
7. Test with non-existent course

**Expected Results:**
- Search interface is functional
- Results display within 3 seconds
- Filtering options work correctly
- Empty state is handled gracefully
- Results show relevant course information

**Pass/Fail Criteria:**
- Search returns relevant results
- Results load within acceptable time
- Empty and error states display correctly

### TC1.6: Basic Job Search
**Related User Story:** US1.6  
**Test Objective:** Verify that users can search for jobs

**Test Steps:**
1. Log in as a seeker
2. Navigate to job search
3. Enter search keyword
4. Apply basic filters
5. View search results
6. Test with empty search
7. Test with non-existent job

**Expected Results:**
- Job search interface is functional
- Results display within 3 seconds
- Filtering options work correctly
- Empty state is handled gracefully
- Results show relevant job information

**Pass/Fail Criteria:**
- Search returns relevant job results
- Results load within acceptable time
- Empty and error states display correctly

### TC1.7: View Course/Job Details
**Related User Story:** US1.7  
**Test Objective:** Verify that users can view detailed information about courses and jobs

**Test Steps:**
1. Log in as a seeker
2. Search for courses/jobs
3. Select a course/job from results
4. View detailed information
5. Navigate back to search results

**Expected Results:**
- Details view shows comprehensive information
- All content is properly formatted
- Images/icons render properly
- Back navigation works correctly

**Pass/Fail Criteria:**
- All course/job details display correctly
- Navigation between results and details works properly

### TC1.8: Basic Course Creation
**Related User Story:** US1.8  
**Test Objective:** Verify that providers can create course listings

**Test Steps:**
1. Log in as a provider
2. Navigate to course creation
3. Enter course details
4. Preview the course
5. Save the course
6. Verify course appears in dashboard

**Expected Results:**
- Form accepts all course details
- Validation works for required fields
- Preview shows accurate representation
- Confirmation appears on successful creation
- Course appears in provider dashboard

**Pass/Fail Criteria:**
- Course is created with all entered information
- Course appears in provider dashboard
- Required validations are enforced

### TC1.9: Basic Job Posting
**Related User Story:** US1.9  
**Test Objective:** Verify that employers can create job listings

**Test Steps:**
1. Log in as a provider
2. Navigate to job creation
3. Enter job details
4. Preview the job listing
5. Save the job listing
6. Verify job appears in dashboard

**Expected Results:**
- Form accepts all job details
- Validation works for required fields
- Preview shows accurate representation
- Confirmation appears on successful creation
- Job appears in provider dashboard

**Pass/Fail Criteria:**
- Job is created with all entered information
- Job appears in provider dashboard
- Required validations are enforced

### TC1.10: View Provider Dashboard
**Related User Story:** US1.10  
**Test Objective:** Verify that providers can view and manage their listings

**Test Steps:**
1. Log in as a provider
2. Navigate to provider dashboard
3. View listed courses/jobs
4. Edit an existing listing
5. Remove a listing
6. Create a new listing from dashboard

**Expected Results:**
- Dashboard shows all provider listings
- Edit functionality works correctly
- Remove functionality works correctly
- Navigation to create new listings works
- Empty state is handled when no listings exist

**Pass/Fail Criteria:**
- All provider listings are visible
- Edit and remove functions work correctly
- Navigation to create new listings is clear
