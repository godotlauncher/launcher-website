import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { ReactNode } from "react";

import styles from "./styles.module.css";

export default function License(): ReactNode {
  return (
    <Layout
      title="License"
      description="Godot Launcher is free and open source software distributed under the MIT license, with third-party notices and affiliation details."
    >
      <div className="container padding-top--lg padding-bottom--lg">
        <main>
          <h1>License</h1>

          <h2>Godot Launcher</h2>
          <p>
            <strong>Godot Launcher</strong> is{" "}
            <strong>free and open source software</strong> distributed under the{" "}
            <Link to="https://github.com/godotlauncher/launcher/blob/main/LICENSE.txt">
              MIT license
            </Link>
            {". "}
            The MIT license allows use, copying, modification, distribution, and
            sublicensing as long as its terms are followed.
          </p>
          <h2>License Text</h2>
          <p>
            The repository license is available in{" "}
            <Link to="https://github.com/godotlauncher/launcher/blob/main/LICENSE.txt">
              LICENSE.txt
            </Link>
            {". "}
            Some packaged builds may also include a bundled license text file
            for installer display.
          </p>
          <p>
            Repository contributors are listed on{" "}
            <Link to="https://github.com/godotlauncher/launcher/graphs/contributors">
              GitHub contributors
            </Link>
            {"."}
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

          <h2>Not Affiliated with Godot Engine</h2>
          <p>
            While <strong>Godot Launcher</strong> is designed to help you manage
            and launch <strong>Godot Engine</strong> projects, it is{" "}
            <strong>not affiliated</strong> with, endorsed by, or sponsored by
            the Godot Engine project, its developers, or the Godot Foundation.
          </p>
          <p>
            If you are looking for the license terms of the Godot Engine itself,
            visit the Godot Engine license page:
            <br />
            <Link to="https://godotengine.org/license/">
              https://godotengine.org/license/
            </Link>
          </p>

          <h2>Third-party Software</h2>
          <p>
            Godot Launcher may include or depend on third-party open source
            libraries and tools. Each of these components is covered by its own
            license. Copyright and license notices are available in{" "}
            <Link to="https://github.com/godotlauncher/launcher/blob/main/COPYRIGHT.txt">
              COPYRIGHT.txt
            </Link>
            {"."}
          </p>

          <h2>Signed Releases</h2>
          <p>
            Windows builds are signed through SignPath. Free code signing
            provided by <Link to="https://signpath.io/">SignPath.io</Link>,
            certificate by{" "}
            <Link to="https://signpath.org/">SignPath Foundation</Link>.
            macOS builds are signed with a Developer ID Application certificate
            issued to Mario DEBONO and notarized by Apple. Signing for Linux
            .deb and .rpm packages is planned.
          </p>

          <h2>Disclaimer</h2>
          <p>
            The above explanation of the Godot Launcher license terms and their
            related project notices is informational only and does not
            constitute legal advice. For specific legal interpretation, consult
            a qualified lawyer.
          </p>
        </main>
      </div>
    </Layout>
  );
}
