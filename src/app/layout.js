import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>DB query demo</h1>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/Reviews">Reviewss</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>

        {children}

        <footer>
          <p>&copy; Booooooooo</p>
        </footer>
      </body>
    </html>
  );
}
