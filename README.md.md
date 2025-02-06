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

## Contributing

1. Development Process
   - Fork the repository
   - Create feature branch


2. Documentation
   - Update README


## Getting Help

- Official Documentation: [Strapi Docs](https://docs.strapi.io)
- Community Support: [Strapi Discord](https://discord.strapi.io)

## License

This project is licensed under the MIT License. You can:
- Use it commercially
- Modify the code
- Distribute modifications
- Use it privately

---

