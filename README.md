**Hello there!**  

If you're reading this, chances are you've stumbled upon my portfolio code on GitHub. I'm glad that you find my work useful, and I'm happy to share it with you and the wider community.  

However, I kindly request that if you use any part of my code or take inspiration from it for your own project, please mention the original source (https://github.com/once-ui-system/magic-portfolio) in your project and give credit where credit is due.  

I understand how important it is to respect other people's intellectual property and give proper attribution for their work. By mentioning the original project, you not only show appreciation for my efforts, but you also help others discover my work and potentially benefit from it as well.  

So please, when you use my portfolio code, include a reference to the original project and let others know where you found it. I would greatly appreciate it.  

Thank you for your understanding and happy coding!  

---

This is a [Next.js](https://nextjs.org/) project built with [Once UI](https://once-ui.com).  

# Deploy the portfolio  

## With Vercel  

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fonce-ui-system%2Fmagic-portfolio&project-name=portfolio&repository-name=portfolio&redirect-url=https%3A%2F%2Fgithub.com%2Fonce-ui-system%2Fmagic-portfolio&demo-title=Magic%20Portfolio&demo-description=Showcase%20your%20designers%20or%20developer%20portfolio&demo-url=https%3A%2F%2Fdemo.magic-portfolio.com&demo-image=%2F%2Fraw.githubusercontent.com%2Fonce-ui-system%2Fmagic-portfolio%2Fmain%2Fpublic%2Fimages%2Fcover.png)  

## Without Docker  

1. Install the dependencies:  

    ```bash
    npm install
    ```  

2. Run the development server:  

    ```bash
    npm run dev
    ```  

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.  

4. Edit the configuration and content as needed:  

    - **Edit config:** `src/app/resources/config`  
    - **Edit content:** `src/app/resources/content`  
    - **Create blog posts/projects:** Add a new `.mdx` file to `src/app/blog/posts` or `src/app/work/projects`  

# Features  

## Once UI  
- All tokens, components & features of [Once UI](https://once-ui.com)  

## SEO  
- Automatic open-graph and X image generation with `next/og`  
- Automatic schema and metadata generation based on content files  

## Design  
- Responsive layout optimized for all screen sizes  
- Minimalist design without heavy animations  
- Customization through [data attributes](https://once-ui.com/docs/theming)  

## Content  
- Conditional rendering of sections based on content  
- Enable/disable pages for blog, work, gallery, and about/CV  
- Auto-generated social links  
- URL password protection  

## Localization  
- Multilingual support via `next-intl` (switch to `i18n` branch)  

# Learn More  

To learn more about Next.js and Once UI, check out:  

- [Next.js Documentation](https://nextjs.org/docs)  
- [Learn Next.js](https://nextjs.org/learn)  
- [Once UI Documentation](https://once-ui.com)  

---

**Authors**  

- Lorant Toth: [Threads](https://www.threads.net/@lorant.one), [LinkedIn](https://www.linkedin.com/in/tothlorant/)  
- Zsofia Komaromi: [Threads](https://www.threads.net/@zsofia_kom), [LinkedIn](https://www.linkedin.com/in/zsofiakomaromi/)  
- Localization: [François Hernandez](https://github.com/francoishernandez)  

# Get Involved  

- Join the [Design Engineers Club on Discord](https://discord.com/invite/5EyAQ4eNdS)  
- Report a [bug](https://github.com/once-ui-system/magic-portfolio/issues/new?labels=bug&template=bug_report.md)  

# License  

Distributed under the CC BY-NC 4.0 License.  
- Commercial usage is not allowed.  
- Attribution is required.  

See `LICENSE.txt` for details.  
