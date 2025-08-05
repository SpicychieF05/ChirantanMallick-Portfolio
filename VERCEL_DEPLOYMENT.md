# 🚀 Vercel Deployment Guide

This guide explains how to deploy the Chirantan Mallick Portfolio to Vercel.

## 🎯 Deployment Type: Frontend-Only

The current setup deploys only the React frontend to Vercel. The backend Express.js server needs to be deployed separately.

## 📋 Prerequisites

1. **GitHub Repository**: Push your code to GitHub
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Environment Variables**: Prepare your environment variables

## 🔧 Deployment Steps

### 1. Prepare Your Repository

```bash
# Ensure all changes are committed
git add .
git commit -m "Add Vercel deployment configuration"
git push origin main
```

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect the configuration from `vercel.json`

### 3. Configure Build Settings

Vercel should automatically use these settings from `vercel.json`:

- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Install Command**: `npm install`

### 4. Set Environment Variables

In your Vercel dashboard, go to Settings → Environment Variables and add:

```
NODE_ENV=production
VITE_API_URL=https://your-backend-url.com (if using external backend)
```

### 5. Deploy

Click "Deploy" and Vercel will build and deploy your site.

## 🔗 Backend Options

Since this is frontend-only deployment, you have these options for the backend:

### Option 1: External Backend Service (Recommended)

- Deploy Express.js server to **Railway**, **Heroku**, or **Render**
- Update `VITE_API_URL` environment variable in Vercel
- Modify frontend API calls to use external URL

### Option 2: Convert to Vercel API Routes

- Move backend logic to `/api` folder as serverless functions
- Refactor Express.js routes to Vercel API route format
- Update database connections for serverless environment

### Option 3: Static Site Only

- Remove backend dependencies
- Use static data or external services (EmailJS for contact form)
- Simplify to pure frontend portfolio

## 📁 File Structure for Vercel

```
├── api/                    # Serverless functions (optional)
│   └── placeholder.js      # Example API endpoint
├── client/                 # React frontend
├── vercel.json            # Vercel configuration
├── .env.example           # Environment variables template
└── VERCEL_DEPLOYMENT.md   # This guide
```

## ⚡ Performance Optimizations

The deployment includes:

- ✅ Static asset optimization
- ✅ Automatic CDN distribution
- ✅ Gzip compression
- ✅ Security headers
- ✅ Fast global edge network

## 🐛 Troubleshooting

### Build Issues

```bash
# Test build locally
npm run build

# Check for TypeScript errors
npm run check
```

### API Issues

- Verify `VITE_API_URL` is correctly set
- Check CORS configuration on backend
- Ensure API endpoints return proper responses

### Environment Variables

- Use `VITE_` prefix for client-side variables
- Server-side variables don't need prefix
- Restart deployment after adding new variables

## 🔄 Continuous Deployment

After initial setup, Vercel automatically:

- Rebuilds on every push to main branch
- Provides preview deployments for pull requests
- Shows build logs and performance metrics

## 📊 Monitoring

Access your deployment dashboard to monitor:

- Build status and logs
- Performance analytics
- Error tracking
- Traffic insights

## 🎉 Success!

Your portfolio should now be live at:
`https://your-project-name.vercel.app`

For custom domains, go to Vercel dashboard → Settings → Domains.
