# Holookor Authentication Flow Documentation

## Overview

Complete sign-up and sign-in flows for both Students and Parents with an educational background pattern throughout.

## Features Implemented

### Background Pattern

- ✅ Educational/scientific pattern (math formulas, atoms, books, flasks, stars, etc.)
- ✅ Subtle opacity (8%) on all auth pages
- ✅ Responsive SVG pattern that scales

### Authentication Pages

1. **Sign In Page** (`/auth/signin`)

   - Email/password form
   - Show/hide password toggle
   - Forgot password link
   - Sign up link
   - Background pattern

2. **Sign Up Page** (`/auth/signup`)
   - Role selection (Student/Parent)
   - Dynamic flow based on role
   - Progress indicators
   - Background pattern

---

## Student Sign-Up Flow

```
Role Selection → Account Creation → Email Verification → Success → Dashboard
```

### Steps:

1. **Role Selection**

   - Choose between Student or Parent
   - Tutor sign-up link
   - Next button

2. **Account Form**

   - Full Name
   - Email
   - Phone Number
   - Password (with strength indicator)
   - Form validation

3. **Email Verification**

   - 6-digit OTP input with individual boxes
   - Resend functionality
   - Error handling

4. **Success Confirmation**
   - Email verified badge
   - Display email
   - Dashboard link

---

## Parent Sign-Up Flow (Enhanced)

```
Role Selection → Account Creation → Email Verification → Link Child →
Child Account → Study Preferences → Notification Settings → Welcome → Dashboard
```

### Steps:

1. **Role Selection** (Same as student)

2. **Account Form** (Same as student)

3. **Email Verification** (Same as student)

4. **Link Your Child**

   - Child's Full Name
   - Child's Date of Birth
   - Form validation

5. **Create Child's Account**

   - Child's Full Name
   - Date of Birth
   - Gender (Male/Female)
   - Validation

6. **Study Preferences**

   - School Level (High School, Primary, etc.)
   - Subjects of Interest (Mathematics, English, Science, etc.)
   - Preferred Study Time (Morning, Afternoon, Evening, Night)
   - Weekly Availability (1-2x, 3-4x, Daily)
   - Complete Child Profile button

7. **Notification Settings**

   - Lesson Reminders (toggle)
   - Progress Updates (toggle)
   - Payment Receipts (toggle)
   - Complete Setup button

8. **Welcome Child**
   - Welcome message with child's name
   - Profile completion indicator (100%)
   - Dashboard link
   - Success confirmation

---

## Components & SRP

### Single Responsibility Components:

| Component                  | Responsibility                             |
| -------------------------- | ------------------------------------------ |
| `RoleSelection.jsx`        | Handle role choice (Student/Parent)        |
| `AccountForm.jsx`          | Collect parent/student account data        |
| `EmailVerification.jsx`    | Handle OTP verification                    |
| `SuccessConfirmation.jsx`  | Display student signup success             |
| `ParentProfile.jsx`        | Alternative parent setup (legacy)          |
| `LinkChildScreen.jsx`      | Collect child linking info                 |
| `ChildAccountForm.jsx`     | Collect child account details              |
| `StudyPreferences.jsx`     | Set child study time & subjects            |
| `NotificationSettings.jsx` | Manage notification toggles                |
| `WelcomeChild.jsx`         | Welcome screen for parent setup completion |
| `AuthBackground.jsx`       | Shared background pattern                  |

---

## Responsiveness

All components are fully responsive:

- **Mobile (320px - 639px)**: Single column, optimized spacing
- **Tablet (640px - 1023px)**: Medium spacing, readable fonts
- **Desktop (1024px+)**: Full-width forms centered in viewport

Key responsive features:

- Logo scales: `w-20 h-8` (mobile) → `w-28 h-10` (sm) → `w-48 h-12` (lg)
- Button sizes adapt with `py-2 sm:py-3` → `sm:py-4`
- Font sizes: `text-sm sm:text-base` → `sm:text-lg`
- Inputs: Touch-friendly minimum 44px height on mobile

---

## API Integration Points

All components have TODO comments for API integration:

```javascript
// Account Creation
POST / api / auth / signup;
Body: {
  fullName, email, phone, password, role;
}

// Email Verification
POST / api / auth / verify - otp;
Body: {
  email, otp;
}

// Resend OTP
POST / api / auth / resend - otp;
Body: {
  email;
}

// Parent Profile (if using legacy flow)
POST / api / auth / parent - profile;
Body: {
  profileData;
}

// Sign In
POST / api / auth / signin;
Body: {
  email, password;
}
```

---

## Color Scheme

- Primary Green: `#0c5b29` / `#3da755` / `#3cb027`
- Gray (muted): `#6d717f`
- Border: `#e5e7ea`
- Background: `#f9fafb`
- Success: `#e9fbe6`

---

## Step Indicators

Dynamic progress bars showing completion:

- **Student**: 2 steps (Account → Verify)
- **Parent**: 6 steps (Account → Verify → Link Child → Child Account → Study Prefs → Notifications)

Indicators:

- Completed: `bg-green-600`
- Current: `bg-green-600`
- Pending: `bg-gray-200`

---

## Testing the Flow

### Quick Start Commands:

```bash
# Start dev server
npm run dev

# Navigate to:
# Sign Up: http://localhost:3000/auth/signup
# Sign In: http://localhost:3000/auth/signin
# Landing: http://localhost:3000
```

### Test Paths:

1. **Student Flow**: Select Student → Fill form → Enter any 6 digits → See success
2. **Parent Flow**: Select Parent → Fill form → Enter any 6 digits → Follow child setup steps → Welcome screen
3. **Landing Page**: Click Sign In or Sign Up buttons in top nav

---

## Notes for Production

1. Replace simulated API calls with real endpoints
2. Implement actual JWT token storage
3. Add email verification service (SendGrid, Mailgun, etc.)
4. Implement password reset flow
5. Add Google/social authentication (optional)
6. Set up error boundaries and logging
7. Add analytics tracking for signup funnel
8. Implement CSRF protection
9. Add rate limiting on auth endpoints
10. Store tokens securely (httpOnly cookies recommended)

---

## File Structure

```
src/
├── app/
│   ├── auth/
│   │   ├── signin/
│   │   │   └── page.jsx
│   │   └── signup/
│   │       └── page.jsx
│   └── page.js (updated with nav)
└── components/
    └── auth/
        ├── AccountForm.jsx
        ├── AuthBackground.jsx
        ├── ChildAccountForm.jsx
        ├── EmailVerification.jsx
        ├── LinkChildScreen.jsx
        ├── NotificationSettings.jsx
        ├── ParentProfile.jsx
        ├── RoleSelection.jsx
        ├── StudyPreferences.jsx
        ├── SuccessConfirmation.jsx
        └── WelcomeChild.jsx
```

---

## Future Enhancements

- [ ] Multi-child support for parents
- [ ] Tutor signup flow
- [ ] Social authentication
- [ ] Two-factor authentication (2FA)
- [ ] Email verification with real OTP
- [ ] Password reset with token
- [ ] Account recovery options
- [ ] Terms of Service acceptance tracking
- [ ] GDPR compliance
- [ ] Internationalization (i18n)
