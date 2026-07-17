# Giredi Opportunity

# Database Schema Specification

## Module: User & Authentication

Version: 1.0

Status: Draft

---

# Overview

This module manages user registration, authentication, authorization, profiles, sessions, roles, permissions, and account security.

---

# Table: users

Purpose:

Stores the primary account information for every registered user.

| Column | Type | Nullable | Default | Description |
|----------|-----------|----------|----------|-------------|
| id | UUID | No | UUID | Primary Key |
| first_name | VARCHAR(100) | No | | User first name |
| last_name | VARCHAR(100) | No | | User last name |
| username | VARCHAR(50) | No | | Unique username |
| email | VARCHAR(255) | No | | Unique email |
| phone | VARCHAR(30) | Yes | | Phone number |
| password_hash | TEXT | No | | Encrypted password |
| profile_photo | TEXT | Yes | | Avatar URL |
| country | VARCHAR(100) | Yes | | Country |
| state | VARCHAR(100) | Yes | | State/Province |
| city | VARCHAR(100) | Yes | | City |
| timezone | VARCHAR(50) | Yes | UTC | User timezone |
| language | VARCHAR(20) | Yes | en | Preferred language |
| account_status | ENUM | No | active | active, suspended, pending, deleted |
| email_verified | BOOLEAN | No | false | Email verification status |
| phone_verified | BOOLEAN | No | false | Phone verification status |
| two_factor_enabled | BOOLEAN | No | false | 2FA status |
| premium_status | BOOLEAN | No | false | Premium membership |
| premium_expiry | TIMESTAMP | Yes | | Premium expiry date |
| last_login | TIMESTAMP | Yes | | Last login |
| created_at | TIMESTAMP | No | NOW() | Creation time |
| updated_at | TIMESTAMP | No | NOW() | Last update |

Indexes:

- email
- username
- country
- account_status

---

# Table: user_profiles

Stores extended profile information.

Fields:

- user_id
- headline
- biography
- date_of_birth
- gender
- nationality
- linkedin_url
- github_url
- website
- portfolio
- cv_file
- experience_level
- education_level
- years_of_experience
- current_position
- preferred_job_type
- preferred_country
- expected_salary

---

# Table: roles

Purpose:

Stores system roles.

Default Roles:

- Super Admin
- Admin
- Moderator
- Editor
- Employer
- Recruiter
- Premium User
- User

Columns:

- id
- name
- description
- created_at

---

# Table: permissions

Examples:

- create_job
- edit_job
- delete_job
- publish_job
- manage_users
- manage_roles
- manage_payments
- manage_ai
- manage_ads
- manage_settings
- approve_employer
- approve_organization

---

# Table: role_permissions

Relationship table.

Columns:

- role_id
- permission_id

---

# Table: user_roles

Relationship table.

Columns:

- user_id
- role_id

---

# Table: login_history

Stores every login.

Columns:

- id
- user_id
- ip_address
- browser
- operating_system
- device
- login_time
- logout_time
- success
- location

---

# Table: user_sessions

Tracks active sessions.

Columns:

- id
- user_id
- refresh_token
- ip_address
- expires_at
- revoked

---

# Table: email_verifications

Stores email verification requests.

Columns:

- id
- user_id
- token
- expires_at
- verified_at

---

# Table: password_resets

Stores password reset tokens.

Columns:

- id
- user_id
- token
- expires_at
- used_at

---

# Table: oauth_accounts

For Google, GitHub, LinkedIn authentication.

Columns:

- id
- user_id
- provider
- provider_user_id
- access_token
- refresh_token

---

# Relationships

One User

↓

One Profile

↓

Many Sessions

↓

Many Logins

↓

Many Roles

↓

Many Applications

↓

Many Notifications

---

# Security Requirements

Passwords must never be stored in plain text.

Use Argon2id hashing.

JWT authentication.

Refresh tokens.

2FA support.

Device recognition.

Audit logging.

Rate limiting.
