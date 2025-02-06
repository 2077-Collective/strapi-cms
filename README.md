# 2077 Content Management System

A powerful and user-friendly content management system built with Strapi, designed to help you manage your digital content efficiently.

## What is This Application?

This is a content management system (CMS) that allows you to:
- Create and manage blog articles
- Organize content with categories
- Manage authors and their profiles
- Handle media files (images, videos, documents)
- Control who can access what (user permissions)
- Support multiple languages

## Project Architecture

The application uses a modular configuration structure:
```
config/
├── admin.js      # Admin panel configuration
├── api.js        # API configuration
├── database.js   # Database connection settings
├── middlewares.js# Middleware configurations
└── server.js     # Server settings
```

## Prerequisites

Before you start, you'll need these programs installed on your computer:
- Git (for version control) - [Download Git](https://git-scm.com/downloads)
- Node.js (to run the application) - [Download Node.js](https://nodejs.org/)
- A text editor (to edit files) - We recommend [Visual Studio Code](https://code.visualstudio.com/)
- Database system (SQLite, PostgreSQL)

## Setting Up Your Environment

1. First Steps
   ```bash
   # Get the code from GitHub
   git clone <your-repository-url>
   cd your-project-name
   
   # Install all necessary programs
   npm install

   #Default Database SQLite on dev to mirror postgres 
   npm install better-sqlite3
   ```

2. Environment Variables Setup
   Create a file named `.env` in your main folder with these settings:

   ```env
   # Server Configuration
   HOST=0.0.0.0
   PORT=1337
   APP_KEYS=kqD2qHn2ZoYU8bz7e+Z7uw==,rw0RO68gv3/RJefGZfMMIw==,Ao/LrBy/Yd1Pdi8n5lIQuQ==,+ZfuHU7pzhdGEzpOyQzLEQ==
   API_TOKEN_SALT=viIy/ifky8ih/hGJd4Dzlg==
   ADMIN_JWT_SECRET=XyebhwUYuoRnT7S1D2YUVw==
   TRANSFER_TOKEN_SALT=MGJrkEsdlEq3mFFszaSuaA==

   # Database Configuration
   # (using SQLite)
   DATABASE_CLIENT=sqlite
   DATABASE_FILENAME=.tmp/data.db

   #  (PostgreSQL/MySQL)
   DATABASE_CLIENT=postgres
   DATABASE_HOST=localhost
   DATABASE_PORT=5439
   DATABASE_NAME=2077_research
   DATABASE_USERNAME=postgres
   DATABASE_PASSWORD=password
   DATABASE_SSL=false
   DATABASE_FILENAME=
   JWT_SECRET=pGCc3C3O5F19nIxzylp7dw==

   ```

3. Environment Switching Script
   Use this script to switch between development and production environments:
   ```bash
   # Make the script usable
   chmod +x switch-env.sh
   
   # Switch to development
   ./switch-env.sh local
   
   # Switch to production
   ./switch-env.sh production
   ```

## Database Options

1. SQLite (Perfect for Beginners)
   - Lightweight, file-based database
   - No additional setup required
   - Great for development and small applications

2. PostgreSQL (Recommended for Production)
   - Robust and scalable
   - Supports SSL connections
   - Advanced features for large applications

3. MySQL
   - Popular alternative to PostgreSQL
   - Similar features to PostgreSQL
   - Wide community support

## Starting the Application

1. For Development:
   ```bash
   npm run develop
   ```

2. For Production:
   ```bash
   npm run build
   npm run start
   ```

## Content Types Available

1. Articles
   - Title and content
   - Author information
   - Categories
   - Media attachments
   - SEO settings
   - View tracking
   - Reading time calculation

2. Authors
   - Full name and username
   - Biography
   - Social media links
   - Article associations

3. Categories
   - Hierarchical structure
   - Article associations
   - SEO optimization

4. Global Settings
   - Site configuration
   - SEO defaults
   - Media settings

## File Upload Specifications

The system supports large file uploads with these limits:
- Form payload: 50MB
- JSON payload: 50MB
- Text payload: 50MB
- Maximum file size: 200MB

## API Configuration

Default API settings:
- 25 items per page (default)
- 100 items maximum per page
- Automatic count enabled
- RESTful endpoints
- Authentication support

## Features for Different Users

1. Content Creators
   - Rich text editor
   - Media library
   - Draft & publish workflow
   - Content scheduling
   - SEO tools

2. Administrators
   - User management
   - Permission settings
   - Content type builder
   - Media library management
   - System monitoring

3. Developers
   - API access
   - Custom code integration
   - Database configuration
   - Plugin system
   - Webhook support


## Common Troubleshooting

1. Database Connection Issues
   - Verify credentials in .env file
   - Check database server status
   - Confirm port availability
   - Test network connectivity

2. File Upload Problems
   - Check file size limits
   - Verify storage permissions
   - Confirm available disk space
   - Check media configuration

3. Performance Issues
   - Monitor database connections
   - Check server resources
   - Optimize queries
   - Review caching settings

4. SSL Certificate Problems
   - Verify certificate paths
   - Check SSL configuration
   - Confirm key permissions
   - Validate certificate dates

## Maintenance 

1. Regular Updates
   ```bash
   # Update dependencies
   npm update

   # Check for security updates
   npm audit

   # Update Strapi core
   npm upgrade @strapi/strapi
   ```


# Migrating to Strapi Cloud: A Comprehensive Guide

This guide will walk you through the process of migrating your local Strapi application to Strapi Cloud.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Preparing Your Local Project](#preparing-your-local-project)
- [Database Migration](#database-migration)
- [Media Files Migration](#media-files-migration)
- [Configuration Steps](#configuration-steps)
- [Deployment Process](#deployment-process)
- [Post-Migration Tasks](#post-migration-tasks)
- [Troubleshooting](#troubleshooting)

## Prerequisites

1. Strapi Cloud Account
   - Create an account at [Strapi Cloud](https://cloud.strapi.io)
   - Set up a new project in Strapi Cloud dashboard
   - Note down your project ID and API key

2. Required Tools
   ```bash
   # Install Strapi CLI globally
   npm install -g @strapi/cli

   # Install database migration tools
   npm install -g postgres-migrations
   ```

3. Environment Check
   ```bash
   # Verify Strapi version
   strapi version

   # Check Node.js version
   node --version  # Should be >=18.0.0 <=22.x.x
   ```

## Preparing Your Local Project

1. Update Your Dependencies
   ```bash
   # Update Strapi and dependencies
   npm upgrade @strapi/strapi@latest
   npm install @strapi/plugin-cloud
   ```

2. Version Control
   ```bash
   # Ensure your project is using Git
   git init
   git add .
   git commit -m "Prepare for Strapi Cloud migration"
   ```

3. Configure Project Settings
   ```javascript
   // config/server.js
   module.exports = ({ env }) => ({
     host: env('HOST', '0.0.0.0'),
     port: env.int('PORT', 1337),
     url: env('PUBLIC_URL', 'https://your-app.strapi.cloud'),
     app: {
       keys: env.array('APP_KEYS'),
     },
     webhooks: {
       populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
     },
   });
   ```

## Database Migration

1. Export Local Database
   ```bash
   #  PostgreSQL
   pg_dump -U your_username -d your_database > backup.sql


2. Import to Cloud Database
   ```bash
   # Get connection details from Strapi Cloud dashboard
   psql -h your_cloud_host -U your_cloud_user -d your_cloud_db < backup.sql
   ```

3. Verify Data
   ```bash
   # Connect to cloud database
   psql -h your_cloud_host -U your_cloud_user -d your_cloud_db

   # Check tables
   \dt
   ```

## Media Files Migration

1. Prepare Media Files
   ```bash
   # Create a backup of your uploads
   zip -r uploads_backup.zip ./public/uploads
   ```

2. Configure Cloud Storage
   ```javascript
   // config/plugins.js
   module.exports = ({ env }) => ({
     upload: {
       config: {
         provider: '@strapi/provider-upload-aws-s3',
         providerOptions: {
           accessKeyId: env('AWS_ACCESS_KEY_ID'),
           secretAccessKey: env('AWS_ACCESS_SECRET'),
           region: env('AWS_REGION'),
           params: {
             Bucket: env('AWS_BUCKET'),
           },
         },
       },
     },
   });
   ```

3. Upload Media Files
   ```bash
   # Using Strapi CLI
   strapi transfer --to cloud
   ```

## Configuration Steps

1. Environment Variables
   ```env
   # Production Environment Variables
   HOST=0.0.0.0
   PORT=1337
   PUBLIC_URL=https://your-app.strapi.cloud
   
   # Database
   DATABASE_CLIENT=postgres
   DATABASE_HOST=your-cloud-host
   DATABASE_PORT=5432
   DATABASE_NAME=your-db-name
   DATABASE_USERNAME=your-username
   DATABASE_PASSWORD=your-password
   DATABASE_SSL=true
   
   # Admin
   ADMIN_JWT_SECRET=your-jwt-secret
   API_TOKEN_SALT=your-token-salt
   APP_KEYS=your-app-keys
   
   # Media Storage
   AWS_ACCESS_KEY_ID=your-access-key
   AWS_ACCESS_SECRET=your-secret-key
   AWS_REGION=your-region
   AWS_BUCKET=your-bucket
   ```

2. Security Settings
   ```javascript
   // config/middleware.js
   module.exports = [
     'strapi::errors',
     {
       name: 'strapi::security',
       config: {
         contentSecurityPolicy: {
           useDefaults: true,
           directives: {
             'connect-src': ["'self'", 'https:'],
             'img-src': ["'self'", 'data:', 'blob:', 'https:'],
             'media-src': ["'self'", 'data:', 'blob:', 'https:'],
             upgradeInsecureRequests: null,
           },
         },
       },
     },
     // ... other middleware
   ];
   ```

## Deployment Process

1. Connect to Strapi Cloud
   ```bash
   # Login to Strapi Cloud
   strapi login

   # Link your project
   strapi link
   ```

2. Deploy Your Application
   ```bash
   # Build your application
   npm run build

   # Deploy to Strapi Cloud
   strapi deploy
   ```

3. Monitor Deployment
   ```bash
   # Check deployment status
   strapi deployment:info

   # View logs
   strapi logs
   ```

## Post-Migration Tasks

1. Verify Functionality
   - Check admin panel access
   - Verify API endpoints
   - Test media uploads
   - Check user authentication
   - Test custom plugins

2. Update DNS Settings
   ```bash
   # Example DNS records
   CNAME your-domain.com your-app.strapi.cloud
   ```

3. Set Up Monitoring
   ```javascript
   // config/middlewares.js
   module.exports = [
     'strapi::logger',
     // ... other middleware
   ];
   ```

## Troubleshooting

1. Database Connection Issues
   ```bash
   # Check connection
   psql -h your-cloud-host -U your-cloud-user -d your-cloud-db
   
   # Common fixes:
   # - Check IP whitelist
   # - Verify SSL settings
   # - Check credentials
   ```

2. Media Upload Problems
   ```bash
   # Verify S3 permissions
   aws s3 ls s3://your-bucket
   
   # Check bucket policy
   aws s3api get-bucket-policy --bucket your-bucket
   ```

3. Deployment Failures
   ```bash
   # Check build logs
   npm run build -- --debug
   
   # Verify dependencies
   npm audit
   
   # Clear cache
   npm cache clean --force
   ```

## Important Notes

1. Backup Strategy
   - Keep regular database backups
   - Back up media files
   - Document configuration changes
   - Store secrets securely

2. Performance Optimization
   ```javascript
   // config/server.js
   module.exports = ({ env }) => ({
     // ... other config
     middlewares: {
       timeout: env.int('REQUEST_TIMEOUT', 100000),
       load: {
         before: ['responseTime', 'logger'],
         after: ['parser', 'router'],
       },
     },
   });
   ```



Need help? Contact Strapi Cloud support or check the [official documentation](https://docs.strapi.io/cloud/).