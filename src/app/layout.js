import "./globals.css";

export const metadata = {
  title: "Izanagi | Events & Cinemas",
  description: "Izanagi - Premium events and cinema experiences in Ontario, Canada. Experience live concerts, movie premieres, and exclusive screenings.",
  keywords: ["Izanagi", "Events", "Cinemas", "Ontario", "Movies", "Concerts", "Entertainment"],
  openGraph: {
    title: "Izanagi | Events & Cinemas",
    description: "Premium events and cinema experiences in Ontario, Canada.",
    url: "https://izanagi.ca",
    siteName: "Izanagi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Izanagi | Events & Cinemas",
    description: "Premium events and cinema experiences in Ontario, Canada.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        {/* Netlify Identity widget for authentication flows */}
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </head>
      <body>
        {children}
        {/* Handle Netlify Identity redirects (password reset, email confirmation, etc.) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
