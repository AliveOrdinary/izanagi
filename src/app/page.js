import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import styles from "./page.module.css";

// Read content from CMS JSON file
function getHomepageContent() {
  const contentPath = path.join(process.cwd(), "content", "homepage.json");
  const fileContents = fs.readFileSync(contentPath, "utf8");
  return JSON.parse(fileContents);
}

export default function Home() {
  const content = getHomepageContent();
  const { events, cinemas } = content;

  return (
    <main className={styles.splitScreen}>
      {/* Events Panel - Left */}
      <Link href="/events" className={`${styles.panel} ${styles.eventsPanel}`}>
        <div
          className={styles.panelBackground}
          style={{ backgroundImage: `url(${events.backgroundImage})` }}
        />
        <div className={styles.panelOverlay} />
        <div className={styles.panelContent}>
          <Image
            src={events.logo}
            alt={events.logoAlt}
            width={180}
            height={200}
            className={styles.panelLogo}
            priority
          />
          <span className={styles.exploreBtn}>{events.buttonText}</span>
        </div>
      </Link>

      {/* Divider */}
      <div className={styles.divider} />

      {/* Cinemas Panel - Right */}
      <Link href="/cinemas" className={`${styles.panel} ${styles.cinemasPanel}`}>
        <div
          className={styles.panelBackground}
          style={{ backgroundImage: `url(${cinemas.backgroundImage})` }}
        />
        <div className={styles.panelOverlay} />
        <div className={styles.panelContent}>
          <Image
            src={cinemas.logo}
            alt={cinemas.logoAlt}
            width={180}
            height={200}
            className={styles.panelLogo}
            priority
          />
          <span className={styles.exploreBtn}>{cinemas.buttonText}</span>
        </div>
      </Link>
    </main>
  );
}
