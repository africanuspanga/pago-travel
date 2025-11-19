# ZANZIONE TOURS & TRAVELS - cPanel Deployment Guide

This guide will help you deploy the ZANZIONE TOURS & TRAVELS website as static HTML files to your cPanel hosting.

## Prerequisites

- Node.js 18+ installed on your local machine or server
- Git installed
- Access to your cPanel hosting account
- SSH access (optional, but recommended)

## Step 1: Clone the Repository

\`\`\`bash
git clone https://github.com/YOUR-USERNAME/zanzione-tours.git
cd zanzione-tours
\`\`\`

Replace `YOUR-USERNAME/zanzione-tours` with your actual GitHub repository URL.

## Step 2: Install Dependencies

\`\`\`bash
npm install
\`\`\`

This will install all required packages including Next.js, React, and other dependencies.

## Step 3: Build the Static Site

\`\`\`bash
npm run build
\`\`\`

This command will:
- Compile your Next.js application
- Generate static HTML, CSS, and JavaScript files
- Create an `out` directory with all the production files

The build process may take 2-5 minutes depending on your machine.

## Step 4: Locate the Output Files

After the build completes, you'll find all the static files in the `out` directory at the root of your project.

\`\`\`
out/
├── index.html
├── about.html
├── contact.html
├── _next/
│   ├── static/
│   └── ...
├── images/
└── ...
\`\`\`

## Step 5: Upload to cPanel

### Option A: Using cPanel File Manager (Recommended for beginners)

1. Log in to your cPanel account
2. Navigate to **File Manager**
3. Go to the `public_html` directory (or your domain's root directory)
4. Delete any existing files (if starting fresh)
5. Click **Upload** and select all files from the `out` directory
6. Upload all files and folders, maintaining the directory structure

### Option B: Using FTP Client (FileZilla, Cyberduck, etc.)

1. Connect to your hosting via FTP using your cPanel credentials
2. Navigate to the `public_html` directory
3. Upload all contents from the `out` folder to `public_html`
4. Ensure the directory structure is preserved

### Option C: Using SSH (Fastest method)

\`\`\`bash
# Connect to your server
ssh username@your-server.com

# Navigate to public_html
cd public_html

# Remove old files (if needed)
rm -rf *

# Upload using rsync or scp from your local machine
rsync -avz out/ username@your-server.com:~/public_html/
\`\`\`

## Step 6: Configure .htaccess (Important!)

Create a `.htaccess` file in your `public_html` directory with the following content:

\`\`\`apache
# Enable directory browsing
Options +FollowSymLinks

# Set default index files
DirectoryIndex index.html

# Handle clean URLs
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Remove trailing slashes
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_URI} (.+)/$
  RewriteRule ^ %1 [R=301,L]

  # Handle .html extensions
  RewriteCond %{REQUEST_FILENAME}.html -f
  RewriteRule ^(.*)$ $1.html [L]

  # Redirect 404 errors to custom 404 page
  ErrorDocument 404 /404.html
</IfModule>

# Security headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/json "access plus 1 week"
  ExpiresByType text/html "access plus 1 day"
</IfModule>
