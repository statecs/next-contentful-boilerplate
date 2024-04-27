const config = {
    seo: {
        title: {
            default: 'AccessiBuddy',
            template: '%s | AccessiBuddy'
        },
        description:
            'Empowering your digital accessibility journey with the latest trends, tips, and insights from a dynamic UX designer and front-end developer duo.',
        canonical: 'https://www.cstate.se',
        openGraph: {
            images: [
                {
                    alt: 'AccessiBuddy',
                    height: 630,
                    url: 'https://cstate.se/images/a11y-placeholder.jpg',
                    width: 1200
                }
            ],
            locale: 'en_GB',
            siteName: 'AccessiBuddy',
            type: 'website',
            url: 'https://www.cstate.se'
        },
        twitter: {
            card: 'summary_large_image',
            creator: '@statecs',
            image: 'https://cstate.se/images/a11y-placeholder.jpg',
            site: '@statecs',
            title: 'AccessiBuddy'
        },
        icons: {
            shortcut: '/images/favicon-32x32.png'
        }
    }
};

export default config;
