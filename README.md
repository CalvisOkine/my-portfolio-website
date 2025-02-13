**Hello there!**

If you're reading this, chances are you've stumbled upon my portfolio code on GitHub. I'm glad that you find my work useful, and I'm happy to share it with you and the wider community.

However, I kindly request that if you use any part of my code or take inspiration from it for your own project, please mention the original source (https://github.com/once-ui-system/magic-portfolio) in your project and give credit where credit is due.

As a developer, I understand how important it is to respect other people's intellectual property and give proper attribution for their work. By mentioning the original project, you not only show appreciation for my efforts, but you also help others discover my work and potentially benefit from it as well.

So please, when you use my portfolio code, include a reference to the original project and let others know where you found it. I would greatly appreciate it.

Thank you for your understanding and happy coding!

---

This is a [Next.js](https://nextjs.org/) project built with [Once UI](https://once-ui.com).

# Deploy the portfolio

## With Docker

```shell
docker run -d --name portfolio -p 3000:3000 once-ui/magic-portfolio:latest
```

## Without Docker

1. Clone the repository:
    ```bash
    git clone https://github.com/once-ui-system/magic-portfolio.git
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Features

## **Once UI**
- All tokens, components & features of [Once UI](https://once-ui.com)

## **SEO**
- Automatic open-graph and X image generation with next/og
- Automatic schema and metadata generation based on the content file

## **Design**
- Responsive layout optimized for all screen sizes
- Timeless design without heavy animations and motion
- Endless customization options through [data attributes](https://once-ui.com/docs/theming)

## **Content**
- Render sections conditionally based on the content file
- Enable or disable pages for blog, work, gallery, and about/CV
- Generate and display social links automatically
- Set up password protection for URLs

## **Localization**
- A localized version of Magic Portfolio is available with the next-intl library
- To use localization, switch to the 'i18n' branch

# Development

1. Install the dependencies:
    ```bash
    npm install
    ```

2. Run the development server:
    ```bash
    npm run dev
    ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. You can start editing the page by modifying `src/app/resources/config` and `src/app/resources/content`. The page auto-updates as you edit the files.

# Authors

Connect with us on Threads or LinkedIn.

Lorant Toth: [Threads](https://www.threads.net/@lorant.one), [LinkedIn](https://www.linkedin.com/in/tothlorant/)  
Zsofia Komaromi: [Threads](https://www.threads.net/@zsofia_kom), [LinkedIn](https://www.linkedin.com/in/zsofiakomaromi/)

Localization added by [François Hernandez](https://github.com/francoishernandez)

---

*Inspired by [Once UI's Magic Portfolio](https://github.com/once-ui-system/magic-portfolio)*

