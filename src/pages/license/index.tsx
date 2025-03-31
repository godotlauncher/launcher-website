import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { ReactNode } from "react";

import styles from "./styles.module.css";

export default function License(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="License - Godot Launcher"
      description="Godot Launcher is free and open source software released under the permissive MIT license.">
      <div className="container padding-top--lg padding-bottom--lg">
        <main>
          <h1>License</h1>

          <h2>Godot Launcher</h2>
          <p>
            <strong>Godot Launcher</strong> is <strong>free and open source software</strong> developed by{" "}
            Mario Debono and distributed under the permissive{" "}
            <Link to="https://github.com/godotlauncher/launcher/blob/main/build/license_en.txt">MIT license</Link>. You are
            free to use, modify, and distribute it — including in commercial projects — as long as the terms of the license
            are respected.
          </p>
          <h2>License Text</h2>
          <p>A plain text version of the license can be found in the Godot Launcher's GitHub repository:{" "}
            <Link to="https://github.com/godotlauncher/launcher/blob/main/LICENSE.txt">LICENSE.txt</Link>
          </p>
          <p>A list of repository contributors can also be seen{" "}
            <Link to="https://github.com/godotlauncher/launcher/graphs/contributors">here (Contributors)</Link>
          </p>

          <pre className={styles.licensePre}>

            {`MIT License

Copyright (c) 2024-present Mario Debono

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
          </pre>

          <p>
            You can read the full license text for Godot Launcher here:<br />
            <Link to="https://github.com/godotlauncher/launcher/blob/main/build/license_en.txt">
              EULA - View on GitHub
            </Link>
          </p>

          <h2>Not Affiliated with Godot Engine</h2>
          <p>
            While <strong>Godot Launcher</strong> is designed to help you manage and launch{" "}
            <strong>Godot Engine</strong> projects, it is <strong>not affiliated</strong> with the official Godot Engine
            project, its developers, or the Godot Foundation.
          </p>
          <p>
            If you are looking for the license terms of the Godot Engine itself, please visit their official license page:
            <br />
            <Link to="https://godotengine.org/license/">https://godotengine.org/license/</Link>
          </p>

          <h2>Third-party Software</h2>
          <p>
            Godot Launcher may include or depend on third-party open source libraries and tools. Each of these components is
            covered by its own license. You can find copyrights info in the repository:{" "}
            <Link to="https://github.com/godotlauncher/launcher/blob/main/COPYRIGHT.txt">COPYRIGHT.txt</Link>

          </p>

          <h2>Disclaimer</h2>
          <p>
            The above explanation of the Godot Launcher license terms and their implications does not constitute legal
            advice. It reflects the author's understanding of the MIT license and any third-party components included in the
            project. In case of doubt or for specific legal interpretation, please consult your lawyer.
          </p>
        </main>
      </div>
    </Layout>
  );
}
