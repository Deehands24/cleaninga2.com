# Deployment Guide for CleaningA2.com

## 🚀 Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications and is created by the Next.js team.

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Complete site with traffic optimization"
git push origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your `cleaninga2.com` repository
5. Configure:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: `npm run build` (auto-configured)
   - Output Directory: `.next` (auto-configured)
6. Add Environment Variables (click "Environment Variables"):
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   SMTP_FROM=noreply@cleaninga2.com
   NEXT_PUBLIC_SITE_URL=https://cleaninga2.com
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
7. Click "Deploy"
8. Wait 2-3 minutes for deployment

### Step 3: Custom Domain
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add `cleaninga2.com` and `www.cleaninga2.com`
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5-60 minutes)

---

## 🔧 Alternative: Deploy to Other Platforms

### Deploy to Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Choose GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Add environment variables
7. Deploy

### Deploy to Railway
1. Go to [railway.app](https://railway.app)
2. Create new project from GitHub
3. Select repository
4. Add environment variables
5. Deploy automatically

### Deploy to AWS (Advanced)
Use AWS Amplify or EC2 with PM2 for full control.

---

## 📋 Pre-Deployment Checklist

### Required Setup
- [ ] Set up custom domain (cleaninga2.com)
- [ ] Configure DNS records
- [ ] Set up SSL certificate (automatic with Vercel/Netlify)
- [ ] Add environment variables
- [ ] Set up SMTP email service
- [ ] Create Google Analytics account
- [ ] Set up Google Search Console
- [ ] Create Google Business Profile

### Email Configuration Options

#### Option 1: Gmail (Free, Easy)
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-char-app-password
```
[Get App Password](https://myaccount.google.com/apppasswords)

#### Option 2: SendGrid (Scalable)
- Sign up at [sendgrid.com](https://sendgrid.com)
- Free tier: 100 emails/day
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

#### Option 3: AWS SES (Best for Scale)
- Most cost-effective at scale
- $0.10 per 1,000 emails
- Requires AWS account setup

### Google Analytics Setup
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create new GA4 property
3. Get Measurement ID (starts with G-)
4. Add to environment variables:
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Google Search Console Setup
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property for `cleaninga2.com`
3. Verify ownership (DNS or HTML tag)
4. Submit sitemap: `https://cleaninga2.com/sitemap.xml`
5. Monitor indexing and search performance

---

## 🎯 Post-Deployment Tasks

### Immediate (Day 1)
1. **Verify site is live** and all pages load
2. **Test quote form** submission
3. **Check email delivery** works
4. **Verify analytics** tracking (visit site, check GA)
5. **Submit sitemap** to Google Search Console
6. **Set up Google Business Profile**
7. **Create social media accounts** (Facebook, Instagram, Twitter)

### Week 1
1. **Write 5 blog posts**
2. **Create 10 location pages** for additional cities
3. **Submit to 20 directories**:
   - Yelp
   - Google Business
   - Bing Places
   - Apple Maps
   - Facebook
   - Yellow Pages
   - Local.com
   - Angie's List
   - HomeAdvisor
   - Thumbtack
4. **Set up Google Ads account** (don't run yet)
5. **Get 5 initial reviews** from friends/family/test customers

### Month 1
1. **Publish 20 blog posts** (one per weekday)
2. **Create 20 location pages**
3. **Build 10-20 backlinks**
4. **Start email newsletter** (weekly)
5. **Launch Google Ads** with $30/day budget
6. **Get 25 verified reviews**
7. **Reach 1,000 monthly visitors**

---

## 📊 Monitoring & Analytics

### Daily Checks
- Google Analytics: Traffic, bounce rate, conversions
- Google Search Console: Indexing issues, search queries
- Email: Quote form submissions
- Uptime: Site is accessible

### Weekly Reviews
- Traffic growth trends
- Top performing pages
- Conversion rate
- Ad spend vs. conversions (if running ads)
- Keyword rankings
- New backlinks

### Monthly Analysis
- ROI calculation
- Content performance
- User behavior flow
- Technical SEO audit
- Competitor analysis

---

## 🛠️ Maintenance

### Regular Updates
```bash
# Update dependencies monthly
npm update

# Rebuild and test
npm run build
npm run dev

# Push updates
git add .
git commit -m "Update dependencies"
git push origin main
```

### Backup Strategy
- **Code:** Backed up on GitHub
- **Data:** Export analytics monthly
- **Email:** Archive important leads

### Security
- Keep dependencies updated
- Monitor for security alerts
- Use environment variables for secrets
- Enable 2FA on all accounts
- Regular security audits

---

## 🚨 Troubleshooting

### Site not loading
1. Check Vercel deployment logs
2. Verify environment variables are set
3. Check domain DNS configuration
4. Review build errors

### Emails not sending
1. Verify SMTP credentials
2. Check spam folder
3. Review server logs
4. Test with different email provider

### Analytics not tracking
1. Verify GA4 Measurement ID is correct
2. Check browser console for errors
3. Disable ad blockers
4. Wait 24-48 hours for data to appear

### Poor SEO performance
1. Submit sitemap again
2. Check for indexing errors in Search Console
3. Verify metadata is unique per page
4. Ensure site is mobile-friendly
5. Improve page load speed

---

## 📞 Support Resources

- **Next.js Documentation:** [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Support:** [vercel.com/support](https://vercel.com/support)
- **Google Search Console Help:** [support.google.com/webmasters](https://support.google.com/webmasters)
- **Community:** [stackoverflow.com](https://stackoverflow.com)

---

## 🎉 Success Metrics

Track these KPIs to measure success:

### Traffic Goals
- Month 1: 1,000 visits
- Month 3: 5,000 visits
- Month 6: 15,000 visits
- Month 12: 35,000+ visits

### Conversion Goals
- Form submissions: 2-5% of traffic
- Email signups: 1-3% of traffic
- Phone clicks: 1-2% of traffic

### Business Goals
- Lead generation: 50-500 leads/month
- Revenue: $1,000-$50,000/month
- ROI: 300-500%

---

**Remember:** Building a high-traffic site takes time. Focus on quality content, consistent publishing, and user experience. Results compound over time!

Good luck with CleaningA2.com! 🚀
