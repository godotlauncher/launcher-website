import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { ReactNode } from "react";

export default function Community(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Community - Godot Launcher" description="Discover and connect with the Godot Launcher community. Join discussions, share ideas, and collaborate with fellow users and developers.">
      <div className="container">
        <main className="padding-vert--lg">
          <section className="padding-vert--lg">
            <h2>Official Community</h2>
            <div className="card_discord col col--4 ">
              <div className="card">
                <div className="card__header">
                  <h3>Discord</h3>
                </div>
                <div className="card__image">
                  <img
                    src="/img/discord-screenshot.webp"
                    alt="Image alt text"
                    title="Logo Title Text 1"
                  />
                </div>
                <div className="card__body">
                  <p>
                    Join the official Discord server to chat with other users
                    and the developers. Discuss issues and ideas.
                  </p>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--secondary button--block"
                    href="https://discord.gg/Ju9jkFJGvz"
                  >
                    Join Community Server
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/* <section>
            <h2>Social Networks</h2>
          </section> */}
        </main>
      </div>
    </Layout>
  );
}
